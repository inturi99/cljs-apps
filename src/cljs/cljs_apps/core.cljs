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



;; -----------------------------------------------------------------------------
;; declared input-elements
(defn email-form
  [email-address-atom]
  (input-and-prompt  "email"
                     "email"
                     "email"
                     email-address-atom
                     [prompt-message "What's your email?"]
                     true))


;; ------------------------------------------------------------------------------
;; views pages

(defn home-page []
  ;; we define a email-address as an atom right here
  (let [email-address (reagent/atom nil)]
    (fn []
      [:div.container
       [:div.signup-form
        [:h2 "Simple login-form"]
        [:form
         ;;we the email-input component here
         [email-form email-address]]]])))

;; ---------------------------------------------------------------------------------
;; Rendering

(defn render-simple []
  (reagent/render [home-page]
                  (.-body js/document)))
(render-simple)
