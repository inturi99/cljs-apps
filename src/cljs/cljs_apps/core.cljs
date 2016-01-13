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


(defn validator [data-set]
  (first (b/validate data-set
                     :user-name [[v/required :message "Filed is required"]
                                 [v/string :message "Enter valid user name"]]
                     :email [[v/required :message "Filed is required"]
                             [v/email :message "Enter valid email-id"]]
                     :password [[v/required :message "Filed is required"]
                                [v/string  :message "Enter valid password"]])))


(defn input-element [id ttype data-set in-focus]
  [:input#id.form-control {:type ttype
                           :value (@data-set id)
                           :on-change #(swap! data-set assoc id (-> % .-target .-value))
                           :on-blur  #(reset! in-focus "on")
                           }])

(defn input-validate [id label ttype data-set]
  (let [input-focus (reagent/atom nil)]
    (fn []
      [:div
       [:label label]
       [input-element id ttype data-set input-focus]
       (if @input-focus
         (if (= nil (validator @data-set))
           [:div]
           [:div {:style  {:color "red"}}
            (str (first ((validator @data-set) id)))]  )
         [:div])
       ])))



(defn home []
  (let [my-data (reagent/atom  { })]
    (fn []
      [:div.container
       [:div.page-header
        [:h2 "Form validation using Bouncer Library"]]
       [input-validate :user-name "User name" "text"  my-data]
       [input-validate :email "email-id" "email" my-data]
       [input-validate :password "Password" "password" my-data]
       [:button.btn.btn-primary {:type "button"
                                 :on-click  (fn []
                                              (if (= nil (validator @my-data))
                                                (js/alert "You are successfully Registered")
                                                (js/alert "please enter valid inputs")))}
        "Submit"]
       [:div
       [:label (str @my-data)]]])))


(defn render-sample []
  (reagent/render-component [home]
                            (.getElementById js/document "app")))

(render-sample)
