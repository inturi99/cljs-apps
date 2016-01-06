(ns cljs-apps.core
  (:require [goog.events :as events]
            [goog.dom :as dom]
            [goog.history.EventType :as EventType]
            [bouncer.core :as b] ;; in core.clj
            [bouncer.validators :as v]
            [secretary.core :as secretary :refer-macros [defroute]]
            [cljs-time.format :as f]
            )
  (:import goog.History))

(js.console.log "Hello world!")
