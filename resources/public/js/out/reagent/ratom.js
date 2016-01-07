// Compiled by ClojureScript 1.7.170 {}
goog.provide('reagent.ratom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.debug');
reagent.ratom._STAR_ratom_context_STAR_;
if(typeof reagent.ratom.debug !== 'undefined'){
} else {
reagent.ratom.debug = false;
}
if(typeof reagent.ratom._running !== 'undefined'){
} else {
reagent.ratom._running = cljs.core.atom.call(null,(0));
}
reagent.ratom.running = (function reagent$ratom$running(){
return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.capture_derefed = (function reagent$ratom$capture_derefed(f,obj){
obj.cljsCaptured = null;

<<<<<<< HEAD
var _STAR_ratom_context_STAR_6852 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = obj;

try{return f.call(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_6852;
=======
var _STAR_ratom_context_STAR_5930 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = obj;

try{return f.call(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_5930;
>>>>>>> origin/step1
}});
reagent.ratom.captured = (function reagent$ratom$captured(obj){
var c = obj.cljsCaptured;
obj.cljsCaptured = null;

return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function reagent$ratom$notify_deref_watcher_BANG_(derefable){
var obj = reagent.ratom._STAR_ratom_context_STAR_;
if((obj == null)){
return null;
} else {
var captured = obj.cljsCaptured;
return obj.cljsCaptured = cljs.core.conj.call(null,(((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

/**
 * @interface
 */
reagent.ratom.IReactiveAtom = function(){};


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,"#<Atom: ");

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_(self__.validator.call(null,new_value))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null))))].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
}

return new_value;
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f){
f.call(null,key,this$__$1,oldval,newval);

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});

reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

return self__.state;
});

reagent.ratom.RAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

reagent.ratom.RAtom.cljs$lang$type = true;

reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write.call(null,writer__5270__auto__,"reagent.ratom/RAtom");
});

