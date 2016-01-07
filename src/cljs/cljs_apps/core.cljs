(ns cljs-apps.core
  (:require-macros [secretary.core :refer [defroute]])
  (:require [goog.events :as events]
            [goog.dom :as dom]
            [goog.history.EventType :as EventType]
            [bouncer.core :as b] ;; in core.clj
            [bouncer.validators :as v]
            [secretary.core :as secretary]
            [reagent.core :as reagent :refer [atom render]])
  (:import goog.History))


;; ---------------------------------------------------------------------------
;; genric functions

;; input-element
(defn input-element
  "An input element which updates its value on change"
  [id name type value in-focus]
  [:input#id.form-control {:name name
                           :type type
                           :required ""
                           :value @value
                           :on-change #(reset! value (-> % .-target .-value))
                           ;; Below we change the state of in-focus
                           :on-focus #(swap! in-focus not)
                           :on-blur #(swap! in-focus not)
                           }])

(defn input-and-prompt
  "Creates an input box and a prompt box that appears above the input comes into focus."
  [label-value input-name input-type input-element-arg prompt-element required?]
  (let [input-focus (reagent/atom false)]
    (fn []
      [:div
       [:label label-value]
       (if @input-focus
         prompt-element
         [:div])
       [input-element input-name input-name input-type input-element-arg input-focus]
       (if (and required? (= "" @input-element-arg))
         [:div [:code  "Field is required!"]]
         [:div])])))

;; prompt-message
(defn prompt-message
  "A prompt that will animate to help the user with a given input"
  [message]
  [:div {:class "my-message"}
   [:div {:class "prompt message-animation"} [:p message]]])


;; Finally, notice that password-form, input-form etc.
;; aren’t in a form-group class. Let’s fix that. We create the following function:
(defn wrap-as-element-in-form
  [element]
  [:div {:class="row form-group"}
   element])


;;-------------------------------------------------------------------------------
;;Applying Additional validation on the password

(defn check-nil-then-predicate
  "Check if the value is nil, then apply the predicate"
  [value predicate]
  (if (nil? value)
    false
    (predicate value)))

(defn eight-or-more-characters?
  [word]
  (check-nil-then-predicate word (fn [arg] (> count arg) 7)))

(defn has-special-character?
  [word]
  (check-nil-then-predicate word (fn [arg]
                                   (boolean (first (re-seq #"\w+" arg))))))

(defn has-number?
  [word]
  (check-nil-then-predicate word (fn [arg]
                                   (boolean (re-seq #"\d+" arg)))))

(defn password-requirements
  "A list to describe which password requirements have been met so far"
  [password requirements]
  [:div
   [:ul (->> requirements
             (filter (fn [req] (not ((:check-fn req) @password))))
             (doall)
             (map (fn [req] ^{:key req} [:li (:message req)])))]])

;; -----------------------------------------------------------------------------
;; declared input-elements
(defn email-form  [email-atom]
  (input-and-prompt  "email"
                     "email"
                     "email"
                     email-atom
                     (prompt-message "What's your email?")
                     true))

(defn name-form  [name-atom]
  (input-and-prompt  "name"
                     "name"
                     "text"
                     name-atom
                     (prompt-message "What's your name?")
                     true))

(defn password-form
  [password]
  (let [password-type-atom (reagent/atom "password")]
    (fn []
      [:div
       [(input-and-prompt  "password"
                           "password"
                           @password-type-atom
                           password
                           (prompt-message "What's your password?")
                           true)]
       [password-requirements
        password [{:message "8 or more characters" :check-fn eight-or-more-characters?}
                  {:message "At least one special character" :check-fn has-special-character?}
                  {:message "At least one number" :check-fn has-number?}]]])))



;; ------------------------------------------------------------------------------
;; views pages

(defn home-page []
  ;; we define a email-address as an atom right here
  (let [email-address (reagent/atom nil)
        name (reagent/atom nil)
        password (reagent/atom nil)]
    (fn []
      [:div.container
       [:div.signup-form
        [:h2 "Simple login-form"]
        [:form
         ;;we the email-input component here
         (wrap-as-element-in-form [email-form email-address] )
         (wrap-as-element-in-form [name-form name])
         (wrap-as-element-in-form [password-form password])]]])))

;; ------------------------------------------------------------------------------
;; Rendering

(defn render-simple []
  (reagent/render [home-page]
                  (.-body js/document)))
(render-simple)
