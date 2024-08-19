import{d as Gn,h as ne,v as qn,a3 as Wn,_ as Yn,s as Ce,a4 as $n,D as Vn,o as C,c as F,j as P,F as K,E as pe,b as Ge,t as ce,a0 as Xn,e as Kn,a5 as Qn,n as qe,a as kt,p as Zn,l as Jn,I as ea,a2 as ta}from"./chunks/framework.BJvAGJ4I.js";const Ct=()=>{};let dt={},an={},rn=null,sn={mark:Ct,measure:Ct};try{typeof window<"u"&&(dt=window),typeof document<"u"&&(an=document),typeof MutationObserver<"u"&&(rn=MutationObserver),typeof performance<"u"&&(sn=performance)}catch{}const{userAgent:Nt=""}=dt.navigator||{},J=dt,I=an,Lt=rn,Ne=sn;J.document;const $=!!I.documentElement&&!!I.head&&typeof I.addEventListener=="function"&&typeof I.createElement=="function",on=~Nt.indexOf("MSIE")||~Nt.indexOf("Trident/");var O="classic",ln="duotone",D="sharp",_="sharp-duotone",na=[O,ln,D,_],aa={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Rt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},ra=["kit"],ia=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,sa=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,oa={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},la={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},ca={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},ua={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},fa={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},da={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},cn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},ma=["solid","regular","light","thin","duotone","brands"],un=[1,2,3,4,5,6,7,8,9,10],ga=un.concat([11,12,13,14,15,16,17,18,19,20]),be={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ha=[...Object.keys(ua),...ma,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",be.GROUP,be.SWAP_OPACITY,be.PRIMARY,be.SECONDARY].concat(un.map(e=>"".concat(e,"x"))).concat(ga.map(e=>"w-".concat(e))),pa={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ba={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},ya={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Pt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const W="___FONT_AWESOME___",Qe=16,fn="fa",dn="svg-inline--fa",se="data-fa-i2svg",Ze="data-fa-pseudo-element",va="data-fa-pseudo-element-pending",mt="data-prefix",gt="data-icon",Ft="fontawesome-i2svg",Ea="async",Aa=["HTML","HEAD","STYLE","SCRIPT"],mn=(()=>{try{return!0}catch{return!1}})(),gn=[O,D,_];function Se(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[O]}})}const hn={...cn};hn[O]={...cn[O],...Rt.kit,...Rt["kit-duotone"]};const re=Se(hn),Je={...da};Je[O]={...Je[O],...Pt.kit,...Pt["kit-duotone"]};const Ae=Se(Je),et={...fa};et[O]={...et[O],...ya.kit};const ie=Se(et),tt={...ca};tt[O]={...tt[O],...ba.kit};const xa=Se(tt),Sa=ia,pn="fa-layers-text",Ta=sa,Ia={...aa};Se(Ia);const Oa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],We=be,de=new Set;Object.keys(Ae[O]).map(de.add.bind(de));Object.keys(Ae[D]).map(de.add.bind(de));Object.keys(Ae[_]).map(de.add.bind(de));const wa=[...ra,...ha],ve=J.FontAwesomeConfig||{};function ka(e){var t=I.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ca(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}I&&typeof I.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,a]=t;const r=Ca(ka(n));r!=null&&(ve[a]=r)});const bn={styleDefault:"solid",familyDefault:"classic",cssPrefix:fn,replacementClass:dn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ve.familyPrefix&&(ve.cssPrefix=ve.familyPrefix);const me={...bn,...ve};me.autoReplaceSvg||(me.observeMutations=!1);const p={};Object.keys(bn).forEach(e=>{Object.defineProperty(p,e,{enumerable:!0,set:function(t){me[e]=t,Ee.forEach(n=>n(p))},get:function(){return me[e]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(e){me.cssPrefix=e,Ee.forEach(t=>t(p))},get:function(){return me.cssPrefix}});J.FontAwesomeConfig=p;const Ee=[];function Na(e){return Ee.push(e),()=>{Ee.splice(Ee.indexOf(e),1)}}const Q=Qe,j={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function La(e){if(!e||!$)return;const t=I.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=I.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const s=n[r],l=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(l)>-1&&(a=s)}return I.head.insertBefore(t,a),e}const Ra="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function xe(){let e=12,t="";for(;e-- >0;)t+=Ra[Math.random()*62|0];return t}function ge(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ht(e){return e.classList?ge(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function yn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Pa(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(yn(e[n]),'" '),"").trim()}function De(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function pt(e){return e.size!==j.size||e.x!==j.x||e.y!==j.y||e.rotate!==j.rotate||e.flipX||e.flipY}function Fa(e){let{transform:t,containerWidth:n,iconWidth:a}=e;const r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),l="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),i="rotate(".concat(t.rotate," 0 0)"),u={transform:"".concat(s," ").concat(l," ").concat(i)},d={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:u,path:d}}function Ma(e){let{transform:t,width:n=Qe,height:a=Qe,startCentered:r=!1}=e,s="";return r&&on?s+="translate(".concat(t.x/Q-n/2,"em, ").concat(t.y/Q-a/2,"em) "):r?s+="translate(calc(-50% + ".concat(t.x/Q,"em), calc(-50% + ").concat(t.y/Q,"em)) "):s+="translate(".concat(t.x/Q,"em, ").concat(t.y/Q,"em) "),s+="scale(".concat(t.size/Q*(t.flipX?-1:1),", ").concat(t.size/Q*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var Da=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function vn(){const e=fn,t=dn,n=p.cssPrefix,a=p.replacementClass;let r=Da;if(n!==e||a!==t){const s=new RegExp("\\.".concat(e,"\\-"),"g"),l=new RegExp("\\--".concat(e,"\\-"),"g"),i=new RegExp("\\.".concat(t),"g");r=r.replace(s,".".concat(n,"-")).replace(l,"--".concat(n,"-")).replace(i,".".concat(a))}return r}let Mt=!1;function Ye(){p.autoAddCss&&!Mt&&(La(vn()),Mt=!0)}var _a={mixout(){return{dom:{css:vn,insertCss:Ye}}},hooks(){return{beforeDOMElementCreation(){Ye()},beforeI2svg(){Ye()}}}};const Y=J||{};Y[W]||(Y[W]={});Y[W].styles||(Y[W].styles={});Y[W].hooks||(Y[W].hooks={});Y[W].shims||(Y[W].shims=[]);var H=Y[W];const En=[],An=function(){I.removeEventListener("DOMContentLoaded",An),Pe=1,En.map(e=>e())};let Pe=!1;$&&(Pe=(I.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(I.readyState),Pe||I.addEventListener("DOMContentLoaded",An));function Ua(e){$&&(Pe?setTimeout(e,0):En.push(e))}function Te(e){const{tag:t,attributes:n={},children:a=[]}=e;return typeof e=="string"?yn(e):"<".concat(t," ").concat(Pa(n),">").concat(a.map(Te).join(""),"</").concat(t,">")}function Dt(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var $e=function(t,n,a,r){var s=Object.keys(t),l=s.length,i=n,u,d,y;for(a===void 0?(u=1,y=t[s[0]]):(u=0,y=a);u<l;u++)d=s[u],y=i(y,t[d],d,t);return y};function Ba(e){const t=[];let n=0;const a=e.length;for(;n<a;){const r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const s=e.charCodeAt(n++);(s&64512)==56320?t.push(((r&1023)<<10)+(s&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function nt(e){const t=Ba(e);return t.length===1?t[0].toString(16):null}function za(e,t){const n=e.length;let a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function _t(e){return Object.keys(e).reduce((t,n)=>{const a=e[n];return!!a.icon?t[a.iconName]=a.icon:t[n]=a,t},{})}function at(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=_t(t);typeof H.hooks.addPack=="function"&&!a?H.hooks.addPack(e,_t(t)):H.styles[e]={...H.styles[e]||{},...r},e==="fas"&&at("fa",t)}const{styles:ae,shims:ja}=H,Ha={[O]:Object.values(ie[O]),[D]:Object.values(ie[D]),[_]:Object.values(ie[_])};let bt=null,xn={},Sn={},Tn={},In={},On={};const Ga={[O]:Object.keys(re[O]),[D]:Object.keys(re[D]),[_]:Object.keys(re[_])};function qa(e){return~wa.indexOf(e)}function Wa(e,t){const n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!qa(r)?r:null}const wn=()=>{const e=a=>$e(ae,(r,s,l)=>(r[l]=$e(s,a,{}),r),{});xn=e((a,r,s)=>(r[3]&&(a[r[3]]=s),r[2]&&r[2].filter(i=>typeof i=="number").forEach(i=>{a[i.toString(16)]=s}),a)),Sn=e((a,r,s)=>(a[s]=s,r[2]&&r[2].filter(i=>typeof i=="string").forEach(i=>{a[i]=s}),a)),On=e((a,r,s)=>{const l=r[2];return a[s]=s,l.forEach(i=>{a[i]=s}),a});const t="far"in ae||p.autoFetchSvg,n=$e(ja,(a,r)=>{const s=r[0];let l=r[1];const i=r[2];return l==="far"&&!t&&(l="fas"),typeof s=="string"&&(a.names[s]={prefix:l,iconName:i}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:l,iconName:i}),a},{names:{},unicodes:{}});Tn=n.names,In=n.unicodes,bt=_e(p.styleDefault,{family:p.familyDefault})};Na(e=>{bt=_e(e.styleDefault,{family:p.familyDefault})});wn();function yt(e,t){return(xn[e]||{})[t]}function Ya(e,t){return(Sn[e]||{})[t]}function Z(e,t){return(On[e]||{})[t]}function kn(e){return Tn[e]||{prefix:null,iconName:null}}function $a(e){const t=In[e],n=yt("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ee(){return bt}const vt=()=>({prefix:null,iconName:null,rest:[]});function _e(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=O}=t,a=re[n][e],r=Ae[n][e]||Ae[n][a],s=e in H.styles?e:null;return r||s||null}const Va={[O]:Object.keys(ie[O]),[D]:Object.keys(ie[D]),[_]:Object.keys(ie[_])};function Ue(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t,a={[O]:"".concat(p.cssPrefix,"-").concat(O),[D]:"".concat(p.cssPrefix,"-").concat(D),[_]:"".concat(p.cssPrefix,"-").concat(_)};let r=null,s=O;const l=na.filter(u=>u!==ln);l.forEach(u=>{(e.includes(a[u])||e.some(d=>Va[u].includes(d)))&&(s=u)});const i=e.reduce((u,d)=>{const y=Wa(p.cssPrefix,d);if(ae[d]?(d=Ha[s].includes(d)?xa[s][d]:d,r=d,u.prefix=d):Ga[s].indexOf(d)>-1?(r=d,u.prefix=_e(d,{family:s})):y?u.iconName=y:d!==p.replacementClass&&!l.some(x=>d===a[x])&&u.rest.push(d),!n&&u.prefix&&u.iconName){const x=r==="fa"?kn(u.iconName):{},A=Z(u.prefix,u.iconName);x.prefix&&(r=null),u.iconName=x.iconName||A||u.iconName,u.prefix=x.prefix||u.prefix,u.prefix==="far"&&!ae.far&&ae.fas&&!p.autoFetchSvg&&(u.prefix="fas")}return u},vt());return(e.includes("fa-brands")||e.includes("fab"))&&(i.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(i.prefix="fad"),!i.prefix&&s===D&&(ae.fass||p.autoFetchSvg)&&(i.prefix="fass",i.iconName=Z(i.prefix,i.iconName)||i.iconName),!i.prefix&&s===_&&(ae.fasds||p.autoFetchSvg)&&(i.prefix="fasds",i.iconName=Z(i.prefix,i.iconName)||i.iconName),(i.prefix==="fa"||r==="fa")&&(i.prefix=ee()||"fas"),i}class Xa{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...r[s]},at(s,r[s]);const l=ie[O][s];l&&at(l,r[s]),wn()})}reset(){this.definitions={}}_pullDefinitions(t,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:s,iconName:l,icon:i}=a[r],u=i[2];t[s]||(t[s]={}),u.length>0&&u.forEach(d=>{typeof d=="string"&&(t[s][d]=i)}),t[s][l]=i}),t}}let Ut=[],ue={};const fe={},Ka=Object.keys(fe);function Qa(e,t){let{mixoutsTo:n}=t;return Ut=e,ue={},Object.keys(fe).forEach(a=>{Ka.indexOf(a)===-1&&delete fe[a]}),Ut.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(s=>{typeof r[s]=="function"&&(n[s]=r[s]),typeof r[s]=="object"&&Object.keys(r[s]).forEach(l=>{n[s]||(n[s]={}),n[s][l]=r[s][l]})}),a.hooks){const s=a.hooks();Object.keys(s).forEach(l=>{ue[l]||(ue[l]=[]),ue[l].push(s[l])})}a.provides&&a.provides(fe)}),n}function rt(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(ue[e]||[]).forEach(l=>{t=l.apply(null,[t,...a])}),t}function oe(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];(ue[e]||[]).forEach(s=>{s.apply(null,n)})}function te(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return fe[e]?fe[e].apply(null,t):void 0}function it(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||ee();if(t)return t=Z(n,t)||t,Dt(Cn.definitions,n,t)||Dt(H.styles,n,t)}const Cn=new Xa,Za=()=>{p.autoReplaceSvg=!1,p.observeMutations=!1,oe("noAuto")},Ja={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return $?(oe("beforeI2svg",e),te("pseudoElements2svg",e),te("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,Ua(()=>{tr({autoReplaceSvgRoot:t}),oe("watch",e)})}},er={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Z(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=_e(e[0]);return{prefix:n,iconName:Z(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(p.cssPrefix,"-"))>-1||e.match(Sa))){const t=Ue(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||ee(),iconName:Z(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=ee();return{prefix:t,iconName:Z(t,e)||e}}}},U={noAuto:Za,config:p,dom:Ja,parse:er,library:Cn,findIconDefinition:it,toHtml:Te},tr=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=I}=e;(Object.keys(H.styles).length>0||p.autoFetchSvg)&&$&&p.autoReplaceSvg&&U.dom.i2svg({node:t})};function Be(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>Te(n))}}),Object.defineProperty(e,"node",{get:function(){if(!$)return;const n=I.createElement("div");return n.innerHTML=e.html,n.children}}),e}function nr(e){let{children:t,main:n,mask:a,attributes:r,styles:s,transform:l}=e;if(pt(l)&&n.found&&!a.found){const{width:i,height:u}=n,d={x:i/u/2,y:.5};r.style=De({...s,"transform-origin":"".concat(d.x+l.x/16,"em ").concat(d.y+l.y/16,"em")})}return[{tag:"svg",attributes:r,children:t}]}function ar(e){let{prefix:t,iconName:n,children:a,attributes:r,symbol:s}=e;const l=s===!0?"".concat(t,"-").concat(p.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...r,id:l},children:a}]}]}function Et(e){const{icons:{main:t,mask:n},prefix:a,iconName:r,transform:s,symbol:l,title:i,maskId:u,titleId:d,extra:y,watchable:x=!1}=e,{width:A,height:k}=n.found?n:t,N=a==="fak",T=[p.replacementClass,r?"".concat(p.cssPrefix,"-").concat(r):""].filter(m=>y.classes.indexOf(m)===-1).filter(m=>m!==""||!!m).concat(y.classes).join(" ");let E={children:[],attributes:{...y.attributes,"data-prefix":a,"data-icon":r,class:T,role:y.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(A," ").concat(k)}};const h=N&&!~y.classes.indexOf("fa-fw")?{width:"".concat(A/k*16*.0625,"em")}:{};x&&(E.attributes[se]=""),i&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(d||xe())},children:[i]}),delete E.attributes.title);const o={...E,prefix:a,iconName:r,main:t,mask:n,maskId:u,transform:s,symbol:l,styles:{...h,...y.styles}},{children:c,attributes:f}=n.found&&t.found?te("generateAbstractMask",o)||{children:[],attributes:{}}:te("generateAbstractIcon",o)||{children:[],attributes:{}};return o.children=c,o.attributes=f,l?ar(o):nr(o)}function Bt(e){const{content:t,width:n,height:a,transform:r,title:s,extra:l,watchable:i=!1}=e,u={...l.attributes,...s?{title:s}:{},class:l.classes.join(" ")};i&&(u[se]="");const d={...l.styles};pt(r)&&(d.transform=Ma({transform:r,startCentered:!0,width:n,height:a}),d["-webkit-transform"]=d.transform);const y=De(d);y.length>0&&(u.style=y);const x=[];return x.push({tag:"span",attributes:u,children:[t]}),s&&x.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),x}function rr(e){const{content:t,title:n,extra:a}=e,r={...a.attributes,...n?{title:n}:{},class:a.classes.join(" ")},s=De(a.styles);s.length>0&&(r.style=s);const l=[];return l.push({tag:"span",attributes:r,children:[t]}),n&&l.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),l}const{styles:Ve}=H;function st(e){const t=e[0],n=e[1],[a]=e.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(We.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(We.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(We.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:r}}const ir={found:!1,width:512,height:512};function sr(e,t){!mn&&!p.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ot(e,t){let n=t;return t==="fa"&&p.styleDefault!==null&&(t=ee()),new Promise((a,r)=>{if(n==="fa"){const s=kn(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&Ve[t]&&Ve[t][e]){const s=Ve[t][e];return a(st(s))}sr(e,t),a({...ir,icon:p.showMissingIcons&&e?te("missingIconAbstract")||{}:{}})})}const zt=()=>{},lt=p.measurePerformance&&Ne&&Ne.mark&&Ne.measure?Ne:{mark:zt,measure:zt},ye='FA "6.6.0"',or=e=>(lt.mark("".concat(ye," ").concat(e," begins")),()=>Nn(e)),Nn=e=>{lt.mark("".concat(ye," ").concat(e," ends")),lt.measure("".concat(ye," ").concat(e),"".concat(ye," ").concat(e," begins"),"".concat(ye," ").concat(e," ends"))};var At={begin:or,end:Nn};const Le=()=>{};function jt(e){return typeof(e.getAttribute?e.getAttribute(se):null)=="string"}function lr(e){const t=e.getAttribute?e.getAttribute(mt):null,n=e.getAttribute?e.getAttribute(gt):null;return t&&n}function cr(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(p.replacementClass)}function ur(){return p.autoReplaceSvg===!0?Re.replace:Re[p.autoReplaceSvg]||Re.replace}function fr(e){return I.createElementNS("http://www.w3.org/2000/svg",e)}function dr(e){return I.createElement(e)}function Ln(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?fr:dr}=t;if(typeof e=="string")return I.createTextNode(e);const a=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(s){a.setAttribute(s,e.attributes[s])}),(e.children||[]).forEach(function(s){a.appendChild(Ln(s,{ceFn:n}))}),a}function mr(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const Re={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Ln(n),t)}),t.getAttribute(se)===null&&p.keepOriginalSource){let n=I.createComment(mr(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~ht(t).indexOf(p.replacementClass))return Re.replace(e);const a=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((l,i)=>(i===p.replacementClass||i.match(a)?l.toSvg.push(i):l.toNode.push(i),l),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",s.toNode.join(" "))}const r=n.map(s=>Te(s)).join(`
`);t.setAttribute(se,""),t.innerHTML=r}};function Ht(e){e()}function Rn(e,t){const n=typeof t=="function"?t:Le;if(e.length===0)n();else{let a=Ht;p.mutateApproach===Ea&&(a=J.requestAnimationFrame||Ht),a(()=>{const r=ur(),s=At.begin("mutate");e.map(r),s(),n()})}}let xt=!1;function Pn(){xt=!0}function ct(){xt=!1}let Fe=null;function Gt(e){if(!Lt||!p.observeMutations)return;const{treeCallback:t=Le,nodeCallback:n=Le,pseudoElementsCallback:a=Le,observeMutationsRoot:r=I}=e;Fe=new Lt(s=>{if(xt)return;const l=ee();ge(s).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!jt(i.addedNodes[0])&&(p.searchPseudoElements&&a(i.target),t(i.target)),i.type==="attributes"&&i.target.parentNode&&p.searchPseudoElements&&a(i.target.parentNode),i.type==="attributes"&&jt(i.target)&&~Oa.indexOf(i.attributeName))if(i.attributeName==="class"&&lr(i.target)){const{prefix:u,iconName:d}=Ue(ht(i.target));i.target.setAttribute(mt,u||l),d&&i.target.setAttribute(gt,d)}else cr(i.target)&&n(i.target)})}),$&&Fe.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function gr(){Fe&&Fe.disconnect()}function hr(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((a,r)=>{const s=r.split(":"),l=s[0],i=s.slice(1);return l&&i.length>0&&(a[l]=i.join(":").trim()),a},{})),n}function pr(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"";let r=Ue(ht(e));return r.prefix||(r.prefix=ee()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Ya(r.prefix,e.innerText)||yt(r.prefix,nt(e.innerText))),!r.iconName&&p.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function br(e){const t=ge(e.attributes).reduce((r,s)=>(r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r),{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return p.autoA11y&&(n?t["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(a||xe()):(t["aria-hidden"]="true",t.focusable="false")),t}function yr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:j,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function qt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=pr(e),s=br(e),l=rt("parseNodeAttributes",{},e);let i=t.styleParser?hr(e):[];return{iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:j,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:i,attributes:s},...l}}const{styles:vr}=H;function Fn(e){const t=p.autoReplaceSvg==="nest"?qt(e,{styleParser:!1}):qt(e);return~t.extra.classes.indexOf(pn)?te("generateLayersText",e,t):te("generateSvgReplacementMutation",e,t)}let G=new Set;gn.map(e=>{G.add("fa-".concat(e))});Object.keys(re[O]).map(G.add.bind(G));Object.keys(re[D]).map(G.add.bind(G));Object.keys(re[_]).map(G.add.bind(G));G=[...G];function Wt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!$)return Promise.resolve();const n=I.documentElement.classList,a=y=>n.add("".concat(Ft,"-").concat(y)),r=y=>n.remove("".concat(Ft,"-").concat(y)),s=p.autoFetchSvg?G:gn.map(y=>"fa-".concat(y)).concat(Object.keys(vr));s.includes("fa")||s.push("fa");const l=[".".concat(pn,":not([").concat(se,"])")].concat(s.map(y=>".".concat(y,":not([").concat(se,"])"))).join(", ");if(l.length===0)return Promise.resolve();let i=[];try{i=ge(e.querySelectorAll(l))}catch{}if(i.length>0)a("pending"),r("complete");else return Promise.resolve();const u=At.begin("onTree"),d=i.reduce((y,x)=>{try{const A=Fn(x);A&&y.push(A)}catch(A){mn||A.name==="MissingIcon"&&console.error(A)}return y},[]);return new Promise((y,x)=>{Promise.all(d).then(A=>{Rn(A,()=>{a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),u(),y()})}).catch(A=>{u(),x(A)})})}function Er(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Fn(e).then(n=>{n&&Rn([n],t)})}function Ar(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(t||{}).icon?t:it(t||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:it(r||{})),e(a,{...n,mask:r})}}const xr=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=j,symbol:a=!1,mask:r=null,maskId:s=null,title:l=null,titleId:i=null,classes:u=[],attributes:d={},styles:y={}}=t;if(!e)return;const{prefix:x,iconName:A,icon:k}=e;return Be({type:"icon",...e},()=>(oe("beforeDOMElementCreation",{iconDefinition:e,params:t}),p.autoA11y&&(l?d["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(i||xe()):(d["aria-hidden"]="true",d.focusable="false")),Et({icons:{main:st(k),mask:r?st(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:A,transform:{...j,...n},symbol:a,title:l,maskId:s,titleId:i,extra:{attributes:d,styles:y,classes:u}})))};var Sr={mixout(){return{icon:Ar(xr)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Wt,e.nodeCallback=Er,e}}},provides(e){e.i2svg=function(t){const{node:n=I,callback:a=()=>{}}=t;return Wt(n,a)},e.generateSvgReplacementMutation=function(t,n){const{iconName:a,title:r,titleId:s,prefix:l,transform:i,symbol:u,mask:d,maskId:y,extra:x}=n;return new Promise((A,k)=>{Promise.all([ot(a,l),d.iconName?ot(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(N=>{let[T,E]=N;A([t,Et({icons:{main:T,mask:E},prefix:l,iconName:a,transform:i,symbol:u,maskId:y,title:r,titleId:s,extra:x,watchable:!0})])}).catch(k)})},e.generateAbstractIcon=function(t){let{children:n,attributes:a,main:r,transform:s,styles:l}=t;const i=De(l);i.length>0&&(a.style=i);let u;return pt(s)&&(u=te("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),n.push(u||r.icon),{children:n,attributes:a}}}},Tr={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return Be({type:"layer"},()=>{oe("beforeDOMElementCreation",{assembler:e,params:t});let a=[];return e(r=>{Array.isArray(r)?r.map(s=>{a=a.concat(s.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Ir={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:s={}}=t;return Be({type:"counter",content:e},()=>(oe("beforeDOMElementCreation",{content:e,params:t}),rr({content:e.toString(),title:n,extra:{attributes:r,styles:s,classes:["".concat(p.cssPrefix,"-layers-counter"),...a]}})))}}}},Or={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=j,title:a=null,classes:r=[],attributes:s={},styles:l={}}=t;return Be({type:"text",content:e},()=>(oe("beforeDOMElementCreation",{content:e,params:t}),Bt({content:e,transform:{...j,...n},title:a,extra:{attributes:s,styles:l,classes:["".concat(p.cssPrefix,"-layers-text"),...r]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:a,transform:r,extra:s}=n;let l=null,i=null;if(on){const u=parseInt(getComputedStyle(t).fontSize,10),d=t.getBoundingClientRect();l=d.width/u,i=d.height/u}return p.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([t,Bt({content:t.innerHTML,width:l,height:i,transform:r,title:a,extra:s,watchable:!0})])}}};const wr=new RegExp('"',"ug"),Yt=[1105920,1112319],$t={FontAwesome:{normal:"fas",400:"fas"},...la,...oa,...pa},ut=Object.keys($t).reduce((e,t)=>(e[t.toLowerCase()]=$t[t],e),{}),kr=Object.keys(ut).reduce((e,t)=>{const n=ut[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function Cr(e){const t=e.replace(wr,""),n=za(t,0),a=n>=Yt[0]&&n<=Yt[1],r=t.length===2?t[0]===t[1]:!1;return{value:nt(r?t[0]:t),isSecondary:a||r}}function Nr(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(t),r=isNaN(a)?"normal":a;return(ut[n]||{})[r]||kr[n]}function Vt(e,t){const n="".concat(va).concat(t.replace(":","-"));return new Promise((a,r)=>{if(e.getAttribute(n)!==null)return a();const l=ge(e.children).filter(A=>A.getAttribute(Ze)===t)[0],i=J.getComputedStyle(e,t),u=i.getPropertyValue("font-family"),d=u.match(Ta),y=i.getPropertyValue("font-weight"),x=i.getPropertyValue("content");if(l&&!d)return e.removeChild(l),a();if(d&&x!=="none"&&x!==""){const A=i.getPropertyValue("content");let k=Nr(u,y);const{value:N,isSecondary:T}=Cr(A),E=d[0].startsWith("FontAwesome");let h=yt(k,N),o=h;if(E){const c=$a(N);c.iconName&&c.prefix&&(h=c.iconName,k=c.prefix)}if(h&&!T&&(!l||l.getAttribute(mt)!==k||l.getAttribute(gt)!==o)){e.setAttribute(n,o),l&&e.removeChild(l);const c=yr(),{extra:f}=c;f.attributes[Ze]=t,ot(h,k).then(m=>{const g=Et({...c,icons:{main:m,mask:vt()},prefix:k,iconName:o,extra:f,watchable:!0}),b=I.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(b,e.firstChild):e.appendChild(b),b.outerHTML=g.map(S=>Te(S)).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Lr(e){return Promise.all([Vt(e,"::before"),Vt(e,"::after")])}function Rr(e){return e.parentNode!==document.head&&!~Aa.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ze)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Xt(e){if($)return new Promise((t,n)=>{const a=ge(e.querySelectorAll("*")).filter(Rr).map(Lr),r=At.begin("searchPseudoElements");Pn(),Promise.all(a).then(()=>{r(),ct(),t()}).catch(()=>{r(),ct(),n()})})}var Pr={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Xt,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=I}=t;p.searchPseudoElements&&Xt(n)}}};let Kt=!1;var Fr={mixout(){return{dom:{unwatch(){Pn(),Kt=!0}}}},hooks(){return{bootstrap(){Gt(rt("mutationObserverCallbacks",{}))},noAuto(){gr()},watch(e){const{observeMutationsRoot:t}=e;Kt?ct():Gt(rt("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const Qt=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),s=r[0];let l=r.slice(1).join("-");if(s&&l==="h")return n.flipX=!0,n;if(s&&l==="v")return n.flipY=!0,n;if(l=parseFloat(l),isNaN(l))return n;switch(s){case"grow":n.size=n.size+l;break;case"shrink":n.size=n.size-l;break;case"left":n.x=n.x-l;break;case"right":n.x=n.x+l;break;case"up":n.y=n.y-l;break;case"down":n.y=n.y+l;break;case"rotate":n.rotate=n.rotate+l;break}return n},t)};var Mr={mixout(){return{parse:{transform:e=>Qt(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=Qt(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:a,containerWidth:r,iconWidth:s}=t;const l={transform:"translate(".concat(r/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),y={transform:"".concat(i," ").concat(u," ").concat(d)},x={transform:"translate(".concat(s/2*-1," -256)")},A={outer:l,inner:y,path:x};return{tag:"g",attributes:{...A.outer},children:[{tag:"g",attributes:{...A.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...A.path}}]}]}}}};const Xe={x:0,y:0,width:"100%",height:"100%"};function Zt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Dr(e){return e.tag==="g"?e.children:[e]}var _r={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),a=n?Ue(n.split(" ").map(r=>r.trim())):vt();return a.prefix||(a.prefix=ee()),e.mask=a,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:a,main:r,mask:s,maskId:l,transform:i}=t;const{width:u,icon:d}=r,{width:y,icon:x}=s,A=Fa({transform:i,containerWidth:y,iconWidth:u}),k={tag:"rect",attributes:{...Xe,fill:"white"}},N=d.children?{children:d.children.map(Zt)}:{},T={tag:"g",attributes:{...A.inner},children:[Zt({tag:d.tag,attributes:{...d.attributes,...A.path},...N})]},E={tag:"g",attributes:{...A.outer},children:[T]},h="mask-".concat(l||xe()),o="clip-".concat(l||xe()),c={tag:"mask",attributes:{...Xe,id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[k,E]},f={tag:"defs",children:[{tag:"clipPath",attributes:{id:o},children:Dr(x)},c]};return n.push(f,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(o,")"),mask:"url(#".concat(h,")"),...Xe}}),{children:n,attributes:a}}}},Ur={provides(e){let t=!1;J.matchMedia&&(t=J.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...a,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...r,attributeName:"opacity"},l={tag:"circle",attributes:{...a,cx:"256",cy:"364",r:"28"},children:[]};return t||l.children.push({tag:"animate",attributes:{...r,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(l),n.push({tag:"path",attributes:{...a,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:t?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),t||n.push({tag:"path",attributes:{...a,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Br={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return e.symbol=a,e}}}},zr=[_a,Sr,Tr,Ir,Or,Pr,Fr,Mr,_r,Ur,Br];Qa(zr,{mixoutsTo:U});U.noAuto;U.config;const jr=U.library;U.dom;const ft=U.parse;U.findIconDefinition;U.toHtml;const Hr=U.icon;U.layer;U.text;U.counter;function Jt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Jt(Object(n),!0).forEach(function(a){M(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jt(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Gr(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function qr(e){var t=Gr(e,"string");return typeof t=="symbol"?t:t+""}function Me(e){"@babel/helpers - typeof";return Me=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Me(e)}function M(e,t,n){return t=qr(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wr(e,t){if(e==null)return{};var n={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;n[a]=e[a]}return n}function Yr(e,t){if(e==null)return{};var n=Wr(e,t),a,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var $r=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Mn={exports:{}};(function(e){(function(t){var n=function(h,o,c){if(!d(o)||x(o)||A(o)||k(o)||u(o))return o;var f,m=0,g=0;if(y(o))for(f=[],g=o.length;m<g;m++)f.push(n(h,o[m],c));else{f={};for(var b in o)Object.prototype.hasOwnProperty.call(o,b)&&(f[h(b,c)]=n(h,o[b],c))}return f},a=function(h,o){o=o||{};var c=o.separator||"_",f=o.split||/(?=[A-Z])/;return h.split(f).join(c)},r=function(h){return N(h)?h:(h=h.replace(/[\-_\s]+(.)?/g,function(o,c){return c?c.toUpperCase():""}),h.substr(0,1).toLowerCase()+h.substr(1))},s=function(h){var o=r(h);return o.substr(0,1).toUpperCase()+o.substr(1)},l=function(h,o){return a(h,o).toLowerCase()},i=Object.prototype.toString,u=function(h){return typeof h=="function"},d=function(h){return h===Object(h)},y=function(h){return i.call(h)=="[object Array]"},x=function(h){return i.call(h)=="[object Date]"},A=function(h){return i.call(h)=="[object RegExp]"},k=function(h){return i.call(h)=="[object Boolean]"},N=function(h){return h=h-0,h===h},T=function(h,o){var c=o&&"process"in o?o.process:o;return typeof c!="function"?h:function(f,m){return c(f,h,m)}},E={camelize:r,decamelize:l,pascalize:s,depascalize:l,camelizeKeys:function(h,o){return n(T(r,o),h)},decamelizeKeys:function(h,o){return n(T(l,o),h,o)},pascalizeKeys:function(h,o){return n(T(s,o),h)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=E:t.humps=E})($r)})(Mn);var Vr=Mn.exports,Xr=["class","style"];function Kr(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=Vr.camelize(n.slice(0,a)),s=n.slice(a+1).trim();return t[r]=s,t},{})}function Qr(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Dn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(u){return Dn(u)}),r=Object.keys(e.attributes||{}).reduce(function(u,d){var y=e.attributes[d];switch(d){case"class":u.class=Qr(y);break;case"style":u.style=Kr(y);break;default:u.attrs[d]=y}return u},{attrs:{},class:{},style:{}});n.class;var s=n.style,l=s===void 0?{}:s,i=Yr(n,Xr);return Wn(e.tag,q(q(q({},t),{},{class:r.class,style:q(q({},r.style),l)},r.attrs),i),a)}var _n=!1;try{_n=!0}catch{}function Zr(){if(!_n&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ke(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?M({},e,t):{}}function Jr(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},M(M(M(M(M(M(M(M(M(M(t,"fa-".concat(e.size),e.size!==null),"fa-rotate-".concat(e.rotation),e.rotation!==null),"fa-pull-".concat(e.pull),e.pull!==null),"fa-swap-opacity",e.swapOpacity),"fa-bounce",e.bounce),"fa-shake",e.shake),"fa-beat",e.beat),"fa-fade",e.fade),"fa-beat-fade",e.beatFade),"fa-flash",e.flash),M(M(t,"fa-spin-pulse",e.spinPulse),"fa-spin-reverse",e.spinReverse));return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function en(e){if(e&&Me(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ft.icon)return ft.icon(e);if(e===null)return null;if(Me(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var ei=Gn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var a=n.attrs,r=ne(function(){return en(t.icon)}),s=ne(function(){return Ke("classes",Jr(t))}),l=ne(function(){return Ke("transform",typeof t.transform=="string"?ft.transform(t.transform):t.transform)}),i=ne(function(){return Ke("mask",en(t.mask))}),u=ne(function(){return Hr(r.value,q(q(q(q({},s.value),l.value),i.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});qn(u,function(y){if(!y)return Zr("Could not find one or more icon(s)",r.value,i.value)},{immediate:!0});var d=ne(function(){return u.value?Dn(u.value.abstract[0],{},a):null});return function(){return d.value}}});const ti={prefix:"fas",iconName:"skull-crossbones",icon:[448,512,[128369,9760],"f714","M368 128c0 44.4-25.4 83.5-64 106.4l0 21.6c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32l0-21.6c-38.6-23-64-62.1-64-106.4C80 57.3 144.5 0 224 0s144 57.3 144 128zM168 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm144-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM3.4 273.7c7.9-15.8 27.1-22.2 42.9-14.3L224 348.2l177.7-88.8c15.8-7.9 35-1.5 42.9 14.3s1.5 35-14.3 42.9L295.6 384l134.8 67.4c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3L224 419.8 46.3 508.6c-15.8 7.9-35 1.5-42.9-14.3s-1.5-35 14.3-42.9L152.4 384 17.7 316.6C1.9 308.7-4.5 289.5 3.4 273.7z"]};var tn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ni(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Un={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(a){var r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,s=0,l={},i={manual:a.Prism&&a.Prism.manual,disableWorkerMessageHandler:a.Prism&&a.Prism.disableWorkerMessageHandler,util:{encode:function o(c){return c instanceof u?new u(c.type,o(c.content),c.alias):Array.isArray(c)?c.map(o):c.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(o){return Object.prototype.toString.call(o).slice(8,-1)},objId:function(o){return o.__id||Object.defineProperty(o,"__id",{value:++s}),o.__id},clone:function o(c,f){f=f||{};var m,g;switch(i.util.type(c)){case"Object":if(g=i.util.objId(c),f[g])return f[g];m={},f[g]=m;for(var b in c)c.hasOwnProperty(b)&&(m[b]=o(c[b],f));return m;case"Array":return g=i.util.objId(c),f[g]?f[g]:(m=[],f[g]=m,c.forEach(function(S,v){m[v]=o(S,f)}),m);default:return c}},getLanguage:function(o){for(;o;){var c=r.exec(o.className);if(c)return c[1].toLowerCase();o=o.parentElement}return"none"},setLanguage:function(o,c){o.className=o.className.replace(RegExp(r,"gi"),""),o.classList.add("language-"+c)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(m){var o=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(m.stack)||[])[1];if(o){var c=document.getElementsByTagName("script");for(var f in c)if(c[f].src==o)return c[f]}return null}},isActive:function(o,c,f){for(var m="no-"+c;o;){var g=o.classList;if(g.contains(c))return!0;if(g.contains(m))return!1;o=o.parentElement}return!!f}},languages:{plain:l,plaintext:l,text:l,txt:l,extend:function(o,c){var f=i.util.clone(i.languages[o]);for(var m in c)f[m]=c[m];return f},insertBefore:function(o,c,f,m){m=m||i.languages;var g=m[o],b={};for(var S in g)if(g.hasOwnProperty(S)){if(S==c)for(var v in f)f.hasOwnProperty(v)&&(b[v]=f[v]);f.hasOwnProperty(S)||(b[S]=g[S])}var w=m[o];return m[o]=b,i.languages.DFS(i.languages,function(L,V){V===w&&L!=o&&(this[L]=b)}),b},DFS:function o(c,f,m,g){g=g||{};var b=i.util.objId;for(var S in c)if(c.hasOwnProperty(S)){f.call(c,S,c[S],m||S);var v=c[S],w=i.util.type(v);w==="Object"&&!g[b(v)]?(g[b(v)]=!0,o(v,f,null,g)):w==="Array"&&!g[b(v)]&&(g[b(v)]=!0,o(v,f,S,g))}}},plugins:{},highlightAll:function(o,c){i.highlightAllUnder(document,o,c)},highlightAllUnder:function(o,c,f){var m={callback:f,container:o,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",m),m.elements=Array.prototype.slice.apply(m.container.querySelectorAll(m.selector)),i.hooks.run("before-all-elements-highlight",m);for(var g=0,b;b=m.elements[g++];)i.highlightElement(b,c===!0,m.callback)},highlightElement:function(o,c,f){var m=i.util.getLanguage(o),g=i.languages[m];i.util.setLanguage(o,m);var b=o.parentElement;b&&b.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(b,m);var S=o.textContent,v={element:o,language:m,grammar:g,code:S};function w(V){v.highlightedCode=V,i.hooks.run("before-insert",v),v.element.innerHTML=v.highlightedCode,i.hooks.run("after-highlight",v),i.hooks.run("complete",v),f&&f.call(v.element)}if(i.hooks.run("before-sanity-check",v),b=v.element.parentElement,b&&b.nodeName.toLowerCase()==="pre"&&!b.hasAttribute("tabindex")&&b.setAttribute("tabindex","0"),!v.code){i.hooks.run("complete",v),f&&f.call(v.element);return}if(i.hooks.run("before-highlight",v),!v.grammar){w(i.util.encode(v.code));return}if(c&&a.Worker){var L=new Worker(i.filename);L.onmessage=function(V){w(V.data)},L.postMessage(JSON.stringify({language:v.language,code:v.code,immediateClose:!0}))}else w(i.highlight(v.code,v.grammar,v.language))},highlight:function(o,c,f){var m={code:o,grammar:c,language:f};if(i.hooks.run("before-tokenize",m),!m.grammar)throw new Error('The language "'+m.language+'" has no grammar.');return m.tokens=i.tokenize(m.code,m.grammar),i.hooks.run("after-tokenize",m),u.stringify(i.util.encode(m.tokens),m.language)},tokenize:function(o,c){var f=c.rest;if(f){for(var m in f)c[m]=f[m];delete c.rest}var g=new x;return A(g,g.head,o),y(o,g,c,g.head,0),N(g)},hooks:{all:{},add:function(o,c){var f=i.hooks.all;f[o]=f[o]||[],f[o].push(c)},run:function(o,c){var f=i.hooks.all[o];if(!(!f||!f.length))for(var m=0,g;g=f[m++];)g(c)}},Token:u};a.Prism=i;function u(o,c,f,m){this.type=o,this.content=c,this.alias=f,this.length=(m||"").length|0}u.stringify=function o(c,f){if(typeof c=="string")return c;if(Array.isArray(c)){var m="";return c.forEach(function(w){m+=o(w,f)}),m}var g={type:c.type,content:o(c.content,f),tag:"span",classes:["token",c.type],attributes:{},language:f},b=c.alias;b&&(Array.isArray(b)?Array.prototype.push.apply(g.classes,b):g.classes.push(b)),i.hooks.run("wrap",g);var S="";for(var v in g.attributes)S+=" "+v+'="'+(g.attributes[v]||"").replace(/"/g,"&quot;")+'"';return"<"+g.tag+' class="'+g.classes.join(" ")+'"'+S+">"+g.content+"</"+g.tag+">"};function d(o,c,f,m){o.lastIndex=c;var g=o.exec(f);if(g&&m&&g[1]){var b=g[1].length;g.index+=b,g[0]=g[0].slice(b)}return g}function y(o,c,f,m,g,b){for(var S in f)if(!(!f.hasOwnProperty(S)||!f[S])){var v=f[S];v=Array.isArray(v)?v:[v];for(var w=0;w<v.length;++w){if(b&&b.cause==S+","+w)return;var L=v[w],V=L.inside,Tt=!!L.lookbehind,It=!!L.greedy,Bn=L.alias;if(It&&!L.pattern.global){var zn=L.pattern.toString().match(/[imsuy]*$/)[0];L.pattern=RegExp(L.pattern.source,zn+"g")}for(var Ot=L.pattern||L,R=m.next,z=g;R!==c.tail&&!(b&&z>=b.reach);z+=R.value.length,R=R.next){var le=R.value;if(c.length>o.length)return;if(!(le instanceof u)){var Ie=1,B;if(It){if(B=d(Ot,z,o,Tt),!B||B.index>=o.length)break;var Oe=B.index,jn=B.index+B[0].length,X=z;for(X+=R.value.length;Oe>=X;)R=R.next,X+=R.value.length;if(X-=R.value.length,z=X,R.value instanceof u)continue;for(var he=R;he!==c.tail&&(X<jn||typeof he.value=="string");he=he.next)Ie++,X+=he.value.length;Ie--,le=o.slice(z,X),B.index-=z}else if(B=d(Ot,0,le,Tt),!B)continue;var Oe=B.index,we=B[0],ze=le.slice(0,Oe),wt=le.slice(Oe+we.length),je=z+le.length;b&&je>b.reach&&(b.reach=je);var ke=R.prev;ze&&(ke=A(c,ke,ze),z+=ze.length),k(c,ke,Ie);var Hn=new u(S,V?i.tokenize(we,V):we,Bn,we);if(R=A(c,ke,Hn),wt&&A(c,R,wt),Ie>1){var He={cause:S+","+w,reach:je};y(o,c,f,R.prev,z,He),b&&He.reach>b.reach&&(b.reach=He.reach)}}}}}}function x(){var o={value:null,prev:null,next:null},c={value:null,prev:o,next:null};o.next=c,this.head=o,this.tail=c,this.length=0}function A(o,c,f){var m=c.next,g={value:f,prev:c,next:m};return c.next=g,m.prev=g,o.length++,g}function k(o,c,f){for(var m=c.next,g=0;g<f&&m!==o.tail;g++)m=m.next;c.next=m,m.prev=c,o.length-=g}function N(o){for(var c=[],f=o.head.next;f!==o.tail;)c.push(f.value),f=f.next;return c}if(!a.document)return a.addEventListener&&(i.disableWorkerMessageHandler||a.addEventListener("message",function(o){var c=JSON.parse(o.data),f=c.language,m=c.code,g=c.immediateClose;a.postMessage(i.highlight(m,i.languages[f],f)),g&&a.close()},!1)),i;var T=i.util.currentScript();T&&(i.filename=T.src,T.hasAttribute("data-manual")&&(i.manual=!0));function E(){i.manual||i.highlightAll()}if(!i.manual){var h=document.readyState;h==="loading"||h==="interactive"&&T&&T.defer?document.addEventListener("DOMContentLoaded",E):window.requestAnimationFrame?window.requestAnimationFrame(E):window.setTimeout(E,16)}return i}(t);e.exports&&(e.exports=n),typeof tn<"u"&&(tn.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(a){a.type==="entity"&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(r,s){var l={};l["language-"+s]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[s]},l.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:l}};i["language-"+s]={pattern:/[\s\S]+/,inside:n.languages[s]};var u={};u[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:i},n.languages.insertBefore("markup","cdata",u)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(a,r){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+a+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:n.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(a){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+r.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},a.languages.css.atrule.inside.rest=a.languages.css;var s=a.languages.markup;s&&(s.tag.addInlined("style","css"),s.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var a="Loading…",r=function(T,E){return"✖ Error "+T+" while fetching file: "+E},s="✖ Error: File does not exist or is empty",l={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},i="data-src-status",u="loading",d="loaded",y="failed",x="pre[data-src]:not(["+i+'="'+d+'"]):not(['+i+'="'+u+'"])';function A(T,E,h){var o=new XMLHttpRequest;o.open("GET",T,!0),o.onreadystatechange=function(){o.readyState==4&&(o.status<400&&o.responseText?E(o.responseText):o.status>=400?h(r(o.status,o.statusText)):h(s))},o.send(null)}function k(T){var E=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(T||"");if(E){var h=Number(E[1]),o=E[2],c=E[3];return o?c?[h,Number(c)]:[h,void 0]:[h,h]}}n.hooks.add("before-highlightall",function(T){T.selector+=", "+x}),n.hooks.add("before-sanity-check",function(T){var E=T.element;if(E.matches(x)){T.code="",E.setAttribute(i,u);var h=E.appendChild(document.createElement("CODE"));h.textContent=a;var o=E.getAttribute("data-src"),c=T.language;if(c==="none"){var f=(/\.(\w+)$/.exec(o)||[,"none"])[1];c=l[f]||f}n.util.setLanguage(h,c),n.util.setLanguage(E,c);var m=n.plugins.autoloader;m&&m.loadLanguages(c),A(o,function(g){E.setAttribute(i,d);var b=k(E.getAttribute("data-range"));if(b){var S=g.split(/\r\n?|\n/g),v=b[0],w=b[1]==null?S.length:b[1];v<0&&(v+=S.length),v=Math.max(0,Math.min(v-1,S.length)),w<0&&(w+=S.length),w=Math.max(0,Math.min(w,S.length)),g=S.slice(v,w).join(`
`),E.hasAttribute("data-start")||E.setAttribute("data-start",String(v+1))}h.textContent=g,n.highlightElement(h)},function(g){E.setAttribute(i,y),h.textContent=g})}}),n.plugins.fileHighlight={highlight:function(E){for(var h=(E||document).querySelectorAll(x),o=0,c;c=h[o++];)n.highlightElement(c)}};var N=!1;n.fileHighlight=function(){N||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),N=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Un);var ai=Un.exports;const nn=ni(ai);Prism.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/};jr.add(ti);const ri={components:{FontAwesomeIcon:ei},setup(){const e=Ce(["ClickHouse","Pinot","Elasticsearch","MongoDB","PostgreSQL"]),t=Ce([{question:"How many hits were driven by advertising?",text:"SELECT COUNT(*) FROM hits WHERE AdvEngineID <> 0;"},{question:"What's the total ad impact, hit count, and average screen width?",text:"SELECT SUM(AdvEngineID), COUNT(*), AVG(ResolutionWidth) FROM hits;"},{question:"How many unique users visited the site?",text:"SELECT COUNT(DISTINCT UserID) FROM hits;"},{question:"What are the top 10 regions by unique user count?",text:"SELECT RegionID, COUNT(DISTINCT UserID) AS u FROM hits GROUP BY RegionID ORDER BY u DESC LIMIT 10;"},{question:"What are the top 10 search phrases from Google?",text:"SELECT SearchPhrase, MIN(URL), COUNT(*) AS c FROM hits WHERE URL LIKE '%google%' AND SearchPhrase <> '' GROUP BY SearchPhrase ORDER BY c DESC LIMIT 10;"}]),n=$n({"Load time":{ClickHouse:"494s",Pinot:"2032s",Elasticsearch:"10072s",MongoDB:"44824s",PostgreSQL:"2342s"},"Data size":{ClickHouse:"13.48 GiB",Pinot:"-",Elasticsearch:"71.37 GiB",MongoDB:"80.46 GiB",PostgreSQL:"72.45 GiB"},"Q1.":{ClickHouse:"0.007s",Pinot:"0.185s",Elasticsearch:"1.667s",MongoDB:"0.398s",PostgreSQL:"254.238s"},"Q2.":{ClickHouse:"0.020s",Pinot:"0.258s",Elasticsearch:"13.991s",MongoDB:"115.775s",PostgreSQL:"263.072s"},"Q3.":{ClickHouse:"0.339s",Pinot:"3.633s",Elasticsearch:"4.413s",MongoDB:"25.618s",PostgreSQL:"42.334s"},"Q4.":{ClickHouse:"0.490s",Pinot:"2.902s",Elasticsearch:"16.050s",MongoDB:"377.012s",PostgreSQL:"321.918s"},"Q5.":{ClickHouse:"0.622s",Pinot:"-",Elasticsearch:"16.459s",MongoDB:"20.130s",PostgreSQL:"267.690s"}}),a=Ce(!1),r=Ce(null),s=(d,y)=>{var h;const x=(h=n[d])==null?void 0:h[y];if(x==="-"||x===""||x===void 0)return"unavailable";const A=parseFloat(x);if(isNaN(A))return"unavailable";const N=Object.values(n[d]||{}).map(o=>parseFloat(o)).filter(o=>!isNaN(o)),T=Math.min(...N);if(A===T)return"best";const E=A/T;return E<2?"best":E<10?"good":E<50?"average":E<250?"below-average":"poor"},l=d=>{r.value=t.value[d],a.value=!0},i=()=>{a.value=!1},u=ne(()=>r.value?nn.highlight(r.value.text,nn.languages.sql,"sql"):"");return{databases:e,queries:t,benchmarkData:n,showModal:a,selectedQuery:r,getColorClass:s,showQueryModal:l,closeModal:i,highlightedSQL:u}}},St=e=>(Zn("data-v-eb04f6a7"),e=e(),Jn(),e),ii={class:"benchmark-table"},si=St(()=>P("th",{class:"query-col"},null,-1)),oi={class:"metadata-row"},li=St(()=>P("td",null,"Load time",-1)),ci={class:"metadata-row"},ui=St(()=>P("td",null,"Data size",-1)),fi={class:"query-cell"},di=["onClick"],mi=["innerHTML"];function gi(e,t,n,a,r,s){const l=Vn("FontAwesomeIcon");return C(),F(K,null,[P("table",ii,[P("thead",null,[P("tr",null,[si,(C(!0),F(K,null,pe(a.databases,i=>(C(),F("th",{key:i},ce(i),1))),128))])]),P("tbody",null,[P("tr",oi,[li,(C(!0),F(K,null,pe(a.databases,i=>(C(),F("td",{key:i,class:qe(a.getColorClass("Load time",i))},ce(a.benchmarkData["Load time"][i]),3))),128))]),P("tr",ci,[ui,(C(!0),F(K,null,pe(a.databases,i=>(C(),F("td",{key:i,class:qe(a.getColorClass("Data size",i))},[a.benchmarkData["Data size"][i]==="-"?(C(),Ge(l,{key:0,icon:["fas","skull-crossbones"],class:"unavailable-icon"})):(C(),F(K,{key:1},[kt(ce(a.benchmarkData["Data size"][i]),1)],64))],2))),128))]),(C(!0),F(K,null,pe(a.queries,(i,u)=>(C(),F("tr",{key:u,class:"query-row"},[P("td",fi,[P("button",{onClick:d=>a.showQueryModal(u),class:"view-query-btn"}," Query "+ce(u+1),9,di)]),(C(!0),F(K,null,pe(a.databases,d=>(C(),F("td",{key:d,class:qe(a.getColorClass(`Q${u+1}.`,d))},[a.benchmarkData[`Q${u+1}.`][d]==="-"?(C(),Ge(l,{key:0,icon:["fas","skull-crossbones"],class:"unavailable-icon"})):(C(),F(K,{key:1},[kt(ce(a.benchmarkData[`Q${u+1}.`][d]),1)],64))],2))),128))]))),128))])]),(C(),Ge(Qn,{to:"body"},[a.showModal?(C(),F("div",{key:0,class:"modal-backdrop",onClick:t[2]||(t[2]=(...i)=>a.closeModal&&a.closeModal(...i))},[P("div",{class:"modal-content",onClick:t[1]||(t[1]=Xn(()=>{},["stop"]))},[P("button",{class:"close-btn",onClick:t[0]||(t[0]=(...i)=>a.closeModal&&a.closeModal(...i))},"×"),P("h3",null,ce(a.selectedQuery.question),1),P("pre",null,[P("code",{class:"language-sql",innerHTML:a.highlightedSQL},null,8,mi)])])])):Kn("",!0)]))],64)}const hi=Yn(ri,[["render",gi],["__scopeId","data-v-eb04f6a7"]]),pi=ta("",43),vi=JSON.parse('{"title":"Load Testing","description":"","frontmatter":{},"headers":[],"relativePath":"load-testing.md","filePath":"load-testing.md"}'),bi={name:"load-testing.md"},Ei=Object.assign(bi,{setup(e){return(t,n)=>(C(),F("div",null,[pi,ea(hi)]))}});export{vi as __pageData,Ei as default};
