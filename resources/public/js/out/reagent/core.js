// Compiled by ClojureScript 1.7.170 {}
goog.provide('reagent.core');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.component');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('cljsjs.react');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.debug');
reagent.core.is_client = reagent.impl.util.is_client;
/**
 * Create a native React element, by calling React.createElement directly.
 * 
 * That means the second argument must be a javascript object (or nil), and
 * that any Reagent hiccup forms must be processed with as-element. For example
 * like this:
 * 
 * (r/create-element "div" #js{:className "foo"}
 *    "Hi " (r/as-element [:strong "world!"])
 * 
 * which is equivalent to
 * 
 * [:div.foo "Hi" [:strong "world!"]]
 */
reagent.core.create_element = (function reagent$core$create_element(var_args){
<<<<<<< HEAD
var args7069 = [];
var len__5729__auto___7076 = arguments.length;
var i__5730__auto___7077 = (0);
while(true){
if((i__5730__auto___7077 < len__5729__auto___7076)){
args7069.push((arguments[i__5730__auto___7077]));

var G__7078 = (i__5730__auto___7077 + (1));
i__5730__auto___7077 = G__7078;
=======
var args6147 = [];
var len__5729__auto___6154 = arguments.length;
var i__5730__auto___6155 = (0);
while(true){
if((i__5730__auto___6155 < len__5729__auto___6154)){
args6147.push((arguments[i__5730__auto___6155]));

var G__6156 = (i__5730__auto___6155 + (1));
i__5730__auto___6155 = G__6156;
>>>>>>> origin/step1
continue;
} else {
}
break;
}

<<<<<<< HEAD
var G__7075 = args7069.length;
switch (G__7075) {
=======
var G__6153 = args6147.length;
switch (G__6153) {
>>>>>>> origin/step1
case 1:
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
<<<<<<< HEAD
var argseq__5748__auto__ = (new cljs.core.IndexedSeq(args7069.slice((3)),(0)));
=======
var argseq__5748__auto__ = (new cljs.core.IndexedSeq(args6147.slice((3)),(0)));
>>>>>>> origin/step1
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5748__auto__);

}
});

reagent.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (type){
return reagent.core.create_element.call(null,type,null);
});

reagent.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,props){
if(!(cljs.core.map_QMARK_.call(null,props))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"props","props",2093813254,null)))))].join('')));
}

return React.createElement(type,props);
});

reagent.core.create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,props,child){
if(!(cljs.core.map_QMARK_.call(null,props))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"props","props",2093813254,null)))))].join('')));
}

return React.createElement(type,props,child);
});

reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,child,children){
if(!(cljs.core.map_QMARK_.call(null,props))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"props","props",2093813254,null)))))].join('')));
}

return cljs.core.apply.call(null,React.createElement,type,props,child,children);
});

<<<<<<< HEAD
reagent.core.create_element.cljs$lang$applyTo = (function (seq7070){
var G__7071 = cljs.core.first.call(null,seq7070);
var seq7070__$1 = cljs.core.next.call(null,seq7070);
var G__7072 = cljs.core.first.call(null,seq7070__$1);
var seq7070__$2 = cljs.core.next.call(null,seq7070__$1);
var G__7073 = cljs.core.first.call(null,seq7070__$2);
var seq7070__$3 = cljs.core.next.call(null,seq7070__$2);
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic(G__7071,G__7072,G__7073,seq7070__$3);
=======
reagent.core.create_element.cljs$lang$applyTo = (function (seq6148){
var G__6149 = cljs.core.first.call(null,seq6148);
var seq6148__$1 = cljs.core.next.call(null,seq6148);
var G__6150 = cljs.core.first.call(null,seq6148__$1);
var seq6148__$2 = cljs.core.next.call(null,seq6148__$1);
var G__6151 = cljs.core.first.call(null,seq6148__$2);
var seq6148__$3 = cljs.core.next.call(null,seq6148__$2);
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic(G__6149,G__6150,G__6151,seq6148__$3);
>>>>>>> origin/step1
});

reagent.core.create_element.cljs$lang$maxFixedArity = (3);
/**
 * Turns a vector of Hiccup syntax into a React element. Returns form unchanged if it is not a vector.
 */
reagent.core.as_element = (function reagent$core$as_element(form){
return reagent.impl.template.as_element.call(null,form);
});
/**
 * Returns an adapter for a native React class, that may be used
 * just like a Reagent component function or class in Hiccup forms.
 */
reagent.core.adapt_react_class = (function reagent$core$adapt_react_class(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"c","c",-122660552,null)))].join('')));
}

