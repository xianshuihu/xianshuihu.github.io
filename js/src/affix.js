"use strict";var _typeof4="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return void 0===t?"undefined":_typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":_typeof4(t)},_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return void 0===t?"undefined":_typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":_typeof3(t)},_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return void 0===t?"undefined":_typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":_typeof2(t)};+function(t){function o(o){return this.each(function(){var i=t(this),n=i.data("bs.affix"),f="object"==(void 0===o?"undefined":_typeof(o))&&o;n||i.data("bs.affix",n=new e(this,f)),"string"==typeof o&&n[o]()})}var e=function o(e,i){this.options=t.extend({},o.DEFAULTS,i),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};e.VERSION="3.3.5",e.RESET="affix affix-top affix-bottom",e.DEFAULTS={offset:0,target:window},e.prototype.getState=function(t,o,e,i){var n=this.$target.scrollTop(),f=this.$element.offset(),s=this.$target.height();if(null!=e&&"top"==this.affixed)return n<e&&"top";if("bottom"==this.affixed)return null!=e?!(n+this.unpin<=f.top)&&"bottom":!(n+s<=t-i)&&"bottom";var r=null==this.affixed,l=r?n:f.top,p=r?s:o;return null!=e&&n<=e?"top":null!=i&&l+p>=t-i&&"bottom"},e.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(e.RESET).addClass("affix");var t=this.$target.scrollTop(),o=this.$element.offset();return this.pinnedOffset=o.top-t},e.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},e.prototype.checkPosition=function(){if(this.$element.is(":visible")){var o=this.$element.height(),i=this.options.offset,n=i.top,f=i.bottom,s=Math.max(t(document).height(),t(document.body).height());"object"!=(void 0===i?"undefined":_typeof(i))&&(f=n=i),"function"==typeof n&&(n=i.top(this.$element)),"function"==typeof f&&(f=i.bottom(this.$element));var r=this.getState(s,o,n,f);if(this.affixed!=r){null!=this.unpin&&this.$element.css("top","");var l="affix"+(r?"-"+r:""),p=t.Event(l+".bs.affix");if(this.$element.trigger(p),p.isDefaultPrevented())return;this.affixed=r,this.unpin="bottom"==r?this.getPinnedOffset():null,this.$element.removeClass(e.RESET).addClass(l).trigger(l.replace("affix","affixed")+".bs.affix")}"bottom"==r&&this.$element.offset({top:s-o-f})}};var i=t.fn.affix;t.fn.affix=o,t.fn.affix.Constructor=e,t.fn.affix.noConflict=function(){return t.fn.affix=i,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var e=t(this),i=e.data();i.offset=i.offset||{},null!=i.offsetBottom&&(i.offset.bottom=i.offsetBottom),null!=i.offsetTop&&(i.offset.top=i.offsetTop),o.call(e,i)})})}(jQuery);