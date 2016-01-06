// Compiled by ClojureScript 1.7.170 {}
goog.provide('bouncer.core');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
bouncer.core.build_multi_step = (function bouncer$core$build_multi_step(var_args){
var args7278 = [];
var len__5729__auto___7284 = arguments.length;
var i__5730__auto___7285 = (0);
while(true){
if((i__5730__auto___7285 < len__5729__auto___7284)){
args7278.push((arguments[i__5730__auto___7285]));

var G__7286 = (i__5730__auto___7285 + (1));
i__5730__auto___7285 = G__7286;
continue;
} else {
}
break;
}

var G__7280 = args7278.length;
switch (G__7280) {
case 2:
return bouncer.core.build_multi_step.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return bouncer.core.build_multi_step.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7278.length)].join('')));

}
});

bouncer.core.build_multi_step.cljs$core$IFn$_invoke$arity$2 = (function (key_or_vec,fn_vec){
return bouncer.core.build_multi_step.call(null,key_or_vec,fn_vec,cljs.core.PersistentVector.EMPTY);
});

bouncer.core.build_multi_step.cljs$core$IFn$_invoke$arity$3 = (function (key_or_vec,p__7281,acc){
while(true){
var vec__7282 = p__7281;
var f_or_list = cljs.core.nth.call(null,vec__7282,(0),null);
var rest = cljs.core.nthnext.call(null,vec__7282,(1));
if(cljs.core.not.call(null,f_or_list)){
return acc;
} else {
if(cljs.core.sequential_QMARK_.call(null,f_or_list)){
var vec__7283 = f_or_list;
var f = cljs.core.nth.call(null,vec__7283,(0),null);
var opts = cljs.core.nthnext.call(null,vec__7283,(1));
var G__7288 = key_or_vec;
var G__7289 = rest;
var G__7290 = cljs.core.conj.call(null,acc,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,key_or_vec], null),opts));
key_or_vec = G__7288;
p__7281 = G__7289;
acc = G__7290;
continue;
} else {
var G__7291 = key_or_vec;
var G__7292 = rest;
var G__7293 = cljs.core.conj.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f_or_list,key_or_vec], null));
key_or_vec = G__7291;
p__7281 = G__7292;
acc = G__7293;
continue;

}
}
break;
}
});

bouncer.core.build_multi_step.cljs$lang$maxFixedArity = 3;
/**
 * Takes two arguments:
 * 
 *   `parent-keyword` is a :keyword - or a vector of :keywords denoting a path in a associative structure
 * 
 *   `validations-map` is a map of forms following this spec:
 * 
 * 
 *    {:keyword [f g] :another-keyword h}
 * 
 * 
 *   Merges `:parent-keyword` with every first element of validations-map, transforming it into:
 * 
 * 
 *    ([:parent-keyword :keyword] [f g] [:parent-keyword :another-keyword] h)
 */