reagent.ratom.__GT_RAtom = (function reagent$ratom$__GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 */
reagent.ratom.atom = (function reagent$ratom$atom(var_args){
<<<<<<< HEAD
var args6853 = [];
var len__5729__auto___6861 = arguments.length;
var i__5730__auto___6862 = (0);
while(true){
if((i__5730__auto___6862 < len__5729__auto___6861)){
args6853.push((arguments[i__5730__auto___6862]));

var G__6863 = (i__5730__auto___6862 + (1));
i__5730__auto___6862 = G__6863;
=======
var args5931 = [];
var len__5729__auto___5939 = arguments.length;
var i__5730__auto___5940 = (0);
while(true){
if((i__5730__auto___5940 < len__5729__auto___5939)){
args5931.push((arguments[i__5730__auto___5940]));

var G__5941 = (i__5730__auto___5940 + (1));
i__5730__auto___5940 = G__5941;
>>>>>>> origin/step1
continue;
} else {
}
break;
}

<<<<<<< HEAD
var G__6857 = args6853.length;
switch (G__6857) {
=======
var G__5935 = args5931.length;
switch (G__5935) {
>>>>>>> origin/step1
case 1:
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
<<<<<<< HEAD
var argseq__5748__auto__ = (new cljs.core.IndexedSeq(args6853.slice((1)),(0)));
=======
var argseq__5748__auto__ = (new cljs.core.IndexedSeq(args5931.slice((1)),(0)));
>>>>>>> origin/step1
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5748__auto__);

}
});

reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return (new reagent.ratom.RAtom(x,null,null,null));
});

<<<<<<< HEAD
reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__6858){
var map__6859 = p__6858;
var map__6859__$1 = ((((!((map__6859 == null)))?((((map__6859.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6859.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6859):map__6859);
var meta = cljs.core.get.call(null,map__6859__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var validator = cljs.core.get.call(null,map__6859__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
return (new reagent.ratom.RAtom(x,meta,validator,null));
});

reagent.ratom.atom.cljs$lang$applyTo = (function (seq6854){
var G__6855 = cljs.core.first.call(null,seq6854);
var seq6854__$1 = cljs.core.next.call(null,seq6854);
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic(G__6855,seq6854__$1);
=======
reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__5936){
var map__5937 = p__5936;
var map__5937__$1 = ((((!((map__5937 == null)))?((((map__5937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5937):map__5937);
var meta = cljs.core.get.call(null,map__5937__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var validator = cljs.core.get.call(null,map__5937__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
return (new reagent.ratom.RAtom(x,meta,validator,null));
});

reagent.ratom.atom.cljs$lang$applyTo = (function (seq5932){
var G__5933 = cljs.core.first.call(null,seq5932);
var seq5932__$1 = cljs.core.next.call(null,seq5932);
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic(G__5933,seq5932__$1);
>>>>>>> origin/step1
});

reagent.ratom.atom.cljs$lang$maxFixedArity = (1);
reagent.ratom.make_reaction;

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {reagent.ratom.Object}
*/
reagent.ratom.RCursor = (function (ratom,path,reaction){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RCursor.prototype._reaction = (function (){
var self__ = this;
var this$ = this;
if((self__.reaction == null)){
return self__.reaction = ((((!((self__.ratom == null)))?((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || (self__.ratom.cljs$core$IDeref$))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,self__.ratom)))?reagent.ratom.make_reaction.call(null,((function (this$){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.ratom),self__.path);
});})(this$))
,new cljs.core.Keyword(null,"on-set","on-set",-140953470),((cljs.core._EQ_.call(null,self__.path,cljs.core.PersistentVector.EMPTY))?((function (this$){
<<<<<<< HEAD
return (function (p1__6866_SHARP_,p2__6865_SHARP_){
return cljs.core.reset_BANG_.call(null,self__.ratom,p2__6865_SHARP_);
});})(this$))
:((function (this$){
return (function (p1__6868_SHARP_,p2__6867_SHARP_){
return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.assoc_in,self__.path,p2__6867_SHARP_);
=======
return (function (p1__5944_SHARP_,p2__5943_SHARP_){
return cljs.core.reset_BANG_.call(null,self__.ratom,p2__5943_SHARP_);
});})(this$))
:((function (this$){
return (function (p1__5946_SHARP_,p2__5945_SHARP_){
return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.assoc_in,self__.path,p2__5945_SHARP_);
>>>>>>> origin/step1
});})(this$))
)):reagent.ratom.make_reaction.call(null,((function (this$){
return (function (){
return self__.ratom.call(null,self__.path);
});})(this$))
,new cljs.core.Keyword(null,"on-set","on-set",-140953470),((function (this$){
<<<<<<< HEAD
return (function (p1__6870_SHARP_,p2__6869_SHARP_){
return self__.ratom.call(null,self__.path,p2__6869_SHARP_);
=======
return (function (p1__5948_SHARP_,p2__5947_SHARP_){
return self__.ratom.call(null,self__.path,p2__5947_SHARP_);
>>>>>>> origin/step1
});})(this$))
));
} else {
return self__.reaction;
}
});

reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
<<<<<<< HEAD
var _STAR_ratom_context_STAR_6872 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref.call(null,this$._reaction());
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_6872;
=======
var _STAR_ratom_context_STAR_5950 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref.call(null,this$._reaction());
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_5950;
>>>>>>> origin/step1
}});

reagent.ratom.RCursor.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,[cljs.core.str("#<Cursor: "),cljs.core.str(self__.path),cljs.core.str(" ")].join(''));

cljs.core.pr_writer.call(null,a__$1._peek(),writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
});

reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return ((other instanceof reagent.ratom.RCursor)) && (cljs.core._EQ_.call(null,self__.path,other.path)) && (cljs.core._EQ_.call(null,self__.ratom,other.ratom));
});

reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1._reaction(),new_value);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f,x);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f,x,y);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f,x,y,more);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core._notify_watches.call(null,this$__$1._reaction(),oldval,newval);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._add_watch.call(null,this$__$1._reaction(),key,f);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return cljs.core._remove_watch.call(null,this$__$1._reaction(),key);
});

reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._deref.call(null,this$__$1._reaction());
});

reagent.ratom.RCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ratom","ratom",1514010260,null),new cljs.core.Symbol(null,"path","path",1452340359,null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

reagent.ratom.RCursor.cljs$lang$type = true;

reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";

reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write.call(null,writer__5270__auto__,"reagent.ratom/RCursor");
});

reagent.ratom.__GT_RCursor = (function reagent$ratom$__GT_RCursor(ratom,path,reaction){
return (new reagent.ratom.RCursor(ratom,path,reaction));
});

