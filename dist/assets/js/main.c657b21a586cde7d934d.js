!function(e){function t(t){for(var r,s,l=t[0],c=t[1],a=t[2],d=0,p=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(u&&u(t);p.length;)p.shift()();return o.push.apply(o,a||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var c=n[l];0!==i[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},i={0:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var a=0;a<l.length;a++)t(l[a]);var u=c;o.push([5,1]),n()}([,function(e,t,n){var r=n(0),i=n(2);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){},function(e,t,n){var r=n(0),i=n(4);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){},function(e,t,n){"use strict";n.r(t);const r=document.querySelector(".header__hamburger"),i=document.querySelector(".aside");r.addEventListener("click",()=>{r.classList.toggle("open"),i.classList.toggle("open")});const o=document.querySelector(".funding-categories"),s=o.querySelector(".toggle-menu"),l=o.querySelector(".funding-categories__menu-wrapper"),c=o.querySelectorAll(".funding-categories__level-1 > li > a"),a=o.querySelector(".funding-categories__list-wrapper:nth-child(2)"),u=o.querySelector(".funding-categories__list-wrapper:nth-child(3)"),d=a.querySelector(".sub-funding-categories__menu-wrapper"),p=u.querySelector(".sub-funding-categories__menu-wrapper"),f=o.querySelectorAll(".back-one-level");s.addEventListener("click",(function(){if(l.classList.toggle("is-visible"),!this.classList.contains("is-visible")){a.classList.remove("is-visible"),u.classList.remove("is-visible");const e=l.querySelectorAll("a");for(const t of e)t.classList.remove("is-active")}}));for(const e of c)e.addEventListener("click",(function(t){const n=e.nextElementSibling;if(n){t.preventDefault(),this.classList.add("is-active");const e=n.cloneNode(!0);d.innerHTML="",d.append(e),a.classList.add("is-visible")}}));a.addEventListener("click",(function(e){const t=e.target;if("a"===t.tagName.toLowerCase()&&t.nextElementSibling){const n=t.nextElementSibling;e.preventDefault(),t.classList.add("is-active");const r=n.cloneNode(!0);p.innerHTML="",p.append(r),u.classList.add("is-visible")}}));for(const e of f)e.addEventListener("click",(function(){const e=this.closest(".funding-categories__list-wrapper");e.classList.remove("is-visible"),e.previousElementSibling.querySelector(".is-active").classList.remove("is-active")}));const g=[{id:1,name:"Дети",groups:[{id:2,name:"Имеющие редкие заболевания",groups:[{id:3,name:"Spina Bifida",groups:[]},{id:4,name:"Буллёзный эпидермолиз",groups:[]}]},{id:5,name:"С инвалидностью",groups:[]}]},{id:6,name:"Профессиональные сообщества",groups:[]}];let v=[];for(let e of g)m(e,0);function m(e,t){if(v.push({name:e.name,id:e.id,parentID:t}),e.hasOwnProperty("groups")&&e.groups.length>0)for(let t of e.groups)m(t,e.id)}console.log(v),function e(t,n){let r=t.appendChild(document.createElement("ul"));n.forEach(t=>{let n=r.appendChild(document.createElement("li"));n.dataset.id=t.id,n.textContent=t.name,t.groups.length>0&&e(n,t.groups)})}(document.querySelector(".funding-categories__list-wrapper"),v[0].groups);n(1),n(3)}]);