return reagent.impl.template.adapt_react_class.call(null,c);
});
/**
 * Returns an adapter for a Reagent component, that may be used from
 *   React, for example in JSX. A single argument, props, is passed to
 *   the component, converted to a map.
 */
reagent.core.reactify_component = (function reagent$core$reactify_component(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"c","c",-122660552,null)))].join('')));
}

return reagent.impl.component.reactify_component.call(null,c);
});
/**
 * Render a Reagent component into the DOM. The first argument may be 
 * either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 * Optionally takes a callback that is called when the component is in place.
 * 
 * Returns the mounted component instance.
 */
reagent.core.render = (function reagent$core$render(var_args){
<<<<<<< HEAD
var args7080 = [];
var len__5729__auto___7083 = arguments.length;
var i__5730__auto___7084 = (0);
while(true){
if((i__5730__auto___7084 < len__5729__auto___7083)){
args7080.push((arguments[i__5730__auto___7084]));

var G__7085 = (i__5730__auto___7084 + (1));
i__5730__auto___7084 = G__7085;
=======
var args6158 = [];
var len__5729__auto___6161 = arguments.length;
var i__5730__auto___6162 = (0);
while(true){
if((i__5730__auto___6162 < len__5729__auto___6161)){
args6158.push((arguments[i__5730__auto___6162]));

var G__6163 = (i__5730__auto___6162 + (1));
i__5730__auto___6162 = G__6163;
>>>>>>> origin/step1
continue;
} else {
}
break;
}

<<<<<<< HEAD
var G__7082 = args7080.length;
switch (G__7082) {
=======
var G__6160 = args6158.length;
switch (G__6160) {
>>>>>>> origin/step1
case 2:
return reagent.core.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.core.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
<<<<<<< HEAD
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7080.length)].join('')));
=======
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6158.length)].join('')));
>>>>>>> origin/step1

}
});

reagent.core.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.core.render.call(null,comp,container,null);
});

reagent.core.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
var f = (function (){
return reagent.core.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.impl.util.render_component.call(null,f,container,callback);
});

reagent.core.render.cljs$lang$maxFixedArity = 3;
/**
 * Remove a component from the given DOM node.
 */
reagent.core.unmount_component_at_node = (function reagent$core$unmount_component_at_node(container){
return reagent.impl.util.unmount_component_at_node.call(null,container);
});
/**
 * Turns a component into an HTML string.
 */