reagent.ratom.cursor = (function reagent$ratom$cursor(src,path){
if(((!((path == null)))?((((path.cljs$lang$protocol_mask$partition0$ & (32768))) || (path.cljs$core$IDeref$))?true:(((!path.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,path):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,path))){
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("Calling cursor with an atom as the second arg is "),cljs.core.str("deprecated, in (cursor "),cljs.core.str(src),cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.call(null,path)),cljs.core.str(")")].join(''));
} else {
}

if(((!((path == null)))?(((false) || (path.reagent$ratom$IReactiveAtom$))?true:(((!path.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,path):false)):cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,path))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("src must be a reactive atom, not "),cljs.core.str(cljs.core.pr_str.call(null,path))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IReactiveAtom","IReactiveAtom",-991158427,null),new cljs.core.Symbol(null,"path","path",1452340359,null))))].join('')));
}

return (new reagent.ratom.RCursor(path,src,null));
} else {
if((function (){var or__4671__auto__ = ((!((src == null)))?(((false) || (src.reagent$ratom$IReactiveAtom$))?true:(((!src.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,src):false)):cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,src));
if(or__4671__auto__){
return or__4671__auto__;
} else {
return (cljs.core.ifn_QMARK_.call(null,src)) && (!(cljs.core.vector_QMARK_.call(null,src)));
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("src must be a reactive atom or a function, not "),cljs.core.str(cljs.core.pr_str.call(null,src))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IReactiveAtom","IReactiveAtom",-991158427,null),new cljs.core.Symbol(null,"src","src",-10544524,null)),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"src","src",-10544524,null)),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"src","src",-10544524,null)))))))].join('')));
}

return (new reagent.ratom.RCursor(src,path,null));
}
});

/**
 * @interface
 */
reagent.ratom.IDisposable = function(){};

reagent.ratom.dispose_BANG_ = (function reagent$ratom$dispose_BANG_(this$){
if((!((this$ == null))) && (!((this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1 == null)))){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return m__5327__auto__.call(null,this$);
} else {
var m__5327__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(!((m__5327__auto____$1 == null))){
return m__5327__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
}
});


/**
 * @interface
 */
reagent.ratom.IRunnable = function(){};

reagent.ratom.run = (function reagent$ratom$run(this$){
if((!((this$ == null))) && (!((this$.reagent$ratom$IRunnable$run$arity$1 == null)))){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (reagent.ratom.run[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return m__5327__auto__.call(null,this$);
} else {
var m__5327__auto____$1 = (reagent.ratom.run["_"]);
if(!((m__5327__auto____$1 == null))){
return m__5327__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
}
});


/**
 * @interface
 */
reagent.ratom.IComputedImpl = function(){};

reagent.ratom._update_watching = (function reagent$ratom$_update_watching(this$,derefed){
if((!((this$ == null))) && (!((this$.reagent$ratom$IComputedImpl$_update_watching$arity$2 == null)))){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (reagent.ratom._update_watching[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return m__5327__auto__.call(null,this$,derefed);
} else {
var m__5327__auto____$1 = (reagent.ratom._update_watching["_"]);
if(!((m__5327__auto____$1 == null))){
return m__5327__auto____$1.call(null,this$,derefed);
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-update-watching",this$);
}
}
}
});

reagent.ratom._handle_change = (function reagent$ratom$_handle_change(k,sender,oldval,newval){
if((!((k == null))) && (!((k.reagent$ratom$IComputedImpl$_handle_change$arity$4 == null)))){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else {
var x__5326__auto__ = (((k == null))?null:k);
var m__5327__auto__ = (reagent.ratom._handle_change[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return m__5327__auto__.call(null,k,sender,oldval,newval);
} else {
var m__5327__auto____$1 = (reagent.ratom._handle_change["_"]);
if(!((m__5327__auto____$1 == null))){
return m__5327__auto____$1.call(null,k,sender,oldval,newval);
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-handle-change",k);
}
}
}
});

reagent.ratom._peek_at = (function reagent$ratom$_peek_at(this$){
if((!((this$ == null))) && (!((this$.reagent$ratom$IComputedImpl$_peek_at$arity$1 == null)))){
return this$.reagent$ratom$IComputedImpl$_peek_at$arity$1(this$);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (reagent.ratom._peek_at[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return m__5327__auto__.call(null,this$);
} else {
var m__5327__auto____$1 = (reagent.ratom._peek_at["_"]);
if(!((m__5327__auto____$1 == null))){
return m__5327__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-peek-at",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {reagent.ratom.IComputedImpl}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {reagent.ratom.IReactiveAtom}
 * @implements {reagent.ratom.IRunnable}
 * @implements {reagent.ratom.IDisposable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__4659__auto__ = self__.active_QMARK_;
if(cljs.core.truth_(and__4659__auto__)){
return !((oldval === newval));
} else {
return and__4659__auto__;
}
})())){
self__.dirty_QMARK_ = true;

return (function (){var or__4671__auto__ = self__.auto_run;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return reagent.ratom.run;
}
})().call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){
var self__ = this;
var this$__$1 = this;
<<<<<<< HEAD
var seq__6881_6894 = cljs.core.seq.call(null,derefed);
var chunk__6882_6895 = null;
var count__6883_6896 = (0);
var i__6884_6897 = (0);
while(true){
if((i__6884_6897 < count__6883_6896)){
var w_6898 = cljs.core._nth.call(null,chunk__6882_6895,i__6884_6897);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_6898)){
} else {
cljs.core.add_watch.call(null,w_6898,this$__$1,reagent.ratom._handle_change);
}

var G__6899 = seq__6881_6894;
var G__6900 = chunk__6882_6895;
var G__6901 = count__6883_6896;
var G__6902 = (i__6884_6897 + (1));
seq__6881_6894 = G__6899;
chunk__6882_6895 = G__6900;
count__6883_6896 = G__6901;
i__6884_6897 = G__6902;
continue;
} else {
var temp__4425__auto___6903 = cljs.core.seq.call(null,seq__6881_6894);
if(temp__4425__auto___6903){
var seq__6881_6904__$1 = temp__4425__auto___6903;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6881_6904__$1)){
var c__5474__auto___6905 = cljs.core.chunk_first.call(null,seq__6881_6904__$1);
var G__6906 = cljs.core.chunk_rest.call(null,seq__6881_6904__$1);
var G__6907 = c__5474__auto___6905;
var G__6908 = cljs.core.count.call(null,c__5474__auto___6905);
var G__6909 = (0);
seq__6881_6894 = G__6906;
chunk__6882_6895 = G__6907;
count__6883_6896 = G__6908;
i__6884_6897 = G__6909;
continue;
} else {
var w_6910 = cljs.core.first.call(null,seq__6881_6904__$1);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_6910)){
} else {
cljs.core.add_watch.call(null,w_6910,this$__$1,reagent.ratom._handle_change);
}

var G__6911 = cljs.core.next.call(null,seq__6881_6904__$1);
var G__6912 = null;
var G__6913 = (0);
var G__6914 = (0);
seq__6881_6894 = G__6911;
chunk__6882_6895 = G__6912;
count__6883_6896 = G__6913;
i__6884_6897 = G__6914;
=======
var seq__5959_5972 = cljs.core.seq.call(null,derefed);
var chunk__5960_5973 = null;
var count__5961_5974 = (0);
var i__5962_5975 = (0);
while(true){
if((i__5962_5975 < count__5961_5974)){
var w_5976 = cljs.core._nth.call(null,chunk__5960_5973,i__5962_5975);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_5976)){
} else {
cljs.core.add_watch.call(null,w_5976,this$__$1,reagent.ratom._handle_change);
}

var G__5977 = seq__5959_5972;
var G__5978 = chunk__5960_5973;
var G__5979 = count__5961_5974;
var G__5980 = (i__5962_5975 + (1));
seq__5959_5972 = G__5977;
chunk__5960_5973 = G__5978;
count__5961_5974 = G__5979;
i__5962_5975 = G__5980;
continue;
} else {
var temp__4425__auto___5981 = cljs.core.seq.call(null,seq__5959_5972);
if(temp__4425__auto___5981){
var seq__5959_5982__$1 = temp__4425__auto___5981;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5959_5982__$1)){
var c__5474__auto___5983 = cljs.core.chunk_first.call(null,seq__5959_5982__$1);
var G__5984 = cljs.core.chunk_rest.call(null,seq__5959_5982__$1);
var G__5985 = c__5474__auto___5983;
var G__5986 = cljs.core.count.call(null,c__5474__auto___5983);
var G__5987 = (0);
seq__5959_5972 = G__5984;
chunk__5960_5973 = G__5985;
count__5961_5974 = G__5986;
i__5962_5975 = G__5987;
continue;
} else {
var w_5988 = cljs.core.first.call(null,seq__5959_5982__$1);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_5988)){
} else {
cljs.core.add_watch.call(null,w_5988,this$__$1,reagent.ratom._handle_change);
}

var G__5989 = cljs.core.next.call(null,seq__5959_5982__$1);
var G__5990 = null;
var G__5991 = (0);
var G__5992 = (0);
seq__5959_5972 = G__5989;
chunk__5960_5973 = G__5990;
count__5961_5974 = G__5991;
i__5962_5975 = G__5992;
>>>>>>> origin/step1
continue;
}
} else {
}
}
break;
}

<<<<<<< HEAD
var seq__6885_6915 = cljs.core.seq.call(null,self__.watching);
var chunk__6886_6916 = null;
var count__6887_6917 = (0);
var i__6888_6918 = (0);
while(true){
if((i__6888_6918 < count__6887_6917)){
var w_6919 = cljs.core._nth.call(null,chunk__6886_6916,i__6888_6918);
if(cljs.core.contains_QMARK_.call(null,derefed,w_6919)){
} else {
cljs.core.remove_watch.call(null,w_6919,this$__$1);
}

var G__6920 = seq__6885_6915;
var G__6921 = chunk__6886_6916;
var G__6922 = count__6887_6917;
var G__6923 = (i__6888_6918 + (1));
seq__6885_6915 = G__6920;
chunk__6886_6916 = G__6921;
count__6887_6917 = G__6922;
i__6888_6918 = G__6923;
continue;
} else {
var temp__4425__auto___6924 = cljs.core.seq.call(null,seq__6885_6915);
if(temp__4425__auto___6924){
var seq__6885_6925__$1 = temp__4425__auto___6924;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6885_6925__$1)){
var c__5474__auto___6926 = cljs.core.chunk_first.call(null,seq__6885_6925__$1);
var G__6927 = cljs.core.chunk_rest.call(null,seq__6885_6925__$1);
var G__6928 = c__5474__auto___6926;
var G__6929 = cljs.core.count.call(null,c__5474__auto___6926);
var G__6930 = (0);
seq__6885_6915 = G__6927;
chunk__6886_6916 = G__6928;
count__6887_6917 = G__6929;
i__6888_6918 = G__6930;
continue;
} else {
var w_6931 = cljs.core.first.call(null,seq__6885_6925__$1);
if(cljs.core.contains_QMARK_.call(null,derefed,w_6931)){
} else {
cljs.core.remove_watch.call(null,w_6931,this$__$1);
}

var G__6932 = cljs.core.next.call(null,seq__6885_6925__$1);
var G__6933 = null;
var G__6934 = (0);
var G__6935 = (0);
seq__6885_6915 = G__6932;
chunk__6886_6916 = G__6933;
count__6887_6917 = G__6934;
i__6888_6918 = G__6935;
=======
var seq__5963_5993 = cljs.core.seq.call(null,self__.watching);
var chunk__5964_5994 = null;
var count__5965_5995 = (0);
var i__5966_5996 = (0);
while(true){
if((i__5966_5996 < count__5965_5995)){
var w_5997 = cljs.core._nth.call(null,chunk__5964_5994,i__5966_5996);
if(cljs.core.contains_QMARK_.call(null,derefed,w_5997)){
} else {
cljs.core.remove_watch.call(null,w_5997,this$__$1);
}

var G__5998 = seq__5963_5993;
var G__5999 = chunk__5964_5994;
var G__6000 = count__5965_5995;
var G__6001 = (i__5966_5996 + (1));
seq__5963_5993 = G__5998;
chunk__5964_5994 = G__5999;
count__5965_5995 = G__6000;
i__5966_5996 = G__6001;
continue;
} else {
var temp__4425__auto___6002 = cljs.core.seq.call(null,seq__5963_5993);
if(temp__4425__auto___6002){
var seq__5963_6003__$1 = temp__4425__auto___6002;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5963_6003__$1)){
var c__5474__auto___6004 = cljs.core.chunk_first.call(null,seq__5963_6003__$1);
var G__6005 = cljs.core.chunk_rest.call(null,seq__5963_6003__$1);
var G__6006 = c__5474__auto___6004;
var G__6007 = cljs.core.count.call(null,c__5474__auto___6004);
var G__6008 = (0);
seq__5963_5993 = G__6005;
chunk__5964_5994 = G__6006;
count__5965_5995 = G__6007;
i__5966_5996 = G__6008;
continue;
} else {
var w_6009 = cljs.core.first.call(null,seq__5963_6003__$1);
if(cljs.core.contains_QMARK_.call(null,derefed,w_6009)){
} else {
cljs.core.remove_watch.call(null,w_6009,this$__$1);
}

var G__6010 = cljs.core.next.call(null,seq__5963_6003__$1);
var G__6011 = null;
var G__6012 = (0);
var G__6013 = (0);
seq__5963_5993 = G__6010;
chunk__5964_5994 = G__6011;
count__5965_5995 = G__6012;
i__5966_5996 = G__6013;
>>>>>>> origin/step1
continue;
}
} else {
}
}
break;
}

return self__.watching = derefed;
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_peek_at$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not.call(null,self__.dirty_QMARK_)){
return self__.state;
} else {
<<<<<<< HEAD
var _STAR_ratom_context_STAR_6889 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref.call(null,this$__$1);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_6889;
=======
var _STAR_ratom_context_STAR_5967 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref.call(null,this$__$1);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_5967;
>>>>>>> origin/step1
}}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write.call(null,writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash.call(null,this$__$1)),cljs.core.str(": ")].join(''));

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
<<<<<<< HEAD
var seq__6890_6936 = cljs.core.seq.call(null,self__.watching);
var chunk__6891_6937 = null;
var count__6892_6938 = (0);
var i__6893_6939 = (0);
while(true){
if((i__6893_6939 < count__6892_6938)){
var w_6940 = cljs.core._nth.call(null,chunk__6891_6937,i__6893_6939);
cljs.core.remove_watch.call(null,w_6940,this$__$1);

var G__6941 = seq__6890_6936;
var G__6942 = chunk__6891_6937;
var G__6943 = count__6892_6938;
var G__6944 = (i__6893_6939 + (1));
seq__6890_6936 = G__6941;
chunk__6891_6937 = G__6942;
count__6892_6938 = G__6943;
i__6893_6939 = G__6944;
continue;
} else {
var temp__4425__auto___6945 = cljs.core.seq.call(null,seq__6890_6936);
if(temp__4425__auto___6945){
var seq__6890_6946__$1 = temp__4425__auto___6945;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6890_6946__$1)){
var c__5474__auto___6947 = cljs.core.chunk_first.call(null,seq__6890_6946__$1);
var G__6948 = cljs.core.chunk_rest.call(null,seq__6890_6946__$1);
var G__6949 = c__5474__auto___6947;
var G__6950 = cljs.core.count.call(null,c__5474__auto___6947);
var G__6951 = (0);
seq__6890_6936 = G__6948;
chunk__6891_6937 = G__6949;
count__6892_6938 = G__6950;
i__6893_6939 = G__6951;
continue;
} else {
var w_6952 = cljs.core.first.call(null,seq__6890_6946__$1);
cljs.core.remove_watch.call(null,w_6952,this$__$1);

var G__6953 = cljs.core.next.call(null,seq__6890_6946__$1);
var G__6954 = null;
var G__6955 = (0);
var G__6956 = (0);
seq__6890_6936 = G__6953;
chunk__6891_6937 = G__6954;
count__6892_6938 = G__6955;
i__6893_6939 = G__6956;
=======
var seq__5968_6014 = cljs.core.seq.call(null,self__.watching);
var chunk__5969_6015 = null;
var count__5970_6016 = (0);
var i__5971_6017 = (0);
while(true){
if((i__5971_6017 < count__5970_6016)){
var w_6018 = cljs.core._nth.call(null,chunk__5969_6015,i__5971_6017);
cljs.core.remove_watch.call(null,w_6018,this$__$1);

var G__6019 = seq__5968_6014;
var G__6020 = chunk__5969_6015;
var G__6021 = count__5970_6016;
var G__6022 = (i__5971_6017 + (1));
seq__5968_6014 = G__6019;
chunk__5969_6015 = G__6020;
count__5970_6016 = G__6021;
i__5971_6017 = G__6022;
continue;
} else {
var temp__4425__auto___6023 = cljs.core.seq.call(null,seq__5968_6014);
if(temp__4425__auto___6023){
var seq__5968_6024__$1 = temp__4425__auto___6023;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5968_6024__$1)){
var c__5474__auto___6025 = cljs.core.chunk_first.call(null,seq__5968_6024__$1);
var G__6026 = cljs.core.chunk_rest.call(null,seq__5968_6024__$1);
var G__6027 = c__5474__auto___6025;
var G__6028 = cljs.core.count.call(null,c__5474__auto___6025);
var G__6029 = (0);
seq__5968_6014 = G__6026;
chunk__5969_6015 = G__6027;
count__5970_6016 = G__6028;
i__5971_6017 = G__6029;
continue;
} else {
var w_6030 = cljs.core.first.call(null,seq__5968_6024__$1);
cljs.core.remove_watch.call(null,w_6030,this$__$1);

var G__6031 = cljs.core.next.call(null,seq__5968_6024__$1);
var G__6032 = null;
var G__6033 = (0);
var G__6034 = (0);
seq__5968_6014 = G__6031;
chunk__5969_6015 = G__6032;
count__5970_6016 = G__6033;
i__5971_6017 = G__6034;
>>>>>>> origin/step1
continue;
}
} else {
}
}
break;
}

