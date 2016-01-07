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
/**
 * An input element which updates its value on change
 */
cljs_apps.core.input_element = (function cljs_apps$core$input_element(id,name,type,value,in_focus){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#id.form-control","input#id.form-control",1403497366),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"required","required",1807647006),"",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__7893_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__7893_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (){
return cljs.core.swap_BANG_.call(null,in_focus,cljs.core.not);
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return cljs.core.swap_BANG_.call(null,in_focus,cljs.core.not);
})], null)], null);
});
/**
 * Creates an input box and a prompt box that appears above the input comes into focus.
 */
cljs_apps.core.input_and_prompt = (function cljs_apps$core$input_and_prompt(label_value,input_name,input_type,input_element_arg,prompt_element){
var input_focus = reagent.core.atom.call(null,false);
return ((function (input_focus){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label_value], null),(cljs.core.truth_(cljs.core.deref.call(null,input_focus))?prompt_element:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_apps.core.input_element,input_name,input_name,input_type,input_element_arg,input_focus], null)], null);
});
;})(input_focus))
});
/**
 * A prompt that will animate to help the user with a given input
 */
cljs_apps.core.prompt_message = (function cljs_apps$core$prompt_message(message){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"my-message"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"prompt message-animation"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),message], null)], null)], null);
});
cljs_apps.core.email_form = (function cljs_apps$core$email_form(email_address_atom){
return cljs_apps.core.input_and_prompt.call(null,"email","email","email",email_address_atom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_apps.core.prompt_message,"What's your email?"], null));
});
cljs_apps.core.home_page = (function cljs_apps$core$home_page(){
var email_address = reagent.core.atom.call(null,null);
return ((function (email_address){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.signup-form","div.signup-form",615141950),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Simple login-form"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_apps.core.email_form,email_address], null)], null)], null)], null);
});
;})(email_address))
});
cljs_apps.core.render_simple = (function cljs_apps$core$render_simple(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_apps.core.home_page], null),document.body);
});
cljs_apps.core.render_simple.call(null);

//# sourceMappingURL=core.js.map