reagent.core.render_to_string = (function reagent$core$render_to_string(component){
<<<<<<< HEAD
var _STAR_non_reactive_STAR_7088 = reagent.impl.component._STAR_non_reactive_STAR_;
reagent.impl.component._STAR_non_reactive_STAR_ = true;

try{return (React["renderToString"])(reagent.core.as_element.call(null,component));
}finally {reagent.impl.component._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR_7088;
=======
var _STAR_non_reactive_STAR_6166 = reagent.impl.component._STAR_non_reactive_STAR_;
reagent.impl.component._STAR_non_reactive_STAR_ = true;

try{return (React["renderToString"])(reagent.core.as_element.call(null,component));
}finally {reagent.impl.component._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR_6166;
>>>>>>> origin/step1
}});
reagent.core.as_component = reagent.core.as_element;
reagent.core.render_component = reagent.core.render;
reagent.core.render_component_to_string = reagent.core.render_to_string;
/**
 * Turns a component into an HTML string, without data-react-id attributes, etc.
 */
reagent.core.render_to_static_markup = (function reagent$core$render_to_static_markup(component){
<<<<<<< HEAD
var _STAR_non_reactive_STAR_7090 = reagent.impl.component._STAR_non_reactive_STAR_;
reagent.impl.component._STAR_non_reactive_STAR_ = true;

try{return (React["renderToStaticMarkup"])(reagent.core.as_element.call(null,component));
}finally {reagent.impl.component._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR_7090;
=======
var _STAR_non_reactive_STAR_6168 = reagent.impl.component._STAR_non_reactive_STAR_;
reagent.impl.component._STAR_non_reactive_STAR_ = true;

try{return (React["renderToStaticMarkup"])(reagent.core.as_element.call(null,component));
}finally {reagent.impl.component._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR_6168;
>>>>>>> origin/step1
}});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.core.force_update_all = (function reagent$core$force_update_all(){
return reagent.impl.util.force_update_all.call(null);
});
goog.exportSymbol('reagent.core.force_update_all', reagent.core.force_update_all);
/**
 * Create a component, React style. Should be called with a map,
 * looking like this:
 * {:get-initial-state (fn [this])
 * :component-will-receive-props (fn [this new-argv])
 * :should-component-update (fn [this old-argv new-argv])
 * :component-will-mount (fn [this])
 * :component-did-mount (fn [this])
 * :component-will-update (fn [this new-argv])
 * :component-did-update (fn [this old-argv])
 * :component-will-unmount (fn [this])
 * :reagent-render (fn [args....])   ;; or :render (fn [this])
 * }
 * 
 * Everything is optional, except either :reagent-render or :render.
 */
reagent.core.create_class = (function reagent$core$create_class(spec){
return reagent.impl.component.create_class.call(null,spec);
});
/**
 * Returns the current React component (a.k.a this) in a component
 *   function.
 */
reagent.core.current_component = (function reagent$core$current_component(){
return reagent.impl.component._STAR_current_component_STAR_;
});
/**
 * Returns an atom containing a components state.
 */
reagent.core.state_atom = (function reagent$core$state_atom(this$){
if(cljs.core.truth_(reagent.impl.util.reagent_component_QMARK_.call(null,this$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("util","reagent-component?","util/reagent-component?",1508385933,null),new cljs.core.Symbol(null,"this","this",1028897902,null))))].join('')));
}

return reagent.impl.component.state_atom.call(null,this$);
});
/**
 * Returns the state of a component, as set with replace-state or set-state.
 * Equivalent to (deref (r/state-atom this))
 */
reagent.core.state = (function reagent$core$state(this$){
if(cljs.core.truth_(reagent.impl.util.reagent_component_QMARK_.call(null,this$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("util","reagent-component?","util/reagent-component?",1508385933,null),new cljs.core.Symbol(null,"this","this",1028897902,null))))].join('')));
}

return cljs.core.deref.call(null,reagent.core.state_atom.call(null,this$));
});
/**
 * Set state of a component.
 * Equivalent to (reset! (state-atom this) new-state)
 */
reagent.core.replace_state = (function reagent$core$replace_state(this$,new_state){
if(cljs.core.truth_(reagent.impl.util.reagent_component_QMARK_.call(null,this$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("util","reagent-component?","util/reagent-component?",1508385933,null),new cljs.core.Symbol(null,"this","this",1028897902,null))))].join('')));
}

if(((new_state == null)) || (cljs.core.map_QMARK_.call(null,new_state))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"new-state","new-state",1150182315,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"new-state","new-state",1150182315,null)))))].join('')));
}

return cljs.core.reset_BANG_.call(null,reagent.core.state_atom.call(null,this$),new_state);
});
/**
 * Merge component state with new-state.
 * Equivalent to (swap! (state-atom this) merge new-state)
 */
reagent.core.set_state = (function reagent$core$set_state(this$,new_state){
if(cljs.core.truth_(reagent.impl.util.reagent_component_QMARK_.call(null,this$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("util","reagent-component?","util/reagent-component?",1508385933,null),new cljs.core.Symbol(null,"this","this",1028897902,null))))].join('')));
}

if(((new_state == null)) || (cljs.core.map_QMARK_.call(null,new_state))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"new-state","new-state",1150182315,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"new-state","new-state",1150182315,null)))))].join('')));
}