self__.watching = null;

self__.state = null;

self__.dirty_QMARK_ = true;

if(cljs.core.truth_(self__.active_QMARK_)){
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.dec);
} else {
}

self__.active_QMARK_ = false;
} else {
}

if(cljs.core.truth_(self__.on_dispose)){
return self__.on_dispose.call(null);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;
var oldval = self__.state;
self__.state = newval;

if(cljs.core.truth_(self__.on_set)){
self__.dirty_QMARK_ = true;

self__.on_set.call(null,oldval,newval);
} else {
}

cljs.core._notify_watches.call(null,a__$1,oldval,newval);

return newval;
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,reagent.ratom._peek_at.call(null,a__$1)));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,reagent.ratom._peek_at.call(null,a__$1),x));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,reagent.ratom._peek_at.call(null,a__$1),x,y));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,reagent.ratom._peek_at.call(null,a__$1),x,y,more));
});

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var res = reagent.ratom.capture_derefed.call(null,self__.f,this$__$1);
var derefed = reagent.ratom.captured.call(null,this$__$1);
if(cljs.core.not_EQ_.call(null,derefed,self__.watching)){
reagent.ratom._update_watching.call(null,this$__$1,derefed);
} else {
}

if(cljs.core.truth_(self__.active_QMARK_)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

self__.active_QMARK_ = true;
}

