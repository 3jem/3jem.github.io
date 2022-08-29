(()=>{"use strict";var t={822:(t,e,i)=>{function n(t,e,i,n,s,a){e[t+0]=i,e[t+1]=n,e[t+2]=s,e[t+3]=a}i.d(e,{N:()=>n,I:()=>s});class s{constructor(t,e,i,n){this.r=t,this.g=e,this.b=i,this.a=n}static alphaComposite(t,e,i=new s(0,0,0,0)){let n=t.a/255,a=e.a/255,r=n+a*(1-n),h=0==r?0:n/r,o=0==r?0:a*(1-n)/r;return i.r=Math.round(t.r*h+e.r*o),i.g=Math.round(t.g*h+e.g*o),i.b=Math.round(t.b*h+e.b*o),i.a=Math.round(255*r),i}}},21:(t,e,i)=>{i.d(e,{xs:()=>s,FT:()=>r,uL:()=>h,Z$:()=>o,QW:()=>l});var n=i(822);class s{constructor(...t){this.layers=t}getPixels(){let t=this.layers[0].length,e=new Uint8ClampedArray(t);for(let i=0;i<t;i+=4){let t=new n.I(this.layers[0][i+0],this.layers[0][i+1],this.layers[0][i+2],this.layers[0][i+3]);for(let e=1;e<this.layers.length;e++)n.I.alphaComposite(new n.I(this.layers[e][i+0],this.layers[e][i+1],this.layers[e][i+2],this.layers[e][i+3]),t,t);e[i+0]=t.r,e[i+1]=t.g,e[i+2]=t.b,e[i+3]=t.a}return e}add(t){for(let e=0;e<t.layers.length;e++)this.layers.push(t.layers[e])}}class a extends s{constructor(...t){super(...t),this.staticScene=void 0,this.updateStaticScene()}getPixels(){return this.staticScene}updateStaticScene(){this.staticScene=super.getPixels()}}function r(t,e,i){let n=new Uint8ClampedArray(t*e*4);for(let t=0;t<n.length;t+=4)n[t]=i.r,n[t+1]=i.g,n[t+2]=i.b,n[t+3]=i.a;return new a(n)}class h{constructor(){this.prevTimeStamp=0,this.isRunning=!1}update(){}init(){}}class o{constructor(t,e,i,n,s){this.simulation=t,this.canvas=e,this.context=e.getContext("2d"),this.screenWidth=i,this.screenHeight=n,this.backgroundScene=s}render(){}}class l{constructor(t,e,i,n,s){this.simulation=t,this.simulationView=e,this.isRunning=!1,this.updatesPerDraw=s,this.dividor=i,this.heading=this.dividor.appendChild(document.createElement("h2")),this.heading.innerHTML=n,this.screenDividor=i.appendChild(document.createElement("div")),this.canvas=e.canvas,this.screenDividor.appendChild(this.canvas),this.canvas.width=e.screenWidth,this.canvas.height=e.screenHeight,this.context=this.canvas.getContext("2d"),this.controlsDividor=i.appendChild(document.createElement("div")),this.startStopBtn=this.controlsDividor.appendChild(document.createElement("button")),this.resetBtn=this.controlsDividor.appendChild(document.createElement("button")),this.resetBtn.innerHTML="Reset",this.startStopBtn.addEventListener("click",this.toggleRun.bind(this)),this.resetBtn.addEventListener("click",this.reset.bind(this)),this.init()}draw(){this.simulationView.render()}init(){this.startStopBtn.innerHTML="Start",this.draw()}animate(t){if(this.isRunning){if(t-this.simulation.prevTimeStamp>30){this.simulation.prevTimeStamp=t;for(let t=0;t<this.updatesPerDraw;t++)this.simulation.update();this.draw()}window.requestAnimationFrame(this.animate.bind(this))}}stop(){this.isRunning=!1,this.startStopBtn.innerHTML="Start"}run(){this.isRunning=!0,this.startStopBtn.innerHTML="Stop",window.requestAnimationFrame(this.animate.bind(this))}toggleRun(){this.isRunning?this.stop():this.run()}reset(){this.stop(),this.simulation.init(),this.prevTimeStamp=0,this.draw()}}},40:(t,e,i)=>{i.d(e,{Z:()=>h});var n=i(81),s=i.n(n),a=i(645),r=i.n(a)()(s());r.push([t.id,".Simulation {\n    border-radius: 5px;\n    padding: 10px;\n    border: 2px solid rgb(0,0,0);\n}\n\n.Simulation > h2 {\n    margin: auto;\n    width: 75%;\n    padding: 10px;\n    text-align: center;\n}\n\n.Simulation > div {\n    margin: auto;\n    width: 100%;\n    padding: 10px;\n}\n",""]);const h=r},402:(t,e,i)=>{i.d(e,{Z:()=>h});var n=i(81),s=i.n(n),a=i(645),r=i.n(a)()(s());r.push([t.id,"h1 {\n    color: green;\n    margin: auto;\n    width: 75%;\n    padding: 10px;\n    text-align: center;\n}\n\n.container {\n    display: flex;\n    flex-wrap: wrap;\n    flex: 1 1;\n    justify-content: center;\n    gap: 20px\n}\n\n",""]);const h=r},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i="",n=void 0!==e[5];return e[4]&&(i+="@supports (".concat(e[4],") {")),e[2]&&(i+="@media ".concat(e[2]," {")),n&&(i+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),i+=t(e),n&&(i+="}"),e[2]&&(i+="}"),e[4]&&(i+="}"),i})).join("")},e.i=function(t,i,n,s,a){"string"==typeof t&&(t=[[null,t,void 0]]);var r={};if(n)for(var h=0;h<this.length;h++){var o=this[h][0];null!=o&&(r[o]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);n&&r[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),i&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=i):d[2]=i),s&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=s):d[4]="".concat(s)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function i(t){for(var i=-1,n=0;n<e.length;n++)if(e[n].identifier===t){i=n;break}return i}function n(t,n){for(var a={},r=[],h=0;h<t.length;h++){var o=t[h],l=n.base?o[0]+n.base:o[0],d=a[l]||0,c="".concat(l," ").concat(d);a[l]=d+1;var u=i(c),p={css:o[1],media:o[2],sourceMap:o[3],supports:o[4],layer:o[5]};if(-1!==u)e[u].references++,e[u].updater(p);else{var m=s(p,n);n.byIndex=h,e.splice(h,0,{identifier:c,updater:m,references:1})}r.push(c)}return r}function s(t,e){var i=e.domAPI(e);return i.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;i.update(t=e)}else i.remove()}}t.exports=function(t,s){var a=n(t=t||[],s=s||{});return function(t){t=t||[];for(var r=0;r<a.length;r++){var h=i(a[r]);e[h].references--}for(var o=n(t,s),l=0;l<a.length;l++){var d=i(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=o}}},569:t=>{var e={};t.exports=function(t,i){var n=function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(i)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,i)=>{t.exports=function(t){var e=i.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(i){!function(t,e,i){var n="";i.supports&&(n+="@supports (".concat(i.supports,") {")),i.media&&(n+="@media ".concat(i.media," {"));var s=void 0!==i.layer;s&&(n+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),n+=i.css,s&&(n+="}"),i.media&&(n+="}"),i.supports&&(n+="}");var a=i.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,i)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function i(n){var s=e[n];if(void 0!==s)return s.exports;var a=e[n]={id:n,exports:{}};return t[n](a,a.exports,i),a.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=i(21);class e{constructor(t,e){this.x=t,this.y=e}}class n{constructor(t,e,i){this.v1=t,this.v2=e,this.v3=i}}class s{constructor(t,e){this.x=t,this.y=e,this.length=this.calcLength(),this.angle=this.calcAngle()}normalize(){return this.x=this.x/this.length,this.y=this.y/this.length,this.length=this.calcLength(),this}calcLength(){return Math.sqrt(this.x**2+this.y**2)}add(t){return new s(this.x+t.x,this.y+t.y)}sub(t){return new s(this.x-t.x,this.y-t.y)}div(t){return new s(this.x/t,this.y/t)}mult(t){return new s(this.x*t,this.y*t)}calcAngle(){return Math.atan2(this.y,this.x)}}function a(t,e){return new s(t.x-e.x,t.y-e.y)}function r(t,e,i){return(t.x-i.x)*(e.y-i.y)-(e.x-i.x)*(t.y-i.y)}function h(t,e,i,n){let s=r(n,t,e),a=r(n,e,i),h=r(n,i,t);return!((s<0||a<0||h<0)&&(s>0||a>0||h>0))}new s(0,0);class o extends t.uL{constructor(t){super(),this.numPoints=t,this.init()}update(){if(0==this.triangles.size){function t(e,i){if(2!=e.length)if(3!=e.length){let s=[e[0]];for(let t=0;t<=e.length-3;t+=2){let[a,r,h]=e.slice(t,t+3);i.points.add(a).add(r).add(h),i.triangles.add(new n(a,r,h)),i.isolatedPoints.delete(a),i.isolatedPoints.delete(r),i.isolatedPoints.delete(h),s.push(e[t+2])}e.length%2==0&&i.triangles.add(new n(e[e.length-2],e[e.length-1],e[0])),t(s,i)}else i.triangles.add(new n(e[0],e[1],e[2]))}t(this.convexHull,this)}else{for(let t of this.isolatedPoints){let e=null,i=0;for(let s of Array.from(this.triangles))if(h(s.v1,s.v2,s.v3,t)){this.triangles.add(new n(t,s.v1,s.v2)),this.triangles.add(new n(t,s.v2,s.v3)),this.triangles.add(new n(t,s.v3,s.v1)),e=s,i=1;break}1==i?this.triangles.delete(e):alert("Point not found inside any triangle!")}this.isolatedPoints=new Set}}init(){this.isolatedPoints=new Set;for(let t=0;t<this.numPoints;t++)this.isolatedPoints.add(new e(Math.random(),Math.random()));this.convexHull=function(t){let i=[],n=1/0,s=new e(1/0,1/0),r=0;for(let e=0;e<t.length;e++){let i=t[e];i.y<n?(n=i.y,s=i,r=e):i.y==n&&i.x<s.x&&(s=i,r=e)}function h(t,e,i){let n=(e.x-t.x)*(i.y-t.y)-(i.x-t.x)*(e.y-t.y);return n>0?1:n<0?-1:0}t[0],t[r]=t[r],t[0],function(t){let e=new Set;t.sort((function(t,i){let n=a(t,s),r=a(i,s);return n.angle+Math.PI<r.angle+Math.PI?-1:n.angle>r.angle?1:n.length<r.length?(e.add(n),-1):0})).filter((t=>!e.has(t)))}(t);for(let e of t){for(;i.length>1&&h(i[i.length-2],i[i.length-1],e)<=0;)i.pop();i.push(e)}return i}(Array.from(this.isolatedPoints)),this.triangles=new Set,this.points=new Set}}class l extends t.Z${constructor(t,e,i,n,s){super(t,e,i,n,s),this.halfScreenWidth=i/2,this.halfScreenHeight=n/2}toDisplayCoord(t){return new e(Math.trunc(this.screenWidth*t.x),Math.trunc(this.screenHeight*t.y))}render(){let t=this.context,e=null;t.clearRect(0,0,this.screenWidth,this.screenHeight);for(let e of this.simulation.isolatedPoints){t.fillStyle="black",t.beginPath();let i=this.toDisplayCoord(e);t.ellipse(i.x,i.y,2,2,0,0,2*Math.PI),t.fill()}for(let i of this.simulation.triangles)t.lineWidth=1,t.beginPath(),e=this.toDisplayCoord(i.v1),t.moveTo(e.x,e.y),e=this.toDisplayCoord(i.v2),t.lineTo(e.x,e.y),e=this.toDisplayCoord(i.v3),t.lineTo(e.x,e.y),t.closePath(),t.stroke()}}class d extends t.QW{constructor(t,e,i,n,s){super(t,e,i,n,s)}animate(t){this.isRunning&&0==this.simulation.isolatedPoints.size?super.stop():super.animate(t)}}var c=new o(100);new d(c,new l(c,document.createElement("canvas"),600,400),document.getElementById("TriangularMesh"),"Make a Triangular Mesh",2)})(),(()=>{var t=i(21),e=i(822);class n extends t.uL{constructor(t,e,i){super(),this.rule=t,this.length=e,this.iterations=i,this.data=new Uint8ClampedArray(e*i),this.row=0,this.init()}update(){let t=this.row*this.length,e=t+this.length-1,i=(t+this.length)%this.data.length,n=i+this.length-1;this.data[i]=this.rule(this.data[e],this.data[t],this.data[t+1]);for(let n=t+1,s=i+1;n<e;n++,s++)this.data[s]=this.rule(this.data[n-1],this.data[n],this.data[n+1]);this.data[n]=this.rule(this.data[e-1],this.data[e],this.data[t]),this.row=(this.row+1)%this.iterations}init(){for(let t=0;t<this.data.length;t++)this.data[t]=0;this.data[Math.floor(this.length/2)]=1,this.row=0}}class s extends t.Z${constructor(t,e,i,n,s){super(t,e,i,n,s)}render(){let t=new ImageData(this.makeScene().getPixels(),this.screenWidth,this.screenHeight);this.context.putImageData(t,0,0)}makeScene(){let i=new Uint8ClampedArray(this.screenWidth*this.screenHeight*4),n=0;for(let t=this.simulation.length*((this.simulation.row+1)%this.simulation.iterations);t<this.simulation.data.length;t++)0==this.simulation.data[t]?(0,e.N)(n,i,255,255,255,255):(0,e.N)(n,i,42,119,35,255),n+=4;for(let t=0;t<this.simulation.length*((this.simulation.row+1)%this.simulation.iterations);t++)0==this.simulation.data[t]?(0,e.N)(n,i,255,255,255,255):(0,e.N)(n,i,42,119,35,255),n+=4;return new t.xs(i)}}class a extends t.QW{constructor(t,e,i,n,s){super(t,e,i,n,s),this.ruleFieldLabel=this.controlsDividor.appendChild(document.createElement("label")),this.ruleFieldLabel.innerHTML="Wolfram Code: ",this.ruleField=this.controlsDividor.appendChild(document.createElement("input")),this.ruleField.setAttribute("type","text"),this.ruleField.setAttribute("value","110")}run(){let t=this.ruleField.value;isNaN(t)?alert("Invalid Wolfram Rule. Please enter a value between 0 and 255 (inclusive)."):(this.simulation.rule=r(t),null==this.simulation.rule?alert("Invalid Wolfram Rule. Please enter a value between 0 and 255 (inclusive)."):super.run())}}function r(t){if(!(t>255||t<0)){let e=t>>7&1,i=t>>6&1,n=t>>5&1,s=t>>4&1,a=t>>3&1,r=t>>2&1,h=t>>1&1,o=t>>0&1;return function(t,l,d){return 1==t&&1==l&&1==d?e:1==t&&1==l&&0==d?i:1==t&&0==l&&1==d?n:1==t&&0==l&&0==d?s:0==t&&1==l&&1==d?a:0==t&&1==l&&0==d?r:0==t&&0==l&&1==d?h:o}}}var h=new n(r(30),600,400);new a(h,new s(h,document.createElement("canvas"),600,400,(0,t.FT)(600,400,new e.I(255,255,255,255))),document.getElementById("CA1D"),"Elementary 1D Cellular Automata",2)})(),(()=>{var t=i(21),e=i(822);class n extends t.uL{constructor(t,e,i){super(),this.probOfRain=t,this.width=e,this.height=i,this.data=new Uint8ClampedArray(e*i),this.row=0,this.init()}rule(){return Math.random()<this.probOfRain?1:0}update(){let t=this.row*this.width,e=t+this.width-1,i=(t+this.width)%this.data.length;this.width;for(let n=i,s=t;s<=e;n++,s++)this.data[s]=this.rule();this.row=(this.row+1)%this.height}init(){for(let t=0;t<this.data.length;t++)this.data[t]=0;this.row=0}streak(t){let e=new Uint8ClampedArray(this.data.length);for(let i=0;i<this.data.length;i++)if(1==this.data[i])for(let n=0;n<t;n++){let t=i-this.width*n;if(t<0)break;e[t]=1}else e[i]=0;return e}}class s extends t.Z${constructor(t,e,i,n,s,a,r){super(t,e,i,n,s),this.dropLength=a,this.rainColor=r}render(){let t=new ImageData(this.makeScene().getPixels(),this.screenWidth,this.screenHeight);this.context.putImageData(t,0,0)}makeScene(){let i=new Uint8ClampedArray(this.screenWidth*this.screenHeight*4),n=0,s=this.simulation.streak(this.dropLength);for(let t=this.simulation.width*this.simulation.row-1;t>=0;t--){if(0==s[t]){let t=this.backgroundScene.getPixels();(0,e.N)(n,i,t[n+0],t[n+1],t[n+2],t[n+3])}else(0,e.N)(n,i,this.rainColor.r,this.rainColor.g,this.rainColor.b,this.rainColor.a);n+=4}for(let t=this.simulation.data.length-1;t>=this.simulation.width*this.simulation.row;t--){if(0==s[t]){let t=this.backgroundScene.getPixels();(0,e.N)(n,i,t[n+0],t[n+1],t[n+2],t[n+3])}else(0,e.N)(n,i,this.rainColor.r,this.rainColor.g,this.rainColor.b,this.rainColor.a);n+=4}return new t.xs(i)}}class a extends t.uL{constructor(t,e,i,s){super(),this.probOfRain=t,this.relativeSpeed=e,this.width=i,this.height=s,this.rain=new n(t/2,i,s),this.backgroundRain=new n(t/2,i,s),this.relativeDisplacement=0}init(){this.rain.init(),this.backgroundRain.init()}update(){for(this.backgroundRain.update(),this.relativeDisplacement=-1;this.relativeDisplacement<this.relativeSpeed;)this.rain.update(),this.relativeDisplacement+=1}}class r extends t.Z${constructor(i,n,a,r,h,o,l,d,c){super(i,n,a,r,h),this.rainView=new s(this.simulation.rain,n,a,r,(0,t.FT)(a,r,new e.I(0,0,0,0)),o,d),this.backgroundRainView=new s(this.simulation.backgroundRain,n,a,r,(0,t.FT)(a,r,new e.I(0,0,0,0)),l,d)}render(){let t=new ImageData(this.makeScene().getPixels(),this.screenWidth,this.screenHeight);this.context.putImageData(t,0,0)}makeScene(){let e=new t.xs;return e.add(this.backgroundScene),e.add(this.backgroundRainView.makeScene()),e.add(this.rainView.makeScene()),e}}class h extends t.QW{constructor(t,e,i,n,s){super(t,e,i,n,s)}}var o=new a(.005,2,600,400);new h(o,new r(o,document.createElement("canvas"),600,400,(0,t.FT)(600,400,new e.I(45,50,105,255)),7,5,new e.I(10,15,61,255),new e.I(10,15,61,255)),document.getElementById("DoubleRain"),"Two-Speed Rain",10)})(),(()=>{var t=i(21),e=i(822);class n extends t.uL{constructor(t,e,i,n){super(),this.harmonic=t,this.wavelength=2*n/t,this.maxAmplitude=e,this.period=i,this.length=n,this.data=new Uint8ClampedArray(2*e*n),this.t=0,this.init()}init(){this.t=0,this.update()}update(){for(let t=0;t<this.length;t++){let e=this.maxAmplitude*Math.sin(2*Math.PI*(t/this.wavelength))*Math.cos(2*Math.PI*this.t/this.period)+this.maxAmplitude;for(let i=0;i<e;i++)this.data[this.length*i+t]=0;for(let i=Math.ceil(e);i<2*this.maxAmplitude;i++)this.data[this.length*i+t]=1}this.t=(this.t+1)%this.period}}class s extends t.Z${constructor(t,e,i,n,s){super(t,e,i,n,s)}render(){let t=new ImageData(this.makeScene().getPixels(),this.screenWidth,this.screenHeight);this.context.putImageData(t,0,0)}makeScene(){let i=new Uint8ClampedArray(this.screenWidth*this.screenHeight*4),n=0;for(let t=0;t<this.simulation.data.length;t++)0==this.simulation.data[t]?(0,e.N)(n,i,255,255,255,255):(0,e.N)(n,i,0,0,0,255),n+=4;return new t.xs(i)}}class a extends t.QW{constructor(t,e,i,n,s){super(t,e,i,n,s)}run(){super.run()}}var r=new n(3,200,500,600);new a(r,new s(r,document.createElement("canvas"),600,400,(0,t.FT)(600,400,new e.I(0,0,0,0))),document.getElementById("Waves"),"Standing Wave",2)})(),(()=>{var t=i(379),e=i.n(t),n=i(795),s=i.n(n),a=i(569),r=i.n(a),h=i(565),o=i.n(h),l=i(216),d=i.n(l),c=i(589),u=i.n(c),p=i(402),m={};m.styleTagTransform=u(),m.setAttributes=o(),m.insert=r().bind(null,"head"),m.domAPI=s(),m.insertStyleElement=d(),e()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals;var g=i(40),f={};f.styleTagTransform=u(),f.setAttributes=o(),f.insert=r().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=d(),e()(g.Z,f),g.Z&&g.Z.locals&&g.Z.locals})()})();