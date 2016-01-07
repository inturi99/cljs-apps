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
  [id name type value]
  [:input#id.form-control {:name name
                           :type type
                           :required ""
                           :value @value
                           :on-change #(reset! value (-> % .-target .-value))}])

;; prompt-message
(defn prompt-message
  "A prompt that will animate to help the user with a given input"
  [message]
  [:div {:class "my-message"}
   [:div {:class "prompt message-animation"} [:p message]]])



;; -----------------------------------------------------------------------------
;; declared input-elements
(defn email-input
  [email-address-atom]
  (input-element "email" "email" "email" email-address-atom))


;; ------------------------------------------------------------------------------
;; views pages

(defn home-page []
  ;; we define a email-address as an atom right here
  (let [email-address (reagent/atom nil)]
    (fn []
      [:div.container
       [:div.signup-form
        [:h2 "Simplelogin-form"]
        [:form
         ;;we the email-input component here
         [email-input email-address]]
        [:div "EMAIL ADDRESS IS " @email-address]]])))

;; ---------------------------------------------------------------------------------
;; Rendering

(defn render-simple []
  (reagent/render [home-page]
                  (.-body js/document)))
(render-simple)