bouncer.core.merge_path = (function bouncer$core$merge_path(parent_key,validations_map){
var parent_key__$1 = (((parent_key instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_key], null):parent_key);
return cljs.core.mapcat.call(null,((function (parent_key__$1){
return (function (p__7296){
var vec__7297 = p__7296;
var key = cljs.core.nth.call(null,vec__7297,(0),null);
var validations = cljs.core.nth.call(null,vec__7297,(1),null);
if(cljs.core.vector_QMARK_.call(null,key)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.vector,cljs.core.concat.call(null,parent_key__$1,key)),validations], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.vector,cljs.core.concat.call(null,parent_key__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null))),validations], null);
}
});})(parent_key__$1))
,validations_map);
});
bouncer.core.build_steps = (function bouncer$core$build_steps(p__7298){
var vec__7302 = p__7298;
var head = cljs.core.nth.call(null,vec__7302,(0),null);
var tail = cljs.core.nthnext.call(null,vec__7302,(1));
var forms = vec__7302;
var forms__$1 = ((cljs.core.map_QMARK_.call(null,head))?cljs.core.vec.call(null,cljs.core.mapcat.call(null,cljs.core.identity,head)):forms);
return cljs.core.reduce.call(null,((function (forms__$1,vec__7302,head,tail,forms){
return (function (acc,p__7303){
var vec__7304 = p__7303;
var key_or_vec = cljs.core.nth.call(null,vec__7304,(0),null);
var sym_or_coll = cljs.core.nth.call(null,vec__7304,(1),null);
var rule = vec__7304;
if(cljs.core.vector_QMARK_.call(null,sym_or_coll)){
return cljs.core.concat.call(null,acc,bouncer.core.build_multi_step.call(null,key_or_vec,sym_or_coll));
} else {
if(cljs.core.map_QMARK_.call(null,sym_or_coll)){
return cljs.core.concat.call(null,acc,bouncer$core$build_steps.call(null,bouncer.core.merge_path.call(null,key_or_vec,sym_or_coll)));
} else {
return cljs.core.conj.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym_or_coll,key_or_vec], null));

}
}
});})(forms__$1,vec__7302,head,tail,forms))
,cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,(2),forms__$1));
});
bouncer.core.pre_condition_met_QMARK_ = (function bouncer$core$pre_condition_met_QMARK_(pre_fn,map){
var or__4671__auto__ = (pre_fn == null);
if(or__4671__auto__){
return or__4671__auto__;
} else {
return pre_fn.call(null,map);
}
});
/**
 * Wraps pred in the context of validating a single value
 * 
 *   - `acc`  is the map being validated
 * 
 *   - `pred` is a validator
 * 
 *   - `k`    the path to the value to be validated in the associative structure `acc`
 * 
 *   - `args` any extra args to pred
 * 
 *   It only runs pred if:
 * 
 *   - the validator contains a pre-condition *and* it is met or;
 *   - the validator is optional  *and* there is a non-nil value to be validated (this information is read from pred's metadata) or;
 *   - there are no previous errors for the given path
 * 
 *   Returns `acc` augmented with a namespace qualified ::errors keyword
 */