return cljs.core.swap_BANG_.call(null,reagent.core.state_atom.call(null,this$),cljs.core.merge,new_state);
});
/**
 * Force a component to re-render immediately.
 * 
 *   If the second argument is true, child components will also be
 *   re-rendered, even is their arguments have not changed.
 */
reagent.core.force_update = (function reagent$core$force_update(var_args){
<<<<<<< HEAD
var args7091 = [];
var len__5729__auto___7094 = arguments.length;
var i__5730__auto___7095 = (0);
while(true){
if((i__5730__auto___7095 < len__5729__auto___7094)){
args7091.push((arguments[i__5730__auto___7095]));

var G__7096 = (i__5730__auto___7095 + (1));
i__5730__auto___7095 = G__7096;
=======
var args6169 = [];
var len__5729__auto___6172 = arguments.length;
var i__5730__auto___6173 = (0);
while(true){
if((i__5730__auto___6173 < len__5729__auto___6172)){
args6169.push((arguments[i__5730__auto___6173]));

var G__6174 = (i__5730__auto___6173 + (1));
i__5730__auto___6173 = G__6174;
>>>>>>> origin/step1
continue;
} else {
}
break;
}

<<<<<<< HEAD
var G__7093 = args7091.length;
switch (G__7093) {
=======
var G__6171 = args6169.length;
switch (G__6171) {
>>>>>>> origin/step1
case 1:
return reagent.core.force_update.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.core.force_update.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
<<<<<<< HEAD
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7091.length)].join('')));
=======
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6169.length)].join('')));
>>>>>>> origin/step1

}
});

reagent.core.force_update.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return reagent.core.force_update.call(null,this$,false);
});

reagent.core.force_update.cljs$core$IFn$_invoke$arity$2 = (function (this$,deep){
return reagent.impl.util.force_update.call(null,this$,deep);
});

reagent.core.force_update.cljs$lang$maxFixedArity = 2;
/**
 * Returns the props passed to a component.
 */
reagent.core.props = (function reagent$core$props(this$){
if(cljs.core.truth_(reagent.impl.util.reagent_component_QMARK_.call(null,this$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("util","reagent-component?","util/reagent-component?",1508385933,null),new cljs.core.Symbol(null,"this","this",1028897902,null))))].join('')));
}

return reagent.impl.util.get_props.call(null,this$);
});
/**
 * Returns the children passed to a component.
 */
reagent.core.children = (function reagent$core$children(this$){
if(cljs.core.truth_(reagent.impl.util.reagent_component_QMARK_.call(null,this$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("util","reagent-component?","util/reagent-component?",1508385933,null),new cljs.core.Symbol(null,"this","this",1028897902,null))))].join('')));
}

return reagent.impl.util.get_children.call(null,this$);
});
/**
 * Returns the entire Hiccup form passed to the component.
 */
reagent.core.argv = (function reagent$core$argv(this$){
if(cljs.core.truth_(reagent.impl.util.reagent_component_QMARK_.call(null,this$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("util","reagent-component?","util/reagent-component?",1508385933,null),new cljs.core.Symbol(null,"this","this",1028897902,null))))].join('')));
}

return reagent.impl.util.get_argv.call(null,this$);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.core.dom_node = (function reagent$core$dom_node(this$){
return (this$["getDOMNode"])();
});
/**
 * Utility function that merges two maps, handling :class and :style
 * specially, like React's transferPropsTo.
 */
reagent.core.merge_props = (function reagent$core$merge_props(defaults,props){
return reagent.impl.util.merge_props.call(null,defaults,props);
});
/**
 * Render dirty components immediately to the DOM.
 * 
 * Note that this may not work in event handlers, since React.js does
 * batching of updates there.
 */
reagent.core.flush = (function reagent$core$flush(){
return reagent.impl.batching.flush.call(null);
});
/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 * Reagent components that derefs one of these are automatically
 * re-rendered.
 */
