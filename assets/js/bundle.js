(()=>{"use strict";var e={394:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=n(r(868)),o=document.querySelector("form"),l=document.querySelector(".username"),u=document.querySelector(".email"),i=document.querySelector(".password"),c=document.querySelector(".password2");let s=!1,f=!1,d=!1,_=!1,p=!1;function x(e,t){const r=e.parentElement;r.querySelector(".error-message").innerText=t,r.classList.add("show-error-message")}o.addEventListener("submit",(e=>{e.preventDefault(),function(e){e.querySelectorAll(".show-error-message").forEach((e=>{e.classList.remove("show-error-message")}))}(o),function(...e){e.forEach((e=>{e.value?(s=!0,function(e){(0,a.default)(e.value)?d=!0:(x(e,"Insira um e-mail válido"),d=!1)}(u),function(e,t){e.value.length<5?(x(e,"Quantidade minima de caracteres: 5"),f=!1):f=!0,t.value.length<8?(x(i,"Quantidade minima de caracteres: 8"),_=!1):(_=!0,function(e,t){e.value!==t.value?(x(t,"As senhas precisam ser idênticas"),p=!1):p=!0}(i,c))}(l,i)):(x(e,"Este campo é obrigatório"),s=!1)}))}(l,u,i,c),s&&f&&d&&_&&p&&alert(`Seu formulário está pronto para ser enviado!\n\n            Usuário: ${l.value}\n\n            E-mail: ${u.value}\n\n            Senha: ${i.value}\n        `)}))},235:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r,n;(0,a.default)(e),"object"===o(t)?(r=t.min||0,n=t.max):(r=arguments[1],n=arguments[2]);var l=encodeURI(e).split(/%..|./).length-1;return l>=r&&(void 0===n||l<=n)};var n,a=(n=r(571))&&n.__esModule?n:{default:n};function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}e.exports=t.default,e.exports.default=t.default},868:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if((0,n.default)(e),(t=(0,a.default)(t,c)).require_display_name||t.allow_display_name){var r=e.match(s);if(r){var i=r[1];if(e=e.replace(i,"").replace(/(^<|>$)/g,""),i.endsWith(" ")&&(i=i.slice(0,-1)),!function(e){var t=e.replace(/^"(.+)"$/,"$1");if(!t.trim())return!1;if(/[\.";<>]/.test(t)){if(t===e)return!1;if(t.split('"').length!==t.split('\\"').length)return!1}return!0}(i))return!1}else if(t.require_display_name)return!1}if(!t.ignore_max_length&&e.length>m)return!1;var v=e.split("@"),g=v.pop(),h=g.toLowerCase();if(t.host_blacklist.includes(h))return!1;if(t.host_whitelist.length>0&&!t.host_whitelist.includes(h))return!1;var y=v.join("@");if(t.domain_specific_validation&&("gmail.com"===h||"googlemail.com"===h)){var F=(y=y.toLowerCase()).split("+")[0];if(!(0,o.default)(F.replace(/\./g,""),{min:6,max:30}))return!1;for(var b=F.split("."),w=0;w<b.length;w++)if(!d.test(b[w]))return!1}if(!(!1!==t.ignore_max_length||(0,o.default)(y,{max:64})&&(0,o.default)(g,{max:254})))return!1;if(!(0,l.default)(g,{require_tld:t.require_tld,ignore_max_length:t.ignore_max_length})){if(!t.allow_ip_domain)return!1;if(!(0,u.default)(g)){if(!g.startsWith("[")||!g.endsWith("]"))return!1;var S=g.slice(1,-1);if(0===S.length||!(0,u.default)(S))return!1}}if('"'===y[0])return y=y.slice(1,y.length-1),t.allow_utf8_local_part?x.test(y):_.test(y);for(var $=t.allow_utf8_local_part?p:f,q=y.split("."),E=0;E<q.length;E++)if(!$.test(q[E]))return!1;return!t.blacklisted_chars||-1===y.search(new RegExp("[".concat(t.blacklisted_chars,"]+"),"g"))};var n=i(r(571)),a=i(r(808)),o=i(r(235)),l=i(r(221)),u=i(r(28));function i(e){return e&&e.__esModule?e:{default:e}}var c={allow_display_name:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0,blacklisted_chars:"",ignore_max_length:!1,host_blacklist:[],host_whitelist:[]},s=/^([^\x00-\x1F\x7F-\x9F\cX]+)</i,f=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,d=/^[a-z\d]+$/,_=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,p=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,x=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,m=254;e.exports=t.default,e.exports.default=t.default},221:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,n.default)(e),(t=(0,a.default)(t,l)).allow_trailing_dot&&"."===e[e.length-1]&&(e=e.substring(0,e.length-1)),!0===t.allow_wildcard&&0===e.indexOf("*.")&&(e=e.substring(2));var r=e.split("."),o=r[r.length-1];if(t.require_tld){if(r.length<2)return!1;if(!t.allow_numeric_tld&&!/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(o))return!1;if(/\s/.test(o))return!1}return!(!t.allow_numeric_tld&&/^\d+$/.test(o))&&r.every((function(e){return!(e.length>63&&!t.ignore_max_length||!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(e)||/[\uff01-\uff5e]/.test(e)||/^-|-$/.test(e)||!t.allow_underscores&&/_/.test(e))}))};var n=o(r(571)),a=o(r(808));function o(e){return e&&e.__esModule?e:{default:e}}var l={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_numeric_tld:!1,allow_wildcard:!1,ignore_max_length:!1};e.exports=t.default,e.exports.default=t.default},28:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return(0,a.default)(t),(r=String(r))?"4"===r?u.test(t):"6"===r&&c.test(t):e(t,4)||e(t,6)};var n,a=(n=r(571))&&n.__esModule?n:{default:n},o="(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",l="(".concat(o,"[.]){3}").concat(o),u=new RegExp("^".concat(l,"$")),i="(?:[0-9a-fA-F]{1,4})",c=new RegExp("^("+"(?:".concat(i,":){7}(?:").concat(i,"|:)|")+"(?:".concat(i,":){6}(?:").concat(l,"|:").concat(i,"|:)|")+"(?:".concat(i,":){5}(?::").concat(l,"|(:").concat(i,"){1,2}|:)|")+"(?:".concat(i,":){4}(?:(:").concat(i,"){0,1}:").concat(l,"|(:").concat(i,"){1,3}|:)|")+"(?:".concat(i,":){3}(?:(:").concat(i,"){0,2}:").concat(l,"|(:").concat(i,"){1,4}|:)|")+"(?:".concat(i,":){2}(?:(:").concat(i,"){0,3}:").concat(l,"|(:").concat(i,"){1,5}|:)|")+"(?:".concat(i,":){1}(?:(:").concat(i,"){0,4}:").concat(l,"|(:").concat(i,"){1,6}|:)|")+"(?::((?::".concat(i,"){0,5}:").concat(l,"|(?::").concat(i,"){1,7}|:))")+")(%[0-9a-zA-Z-.:]{1,})?$");e.exports=t.default,e.exports.default=t.default},571:(e,t)=>{function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!("string"==typeof e||e instanceof String)){var t=r(e);throw null===e?t="null":"object"===t&&(t=e.constructor.name),new TypeError("Expected a string but received a ".concat(t))}},e.exports=t.default,e.exports.default=t.default},808:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;for(var r in t)void 0===e[r]&&(e[r]=t[r]);return e},e.exports=t.default,e.exports.default=t.default}},t={};!function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}(394)})();