bouncer.core.wrap = (function bouncer$core$wrap(message_fn,acc,p__7306){
var vec__7313 = p__7306;
var pred = cljs.core.nth.call(null,vec__7313,(0),null);
var k = cljs.core.nth.call(null,vec__7313,(1),null);
var args = cljs.core.nthnext.call(null,vec__7313,(2));
var k__$1 = ((cljs.core.vector_QMARK_.call(null,k))?k:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var error_path = cljs.core.cons.call(null,new cljs.core.Keyword("bouncer.core","errors","bouncer.core/errors",-444562289),k__$1);
var map__7314 = cljs.core.meta.call(null,pred);
var map__7314__$1 = ((((!((map__7314 == null)))?((((map__7314.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7314.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7314):map__7314);
var metadata = map__7314__$1;
var optional = cljs.core.get.call(null,map__7314__$1,new cljs.core.Keyword(null,"optional","optional",2053951509),false);
var default_message_format = cljs.core.get.call(null,map__7314__$1,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"Custom validation failed for %s");
var meta_with_defaults = cljs.core.merge.call(null,metadata,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),default_message_format,new cljs.core.Keyword(null,"optional","optional",2053951509),optional], null));
var vec__7315 = cljs.core.split_with.call(null,cljs.core.complement.call(null,cljs.core.keyword_QMARK_),args);
var args__$1 = cljs.core.nth.call(null,vec__7315,(0),null);
var opts = cljs.core.nth.call(null,vec__7315,(1),null);
var map__7316 = cljs.core.apply.call(null,cljs.core.hash_map,opts);
var map__7316__$1 = ((((!((map__7316 == null)))?((((map__7316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7316):map__7316);
var message = cljs.core.get.call(null,map__7316__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var pre = cljs.core.get.call(null,map__7316__$1,new cljs.core.Keyword(null,"pre","pre",2118456869));
var pred_subject = cljs.core.get_in.call(null,acc,k__$1);
if(cljs.core.truth_(bouncer.core.pre_condition_met_QMARK_.call(null,pre,acc))){
if(cljs.core.truth_((function (){var or__4671__auto__ = (function (){var and__4659__auto__ = optional;
if(cljs.core.truth_(and__4659__auto__)){
return (pred_subject == null);
} else {
return and__4659__auto__;
}
})();
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
var or__4671__auto____$1 = !(cljs.core.empty_QMARK_.call(null,cljs.core.get_in.call(null,acc,error_path)));
if(or__4671__auto____$1){
return or__4671__auto____$1;
} else {
return cljs.core.apply.call(null,pred,pred_subject,args__$1);
}
}
})())){
return acc;
} else {
return cljs.core.update_in.call(null,acc,error_path,((function (k__$1,error_path,map__7314,map__7314__$1,metadata,optional,default_message_format,meta_with_defaults,vec__7315,args__$1,opts,map__7316,map__7316__$1,message,pre,pred_subject,vec__7313,pred,k,args){
return (function (p1__7305_SHARP_){
return cljs.core.conj.call(null,p1__7305_SHARP_,message_fn.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),k__$1,new cljs.core.Keyword(null,"value","value",305978217),pred_subject,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.seq.call(null,args__$1),new cljs.core.Keyword(null,"metadata","metadata",1799301597),meta_with_defaults,new cljs.core.Keyword(null,"message","message",-406056002),message], null)));
});})(k__$1,error_path,map__7314,map__7314__$1,metadata,optional,default_message_format,meta_with_defaults,vec__7315,args__$1,opts,map__7316,map__7316__$1,message,pre,pred_subject,vec__7313,pred,k,args))
);
}
} else {
return acc;
}
});
/**
 * Internal Use.
 * 
 *   Chain of responsibility.
 * 
 *   Takes the current state and a collection of validators `fs`
 * 
 *   Will run all validators against `old-state` and eventually return a vector with the result - the errors map - and the new state - the original map augmented with the errors map.
 * 
 *   See also `wrap`
 */
bouncer.core.wrap_chain = (function bouncer$core$wrap_chain(var_args){
var args__5736__auto__ = [];
var len__5729__auto___7322 = arguments.length;
var i__5730__auto___7323 = (0);
while(true){
if((i__5730__auto___7323 < len__5729__auto___7322)){
args__5736__auto__.push((arguments[i__5730__auto___7323]));

var G__7324 = (i__5730__auto___7323 + (1));
i__5730__auto___7323 = G__7324;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((2) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((2)),(0))):null);
return bouncer.core.wrap_chain.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5737__auto__);
});

bouncer.core.wrap_chain.cljs$core$IFn$_invoke$arity$variadic = (function (old_state,message_fn,fs){
var new_state = cljs.core.reduce.call(null,cljs.core.partial.call(null,bouncer.core.wrap,message_fn),old_state,fs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bouncer.core","errors","bouncer.core/errors",-444562289).cljs$core$IFn$_invoke$arity$1(new_state),new_state], null);
});

bouncer.core.wrap_chain.cljs$lang$maxFixedArity = (2);

bouncer.core.wrap_chain.cljs$lang$applyTo = (function (seq7319){
var G__7320 = cljs.core.first.call(null,seq7319);
var seq7319__$1 = cljs.core.next.call(null,seq7319);
var G__7321 = cljs.core.first.call(null,seq7319__$1);
var seq7319__$2 = cljs.core.next.call(null,seq7319__$1);
return bouncer.core.wrap_chain.cljs$core$IFn$_invoke$arity$variadic(G__7320,G__7321,seq7319__$2);
});
/**
 * Internal use.
 * 
 *   Validates the map m using the validation functions fs.
 * 
 *   Returns a vector where the first element is the map of validation errors if any and the second is the original map (possibly) augmented with the errors map.
 */
bouncer.core.validate_STAR_ = (function bouncer$core$validate_STAR_(message_fn,m,fs){
var G__7330 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,m], null);
var vec__7331 = G__7330;
var errors = cljs.core.nth.call(null,vec__7331,(0),null);
var state = cljs.core.nth.call(null,vec__7331,(1),null);
var ret = vec__7331;
var fs__$1 = fs;
var G__7330__$1 = G__7330;
var fs__$2 = fs__$1;
while(true){
var vec__7332 = G__7330__$1;
var errors__$1 = cljs.core.nth.call(null,vec__7332,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__7332,(1),null);
var ret__$1 = vec__7332;
var fs__$3 = fs__$2;
if(cljs.core.seq.call(null,fs__$3)){
var G__7333 = bouncer.core.wrap_chain.call(null,state__$1,message_fn,cljs.core.first.call(null,fs__$3));
var G__7334 = cljs.core.rest.call(null,fs__$3);
G__7330__$1 = G__7333;
fs__$2 = G__7334;
continue;
} else {
return ret__$1;
}
break;
}
});
/**
 * Use together with `validate`, e.g.:
 * 
 * 
 *    (core/validate core/with-default-messages {}
 *                   :name v/required)
 */
bouncer.core.with_default_messages = (function bouncer$core$with_default_messages(error){
var map__7337 = error;
var map__7337__$1 = ((((!((map__7337 == null)))?((((map__7337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7337):map__7337);
var message = cljs.core.get.call(null,map__7337__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var path = cljs.core.get.call(null,map__7337__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var metadata = cljs.core.get.call(null,map__7337__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));
return goog.string.format((function (){var or__4671__auto__ = message;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141).cljs$core$IFn$_invoke$arity$1(metadata);
}
})(),cljs.core.name.call(null,cljs.core.peek.call(null,path)));
});
/**
 * Takes a
 * 
 *   - `message-fn` (optional) responsible for transforming error metadata into
 *   the validation result (defaults to `with-default-messages`)
 * 
 *   - `m` map to be validated
 * 
 *   - `forms` validations to be performed on the map
 * 
 *   forms can be a single validator set or a sequence of key/value pairs where:
 * 
 *   key   ==> :keyword or [:a :path]
 * 
 *   value ==> validation-function or
 *          validator-set or
 *         [[validation-function args+opts]] or
 *         [validation-function another-validation-function] or
 *         [validation-function [another-validation-function args+opts]]
 * 
 *   e.g.:
 * 
 * 
 *    (core/validate a-map
 *             :name v/required
 *             :age  [v/required
 *                   [v/number :message "age must be a number"]]
 *             [:passport :number] v/positive)
 * 
 * 
 *   Returns a vector where the first element is the map of validation errors if
 *   any and the second is the original map (possibly) augmented with the errors
 *   map.
 * 
 *   See also `defvalidator`
 */
bouncer.core.validate = (function bouncer$core$validate(var_args){
var args__5736__auto__ = [];
var len__5729__auto___7342 = arguments.length;
var i__5730__auto___7343 = (0);
while(true){
if((i__5730__auto___7343 < len__5729__auto___7342)){
args__5736__auto__.push((arguments[i__5730__auto___7343]));

var G__7344 = (i__5730__auto___7343 + (1));
i__5730__auto___7343 = G__7344;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((0) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((0)),(0))):null);
return bouncer.core.validate.cljs$core$IFn$_invoke$arity$variadic(argseq__5737__auto__);
});

bouncer.core.validate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__7340 = ((cljs.core.fn_QMARK_.call(null,cljs.core.first.call(null,args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args),cljs.core.next.call(null,args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.core.with_default_messages,args], null));
var message_fn = cljs.core.nth.call(null,vec__7340,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__7340,(1),null);
var vec__7341 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__$1),cljs.core.next.call(null,args__$1)], null);
var m = cljs.core.nth.call(null,vec__7341,(0),null);
var forms = cljs.core.nth.call(null,vec__7341,(1),null);
return bouncer.core.validate_STAR_.call(null,message_fn,m,bouncer.core.build_steps.call(null,forms));
});

bouncer.core.validate.cljs$lang$maxFixedArity = (0);

bouncer.core.validate.cljs$lang$applyTo = (function (seq7339){
return bouncer.core.validate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7339));
});
/**
 * Takes a map and one or more validation functions with semantics provided by "validate". Returns true if the map passes all validations. False otherwise.
 */
bouncer.core.valid_QMARK_ = (function bouncer$core$valid_QMARK_(var_args){
var args__5736__auto__ = [];
var len__5729__auto___7346 = arguments.length;
var i__5730__auto___7347 = (0);
while(true){
if((i__5730__auto___7347 < len__5729__auto___7346)){
args__5736__auto__.push((arguments[i__5730__auto___7347]));

var G__7348 = (i__5730__auto___7347 + (1));
i__5730__auto___7347 = G__7348;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((0) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((0)),(0))):null);
return bouncer.core.valid_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__5737__auto__);
});

bouncer.core.valid_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.empty_QMARK_.call(null,cljs.core.first.call(null,cljs.core.apply.call(null,bouncer.core.validate,args)));
});

bouncer.core.valid_QMARK_.cljs$lang$maxFixedArity = (0);

bouncer.core.valid_QMARK_.cljs$lang$applyTo = (function (seq7345){
return bouncer.core.valid_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7345));
});

//# sourceMappingURL=core.js.map