reagent.core.atom = (function reagent$core$atom(var_args){
<<<<<<< HEAD
var args7098 = [];
var len__5729__auto___7103 = arguments.length;
var i__5730__auto___7104 = (0);
while(true){
if((i__5730__auto___7104 < len__5729__auto___7103)){
args7098.push((arguments[i__5730__auto___7104]));

var G__7105 = (i__5730__auto___7104 + (1));
i__5730__auto___7104 = G__7105;
=======
var args6176 = [];
var len__5729__auto___6181 = arguments.length;
var i__5730__auto___6182 = (0);
while(true){
if((i__5730__auto___6182 < len__5729__auto___6181)){
args6176.push((arguments[i__5730__auto___6182]));

var G__6183 = (i__5730__auto___6182 + (1));
i__5730__auto___6182 = G__6183;
>>>>>>> origin/step1
continue;
} else {
}
break;
}

<<<<<<< HEAD
var G__7102 = args7098.length;
switch (G__7102) {
=======
var G__6180 = args6176.length;
switch (G__6180) {
>>>>>>> origin/step1
case 1:
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
<<<<<<< HEAD
var argseq__5748__auto__ = (new cljs.core.IndexedSeq(args7098.slice((1)),(0)));
=======
var argseq__5748__auto__ = (new cljs.core.IndexedSeq(args6176.slice((1)),(0)));
>>>>>>> origin/step1
return reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5748__auto__);

}
});

reagent.core.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return reagent.ratom.atom.call(null,x);
});

reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,rest){
return cljs.core.apply.call(null,reagent.ratom.atom,x,rest);
});

<<<<<<< HEAD
reagent.core.atom.cljs$lang$applyTo = (function (seq7099){
var G__7100 = cljs.core.first.call(null,seq7099);
var seq7099__$1 = cljs.core.next.call(null,seq7099);
return reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic(G__7100,seq7099__$1);
=======
reagent.core.atom.cljs$lang$applyTo = (function (seq6177){
var G__6178 = cljs.core.first.call(null,seq6177);
var seq6177__$1 = cljs.core.next.call(null,seq6177);
return reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic(G__6178,seq6177__$1);
>>>>>>> origin/step1
});

reagent.core.atom.cljs$lang$maxFixedArity = (1);
/**
 * Provide a combination of value and callback, that looks like an atom.
 * 
 *   The first argument can be any value, that will be returned when the
 *   result is deref'ed.
 * 
 *   The second argument should be a function, that is called with the
 *   optional extra arguments provided to wrap, and the new value of the
 *   resulting 'atom'.
 * 
 *   Use for example like this:
 * 
 *   (wrap (:foo @state)
 *      swap! state assoc :foo)
 * 
 *   Probably useful only for passing to child components.
 */
reagent.core.wrap = (function reagent$core$wrap(var_args){
var args__5736__auto__ = [];
<<<<<<< HEAD
var len__5729__auto___7110 = arguments.length;
var i__5730__auto___7111 = (0);
while(true){
if((i__5730__auto___7111 < len__5729__auto___7110)){
args__5736__auto__.push((arguments[i__5730__auto___7111]));

var G__7112 = (i__5730__auto___7111 + (1));
i__5730__auto___7111 = G__7112;
=======
var len__5729__auto___6188 = arguments.length;
var i__5730__auto___6189 = (0);
while(true){
if((i__5730__auto___6189 < len__5729__auto___6188)){
args__5736__auto__.push((arguments[i__5730__auto___6189]));

var G__6190 = (i__5730__auto___6189 + (1));
i__5730__auto___6189 = G__6190;
>>>>>>> origin/step1
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((2) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((2)),(0))):null);
return reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5737__auto__);
});

reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic = (function (value,reset_fn,args){
if(cljs.core.ifn_QMARK_.call(null,reset_fn)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"reset-fn","reset-fn",949643977,null))))].join('')));
}

return reagent.ratom.make_wrapper.call(null,value,reset_fn,args);
});

reagent.core.wrap.cljs$lang$maxFixedArity = (2);

