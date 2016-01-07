// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs_apps.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('bouncer.validators');
goog.require('bouncer.core');
goog.require('goog.history.EventType');
goog.require('goog.History');
goog.require('goog.events');
<<<<<<< HEAD
=======
/**
 * An input element which updates its value on change
 */
cljs_apps.core.input_element = (function cljs_apps$core$input_element(id,name,type,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#id.form-control","input#id.form-control",1403497366),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"required","required",1807647006),"",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__6794_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__6794_SHARP_.target.value);
})], null)], null);
});
/**
 * A prompt that will animate to help the user with a given input
 */
cljs_apps.core.prompt_message = (function cljs_apps$core$prompt_message(message){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"my-message"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"prompt message-animation"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),message], null)], null)], null);
});
cljs_apps.core.email_input = (function cljs_apps$core$email_input(email_address_atom){
return cljs_apps.core.input_element.call(null,"email","email","email",email_address_atom);
});
cljs_apps.core.home_page = (function cljs_apps$core$home_page(){
var email_address = reagent.core.atom.call(null,null);
return ((function (email_address){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.signup-form","div.signup-form",615141950),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Simplelogin-form"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_apps.core.email_input,email_address], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"EMAIL ADDRESS IS ",cljs.core.deref.call(null,email_address)], null)], null)], null);
});
;})(email_address))
});
cljs_apps.core.render_simple = (function cljs_apps$core$render_simple(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_apps.core.home_page], null),document.body);
});
cljs_apps.core.render_simple.call(null);
>>>>>>> origin/step1

//# sourceMappingURL=core.js.map