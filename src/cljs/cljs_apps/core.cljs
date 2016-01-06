(ns cljs-apps.core
  (:require [goog.events :as events]
            [goog.dom :as dom]
            [goog.history.EventType :as EventType]
            [bouncer.core :as b] ;; in core.clj
            [bouncer.validators :as v]
            [secretary.core :as secretary :refer-macros [defroute]]
            [reagent.core :as reagent :refer [atom render]]
            )
  (:import goog.History))