self__.dirty_QMARK_ = false;

self__.state = res;

cljs.core._notify_watches.call(null,this$__$1,oldstate,self__.state);

return res;
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f__$1){
f__$1.call(null,key,this$__$1,oldval,newval);

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,k,wf);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
self__.watches = cljs.core.dissoc.call(null,self__.watches,k);

if((cljs.core.empty_QMARK_.call(null,self__.watches)) && (cljs.core.not.call(null,self__.auto_run))){
return reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var or__4671__auto__ = self__.auto_run;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return cljs.core.some_QMARK_.call(null,reagent.ratom._STAR_ratom_context_STAR_);
}
})())){
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

if(cljs.core.truth_(self__.dirty_QMARK_)){
return reagent.ratom.run.call(null,this$__$1);
} else {
return self__.state;
}
} else {
if(cljs.core.truth_(self__.dirty_QMARK_)){
<<<<<<< HEAD
var oldstate_6957 = self__.state;
self__.state = self__.f.call(null);

if((oldstate_6957 === self__.state)){
} else {
cljs.core._notify_watches.call(null,this$__$1,oldstate_6957,self__.state);
=======
var oldstate_6035 = self__.state;
self__.state = self__.f.call(null);

if((oldstate_6035 === self__.state)){
} else {
cljs.core._notify_watches.call(null,this$__$1,oldstate_6035,self__.state);
>>>>>>> origin/step1
}
} else {
}

return self__.state;
}
});