<<<<<<< HEAD
reagent.core.wrap.cljs$lang$applyTo = (function (seq7107){
var G__7108 = cljs.core.first.call(null,seq7107);
var seq7107__$1 = cljs.core.next.call(null,seq7107);
var G__7109 = cljs.core.first.call(null,seq7107__$1);
var seq7107__$2 = cljs.core.next.call(null,seq7107__$1);
return reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic(G__7108,G__7109,seq7107__$2);
=======
reagent.core.wrap.cljs$lang$applyTo = (function (seq6185){
var G__6186 = cljs.core.first.call(null,seq6185);
var seq6185__$1 = cljs.core.next.call(null,seq6185);
var G__6187 = cljs.core.first.call(null,seq6185__$1);
var seq6185__$2 = cljs.core.next.call(null,seq6185__$1);
return reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic(G__6186,G__6187,seq6185__$2);
>>>>>>> origin/step1
});
/**
 * Provide a cursor into a Reagent atom.
 * 
 * Behaves like a Reagent atom but focuses updates and derefs to
 * the specified path within the wrapped Reagent atom. e.g.,
 *   (let [c (cursor ra [:nested :content])]
 *  ... @c ;; equivalent to (get-in @ra [:nested :content])
 *  ... (reset! c 42) ;; equivalent to (swap! ra assoc-in [:nested :content] 42)
 *  ... (swap! c inc) ;; equivalence to (swap! ra update-in [:nested :content] inc)
 *  )
 * 
 * The first parameter can also be a function, that should look something
 * like this:
 * 
 * (defn set-get
 *   ([k] (get-in @state k))
 *   ([k v] (swap! state assoc-in k v)))
 * 
 * The function will be called with one argument – the path passed to
 * cursor – when the cursor is deref'ed, and two arguments (path and new
 * value) when the cursor is modified.
 * 
 * Given that set-get function, (and that state is a Reagent atom, or
 * another cursor) these cursors are equivalent:
 * (cursor state [:foo]) and (cursor set-get [:foo]).
 */
reagent.core.cursor = (function reagent$core$cursor(src,path){
return reagent.ratom.cursor.call(null,src,path);
});
/**
 * Run f using requestAnimationFrame or equivalent.
 */
reagent.core.next_tick = (function reagent$core$next_tick(f){
return reagent.impl.batching.next_tick.call(null,f);
});
/**
 * Works just like clojure.core/partial, except that it is an IFn, and
 * the result can be compared with =
 */
reagent.core.partial = (function reagent$core$partial(var_args){
var args__5736__auto__ = [];
<<<<<<< HEAD
var len__5729__auto___7115 = arguments.length;
var i__5730__auto___7116 = (0);
while(true){
if((i__5730__auto___7116 < len__5729__auto___7115)){
args__5736__auto__.push((arguments[i__5730__auto___7116]));

var G__7117 = (i__5730__auto___7116 + (1));
i__5730__auto___7116 = G__7117;
=======
var len__5729__auto___6193 = arguments.length;
var i__5730__auto___6194 = (0);
while(true){
if((i__5730__auto___6194 < len__5729__auto___6193)){
args__5736__auto__.push((arguments[i__5730__auto___6194]));

var G__6195 = (i__5730__auto___6194 + (1));
i__5730__auto___6194 = G__6195;
>>>>>>> origin/step1
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((1) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((1)),(0))):null);
return reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5737__auto__);
});

reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return (new reagent.impl.util.partial_ifn(f,args,null));
});

reagent.core.partial.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
reagent.core.partial.cljs$lang$applyTo = (function (seq7113){
var G__7114 = cljs.core.first.call(null,seq7113);
var seq7113__$1 = cljs.core.next.call(null,seq7113);
return reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic(G__7114,seq7113__$1);
=======
reagent.core.partial.cljs$lang$applyTo = (function (seq6191){
var G__6192 = cljs.core.first.call(null,seq6191);
var seq6191__$1 = cljs.core.next.call(null,seq6191);
return reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic(G__6192,seq6191__$1);
>>>>>>> origin/step1
});
reagent.core.component_path = (function reagent$core$component_path(c){
return reagent.impl.component.component_path.call(null,c);
});

//# sourceMappingURL=core.js.map