reagent.ratom.Reaction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty?","dirty?",-419314319,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"active?","active?",2100031303,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watching","watching",1947648227,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.Symbol(null,"on-set","on-set",1499578057,null),new cljs.core.Symbol(null,"on-dispose","on-dispose",-549129409,null)], null);
});

reagent.ratom.Reaction.cljs$lang$type = true;

reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write.call(null,writer__5270__auto__,"reagent.ratom/Reaction");
});

reagent.ratom.__GT_Reaction = (function reagent$ratom$__GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});

reagent.ratom.make_reaction = (function reagent$ratom$make_reaction(var_args){
var args__5736__auto__ = [];
<<<<<<< HEAD
var len__5729__auto___6963 = arguments.length;
var i__5730__auto___6964 = (0);
while(true){
if((i__5730__auto___6964 < len__5729__auto___6963)){
args__5736__auto__.push((arguments[i__5730__auto___6964]));

var G__6965 = (i__5730__auto___6964 + (1));
i__5730__auto___6964 = G__6965;
=======
var len__5729__auto___6041 = arguments.length;
var i__5730__auto___6042 = (0);
while(true){
if((i__5730__auto___6042 < len__5729__auto___6041)){
args__5736__auto__.push((arguments[i__5730__auto___6042]));

var G__6043 = (i__5730__auto___6042 + (1));
i__5730__auto___6042 = G__6043;
>>>>>>> origin/step1
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((1) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((1)),(0))):null);
return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5737__auto__);
});

<<<<<<< HEAD
reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__6960){
var map__6961 = p__6960;
var map__6961__$1 = ((((!((map__6961 == null)))?((((map__6961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6961):map__6961);
var auto_run = cljs.core.get.call(null,map__6961__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.call(null,map__6961__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.call(null,map__6961__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var derefed = cljs.core.get.call(null,map__6961__$1,new cljs.core.Keyword(null,"derefed","derefed",590684583));
=======
reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__6038){
var map__6039 = p__6038;
var map__6039__$1 = ((((!((map__6039 == null)))?((((map__6039.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6039.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6039):map__6039);
var auto_run = cljs.core.get.call(null,map__6039__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.call(null,map__6039__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.call(null,map__6039__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var derefed = cljs.core.get.call(null,map__6039__$1,new cljs.core.Keyword(null,"derefed","derefed",590684583));
>>>>>>> origin/step1
var runner = ((cljs.core._EQ_.call(null,auto_run,true))?reagent.ratom.run:auto_run);
var active = !((derefed == null));
var dirty = !(active);
var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,null,runner,on_set,on_dispose));
if((derefed == null)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

reagent.ratom._update_watching.call(null,reaction,derefed);
}

return reaction;
});

reagent.ratom.make_reaction.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
reagent.ratom.make_reaction.cljs$lang$applyTo = (function (seq6958){
var G__6959 = cljs.core.first.call(null,seq6958);
var seq6958__$1 = cljs.core.next.call(null,seq6958);
return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic(G__6959,seq6958__$1);
=======
reagent.ratom.make_reaction.cljs$lang$applyTo = (function (seq6036){
var G__6037 = cljs.core.first.call(null,seq6036);
var seq6036__$1 = cljs.core.next.call(null,seq6036);
return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic(G__6037,seq6036__$1);
>>>>>>> origin/step1
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
})
reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__4659__auto__ = self__.changed;
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core.some_QMARK_.call(null,reagent.ratom._STAR_ratom_context_STAR_);
} else {
return and__4659__auto__;
}
})())){
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("derefing stale wrap: "),cljs.core.str(cljs.core.pr_str.call(null,this$__$1))].join(''));
} else {
}
} else {
}


return self__.state;
});

reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
self__.changed = true;

self__.state = newval;

if((self__.watches == null)){
} else {
cljs.core._notify_watches.call(null,this$__$1,oldval,newval);
}

self__.callback.call(null,newval);

return newval;
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});

reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((other instanceof reagent.ratom.Wrapper)) && (cljs.core.not.call(null,self__.changed)) && (cljs.core.not.call(null,other.changed)) && (cljs.core._EQ_.call(null,self__.state,other.state)) && (cljs.core._EQ_.call(null,self__.callback,other.callback));
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f){
f.call(null,key,this$__$1,oldval,newval);

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});

reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
cljs.core._write.call(null,writer,"#<wrap: ");

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.Wrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"callback","callback",935395299,null),cljs.core.with_meta(new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

reagent.ratom.Wrapper.cljs$lang$type = true;

reagent.ratom.Wrapper.cljs$lang$ctorStr = "reagent.ratom/Wrapper";

reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write.call(null,writer__5270__auto__,"reagent.ratom/Wrapper");
});

reagent.ratom.__GT_Wrapper = (function reagent$ratom$__GT_Wrapper(state,callback,changed,watches){
return (new reagent.ratom.Wrapper(state,callback,changed,watches));
});

reagent.ratom.make_wrapper = (function reagent$ratom$make_wrapper(value,callback_fn,args){
return (new reagent.ratom.Wrapper(value,(new reagent.impl.util.partial_ifn(callback_fn,args,null)),false,null));
});

//# sourceMappingURL=ratom.js.map