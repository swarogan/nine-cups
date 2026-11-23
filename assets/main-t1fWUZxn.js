(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ro="187",Ru=0,pl=1,Cu=2,Ds=1,Pu=2,As=3,Ei=0,$t=1,Pn=2,Mi=0,Is=1,Si=2,ml=3,gl=4,Lu=5,Qi=100,Du=101,Iu=102,Nu=103,Uu=104,Fu=200,Ou=201,Bu=202,zu=203,wc=204,Rc=205,Gu=206,Hu=207,ku=208,Vu=209,Wu=210,Xu=211,qu=212,Yu=213,Ku=214,Da=0,Ia=1,Na=2,Bs=3,Ua=4,Fa=5,Oa=6,Ba=7,Co=0,$u=1,Zu=2,Kn=0,Po=1,Lo=2,Do=3,Vr=4,Io=5,No=6,Uo=7,Cc=300,ns=301,zs=302,Qr=303,jr=304,Ti=1e3,Dn=1001,za=1002,Gt=1003,Ju=1004,$s=1005,en=1006,ea=1007,qn=1008,un=1009,Pc=1010,Lc=1011,Gs=1012,Fo=1013,Nn=1014,yn=1015,tn=1016,Oo=1017,Bo=1018,is=1020,Dc=35902,Ic=35899,Nc=1021,Uc=1022,In=1023,li=1026,ai=1027,zo=1028,Go=1029,bi=1030,Ho=1031,ko=1033,Tr=33776,br=33777,Ar=33778,wr=33779,Ga=35840,Ha=35841,ka=35842,Va=35843,Wa=36196,Xa=37492,qa=37496,Ya=37488,Ka=37489,Ir=37490,$a=37491,Za=37808,Ja=37809,Qa=37810,ja=37811,eo=37812,to=37813,no=37814,io=37815,so=37816,ro=37817,ao=37818,oo=37819,lo=37820,co=37821,uo=36492,ho=36494,fo=36495,po=36283,mo=36284,Nr=36285,go=36286,Qu=3200,Ur=0,ju=1,ri="",zt="srgb",Fr="srgb-linear",Or="linear",ut="srgb",ta=7680,eh=519,th=512,nh=513,ih=514,Fc=515,sh=516,rh=517,Oc=518,Bc=519,zc=35044,_l="300 es",En=2e3,Hs=2001;function ah(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ks(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function oh(){const i=ks("canvas");return i.style.display="block",i}const vl={};function Br(...i){const e="THREE."+i.shift();console.log(e,...i)}function Gc(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function He(...i){i=Gc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function lt(...i){i=Gc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function es(...i){const e=i.join(" ");e in vl||(vl[e]=!0,He(...i))}function lh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const ch={[Da]:Da,[Na]:Oa,[Ua]:Ua,[Bs]:Fa,[Ia]:Ia,[Oa]:Na,[Ba]:Ba,[Fa]:Bs};class Ai{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xl=1234567;const Ns=Math.PI/180,ss=180/Math.PI;function ci(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function Ze(i,e,t){return Math.max(e,Math.min(t,i))}function Vo(i,e){return(i%e+e)%e}function uh(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function hh(i,e,t){return i!==e?(t-i)/(e-i):0}function Us(i,e,t){return(1-t)*i+t*e}function fh(i,e,t,n){return Us(i,e,1-Math.exp(-t*n))}function dh(i,e=1){return e-Math.abs(Vo(i,e*2)-e)}function ph(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function mh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function gh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function _h(i,e){return i+Math.random()*(e-i)}function vh(i){return i*(.5-Math.random())}function xh(i){i!==void 0&&(xl=i);let e=xl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Mh(i){return i*Ns}function Sh(i){return i*ss}function yh(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Eh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Hc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Th(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),p=r((e-n)/2),f=a((e-n)/2),m=r((n-e)/2),v=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*p,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*p,o*c);break;case"ZXZ":i.set(l*p,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*v,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*v,o*c);break;case"ZYZ":i.set(l*v,l*m,o*h,o*c);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Wr(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Wo(i,e){if(e.constructor===Float32Array)return i;const t=Wr(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Xo(i,e){if(e.constructor===Float32Array)return i;const t=Wr(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}const rs={DEG2RAD:Ns,RAD2DEG:ss,generateUUID:ci,clamp:Ze,euclideanModulo:Vo,mapLinear:uh,inverseLerp:hh,lerp:Us,damp:fh,pingpong:dh,smoothstep:ph,smootherstep:mh,randInt:gh,randFloat:_h,randFloatSpread:vh,seededRandom:xh,degToRad:Mh,radToDeg:Sh,isPowerOfTwo:yh,ceilPowerOfTwo:Eh,floorPowerOfTwo:Hc,setQuaternionFromProperEuler:Th,normalize:Xo,denormalize:Wo},ll=class ll{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ll.prototype.isVector2=!0;let be=ll;class us{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],p=n[s+3],f=r[a+0],m=r[a+1],v=r[a+2],S=r[a+3];if(p!==S||l!==f||c!==m||h!==v){let g=l*f+c*m+h*v+p*S;g<0&&(f=-f,m=-m,v=-v,S=-S,g=-g);let d=1-o;if(g<.9995){const M=Math.acos(g),C=Math.sin(M);d=Math.sin(d*M)/C,o=Math.sin(o*M)/C,l=l*d+f*o,c=c*d+m*o,h=h*d+v*o,p=p*d+S*o}else{l=l*d+f*o,c=c*d+m*o,h=h*d+v*o,p=p*d+S*o;const M=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=M,c*=M,h*=M,p*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],p=r[a],f=r[a+1],m=r[a+2],v=r[a+3];return e[t]=o*v+h*p+l*m-c*f,e[t+1]=l*v+h*f+c*p-o*m,e[t+2]=c*v+h*m+o*f-l*p,e[t+3]=h*v-o*p-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),p=o(r/2),f=l(n/2),m=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=f*h*p+c*m*v,this._y=c*m*p-f*h*v,this._z=c*h*v+f*m*p,this._w=c*h*p-f*m*v;break;case"YXZ":this._x=f*h*p+c*m*v,this._y=c*m*p-f*h*v,this._z=c*h*v-f*m*p,this._w=c*h*p+f*m*v;break;case"ZXY":this._x=f*h*p-c*m*v,this._y=c*m*p+f*h*v,this._z=c*h*v+f*m*p,this._w=c*h*p-f*m*v;break;case"ZYX":this._x=f*h*p-c*m*v,this._y=c*m*p+f*h*v,this._z=c*h*v-f*m*p,this._w=c*h*p+f*m*v;break;case"YZX":this._x=f*h*p+c*m*v,this._y=c*m*p+f*h*v,this._z=c*h*v-f*m*p,this._w=c*h*p-f*m*v;break;case"XZY":this._x=f*h*p-c*m*v,this._y=c*m*p-f*h*v,this._z=c*h*v+f*m*p,this._w=c*h*p+f*m*v;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],p=t[10],f=n+o+p;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>p){const m=2*Math.sqrt(1+n-o-p);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>p){const m=2*Math.sqrt(1+o-n-p);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+p-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const cl=class cl{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ml.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ml.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),p=2*(r*n-a*t);return this.x=t+l*c+a*p-o*h,this.y=n+l*h+o*c-r*p,this.z=s+l*p+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return na.copy(this).projectOnVector(e),this.sub(na)}reflect(e){return this.sub(na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};cl.prototype.isVector3=!0;let B=cl;const na=new B,Ml=new us,ul=class ul{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],p=n[7],f=n[2],m=n[5],v=n[8],S=s[0],g=s[3],d=s[6],M=s[1],C=s[4],y=s[7],w=s[2],T=s[5],_=s[8];return r[0]=a*S+o*M+l*w,r[3]=a*g+o*C+l*T,r[6]=a*d+o*y+l*_,r[1]=c*S+h*M+p*w,r[4]=c*g+h*C+p*T,r[7]=c*d+h*y+p*_,r[2]=f*S+m*M+v*w,r[5]=f*g+m*C+v*T,r[8]=f*d+m*y+v*_,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=h*a-o*c,f=o*l-h*r,m=c*r-a*l,v=t*p+n*f+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=p*S,e[1]=(s*c-h*n)*S,e[2]=(o*n-s*a)*S,e[3]=f*S,e[4]=(h*t-s*l)*S,e[5]=(s*r-o*t)*S,e[6]=m*S,e[7]=(n*l-c*t)*S,e[8]=(a*t-n*r)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return es("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ia.makeScale(e,t)),this}rotate(e){return es("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ia.makeRotation(-e)),this}translate(e,t){return es("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ia.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ul.prototype.isMatrix3=!0;let We=ul;const ia=new We,Sl=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yl=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bh(){const i={enabled:!0,workingColorSpace:Fr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ut&&(s.r=$n(s.r),s.g=$n(s.g),s.b=$n(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ut&&(s.r=ts(s.r),s.g=ts(s.g),s.b=ts(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ri?Or:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Fr]:{primaries:e,whitePoint:n,transfer:Or,toXYZ:Sl,fromXYZ:yl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:e,whitePoint:n,transfer:ut,toXYZ:Sl,fromXYZ:yl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),i}const tt=bh();function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ts(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Pi;class Ah{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Pi===void 0&&(Pi=ks("canvas")),Pi.width=e.width,Pi.height=e.height;const s=Pi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Pi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ks("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=$n(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($n(t[n]/255)*255):t[n]=$n(t[n]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wh=0;class qo{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=ci(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(sa(s[a].image)):r.push(sa(s[a]))}else r=sa(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function sa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ah.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}let Rh=0;const ra=new B;class Ht extends Ai{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,n=Dn,s=Dn,r=en,a=qn,o=In,l=un,c=Ht.DEFAULT_ANISOTROPY,h=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=ci(),this.name="",this.source=new qo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ra).x}get height(){return this.source.getSize(ra).y}get depth(){return this.source.getSize(ra).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ti:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case za:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ti:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case za:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=Cc;Ht.DEFAULT_ANISOTROPY=1;const hl=class hl{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],p=l[8],f=l[1],m=l[5],v=l[9],S=l[2],g=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(p-S)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+S)<.1&&Math.abs(v+g)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(c+1)/2,y=(m+1)/2,w=(d+1)/2,T=(h+f)/4,_=(p+S)/4,E=(v+g)/4;return C>y&&C>w?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=T/n,r=_/n):y>w?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=E/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=_/r,s=E/r),this.set(n,s,r,t),this}let M=Math.sqrt((g-v)*(g-v)+(p-S)*(p-S)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(g-v)/M,this.y=(p-S)/M,this.z=(f-h)/M,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};hl.prototype.isVector4=!0;let yt=hl;class Ch extends Ai{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Ht({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new qo(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nn extends Ch{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class kc extends Ht{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ph extends Ht{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const kr=class kr{constructor(e,t,n,s,r,a,o,l,c,h,p,f,m,v,S,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,p,f,m,v,S,g)}set(e,t,n,s,r,a,o,l,c,h,p,f,m,v,S,g){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=p,d[14]=f,d[3]=m,d[7]=v,d[11]=S,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kr().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Li.setFromMatrixColumn(e,0).length(),r=1/Li.setFromMatrixColumn(e,1).length(),a=1/Li.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const f=a*h,m=a*p,v=o*h,S=o*p;t[0]=l*h,t[4]=-l*p,t[8]=c,t[1]=m+v*c,t[5]=f-S*c,t[9]=-o*l,t[2]=S-f*c,t[6]=v+m*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,m=l*p,v=c*h,S=c*p;t[0]=f+S*o,t[4]=v*o-m,t[8]=a*c,t[1]=a*p,t[5]=a*h,t[9]=-o,t[2]=m*o-v,t[6]=S+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,m=l*p,v=c*h,S=c*p;t[0]=f-S*o,t[4]=-a*p,t[8]=v+m*o,t[1]=m+v*o,t[5]=a*h,t[9]=S-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,m=a*p,v=o*h,S=o*p;t[0]=l*h,t[4]=v*c-m,t[8]=f*c+S,t[1]=l*p,t[5]=S*c+f,t[9]=m*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,v=o*l,S=o*c;t[0]=l*h,t[4]=S-f*p,t[8]=v*p+m,t[1]=p,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*p+v,t[10]=f-S*p}else if(e.order==="XZY"){const f=a*l,m=a*c,v=o*l,S=o*c;t[0]=l*h,t[4]=-p,t[8]=c*h,t[1]=f*p+S,t[5]=a*h,t[9]=m*p-v,t[2]=v*p-m,t[6]=o*h,t[10]=S*p+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lh,e,Dh)}lookAt(e,t,n){const s=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),ei.crossVectors(n,on),ei.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),ei.crossVectors(n,on)),ei.normalize(),Zs.crossVectors(on,ei),s[0]=ei.x,s[4]=Zs.x,s[8]=on.x,s[1]=ei.y,s[5]=Zs.y,s[9]=on.y,s[2]=ei.z,s[6]=Zs.z,s[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],p=n[5],f=n[9],m=n[13],v=n[2],S=n[6],g=n[10],d=n[14],M=n[3],C=n[7],y=n[11],w=n[15],T=s[0],_=s[4],E=s[8],O=s[12],L=s[1],F=s[5],G=s[9],K=s[13],P=s[2],z=s[6],V=s[10],H=s[14],re=s[3],Z=s[7],te=s[11],se=s[15];return r[0]=a*T+o*L+l*P+c*re,r[4]=a*_+o*F+l*z+c*Z,r[8]=a*E+o*G+l*V+c*te,r[12]=a*O+o*K+l*H+c*se,r[1]=h*T+p*L+f*P+m*re,r[5]=h*_+p*F+f*z+m*Z,r[9]=h*E+p*G+f*V+m*te,r[13]=h*O+p*K+f*H+m*se,r[2]=v*T+S*L+g*P+d*re,r[6]=v*_+S*F+g*z+d*Z,r[10]=v*E+S*G+g*V+d*te,r[14]=v*O+S*K+g*H+d*se,r[3]=M*T+C*L+y*P+w*re,r[7]=M*_+C*F+y*z+w*Z,r[11]=M*E+C*G+y*V+w*te,r[15]=M*O+C*K+y*H+w*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],p=e[6],f=e[10],m=e[14],v=e[3],S=e[7],g=e[11],d=e[15],M=l*m-c*f,C=o*m-c*p,y=o*f-l*p,w=a*m-c*h,T=a*f-l*h,_=a*p-o*h;return t*(S*M-g*C+d*y)-n*(v*M-g*w+d*T)+s*(v*C-S*w+d*_)-r*(v*y-S*T+g*_)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=e[9],f=e[10],m=e[11],v=e[12],S=e[13],g=e[14],d=e[15],M=t*o-n*a,C=t*l-s*a,y=t*c-r*a,w=n*l-s*o,T=n*c-r*o,_=s*c-r*l,E=h*S-p*v,O=h*g-f*v,L=h*d-m*v,F=p*g-f*S,G=p*d-m*S,K=f*d-m*g,P=M*K-C*G+y*F+w*L-T*O+_*E;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/P;return e[0]=(o*K-l*G+c*F)*z,e[1]=(s*G-n*K-r*F)*z,e[2]=(S*_-g*T+d*w)*z,e[3]=(f*T-p*_-m*w)*z,e[4]=(l*L-a*K-c*O)*z,e[5]=(t*K-s*L+r*O)*z,e[6]=(g*y-v*_-d*C)*z,e[7]=(h*_-f*y+m*C)*z,e[8]=(a*G-o*L+c*E)*z,e[9]=(n*L-t*G-r*E)*z,e[10]=(v*T-S*y+d*M)*z,e[11]=(p*y-h*T-m*M)*z,e[12]=(o*O-a*F-l*E)*z,e[13]=(t*F-n*O+s*E)*z,e[14]=(S*C-v*w-g*M)*z,e[15]=(h*w-p*C+f*M)*z,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,p=o+o,f=r*c,m=r*h,v=r*p,S=a*h,g=a*p,d=o*p,M=l*c,C=l*h,y=l*p,w=n.x,T=n.y,_=n.z;return s[0]=(1-(S+d))*w,s[1]=(m+y)*w,s[2]=(v-C)*w,s[3]=0,s[4]=(m-y)*T,s[5]=(1-(f+d))*T,s[6]=(g+M)*T,s[7]=0,s[8]=(v+C)*_,s[9]=(g-M)*_,s[10]=(1-(f+S))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Li.set(s[0],s[1],s[2]).length();const o=Li.set(s[4],s[5],s[6]).length(),l=Li.set(s[8],s[9],s[10]).length();r<0&&(a=-a),vn.copy(this);const c=1/a,h=1/o,p=1/l;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=p,vn.elements[9]*=p,vn.elements[10]*=p,t.setFromRotationMatrix(vn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=En,l=!1){const c=this.elements,h=2*r/(t-e),p=2*r/(n-s),f=(t+e)/(t-e),m=(n+s)/(n-s);let v,S;if(l)v=r/(a-r),S=a*r/(a-r);else if(o===En)v=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===Hs)v=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=p,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=En,l=!1){const c=this.elements,h=2/(t-e),p=2/(n-s),f=-(t+e)/(t-e),m=-(n+s)/(n-s);let v,S;if(l)v=1/(a-r),S=a/(a-r);else if(o===En)v=-2/(a-r),S=-(a+r)/(a-r);else if(o===Hs)v=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=p,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=v,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};kr.prototype.isMatrix4=!0;let dt=kr;const Li=new B,vn=new dt,Lh=new B(0,0,0),Dh=new B(1,1,1),ei=new B,Zs=new B,on=new B,El=new dt,Tl=new us;class Zn{constructor(e=0,t=0,n=0,s=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],p=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return El.makeRotationFromQuaternion(e),this.setFromRotationMatrix(El,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tl.setFromEuler(this),this.setFromQuaternion(Tl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class Vc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ih=0;const bl=new B,Di=new us,Gn=new dt,Js=new B,ms=new B,Nh=new B,Uh=new us,Al=new B(1,0,0),wl=new B(0,1,0),Rl=new B(0,0,1),Cl={type:"added"},Fh={type:"removed"},Ii={type:"childadded",child:null},aa={type:"childremoved",child:null};class At extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new B,t=new Zn,n=new us,s=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new We}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.multiply(Di),this}rotateOnWorldAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.premultiply(Di),this}rotateX(e){return this.rotateOnAxis(Al,e)}rotateY(e){return this.rotateOnAxis(wl,e)}rotateZ(e){return this.rotateOnAxis(Rl,e)}translateOnAxis(e,t){return bl.copy(e).applyQuaternion(this.quaternion),this.position.add(bl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Al,e)}translateY(e){return this.translateOnAxis(wl,e)}translateZ(e){return this.translateOnAxis(Rl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Js.copy(e):Js.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(ms,Js,this.up):Gn.lookAt(Js,ms,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),Di.setFromRotationMatrix(Gn),this.quaternion.premultiply(Di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cl),Ii.child=e,this.dispatchEvent(Ii),Ii.child=null):lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fh),aa.child=e,this.dispatchEvent(aa),aa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cl),Ii.child=e,this.dispatchEvent(Ii),Ii.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,e,Nh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,Uh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),p=a(e.shapes),f=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}At.DEFAULT_UP=new B(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Yn extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Oh={type:"move"};class oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const g=t.getJointPose(S,n),d=this._getHandJoint(c,S);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],f=h.position.distanceTo(p.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Oh)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Yn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Wc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Qs={h:0,s:0,l:0};function la(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=tt.workingColorSpace){if(e=Vo(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=la(a,r,e+1/3),this.g=la(a,r,e),this.b=la(a,r,e-1/3)}return tt.colorSpaceToWorking(this,s),this}setStyle(e,t=zt){function n(r){r!==void 0&&parseFloat(r)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const n=Wc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$n(e.r),this.g=$n(e.g),this.b=$n(e.b),this}copyLinearToSRGB(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return tt.workingToColorSpace(qt.copy(this),e),Math.round(Ze(qt.r*255,0,255))*65536+Math.round(Ze(qt.g*255,0,255))*256+Math.round(Ze(qt.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(qt.copy(this),t);const n=qt.r,s=qt.g,r=qt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=zt){tt.workingToColorSpace(qt.copy(this),e);const t=qt.r,n=qt.g,s=qt.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ti),this.setHSL(ti.h+e,ti.s+t,ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ti),e.getHSL(Qs);const n=Us(ti.h,Qs.h,t),s=Us(ti.s,Qs.s,t),r=Us(ti.l,Qs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new Be;Be.NAMES=Wc;class Yo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Be(e),this.density=t}clone(){return new Yo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Xc extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const xn=new B,Hn=new B,ca=new B,kn=new B,Ni=new B,Ui=new B,Pl=new B,ua=new B,ha=new B,fa=new B,da=new yt,pa=new yt,ma=new yt;class mn{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),xn.subVectors(e,t),s.cross(xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){xn.subVectors(s,t),Hn.subVectors(n,t),ca.subVectors(e,t);const a=xn.dot(xn),o=xn.dot(Hn),l=xn.dot(ca),c=Hn.dot(Hn),h=Hn.dot(ca),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;const f=1/p,m=(c*l-o*h)*f,v=(a*h-o*l)*f;return r.set(1-m-v,v,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,kn.x),l.addScaledVector(a,kn.y),l.addScaledVector(o,kn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return da.setScalar(0),pa.setScalar(0),ma.setScalar(0),da.fromBufferAttribute(e,t),pa.fromBufferAttribute(e,n),ma.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(da,r.x),a.addScaledVector(pa,r.y),a.addScaledVector(ma,r.z),a}static isFrontFacing(e,t,n,s){return xn.subVectors(n,t),Hn.subVectors(e,t),xn.cross(Hn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),xn.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return mn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Ni.subVectors(s,n),Ui.subVectors(r,n),ua.subVectors(e,n);const l=Ni.dot(ua),c=Ui.dot(ua);if(l<=0&&c<=0)return t.copy(n);ha.subVectors(e,s);const h=Ni.dot(ha),p=Ui.dot(ha);if(h>=0&&p<=h)return t.copy(s);const f=l*p-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(Ni,a);fa.subVectors(e,r);const m=Ni.dot(fa),v=Ui.dot(fa);if(v>=0&&m<=v)return t.copy(r);const S=m*c-l*v;if(S<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(Ui,o);const g=h*v-m*p;if(g<=0&&p-h>=0&&m-v>=0)return Pl.subVectors(r,s),o=(p-h)/(p-h+(m-v)),t.copy(s).addScaledVector(Pl,o);const d=1/(g+S+f);return a=S*d,o=f*d,t.copy(n).addScaledVector(Ni,a).addScaledVector(Ui,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class wi{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Mn):Mn.fromBufferAttribute(r,a),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),js.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),js.copy(n.boundingBox)),js.applyMatrix4(e.matrixWorld),this.union(js)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gs),er.subVectors(this.max,gs),Fi.subVectors(e.a,gs),Oi.subVectors(e.b,gs),Bi.subVectors(e.c,gs),ni.subVectors(Oi,Fi),ii.subVectors(Bi,Oi),pi.subVectors(Fi,Bi);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-pi.z,pi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,pi.z,0,-pi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-pi.y,pi.x,0];return!ga(t,Fi,Oi,Bi,er)||(t=[1,0,0,0,1,0,0,0,1],!ga(t,Fi,Oi,Bi,er))?!1:(tr.crossVectors(ni,ii),t=[tr.x,tr.y,tr.z],ga(t,Fi,Oi,Bi,er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Vn=[new B,new B,new B,new B,new B,new B,new B,new B],Mn=new B,js=new wi,Fi=new B,Oi=new B,Bi=new B,ni=new B,ii=new B,pi=new B,gs=new B,er=new B,tr=new B,mi=new B;function ga(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){mi.fromArray(i,r);const o=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),l=e.dot(mi),c=t.dot(mi),h=n.dot(mi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Pt=new B,nr=new be;let Bh=0;class hn extends Ai{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zc,this.updateRanges=[],this.gpuType=yn,this.version=0,this._normalizationScale=e!==void 0?Wr(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)nr.fromBufferAttribute(this,t),nr.applyMatrix3(e),this.setXY(t,nr.x,nr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Wo(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Xo(e,this.array)}}class qc extends hn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yc extends hn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class pt extends hn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const zh=new wi,_s=new B,_a=new B;class hs{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_s.subVectors(e,this.center);const t=_s.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(_s,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_a.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_s.copy(e.center).add(_a)),this.expandByPoint(_s.copy(e.center).sub(_a))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Gh=0;const pn=new dt,va=new At,zi=new B,ln=new wi,vs=new wi,Nt=new B;class kt extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ah(e)?Yc:qc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return va.lookAt(e),va.updateMatrix(),this.applyMatrix4(va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];vs.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(ln.min,vs.min),ln.expandByPoint(Nt),Nt.addVectors(ln.max,vs.max),ln.expandByPoint(Nt)):(ln.expandByPoint(vs.min),ln.expandByPoint(vs.max))}ln.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Nt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Nt.fromBufferAttribute(o,c),l&&(zi.fromBufferAttribute(e,c),Nt.add(zi)),s=Math.max(s,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new hn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let O=0;O<n.count;O++)o[O]=new B,l[O]=new B;const h=new B,p=new B,f=new B,m=new be,v=new be,S=new be,g=new B,d=new B;function M(O,L,F){c[O]=c[L]=c[F]=1,h.fromBufferAttribute(n,O),p.fromBufferAttribute(n,L),f.fromBufferAttribute(n,F),m.fromBufferAttribute(r,O),v.fromBufferAttribute(r,L),S.fromBufferAttribute(r,F),p.sub(h),f.sub(h),v.sub(m),S.sub(m);const G=1/(v.x*S.y-S.x*v.y);isFinite(G)&&(g.copy(p).multiplyScalar(S.y).addScaledVector(f,-v.y).multiplyScalar(G),d.copy(f).multiplyScalar(v.x).addScaledVector(p,-S.x).multiplyScalar(G),o[O].add(g),o[L].add(g),o[F].add(g),l[O].add(d),l[L].add(d),l[F].add(d))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let O=0,L=C.length;O<L;++O){const F=C[O],G=F.start,K=F.count;for(let P=G,z=G+K;P<z;P+=3)M(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const y=new B,w=new B,T=new B,_=new B;function E(O){T.fromBufferAttribute(s,O),_.copy(T);const L=o[O];y.copy(L),y.sub(T.multiplyScalar(T.dot(L))).normalize(),w.crossVectors(_,L);const G=w.dot(l[O])<0?-1:1;a.setXYZW(O,y.x,y.y,y.z,G)}for(let O=0,L=n.count;O<L;++O)c[O]&&E(O);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,h=new B,p=new B;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),S=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,g),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,p=o.normalized,f=new c.constructor(l.length*h);let m=0,v=0;for(let S=0,g=l.length;S<g;S++){o.isInterleavedBufferAttribute?m=l[S]*o.data.stride+o.offset:m=l[S]*h;for(let d=0;d<h;d++)f[v++]=c[m++]}return new hn(f,h,p)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,p=c.length;h<p;h++){const f=c[h],m=e(f,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,f=c.length;p<f;p++){const m=c[p];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],p=r[c];for(let f=0,m=p.length;f<m;f++)h.push(p[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=zc,this.updateRanges=[],this.version=0,this.uuid=ci()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=Ll(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=Ll(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function Ll(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=ci()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}const Qt=new B;class zr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Wr(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Br("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new hn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new zr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Br("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Wo(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Xo(e,this.data.array)}}const xa=new B,kh=new B,Vh=new We;class Rn{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=xa.subVectors(n,t).cross(kh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(xa),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Vh.getNormalMatrix(e),s=this.coplanarPoint(xa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Wh=0;class Jn extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=Is,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wc,this.blendDst=Rc,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ta,this.stencilZFail=ta,this.stencilZPass=ta,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Rn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new be().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new be().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Kc extends Jn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Gi;const xs=new B,Hi=new B,ki=new B,Vi=new be,Ms=new be,$c=new dt,ir=new B,Ss=new B,sr=new B,Dl=new be,Ma=new be,Il=new be;class Xh extends At{constructor(e=new Kc){if(super(),this.isSprite=!0,this.type="Sprite",Gi===void 0){Gi=new kt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Hh(t,5);Gi.setIndex([0,1,2,0,2,3]),Gi.setAttribute("position",new zr(n,3,0,!1)),Gi.setAttribute("uv",new zr(n,2,3,!1))}this.geometry=Gi,this.material=e,this.center=new be(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&lt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hi.setFromMatrixScale(this.matrixWorld),$c.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ki.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hi.multiplyScalar(-ki.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;rr(ir.set(-.5,-.5,0),ki,a,Hi,s,r),rr(Ss.set(.5,-.5,0),ki,a,Hi,s,r),rr(sr.set(.5,.5,0),ki,a,Hi,s,r),Dl.set(0,0),Ma.set(1,0),Il.set(1,1);let o=e.ray.intersectTriangle(ir,Ss,sr,!1,xs);if(o===null&&(rr(Ss.set(-.5,.5,0),ki,a,Hi,s,r),Ma.set(0,1),o=e.ray.intersectTriangle(ir,sr,Ss,!1,xs),o===null))return;const l=e.ray.origin.distanceTo(xs);l<e.near||l>e.far||t.push({distance:l,point:xs.clone(),uv:mn.getInterpolation(xs,ir,Ss,sr,Dl,Ma,Il,new be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function rr(i,e,t,n,s,r){Vi.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ms.x=r*Vi.x-s*Vi.y,Ms.y=s*Vi.x+r*Vi.y):Ms.copy(Vi),i.copy(e),i.x+=Ms.x,i.y+=Ms.y,i.applyMatrix4($c)}const Wn=new B,Sa=new B,ar=new B,or=new B;class Ko{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,t),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Sa.copy(e).add(t).multiplyScalar(.5),ar.copy(t).sub(e).normalize(),or.copy(this.origin).sub(Sa);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ar),o=or.dot(this.direction),l=-or.dot(ar),c=or.lengthSq(),h=Math.abs(1-a*a);let p,f,m,v;if(h>0)if(p=a*l-o,f=a*o-l,v=r*h,p>=0)if(f>=-v)if(f<=v){const S=1/h;p*=S,f*=S,m=p*(p+a*f+2*o)+f*(a*p+f+2*l)+c}else f=r,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+c;else f=-r,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+c;else f<=-v?(p=Math.max(0,-(-a*r+o)),f=p>0?-r:Math.min(Math.max(-r,-l),r),m=-p*p+f*(f+2*l)+c):f<=v?(p=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(p=Math.max(0,-(a*r+o)),f=p>0?r:Math.min(Math.max(-r,-l),r),m=-p*p+f*(f+2*l)+c);else f=a>0?-r:r,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Sa).addScaledVector(ar,f),m}intersectSphere(e,t){if(e.radius<0)return null;Wn.subVectors(e.center,this.origin);const n=Wn.dot(this.direction),s=Wn.dot(Wn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(e.min.z-f.z)*p,l=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,l=(e.min.z-f.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,p=e.x-a.x,f=e.y-a.y,m=e.z-a.z,v=t.x-a.x,S=t.y-a.y,g=t.z-a.z,d=n.x-a.x,M=n.y-a.y,C=n.z-a.z,y=Math.abs(l),w=Math.abs(c),T=Math.abs(h);let _,E,O,L,F,G,K,P,z,V,H,re;if(y>=w&&y>=T?(O=l,G=p,z=v,re=d,l>=0?(_=c,E=h,L=f,F=m,K=S,P=g,V=M,H=C):(_=h,E=c,L=m,F=f,K=g,P=S,V=C,H=M)):w>=T?(O=c,G=f,z=S,re=M,c>=0?(_=h,E=l,L=m,F=p,K=g,P=v,V=C,H=d):(_=l,E=h,L=p,F=m,K=v,P=g,V=d,H=C)):(O=h,G=m,z=g,re=C,h>=0?(_=l,E=c,L=p,F=f,K=v,P=S,V=d,H=M):(_=c,E=l,L=f,F=p,K=S,P=v,V=M,H=d)),O===0)return null;const Z=_/O,te=E/O,se=1/O,xe=L-Z*G,Me=F-te*G,Q=K-Z*z,ce=P-te*z,Se=V-Z*re,Pe=H-te*re,fe=Se*ce-Pe*Q,Ie=xe*Pe-Me*Se,Je=Q*Me-ce*xe;if(s){if(fe<0||Ie<0||Je<0)return null}else if((fe<0||Ie<0||Je<0)&&(fe>0||Ie>0||Je>0))return null;const Le=fe+Ie+Je;if(Le===0)return null;const Ye=se*(fe*G+Ie*z+Je*re);return(Le>0?Ye<0:Ye>0)?null:this.at(Ye/Le,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oi extends Jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Co,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nl=new dt,gi=new Ko,lr=new hs,Ul=new B,cr=new B,ur=new B,hr=new B,ya=new B,fr=new B,Fl=new B,dr=new B;class ht extends At{constructor(e=new kt,t=new oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){fr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],p=r[l];h!==0&&(ya.fromBufferAttribute(p,e),a?fr.addScaledVector(ya,h):fr.addScaledVector(ya.sub(t),h))}t.add(fr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(r),gi.copy(e.ray).recast(e.near),!(lr.containsPoint(gi.origin)===!1&&(gi.intersectSphere(lr,Ul)===null||gi.origin.distanceToSquared(Ul)>(e.far-e.near)**2))&&(Nl.copy(r).invert(),gi.copy(e.ray).applyMatrix4(Nl),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,S=f.length;v<S;v++){const g=f[v],d=a[g.materialIndex],M=Math.max(g.start,m.start),C=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let y=M,w=C;y<w;y+=3){const T=o.getX(y),_=o.getX(y+1),E=o.getX(y+2);s=pr(this,d,e,n,c,h,p,T,_,E),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let g=v,d=S;g<d;g+=3){const M=o.getX(g),C=o.getX(g+1),y=o.getX(g+2);s=pr(this,a,e,n,c,h,p,M,C,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,S=f.length;v<S;v++){const g=f[v],d=a[g.materialIndex],M=Math.max(g.start,m.start),C=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let y=M,w=C;y<w;y+=3){const T=y,_=y+1,E=y+2;s=pr(this,d,e,n,c,h,p,T,_,E),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let g=v,d=S;g<d;g+=3){const M=g,C=g+1,y=g+2;s=pr(this,a,e,n,c,h,p,M,C,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function qh(i,e,t,n,s,r,a,o){let l;if(e.side===$t?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ei,o),l===null)return null;dr.copy(o),dr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(dr);return c<t.near||c>t.far?null:{distance:c,point:dr.clone(),object:i}}function pr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,cr),i.getVertexPosition(l,ur),i.getVertexPosition(c,hr);const h=qh(i,e,t,n,cr,ur,hr,Fl);if(h){const p=new B;mn.getBarycoord(Fl,cr,ur,hr,p),s&&(h.uv=mn.getInterpolatedAttribute(s,o,l,c,p,new be)),r&&(h.uv1=mn.getInterpolatedAttribute(r,o,l,c,p,new be)),a&&(h.normal=mn.getInterpolatedAttribute(a,o,l,c,p,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new B,materialIndex:0};mn.getNormal(cr,ur,hr,f.normal),h.face=f,h.barycoord=p}return h}class $o extends Ht{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Gt,h=Gt,p,f){super(null,a,o,l,c,h,s,r,p,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ol extends hn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Wi=new dt,Bl=new dt,mr=[],zl=new wi,Yh=new dt,ys=new ht,Es=new hs;class Kh extends ht{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ol(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Yh)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wi),zl.copy(e.boundingBox).applyMatrix4(Wi),this.boundingBox.union(zl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wi),Es.copy(e.boundingSphere).applyMatrix4(Wi),this.boundingSphere.union(Es)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(ys.geometry=this.geometry,ys.material=this.material,ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Es.copy(this.boundingSphere),Es.applyMatrix4(n),e.ray.intersectsSphere(Es)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Wi),Bl.multiplyMatrices(n,Wi),ys.matrixWorld=Bl,ys.raycast(e,mr);for(let a=0,o=mr.length;a<o;a++){const l=mr[a];l.instanceId=r,l.object=this,t.push(l)}mr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ol(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new $o(new Float32Array(s*this.count),s,this.count,zo,yn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const _i=new hs,$h=new be(.5,.5),gr=new B;class Vs{constructor(e=new Rn,t=new Rn,n=new Rn,s=new Rn,r=new Rn,a=new Rn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=En,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],p=r[5],f=r[6],m=r[7],v=r[8],S=r[9],g=r[10],d=r[11],M=r[12],C=r[13],y=r[14],w=r[15];if(s[0].setComponents(c-a,m-h,d-v,w-M).normalize(),s[1].setComponents(c+a,m+h,d+v,w+M).normalize(),s[2].setComponents(c+o,m+p,d+S,w+C).normalize(),s[3].setComponents(c-o,m-p,d-S,w-C).normalize(),n)s[4].setComponents(l,f,g,y).normalize(),s[5].setComponents(c-l,m-f,d-g,w-y).normalize();else if(s[4].setComponents(c-l,m-f,d-g,w-y).normalize(),t===En)s[5].setComponents(c+l,m+f,d+g,w+y).normalize();else if(t===Hs)s[5].setComponents(l,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(e){_i.center.set(0,0,0);const t=$h.distanceTo(e.center);return _i.radius=.7071067811865476+t,_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(gr.x=s.normal.x>0?e.max.x:e.min.x,gr.y=s.normal.y>0?e.max.y:e.min.y,gr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(gr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Gl=new dt;class Zo{constructor(){this.coordinateSystem=En,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];Gl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Vs),n[s].setFromProjectionMatrix(Gl,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Vs),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new Zo().copy(this)}}class Zc extends Jn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hl=new dt,_o=new Ko,_r=new hs,vr=new B;class Zh extends At{constructor(e=new kt,t=new Zc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(s),_r.radius+=r,e.ray.intersectsSphere(_r)===!1)return;Hl.copy(s).invert(),_o.copy(e.ray).applyMatrix4(Hl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,p=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let v=f,S=m;v<S;v++){const g=c.getX(v);vr.fromBufferAttribute(p,g),kl(vr,g,l,s,e,t,this)}}else{const f=Math.max(0,a.start),m=Math.min(p.count,a.start+a.count);for(let v=f,S=m;v<S;v++)vr.fromBufferAttribute(p,v),kl(vr,v,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function kl(i,e,t,n,s,r,a){const o=_o.distanceSqToPoint(i);if(o<t){const l=new B;_o.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Jc extends Ht{constructor(e=[],t=ns,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ws extends Ht{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class as extends Ht{constructor(e,t,n=Nn,s,r,a,o=Gt,l=Gt,c,h=li,p=1){if(h!==li&&h!==ai)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:p};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Qc extends as{constructor(e,t=Nn,n=ns,s,r,a=Gt,o=Gt,l,c=li){const h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class jc extends Ht{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ui extends kt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],p=[];let f=0,m=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(p,2));function v(S,g,d,M,C,y,w,T,_,E,O){const L=y/_,F=w/E,G=y/2,K=w/2,P=T/2,z=_+1,V=E+1;let H=0,re=0;const Z=new B;for(let te=0;te<V;te++){const se=te*F-K;for(let xe=0;xe<z;xe++){const Me=xe*L-G;Z[S]=Me*M,Z[g]=se*C,Z[d]=P,c.push(Z.x,Z.y,Z.z),Z[S]=0,Z[g]=0,Z[d]=T>0?1:-1,h.push(Z.x,Z.y,Z.z),p.push(xe/_),p.push(1-te/E),H+=1}}for(let te=0;te<E;te++)for(let se=0;se<_;se++){const xe=f+se+z*te,Me=f+se+z*(te+1),Q=f+(se+1)+z*(te+1),ce=f+(se+1)+z*te;l.push(xe,Me,ce),l.push(Me,Q,ce),re+=6}o.addGroup(m,re,O),m+=re,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ui(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ri extends kt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],p=[],f=[],m=[];let v=0;const S=[],g=n/2;let d=0;M(),a===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(h),this.setAttribute("position",new pt(p,3)),this.setAttribute("normal",new pt(f,3)),this.setAttribute("uv",new pt(m,2));function M(){const y=new B,w=new B;let T=0;const _=(t-e)/n;for(let E=0;E<=r;E++){const O=[],L=E/r,F=L*(t-e)+e;for(let G=0;G<=s;G++){const K=G/s,P=K*l+o,z=Math.sin(P),V=Math.cos(P);w.x=F*z,w.y=-L*n+g,w.z=F*V,p.push(w.x,w.y,w.z),y.set(z,_,V).normalize(),f.push(y.x,y.y,y.z),m.push(K,1-L),O.push(v++)}S.push(O)}for(let E=0;E<s;E++)for(let O=0;O<r;O++){const L=S[O][E],F=S[O+1][E],G=S[O+1][E+1],K=S[O][E+1];(e>0||O!==0)&&(h.push(L,F,K),T+=3),(t>0||O!==r-1)&&(h.push(F,G,K),T+=3)}c.addGroup(d,T,0),d+=T}function C(y){const w=v,T=new be,_=new B;let E=0;const O=y===!0?e:t,L=y===!0?1:-1;for(let G=1;G<=s;G++)p.push(0,g*L,0),f.push(0,L,0),m.push(.5,.5),v++;const F=v;for(let G=0;G<=s;G++){const P=G/s*l+o,z=Math.cos(P),V=Math.sin(P);_.x=O*V,_.y=g*L,_.z=O*z,p.push(_.x,_.y,_.z),f.push(0,L,0),T.x=z*.5+.5,T.y=V*.5*L+.5,m.push(T.x,T.y),v++}for(let G=0;G<s;G++){const K=w+G,P=F+G;y===!0?h.push(P,P+1,K):h.push(P+1,P,K),E+=3}c.addGroup(d,E,y===!0?1:2),d+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ri(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xr extends kt{constructor(e=[new be(0,-.5),new be(.5,0),new be(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ze(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/t,p=new B,f=new be,m=new B,v=new B,S=new B;let g=0,d=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:g=e[M+1].x-e[M].x,d=e[M+1].y-e[M].y,m.x=d*1,m.y=-g,m.z=d*0,S.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case e.length-1:S.normalize(),l.push(S.x,S.y,S.z);break;default:g=e[M+1].x-e[M].x,d=e[M+1].y-e[M].y,m.x=d*1,m.y=-g,m.z=d*0,v.copy(m),m.x+=S.x,m.y+=S.y,m.z+=S.z,m.normalize(),l.push(m.x,m.y,m.z),S.copy(v)}for(let M=0;M<=t;M++){const C=n+M*h*s,y=Math.sin(C),w=Math.cos(C);for(let T=0;T<=e.length-1;T++){p.x=e[T].x*y,p.y=e[T].y,p.z=e[T].x*w,a.push(p.x,p.y,p.z),f.x=M/t,f.y=T/(e.length-1),o.push(f.x,f.y);const _=l[3*T+0]*y,E=l[3*T+1],O=l[3*T+0]*w;c.push(_,E,O)}}for(let M=0;M<t;M++)for(let C=0;C<e.length-1;C++){const y=C+M*e.length,w=y,T=y+e.length,_=y+e.length+1,E=y+1;r.push(w,T,E),r.push(_,E,T)}this.setIndex(r),this.setAttribute("position",new pt(a,3)),this.setAttribute("uv",new pt(o,2)),this.setAttribute("normal",new pt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xr(e.points,e.segments,e.phiStart,e.phiLength)}}class Ln extends kt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,p=e/o,f=t/l,m=[],v=[],S=[],g=[];for(let d=0;d<h;d++){const M=d*f-a;for(let C=0;C<c;C++){const y=C*p-r;v.push(y,-M,0),S.push(0,0,1),g.push(C/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<o;M++){const C=M+c*d,y=M+c*(d+1),w=M+1+c*(d+1),T=M+1+c*d;m.push(C,y,T),m.push(y,w,T)}this.setIndex(m),this.setAttribute("position",new pt(v,3)),this.setAttribute("normal",new pt(S,3)),this.setAttribute("uv",new pt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ln(e.width,e.height,e.widthSegments,e.heightSegments)}}class Jo extends kt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let p=e;const f=(t-e)/s,m=new B,v=new be;for(let S=0;S<=s;S++){for(let g=0;g<=n;g++){const d=r+g/n*a;m.x=p*Math.cos(d),m.y=p*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),v.x=(m.x/t+1)/2,v.y=(m.y/t+1)/2,h.push(v.x,v.y)}p+=f}for(let S=0;S<s;S++){const g=S*(n+1);for(let d=0;d<n;d++){const M=d+g,C=M,y=M+n+1,w=M+n+2,T=M+1;o.push(C,y,T),o.push(y,w,T)}}this.setIndex(o),this.setAttribute("position",new pt(l,3)),this.setAttribute("normal",new pt(c,3)),this.setAttribute("uv",new pt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ws extends kt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],p=new B,f=new B,m=[],v=[],S=[],g=[];for(let d=0;d<=n;d++){const M=[],C=d/n,y=a+C*o,w=e*Math.cos(y),T=Math.sqrt(e*e-w*w);let _=0;d===0&&a===0?_=.5/t:d===n&&l===Math.PI&&(_=-.5/t);for(let E=0;E<=t;E++){const O=E/t,L=s+O*r;p.x=-T*Math.cos(L),p.y=w,p.z=T*Math.sin(L),v.push(p.x,p.y,p.z),f.copy(p).normalize(),S.push(f.x,f.y,f.z),g.push(O+_,1-C),M.push(c++)}h.push(M)}for(let d=0;d<n;d++)for(let M=0;M<t;M++){const C=h[d][M+1],y=h[d][M],w=h[d+1][M],T=h[d+1][M+1];(d!==0||a>0)&&m.push(C,y,T),(d!==n-1||l<Math.PI)&&m.push(y,w,T)}this.setIndex(m),this.setAttribute("position",new pt(v,3)),this.setAttribute("normal",new pt(S,3)),this.setAttribute("uv",new pt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ws(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class qr extends kt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],h=[],p=[],f=new B,m=new B,v=new B;for(let S=0;S<=n;S++){const g=a+S/n*o;for(let d=0;d<=s;d++){const M=d/s*r;m.x=(e+t*Math.cos(g))*Math.cos(M),m.y=(e+t*Math.cos(g))*Math.sin(M),m.z=t*Math.sin(g),c.push(m.x,m.y,m.z),f.x=e*Math.cos(M),f.y=e*Math.sin(M),v.subVectors(m,f).normalize(),h.push(v.x,v.y,v.z),p.push(d/s),p.push(S/n)}}for(let S=1;S<=n;S++)for(let g=1;g<=s;g++){const d=(s+1)*S+g-1,M=(s+1)*(S-1)+g-1,C=(s+1)*(S-1)+g,y=(s+1)*S+g;l.push(d,M,y),l.push(M,C,y)}this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class Jh extends Jn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Be(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function os(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Vl(s))s.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Vl(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function jt(i){const e={};for(let t=0;t<i.length;t++){const n=os(i[t]);for(const s in n)e[s]=n[s]}return e}function Vl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Qh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function eu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const Xs={clone:os,merge:jt};var jh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ef=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ft extends Jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jh,this.fragmentShader=ef,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=os(e.uniforms),this.uniformsGroups=Qh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Be().setHex(s.value);break;case"v2":this.uniforms[n].value=new be().fromArray(s.value);break;case"v3":this.uniforms[n].value=new B().fromArray(s.value);break;case"v4":this.uniforms[n].value=new yt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new We().fromArray(s.value);break;case"m4":this.uniforms[n].value=new dt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class tu extends Ft{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yi extends Jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ur,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nu extends yi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new be(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return es('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){es('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class tf extends Jn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ur,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Co,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nf extends Jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sf extends Jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ea={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Wl(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Wl(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Wl(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class rf{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){const p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,f=c.length;p<f;p+=2){const m=c[p],v=c[p+1];if(m.global&&(m.lastIndex=0),m.test(h))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const af=new rf;class Qo{constructor(e){this.manager=e!==void 0?e:af,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}Qo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xi=new WeakMap;class of extends Qo{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ea.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let p=Xi.get(a);p===void 0&&(p=[],Xi.set(a,p)),p.push({onLoad:t,onError:s})}return a}const o=ks("img");function l(){h(),t&&t(this);const p=Xi.get(this)||[];for(let f=0;f<p.length;f++){const m=p[f];m.onLoad&&m.onLoad(this)}Xi.delete(this),r.manager.itemEnd(e)}function c(p){h(),s&&s(p),Ea.remove(`image:${e}`);const f=Xi.get(this)||[];for(let m=0;m<f.length;m++){const v=f[m];v.onError&&v.onError(p)}Xi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ea.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}}class lf extends Qo{constructor(e){super(e)}load(e,t,n,s){const r=new Ht,a=new of(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Yr extends At{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class cf extends Yr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Ta=new dt,Xl=new B,ql=new B;class jo{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vs,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Xl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xl),ql.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ql),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Ta.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ta,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Hs||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ta)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const xr=new B,Mr=new us,bn=new B;class iu extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=En,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(xr,Mr,bn),bn.x===1&&bn.y===1&&bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xr,Mr,bn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(xr,Mr,bn),bn.x===1&&bn.y===1&&bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xr,Mr,bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const si=new B,Yl=new be,Kl=new be;class cn extends iu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ss*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(si.x,si.y).multiplyScalar(-e/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-e/si.z)}getViewSize(e,t){return this.getViewBounds(e,Yl,Kl),t.subVectors(Kl,Yl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ns*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class uf extends jo{constructor(){super(new cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=ss*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class hf extends Yr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new uf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class ff extends jo{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0}}class vo extends Yr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ff}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class el extends iu{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class df extends jo{constructor(){super(new el(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class su extends Yr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new df}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const qi=-90,Yi=1;class xo extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new cn(qi,Yi,e,t);s.layers=this.layers,this.add(s);const r=new cn(qi,Yi,e,t);r.layers=this.layers,this.add(r);const a=new cn(qi,Yi,e,t);a.layers=this.layers,this.add(a);const o=new cn(qi,Yi,e,t);o.layers=this.layers,this.add(o);const l=new cn(qi,Yi,e,t);l.layers=this.layers,this.add(l);const c=new cn(qi,Yi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===En)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=S,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,f,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class pf extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class mf{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=gf.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function gf(){this._document.hidden===!1&&this.reset()}function $l(i,e,t,n){const s=_f(n);switch(t){case Nc:return i*e;case zo:return i*e/s.components*s.byteLength;case Go:return i*e/s.components*s.byteLength;case bi:return i*e*2/s.components*s.byteLength;case Ho:return i*e*2/s.components*s.byteLength;case Uc:return i*e*3/s.components*s.byteLength;case In:return i*e*4/s.components*s.byteLength;case ko:return i*e*4/s.components*s.byteLength;case Tr:case br:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ar:case wr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ha:case Va:return Math.max(i,16)*Math.max(e,8)/4;case Ga:case ka:return Math.max(i,8)*Math.max(e,8)/2;case Wa:case Xa:case Ya:case Ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case qa:case Ir:case $a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ja:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Qa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ja:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case eo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case to:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case no:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case io:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case so:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ro:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ao:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case oo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case lo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case co:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case uo:case ho:case fo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case po:case mo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Nr:case go:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _f(i){switch(i){case un:case Pc:return{byteLength:1,components:1};case Gs:case Lc:case tn:return{byteLength:2,components:1};case Oo:case Bo:return{byteLength:2,components:4};case Nn:case Fo:case yn:return{byteLength:4,components:1};case Dc:case Ic:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ro}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ro);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ru(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function vf(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,p=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){const h=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,h);else{p.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<p.length;m++){const v=p[f],S=p[m];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++f,p[f]=S)}p.length=f+1;for(let m=0,v=p.length;m<v;m++){const S=p[m];i.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var xf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Sf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ef=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Af=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Rf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Df=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,If=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Gf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Hf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,kf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Vf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Wf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kf="gl_FragColor = linearToOutputTexel( gl_FragColor );",$f=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Jf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Qf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ed=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,td=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,id=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ad=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,od=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ld=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ud=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,hd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,md=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_d=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Md=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Sd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ed=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Td=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ad=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Rd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ld=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dd=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Id=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ud=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Od=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Hd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Kd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$d=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ep=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,tp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,np=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ip=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ap=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,op=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,up=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_p=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sp=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ep=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ap=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ip=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Np=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Up=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Op=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Vp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Yp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$p=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:xf,alphahash_pars_fragment:Mf,alphamap_fragment:Sf,alphamap_pars_fragment:yf,alphatest_fragment:Ef,alphatest_pars_fragment:Tf,aomap_fragment:bf,aomap_pars_fragment:Af,batching_pars_vertex:wf,batching_vertex:Rf,begin_vertex:Cf,beginnormal_vertex:Pf,bsdfs:Lf,iridescence_fragment:Df,bumpmap_pars_fragment:If,clipping_planes_fragment:Nf,clipping_planes_pars_fragment:Uf,clipping_planes_pars_vertex:Ff,clipping_planes_vertex:Of,color_fragment:Bf,color_pars_fragment:zf,color_pars_vertex:Gf,color_vertex:Hf,common:kf,defaultnormal_vertex:Vf,displacementmap_pars_vertex:Wf,displacementmap_vertex:Xf,emissivemap_fragment:qf,emissivemap_pars_fragment:Yf,colorspace_fragment:Kf,colorspace_pars_fragment:$f,envmap_fragment:Zf,envmap_common_pars_fragment:Jf,envmap_pars_fragment:Qf,envmap_pars_vertex:jf,envmap_physical_pars_fragment:ud,envmap_vertex:ed,fog_vertex:td,fog_pars_vertex:nd,fog_fragment:id,fog_pars_fragment:sd,gradientmap_pars_fragment:rd,lightmap_pars_fragment:ad,lights_lambert_fragment:od,lights_lambert_pars_fragment:ld,lights_pars_begin:cd,lights_toon_fragment:hd,lights_toon_pars_fragment:fd,lights_phong_fragment:dd,lights_phong_pars_fragment:pd,lights_physical_fragment:md,lights_physical_pars_fragment:gd,lights_fragment_begin:_d,lights_fragment_maps:vd,lights_fragment_end:xd,lightprobes_pars_fragment:Md,logdepthbuf_fragment:Sd,logdepthbuf_pars_fragment:yd,logdepthbuf_pars_vertex:Ed,logdepthbuf_vertex:Td,map_fragment:bd,map_pars_fragment:Ad,map_particle_fragment:wd,map_particle_pars_fragment:Rd,metalnessmap_fragment:Cd,metalnessmap_pars_fragment:Pd,morphinstance_vertex:Ld,morphcolor_vertex:Dd,morphnormal_vertex:Id,morphtarget_pars_vertex:Nd,morphtarget_vertex:Ud,normal_fragment_begin:Fd,normal_fragment_maps:Od,normal_pars_fragment:Bd,normal_pars_vertex:zd,normal_vertex:Gd,normalmap_pars_fragment:Hd,clearcoat_normal_fragment_begin:kd,clearcoat_normal_fragment_maps:Vd,clearcoat_pars_fragment:Wd,iridescence_pars_fragment:Xd,opaque_fragment:qd,packing:Yd,premultiplied_alpha_fragment:Kd,project_vertex:$d,dithering_fragment:Zd,dithering_pars_fragment:Jd,roughnessmap_fragment:Qd,roughnessmap_pars_fragment:jd,shadowmap_pars_fragment:ep,shadowmap_pars_vertex:tp,shadowmap_vertex:np,shadowmask_pars_fragment:ip,skinbase_vertex:sp,skinning_pars_vertex:rp,skinning_vertex:ap,skinnormal_vertex:op,specularmap_fragment:lp,specularmap_pars_fragment:cp,tonemapping_fragment:up,tonemapping_pars_fragment:hp,transmission_fragment:fp,transmission_pars_fragment:dp,uv_pars_fragment:pp,uv_pars_vertex:mp,uv_vertex:gp,worldpos_vertex:_p,background_vert:vp,background_frag:xp,backgroundCube_vert:Mp,backgroundCube_frag:Sp,cube_vert:yp,cube_frag:Ep,depth_vert:Tp,depth_frag:bp,distance_vert:Ap,distance_frag:wp,equirect_vert:Rp,equirect_frag:Cp,linedashed_vert:Pp,linedashed_frag:Lp,meshbasic_vert:Dp,meshbasic_frag:Ip,meshlambert_vert:Np,meshlambert_frag:Up,meshmatcap_vert:Fp,meshmatcap_frag:Op,meshnormal_vert:Bp,meshnormal_frag:zp,meshphong_vert:Gp,meshphong_frag:Hp,meshphysical_vert:kp,meshphysical_frag:Vp,meshtoon_vert:Wp,meshtoon_frag:Xp,points_vert:qp,points_frag:Yp,shadow_vert:Kp,shadow_frag:$p,sprite_vert:Zp,sprite_frag:Jp},ve={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Cn={basic:{uniforms:jt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:jt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:jt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:jt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:jt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Be(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:jt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:jt([ve.points,ve.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:jt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:jt([ve.common,ve.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:jt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:jt([ve.sprite,ve.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:jt([ve.common,ve.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:jt([ve.lights,ve.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Cn.physical={uniforms:jt([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Sr={r:0,b:0,g:0},Qp=new dt,au=new We;au.set(-1,0,0,0,1,0,0,0,1);function jp(i,e,t,n,s,r){const a=new Be(0);let o=s===!0?0:1,l,c,h=null,p=0,f=null;function m(M){let C=M.isScene===!0?M.background:null;if(C&&C.isTexture){const y=M.backgroundBlurriness>0;C=e.get(C,y)}return C}function v(M){let C=!1;const y=m(M);y===null?g(a,o):y&&y.isColor&&(g(y,1),C=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(M,C){const y=m(C);y&&y.isCubeTexture?(c===void 0&&(c=new ht(new ui(1,1,1),new Ft({name:"BackgroundCubeMaterial",uniforms:os(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Qp.makeRotationFromEuler(C.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(au),c.material.toneMapped=tt.getTransfer(y.colorSpace)!==ut,(h!==y||p!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,p=y.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ht(new Ln(2,2),new Ft({name:"BackgroundMaterial",uniforms:os(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=tt.getTransfer(y.colorSpace)!==ut,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||p!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,p=y.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,C){M.getRGB(Sr,eu(i)),t.buffers.color.setClear(Sr.r,Sr.g,Sr.b,C,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,C=1){a.set(M),o=C,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,g(a,o)},render:v,addToRenderList:S,dispose:d}}function em(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(F,G,K,P,z){let V=!1;const H=p(F,P,K,G);r!==H&&(r=H,c(r.object)),V=m(F,P,K,z),V&&v(F,P,K,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,y(F,G,K,P),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(F){return i.bindVertexArray(F)}function h(F){return i.deleteVertexArray(F)}function p(F,G,K,P){const z=P.wireframe===!0;let V=n[G.id];V===void 0&&(V={},n[G.id]=V);const H=F.isInstancedMesh===!0?F.id:0;let re=V[H];re===void 0&&(re={},V[H]=re);let Z=re[K.id];Z===void 0&&(Z={},re[K.id]=Z);let te=Z[z];return te===void 0&&(te=f(l()),Z[z]=te),te}function f(F){const G=[],K=[],P=[];for(let z=0;z<t;z++)G[z]=0,K[z]=0,P[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:K,attributeDivisors:P,object:F,attributes:{},index:null}}function m(F,G,K,P){const z=r.attributes,V=G.attributes;let H=0;const re=K.getAttributes();for(const Z in re)if(re[Z].location>=0){const se=z[Z];let xe=V[Z];if(xe===void 0&&(Z==="instanceMatrix"&&F.instanceMatrix&&(xe=F.instanceMatrix),Z==="instanceColor"&&F.instanceColor&&(xe=F.instanceColor)),se===void 0||se.attribute!==xe||xe&&se.data!==xe.data)return!0;H++}return r.attributesNum!==H||r.index!==P}function v(F,G,K,P){const z={},V=G.attributes;let H=0;const re=K.getAttributes();for(const Z in re)if(re[Z].location>=0){let se=V[Z];se===void 0&&(Z==="instanceMatrix"&&F.instanceMatrix&&(se=F.instanceMatrix),Z==="instanceColor"&&F.instanceColor&&(se=F.instanceColor));const xe={};xe.attribute=se,se&&se.data&&(xe.data=se.data),z[Z]=xe,H++}r.attributes=z,r.attributesNum=H,r.index=P}function S(){const F=r.newAttributes;for(let G=0,K=F.length;G<K;G++)F[G]=0}function g(F){d(F,0)}function d(F,G){const K=r.newAttributes,P=r.enabledAttributes,z=r.attributeDivisors;K[F]=1,P[F]===0&&(i.enableVertexAttribArray(F),P[F]=1),z[F]!==G&&(i.vertexAttribDivisor(F,G),z[F]=G)}function M(){const F=r.newAttributes,G=r.enabledAttributes;for(let K=0,P=G.length;K<P;K++)G[K]!==F[K]&&(i.disableVertexAttribArray(K),G[K]=0)}function C(F,G,K,P,z,V,H){H===!0?i.vertexAttribIPointer(F,G,K,z,V):i.vertexAttribPointer(F,G,K,P,z,V)}function y(F,G,K,P){S();const z=P.attributes,V=K.getAttributes(),H=G.defaultAttributeValues;for(const re in V){const Z=V[re];if(Z.location>=0){let te=z[re];if(te===void 0&&(re==="instanceMatrix"&&F.instanceMatrix&&(te=F.instanceMatrix),re==="instanceColor"&&F.instanceColor&&(te=F.instanceColor)),te!==void 0){const se=te.normalized,xe=te.itemSize,Me=e.get(te);if(Me===void 0)continue;const Q=Me.buffer,ce=Me.type,Se=Me.bytesPerElement,Pe=ce===i.INT||ce===i.UNSIGNED_INT||te.gpuType===Fo;if(te.isInterleavedBufferAttribute){const fe=te.data,Ie=fe.isInterleavedBuffer===!0?fe.stride:fe.itemSize,Je=te.offset;if(fe.isInstancedInterleavedBuffer||fe.isInstancedBufferAttribute){for(let Le=0;Le<Z.locationSize;Le++)d(Z.location+Le,fe.meshPerAttribute);F.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Le=0;Le<Z.locationSize;Le++)g(Z.location+Le);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let Le=0;Le<Z.locationSize;Le++)C(Z.location+Le,xe/Z.locationSize,ce,se,Ie*Se,(Je+xe/Z.locationSize*Le)*Se,Pe)}else{if(te.isInstancedBufferAttribute){for(let fe=0;fe<Z.locationSize;fe++)d(Z.location+fe,te.meshPerAttribute);F.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let fe=0;fe<Z.locationSize;fe++)g(Z.location+fe);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let fe=0;fe<Z.locationSize;fe++)C(Z.location+fe,xe/Z.locationSize,ce,se,xe*Se,xe/Z.locationSize*fe*Se,Pe)}}else if(H!==void 0){const se=H[re];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(Z.location,se);break;case 3:i.vertexAttrib3fv(Z.location,se);break;case 4:i.vertexAttrib4fv(Z.location,se);break;default:i.vertexAttrib1fv(Z.location,se)}}}}M()}function w(){O();for(const F in n){const G=n[F];for(const K in G){const P=G[K];for(const z in P){const V=P[z];for(const H in V)h(V[H].object),delete V[H];delete P[z]}}delete n[F]}}function T(F){if(n[F.id]===void 0)return;const G=n[F.id];for(const K in G){const P=G[K];for(const z in P){const V=P[z];for(const H in V)h(V[H].object),delete V[H];delete P[z]}}delete n[F.id]}function _(F){for(const G in n){const K=n[G];for(const P in K){const z=K[P];if(z[F.id]===void 0)continue;const V=z[F.id];for(const H in V)h(V[H].object),delete V[H];delete z[F.id]}}}function E(F){for(const G in n){const K=n[G],P=F.isInstancedMesh===!0?F.id:0,z=K[P];if(z!==void 0){for(const V in z){const H=z[V];for(const re in H)h(H[re].object),delete H[re];delete z[V]}delete K[P],Object.keys(K).length===0&&delete n[G]}}}function O(){L(),a=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:O,resetDefaultState:L,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:E,releaseStatesOfProgram:_,initAttributes:S,enableAttribute:g,disableUnusedAttributes:M}}function tm(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let m=0;m<h;m++)f+=c[m];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function nm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==In&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const E=_===tn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==un&&_!==yn&&!E&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(He("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&p===!1;t.reversedDepthBuffer===!0&&p===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&p===!0&&He("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:M,maxVaryings:C,maxFragmentUniforms:y,maxSamples:w,samples:T}}function im(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Rn,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const m=p.length!==0||f||n!==0||s;return s=f,n=p.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,f){t=h(p,f,0)},this.setState=function(p,f,m){const v=p.clippingPlanes,S=p.clipIntersection,g=p.clipShadows,d=i.get(p);if(!s||v===null||v.length===0||r&&!g)r?h(null):c();else{const M=r?0:n,C=M*4;let y=d.clippingState||null;l.value=y,y=h(v,f,C,m);for(let w=0;w!==C;++w)y[w]=t[w];d.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,f,m,v){const S=p!==null?p.length:0;let g=null;if(S!==0){if(g=l.value,v!==!0||g===null){const d=m+S*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<d)&&(g=new Float32Array(d));for(let C=0,y=m;C!==S;++C,y+=4)a.copy(p[C]).applyMatrix4(M,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}class tl extends nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Jc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ui(5,5,5),r=new Ft({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:Mi});r.uniforms.tEquirect.value=t;const a=new ht(s,r),o=t.minFilter;return t.minFilter===qn&&(t.minFilter=en),new xo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const Zl=256,sm=3,rm=20,ou=256,lu=16,am=3,om=new B,lm=new Be;class qs{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new xo(1,10,null),this._boxMesh=new ht(new ui(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=om}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);const p=l.autoClear,f=l.autoClearColor,m=l.autoClearDepth,v=l.autoClearStencil,S=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,S===null&&(e.background=l.getClearColor(lm));const g=new xo(n,s,h);return g.position.copy(o),g.update(l,e),l.autoClear=p,l.autoClearColor=f,l.autoClearDepth=m,l.autoClearStencil=v,e.background=S,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ql(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Zl,Hc(e))}_fromTexture(e,t){e.mapping===ns||e.mapping===zs?this._setSize(e.image.length===0?Zl:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=Jl(e,!1,!1),n=Math.log2(e)-sm;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Jl(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ns||e.mapping===zs?(this._cubemapMaterial===null&&(this._cubemapMaterial=jl()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ql()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=cm(),this._integrationMaterial=um());const t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/lu);for(let a=0;a<=n;a++){const o=qs.lodToRoughness(a,n);if(a>n-am)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(ou*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=hm());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}}function Jl(i,e,t){return new tl(i,{minFilter:qn,generateMipmaps:e,type:tn,colorSpace:Fr,depthBuffer:t})}function Ys(i,e,t){return new Ft({name:i,uniforms:e,vertexShader:$e.cube_vert,fragmentShader:t,side:$t,blending:Mi,depthTest:!1,depthWrite:!1})}function cm(){return Ys("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ou}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function um(){return Ys("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:lu}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function hm(){return Ys("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${rm}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Ql(){return Ys("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function jl(){return Ys("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function fm(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,m=!1){return f==null?null:m?a(f):r(f)}function r(f){if(f&&f.isTexture){const m=f.mapping;if(m===Qr||m===jr)if(e.has(f)){const v=e.get(f).texture;return o(v,f.mapping)}else{const v=f.image;if(v&&v.height>0){const S=new tl(v.height);return S.fromEquirectangularTexture(i,f),e.set(f,S),f.addEventListener("dispose",c),o(S.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const m=f.mapping,v=m===Qr||m===jr,S=m===ns||m===zs;if(v||S){let g=t.get(f);const d=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return n===null&&(n=new qs(i)),g=v?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const M=f.image;return v&&M&&M.height>0||S&&M&&l(M)?(n===null&&(n=new qs(i)),g=v?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function o(f,m){return m===Qr?f.mapping=ns:m===jr&&(f.mapping=zs),f}function l(f){let m=0;const v=6;for(let S=0;S<v;S++)f[S]!==void 0&&m++;return m===v}function c(f){const m=f.target;m.removeEventListener("dispose",c);const v=e.get(m);v!==void 0&&(e.delete(m),v.dispose())}function h(f){const m=f.target;m.removeEventListener("dispose",h);const v=t.get(m);v!==void 0&&(t.delete(m),v.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function dm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&es("WebGLRenderer: "+n+" extension not supported."),s}}}function pm(i,e,t,n){const s={},r=new WeakMap,a=new FinalizationRegistry(v=>delete s[v]);function o(v){l(v.target)}function l(v){v.index!==null&&e.remove(v.index);for(const g in v.attributes)e.remove(v.attributes[g]);v.removeEventListener("dispose",o),delete s[v.id],a.unregister(v);const S=r.get(v);S&&(e.remove(S),r.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(v,S){return s[S.id]!==void 0||(S.addEventListener("dispose",o),s[S.id]=new WeakRef(S),a.register(S,S.id,S),t.memory.geometries++),S}function h(v){const S=v.attributes;for(const g in S)e.update(S[g],i.ARRAY_BUFFER)}function p(v){const S=v.index,g=v.attributes.position;let d=0;if(g===void 0)return;const M=S!==null?S.array.length:g.array.length/3-1,C=g.count>=65535?Yc:qc,y=new C(Math.ceil(M/3)*6,1),w=y.array;if(S!==null){const _=S.array;d=S.version;for(let E=0,O=0;E<M;E+=3){const L=_[E+0],F=_[E+1],G=_[E+2];w[O++]=L,w[O++]=F,w[O++]=F,w[O++]=G,w[O++]=G,w[O++]=L}}else{d=g.version;for(let _=0,E=0;_<M;_+=3){const O=_+0,L=_+1,F=_+2;w[E++]=O,w[E++]=L,w[E++]=L,w[E++]=F,w[E++]=F,w[E++]=O}}y.version=d;const T=r.get(v);T&&e.remove(T),r.set(v,y)}function f(v){const S=r.get(v);if(S){const g=v.index;g!==null&&S.version<g.version&&p(v)}else p(v);return r.get(v)}function m(){for(const v in s){const S=s[v].deref();S!==void 0&&l(S)}}return{get:c,update:h,getWireframeAttribute:f,dispose:m}}function mm(i,e,t){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,f){i.drawElements(n,f,r,p*a),t.update(f,n,1)}function c(p,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,p*a,m),t.update(f,n,m))}function h(p,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,p,0,m);let S=0;for(let g=0;g<m;g++)S+=f[g];t.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function gm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:lt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function _m(i,e,t){const n=new WeakMap,s=new yt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==p){let O=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",O)};f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let C=0;m===!0&&(C=1),v===!0&&(C=2),S===!0&&(C=3);let y=o.attributes.position.count*C,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const T=new Float32Array(y*w*4*p),_=new kc(T,y,w,p);_.type=yn,_.needsUpdate=!0;const E=C*4;for(let L=0;L<p;L++){const F=g[L],G=d[L],K=M[L],P=y*w*4*L;for(let z=0;z<F.count;z++){const V=z*E;m===!0&&(s.fromBufferAttribute(F,z),T[P+V+0]=s.x,T[P+V+1]=s.y,T[P+V+2]=s.z,T[P+V+3]=0),v===!0&&(s.fromBufferAttribute(G,z),T[P+V+4]=s.x,T[P+V+5]=s.y,T[P+V+6]=s.z,T[P+V+7]=0),S===!0&&(s.fromBufferAttribute(K,z),T[P+V+8]=s.x,T[P+V+9]=s.y,T[P+V+10]=s.z,T[P+V+11]=K.itemSize===4?s.w:1)}}f={count:p,texture:_,size:new be(y,w)},n.set(o,f),o.addEventListener("dispose",O)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let S=0;S<c.length;S++)m+=c[S];const v=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function vm(i,e,t,n,s){let r=new WeakMap;function a(c){const h=s.render.frame,p=c.geometry,f=e.get(c,p);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return f}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const xm={[Po]:"LINEAR_TONE_MAPPING",[Lo]:"REINHARD_TONE_MAPPING",[Do]:"CINEON_TONE_MAPPING",[Vr]:"ACES_FILMIC_TONE_MAPPING",[No]:"AGX_TONE_MAPPING",[Uo]:"NEUTRAL_TONE_MAPPING",[Io]:"CUSTOM_TONE_MAPPING"};function Mm(i,e,t,n,s,r){const a=new nn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new kt;h.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new pt([0,2,0,0,2,0],2));const p=new tu({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new ht(h,p),m=new el(-1,1,1,-1,0,1);let v=null,S=null,g=!1,d,M=null,C=[],y=!1;this.setSize=function(w,T){a.setSize(w,T),o!==null&&o.setSize(w,T),l!==null&&l.setSize(w,T);for(let _=0;_<C.length;_++){const E=C[_];E.setSize&&E.setSize(w,T)}},this.setEffects=function(w){C=w,y=C.length>0&&C[0].isRenderPass===!0;const T=a.width,_=a.height;C.length>0&&o===null&&(o=new nn(T,_,{type:tn,depthBuffer:!1,stencilBuffer:!1}),l=new nn(T,_,{type:tn,depthBuffer:!1,stencilBuffer:!1}));const E=s===!0&&C.some(O=>O.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&c===null&&(c=new as(T,_),r===!0&&(c.format=ai,c.type=is)),a.dispose(),a.depthTexture=E?c:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let O=0;O<C.length;O++){const L=C[O];L.setSize&&L.setSize(T,_),E&&L.needsDepthTexture===!0&&L.setDepthTexture&&L.setDepthTexture(c)}},this.begin=function(w,T){if(g||w.toneMapping===Kn&&C.length===0)return!1;if(M=T,T!==null){const _=T.width,E=T.height;(a.width!==_||a.height!==E)&&this.setSize(_,E)}return y===!1&&w.setRenderTarget(a),d=w.toneMapping,w.toneMapping=Kn,!0},this.hasRenderPass=function(){return y},this.end=function(w,T){w.toneMapping=d,g=!0;let _=a,E=o;for(let O=0;O<C.length;O++){const L=C[O];L.enabled!==!1&&(L.render(w,E,_,T),L.needsSwap!==!1&&(_=E,E=E===o?l:o))}if(v!==w.outputColorSpace||S!==w.toneMapping){v=w.outputColorSpace,S=w.toneMapping,p.defines={},tt.getTransfer(v)===ut&&(p.defines.SRGB_TRANSFER="");const O=xm[S];O&&(p.defines[O]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=_.texture,w.setRenderTarget(M),w.render(f,m),M=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),p.dispose()}}const cu=new Ht,uu=new as(1,1),hu=new Qc(1),fu=new kc,du=new Ph,pu=new Jc,ec=[],tc=[],nc=new Float32Array(16),ic=new Float32Array(9),sc=new Float32Array(4);function fs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=ec[s];if(r===void 0&&(r=new Float32Array(s),ec[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Kr(i,e){let t=tc[e];t===void 0&&(t=new Int32Array(e),tc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Sm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ym(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2fv(this.addr,e),Dt(t,e)}}function Em(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;i.uniform3fv(this.addr,e),Dt(t,e)}}function Tm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4fv(this.addr,e),Dt(t,e)}}function bm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;sc.set(n),i.uniformMatrix2fv(this.addr,!1,sc),Dt(t,n)}}function Am(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;ic.set(n),i.uniformMatrix3fv(this.addr,!1,ic),Dt(t,n)}}function wm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;nc.set(n),i.uniformMatrix4fv(this.addr,!1,nc),Dt(t,n)}}function Rm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Cm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2iv(this.addr,e),Dt(t,e)}}function Pm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3iv(this.addr,e),Dt(t,e)}}function Lm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4iv(this.addr,e),Dt(t,e)}}function Dm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2uiv(this.addr,e),Dt(t,e)}}function Nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3uiv(this.addr,e),Dt(t,e)}}function Um(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4uiv(this.addr,e),Dt(t,e)}}function $r(i){return i.version===0&&(i.compareFunction=Bc,i.needsUpdate=!0),i}function Fm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=$r(uu):r=cu,t.setTexture2D(e||r,s)}function Om(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||du,s)}function Bm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=$r(hu):r=pu,t.setTextureCube(e||r,s)}function zm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||fu,s)}function Gm(i){switch(i){case 5126:return Sm;case 35664:return ym;case 35665:return Em;case 35666:return Tm;case 35674:return bm;case 35675:return Am;case 35676:return wm;case 5124:case 35670:return Rm;case 35667:case 35671:return Cm;case 35668:case 35672:return Pm;case 35669:case 35673:return Lm;case 5125:return Dm;case 36294:return Im;case 36295:return Nm;case 36296:return Um;case 35678:case 36198:case 36298:case 36306:case 35682:return Fm;case 35679:case 36299:case 36307:return Om;case 35680:case 36300:case 36308:case 36293:return Bm;case 36289:case 36303:case 36311:case 36292:return zm}}function Hm(i,e){i.uniform1fv(this.addr,e)}function km(i,e){const t=fs(e,this.size,2);i.uniform2fv(this.addr,t)}function Vm(i,e){const t=fs(e,this.size,3);i.uniform3fv(this.addr,t)}function Wm(i,e){const t=fs(e,this.size,4);i.uniform4fv(this.addr,t)}function Xm(i,e){const t=fs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function qm(i,e){const t=fs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ym(i,e){const t=fs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Km(i,e){i.uniform1iv(this.addr,e)}function $m(i,e){i.uniform2iv(this.addr,e)}function Zm(i,e){i.uniform3iv(this.addr,e)}function Jm(i,e){i.uniform4iv(this.addr,e)}function Qm(i,e){i.uniform1uiv(this.addr,e)}function jm(i,e){i.uniform2uiv(this.addr,e)}function e0(i,e){i.uniform3uiv(this.addr,e)}function t0(i,e){i.uniform4uiv(this.addr,e)}function n0(i,e,t){const n=this.cache,s=e.length,r=Kr(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=$r(uu):a=cu;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function i0(i,e,t){const n=this.cache,s=e.length,r=Kr(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||du,r[a])}function s0(i,e,t){const n=this.cache,s=e.length,r=Kr(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=$r(hu):a=pu;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function r0(i,e,t){const n=this.cache,s=e.length,r=Kr(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||fu,r[a])}function a0(i){switch(i){case 5126:return Hm;case 35664:return km;case 35665:return Vm;case 35666:return Wm;case 35674:return Xm;case 35675:return qm;case 35676:return Ym;case 5124:case 35670:return Km;case 35667:case 35671:return $m;case 35668:case 35672:return Zm;case 35669:case 35673:return Jm;case 5125:return Qm;case 36294:return jm;case 36295:return e0;case 36296:return t0;case 35678:case 36198:case 36298:case 36306:case 35682:return n0;case 35679:case 36299:case 36307:return i0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return r0}}class o0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Gm(t.type)}}class l0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=a0(t.type)}}class c0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const ba=/(\w+)(\])?(\[|\.)?/g;function rc(i,e){i.seq.push(e),i.map[e.id]=e}function u0(i,e,t){const n=i.name,s=n.length;for(ba.lastIndex=0;;){const r=ba.exec(n),a=ba.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){rc(t,c===void 0?new o0(o,i,e):new l0(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new c0(o),rc(t,p)),t=p}}}class Rr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);u0(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function ac(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const h0=37297;let f0=0;function d0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const oc=new We;function p0(i){tt._getMatrix(oc,tt.workingColorSpace,i);const e=`mat3( ${oc.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case Or:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function lc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+d0(i.getShaderSource(e),o)}else return r}function m0(i,e){const t=p0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const g0={[Po]:"Linear",[Lo]:"Reinhard",[Do]:"Cineon",[Vr]:"ACESFilmic",[No]:"AgX",[Uo]:"Neutral",[Io]:"Custom"};function _0(i,e){const t=g0[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const yr=new B;function v0(){tt.getLuminanceCoefficients(yr);const i=yr.x.toFixed(4),e=yr.y.toFixed(4),t=yr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function x0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function M0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function S0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Rs(i){return i!==""}function cc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function uc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const y0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mo(i){return i.replace(y0,E0)}function E0(i,e){const t=$e[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Mo(t)}const T0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hc(i){return i.replace(T0,b0)}function b0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const A0={[Ds]:"SHADOWMAP_TYPE_PCF",[As]:"SHADOWMAP_TYPE_VSM"};function w0(i){return A0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const R0={[zs]:"ENVMAP_MODE_REFRACTION"};function C0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":R0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const P0={[Co]:"ENVMAP_BLENDING_MULTIPLY",[$u]:"ENVMAP_BLENDING_MIX",[Zu]:"ENVMAP_BLENDING_ADD"};function L0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":P0[i.combine]||"ENVMAP_BLENDING_NONE"}function D0(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=w0(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=C0(t),p=L0(t),f=x0(t),m=M0(r),v=s.createProgram();let S,g,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Rs).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Rs).join(`
`),g.length>0&&(g+=`
`)):(S=[fc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),g=[fc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?$e.tonemapping_pars_fragment:"",t.toneMapping!==Kn?_0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,m0("linearToOutputTexel",t.outputColorSpace),v0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rs).join(`
`)),a=Mo(a),a=cc(a,t),a=uc(a,t),o=Mo(o),o=cc(o,t),o=uc(o,t),a=hc(a),o=hc(o),t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,S=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",t.glslVersion===_l?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const M=d+S+a,C=d+g+o,y=ac(s,s.VERTEX_SHADER,M),w=ac(s,s.FRAGMENT_SHADER,C);s.attachShader(v,y),s.attachShader(v,w),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(L){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(v)||"",G=s.getShaderInfoLog(y)||"",K=s.getShaderInfoLog(w)||"",P=F.trim(),z=G.trim(),V=K.trim();let H=!0,re=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,y,w);else{const Z=lc(s,y,"vertex"),te=lc(s,w,"fragment");lt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+P+`
`+Z+`
`+te)}else P!==""?He("WebGLProgram: Program Info Log:",P):(z===""||V==="")&&(re=!1);re&&(L.diagnostics={runnable:H,programLog:P,vertexShader:{log:z,prefix:S},fragmentShader:{log:V,prefix:g}})}s.deleteShader(y),s.deleteShader(w),_=new Rr(s,v),E=S0(s,v)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(v,h0)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=f0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=y,this.fragmentShader=w,this}let I0=0;class N0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new U0(e),t.set(e,n)),n}}class U0{constructor(e){this.id=I0++,this.code=e,this.usedTimes=0}}function F0(i){return i===bi||i===Ir||i===Nr}function O0(i,e,t,n,s,r){const a=new Vc,o=new N0,l=new Set,c=[],h=new Map,p=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,E,O,L,F,G){const K=L.fog,P=F.geometry,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,H=e.get(_.envMap||z,V),re=f[_.type];let Z=n.precision;_.precision!==null&&(Z=n.getMaxPrecision(_.precision),Z!==_.precision&&He("WebGLProgram.getParameters:",_.precision,"not supported, using",Z,"instead."));const te=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,se=te!==void 0?te.length:0;let xe=0;P.morphAttributes.position!==void 0&&(xe=1),P.morphAttributes.normal!==void 0&&(xe=2),P.morphAttributes.color!==void 0&&(xe=3);let Me,Q,ce,Se;if(re){const ge=Cn[re];Me=ge.vertexShader,Q=ge.fragmentShader}else{Me=_.vertexShader,Q=_.fragmentShader;const ge=o.getVertexShaderStage(_),j=o.getFragmentShaderStage(_);o.update(_,ge,j),ce=ge.id,Se=j.id}const Pe=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),Ie=F.isInstancedMesh===!0,Je=F.isBatchedMesh===!0,Le=!!_.map,Ye=!!_.matcap,de=!!H,ye=de&&H.isPMREMTexture===!0,Ke=!!_.aoMap,qe=!!_.lightMap,nt=!!_.bumpMap&&_.wireframe===!1,ke=!!_.normalMap,mt=!!_.displacementMap,ft=!!_.emissiveMap,wt=!!_.metalnessMap,gt=!!_.roughnessMap,Tt=_.anisotropy>0,I=_.clearcoat>0,Et=_.diffuseRoughness>0,it=_.dispersion>0,rt=_.retroreflectivity>0,he=_.iridescence>0,_t=_.sheen>0,Fe=_.transmission>0,Ne=Tt&&!!_.anisotropyMap,A=I&&!!_.clearcoatMap,u=I&&!!_.clearcoatNormalMap,R=I&&!!_.clearcoatRoughnessMap,q=Et&&!!_.diffuseRoughnessMap,N=he&&!!_.iridescenceMap,ne=he&&!!_.iridescenceThicknessMap,ee=_t&&!!_.sheenColorMap,U=_t&&!!_.sheenRoughnessMap,k=!!_.specularMap,ae=!!_.specularColorMap,b=!!_.specularIntensityMap,X=Fe&&!!_.transmissionMap,$=Fe&&!!_.thicknessMap,ie=!!_.gradientMap,oe=!!_.alphaMap,le=_.alphaTest>0,_e=!!_.alphaHash,Oe=!!_.extensions;let ue=Kn;_.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(ue=i.toneMapping);const Ue=ye?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,Ve={shaderID:re,shaderType:_.type,shaderName:_.name,vertexShader:Me,fragmentShader:Q,defines:_.defines,customVertexShaderID:ce,customFragmentShaderID:Se,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:Z,batching:Je,batchingColor:Je&&F._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&F.instanceColor!==null,instancingMorph:Ie&&F.morphTexture!==null,outputColorSpace:Pe===null?i.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Le,matcap:Ye,envMap:de,envMapMode:de&&H.mapping,envMapPMREM:ye,envMapMaxLod:ye?Ue.length-1:null,envMapSize:ye?Ue[0].width:null,aoMap:Ke,lightMap:qe,bumpMap:nt,normalMap:ke,displacementMap:mt,emissiveMap:ft,normalMapObjectSpace:ke&&_.normalMapType===ju,normalMapTangentSpace:ke&&_.normalMapType===Ur,packedNormalMap:ke&&_.normalMapType===Ur&&F0(_.normalMap.format),metalnessMap:wt,roughnessMap:gt,anisotropy:Tt,anisotropyMap:Ne,clearcoat:I,clearcoatMap:A,clearcoatNormalMap:u,clearcoatRoughnessMap:R,diffuseRoughness:Et,diffuseRoughnessMap:q,dispersion:it,retroreflection:rt,iridescence:he,iridescenceMap:N,iridescenceThicknessMap:ne,sheen:_t,sheenColorMap:ee,sheenRoughnessMap:U,specularMap:k,specularColorMap:ae,specularIntensityMap:b,transmission:Fe,transmissionMap:X,thicknessMap:$,gradientMap:ie,opaque:_.transparent===!1&&_.blending===Is&&_.alphaToCoverage===!1,alphaMap:oe,alphaTest:le,alphaHash:_e,combine:_.combine,mapUv:Le&&m(_.map.channel),aoMapUv:Ke&&m(_.aoMap.channel),lightMapUv:qe&&m(_.lightMap.channel),bumpMapUv:nt&&m(_.bumpMap.channel),normalMapUv:ke&&m(_.normalMap.channel),displacementMapUv:mt&&m(_.displacementMap.channel),emissiveMapUv:ft&&m(_.emissiveMap.channel),metalnessMapUv:wt&&m(_.metalnessMap.channel),roughnessMapUv:gt&&m(_.roughnessMap.channel),anisotropyMapUv:Ne&&m(_.anisotropyMap.channel),clearcoatMapUv:A&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:u&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:R&&m(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:q&&m(_.diffuseRoughnessMap.channel),iridescenceMapUv:N&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:U&&m(_.sheenRoughnessMap.channel),specularMapUv:k&&m(_.specularMap.channel),specularColorMapUv:ae&&m(_.specularColorMap.channel),specularIntensityMapUv:b&&m(_.specularIntensityMap.channel),transmissionMapUv:X&&m(_.transmissionMap.channel),thicknessMapUv:$&&m(_.thicknessMap.channel),alphaMapUv:oe&&m(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ke||Tt),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!P.attributes.uv&&(Le||oe),fog:!!K,useFog:_.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&ke===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:fe,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:xe,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:G.filter(ge=>ge.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:ue,decodeVideoTexture:Le&&_.map.isVideoTexture===!0&&tt.getTransfer(_.map.colorSpace)===ut,decodeVideoTextureEmissive:ft&&_.emissiveMap.isVideoTexture===!0&&tt.getTransfer(_.emissiveMap.colorSpace)===ut,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Pn,flipSided:_.side===$t,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Oe&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&_.extensions.multiDraw===!0||Je)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ve.vertexUv1s=l.has(1),Ve.vertexUv2s=l.has(2),Ve.vertexUv3s=l.has(3),l.clear(),Ve}function S(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const O in _.defines)E.push(O),E.push(_.defines[O]);return _.isRawShaderMaterial===!1&&(g(E,_),d(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function g(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapPMREM),_.push(E.envMapMaxLod),_.push(E.envMapSize),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.diffuseRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.numLightProbeGrids),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function d(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){const E=f[_.type];let O;if(E){const L=Cn[E];O=Xs.clone(L.uniforms)}else O=_.uniforms;return O}function C(_,E){let O=h.get(E);return O!==void 0?++O.usedTimes:(O=new D0(i,E,_,s),c.push(O),h.set(E,O)),O}function y(_){if(--_.usedTimes===0){const E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function T(){o.dispose()}return{getParameters:v,getProgramCacheKey:S,getUniforms:M,acquireProgram:C,releaseProgram:y,releaseShaderCache:w,programs:c,dispose:T}}function B0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function z0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function dc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function pc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}function o(f,m,v,S,g,d){let M=i[e];return M===void 0?(M={id:f.id,object:f,geometry:m,material:v,materialVariant:a(f),groupOrder:S,renderOrder:f.renderOrder,z:g,group:d},i[e]=M):(M.id=f.id,M.object=f,M.geometry=m,M.material=v,M.materialVariant=a(f),M.groupOrder=S,M.renderOrder=f.renderOrder,M.z=g,M.group=d),e++,M}function l(f,m,v,S,g,d,M){M.reversedDepth===!0&&(g=-g);const C=o(f,m,v,S,g,d);v.transmission>0?n.push(C):v.transparent===!0?s.push(C):t.push(C)}function c(f,m,v,S,g,d){const M=o(f,m,v,S,g,d);v.transmission>0?n.unshift(M):v.transparent===!0?s.unshift(M):t.unshift(M)}function h(f,m){t.length>1&&t.sort(f||z0),n.length>1&&n.sort(m||dc),s.length>1&&s.sort(m||dc)}function p(){for(let f=e,m=i.length;f<m;f++){const v=i[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:p,sort:h}}function G0(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new pc,i.set(n,[a])):s>=r.length?(a=new pc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function H0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new Be};break;case"SpotLight":t={position:new B,direction:new B,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function k0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let V0=0;function W0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function X0(i){const e=new H0,t=k0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const s=new B,r=new dt,a=new dt;function o(c){let h=0,p=0,f=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let m=0,v=0,S=0,g=0,d=0,M=0,C=0,y=0,w=0,T=0,_=0,E=0,O=0,L=0;c.sort(W0);for(let G=0,K=c.length;G<K;G++){const P=c[G],z=P.color,V=P.intensity,H=P.distance;let re=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===bi?re=P.shadow.map.texture:re=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=z.r*V,p+=z.g*V,f+=z.b*V;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(P.sh.coefficients[Z],V);L++}else if(P.isSunLight){const Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const te=P.shadow,se=t.get(P);se.shadowIntensity=te.intensity,se.shadowBias=te.bias,se.shadowNormalBias=te.normalBias,se.shadowRadius=te.radius,se.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),n.sunShadow[v]=se,n.sunShadowMap[v]=re;const xe=te.getViewportCount();for(let Me=0;Me<xe;Me++)n.sunShadowMatrix[S+Me]=te.getMatrix(Me),n.sunShadowCascade[S+Me]=te._cascadeData[Me];S+=xe,v++}n.sun[m]=Z,m++}else if(P.isDirectionalLight){const Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const te=P.shadow,se=t.get(P);se.shadowIntensity=te.intensity,se.shadowBias=te.bias,se.shadowNormalBias=te.normalBias,se.shadowRadius=te.radius,se.shadowMapSize=te.mapSize,n.directionalShadow[g]=se,n.directionalShadowMap[g]=re,n.directionalShadowMatrix[g]=P.shadow.matrix,w++}n.directional[g]=Z,g++}else if(P.isSpotLight){const Z=e.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(z).multiplyScalar(V),Z.distance=H,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,n.spot[M]=Z;const te=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,te.updateMatrices(P),P.castShadow&&O++),n.spotLightMatrix[M]=te.matrix,P.castShadow){const se=t.get(P);se.shadowIntensity=te.intensity,se.shadowBias=te.bias,se.shadowNormalBias=te.normalBias,se.shadowRadius=te.radius,se.shadowMapSize=te.mapSize,n.spotShadow[M]=se,n.spotShadowMap[M]=re,_++}M++}else if(P.isRectAreaLight){const Z=e.get(P);Z.color.copy(z).multiplyScalar(V),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),n.rectArea[C]=Z,C++}else if(P.isPointLight){const Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){const te=P.shadow,se=t.get(P);se.shadowIntensity=te.intensity,se.shadowBias=te.bias,se.shadowNormalBias=te.normalBias,se.shadowRadius=te.radius,se.shadowMapSize=te.mapSize,se.shadowCameraNear=te.camera.near,se.shadowCameraFar=te.camera.far,n.pointShadow[d]=se,n.pointShadowMap[d]=re,n.pointShadowMatrix[d]=P.shadow.matrix,T++}n.point[d]=Z,d++}else if(P.isHemisphereLight){const Z=e.get(P);Z.skyColor.copy(P.color).multiplyScalar(V),Z.groundColor.copy(P.groundColor).multiplyScalar(V),n.hemi[y]=Z,y++}}C>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=f;const F=n.hash;(F.sunLength!==m||F.directionalLength!==g||F.pointLength!==d||F.spotLength!==M||F.rectAreaLength!==C||F.hemiLength!==y||F.numSunShadows!==v||F.numDirectionalShadows!==w||F.numPointShadows!==T||F.numSpotShadows!==_||F.numSpotMaps!==E||F.numLightProbes!==L)&&(n.sun.length=m,n.directional.length=g,n.spot.length=M,n.rectArea.length=C,n.point.length=d,n.hemi.length=y,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+E-O,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=L,F.sunLength=m,F.directionalLength=g,F.pointLength=d,F.spotLength=M,F.rectAreaLength=C,F.hemiLength=y,F.numSunShadows=v,F.numDirectionalShadows=w,F.numPointShadows=T,F.numSpotShadows=_,F.numSpotMaps=E,F.numLightProbes=L,n.version=V0++)}function l(c,h){let p=0,f=0,m=0,v=0,S=0,g=0;const d=h.matrixWorldInverse;for(let M=0,C=c.length;M<C;M++){const y=c[M];if(y.isSunLight){const w=n.sun[p];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(d),p++}else if(y.isDirectionalLight){const w=n.directional[f];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),f++}else if(y.isSpotLight){const w=n.spot[v];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),v++}else if(y.isRectAreaLight){const w=n.rectArea[S];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(d),a.identity(),r.copy(y.matrixWorld),r.premultiply(d),a.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),S++}else if(y.isPointLight){const w=n.point[m];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(d),m++}else if(y.isHemisphereLight){const w=n.hemi[g];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(d),g++}}}return{setup:o,setupView:l,state:n}}function mc(i){const e=new X0(i),t=[],n=[],s=[];function r(p){h.camera=p,t.length=0,n.length=0,s.length=0}function a(p){p.isLightProbeGrid?s.push(p):t.push(p)}function o(p){n.push(p)}function l(){e.setup(t),s.sort((p,f)=>p.priority-f.priority||p.id-f.id)}function c(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function q0(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new mc(i),e.set(s,[o])):r>=a.length?(o=new mc(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Y0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,$0=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Z0=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],gc=new dt,Ts=new B,Aa=new B;function J0(i,e,t){let n=new Vs;const s=new be,r=new be,a=new yt,o=new nf,l=new sf,c={},h=t.maxTextureSize,p={[Ei]:$t,[$t]:Ei,[Pn]:Pn},f=new Ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:Y0,fragmentShader:K0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new kt;v.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new ht(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ds;let d=this.type;this.render=function(T,_,E){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Pu&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ds);const O=i.getRenderTarget(),L=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Mi),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const K=d!==this.type;K&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(z=>z.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,z=T.length;P<z;P++){const V=T[P],H=V.shadow;if(H===void 0){He("WebGLShadowMap:",V,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const re=H.getFrameExtents();s.multiply(re),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/re.x),s.x=r.x*re.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/re.y),s.y=r.y*re.y,H.mapSize.y=r.y));const Z=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=Z,H.map===null||K===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===As){if(V.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new nn(s.x,s.y,{format:bi,type:tn,minFilter:en,magFilter:en,generateMipmaps:!1}),H.map.texture.name=V.name+".shadowMap",H.map.depthTexture=new as(s.x,s.y,yn),H.map.depthTexture.name=V.name+".shadowMapDepth",H.map.depthTexture.format=li,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Gt,H.map.depthTexture.magFilter=Gt}else V.isPointLight?(H.map=new tl(s.x),H.map.depthTexture=new Qc(s.x,Nn)):(H.map=new nn(s.x,s.y),H.map.depthTexture=new as(s.x,s.y,Nn)),H.map.depthTexture.name=V.name+".shadowMap",H.map.depthTexture.format=li,this.type===Ds?(H.map.depthTexture.compareFunction=Z?Oc:Fc,H.map.depthTexture.minFilter=en,H.map.depthTexture.magFilter=en):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Gt,H.map.depthTexture.magFilter=Gt);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);const te=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();V.isPointLight!==!0&&H.updateMatrices(V,E);const se=H.camera.layers.mask&4294967294?H.camera.layers:E.layers;for(let xe=0;xe<te;xe++){const Me=H.getCamera(xe);if(V.isPointLight){const Q=H.camera,ce=H.matrix,Se=V.distance||Q.far;Se!==Q.far&&(Q.far=Se,Q.updateProjectionMatrix()),Ts.setFromMatrixPosition(V.matrixWorld),Q.position.copy(Ts),Aa.copy(Q.position),Aa.add($0[xe]),Q.up.copy(Z0[xe]),Q.lookAt(Aa),Q.updateMatrixWorld(),ce.makeTranslation(-Ts.x,-Ts.y,-Ts.z),gc.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),H._frustum.setFromProjectionMatrix(gc,Q.coordinateSystem,Q.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,xe),i.clear();else{xe===0&&(i.setRenderTarget(H.map),i.clear());const Q=H.getViewport(xe);a.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),G.viewport(a)}n=H.getFrustum(xe),y(_,E,Me,V,se,this.type)}H.isPointLightShadow!==!0&&this.type===As&&M(H,E),H.needsUpdate=!1}d=this.type,g.needsUpdate=!1,i.setRenderTarget(O,L,F)};function M(T,_){const E=e.update(S);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null?T.mapPass=new nn(s.x,s.y,{format:bi,type:tn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(_,null,E,f,S,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(_,null,E,m,S,null)}function C(T,_,E,O){let L=null;const F=E.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(F!==void 0)L=F;else if(L=E.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const G=L.uuid,K=_.uuid;let P=c[G];P===void 0&&(P={},c[G]=P);let z=P[K];z===void 0&&(z=L.clone(),P[K]=z,_.addEventListener("dispose",w)),L=z}if(L.visible=_.visible,L.wireframe=_.wireframe,O===As?L.side=_.shadowSide!==null?_.shadowSide:_.side:L.side=_.shadowSide!==null?_.shadowSide:p[_.side],L.alphaMap=_.alphaMap,L.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,L.map=_.map,L.clipShadows=_.clipShadows,L.clippingPlanes=_.clippingPlanes,L.clipIntersection=_.clipIntersection,L.displacementMap=_.displacementMap,L.displacementScale=_.displacementScale,L.displacementBias=_.displacementBias,L.wireframeLinewidth=_.wireframeLinewidth,L.linewidth=_.linewidth,E.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const G=i.properties.get(L);G.light=E}return L}function y(T,_,E,O,L,F){if(T.visible===!1)return;if(T.layers.test(L)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&F===As)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,T.matrixWorld);const P=e.update(T),z=T.material;if(Array.isArray(z)){const V=P.groups;for(let H=0,re=V.length;H<re;H++){const Z=V[H],te=z[Z.materialIndex];if(te&&te.visible){const se=C(T,te,O,F);T.onBeforeShadow(i,T,_,E,P,se,Z),i.renderBufferDirect(E,null,P,se,T,Z),T.onAfterShadow(i,T,_,E,P,se,Z)}}}else if(z.visible){const V=C(T,z,O,F);T.onBeforeShadow(i,T,_,E,P,V,null),i.renderBufferDirect(E,null,P,V,T,null),T.onAfterShadow(i,T,_,E,P,V,null)}}const K=T.children;for(let P=0,z=K.length;P<z;P++)y(K[P],_,E,O,L,F)}function w(T){T.target.removeEventListener("dispose",w);for(const E in c){const O=c[E],L=T.target.uuid;L in O&&(O[L].dispose(),delete O[L])}}}function Q0(i,e){function t(){let b=!1;const X=new yt;let $=null;const ie=new yt(0,0,0,0);return{setMask:function(oe){$!==oe&&!b&&(i.colorMask(oe,oe,oe,oe),$=oe)},setLocked:function(oe){b=oe},setClear:function(oe,le,_e,Oe,ue){ue===!0&&(oe*=Oe,le*=Oe,_e*=Oe),X.set(oe,le,_e,Oe),ie.equals(X)===!1&&(i.clearColor(oe,le,_e,Oe),ie.copy(X))},reset:function(){b=!1,$=null,ie.set(-1,0,0,0)}}}function n(){let b=!1,X=!1,$=null,ie=null,oe=null;return{setReversed:function(le){if(X!==le){const _e=e.get("EXT_clip_control");le?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),X=le;const Oe=oe;oe=null,this.setClear(Oe)}},getReversed:function(){return X},setTest:function(le){le?fe(i.DEPTH_TEST):Ie(i.DEPTH_TEST)},setMask:function(le){$!==le&&!b&&(i.depthMask(le),$=le)},setFunc:function(le){if(X&&(le=ch[le]),ie!==le){switch(le){case Da:i.depthFunc(i.NEVER);break;case Ia:i.depthFunc(i.ALWAYS);break;case Na:i.depthFunc(i.LESS);break;case Bs:i.depthFunc(i.LEQUAL);break;case Ua:i.depthFunc(i.EQUAL);break;case Fa:i.depthFunc(i.GEQUAL);break;case Oa:i.depthFunc(i.GREATER);break;case Ba:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ie=le}},setLocked:function(le){b=le},setClear:function(le){oe!==le&&(oe=le,X&&(le=1-le),i.clearDepth(le))},reset:function(){b=!1,$=null,ie=null,oe=null,X=!1}}}function s(){let b=!1,X=null,$=null,ie=null,oe=null,le=null,_e=null,Oe=null,ue=null;return{setTest:function(Ue){b||(Ue?fe(i.STENCIL_TEST):Ie(i.STENCIL_TEST))},setMask:function(Ue){X!==Ue&&!b&&(i.stencilMask(Ue),X=Ue)},setFunc:function(Ue,Ve,ge){($!==Ue||ie!==Ve||oe!==ge)&&(i.stencilFunc(Ue,Ve,ge),$=Ue,ie=Ve,oe=ge)},setOp:function(Ue,Ve,ge){(le!==Ue||_e!==Ve||Oe!==ge)&&(i.stencilOp(Ue,Ve,ge),le=Ue,_e=Ve,Oe=ge)},setLocked:function(Ue){b=Ue},setClear:function(Ue){ue!==Ue&&(i.clearStencil(Ue),ue=Ue)},reset:function(){b=!1,X=null,$=null,ie=null,oe=null,le=null,_e=null,Oe=null,ue=null}}}const r=new t,a=new n,o=new s;let l={};const c=new WeakMap;let h={},p={},f={},m=new WeakMap,v=[],S=null,g=!1,d=null,M=null,C=null,y=null,w=null,T=null,_=null,E=new Be(0,0,0),O=0,L=!1,F=null,G=null,K=null,P=null,z=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,re=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(Z)[1]),H=re>=1):Z.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),H=re>=2);let te=null,se={};const xe=i.getParameter(i.SCISSOR_BOX),Me=i.getParameter(i.VIEWPORT),Q=new yt().fromArray(xe),ce=new yt().fromArray(Me);function Se(b,X,$,ie){const oe=new Uint8Array(4),le=i.createTexture();i.bindTexture(b,le),i.texParameteri(b,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(b,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let _e=0;_e<$;_e++)b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY?i.texImage3D(X,0,i.RGBA,1,1,ie,0,i.RGBA,i.UNSIGNED_BYTE,oe):i.texImage2D(X+_e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,oe);return le}const Pe={};Pe[i.TEXTURE_2D]=Se(i.TEXTURE_2D,i.TEXTURE_2D,1),Pe[i.TEXTURE_CUBE_MAP]=Se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pe[i.TEXTURE_2D_ARRAY]=Se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Pe[i.TEXTURE_3D]=Se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),fe(i.DEPTH_TEST),a.setFunc(Bs),nt(!1),ke(pl),fe(i.CULL_FACE),Ke(Mi);function fe(b){h[b]!==!0&&(i.enable(b),h[b]=!0)}function Ie(b){h[b]!==!1&&(i.disable(b),h[b]=!1)}function Je(b,X){return f[b]!==X?(i.bindFramebuffer(b,X),f[b]=X,b===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=X),b===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=X),!0):!1}function Le(b,X){let $=v,ie=!1;if(b){$=m.get(X),$===void 0&&($=[],m.set(X,$));const oe=b.textures;if($.length!==oe.length||$[0]!==i.COLOR_ATTACHMENT0){for(let le=0,_e=oe.length;le<_e;le++)$[le]=i.COLOR_ATTACHMENT0+le;$.length=oe.length,ie=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,ie=!0);ie&&i.drawBuffers($)}function Ye(b){return S!==b?(i.useProgram(b),S=b,!0):!1}const de={[Qi]:i.FUNC_ADD,[Du]:i.FUNC_SUBTRACT,[Iu]:i.FUNC_REVERSE_SUBTRACT};de[Nu]=i.MIN,de[Uu]=i.MAX;const ye={[Fu]:i.ZERO,[Ou]:i.ONE,[Bu]:i.SRC_COLOR,[wc]:i.SRC_ALPHA,[Wu]:i.SRC_ALPHA_SATURATE,[ku]:i.DST_COLOR,[Gu]:i.DST_ALPHA,[zu]:i.ONE_MINUS_SRC_COLOR,[Rc]:i.ONE_MINUS_SRC_ALPHA,[Vu]:i.ONE_MINUS_DST_COLOR,[Hu]:i.ONE_MINUS_DST_ALPHA,[Xu]:i.CONSTANT_COLOR,[qu]:i.ONE_MINUS_CONSTANT_COLOR,[Yu]:i.CONSTANT_ALPHA,[Ku]:i.ONE_MINUS_CONSTANT_ALPHA};function Ke(b,X,$,ie,oe,le,_e,Oe,ue,Ue){if(b===Mi){g===!0&&(Ie(i.BLEND),g=!1);return}if(g===!1&&(fe(i.BLEND),g=!0),b!==Lu){if(b!==d||Ue!==L){if((M!==Qi||w!==Qi)&&(i.blendEquation(i.FUNC_ADD),M=Qi,w=Qi),Ue)switch(b){case Is:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Si:i.blendFunc(i.ONE,i.ONE);break;case ml:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:lt("WebGLState: Invalid blending: ",b);break}else switch(b){case Is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ml:lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gl:lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:lt("WebGLState: Invalid blending: ",b);break}C=null,y=null,T=null,_=null,E.set(0,0,0),O=0,d=b,L=Ue}return}oe=oe||X,le=le||$,_e=_e||ie,(X!==M||oe!==w)&&(i.blendEquationSeparate(de[X],de[oe]),M=X,w=oe),($!==C||ie!==y||le!==T||_e!==_)&&(i.blendFuncSeparate(ye[$],ye[ie],ye[le],ye[_e]),C=$,y=ie,T=le,_=_e),(Oe.equals(E)===!1||ue!==O)&&(i.blendColor(Oe.r,Oe.g,Oe.b,ue),E.copy(Oe),O=ue),d=b,L=!1}function qe(b,X){b.side===Pn?Ie(i.CULL_FACE):fe(i.CULL_FACE);let $=b.side===$t;X&&($=!$),nt($),b.blending===Is&&b.transparent===!1?Ke(Mi):Ke(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),a.setFunc(b.depthFunc),a.setTest(b.depthTest),a.setMask(b.depthWrite),r.setMask(b.colorWrite);const ie=b.stencilWrite;o.setTest(ie),ie&&(o.setMask(b.stencilWriteMask),o.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),o.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),ft(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):Ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function nt(b){F!==b&&(b?i.frontFace(i.CW):i.frontFace(i.CCW),F=b)}function ke(b){b!==Ru?(fe(i.CULL_FACE),b!==G&&(b===pl?i.cullFace(i.BACK):b===Cu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ie(i.CULL_FACE),G=b}function mt(b){b!==K&&(H&&i.lineWidth(b),K=b)}function ft(b,X,$){b?(fe(i.POLYGON_OFFSET_FILL),(P!==X||z!==$)&&(P=X,z=$,a.getReversed()&&(X=-X,$=-$),i.polygonOffset(X,$))):Ie(i.POLYGON_OFFSET_FILL)}function wt(b){b?fe(i.SCISSOR_TEST):Ie(i.SCISSOR_TEST)}function gt(b){b===void 0&&(b=i.TEXTURE0+V-1),te!==b&&(i.activeTexture(b),te=b)}function Tt(b,X,$){$===void 0&&(te===null?$=i.TEXTURE0+V-1:$=te);let ie=se[$];ie===void 0&&(ie={type:void 0,texture:void 0},se[$]=ie),(ie.type!==b||ie.texture!==X)&&(te!==$&&(i.activeTexture($),te=$),i.bindTexture(b,X||Pe[b]),ie.type=b,ie.texture=X)}function I(){const b=se[te];b!==void 0&&b.type!==void 0&&(i.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function Et(){try{i.compressedTexImage2D(...arguments)}catch(b){lt("WebGLState:",b)}}function it(){try{i.compressedTexImage3D(...arguments)}catch(b){lt("WebGLState:",b)}}function rt(){try{i.texSubImage2D(...arguments)}catch(b){lt("WebGLState:",b)}}function he(){try{i.texSubImage3D(...arguments)}catch(b){lt("WebGLState:",b)}}function _t(){try{i.compressedTexSubImage2D(...arguments)}catch(b){lt("WebGLState:",b)}}function Fe(){try{i.compressedTexSubImage3D(...arguments)}catch(b){lt("WebGLState:",b)}}function Ne(){try{i.texStorage2D(...arguments)}catch(b){lt("WebGLState:",b)}}function A(){try{i.texStorage3D(...arguments)}catch(b){lt("WebGLState:",b)}}function u(){try{i.texImage2D(...arguments)}catch(b){lt("WebGLState:",b)}}function R(){try{i.texImage3D(...arguments)}catch(b){lt("WebGLState:",b)}}function q(b){return p[b]!==void 0?p[b]:i.getParameter(b)}function N(b,X){p[b]!==X&&(i.pixelStorei(b,X),p[b]=X)}function ne(b){Q.equals(b)===!1&&(i.scissor(b.x,b.y,b.z,b.w),Q.copy(b))}function ee(b){ce.equals(b)===!1&&(i.viewport(b.x,b.y,b.z,b.w),ce.copy(b))}function U(b,X){let $=c.get(X);$===void 0&&($=new WeakMap,c.set(X,$));let ie=$.get(b);ie===void 0&&(ie=i.getUniformBlockIndex(X,b.name),i.uniformBlockBinding(X,ie,ie),$.set(b,ie))}function k(b,X,$){const oe=c.get(X).get(b);l[oe]!==$&&(i.bindBufferBase(i.UNIFORM_BUFFER,oe,$),l[oe]=$)}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},te=null,se={},f={},l={},m=new WeakMap,v=[],S=null,g=!1,d=null,M=null,C=null,y=null,w=null,T=null,_=null,E=new Be(0,0,0),O=0,L=!1,F=null,G=null,K=null,P=null,z=null,Q.set(0,0,i.canvas.width,i.canvas.height),ce.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:fe,disable:Ie,bindFramebuffer:Je,drawBuffers:Le,useProgram:Ye,setBlending:Ke,setMaterial:qe,setFlipSided:nt,setCullFace:ke,setLineWidth:mt,setPolygonOffset:ft,setScissorTest:wt,activeTexture:gt,bindTexture:Tt,unbindTexture:I,compressedTexImage2D:Et,compressedTexImage3D:it,texImage2D:u,texImage3D:R,pixelStorei:N,getParameter:q,updateUBOMapping:U,uniformBlockBinding:k,texStorage2D:Ne,texStorage3D:A,texSubImage2D:rt,texSubImage3D:he,compressedTexSubImage2D:_t,compressedTexSubImage3D:Fe,scissor:ne,viewport:ee,reset:ae}}function j0(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new be,h=new WeakMap,p=new Set;let f;const m=new WeakMap,v=new Set,S=new FinalizationRegistry(A=>v.delete(A));let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(A,u){return g?new OffscreenCanvas(A,u):ks("canvas")}function M(A,u,R){let q=1;const N=Ne(A);if((N.width>R||N.height>R)&&(q=R/Math.max(N.width,N.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ne=Math.floor(q*N.width),ee=Math.floor(q*N.height);f===void 0&&(f=d(ne,ee));const U=u?d(ne,ee):f;return U.width=ne,U.height=ee,U.getContext("2d").drawImage(A,0,0,ne,ee),He("WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+ne+"x"+ee+")."),U}else return"data"in A&&He("WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),A;return A}function C(A){return A.generateMipmaps}function y(A){i.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(A,u,R,q,N,ne=!1){if(A!==null){if(i[A]!==void 0)return i[A];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ee;q&&(ee=e.get("EXT_texture_norm16"),ee||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let U=u;if(u===i.RED&&(R===i.FLOAT&&(U=i.R32F),R===i.HALF_FLOAT&&(U=i.R16F),R===i.UNSIGNED_BYTE&&(U=i.R8),R===i.UNSIGNED_SHORT&&ee&&(U=ee.R16_EXT),R===i.SHORT&&ee&&(U=ee.R16_SNORM_EXT)),u===i.RED_INTEGER&&(R===i.UNSIGNED_BYTE&&(U=i.R8UI),R===i.UNSIGNED_SHORT&&(U=i.R16UI),R===i.UNSIGNED_INT&&(U=i.R32UI),R===i.BYTE&&(U=i.R8I),R===i.SHORT&&(U=i.R16I),R===i.INT&&(U=i.R32I)),u===i.RG&&(R===i.FLOAT&&(U=i.RG32F),R===i.HALF_FLOAT&&(U=i.RG16F),R===i.UNSIGNED_BYTE&&(U=i.RG8),R===i.UNSIGNED_SHORT&&ee&&(U=ee.RG16_EXT),R===i.SHORT&&ee&&(U=ee.RG16_SNORM_EXT)),u===i.RG_INTEGER&&(R===i.UNSIGNED_BYTE&&(U=i.RG8UI),R===i.UNSIGNED_SHORT&&(U=i.RG16UI),R===i.UNSIGNED_INT&&(U=i.RG32UI),R===i.BYTE&&(U=i.RG8I),R===i.SHORT&&(U=i.RG16I),R===i.INT&&(U=i.RG32I)),u===i.RGB_INTEGER&&(R===i.UNSIGNED_BYTE&&(U=i.RGB8UI),R===i.UNSIGNED_SHORT&&(U=i.RGB16UI),R===i.UNSIGNED_INT&&(U=i.RGB32UI),R===i.BYTE&&(U=i.RGB8I),R===i.SHORT&&(U=i.RGB16I),R===i.INT&&(U=i.RGB32I)),u===i.RGBA_INTEGER&&(R===i.UNSIGNED_BYTE&&(U=i.RGBA8UI),R===i.UNSIGNED_SHORT&&(U=i.RGBA16UI),R===i.UNSIGNED_INT&&(U=i.RGBA32UI),R===i.BYTE&&(U=i.RGBA8I),R===i.SHORT&&(U=i.RGBA16I),R===i.INT&&(U=i.RGBA32I)),u===i.RGB&&(R===i.UNSIGNED_SHORT&&ee&&(U=ee.RGB16_EXT),R===i.SHORT&&ee&&(U=ee.RGB16_SNORM_EXT),R===i.UNSIGNED_INT_5_9_9_9_REV&&(U=i.RGB9_E5),R===i.UNSIGNED_INT_10F_11F_11F_REV&&(U=i.R11F_G11F_B10F)),u===i.RGBA){const k=ne?Or:tt.getTransfer(N);R===i.FLOAT&&(U=i.RGBA32F),R===i.HALF_FLOAT&&(U=i.RGBA16F),R===i.UNSIGNED_BYTE&&(U=k===ut?i.SRGB8_ALPHA8:i.RGBA8),R===i.UNSIGNED_SHORT&&ee&&(U=ee.RGBA16_EXT),R===i.SHORT&&ee&&(U=ee.RGBA16_SNORM_EXT),R===i.UNSIGNED_SHORT_4_4_4_4&&(U=i.RGBA4),R===i.UNSIGNED_SHORT_5_5_5_1&&(U=i.RGB5_A1)}return(U===i.R16F||U===i.R32F||U===i.RG16F||U===i.RG32F||U===i.RGBA16F||U===i.RGBA32F)&&e.get("EXT_color_buffer_float"),U}function _(A,u){let R;return A?u===null||u===Nn||u===is?R=i.DEPTH24_STENCIL8:u===yn?R=i.DEPTH32F_STENCIL8:u===Gs&&(R=i.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):u===null||u===Nn||u===is?R=i.DEPTH_COMPONENT24:u===yn?R=i.DEPTH_COMPONENT32F:u===Gs&&(R=i.DEPTH_COMPONENT16),R}function E(A,u){return C(A)===!0||A.isFramebufferTexture&&A.minFilter!==Gt&&A.minFilter!==en?Math.log2(Math.max(u.width,u.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?u.mipmaps.length:1}function O(A){const u=new WeakRef(A);n.get(A).__ref=u,v.add(u),S.register(A,u,u)}function L(A){const u=n.get(A).__ref;u!==void 0&&(v.delete(u),S.unregister(u))}function F(A){K(A.target)}function G(A){P(A.target)}function K(A){A.removeEventListener("dispose",F),L(A),V(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&p.delete(A)}function P(A){A.removeEventListener("dispose",G),L(A),re(A)}function z(){for(const A of v){const u=A.deref();u!==void 0&&(u.isRenderTarget===!0?P(u):K(u))}v.clear(),p.clear()}function V(A){const u=n.get(A);if(u.__webglInit===void 0)return;const R=A.source,q=m.get(R);if(q){const N=q[u.__cacheKey];N.usedTimes--,N.usedTimes===0&&H(A),Object.keys(q).length===0&&m.delete(R)}n.remove(A)}function H(A){const u=n.get(A);i.deleteTexture(u.__webglTexture);const R=A.source,q=m.get(R);delete q[u.__cacheKey],a.memory.textures--}function re(A){const u=n.get(A);u.__depthDisposeCallback&&u.__depthDisposeCallback();const R=A.depthTexture;if(R&&R.renderTarget===A&&K(R),A.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(u.__webglFramebuffer[N]))for(let ne=0;ne<u.__webglFramebuffer[N].length;ne++)i.deleteFramebuffer(u.__webglFramebuffer[N][ne]);else i.deleteFramebuffer(u.__webglFramebuffer[N]);u.__webglDepthbuffer&&i.deleteRenderbuffer(u.__webglDepthbuffer[N])}else{if(Array.isArray(u.__webglFramebuffer))for(let N=0;N<u.__webglFramebuffer.length;N++)i.deleteFramebuffer(u.__webglFramebuffer[N]);else i.deleteFramebuffer(u.__webglFramebuffer);if(u.__webglDepthbuffer&&i.deleteRenderbuffer(u.__webglDepthbuffer),u.__webglMultisampledFramebuffer&&i.deleteFramebuffer(u.__webglMultisampledFramebuffer),u.__webglColorRenderbuffer)for(let N=0;N<u.__webglColorRenderbuffer.length;N++)u.__webglColorRenderbuffer[N]&&i.deleteRenderbuffer(u.__webglColorRenderbuffer[N]);u.__webglDepthRenderbuffer&&i.deleteRenderbuffer(u.__webglDepthRenderbuffer)}const q=A.textures;for(let N=0,ne=q.length;N<ne;N++){const ee=n.get(q[N]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),a.memory.textures--),n.remove(q[N])}n.remove(A)}let Z=0;function te(){Z=0}function se(){return Z}function xe(A){Z=A}function Me(){const A=Z;return A>=s.maxTextures&&He("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),Z+=1,A}function Q(A){const u=[];return u.push(A.wrapS),u.push(A.wrapT),u.push(A.wrapR||0),u.push(A.magFilter),u.push(A.minFilter),u.push(A.anisotropy),u.push(A.internalFormat),u.push(A.format),u.push(A.type),u.push(A.generateMipmaps),u.push(A.mipmapsAutoUpdate),u.push(A.premultiplyAlpha),u.push(A.flipY),u.push(A.unpackAlignment),u.push(A.colorSpace),u.join()}function ce(A,u){const R=n.get(A);if(A.isVideoTexture&&_t(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&R.__version!==A.version){const q=A.image;if(q===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{qe(R,A,u);return}}else A.isExternalTexture&&(R.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,R.__webglTexture,i.TEXTURE0+u)}function Se(A,u){const R=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&R.__version!==A.version){qe(R,A,u);return}else A.isExternalTexture&&(R.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,R.__webglTexture,i.TEXTURE0+u)}function Pe(A,u){const R=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&R.__version!==A.version){qe(R,A,u);return}t.bindTexture(i.TEXTURE_3D,R.__webglTexture,i.TEXTURE0+u)}function fe(A,u){const R=n.get(A);if(A.version>0&&R.__version!==A.version){nt(R,A,u);return}t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+u)}const Ie={[Ti]:i.REPEAT,[Dn]:i.CLAMP_TO_EDGE,[za]:i.MIRRORED_REPEAT},Je={[Gt]:i.NEAREST,[Ju]:i.NEAREST_MIPMAP_NEAREST,[$s]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[ea]:i.LINEAR_MIPMAP_NEAREST,[qn]:i.LINEAR_MIPMAP_LINEAR},Le={[th]:i.NEVER,[Bc]:i.ALWAYS,[nh]:i.LESS,[Fc]:i.LEQUAL,[ih]:i.EQUAL,[Oc]:i.GEQUAL,[sh]:i.GREATER,[rh]:i.NOTEQUAL};function Ye(A,u){if(u.type===yn&&e.has("OES_texture_float_linear")===!1&&(u.magFilter===en||u.magFilter===ea||u.magFilter===$s||u.magFilter===qn||u.minFilter===en||u.minFilter===ea||u.minFilter===$s||u.minFilter===qn)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Ie[u.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Ie[u.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Ie[u.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Je[u.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Je[u.minFilter]),u.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Le[u.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(u.magFilter===Gt||u.minFilter!==$s&&u.minFilter!==qn||u.type===yn&&e.has("OES_texture_float_linear")===!1)return;if(u.anisotropy>1||n.get(u).__currentAnisotropy){const R=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(u.anisotropy,s.getMaxAnisotropy())),n.get(u).__currentAnisotropy=u.anisotropy}}}function de(A,u){let R=!1;A.__webglInit===void 0&&(A.__webglInit=!0,u.addEventListener("dispose",F),O(u));const q=u.source;let N=m.get(q);N===void 0&&(N={},m.set(q,N));const ne=Q(u);if(ne!==A.__cacheKey){N[ne]===void 0&&(N[ne]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,R=!0),N[ne].usedTimes++;const ee=N[A.__cacheKey];ee!==void 0&&(N[A.__cacheKey].usedTimes--,ee.usedTimes===0&&H(u)),A.__cacheKey=ne,A.__webglTexture=N[ne].texture}return R}function ye(A,u,R){return Math.floor(Math.floor(A/R)/u)}function Ke(A,u,R,q){const ne=A.updateRanges;if(ne.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,u.width,u.height,R,q,u.data);else{ne.sort((b,X)=>b.start-X.start);let ee=0;for(let b=1;b<ne.length;b++){const X=ne[ee],$=ne[b],ie=X.start+X.count,oe=ye($.start,u.width,4),le=ye(X.start,u.width,4);$.start<=ie+1&&oe===le&&ye($.start+$.count-1,u.width,4)===oe?X.count=Math.max(X.count,$.start+$.count-X.start):(++ee,ne[ee]=$)}ne.length=ee+1;const U=t.getParameter(i.UNPACK_ROW_LENGTH),k=t.getParameter(i.UNPACK_SKIP_PIXELS),ae=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,u.width);for(let b=0,X=ne.length;b<X;b++){const $=ne[b],ie=Math.floor($.start/4),oe=Math.ceil($.count/4),le=ie%u.width,_e=Math.floor(ie/u.width),Oe=oe,ue=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,le),t.pixelStorei(i.UNPACK_SKIP_ROWS,_e),t.texSubImage2D(i.TEXTURE_2D,0,le,_e,Oe,ue,R,q,u.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,U),t.pixelStorei(i.UNPACK_SKIP_PIXELS,k),t.pixelStorei(i.UNPACK_SKIP_ROWS,ae)}}function qe(A,u,R){let q=i.TEXTURE_2D;(u.isDataArrayTexture||u.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),u.isData3DTexture&&(q=i.TEXTURE_3D);const N=de(A,u),ne=u.source;t.bindTexture(q,A.__webglTexture,i.TEXTURE0+R);const ee=n.get(ne);if(ne.version!==ee.__version||N===!0){if(t.activeTexture(i.TEXTURE0+R),(typeof ImageBitmap<"u"&&u.image instanceof ImageBitmap)===!1){const ue=tt.getPrimaries(tt.workingColorSpace),Ue=u.colorSpace===ri?null:tt.getPrimaries(u.colorSpace),Ve=u.colorSpace===ri||ue===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,u.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,u.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve)}t.pixelStorei(i.UNPACK_ALIGNMENT,u.unpackAlignment);let k=M(u.image,!1,s.maxTextureSize);k=Fe(u,k);const ae=r.convert(u.format,u.colorSpace),b=r.convert(u.type);let X=T(u.internalFormat,ae,b,u.normalized,u.colorSpace,u.isVideoTexture);Ye(q,u);let $;const ie=u.mipmaps,oe=u.isVideoTexture!==!0,le=ee.__version===void 0||N===!0,_e=ne.dataReady,Oe=E(u,k);if(u.isDepthTexture)X=_(u.format===ai,u.type),le&&(oe?t.texStorage2D(i.TEXTURE_2D,1,X,k.width,k.height):t.texImage2D(i.TEXTURE_2D,0,X,k.width,k.height,0,ae,b,null));else if(u.isDataTexture)if(ie.length>0){oe&&le&&t.texStorage2D(i.TEXTURE_2D,Oe,X,ie[0].width,ie[0].height);for(let ue=0,Ue=ie.length;ue<Ue;ue++)$=ie[ue],oe?_e&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,$.width,$.height,ae,b,$.data):t.texImage2D(i.TEXTURE_2D,ue,X,$.width,$.height,0,ae,b,$.data);u.generateMipmaps=!1}else oe?(le&&t.texStorage2D(i.TEXTURE_2D,Oe,X,k.width,k.height),_e&&Ke(u,k,ae,b)):t.texImage2D(i.TEXTURE_2D,0,X,k.width,k.height,0,ae,b,k.data);else if(u.isCompressedTexture)if(u.isCompressedArrayTexture){oe&&le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,X,ie[0].width,ie[0].height,k.depth);for(let ue=0,Ue=ie.length;ue<Ue;ue++)if($=ie[ue],u.format!==In)if(ae!==null)if(oe){if(_e)if(u.layerUpdates.size>0){const Ve=$l($.width,$.height,u.format,u.type);for(const ge of u.layerUpdates){const j=$.data.subarray(ge*Ve/$.data.BYTES_PER_ELEMENT,(ge+1)*Ve/$.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,ge,$.width,$.height,1,ae,j)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,$.width,$.height,k.depth,ae,$.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,X,$.width,$.height,k.depth,0,$.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?_e&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,$.width,$.height,k.depth,ae,b,$.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,X,$.width,$.height,k.depth,0,ae,b,$.data);u.layerUpdates.size>0&&u.clearLayerUpdates()}else{oe&&le&&t.texStorage2D(i.TEXTURE_2D,Oe,X,ie[0].width,ie[0].height);for(let ue=0,Ue=ie.length;ue<Ue;ue++)$=ie[ue],u.format!==In?ae!==null?oe?_e&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,$.width,$.height,ae,$.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,X,$.width,$.height,0,$.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?_e&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,$.width,$.height,ae,b,$.data):t.texImage2D(i.TEXTURE_2D,ue,X,$.width,$.height,0,ae,b,$.data)}else if(u.isDataArrayTexture)if(oe){if(le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,X,k.width,k.height,k.depth),_e)if(u.layerUpdates.size>0){const ue=$l(k.width,k.height,u.format,u.type);for(const Ue of u.layerUpdates){const Ve=k.data.subarray(Ue*ue/k.data.BYTES_PER_ELEMENT,(Ue+1)*ue/k.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ue,k.width,k.height,1,ae,b,Ve)}u.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,k.width,k.height,k.depth,ae,b,k.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,X,k.width,k.height,k.depth,0,ae,b,k.data);else if(u.isData3DTexture)oe?(le&&t.texStorage3D(i.TEXTURE_3D,Oe,X,k.width,k.height,k.depth),_e&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,k.width,k.height,k.depth,ae,b,k.data)):t.texImage3D(i.TEXTURE_3D,0,X,k.width,k.height,k.depth,0,ae,b,k.data);else if(u.isFramebufferTexture){if(le)if(oe)t.texStorage2D(i.TEXTURE_2D,Oe,X,k.width,k.height);else{let ue=k.width,Ue=k.height;for(let Ve=0;Ve<Oe;Ve++)t.texImage2D(i.TEXTURE_2D,Ve,X,ue,Ue,0,ae,b,null),ue>>=1,Ue>>=1}}else if(u.isHTMLTexture){if("texElementImage2D"in i){const ue=i.canvas;if(ue.hasAttribute("layoutsubtree")||ue.setAttribute("layoutsubtree","true"),k.parentNode!==ue){ue.appendChild(k),p.add(u),ue.onpaint=Ue=>{const Ve=Ue.changedElements;for(const ge of p)Ve.includes(ge.image)&&(ge.needsUpdate=!0)},ue.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,k);else{const Ve=i.RGBA,ge=i.RGBA,j=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ve,ge,j,k)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ie.length>0){if(oe&&le){const ue=Ne(ie[0]);t.texStorage2D(i.TEXTURE_2D,Oe,X,ue.width,ue.height)}for(let ue=0,Ue=ie.length;ue<Ue;ue++)$=ie[ue],oe?_e&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,ae,b,$):t.texImage2D(i.TEXTURE_2D,ue,X,ae,b,$);u.generateMipmaps=!1}else if(oe){if(le){const ue=Ne(k);t.texStorage2D(i.TEXTURE_2D,Oe,X,ue.width,ue.height)}_e&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,b,k)}else t.texImage2D(i.TEXTURE_2D,0,X,ae,b,k);C(u)&&u.mipmapsAutoUpdate===!0&&y(q),ee.__version=ne.version,u.onUpdate&&u.onUpdate(u)}A.__version=u.version}function nt(A,u,R){if(u.image.length!==6)return;const q=de(A,u),N=u.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+R);const ne=n.get(N);if(N.version!==ne.__version||q===!0){t.activeTexture(i.TEXTURE0+R);const ee=tt.getPrimaries(tt.workingColorSpace),U=u.colorSpace===ri?null:tt.getPrimaries(u.colorSpace),k=u.colorSpace===ri||ee===U?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,u.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,u.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,u.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,k);const ae=u.isCompressedTexture||u.image[0].isCompressedTexture,b=u.image[0]&&u.image[0].isDataTexture,X=[];for(let ge=0;ge<6;ge++)!ae&&!b?X[ge]=M(u.image[ge],!0,s.maxCubemapSize):X[ge]=b?u.image[ge].image:u.image[ge],X[ge]=Fe(u,X[ge]);const $=X[0],ie=r.convert(u.format,u.colorSpace),oe=r.convert(u.type);let le=T(u.internalFormat,ie,oe,u.normalized,u.colorSpace);const _e=u.isVideoTexture!==!0,Oe=ne.__version===void 0||q===!0,ue=N.dataReady;let Ue=E(u,$);Ye(i.TEXTURE_CUBE_MAP,u);let Ve;if(u.isDepthTexture){if(le=_(u.format===ai,u.type),Oe)if(_e)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,le,$.width,$.height);else for(let ge=0;ge<6;ge++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,le,$.width,$.height,0,ie,oe,null)}else if(ae){_e&&Oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,le,$.width,$.height);for(let ge=0;ge<6;ge++){Ve=X[ge].mipmaps;for(let j=0;j<Ve.length;j++){const Te=Ve[j];u.format!==In?ie!==null?_e?ue&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,j,0,0,Te.width,Te.height,ie,Te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,j,le,Te.width,Te.height,0,Te.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_e?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,j,0,0,Te.width,Te.height,ie,oe,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,j,le,Te.width,Te.height,0,ie,oe,Te.data)}}}else{if(Ve=u.mipmaps,_e&&Oe){Ve.length>0&&Ue++;const ge=Ne(X[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,le,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(b){_e?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,X[ge].width,X[ge].height,ie,oe,X[ge].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,le,X[ge].width,X[ge].height,0,ie,oe,X[ge].data);for(let j=0;j<Ve.length;j++){const Ce=Ve[j].image[ge].image;_e?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,j+1,0,0,Ce.width,Ce.height,ie,oe,Ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,j+1,le,Ce.width,Ce.height,0,ie,oe,Ce.data)}}else{_e?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ie,oe,X[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,le,ie,oe,X[ge]);for(let j=0;j<Ve.length;j++){const Te=Ve[j];_e?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,j+1,0,0,ie,oe,Te.image[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,j+1,le,ie,oe,Te.image[ge])}}}C(u)&&u.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),ne.__version=N.version,u.onUpdate&&u.onUpdate(u)}A.__version=u.version}function ke(A,u,R,q,N,ne){const ee=r.convert(R.format,R.colorSpace),U=r.convert(R.type),k=T(R.internalFormat,ee,U,R.normalized,R.colorSpace),ae=n.get(u),b=n.get(R);if(b.__renderTarget=u,!ae.__hasExternalTextures){const X=Math.max(1,u.width>>ne),$=Math.max(1,u.height>>ne);N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?t.texImage3D(N,ne,k,X,$,u.depth,0,ee,U,null):t.texImage2D(N,ne,k,X,$,0,ee,U,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),he(u)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,N,b.__webglTexture,0,rt(u)):(N===i.TEXTURE_2D||N>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&N<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,N,b.__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(A,u,R){if(i.bindRenderbuffer(i.RENDERBUFFER,A),u.depthBuffer){const q=u.depthTexture,N=q&&q.isDepthTexture?q.type:null,ne=_(u.stencilBuffer,N),ee=u.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;he(u)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt(u),ne,u.width,u.height):R?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt(u),ne,u.width,u.height):i.renderbufferStorage(i.RENDERBUFFER,ne,u.width,u.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,A)}else{const q=u.textures;for(let N=0;N<q.length;N++){const ne=q[N],ee=r.convert(ne.format,ne.colorSpace),U=r.convert(ne.type),k=T(ne.internalFormat,ee,U,ne.normalized,ne.colorSpace);he(u)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt(u),k,u.width,u.height):R?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt(u),k,u.width,u.height):i.renderbufferStorage(i.RENDERBUFFER,k,u.width,u.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ft(A,u,R){const q=u.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(u.depthTexture&&u.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const N=n.get(u.depthTexture);N.__renderTarget=u;const ne=q?u.depthTexture.image[0]:u.depthTexture.image;(!N.__webglTexture||ne.width!==u.width||ne.height!==u.height)&&(ne.width=u.width,ne.height=u.height,u.depthTexture.needsUpdate=!0),q?fe(u.depthTexture,0):ce(u.depthTexture,0);const ee=N.__webglTexture,U=rt(u),k=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+R:i.TEXTURE_2D,ae=u.depthTexture.format===ai?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(u.depthTexture.format===li)he(u)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,k,ee,0,U):i.framebufferTexture2D(i.FRAMEBUFFER,ae,k,ee,0);else if(u.depthTexture.format===ai)he(u)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,k,ee,0,U):i.framebufferTexture2D(i.FRAMEBUFFER,ae,k,ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function wt(A){const u=n.get(A),R=A.isWebGLCubeRenderTarget===!0;if(u.__boundDepthTexture!==A.depthTexture){const q=A.depthTexture;if(u.__depthDisposeCallback&&u.__depthDisposeCallback(),q){const N=()=>{delete u.__boundDepthTexture,delete u.__depthDisposeCallback,q.removeEventListener("dispose",N)};q.addEventListener("dispose",N),u.__depthDisposeCallback=N}u.__boundDepthTexture=q}if(A.depthTexture&&!u.__autoAllocateDepthBuffer)if(R)for(let q=0;q<6;q++)ft(u.__webglFramebuffer[q],A,q);else A.texture.mipmaps.length>0?ft(u.__webglFramebuffer[0],A,0):ft(u.__webglFramebuffer,A,0);else if(R){u.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,u.__webglFramebuffer[q]),u.__webglDepthbuffer[q]===void 0)u.__webglDepthbuffer[q]=i.createRenderbuffer(),mt(u.__webglDepthbuffer[q],A,!1);else{const N=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=u.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,N,i.RENDERBUFFER,ne)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,u.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,u.__webglFramebuffer),u.__webglDepthbuffer===void 0)u.__webglDepthbuffer=i.createRenderbuffer(),mt(u.__webglDepthbuffer,A,!1);else{const N=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=u.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,N,i.RENDERBUFFER,ne)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(A,u,R){const q=n.get(A);u!==void 0&&ke(q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),R!==void 0&&wt(A)}function Tt(A){const u=A.texture,R=n.get(A),q=n.get(u);A.addEventListener("dispose",G),O(A);const N=A.textures,ne=A.isWebGLCubeRenderTarget===!0,ee=N.length>1;if(ee||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=u.version,a.memory.textures++),ne){R.__webglFramebuffer=[];for(let U=0;U<6;U++)if(u.mipmaps.length>0){R.__webglFramebuffer[U]=[];for(let k=0;k<u.mipmaps.length;k++)R.__webglFramebuffer[U][k]=i.createFramebuffer()}else R.__webglFramebuffer[U]=i.createFramebuffer()}else{if(u.mipmaps.length>0){R.__webglFramebuffer=[];for(let U=0;U<u.mipmaps.length;U++)R.__webglFramebuffer[U]=i.createFramebuffer()}else R.__webglFramebuffer=i.createFramebuffer();if(ee)for(let U=0,k=N.length;U<k;U++){const ae=n.get(N[U]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&he(A)===!1){R.__webglMultisampledFramebuffer=i.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let U=0;U<N.length;U++){const k=N[U];R.__webglColorRenderbuffer[U]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,R.__webglColorRenderbuffer[U]);const ae=r.convert(k.format,k.colorSpace),b=r.convert(k.type),X=T(k.internalFormat,ae,b,k.normalized,k.colorSpace,A.isXRRenderTarget===!0),$=rt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,$,X,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+U,i.RENDERBUFFER,R.__webglColorRenderbuffer[U])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(R.__webglDepthRenderbuffer=i.createRenderbuffer(),mt(R.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,u);for(let U=0;U<6;U++)if(u.mipmaps.length>0)for(let k=0;k<u.mipmaps.length;k++)ke(R.__webglFramebuffer[U][k],A,u,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+U,k);else ke(R.__webglFramebuffer[U],A,u,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+U,0);C(u)?y(i.TEXTURE_CUBE_MAP):u.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,u.mipmaps.length-1),t.unbindTexture()}else if(ee){for(let U=0,k=N.length;U<k;U++){const ae=N[U],b=n.get(ae);let X=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(X=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(X,b.__webglTexture),Ye(X,ae),ke(R.__webglFramebuffer,A,ae,i.COLOR_ATTACHMENT0+U,X,0),C(ae)&&y(X)}t.unbindTexture()}else{let U=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(U=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(U,q.__webglTexture),Ye(U,u),u.mipmaps.length>0)for(let k=0;k<u.mipmaps.length;k++)ke(R.__webglFramebuffer[k],A,u,i.COLOR_ATTACHMENT0,U,k);else ke(R.__webglFramebuffer,A,u,i.COLOR_ATTACHMENT0,U,0);C(u)?y(U):u.mipmaps.length>0&&i.texParameteri(U,i.TEXTURE_MAX_LEVEL,u.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&wt(A)}function I(A){const u=A.textures;for(let R=0,q=u.length;R<q;R++){const N=u[R];if(C(N)&&N.mipmapsAutoUpdate===!0){const ne=w(A),ee=n.get(N).__webglTexture;t.bindTexture(ne,ee),y(ne),t.unbindTexture()}}}const Et=[];function it(A){if(A.samples>0){if(he(A)===!1){const u=A.textures,R=A.width,q=A.height;let N=i.COLOR_BUFFER_BIT;const ne=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=n.get(A),U=u.length>1;if(U)for(let ae=0;ae<u.length;ae++)t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ee.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ee.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ee.__webglFramebuffer);for(let ae=0;ae<u.length;ae++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(N|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(N|=i.STENCIL_BUFFER_BIT)),U){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ee.__webglColorRenderbuffer[ae]);const b=n.get(u[ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,b,0)}i.blitFramebuffer(0,0,R,q,0,0,R,q,N,i.NEAREST),l===!0&&(Et.length=0,Et.push(i.COLOR_ATTACHMENT0+ae),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Et.push(ne),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Et))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),U)for(let ae=0;ae<u.length;ae++){t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,ee.__webglColorRenderbuffer[ae]);const b=n.get(u[ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,b,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ee.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const u=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[u])}}}function rt(A){return Math.min(s.maxSamples,A.samples)}function he(A){const u=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&u.__useRenderToTexture!==!1}function _t(A){const u=a.render.frame;h.get(A)!==u&&(h.set(A,u),A.update())}function Fe(A,u){const R=A.colorSpace,q=A.format,N=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||R!==Fr&&R!==ri&&(tt.getTransfer(R)===ut?(q!==In||N!==un)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):lt("WebGLTextures: Unsupported texture color space:",R)),u}function Ne(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Me,this.resetTextureUnits=te,this.getTextureUnits=se,this.setTextureUnits=xe,this.setTexture2D=ce,this.setTexture2DArray=Se,this.setTexture3D=Pe,this.setTextureCube=fe,this.rebindTextures=gt,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=he,this.dispose=z}function eg(i,e){function t(n,s=ri){let r;const a=tt.getTransfer(s);if(n===un)return i.UNSIGNED_BYTE;if(n===Oo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Bo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ic)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Pc)return i.BYTE;if(n===Lc)return i.SHORT;if(n===Gs)return i.UNSIGNED_SHORT;if(n===Fo)return i.INT;if(n===Nn)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===tn)return i.HALF_FLOAT;if(n===Nc)return i.ALPHA;if(n===Uc)return i.RGB;if(n===In)return i.RGBA;if(n===li)return i.DEPTH_COMPONENT;if(n===ai)return i.DEPTH_STENCIL;if(n===zo)return i.RED;if(n===Go)return i.RED_INTEGER;if(n===bi)return i.RG;if(n===Ho)return i.RG_INTEGER;if(n===ko)return i.RGBA_INTEGER;if(n===Tr||n===br||n===Ar||n===wr)if(a===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Tr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Tr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ga||n===Ha||n===ka||n===Va)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ga)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ha)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Va)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wa||n===Xa||n===qa||n===Ya||n===Ka||n===Ir||n===$a)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Wa||n===Xa)return a===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===qa)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ya)return r.COMPRESSED_R11_EAC;if(n===Ka)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ir)return r.COMPRESSED_RG11_EAC;if(n===$a)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Za||n===Ja||n===Qa||n===ja||n===eo||n===to||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Za)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ja)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qa)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ja)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===eo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===to)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===no)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===io)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===so)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ro)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ao)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===oo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===lo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===co)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===uo||n===ho||n===fo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===uo)return a===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ho)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===po||n===mo||n===Nr||n===go)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===po)return r.COMPRESSED_RED_RGTC1_EXT;if(n===mo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Nr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===go)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const tg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ng=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ig{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new jc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ft({vertexShader:tg,fragmentShader:ng,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ht(new Ln(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sg extends Ai{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,f=null,m=null,v=null;const S=typeof XRWebGLBinding<"u",g=new ig,d={},M=t.getContextAttributes();let C=null,y=null;const w=[],T=[],_=new be;let E=null,O=null;const L=new cn;L.viewport=new yt;const F=new cn;F.viewport=new yt;const G=[L,F],K=new pf;let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ce=w[Q];return ce===void 0&&(ce=new oa,w[Q]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Q){let ce=w[Q];return ce===void 0&&(ce=new oa,w[Q]=ce),ce.getGripSpace()},this.getHand=function(Q){let ce=w[Q];return ce===void 0&&(ce=new oa,w[Q]=ce),ce.getHandSpace()};function V(Q){const ce=T.indexOf(Q.inputSource);if(ce===-1)return;const Se=w[ce];Se!==void 0&&(Se.update(Q.inputSource,Q.frame,c||a),Se.dispatchEvent({type:Q.type,data:Q.inputSource}))}function H(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",re);for(let Q=0;Q<w.length;Q++){const ce=T[Q];ce!==null&&(T[Q]=null,w[Q].disconnect(ce))}P=null,z=null,g.reset();for(const Q in d)delete d[Q];if(e.setRenderTarget(C),m=null,f=null,p=null,s=null,y=null,Me.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(_.width,_.height,!1),O!==null){const Q=O.camera;Q.fov=O.fov,Q.zoom=O.zoom,Q.updateProjectionMatrix(),O=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p===null&&S&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",H),s.addEventListener("inputsourceschange",re),M.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(_),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Pe=null,fe=null;M.depth&&(fe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=M.stencil?ai:li,Pe=M.stencil?is:Nn);const Ie={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};p=this.getBinding(),f=p.createProjectionLayer(Ie),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new nn(f.textureWidth,f.textureHeight,{format:In,type:un,depthTexture:new as(f.textureWidth,f.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const Se={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Se),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new nn(m.framebufferWidth,m.framebufferHeight,{format:In,type:un,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Me.setContext(s),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function re(Q){for(let ce=0;ce<Q.removed.length;ce++){const Se=Q.removed[ce],Pe=T.indexOf(Se);Pe>=0&&(T[Pe]=null,w[Pe].disconnect(Se))}for(let ce=0;ce<Q.added.length;ce++){const Se=Q.added[ce];let Pe=T.indexOf(Se);if(Pe===-1){for(let Ie=0;Ie<w.length;Ie++)if(Ie>=T.length){T.push(Se),Pe=Ie;break}else if(T[Ie]===null){T[Ie]=Se,Pe=Ie;break}if(Pe===-1)break}const fe=w[Pe];fe&&fe.connect(Se)}}function Z(Q,ce){ce===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ce.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ce=Q.near,Se=Q.far;g.texture!==null&&(g.depthNear>0&&(ce=g.depthNear),g.depthFar>0&&(Se=g.depthFar)),K.near=F.near=L.near=ce,K.far=F.far=L.far=Se,(P!==K.near||z!==K.far)&&(s.updateRenderState({depthNear:K.near,depthFar:K.far}),P=K.near,z=K.far),K.layers.mask=Q.layers.mask|6,L.layers.mask=K.layers.mask&-5,F.layers.mask=K.layers.mask&-3;const Pe=Q.parent,fe=K.cameras;Z(K,Pe);for(let Ie=0;Ie<fe.length;Ie++)Z(fe[Ie],Pe);K.projectionMatrix.copy(L.projectionMatrix),K.projectionMatrixInverse.copy(L.projectionMatrixInverse),O===null&&Q.isPerspectiveCamera&&(O={camera:Q,fov:Q.fov,zoom:Q.zoom}),te(Q,K,Pe)};function te(Q,ce,Se){Se===null?Q.matrix.copy(ce.matrixWorld):(Q.matrix.copy(Se.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ce.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ce.projectionMatrix),Q.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ss*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(K)},this.getCameraTexture=function(Q){return d[Q]};let se=null;function xe(Q,ce){if(h=ce.getViewerPose(c||a),v=ce,h!==null){const Se=h.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let Pe=!1;Se.length!==K.cameras.length&&(K.cameras.length=0,Pe=!0);for(let Le=0;Le<Se.length;Le++){const Ye=Se[Le];let de=null;if(m!==null)de=m.getViewport(Ye);else{const Ke=p.getViewSubImage(f,Ye);de=Ke.viewport,Le===0&&(e.setRenderTargetTextures(y,Ke.colorTexture,Ke.depthStencilTexture),e.setRenderTarget(y))}let ye=G[Le];ye===void 0&&(ye=new cn,ye.layers.enable(Le),ye.viewport=new yt,G[Le]=ye),ye.matrix.fromArray(Ye.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(Ye.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(de.x,de.y,de.width,de.height),Le===0&&(K.matrix.copy(ye.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Pe===!0&&K.cameras.push(ye)}const fe=s.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){p=n.getBinding();const Le=p.getDepthInformation(Se[0]);Le&&Le.isValid&&Le.texture&&g.init(Le,s.renderState)}if(fe&&fe.includes("camera-access")&&S){e.state.unbindTexture(),p=n.getBinding();for(let Le=0;Le<Se.length;Le++){const Ye=Se[Le].camera;if(Ye){let de=d[Ye];de||(de=new jc,d[Ye]=de);const ye=p.getCameraImage(Ye);de.sourceTexture=ye}}}}for(let Se=0;Se<w.length;Se++){const Pe=T[Se],fe=w[Se];Pe!==null&&fe!==void 0&&fe.update(Pe,ce,c||a)}se&&se(Q,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),v=null}const Me=new ru;Me.setAnimationLoop(xe),this.setAnimationLoop=function(Q){se=Q},this.dispose=function(){}}}const rg=new dt,mu=new We;mu.set(-1,0,0,0,1,0,0,0,1);function ag(i,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,eu(i)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function s(g,d,M,C,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(g,d):d.isMeshLambertMaterial?(r(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(g,d),p(g,d)):d.isMeshPhongMaterial?(r(g,d),h(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(g,d),f(g,d),d.isMeshPhysicalMaterial&&m(g,d,y)):d.isMeshMatcapMaterial?(r(g,d),v(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),S(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,M,C):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===$t&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===$t&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const M=e.get(d),C=M.envMap,y=M.envMapRotation;C&&(g.envMap.value=C,g.envMapRotation.value.setFromMatrix4(rg.makeRotationFromEuler(y)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(mu),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,M,C){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*M,g.scale.value=C*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function p(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,M){g.ior.value=d.ior,d.diffuseRoughness>0&&(g.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=d.diffuseRoughnessMap,t(d.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===$t&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.retroreflectivity>0&&(g.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,d){d.matcap&&(g.matcap.value=d.matcap)}function S(g,d){const M=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function og(i,e,t,n){let s={},r={};function a(M,C){const y=C.program;n.uniformBlockBinding(M,y,s[M.id])}function o(M,C){let y=s[M.id];y===void 0&&(v(M),y=l(M),s[M.id]=y,M.addEventListener("dispose",g));const w=C.program;n.updateUBOMapping(M,w);const T=e.render.frame;r[M.id]!==T&&(c(M),r[M.id]=T)}function l(M){const C=i.createBuffer(),y=M.__size,w=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,y,w),i.bindBuffer(i.UNIFORM_BUFFER,null),C}function c(M){const C=s[M.id],y=M.uniforms,w=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let T=0,_=y.length;T<_;T++){const E=y[T];if(Array.isArray(E))for(let O=0,L=E.length;O<L;O++)h(E[O],T,O,w);else h(E,T,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,C,y,w){if(f(M,C,y,w)===!0){const T=M.__offset,_=M.value;if(Array.isArray(_)){let E=0;for(let O=0;O<_.length;O++){const L=_[O],F=S(L,!0);p(L,M.__data,E),E+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else p(_,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,M.__data)}}function p(M,C,y){typeof M=="number"||typeof M=="boolean"?C[y]=M:M.isMatrix3?(C[y]=M.elements[0],C[y+1]=M.elements[1],C[y+2]=M.elements[2],C[y+3]=0,C[y+4]=M.elements[3],C[y+5]=M.elements[4],C[y+6]=M.elements[5],C[y+7]=0,C[y+8]=M.elements[6],C[y+9]=M.elements[7],C[y+10]=M.elements[8],C[y+11]=0):ArrayBuffer.isView(M)?C.set(M.subarray(0,C.length-y),y):M.toArray(C,y)}function f(M,C,y,w){const T=M.value,_=C+"_"+y;if(Array.isArray(T)){w[_]===void 0&&(w[_]=[]);const E=w[_];let O=!1;for(let L=0;L<T.length;L++)m(T[L],E,L)===!0&&(O=!0);return O}return m(T,w,_)}function m(M,C,y){if(C[y]===void 0)return typeof M=="number"||typeof M=="boolean"?C[y]=M:ArrayBuffer.isView(M)?C[y]=M.slice():C[y]=M.clone(),!0;{const w=C[y];if(typeof M=="number"||typeof M=="boolean"){if(w!==M)return C[y]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(w.equals(M)===!1)return w.copy(M),!0}}return!1}function v(M){const C=M.uniforms;let y=0;const w=16;for(let _=0,E=C.length;_<E;_++){const O=Array.isArray(C[_])?C[_]:[C[_]];for(let L=0,F=O.length;L<F;L++){const G=O[L],K=Array.isArray(G.value)?G.value:[G.value],P=Array.isArray(C[_])||Array.isArray(G.value);let z=y;for(let H=0,re=K.length;H<re;H++){const Z=K[H],te=S(Z,P),se=y%w,xe=se%te.boundary,Me=se+xe;y+=xe,Me!==0&&w-Me<te.storage&&(y+=w-Me),H===0&&(z=y),y+=te.storage}const V=G.type==="int"?Int32Array:G.type==="uint"?Uint32Array:Float32Array;G.__data=new V((y-z)/Float32Array.BYTES_PER_ELEMENT),G.__offset=z}}const T=y%w;return T>0&&(y+=w-T),M.__size=y,M.__cache={},this}function S(M,C){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=16,y.storage=48):M.isMatrix4?(y.boundary=16,y.storage=64):M.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(y.boundary=16,y.storage=M.byteLength):He("WebGLRenderer: Unsupported uniform value type.",M),C===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function g(M){const C=M.target;C.removeEventListener("dispose",g),i.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function d(){for(const M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:d}}const lg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let An=null;function cg(){return An===null&&(An=new $o(lg,16,16,bi,tn),An.name="DFG_LUT",An.minFilter=en,An.magFilter=en,An.wrapS=Dn,An.wrapT=Dn,An.generateMipmaps=!1,An.needsUpdate=!0),An}class ug{constructor(e={}){const{canvas:t=oh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:m=un}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;const S=m,g=new Set([ko,Ho,Go]),d=new Set([un,Nn,Gs,is,Oo,Bo]),M=new Uint32Array(4),C=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]};let w=null,T=null;const _=[],E=[];let O=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let F=!1,G=null,K=null,P=null,z=null;this._outputColorSpace=zt;let V=0,H=0,re=null,Z=-1,te=null;const se=new yt,xe=new yt;let Me=null;const Q=new Be(0);let ce=0,Se=t.width,Pe=t.height,fe=1,Ie=null,Je=null;const Le=new yt(0,0,Se,Pe),Ye=new yt(0,0,Se,Pe);let de=!1;const ye=new Vs,Ke=new Zo;let qe=!1,nt=!1;const ke=new dt,mt=new B,ft=new yt,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function Tt(){return re===null?fe:1}let I=n;function Et(x,D){return t.getContext(x,D)}let it,rt,he,_t,Fe,Ne,A,u,R,q,N,ne,ee,U,k,ae,b,X,$,ie,oe,le,_e;try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ro}`),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",Ve,!1),t.addEventListener("webglcontextcreationerror",ge,!1),I===null){const D="webgl2";if(I=Et(D,x),I===null)throw Et(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Oe()}catch(x){throw t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),lt("WebGLRenderer: "+x.message),x}function Oe(){it=new dm(I),it.init(),oe=new eg(I,it),rt=new nm(I,it,e,oe),he=new Q0(I,it),rt.reversedDepthBuffer&&f&&he.buffers.depth.setReversed(!0),K=I.createFramebuffer(),P=I.createFramebuffer(),z=I.createFramebuffer(),_t=new gm(I),Fe=new B0,Ne=new j0(I,it,he,Fe,rt,oe,_t),A=new fm(L),u=new vf(I),le=new em(I,u),R=new pm(I,u,_t,le),q=new vm(I,R,u,le,_t),X=new _m(I,rt,Ne),k=new im(Fe),N=new O0(L,A,it,rt,le,k),ne=new ag(L,Fe),ee=new G0,U=new q0(it),b=new jp(L,A,he,q,v,l),ae=new J0(L,q,rt),_e=new og(I,_t,rt,he),$=new tm(I,it,_t),ie=new mm(I,it,_t),_t.programs=N.programs,L.capabilities=rt,L.extensions=it,L.properties=Fe,L.renderLists=ee,L.shadowMap=ae,L.state=he,L.info=_t}S!==un&&(O=new Mm(S,t.width,t.height,o,s,r));const ue=new sg(L,I);this.xr=ue,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const x=it.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=it.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(x){x!==void 0&&(fe=x,this.setSize(Se,Pe,!1))},this.getSize=function(x){return x.set(Se,Pe)},this.setSize=function(x,D,J=!0){if(ue.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=x,Pe=D,t.width=Math.floor(x*fe),t.height=Math.floor(D*fe),J===!0&&(t.style.width=x+"px",t.style.height=D+"px"),O!==null&&O.setSize(t.width,t.height),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(Se*fe,Pe*fe).floor()},this.setDrawingBufferSize=function(x,D,J){Se=x,Pe=D,fe=J,t.width=Math.floor(x*J),t.height=Math.floor(D*J),this.setViewport(0,0,x,D)},this.setEffects=function(x){if(S===un){lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let D=0;D<x.length;D++)if(x[D].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(se)},this.getViewport=function(x){return x.copy(Le)},this.setViewport=function(x,D,J,W){x.isVector4?Le.set(x.x,x.y,x.z,x.w):Le.set(x,D,J,W),he.viewport(se.copy(Le).multiplyScalar(Tt()).round())},this.getScissor=function(x){return x.copy(Ye)},this.setScissor=function(x,D,J,W){x.isVector4?Ye.set(x.x,x.y,x.z,x.w):Ye.set(x,D,J,W),he.scissor(xe.copy(Ye).multiplyScalar(Tt()).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(x){he.setScissorTest(de=x)},this.setOpaqueSort=function(x){Ie=x},this.setTransparentSort=function(x){Je=x},this.getClearColor=function(x){return x.copy(b.getClearColor())},this.setClearColor=function(){b.setClearColor(...arguments)},this.getClearAlpha=function(){return b.getClearAlpha()},this.setClearAlpha=function(){b.setClearAlpha(...arguments)},this.clear=function(x=!0,D=!0,J=!0){let W=0;if(x){let Y=!1;if(re!==null){const me=re.texture.format;Y=g.has(me)}if(Y){const me=re.texture.type,Ae=d.has(me),pe=b.getClearColor(),Ee=b.getClearAlpha(),De=pe.r,Xe=pe.g,je=pe.b;Ae?(M[0]=De,M[1]=Xe,M[2]=je,M[3]=Ee,I.clearBufferuiv(I.COLOR,0,M)):(C[0]=De,C[1]=Xe,C[2]=je,C[3]=Ee,I.clearBufferiv(I.COLOR,0,C))}else W|=I.COLOR_BUFFER_BIT}D&&(W|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),G=x},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),b.dispose(),ee.dispose(),U.dispose(),Ne.dispose(),Fe.dispose(),A.dispose(),q.dispose(),R.dispose(),le.dispose(),_e.dispose(),N.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",vt),ue.removeEventListener("sessionend",at),st.stop()};function Ue(x){x.preventDefault(),Br("WebGLRenderer: Context Lost."),F=!0}function Ve(){Br("WebGLRenderer: Context Restored."),F=!1;const x=_t.autoReset,D=ae.enabled,J=ae.autoUpdate,W=ae.needsUpdate,Y=ae.type;Oe(),_t.autoReset=x,ae.enabled=D,ae.autoUpdate=J,ae.needsUpdate=W,ae.type=Y}function ge(x){lt("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function j(x){const D=x.target;D.removeEventListener("dispose",j),Te(D)}function Te(x){Ce(x),Fe.remove(x)}function Ce(x){const D=Fe.get(x).programs;D!==void 0&&(D.forEach(function(J){N.releaseProgram(J)}),x.isShaderMaterial&&N.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,J,W,Y,me){D===null&&(D=wt);const Ae=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,pe=Ci(x,D,J,W,Y);he.setMaterial(W,Ae);let Ee=J.index,De=1;if(W.wireframe===!0){if(Ee=R.getWireframeAttribute(J),Ee===void 0)return;De=2}const Xe=J.drawRange,je=J.attributes.position;let we=Xe.start*De,et=(Xe.start+Xe.count)*De;me!==null&&(we=Math.max(we,me.start*De),et=Math.min(et,(me.start+me.count)*De)),Ee!==null?(we=Math.max(we,0),et=Math.min(et,Ee.count)):je!=null&&(we=Math.max(we,0),et=Math.min(et,je.count));const Ct=et-we;if(Ct<0||Ct===1/0)return;le.setup(Y,W,pe,J,Ee);let St,xt=$;if(Ee!==null&&(St=u.get(Ee),xt=ie,xt.setIndex(St)),Y.isMesh)W.wireframe===!0?(he.setLineWidth(W.wireframeLinewidth*Tt()),xt.setMode(I.LINES)):xt.setMode(I.TRIANGLES);else if(Y.isLine){let Vt=W.linewidth;Vt===void 0&&(Vt=1),he.setLineWidth(Vt*Tt()),Y.isLineSegments?xt.setMode(I.LINES):Y.isLineLoop?xt.setMode(I.LINE_LOOP):xt.setMode(I.LINE_STRIP)}else Y.isPoints?xt.setMode(I.POINTS):Y.isSprite&&xt.setMode(I.TRIANGLES);if(Y.isBatchedMesh)if(it.get("WEBGL_multi_draw"))xt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Vt=Y._multiDrawStarts,Re=Y._multiDrawCounts,Jt=Y._multiDrawCount,ct=Ee?u.get(Ee).bytesPerElement:1,fi=Fe.get(W).currentProgram.getUniforms();for(let Wt=0;Wt<Jt;Wt++)fi.setValue(I,"_gl_DrawID",Wt),xt.render(Vt[Wt]/ct,Re[Wt])}else if(Y.isInstancedMesh)xt.renderInstances(we,Ct,Y.count);else if(J.isInstancedBufferGeometry){const Vt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Re=Math.min(J.instanceCount,Vt);xt.renderInstances(we,Ct,Re)}else xt.render(we,Ct)};function Qe(x,D,J,W){G!==null&&x.isNodeMaterial&&G.setObject(W,x),qe===!0&&k.setState(x,J,!1),x.transparent===!0&&x.side===Pn&&x.forceSinglePass===!1?(x.side=$t,x.needsUpdate=!0,Rt(x,D,W),x.side=Ei,x.needsUpdate=!0,Rt(x,D,W),x.side=Pn):Rt(x,D,W)}this.compile=function(x,D,J=null){J===null&&(J=x),G!==null&&G.renderStart(x,D,J),T=U.get(J),T.init(D),E.push(T),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(D.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),x!==J&&x.traverseVisible(function(Y){Y.isLight&&Y.layers.test(D.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),T.setupLights(),G!==null&&G.updateLights(T.state.lightsArray),nt=this.localClippingEnabled,qe=k.init(this.clippingPlanes,nt),qe===!0&&k.setGlobalState(this.clippingPlanes,D),G!==null&&ae.render(T.state.shadowsArray,J,D);const W=new Set;return x.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const me=Y.material;if(me)if(Array.isArray(me))for(let Ae=0;Ae<me.length;Ae++){const pe=me[Ae];Qe(pe,J,D,Y),W.add(pe)}else Qe(me,J,D,Y),W.add(me)}),T=E.pop(),G!==null&&G.renderEnd(),W},this.compileAsync=function(x,D,J=null){const W=this.compile(x,D,J);return new Promise(Y=>{function me(){if(W.forEach(function(Ae){const Ee=Fe.get(Ae).currentProgram;(Ee===void 0||Ee.isReady())&&W.delete(Ae)}),W.size===0){Y(x);return}setTimeout(me,10)}it.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let ze=null;function Mt(x){ze&&ze(x)}function vt(){st.stop()}function at(){st.start()}const st=new ru;st.setAnimationLoop(Mt),typeof self<"u"&&st.setContext(self),this.setAnimationLoop=function(x){ze=x,ue.setAnimationLoop(x),x===null?st.stop():st.start()},ue.addEventListener("sessionstart",vt),ue.addEventListener("sessionend",at),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;G!==null&&G.renderStart(x,D);const J=ue.enabled===!0&&ue.isPresenting===!0,W=O!==null&&(re===null||J)&&O.begin(L,re);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(D),D=ue.getCamera()),x.isScene===!0&&x.onBeforeRender(L,x,D,re),T=U.get(x,E.length),T.init(D),T.state.textureUnits=Ne.getTextureUnits(),E.push(T),ke.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?Ke.setFromArrayCamera(D):ye.setFromProjectionMatrix(ke,En,D.reversedDepth),nt=this.localClippingEnabled,qe=k.init(this.clippingPlanes,nt),w=ee.get(x,_.length),w.init(),_.push(w),this.info.render.frame++,ue.enabled===!0&&ue.isPresenting===!0){const Ae=L.xr.getDepthSensingMesh();Ae!==null&&Zt(Ae,D,-1/0,L.sortObjects)}Zt(x,D,0,L.sortObjects),w.finish(),G!==null&&G.updateLights(T.state.lightsArray),L.sortObjects===!0&&w.sort(Ie,Je),gt=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,gt&&b.addToRenderList(w,x),this.info.autoReset===!0&&this.info.reset(),qe===!0&&k.beginShadows();const Y=T.state.shadowsArray;if(ae.render(Y,x,D),qe===!0&&k.endShadows(),(W&&O.hasRenderPass())===!1){const Ae=w.opaque,pe=w.transmissive;if(T.setupLights(),D.isArrayCamera){const Ee=D.cameras;if(pe.length>0)for(let De=0,Xe=Ee.length;De<Xe;De++){const je=Ee[De];Fn(Ae,pe,x,je)}gt&&b.render(x);for(let De=0,Xe=Ee.length;De<Xe;De++){const je=Ee[De];rn(w,x,je,je.viewport)}}else pe.length>0&&Fn(Ae,pe,x,D),gt&&b.render(x),rn(w,x,D)}re!==null&&H===0&&(Ne.updateMultisampleRenderTarget(re),Ne.updateRenderTargetMipmap(re)),W&&O.end(L),x.isScene===!0&&x.onAfterRender(L,x,D),le.resetDefaultState(),Z=-1,te=null,E.pop(),E.length>0?(T=E[E.length-1],Ne.setTextureUnits(T.state.textureUnits),qe===!0&&k.setGlobalState(L.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?w=_[_.length-1]:w=null,G!==null&&G.renderEnd()};function Zt(x,D,J,W){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)J=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLight)T.pushLight(x),x.castShadow&&T.pushShadow(x);else if(x.isSprite){const Ae=D.isArrayCamera?Ke:ye;if(!x.frustumCulled||x.intersectsFrustum(Ae)){W&&ft.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ke);const pe=q.update(x),Ee=x.material;Ee.visible&&w.push(x,pe,Ee,J,ft.z,null,D)}}else if(x.isMesh||x.isLine||x.isPoints){const Ae=D.isArrayCamera?Ke:ye;if(!x.frustumCulled||x.intersectsFrustum(Ae)){const pe=q.update(x),Ee=x.material;if(W&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),ft.copy(x.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),ft.copy(pe.boundingSphere.center)),ft.applyMatrix4(x.matrixWorld).applyMatrix4(ke)),Array.isArray(Ee)){const De=pe.groups;for(let Xe=0,je=De.length;Xe<je;Xe++){const we=De[Xe],et=Ee[we.materialIndex];et&&et.visible&&w.push(x,pe,et,J,ft.z,we,D)}}else Ee.visible&&w.push(x,pe,Ee,J,ft.z,null,D)}}}const me=x.children;for(let Ae=0,pe=me.length;Ae<pe;Ae++)Zt(me[Ae],D,J,W)}function rn(x,D,J,W){const{opaque:Y,transmissive:me,transparent:Ae}=x;T.setupLightsView(J),qe===!0&&k.setGlobalState(L.clippingPlanes,J),W&&he.viewport(se.copy(W)),Y.length>0&&On(Y,D,J),me.length>0&&On(me,D,J),Ae.length>0&&On(Ae,D,J),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Fn(x,D,J,W){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[W.id]===void 0){const we=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[W.id]=new nn(1,1,{generateMipmaps:!0,type:we?tn:un,minFilter:qn,samples:Math.max(4,rt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:tt.workingColorSpace})}const me=T.state.transmissionRenderTarget[W.id],Ae=W.viewport||se;me.setSize(Ae.z*L.transmissionResolutionScale,Ae.w*L.transmissionResolutionScale);const pe=L.getRenderTarget(),Ee=L.getActiveCubeFace(),De=L.getActiveMipmapLevel();L.setRenderTarget(me),L.getClearColor(Q),ce=L.getClearAlpha(),ce<1&&L.setClearColor(16777215,.5),L.clear(),gt&&b.render(J);const Xe=L.toneMapping;L.toneMapping=Kn;const je=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),T.setupLightsView(W),qe===!0&&k.setGlobalState(L.clippingPlanes,W),On(x,J,W),Ne.updateMultisampleRenderTarget(me),Ne.updateRenderTargetMipmap(me),it.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let et=0,Ct=D.length;et<Ct;et++){const St=D[et],{object:xt,geometry:Vt,material:Re,group:Jt}=St;if(Re.side===Pn&&xt.layers.test(W.layers)){const ct=Re.side;Re.side=$t,Re.needsUpdate=!0,Ge(xt,J,W,Vt,Re,Jt),Re.side=ct,Re.needsUpdate=!0,we=!0}}we===!0&&(Ne.updateMultisampleRenderTarget(me),Ne.updateRenderTargetMipmap(me))}L.setRenderTarget(pe,Ee,De),L.setClearColor(Q,ce),je!==void 0&&(W.viewport=je),L.toneMapping=Xe}function On(x,D,J){const W=D.isScene===!0?D.overrideMaterial:null;for(let Y=0,me=x.length;Y<me;Y++){const Ae=x[Y],{object:pe,geometry:Ee,group:De}=Ae;let Xe=Ae.material;Xe.allowOverride===!0&&W!==null&&(Xe=W),pe.layers.test(J.layers)&&Ge(pe,D,J,Ee,Xe,De)}}function Ge(x,D,J,W,Y,me){G!==null&&Y.isNodeMaterial&&G.setObject(x,Y),x.onBeforeRender(L,D,J,W,Y,me),x.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),Y.onBeforeRender(L,D,J,W,x,me),Y.transparent===!0&&Y.side===Pn&&Y.forceSinglePass===!1?(Y.side=$t,Y.needsUpdate=!0,L.renderBufferDirect(J,D,W,Y,x,me),Y.side=Ei,Y.needsUpdate=!0,L.renderBufferDirect(J,D,W,Y,x,me),Y.side=Pn):L.renderBufferDirect(J,D,W,Y,x,me),x.onAfterRender(L,D,J,W,Y,me)}function Ot(x){let D=0;for(const J of x)J.texture!==null&&D++;return D}function Rt(x,D,J){D.isScene!==!0&&(D=wt);const W=Fe.get(x),Y=T.state.lights,me=T.state.shadowsArray,Ae=Y.state.version,pe=N.getParameters(x,Y.state,me,D,J,T.state.lightProbeGridArray),Ee=N.getProgramCacheKey(pe);let De=W.programs;W.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,W.fog=D.fog;const Xe=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;W.envMap=A.get(x.envMap||W.environment,Xe),W.envMapRotation=W.environment!==null&&x.envMap===null?D.environmentRotation:x.envMapRotation,De===void 0&&(x.addEventListener("dispose",j),De=new Map,W.programs=De,W.programVariants=new Map);let je=De.get(Ee);if(je!==void 0){if(W.currentProgram===je&&W.lightsStateVersion===Ae)return Bn(x,pe),je}else pe.uniforms=N.getUniforms(x),G!==null&&x.isNodeMaterial&&G.build(x,J,pe),x.onBeforeCompile(pe,L),je=N.acquireProgram(pe,Ee),De.set(Ee,je),W.uniforms=pe.uniforms;const we=W.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(we.clippingPlanes=k.uniform),Bn(x,pe),W.needsLights=wu(x),W.lightsStateVersion=Ae,W.needsLights&&(we.ambientLightColor.value=Y.state.ambient,we.lightProbe.value=Y.state.probe,we.sunLights.value=Y.state.sun,we.sunLightShadows.value=Y.state.sunShadow,we.directionalLights.value=Y.state.directional,we.directionalLightShadows.value=Y.state.directionalShadow,we.spotLights.value=Y.state.spot,we.spotLightShadows.value=Y.state.spotShadow,we.rectAreaLights.value=Y.state.rectArea,we.ltc_1.value=Y.state.rectAreaLTC1,we.ltc_2.value=Y.state.rectAreaLTC2,we.pointLights.value=Y.state.point,we.pointLightShadows.value=Y.state.pointShadow,we.hemisphereLights.value=Y.state.hemi,we.sunShadowMatrix.value=Y.state.sunShadowMatrix,we.sunShadowCascade.value=Y.state.sunShadowCascade,we.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,we.spotLightMatrix.value=Y.state.spotLightMatrix,we.spotLightMap.value=Y.state.spotLightMap,we.pointShadowMatrix.value=Y.state.pointShadowMatrix),W.numLightProbeGrids=Ot(T.state.lightProbeGridArray),W.currentProgram=je,W.uniformsList=null,je}function Qn(x,D,J,W,Y){const me=Fe.get(x),Ae=me.currentProgram.id+","+W+","+Y;let pe=me.programVariants.get(Ae);return pe===void 0?(pe=Rt(x,D,J),me.programVariants.set(Ae,pe)):(me.currentProgram=pe,me.uniformsList=null,me.outputColorSpace=W,me.toneMapping=Y),pe}function dn(x){if(x.uniformsList===null){const D=x.currentProgram.getUniforms();x.uniformsList=Rr.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function Bn(x,D){const J=Fe.get(x);J.outputColorSpace=D.outputColorSpace,J.batching=D.batching,J.batchingColor=D.batchingColor,J.instancing=D.instancing,J.instancingColor=D.instancingColor,J.instancingMorph=D.instancingMorph,J.skinning=D.skinning,J.morphTargets=D.morphTargets,J.morphNormals=D.morphNormals,J.morphColors=D.morphColors,J.morphTargetsCount=D.morphTargetsCount,J.numClippingPlanes=D.numClippingPlanes,J.numIntersection=D.numClipIntersection,J.vertexAlphas=D.vertexAlphas,J.vertexTangents=D.vertexTangents,J.toneMapping=D.toneMapping}function Ci(x,D,J,W,Y){D.isScene!==!0&&(D=wt),Ne.resetTextureUnits();const me=D.fog,Ae=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?D.environment:null,pe=re===null?L.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:tt.workingColorSpace,Ee=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,De=A.get(W.envMap||Ae,Ee),Xe=W.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,je=!!J.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),we=!!J.morphAttributes.position,et=!!J.morphAttributes.normal,Ct=!!J.morphAttributes.color;let St=Kn;W.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(St=L.toneMapping);const xt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Vt=xt!==void 0?xt.length:0,Re=Fe.get(W),Jt=T.state.lights;if(qe===!0&&(nt===!0||x!==te)){const bt=x===te&&W.id===Z;k.setState(W,x,bt)}let ct=!1,fi=!1;W.version===Re.__version?Re.needsLights&&Re.lightsStateVersion!==Jt.state.version||Y.isBatchedMesh&&Re.batching===!1||!Y.isBatchedMesh&&Re.batching===!0||Y.isBatchedMesh&&Re.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Re.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Re.instancing===!1||!Y.isInstancedMesh&&Re.instancing===!0||Y.isSkinnedMesh&&Re.skinning===!1||!Y.isSkinnedMesh&&Re.skinning===!0||Y.isInstancedMesh&&Re.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Re.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Re.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Re.instancingMorph===!1&&Y.morphTexture!==null||Re.envMap!==De||W.fog===!0&&Re.fog!==me||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==k.numPlanes||Re.numIntersection!==k.numIntersection)||Re.vertexAlphas!==Xe||Re.vertexTangents!==je||Re.morphTargets!==we||Re.morphNormals!==et||Re.morphColors!==Ct||Re.morphTargetsCount!==Vt||Re.numLightProbeGrids!==Ot(T.state.lightProbeGridArray)?ct=!0:(Re.outputColorSpace!==pe||Re.toneMapping!==St)&&(fi=!0):(ct=!0,Re.__version=W.version);let Wt=Re.currentProgram;(ct===!0||fi===!0)&&(Wt=fi===!0?Qn(W,D,Y,pe,St):Rt(W,D,Y),G&&W.isNodeMaterial&&G.onUpdateProgram(W,Wt,Re));let Ks=!1,jn=!1,di=!1;const ot=Wt.getUniforms(),Bt=Re.uniforms;if(he.useProgram(Wt.program)&&(Ks=!0,jn=!0,di=!0),W.id!==Z&&(Z=W.id,jn=!0),Ks||te!==x){he.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),ot.setValue(I,"projectionMatrix",x.projectionMatrix),ot.setValue(I,"viewMatrix",x.matrixWorldInverse);const It=ot.map.cameraPosition;It!==void 0&&It.setValue(I,mt.setFromMatrixPosition(x.matrixWorld)),rt.logarithmicDepthBuffer&&ot.setValue(I,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ot.setValue(I,"isOrthographic",x.isOrthographicCamera===!0),te!==x&&(te=x,jn=!0,di=!0)}if(Re.needsLights&&(Jt.state.sunShadowMap.length>0&&ot.setValue(I,"sunShadowMap",Jt.state.sunShadowMap,Ne),Jt.state.directionalShadowMap.length>0&&ot.setValue(I,"directionalShadowMap",Jt.state.directionalShadowMap,Ne),Jt.state.spotShadowMap.length>0&&ot.setValue(I,"spotShadowMap",Jt.state.spotShadowMap,Ne),Jt.state.pointShadowMap.length>0&&ot.setValue(I,"pointShadowMap",Jt.state.pointShadowMap,Ne)),Y.isSkinnedMesh){ot.setOptional(I,Y,"bindMatrix"),ot.setOptional(I,Y,"bindMatrixInverse");const bt=Y.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),ot.setValue(I,"boneTexture",bt.boneTexture,Ne))}Y.isBatchedMesh&&(ot.setOptional(I,Y,"batchingTexture"),ot.setValue(I,"batchingTexture",Y._matricesTexture,Ne),ot.setOptional(I,Y,"batchingIdTexture"),ot.setValue(I,"batchingIdTexture",Y._indirectTexture,Ne),ot.setOptional(I,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ot.setValue(I,"batchingColorTexture",Y._colorsTexture,Ne));const _n=J.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&X.update(Y,J,Wt),(jn||Re.receiveShadow!==Y.receiveShadow)&&(Re.receiveShadow=Y.receiveShadow,ot.setValue(I,"receiveShadow",Y.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&D.environment!==null&&(Bt.envMapIntensity.value=D.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=cg()),jn){if(ot.setValue(I,"toneMappingExposure",L.toneMappingExposure),Re.needsLights&&Au(Bt,di),me&&W.fog===!0&&ne.refreshFogUniforms(Bt,me),ne.refreshMaterialUniforms(Bt,W,fe,Pe,T.state.transmissionRenderTarget[x.id]),Re.needsLights&&Re.numLightProbeGrids>0){const bt=y;let It=0;for(const zn of T.state.lightProbeGridArray)zn.texture!==null&&(bt.textures[It]=zn.texture,bt.min[It]=zn.boundingBox.min,bt.max[It]=zn.boundingBox.max,bt.resolution[It]=zn.resolution,It++);for(const zn in bt)bt[zn].length=It;Bt.probesSH.value=bt.textures,Bt.probesMin.value=bt.min,Bt.probesMax.value=bt.max,Bt.probesResolution.value=bt.resolution}Rr.upload(I,dn(Re),Bt,Ne)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Rr.upload(I,dn(Re),Bt,Ne),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ot.setValue(I,"center",Y.center),ot.setValue(I,"modelViewMatrix",Y.modelViewMatrix),ot.setValue(I,"normalMatrix",Y.normalMatrix),ot.setValue(I,"modelMatrix",Y.matrixWorld),W.uniformsGroups!==void 0){const bt=W.uniformsGroups;for(let It=0,zn=bt.length;It<zn;It++){const dl=bt[It];_e.update(dl,Wt),_e.bind(dl,Wt)}}return Wt}function Au(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.sunLights.needsUpdate=D,x.sunLightShadows.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function wu(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(x,D,J){const W=Fe.get(x);W.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Fe.get(x.texture).__webglTexture=D,Fe.get(x.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:J,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,D){const J=Fe.get(x);J.__webglFramebuffer=D,J.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(x,D=0,J=0){re=x,V=D,H=J;let W=null,Y=!1,me=!1;if(x){const pe=Fe.get(x);if(pe.__useDefaultFramebuffer!==void 0){he.bindFramebuffer(I.FRAMEBUFFER,pe.__webglFramebuffer),se.copy(x.viewport),xe.copy(x.scissor),Me=x.scissorTest,he.viewport(se),he.scissor(xe),he.setScissorTest(Me),Z=-1;return}else if(pe.__webglFramebuffer===void 0)Ne.setupRenderTarget(x);else if(pe.__hasExternalTextures)Ne.rebindTextures(x,Fe.get(x.texture).__webglTexture,Fe.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Xe=x.depthTexture;if(pe.__boundDepthTexture!==Xe){if(Xe!==null&&Fe.has(Xe)&&(x.width!==Xe.image.width||x.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ne.setupDepthRenderbuffer(x)}}const Ee=x.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(me=!0);const De=Fe.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(De[D])?W=De[D][J]:W=De[D],Y=!0):x.samples>0&&Ne.useMultisampledRTT(x)===!1?W=Fe.get(x).__webglMultisampledFramebuffer:Array.isArray(De)?W=De[J]:W=De,se.copy(x.viewport),xe.copy(x.scissor),Me=x.scissorTest}else se.copy(Le).multiplyScalar(fe).floor(),xe.copy(Ye).multiplyScalar(fe).floor(),Me=de;if(J!==0&&(W=K),he.bindFramebuffer(I.FRAMEBUFFER,W)&&he.drawBuffers(x,W),he.viewport(se),he.scissor(xe),he.setScissorTest(Me),Y){const pe=Fe.get(x.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,pe.__webglTexture,J)}else if(me){const pe=D;for(let Ee=0;Ee<x.textures.length;Ee++){const De=Fe.get(x.textures[Ee]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ee,De.__webglTexture,J,pe)}}else if(x!==null&&J!==0){const pe=Fe.get(x.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,pe.__webglTexture,J)}Z=-1};function fl(x){const D=Fe.get(x);return(D.__readFormat!==x.format||D.__readType!==x.type)&&(D.__readFormat=x.format,D.__readType=x.type,D.__formatReadable=rt.textureFormatReadable(x.format),D.__typeReadable=rt.textureTypeReadable(x.type)),D}this.readRenderTargetPixels=function(x,D,J,W,Y,me,Ae,pe=0){if(!(x&&x.isWebGLRenderTarget)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Fe.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ee=Ee[Ae],Array.isArray(Ee)&&(Ee=Ee[0])),Ee){he.bindFramebuffer(I.FRAMEBUFFER,Ee);try{const De=x.textures[pe],Xe=De.format,je=De.type;x.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+pe);const we=fl(De);if(we.__formatReadable===!1){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(we.__typeReadable===!1){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-W&&J>=0&&J<=x.height-Y&&I.readPixels(D,J,W,Y,oe.convert(Xe),oe.convert(je),me)}finally{const De=re!==null?Fe.get(re).__webglFramebuffer:null;he.bindFramebuffer(I.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(x,D,J,W,Y,me,Ae,pe=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=Fe.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ee=Ee[Ae],Array.isArray(Ee)&&(Ee=Ee[0])),Ee)if(D>=0&&D<=x.width-W&&J>=0&&J<=x.height-Y){he.bindFramebuffer(I.FRAMEBUFFER,Ee);const De=x.textures[pe],Xe=De.format,je=De.type;x.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+pe);const we=fl(De);if(we.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(we.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,et),I.bufferData(I.PIXEL_PACK_BUFFER,me.byteLength,I.STREAM_READ),I.readPixels(D,J,W,Y,oe.convert(Xe),oe.convert(je),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);const Ct=re!==null?Fe.get(re).__webglFramebuffer:null;he.bindFramebuffer(I.FRAMEBUFFER,Ct);const St=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await lh(I,St,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,et),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,me),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(et),I.deleteSync(St),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,D=null,J=0){const W=Math.pow(2,-J),Y=Math.floor(x.image.width*W),me=Math.floor(x.image.height*W),Ae=D!==null?D.x:0,pe=D!==null?D.y:0;Ne.setTexture2D(x,0),I.copyTexSubImage2D(I.TEXTURE_2D,J,0,0,Ae,pe,Y,me),he.unbindTexture()},this.copyTextureToTexture=function(x,D,J=null,W=null,Y=0,me=0){let Ae,pe,Ee,De,Xe,je,we,et,Ct;const St=x.isCompressedTexture?x.mipmaps[me]:x.image;if(J!==null)Ae=J.max.x-J.min.x,pe=J.max.y-J.min.y,Ee=J.isBox3?J.max.z-J.min.z:1,De=J.min.x,Xe=J.min.y,je=J.isBox3?J.min.z:0;else{const ot=Math.pow(2,-Y);Ae=Math.floor(St.width*ot),pe=Math.floor(St.height*ot),x.isDataArrayTexture?Ee=St.depth:x.isData3DTexture?Ee=Math.floor(St.depth*ot):Ee=1,De=0,Xe=0,je=0}W!==null?(we=W.x,et=W.y,Ct=W.z):(we=0,et=0,Ct=0);const xt=oe.convert(D.format),Vt=oe.convert(D.type);let Re;D.isData3DTexture?(Ne.setTexture3D(D,0),Re=I.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Ne.setTexture2DArray(D,0),Re=I.TEXTURE_2D_ARRAY):(Ne.setTexture2D(D,0),Re=I.TEXTURE_2D),he.activeTexture(I.TEXTURE0),he.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,D.flipY),he.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),he.pixelStorei(I.UNPACK_ALIGNMENT,D.unpackAlignment);const Jt=he.getParameter(I.UNPACK_ROW_LENGTH),ct=he.getParameter(I.UNPACK_IMAGE_HEIGHT),fi=he.getParameter(I.UNPACK_SKIP_PIXELS),Wt=he.getParameter(I.UNPACK_SKIP_ROWS),Ks=he.getParameter(I.UNPACK_SKIP_IMAGES);he.pixelStorei(I.UNPACK_ROW_LENGTH,St.width),he.pixelStorei(I.UNPACK_IMAGE_HEIGHT,St.height),he.pixelStorei(I.UNPACK_SKIP_PIXELS,De),he.pixelStorei(I.UNPACK_SKIP_ROWS,Xe),he.pixelStorei(I.UNPACK_SKIP_IMAGES,je);const jn=x.isDataArrayTexture||x.isData3DTexture,di=D.isDataArrayTexture||D.isData3DTexture;if(x.isDepthTexture){const ot=Fe.get(x),Bt=Fe.get(D),_n=Fe.get(ot.__renderTarget),bt=Fe.get(Bt.__renderTarget);he.bindFramebuffer(I.READ_FRAMEBUFFER,_n.__webglFramebuffer),he.bindFramebuffer(I.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let It=0;It<Ee;It++)jn&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Fe.get(x).__webglTexture,Y,je+It),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Fe.get(D).__webglTexture,me,Ct+It)),I.blitFramebuffer(De,Xe,De+Ae,Xe+pe,we,et,we+Ae,et+pe,I.DEPTH_BUFFER_BIT,I.NEAREST);he.bindFramebuffer(I.READ_FRAMEBUFFER,null),he.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(Y!==0||x.isRenderTargetTexture||Fe.has(x)){const ot=Fe.get(x),Bt=Fe.get(D);he.bindFramebuffer(I.READ_FRAMEBUFFER,P),he.bindFramebuffer(I.DRAW_FRAMEBUFFER,z);for(let _n=0;_n<Ee;_n++)jn?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ot.__webglTexture,Y,je+_n):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ot.__webglTexture,Y),di?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Bt.__webglTexture,me,Ct+_n):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Bt.__webglTexture,me),Y!==0?I.blitFramebuffer(De,Xe,De+Ae,Xe+pe,we,et,we+Ae,et+pe,I.COLOR_BUFFER_BIT,I.NEAREST):di?I.copyTexSubImage3D(Re,me,we,et,Ct+_n,De,Xe,Ae,pe):I.copyTexSubImage2D(Re,me,we,et,De,Xe,Ae,pe);he.bindFramebuffer(I.READ_FRAMEBUFFER,null),he.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else di?x.isDataTexture||x.isData3DTexture?I.texSubImage3D(Re,me,we,et,Ct,Ae,pe,Ee,xt,Vt,St.data):D.isCompressedArrayTexture?I.compressedTexSubImage3D(Re,me,we,et,Ct,Ae,pe,Ee,xt,St.data):I.texSubImage3D(Re,me,we,et,Ct,Ae,pe,Ee,xt,Vt,St):x.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,me,we,et,Ae,pe,xt,Vt,St.data):x.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,me,we,et,St.width,St.height,xt,St.data):I.texSubImage2D(I.TEXTURE_2D,me,we,et,Ae,pe,xt,Vt,St);he.pixelStorei(I.UNPACK_ROW_LENGTH,Jt),he.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ct),he.pixelStorei(I.UNPACK_SKIP_PIXELS,fi),he.pixelStorei(I.UNPACK_SKIP_ROWS,Wt),he.pixelStorei(I.UNPACK_SKIP_IMAGES,Ks),me===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&I.generateMipmap(Re),he.unbindTexture()},this.initRenderTarget=function(x){Fe.get(x).__webglFramebuffer===void 0&&Ne.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Ne.setTextureCube(x,0):x.isData3DTexture?Ne.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Ne.setTexture2DArray(x,0):Ne.setTexture2D(x,0),he.unbindTexture()},this.resetState=function(){V=0,H=0,re=null,he.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}function wa(i,e,t,n){const r=new Uint8Array(262144),a=Math.PI*2;let o=741;for(let c=0;c<256;c++)for(let h=0;h<256;h++){o=Math.imul(1664525,o)+1013904223>>>0;const p=i(h/256*a,c/256*a,o/4294967296-.5),f=4*(c*256+h);r[f]=r[f+1]=r[f+2]=Math.round(Math.max(0,Math.min(255,p))),r[f+3]=255}const l=new $o(r,256,256);return l.wrapS=l.wrapT=Ti,l.repeat.set(e,t),l.magFilter=en,l.minFilter=qn,l.generateMipmaps=!0,l.anisotropy=Math.min(8,n),l.needsUpdate=!0,l}function hg({space:i,copper:e,walnut:t,felt:n,anisotropy:s}){const r=wa((l,c,h)=>232+7*Math.sin(61*c+2*Math.sin(l))+4*Math.sin(23*c)+8*h,1,2,s);Object.assign(e,{metalness:.92,roughness:i?.43:.3,roughnessMap:r,bumpMap:r,bumpScale:3e-4,clearcoat:.25});const a=wa((l,c,h)=>{const p=Math.cos(8*l),f=Math.cos(8*c);if(i){const m=Math.sin(4*(l+c))>0;return 158+17*(m?p:f)+7*Math.cos(32*(m?l:c))+h*12}return 190+23*p*f+10*Math.sin(24*l+f)+h*27},i?8:13,i?8:13,s);Object.assign(n,{map:a,bumpMap:a,bumpScale:.0025,metalness:i?.25:0,roughness:i?.58:.97}),n.color.set(i?"#0f1b30":"#14704a");const o=i?r:wa((l,c,h)=>{const p=11*c+2*Math.sin(l)+.6*Math.sin(3*l+c);return 174+34*Math.cos(p)+18*Math.cos(3*p)+h*17},4,1,s);Object.assign(t,{map:o,roughnessMap:o,bumpMap:o,roughness:i?.54:.64,bumpScale:.008}),i||t.color.set("#6a4429")}function fg({scene:i,floor:e,table:t,walnut:n,felt:s,copper:r,trim:a,brass:o,ball:l,cups:c,camera:h,renderer:p}){e.visible=!1,i.fog=null,i.background.set("#03040c"),i.environmentIntensity=.45,i.traverse(de=>{de.isSpotLight?(de.color.set("#cfe2ff"),de.intensity=520):de.isDirectionalLight?de.intensity*=.7:de.isHemisphereLight&&(de.intensity=.2)}),n.color.set("#16233a"),n.metalness=.8,r.color.set("#8392ad"),a.color.set("#2c3a4d"),a.emissive.set("#000000"),o.color.set("#2a6f86"),o.emissive.set("#041a24"),l.material.color.set("#ffc05b"),l.material.emissive.set("#e8760f"),l.material.emissiveIntensity=2.2;const f=new oi({color:"#70e7ff"});f.color.multiplyScalar(2.2);const m=f.color.clone();function v(de,ye,Ke,qe){const nt=new ht(new qr(ye,qe,8,96),f);nt.rotation.x=Math.PI/2,nt.position.y=Ke,de.add(nt)}v(t,4.47,-.23,.018);for(const de of c)v(de,.397,.98,.014),v(de,.22,1.253,.009);const S=new Yn;i.add(S);const g=(()=>{let de=12345;return()=>(de=Math.imul(1664525,de)+1013904223>>>0)/4294967296})(),d=document.createElement("canvas");d.width=1024,d.height=512;const M=d.getContext("2d");M.fillStyle="#03040c",M.fillRect(0,0,1024,512),M.globalCompositeOperation="lighter";const C=["90,40,170","20,120,140","50,60,170","120,40,110"];for(let de=0;de<26;de++){const ye=g()*1024,Ke=200+g()*280,qe=70+g()*170,nt=C[de%4];for(const ke of[-1024,0,1024]){const mt=M.createRadialGradient(ye+ke,Ke,0,ye+ke,Ke,qe);mt.addColorStop(0,`rgba(${nt},0.16)`),mt.addColorStop(1,`rgba(${nt},0)`),M.fillStyle=mt,M.fillRect(ye+ke-qe,Ke-qe,2*qe,2*qe)}}const y=new ws(d);y.colorSpace=zt;const w=new ht(new Ws(100,48,24),new oi({map:y,side:$t,depthWrite:!1,fog:!1}));w.renderOrder=-10,S.add(w);const T=document.createElement("canvas");T.width=T.height=32;const _=T.getContext("2d"),E=_.createRadialGradient(16,16,0,16,16,16);E.addColorStop(0,"rgba(255,255,255,1)"),E.addColorStop(.35,"rgba(255,255,255,0.7)"),E.addColorStop(1,"rgba(255,255,255,0)"),_.fillStyle=E,_.fillRect(0,0,32,32);const O=new ws(T),L=[[.75,.85,1],[1,1,1],[1,.9,.75],[.7,.95,1]],F=[[22e3,2,.55,1.3],[4500,3,.8,.9],[500,5.5,1.5,.6]].map(([de,ye,Ke,qe],nt)=>{const ke=[],mt=[];for(let gt=0;gt<de;gt++){const Tt=-1+g()*1.15,I=g()*Math.PI*2,Et=Math.sqrt(1-Tt*Tt)*90;ke.push(Math.cos(I)*Et,Tt*90,Math.sin(I)*Et);const it=L[Math.floor(g()*4)],rt=Ke*(.5+.5*g());mt.push(it[0]*rt,it[1]*rt,it[2]*rt)}const ft=new kt;ft.setAttribute("position",new pt(ke,3)),ft.setAttribute("color",new pt(mt,3));const wt=new Zh(ft,new Zc({size:ye,sizeAttenuation:!1,map:O,vertexColors:!0,transparent:!0,blending:Si,depthWrite:!1,fog:!1}));return wt.userData={speed:qe,phase:nt*2},S.add(wt),wt}),G=new B(.95,.25,-.15).normalize(),K=document.createElement("canvas");K.width=512,K.height=256;const P=K.getContext("2d"),z=P.createImageData(512,256),V=(de,ye,Ke)=>de+(ye-de)*Ke;for(let de=0;de<256;de++)for(let ye=0;ye<512;ye++){const Ke=ye/512*Math.PI*2,qe=de/256*Math.PI,nt=.5+.5*Math.sin(qe*22+.5*Math.sin(3*Ke+qe*5)+.3*Math.sin(7*Ke-qe*9)),ke=4*(de*512+ye);z.data[ke]=V(60,150,nt),z.data[ke+1]=V(90,150,nt),z.data[ke+2]=V(140,190,nt),z.data[ke+3]=255}P.putImageData(z,0,0);const H=new ws(K);H.colorSpace=zt,H.wrapS=Ti;const re=document.createElement("canvas");re.width=512,re.height=4;const Z=re.getContext("2d").createImageData(512,4);for(let de=0;de<512;de++){const ye=de/511,Ke=.5+.5*Math.sin(ye*140)*Math.sin(ye*37+1),qe=ye>.58&&ye<.66?.05:1,nt=Math.min(1,Math.max(0,(.3+.7*Ke)*qe))*Math.min(1,ye*14,(1-ye)*14);for(let ke=0;ke<4;ke++){const mt=4*(ke*512+de);Z.data[mt]=V(215,150,ye),Z.data[mt+1]=V(190,170,ye),Z.data[mt+2]=V(170,205,ye),Z.data[mt+3]=nt*235}}re.getContext("2d").putImageData(Z,0,0);const te=new ws(re);te.colorSpace=zt;const se=`varying vec3 vN; varying vec3 vW; varying vec2 vUv;
    void main() { vUv = uv; vN = mat3(modelMatrix) * normal; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz;
      gl_Position = projectionMatrix * viewMatrix * w; }`,xe={map:{value:null},sun:{value:G},center:{value:new B},radius:{value:1}},Me=new ht(new Ws(1,64,40),new Ft({uniforms:{...xe,map:{value:H}},vertexShader:se,fragmentShader:`uniform sampler2D map; uniform vec3 sun; varying vec3 vN; varying vec3 vW; varying vec2 vUv;
      void main() {
        vec3 n = normalize(vN);
        float ndl = dot(n, sun);
        float day = smoothstep(-0.1, 0.45, ndl);
        float rim = pow(1.0 - max(dot(n, normalize(cameraPosition - vW)), 0.0), 3.0);
        vec3 col = texture2D(map, vUv).rgb * (0.02 + 1.1 * day);
        col += vec3(0.3, 0.6, 1.0) * rim * (0.12 + 0.9 * day);
        gl_FragColor = vec4(col, 1.0);
      }`})),Q=new Jo(1.45,2.4,128,1),ce=Q.attributes.position,Se=Q.attributes.uv;for(let de=0;de<ce.count;de++)Se.setXY(de,(Math.hypot(ce.getX(de),ce.getY(de))-1.45)/.95,.5);const Pe=new ht(Q,new Ft({uniforms:{...xe,map:{value:te}},vertexShader:se,transparent:!0,depthWrite:!1,side:Pn,fragmentShader:`uniform sampler2D map; uniform vec3 sun; uniform vec3 center; uniform float radius; varying vec3 vW; varying vec2 vUv;
      void main() {
        vec4 t = texture2D(map, vUv);
        vec3 d = vW - center;
        float along = dot(d, sun);
        float shadow = along < 0.0 && length(d - along * sun) < radius ? 0.1 : 1.0;
        gl_FragColor = vec4(t.rgb * 0.85 * shadow, t.a);
      }`}));Pe.rotation.x=-Math.PI/2;const fe=new Yn;fe.rotation.set(.25,0,.5),fe.add(Me,Pe);const Ie=new Yn;Ie.add(fe),i.add(Ie);const Je=new be,Le=new B;function Ye(){p.getSize(Je);const de=Je.x<Je.y,ye=40;Le.set(de?.5:-.74,de?.62:.58,.5).unproject(h).sub(h.position).normalize(),Ie.position.copy(h.position).addScaledVector(Le,ye);const Ke=(de?.09:.062)*Math.min(Je.x,Je.y);Ie.scale.setScalar(Ke*2*ye*Math.tan(rs.degToRad(h.fov/2))/Je.y),xe.center.value.copy(Ie.position),xe.radius.value=Ie.scale.x}return{update(de){S.position.copy(h.position),Ye(),Me.rotation.y=de*.05;for(const ye of F)ye.material.opacity=.8+.2*Math.sin(de*ye.userData.speed+ye.userData.phase);f.color.copy(m).multiplyScalar(.9+.1*Math.sin(de*1.6))}}}const dg=40,pg=700,mg=.12,gg=900,_g=332,So=i=>i>=gg?_g:0,Ut=(i,e)=>i+Math.random()*(e-i),ji=()=>`cup#${1+Math.floor(Math.random()*9)}`,Ra=i=>"ABC"[Math.floor(i/3)]+(i%3+1),vg=i=>String(i).padStart(3,"0"),xg=i=>Math.round(i).toLocaleString("en-US").replace(/,/g," "),_c=[()=>[`${ji()} trajectory arc${Math.random()<.5?"+":"-"}${Ut(.1,.9).toFixed(2)}`,`...cross-check with ${ji()}`],()=>[`occlusion ${ji()} over ${ji()} p=${Ut(.2,.9).toFixed(2)}`,"...re-sync depth buffer"],()=>[`kalman update dx=${Ut(-.4,.4).toFixed(3)} dz=${Ut(-.4,.4).toFixed(3)}`,`...residual ${Ut(.01,.06).toFixed(3)} < 0.05`],()=>[`hypothesis #${Math.floor(Ut(10,900))} pruned`,`...entropy ${Ut(2,6).toFixed(2)} bits`],()=>["lane crossing detected",`...phase offset ${Math.floor(Ut(2,40))} ms, re-sync`],()=>[`beam search width=${Math.floor(Ut(4,32))}`,`...discard ${Math.floor(Ut(2,20))} branches`]],Mg={classic:"CUP-TRACKER v2.1 // tty0",space:"ORBIT-TRACKER v2.1 // tty0",street:"LOOKOUT // burner phone"},Sg=[()=>["scanning for cops... clear",`...next sweep in ${Math.floor(Ut(3,9))}s`],()=>["mark looks confident, speeding up",`...tell: eyes on ${ji()}`],()=>["pigeon on the roof, ignoring","...still just a pigeon"],()=>["crowd thinning out",`...${Math.floor(Ut(1,5))} onlookers left`],()=>[`mark's hands: ${Ut(2,9).toFixed(1)} bills deep`,"...not folding yet"]];function yg({variant:i="classic"}={}){const e=i==="street",t=e?[..._c,...Sg]:_c,n=document.createElement("aside");n.className="hud",n.innerHTML=`
    <button class="hud-toggle" type="button" aria-expanded="false" aria-controls="hud-panel">LOG</button>
    <div class="hud-panel" id="hud-panel" aria-hidden="true">
      <div class="hud-title">${Mg[i]}</div>
      <div class="hud-log"><div class="hud-prompt">&gt; <i></i></div></div>
      <pre class="hud-stats"></pre>
    </div>`,document.querySelector("main").appendChild(n);const s=n.querySelector(".hud-toggle"),r=n.querySelector(".hud-log"),a=n.querySelector(".hud-prompt"),o=n.querySelector(".hud-stats");s.addEventListener("click",()=>{const V=n.classList.toggle("open");s.setAttribute("aria-expanded",String(V))});let l,c,h,p,f,m,v,S,g,d,M,C,y,w,T,_,E;const O=(V,H="")=>l.push({text:V,cls:H}),L=V=>{O(`<think> ${V[0]}`,"dim");for(const H of V.slice(1))O(`  ${H}`,"dim");O("</think>","dim")};function F(){for(const V of[...r.children])V!==a&&V.remove();l=[],c=null,h=0,f=0,m=0,p=performance.now(),v=null,S=-1,d=!1,M=!1,g=5,C=0,y=40,w=99,_="SHOW",E=0,T=Ut(30,60),O(e?"> SCAN alley ............. OK":"> SCAN cups[9] ............ OK"),O(e?"> SYNC burner phone ...... OK":"> SYNC table.axis ......... OK"),K()}function G(V){h+=V*pg;let H=l.length>10?1/0:Math.floor(h);for(h=l.length>10?0:h-H;H>0&&(c||l.length);){if(!c){const{text:Z,cls:te}=l.shift(),se=document.createElement("div");for(se.className=te,r.insertBefore(se,a);r.children.length>dg+1;)r.firstElementChild.remove();c={el:se,text:Z,pos:0}}const re=Math.min(H,c.text.length-c.pos);c.pos+=re,c.el.textContent=c.text.slice(0,c.pos),H-=re,c.pos>=c.text.length&&(c=null)}}function K(){const V=Math.max(0,Math.min(10,Math.round(w/10)));o.textContent=`phase: ${_}  mix t=${E.toFixed(1)}s
tokens: ${xg(C)}  (${Math.round(y)} tok/s)
confidence ${"▓".repeat(V)}${"░".repeat(10-V)} ${Math.round(w)}%`}function P(V,H,re){const Z=H==="mix"?180+140*re:H==="show"?45:60;y+=(Z+Ut(-14,14)-y)*.3,C+=y*V;const te=.55*re+.45*re*re,se=H==="mix"?99-(99-T)*te:H==="show"?99:w;w=H==="reveal"?100:Math.max(1,Math.min(99.9,se+(H==="mix"?Ut(-1.2,1.2):Ut(-.3,.3)))),_=H.toUpperCase(),K()}function z({phase:V,mixingTime:H,moves:re,tableDeg:Z,ballSlot:te,duration:se}){const xe=performance.now(),Me=Math.min(.1,Math.max(0,(xe-p)/1e3));p=xe,m+=Me;const Q=H/se;if(E=H,V!==v&&(v=V,O(V==="mix"?"> phase: MIX  engage":`> phase: ${V.toUpperCase()}`)),V==="show"&&!d&&m>1.2&&(d=!0,L(["baseline layout captured",`...${ji()} tracking handle assigned`])),V==="mix"){let ce=S;for(;ce+1<re.length&&H>=re[ce+1].start;)ce++;if(ce!==S){S=ce;const Se=re[ce].paths.map(({from:fe,to:Ie})=>`${Ra(fe)}->${Ra(Ie)}`),Pe=Se.length>3?` +${Se.length-3}`:"";O(`> move ${vg(ce+1)}/${re.length}  ${Se.slice(0,3).join(" ")}${Pe}`),ce%5===4&&O(`> table.rot = ${Z.toFixed(1)}°  t=${H.toFixed(1)}s`),ce>=g&&(L(t[Math.floor(Math.random()*t.length)]()),g=ce+Math.floor(Ut(7,14)))}}V==="reveal"&&!M&&te!==null&&(M=!0,O(`> ball located: ${Ra(te)} ✓`)),f+=Me,f>=mg&&(P(f,V,V==="reveal"?1:Q),f=0),(l.length||c)&&G(Me)}return F(),{reset:F,update:z}}const Eg=""+new URL("backdrop_top-BD4QgFyG.webp",import.meta.url).href,Tg=""+new URL("fog_wisp-DwFqsFuS.webp",import.meta.url).href,bg=""+new URL("steam_column-CIEAL7vz.webp",import.meta.url).href,Ag=""+new URL("tabletop-DKZirmqG.webp",import.meta.url).href,wg=""+new URL("cup_sleeve-Dpz2VpUo.webp",import.meta.url).href,Rg=""+new URL("neon_pawn-BMBo36zQ.webp",import.meta.url).href,Cg=""+new URL("neon_noodles-7K6hjVzN.webp",import.meta.url).href,Pg=""+new URL("neon_liquor-CkkdaBws.webp",import.meta.url).href,vi=-1.25,nl=i=>()=>(i=Math.imul(1664525,i)+1013904223>>>0)/4294967296,Ki=rs.clamp;function Zr(i,e){const t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d")]}const Lg=new lf;function $i(i,{color:e=!0,wrap:t=!1,repeat:n=[1,1],anisotropy:s=8}={}){const r=Lg.load(i);return e&&(r.colorSpace=zt),t&&(r.wrapS=r.wrapT=Ti),r.repeat.set(...n),r.anisotropy=s,r}function Cr(i,{color:e=!0,repeat:t=[1,1],wrap:n=!1}={}){const s=new ws(i);return e&&(s.colorSpace=zt),n&&(s.wrapS=s.wrapT=Ti),s.repeat.set(...t),s.anisotropy=8,s}function Dg(){const[i,e]=Zr(256,64),t=nl(9);e.fillStyle="#4a3524",e.fillRect(0,0,256,64);for(let n=0;n<140;n++){e.strokeStyle=`rgba(${t()<.5?"20,10,4":"130,95,60"},${.1+t()*.2})`,e.lineWidth=1;const s=t()*64;e.beginPath(),e.moveTo(0,s),e.lineTo(256,s+(t()-.5)*4),e.stroke()}e.fillStyle="rgba(15,8,3,0.6)";for(const n of[20,42])e.fillRect(0,n,256,2);return i}function Ig(i,e,t){const[n,s]=Zr(16,128);s.fillStyle=i,s.fillRect(0,0,16,128),s.fillStyle=e;for(let r=0;r<t;r++)s.fillRect(0,(r+.5)*128/t-1,16,2);return n}function Ng(){const[i,e]=Zr(128,128),t=nl(3);e.fillStyle="#999",e.fillRect(0,0,128,128);for(let n=0;n<520;n++){const s=t()*128,r=t()*128,a=1+t()*3;e.fillStyle=`rgba(${t()<.5?"20,20,20":"230,230,230"},0.8)`,e.beginPath(),e.arc(s,r,a,0,7),e.fill()}return i}function Ug(i="rgba(255,255,255,1)"){const[e,t]=Zr(64,64),n=t.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,i),n.addColorStop(.4,i.replace(/[\d.]+\)$/,"0.35)")),n.addColorStop(1,i.replace(/[\d.]+\)$/,"0)")),t.fillStyle=n,t.fillRect(0,0,64,64),Cr(e)}function Fg({scene:i,floor:e,table:t,walnut:n,felt:s,copper:r,trim:a,brass:o,ball:l,cups:c,camera:h,renderer:p}){const f=nl(2024),m=p.capabilities.getMaxAnisotropy();i.background.set("#120c1b"),i.fog=null,i.environmentIntensity=.14,i.traverse(j=>{j.isSpotLight?(j.color.set("#ffb36b"),j.intensity=520):j.isDirectionalLight?j.intensity=j.color.getHex()===9422079?1.1:.8:j.isHemisphereLight&&(j.color.set("#4b5c92"),j.groundColor.set("#1b0f14"),j.intensity=.3)}),i.traverse(j=>{j.isDirectionalLight&&j.color.getHex()!==9422079&&j.color.set("#ff5fa8")});const S=$i(Ag,{anisotropy:m});s.map=S,s.bumpMap=S,Object.assign(s,{color:new Be("#ffffff"),roughness:.8,metalness:0,bumpScale:.5}),s.needsUpdate=!0;const g=Cr(Dg(),{wrap:!0});Object.assign(n,{map:g,roughnessMap:null,bumpMap:null,roughness:.8,color:new Be("#ffffff")}),n.needsUpdate=!0,o.color.set("#d9b43c"),o.metalness=0,o.roughness=.9;const d=Cr(Ig("#17171b","#3a3a44",14),{wrap:!0,repeat:[1,6]}),M=new yi({color:"#2d2926",roughness:.55,metalness:.7}),C=new yi({map:d,roughness:.55});i.traverse(j=>{var Ce;const Te=(Ce=j.geometry)==null?void 0:Ce.parameters;Te&&(j.geometry.type==="TorusGeometry"&&(Te.radius===4.03||Te.radius===4.32)&&(j.visible=!1),j.geometry.type==="BoxGeometry"&&Te.width===.013&&(j.visible=!1),j.geometry.type==="CylinderGeometry"&&Te.radiusTop===4.43&&(j.material=M),j.geometry.type==="CylinderGeometry"&&Te.radiusTop===2.8&&(j.material=C))});const y=new ht(new Ri(3.7,3.7,.1,64),n);y.position.y=vi+.05,y.receiveShadow=y.castShadow=!0,i.add(y);const w=c[0].children.find(j=>j.geometry.type==="LatheGeometry").geometry.parameters.points,T=new Xr(w,64),_=T.attributes.uv,E=T.attributes.position;for(let j=0;j<_.count;j++){const Te=Math.round(_.getY(j)*(w.length-1));_.setY(j,Te<=3||Te===4?1:Ki((E.getY(j)-.08)/1.1,0,1))}const O=$i(wg,{wrap:!0,anisotropy:m});Object.assign(r,{map:O,color:new Be("#dcd6cc"),metalness:0,roughness:.85,roughnessMap:null,bumpMap:O,bumpScale:.6,clearcoat:0}),r.needsUpdate=!0,Object.assign(a,{color:new Be("#e9e4d8"),metalness:0,roughness:.85});for(const j of c)j.children.find(Te=>Te.geometry.type==="LatheGeometry").geometry=T;const L=Cr(Ng(),{color:!1,wrap:!0,repeat:[3,2]});Object.assign(l.material,{color:new Be("#e3202a"),emissive:new Be("#8a0710"),emissiveIntensity:.55,roughness:.95,metalness:0,clearcoat:0,bumpMap:L,bumpScale:1.6}),l.material.needsUpdate=!0,e.material=new Jh({opacity:.8,depthWrite:!1}),e.renderOrder=0;const F=Ug("rgba(255,255,255,1)"),G=(j,Te,Ce,Qe)=>{const ze=new ht(new Ln(1,1),Te);return ze.rotation.x=-Math.PI/2,ze.position.y=Ce,ze.scale.setScalar(j),ze.renderOrder=Qe,i.add(ze),ze};G(11.5,new oi({map:F,color:"#000",transparent:!0,opacity:.7,depthWrite:!1}),vi+.01,1);const K=new oi({map:F,color:"#ff9a4a",transparent:!0,opacity:.12,depthWrite:!1,blending:Si});G(24,K,vi+.02,2);const P=$i(Eg,{anisotropy:m});P.wrapS=P.wrapT=Dn;const z={map:{value:P},window:{value:new yt(0,0,1,1)},gain:{value:1.12},lamps:{value:new yt(1,1,1,1)},flick:{value:new be(1,1)},car:{value:new yt(0,0,.1,0)}},V=new ht(new Ln(2,2),new Ft({uniforms:z,depthTest:!1,depthWrite:!1,vertexShader:`varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 1.0, 1.0); }`,fragmentShader:`uniform sampler2D map; uniform vec4 window; uniform float gain; uniform vec4 lamps; uniform vec2 flick; uniform vec4 car;
varying vec2 vUv;
float blob(vec2 uv, vec2 at, float r) { vec2 d = (uv - at) * vec2(1.6, 1.0); return exp(-dot(d, d) / (r * r)); }
void main() {
  vec2 uv = window.xy + vUv * window.zw;
  vec3 c = texture2D(map, uv).rgb * gain;
  c *= mix(1.0, flick.x, 0.75 * smoothstep(0.36, 0.16, uv.x)) * mix(1.0, flick.y, 0.75 * smoothstep(0.74, 0.9, uv.x));
  vec3 warm = vec3(1.0, 0.6, 0.24);
  c += warm * lamps.x * blob(uv, vec2(0.2275, 0.744), 0.07) * 0.9;
  c += warm * lamps.y * blob(uv, vec2(0.9525, 0.768), 0.09) * 0.9;
  c += warm * lamps.z * blob(uv, vec2(0.545, 0.944), 0.05) * 0.7;
  c += vec3(0.25, 0.9, 1.0) * lamps.w * blob(uv, vec2(0.648, 0.976), 0.06) * 0.8;
  // wet-asphalt glow of the lantern pools
  c += warm * lamps.x * blob(uv, vec2(0.24, 0.5), 0.16) * 0.07 + warm * lamps.y * blob(uv, vec2(0.93, 0.55), 0.18) * 0.07;
  // car headlights: bright core, long vertical smear on the wet road, wide wash
  vec2 d = (uv - car.xy) * vec2(1.6, 0.45);
  float r2 = car.z * car.z;
  c += vec3(1.0, 0.93, 0.78) * car.w * (1.3 * exp(-dot(d, d) / r2) + 0.45 * exp(-dot(d, d) / (r2 * 10.0)));
  gl_FragColor = vec4(c, 1.0);
}`}));V.frustumCulled=!1,V.renderOrder=-100,i.add(V);const re=[{url:Rg,light:"#ff2fb0",intensity:1.6,channel:0},{url:Cg,light:"#2ad8ff",intensity:1.25,channel:1},{url:Pg,light:"#ffb21e",intensity:1.6,channel:2}].map(j=>{const Te=$i(j.url,{anisotropy:m}),Ce=new yi({map:Te,emissiveMap:Te,emissive:"#ffffff",emissiveIntensity:j.intensity,color:"#707078",roughness:.6,metalness:.2,transparent:!0,alphaTest:.02,depthWrite:!1,fog:!1}),Qe=new ht(new Ln(1,.5),Ce);Qe.renderOrder=2;const ze=new vo(j.light,0,34,2);return i.add(Qe,ze),{spec:j,mesh:Qe,material:Ce,light:ze}}),Z=[0,1,2].map(()=>({start:-10,dur:0,next:1.2+f()*4,long:!1,k:1}));function te(j,Te){Te>=j.next&&(j.start=Te,j.long=f()<.35,j.dur=j.long?1.1+f()*.8:.25+f()*.3,j.next=Te+j.dur+5+f()*9);const Ce=Te-j.start;return j.k=Ce>=j.dur?1:Ce<.35?Math.sin(Ce*75)>-.2?.95:.12:.1,j.k}const se=j=>{const Te=new Uint32Array(j*6);for(let Ce=0;Ce<j;Ce++)Te.set([4*Ce,4*Ce+1,4*Ce+2,4*Ce+2,4*Ce+1,4*Ce+3],Ce*6);return Te};function xe(j,Te,Ce){const Qe=new kt,ze=new Float32Array(j*8),Mt=new Float32Array(j*4*Ce);for(let vt=0;vt<j;vt++){ze.set(Te,vt*8);const at=Array.from({length:Ce},f);for(let st=0;st<4;st++)Mt.set(at,(vt*4+st)*Ce)}return Qe.setAttribute("position",new hn(new Float32Array(j*12),3)),Qe.setAttribute("corner",new hn(ze,2)),Qe.setAttribute("seed",new hn(Mt,Ce)),Qe.setIndex(new hn(se(j),1)),Qe}const Me=$i(Tg,{anisotropy:m}),ce=[[16,.55,.008,1.1,.55,.3],[14,-.05,.011,1,.5,.1],[11,.3,-.016,.9,.45,.55],[7,-.35,.021,.9,.42,.8],[12,-.55,-.013,1.1,.42,.7],[3,-.62,-.032,.9,.12,0],[-3,-.8,.042,.8,.07,.45]].map(([j,Te,Ce,Qe,ze,Mt])=>{const vt=new ht(new Ln(2,1),new oi({map:Me,transparent:!0,depthWrite:!1,opacity:ze,fog:!1,color:"#ffffff"}));return vt.renderOrder=3,vt.frustumCulled=!1,i.add(vt),{mesh:vt,depth:j,y:Te,speed:Ce,size:Qe,opacity:ze,phase:Mt}}),Se=$i(bg,{anisotropy:m}),Pe=new Ln(.5,1);Pe.translate(0,.5,0);const Ie=[[.155,.44],[.875,.488]].flatMap(([j,Te],Ce)=>[0,1].map(Qe=>{const ze=new ht(Pe,new oi({map:Se,transparent:!0,depthWrite:!1,opacity:0,fog:!1,color:Ce?"#9fe6f0":"#f0a6dc"}));return ze.renderOrder=3,ze.frustumCulled=!1,i.add(ze),{mesh:ze,u:j,v:Te,phase:Qe*.5+Ce*.23,sway:f()*6.28}})),Je=18,Le=64,Ye={time:{value:0},width:{value:.011},len:{value:1.1},maskEdges:{value:Array.from({length:Le},()=>new B(0,0,-1e6))},maskCount:{value:0},maskMargin:{value:new be(8,28)}},de=new ht(xe(1100,[0,-1,0,1,1,-1,1,1],4),new Ft({uniforms:Ye,transparent:!0,depthWrite:!1,vertexShader:`uniform float time; uniform float width; uniform float len; attribute vec2 corner; attribute vec4 seed; varying float vA;
void main() {
  float sp = 13.0 + seed.w * 9.0;
  float y = mod(seed.z * ${Je.toFixed(1)} - time * sp, ${Je.toFixed(1)});
  vec3 p0 = vec3((seed.x - 0.5) * 30.0 + y * 0.12, ${vi.toFixed(2)} + y, (seed.y - 0.62) * 24.0);
  vec3 p1 = p0 + normalize(vec3(0.12, 1.0, 0.0)) * len * (0.6 + seed.w * 0.8);
  vec3 a = (viewMatrix * vec4(p0, 1.0)).xyz, b = (viewMatrix * vec4(p1, 1.0)).xyz;
  vec3 side = normalize(cross(normalize(b - a), vec3(0.0, 0.0, 1.0)) + vec3(1e-4));
  vec3 pos = mix(a, b, corner.x) + side * width * corner.y;
  gl_Position = projectionMatrix * vec4(pos, 1.0);
  vA = smoothstep(0.0, 0.8, y) * (1.0 - smoothstep(${(Je-3).toFixed(1)}, ${Je.toFixed(1)}, y)) * (0.45 + seed.w * 0.55);
}`,fragmentShader:`uniform vec3 maskEdges[${Le}]; uniform int maskCount; uniform vec2 maskMargin; varying float vA;
void main() {
  float d = -1e6;
  for (int i = 0; i < ${Le}; i++) { if (i >= maskCount) break; d = max(d, dot(maskEdges[i].xy, gl_FragCoord.xy) - maskEdges[i].z); }
  float keep = smoothstep(maskMargin.x, maskMargin.x + maskMargin.y, d);
  if (keep <= 0.0) discard;
  gl_FragColor = vec4(0.72, 0.86, 1.0, 0.3 * vA * keep);
}`}));de.frustumCulled=!1,de.renderOrder=4,i.add(de);function ye(j,Te,Ce,Qe,ze,Mt){const vt=new ht(xe(j,[-1,-1,1,-1,-1,1,1,1],3),new Ft({uniforms:{time:Ye.time,y:{value:Te},area:{value:new B(Ce,Qe,ze)},strength:{value:Mt}},transparent:!0,depthWrite:!1,blending:Si,vertexShader:`uniform float time; uniform float y; uniform vec3 area; attribute vec2 corner; attribute vec3 seed; varying vec2 vUv; varying float vLife;
float h(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
void main() {
  float t = time * (0.9 + seed.y * 0.9) + seed.x * 17.0;
  float cyc = floor(t); vLife = fract(t);
  float ang = h(vec2(seed.x, cyc)) * 6.2831;
  float r = sqrt(mix(area.x * area.x, area.y * area.y, h(vec2(cyc + 3.0, seed.x * 5.0))));
  vec3 p = vec3(cos(ang) * r, y, sin(ang) * r) + vec3(corner.x, 0.0, corner.y) * area.z * (0.5 + 0.5 * seed.z);
  vUv = corner;
  gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
}`,fragmentShader:`uniform float strength; varying vec2 vUv; varying float vLife;
void main() {
  float d = length(vUv);
  float ring = smoothstep(vLife - 0.16, vLife, d) * (1.0 - smoothstep(vLife, vLife + 0.05, d));
  gl_FragColor = vec4(vec3(0.7, 0.85, 1.0) * strength * ring * (1.0 - vLife) * (1.0 - vLife), 1.0);
}`}));vt.frustumCulled=!1,vt.renderOrder=4,i.add(vt)}ye(120,vi+.03,4.7,15,.6,.9);const Ke=[-1,1].map(()=>{const j=new Xh(new Kc({map:F,color:"#fff2d2",transparent:!0,opacity:0,blending:Si,depthWrite:!1,fog:!1}));return j.visible=!1,i.add(j),j}),qe=new vo("#fff0d0",0,60,1.6);i.add(qe);const nt=3.4;let ke=5+f()*2,mt=-1/0;const ft=new be,wt=new Ko,gt=new B,Tt=new B,I=new B,Et=new B,it=new Rn,rt=new Rn(new B(0,1,0),.75);function he(j,Te,Ce,Qe=gt){return Tt.set(j,Te,.5).unproject(h).sub(h.position).normalize(),wt.set(h.position,Tt),wt.intersectPlane(Ce,Qe)?Qe:Qe.copy(h.position).addScaledVector(Tt,40)}const _t=(j,Te)=>2*h.position.distanceTo(j)*Math.tan(rs.degToRad(h.fov/2))/Te,Fe=Math.tan(rs.degToRad(h.fov/2)),Ne=2048,A=1280;let u=0,R=0,q=1,N=1;const ne=j=>(j-u)/q*2-1,ee=j=>(j-R)/N*2-1;let U=-1;const k=new B,ae=new B;let b=!1;function X(j){(!b||h.position.distanceToSquared(ae)>1e-10)&&(k.copy(h.position),b=!0),h.position.set(k.x+Math.sin(j*.23)*.07,k.y+Math.sin(j*.31+1)*.04,k.z),ae.copy(h.position)}function $(j){p.getSize(ft);const Te=ft.x,Ce=ft.y,Qe=So(Te),ze=Te-Qe>=760;h.updateMatrixWorld(),I.set(0,0,-1).applyQuaternion(h.quaternion);const Mt=Te-Qe,vt=Math.max(Te/Ne,Ce/A),at=Math.min(Math.max(vt,(2*Te-Mt)/Ne),vt*1)*1.03;q=Te/(Ne*at),N=Ce/(A*at),u=Ki(.5-Mt/2/(Ne*at)+Math.sin(j*.21)*.004,0,1-q),R=Ki((1-N)*.25+Math.sin(j*.17+1)*.003,0,1-N),z.window.value.set(u,R,q,N);const st=h.position.distanceTo(Et.set(0,0,0)),Zt=(Ge,Ot)=>[Ge/Te*2-1,1-Ot/Ce*2],rn=Ki(Mt*(ze?.17:.3),90,210),Fn=ze?[[.11*Mt,128,1],[.86*Mt,128,1],[.065*Mt,Ce*.46,.62]]:[[.2*Mt,120,1],[.8*Mt,120,1],[0,0,0]];re.forEach((Ge,Ot)=>{const Rt=ze;if(Ge.mesh.visible=Ge.light.visible=Rt,!Rt)return;const[Qn,dn,Bn]=Fn[Ot];he(...Zt(Qn,dn),it.setFromNormalAndCoplanarPoint(I,Et.copy(h.position).addScaledVector(I,st+5))),Ge.mesh.position.copy(gt),Ge.mesh.quaternion.copy(h.quaternion);const Ci=rn*Bn*_t(gt,Ce);Ge.mesh.scale.set(Ci,Ci,1),Ge.light.position.copy(gt).addScaledVector(Tt,-3),Ge.light.position.y=Math.max(Ge.light.position.y,vi+4)});for(const Ge of ce){const Rt=((j*Ge.speed+Ge.phase)%1+1)%1*3.6-1.8,Qn=st+Ge.depth;he(Rt,Ge.y,it.setFromNormalAndCoplanarPoint(I,Et.copy(h.position).addScaledVector(I,Qn))),Ge.mesh.position.copy(gt),Ge.mesh.quaternion.copy(h.quaternion),Ge.mesh.scale.setScalar(Ge.size*2*Qn*Fe*(ze?.9:1.1)),Ge.mesh.material.opacity=Ge.opacity*Ki((1.8-Math.abs(Rt))/.6,0,1);const dn=Ki(Rt*.5+.5,0,1);Ge.mesh.material.color.setRGB(.8-.55*dn,.4+.4*dn,.75+.1*dn)}const On=Ce*.4;for(const Ge of Ie){const Ot=(j*.085+Ge.phase)%1;he(ne(Ge.u),ee(Ge.v),it.setFromNormalAndCoplanarPoint(I,Et.copy(h.position).addScaledVector(I,st+3)));const Rt=On*_t(gt,Ce);Ge.mesh.position.copy(gt).addScaledVector(h.up,0),Ge.mesh.quaternion.copy(h.quaternion),Ge.mesh.translateY(Ot*Rt*.25),Ge.mesh.translateX(Math.sin(j*.5+Ge.sway)*.05*Rt*Ot),Ge.mesh.rotateZ(Math.sin(j*.4+Ge.sway)*.07),Ge.mesh.scale.set(Rt*(.55+.6*Ot),Rt*(.5+.7*Ot),1),Ge.mesh.material.opacity=.8*Math.sin(Math.PI*Ot)**1.3}if(U>=0&&U<1){const Ge=U**1.7,Ot=.53-.23*Ge,Rt=.8-.84*Ge,Qn=.03+.2*Ge,dn=Math.min(1,U*5,(1-U)*4);z.car.value.set(Ot,Rt,Qn,dn),Ke.forEach((Bn,Ci)=>{Bn.visible=!0,he(ne(Ot+(Ci?1:-1)*(.008+.07*Ge)),ee(Rt),rt),Bn.position.copy(gt),Bn.scale.setScalar(_t(gt,Ce)*(40+150*Ge)),Bn.material.opacity=.9*dn}),he(ne(Ot),ee(Rt),it.setFromNormalAndCoplanarPoint(rt.normal,Et.set(0,4,0)),qe.position),qe.intensity=22*dn*(.4+.6*Ge)}else{z.car.value.w=0;for(const Ge of Ke)Ge.visible=!1;qe.intensity=0}}const ie=[[4.5,.1],[4.5,-.5],[3.7,vi],[3.7,3.3]],oe=24,le=1/Math.cos(Math.PI/oe),_e=new Float64Array(ie.length*oe),Oe=new Float64Array(_e.length),ue=new Int32Array(_e.length),Ue=new B,Ve=new be;function ge(){p.getDrawingBufferSize(Ve);const j=Ve.x,Te=Ve.y;let Ce=0;for(const[at,st]of ie)for(let Zt=0;Zt<oe;Zt++,Ce++){const rn=Zt/oe*Math.PI*2;Ue.set(Math.sin(rn)*at*le,st,Math.cos(rn)*at*le).project(h),_e[Ce]=(Ue.x+1)/2*j,Oe[Ce]=(Ue.y+1)/2*Te}let Qe=0;for(let at=1;at<Ce;at++)(_e[at]<_e[Qe]||_e[at]===_e[Qe]&&Oe[at]<Oe[Qe])&&(Qe=at);let ze=Qe,Mt=0;do{ue[Mt++]=ze;let at=ze===0?1:0;for(let st=0;st<Ce;st++){if(st===ze)continue;const Zt=(_e[at]-_e[ze])*(Oe[st]-Oe[ze])-(Oe[at]-Oe[ze])*(_e[st]-_e[ze]),rn=(_e[st]-_e[ze])**2+(Oe[st]-Oe[ze])**2>(_e[at]-_e[ze])**2+(Oe[at]-Oe[ze])**2;(Zt<0||Zt===0&&rn)&&(at=st)}ze=at}while(ze!==Qe&&Mt<Le);const vt=Te/Math.max(1,ft.y);for(let at=0;at<Mt;at++){const st=ue[at],Zt=ue[(at+1)%Mt];let rn=Oe[Zt]-Oe[st],Fn=_e[st]-_e[Zt];const On=Math.hypot(rn,Fn)||1;rn/=On,Fn/=On,Ye.maskEdges.value[at].set(rn,Fn,rn*_e[st]+Fn*Oe[st])}Ye.maskCount.value=Mt,Ye.maskMargin.value.set(8*vt,28*vt)}return{update(j){X(j),j>=ke&&(mt=j,ke=j+nt+10+f()*7),U=(j-mt)/nt,Ye.time.value=j,$(j),ge();const Te=te(Z[0],j),Ce=te(Z[1],j),Qe=te(Z[2],j),ze=[Te,Ce,Qe];z.flick.value.set(Te,Ce),re.forEach((vt,at)=>{const st=ze[vt.spec.channel]*(.95+.05*Math.sin(j*2.1+at*2));vt.material.emissiveIntensity=vt.spec.intensity*st,vt.light.intensity=28*st});const Mt=Math.sin(j*9.1)*Math.sin(j*2.3);z.lamps.value.set(.8+.2*Math.sin(j*1.3)+.08*Mt,.8+.2*Math.sin(j*1.1+2)-.06*Mt,.8+.2*Math.sin(j*1.7+4),.85+.15*Math.sin(j*.9+1)),K.opacity=.11+.02*Math.sin(j*1.3)}}}class Og extends Xc{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new ui;e.deleteAttribute("uv");const t=new yi({side:$t}),n=new yi,s=new vo(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new ht(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new Kh(e,n,6),o=new At;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const l=new ht(e,Zi(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new ht(e,Zi(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new ht(e,Zi(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const p=new ht(e,Zi(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);const f=new ht(e,Zi(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const m=new ht(e,Zi(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Zi(i){return new tf({color:0,emissive:16777215,emissiveIntensity:i})}const Pr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ds{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Bg=new el(-1,1,1,-1,0,1);class zg extends kt{constructor(){super(),this.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new pt([0,2,0,0,2,0],2))}}const Gg=new zg;class il{constructor(e){this._mesh=new ht(Gg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Bg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Hg extends ds{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ft?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Xs.clone(e.uniforms),this.material=new Ft({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new il(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class vc extends ds{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class kg extends ds{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Vg{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new be);this._width=n.width,this._height=n.height,t=new nn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:tn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Hg(Pr),this.copyPass.material.blending=Mi,this.timer=new mf}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}vc!==void 0&&(a instanceof vc?n=!0:a instanceof kg&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new be);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Wg extends ds{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Be}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}const Xg={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Be(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ls extends ds{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new be(e.x,e.y):new be(256,256),this.clearColor=new Be(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new nn(r,a,{type:tn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const p=new nn(r,a,{type:tn,depthBuffer:!1});p.texture.name="UnrealBloomPass.h"+h,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);const f=new nn(r,a,{type:tn,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}const o=Xg;this.highPassUniforms=Xs.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ft({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new be(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Xs.clone(Pr.uniforms),this.blendMaterial=new Ft({uniforms:this.copyUniforms,vertexShader:Pr.vertexShader,fragmentShader:Pr.fragmentShader,premultipliedAlpha:!0,blending:Si,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Be,this._oldClearAlpha=1,this._basic=new oi,this._fsQuad=new il(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new be(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=ls.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ls.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);const s=[],r=[];for(let a=1;a<e;a+=2){const o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new Ft({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new be(.5,.5)},direction:{value:new be(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Ft({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}ls.BlurDirectionX=new be(1,0);ls.BlurDirectionY=new be(0,1);const Er={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class qg extends ds{constructor(){super(),this.isOutputPass=!0,this.uniforms=Xs.clone(Er.uniforms),this.material=new tu({name:Er.name,uniforms:this.uniforms,vertexShader:Er.vertexShader,fragmentShader:Er.fragmentShader}),this._fsQuad=new il(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},tt.getTransfer(this._outputColorSpace)===ut&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Po?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Lo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Do?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Vr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===No?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Uo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Io&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const yo=30,xc=100,Eo=.8,Yg=.65,Cs=Eo+yo+Yg,Mc=2.05,Ca=Array.from({length:9},(i,e)=>({x:(e%3-1)*Mc,z:(Math.floor(e/3)-1)*Mc})),Lr=i=>(i=Math.max(0,Math.min(1,i)),i*i*(3-2*i));function Kg(i=Math.random){const e=Math.floor(i()*9),t=Array.from({length:9},(r,a)=>a),n=[];let s=0;for(let r=0;r<xc;r++){const a=[...t],o=i()<.5,l=[],c=i()<.5,h=i()<.5,p=(S,g)=>{const d=c?2-S:S,M=h?2-g:g;return o?d*3+M:M*3+d},f=(S,g,d,M,C)=>{l.push({from:S,to:g,shape:d,bend:M,skew:C}),t[g]=a[S]},m=i()<.7;for(let S=0;S<(m?1:3);S++){const g=i()<.5?-1:1,d=S===1?i()<.5?-1:1:S-1,M=m?(i()-.5)*.65:0;for(let C=0;C<3;C++){const y=(C+g+3)%3,w=Math.abs(C-y)===2,T=(m?0:(S-1)*.36)+(w?d*1.32:0);f(p(C,S),p(y,S),"slide",h?-T:T,M)}}if(m){const S=[p(0,1),p(1,1),p(1,2),p(0,2)],g=i()<.5?1:3,d=(i()-.5)*.65;for(let T=0;T<4;T++)f(S[T],S[(T+g)%4],"slide",0,d);const M=p(2,1),C=p(2,2),y=i()<.5?.57:-.57,w=(i()-.5)*.65;f(M,C,"pair",y,w),f(C,M,"pair",-y,w)}const v=(1+i()*.2)*(1.3-.55*r/(xc-1));n.push({before:a,paths:l,vertical:o,start:s,end:s+v}),s+=v}for(const r of n)r.start=Eo+r.start/s*yo,r.end=Eo+r.end/s*yo;return{target:e,moves:n,final:t}}function $g(i,e){const t=i.moves.find(a=>e<a.end),s=(t?t.before:i.final).map((a,o)=>({cup:a,...Ca[o]}));if(!t||e<=t.start)return s;const r=(e-t.start)/(t.end-t.start);for(const{from:a,to:o,shape:l,bend:c,skew:h}of t.paths){const p=Lr(r+h*r*(1-r)),f=Math.sin(Math.PI*p),m=l==="pair"?!t.vertical:t.vertical,v=Ca[a],S=Ca[o],g=s[a];g.x=v.x+(S.x-v.x)*p+(m?c*f:0),g.z=v.z+(S.z-v.z)*p+(m?0:c*f)}return s}const Sc="nine-cups-muted",Zg=.4,Jg=100,an=(i,e)=>i+Math.random()*(e-i),Xn=i=>i[Math.floor(Math.random()*i.length)],Ji=i=>440*2**((i-69)/12),yc={maj:[0,4,7],min:[0,3,7],maj7:[0,4,7,11],min7:[0,3,7,10],dom7:[0,4,7,10]},Yt=(i,e)=>({bass:36+i,ints:yc[e],third:yc[e][1]}),Qg={street:{verse:[Yt(9,"min"),Yt(5,"maj"),Yt(0,"maj"),Yt(7,"maj")],chorus:[Yt(0,"maj"),Yt(9,"min"),Yt(5,"maj"),Yt(7,"maj")]},classic:{verse:[Yt(9,"min7"),Yt(5,"maj7"),Yt(0,"maj7"),Yt(7,"dom7")],chorus:[Yt(0,"maj7"),Yt(9,"min7"),Yt(5,"maj7"),Yt(7,"dom7")]}},Pa=[{name:"intro",bars:2},{name:"verse",bars:4},{name:"chorus",bars:4},{name:"verse",bars:2},{name:"chorusB",bars:4}],Ec=[[0,76,2],[2,76,2],[4,79,2],[6,76,2],[8,74,2],[10,72,4],[14,67,4]],jg={chorus:new Map([...Ec,[20,79,2],[22,79,2],[24,81,2],[26,79,2],[28,72,4]].map(i=>[i[0],i])),chorusB:new Map([...Ec,[20,79,2],[22,79,2],[24,81,2],[26,83,2],[28,84,4]].map(i=>[i[0],i]))},e_=30;function t_({variant:i}){const e=i==="street",n=e?130:128,s=60/n/4;let r=!1;try{r=localStorage.getItem(Sc)==="1"}catch{}const a={moves:0,lifts:0,reveals:0,clicks:0,musicSteps:0,nodesCreated:0,nodesFreed:0};let o=null,l,c,h,p,f,m,v,S,g,d,M,C,y,w=!1,T=0,_=!1,E=0,O=0,L=0,F=0,G=0,K=0,P=0,z,V=!1;const H=e?3600:3200,re=e?12e3:9e3,Z=new WeakSet,te=()=>o&&o.state==="running"&&!r,se=(u,R)=>{u.onended=()=>{for(const q of R)q.disconnect(),Z.has(q)||(Z.add(q),a.nodesFreed++)}};function xe(){o=new(window.AudioContext||window.webkitAudioContext);for(const ie of["createOscillator","createGain","createBiquadFilter","createBufferSource","createStereoPanner"]){const oe=o[ie].bind(o);o[ie]=()=>(a.nodesCreated++,oe())}const u=o.createDynamicsCompressor();u.threshold.value=-12,u.knee.value=6,u.ratio.value=12,u.attack.value=.003,u.release.value=.15,l=o.createGain(),l.gain.value=r?0:.9,l.connect(u).connect(o.destination),v=o.createBuffer(1,o.sampleRate*2,o.sampleRate);const R=v.getChannelData(0);for(let ie=0;ie<R.length;ie++)R[ie]=Math.random()*2-1;const q=o.createBuffer(2,Math.floor(o.sampleRate*1.4),o.sampleRate);for(let ie=0;ie<2;ie++){const oe=q.getChannelData(ie);for(let le=0;le<oe.length;le++)oe[le]=(Math.random()*2-1)*(1-le/oe.length)**3}const N=o.createConvolver();N.buffer=q;const ne=o.createGain();ne.gain.value=.7,N.connect(ne).connect(l),c=o.createGain(),c.gain.value=.9,c.connect(l);const ee=o.createGain();ee.gain.value=.12,c.connect(ee).connect(N),h=o.createGain(),p=o.createBiquadFilter(),p.type="lowpass",p.Q.value=.6,p.frequency.value=H,f=o.createGain(),m=o.createGain(),m.gain.value=e?.2:.22,h.connect(p).connect(f).connect(m).connect(l);const U=o.createGain();U.gain.value=.18,m.connect(U).connect(N),g=o.createGain(),g.connect(h);const k=o.createGain();k.gain.value=.25,g.connect(k).connect(N),d=o.createGain();const ae=o.createBiquadFilter();ae.type="lowpass",ae.frequency.value=e?4500:2600,ae.Q.value=.7,d.connect(ae).connect(h),M=o.createGain(),M.gain.value=.9,M.connect(h),C=o.createGain(),C.connect(h);const b=o.createOscillator();b.frequency.value=5.5,y=o.createGain(),y.gain.value=14,b.connect(y),b.start(),S=o.createWaveShaper();const X=new Float32Array(1024);for(let ie=0;ie<X.length;ie++)X[ie]=Math.tanh((ie/511.5-1)*3.2);S.curve=X;const $=o.createGain();$.gain.value=.55,S.connect($).connect(h)}function Me(u,R,{type:q="bandpass",f0:N=1e3,f1:ne=0,q:ee=1,gain:U=.1,attack:k=.01,dest:ae=c,pan:b=0}){const X=o.createBufferSource();X.buffer=v,X.loop=!0;const $=o.createBiquadFilter();$.type=q,$.Q.value=ee,$.frequency.setValueAtTime(N,u),ne&&$.frequency.exponentialRampToValueAtTime(ne,u+R);const ie=o.createGain();ie.gain.setValueAtTime(0,u),ie.gain.linearRampToValueAtTime(U,u+k),ie.gain.linearRampToValueAtTime(0,u+R);const oe=[X,$,ie];if(X.connect($).connect(ie),b){const le=o.createStereoPanner();le.pan.value=b,ie.connect(le).connect(ae),oe.push(le)}else ie.connect(ae);se(X,oe),X.start(u,Math.random()*1.5),X.stop(u+R+.02)}function Q(u,R,q,{type:N="sine",fEnd:ne=0,gain:ee=.1,attack:U=.004,dest:k=c,pan:ae=0}={}){const b=o.createOscillator();b.type=N,b.frequency.setValueAtTime(q,u),ne&&b.frequency.exponentialRampToValueAtTime(ne,u+Math.min(R,.12));const X=o.createGain();X.gain.setValueAtTime(0,u),X.gain.linearRampToValueAtTime(ee,u+U),X.gain.setTargetAtTime(0,u+U,R/4);const $=[b,X];if(b.connect(X),ae){const ie=o.createStereoPanner();ie.pan.value=ae,X.connect(ie).connect(k),$.push(ie)}else X.connect(k);se(b,$),b.start(u),b.stop(u+U+R*1.75)}function ce(u,R,q,N,ne,{index:ee=1.2,ratio:U=1,decayIdx:k=.3}={}){const ae=Ji(R),b=o.createOscillator();b.frequency.value=ae;const X=o.createOscillator();X.frequency.value=ae*U;const $=o.createGain();$.gain.setValueAtTime(ae*ee*q,u),$.gain.setTargetAtTime(ae*.02,u,k),X.connect($).connect(b.frequency);const ie=o.createGain();ie.gain.setValueAtTime(0,u),ie.gain.linearRampToValueAtTime(.11*q,u+.006),ie.gain.setTargetAtTime(0,u+.006,N),b.connect(ie).connect(ne);const oe=[b,X,$,ie];se(b,oe),se(X,oe);const le=u+.006+N*8;b.start(u),X.start(u),b.stop(le),X.stop(le)}function Se(u,R,q,N){const ne=Ji(R),ee=o.createBiquadFilter();ee.type="lowpass",ee.Q.value=.7,ee.frequency.setValueAtTime(ne*6,u),ee.frequency.setTargetAtTime(ne*1.5,u,.08);const U=o.createGain();U.gain.setValueAtTime(0,u),U.gain.linearRampToValueAtTime(.5*q,u+.01),U.gain.setTargetAtTime(0,u+.01,N/4),ee.connect(U).connect(h);const k=[ee,U];for(const ae of["sine","triangle"]){const b=o.createOscillator();b.type=ae,b.frequency.value=ne,b.connect(ee),k.push(b),se(b,k),b.start(u),b.stop(u+.01+N*1.75)}}function Pe(u,R,q,N){const ne=Ji(R),ee=o.createBiquadFilter();ee.type="lowpass",ee.Q.value=5,ee.frequency.setValueAtTime(Math.min(ne*14,4e3),u),ee.frequency.setTargetAtTime(ne*1.6,u,.045);const U=o.createGain();U.gain.setValueAtTime(0,u),U.gain.linearRampToValueAtTime(.5*q,u+.004),U.gain.setTargetAtTime(0,u+.004+N*.5,N/4),ee.connect(U).connect(S);const k=[ee,U];for(const ae of["sawtooth","sine"]){const b=o.createOscillator();b.type=ae,b.frequency.value=ne,b.connect(ee),k.push(b),se(b,k),b.start(u),b.stop(u+.01+N*1.5)}}const fe=(u,R,q,N,ne,ee=0)=>R.forEach((U,k)=>Q(u+k*.004,q,Ji(U),{type:ne,gain:N,dest:d,attack:.008,fEnd:ee?Ji(U)*ee:0})),Ie=(u,R)=>{e?(Q(u,.28,165,{fEnd:42,gain:1*R,dest:h}),Me(u,.012,{type:"highpass",f0:3500,gain:.14*R,attack:5e-4,dest:h})):Q(u,.3,105,{fEnd:48,gain:.55*R,dest:h})},Je=(u,R)=>{e?(Me(u,.22,{f0:2600,q:.6,gain:.42*R,attack:.001,dest:g}),Me(u,.12,{type:"highpass",f0:6500,gain:.12*R,attack:.001,dest:g}),Q(u,.12,220,{type:"triangle",fEnd:150,gain:.3*R,dest:g})):(Me(u,.12,{f0:1800,q:.8,gain:.2*R,attack:.001,dest:g}),Q(u,.08,190,{fEnd:150,gain:.12*R,dest:g}))},Le=(u,R)=>{Me(u,.02,{f0:1500,q:1,gain:.26*R,attack:.001,dest:g}),Me(u+.011,.02,{f0:1500,q:1,gain:.26*R,attack:.001,dest:g}),Me(u+.022,.14,{f0:1400,q:.9,gain:.3*R,attack:.001,dest:g})},Ye=(u,R,q=!1)=>Me(u,q?.22:.035,{type:"highpass",f0:7500,gain:.1*R,attack:.001,dest:h}),de=(u,R)=>{Q(u,.07,820,{type:"square",gain:.035*R,dest:d}),Q(u,.07,1230,{type:"square",gain:.025*R,dest:d})},ye=(u,R)=>Me(u,1.1,{type:"highpass",f0:5e3,gain:.2*R,attack:.002,dest:g});let Ke=0,qe=0;function nt(u,R,q,N){const ne=Ji(R),ee=o.createOscillator();ee.type="sine";const U=u-qe<.25&&Ke?Ke:ne*.96;ee.frequency.setValueAtTime(U,u),ee.frequency.exponentialRampToValueAtTime(ne,u+.04),y.connect(ee.detune);const k=o.createGain();k.gain.setValueAtTime(0,u),k.gain.linearRampToValueAtTime(.5*N,u+.02),k.gain.setValueAtTime(.5*N,u+Math.max(.03,q-.05)),k.gain.linearRampToValueAtTime(0,u+q),ee.connect(k).connect(C),ee.onended=()=>{y.disconnect(ee.detune),ee.disconnect(),k.disconnect(),a.nodesFreed+=2},ee.start(u),ee.stop(u+q+.02),Me(u,Math.min(q,.12),{f0:3800,q:2,gain:.012*N,attack:.02,dest:C}),Ke=ne,qe=u+q}function ke(u,R){Me(u,.05,{f0:an(2200,3600),q:1.6,gain:.3*R,attack:.002,dest:h});for(let q=0;q<2;q++)Me(u+.01+q*.016+an(0,.006),.008,{type:"highpass",f0:3500,gain:.2*R,attack:5e-4,dest:h})}function mt(u,R){Me(u,R,{type:"bandpass",f0:300,f1:9e3,q:1.2,gain:.3,attack:R*.95,dest:h});const q=o.createOscillator();q.type="sawtooth",q.frequency.setValueAtTime(110,u),q.frequency.exponentialRampToValueAtTime(1400,u+R);const N=o.createGain();N.gain.setValueAtTime(0,u),N.gain.linearRampToValueAtTime(.07,u+R*.95),N.gain.linearRampToValueAtTime(0,u+R),q.connect(N).connect(d),se(q,[q,N]),q.start(u),q.stop(u+R+.02)}function ft(u,R,q,N){const ne=q.bars-1,ee=w?G%4===3:K===ne,U=N==="chorus"||N==="chorusB",k={chord:u,next:R,chorus:U,secName:N,fill:ee,crash:V||K===0&&U,hook:U?1:N==="verse"&&!w&&K>=q.bars-2?.55:0,snareOn:!(N==="intro"&&K===0),chrup:new Set(U?Xn(e?[[3,11],[7,15],[3,7,11,15]]:[[6],[2,10],[6,14]]):e?[11]:[10]),openHat:Math.random()<.5};if(V=ee,e)k.ghostKick=Xn([null,10,11,6,14]),k.bassRiff=U?{0:0,2:0,4:12,6:7,8:0,10:0,14:7}:{0:0,6:0,10:7,12:0},k.stabs=new Set(Xn(U?[[6,14],[2,6,10,14],[6,10,14]]:[[0],[0,10]]));else{k.pianoStabs=new Set(Xn([[0,6],[2,6,12],[0,6,8,14]])),k.brass=new Set(U?Xn([[6,14],[10,14],[6]]):[]);const ae=[u.bass];for(let b=1;b<7;b++)ae.push(u.bass+Xn(b%2?[u.third,7,9,12]:[7,12,u.third,10,5]));ae.push(R.bass+Xn([-1,1])),k.line=ae}return k}function wt(u,R){const q=e?u%2?s*.1:0:u%4===2?s*.667:0,N=R+q+an(-.003,.003);if(u===0){const b=Pa[P],X=w?G>>2&1?"chorusB":"chorus":b.name,$=w?G:K,ie=Qg[i][X==="chorus"||X==="chorusB"?"chorus":"verse"];z=ft(ie[$%4],ie[($+1)%4],b,X),z.crash&&ye(R,.9)}const{chord:ne,next:ee}=z,U=()=>an(.8,1),k=w&&T>.94?.35+(T-.94)/.06*.65:0,ae=z.fill&&u>=12;if(z.hook){const b=jg[z.secName==="chorusB"?"chorusB":"chorus"].get(G%2*16+u);b&&nt(N,b[1],b[2]*s*.95,z.hook)}if(e){(u===0||u===8||z.ghostKick===u||T>.5&&u===14)&&(k&&u%4||Ie(N,u%8?.6:U())),k?Je(N,k*U()):ae?Je(N,(.5+(u-12)*.15)*U()):(u===4||u===12)&&z.snareOn&&Je(N+.004,U()),Ye(N,u%4===2?.85*U():u%2?.45*U():.65*U()),u===14&&z.openHat&&z.chorus&&Ye(N,.7,!0),(z.chrup.has(u)||T>.4&&u%4===3&&Math.random()<.6)&&ke(N,U()),T>.3&&u%4===2&&Math.random()<.5&&de(N,U());let b=z.bassRiff[u];if(b===void 0&&T>.5&&u%2===0&&(b=0),b!==void 0&&!(ae&&u>12)){let X=ne.bass+b;u===14&&K%2===1&&(X=ee.bass+Xn([-1,1,7])),Pe(N,X,U(),.14)}(z.stabs.has(u)||T>.6&&u===8)&&fe(N,ne.ints.map(X=>ne.bass+12+X),z.chorus?.16:.32,.04,"sawtooth")}else k&&Je(N,k*U()),u%4===0&&!k&&Ie(N,U()),(u===4||u===12)&&z.snareOn&&Le(N,U()),ae&&u!==12&&Le(N,.5+(u-12)*.15),u%2===0&&(Ye(N,u%4===2?.8*U():.45*U(),u===14&&(z.openHat||T>.4)),(z.chrup.has(u)||T>.4&&u%4===2&&Math.random()<.5)&&ke(N,U()),T>.3&&u%4===2&&de(N,.8),Se(N,z.line[u/2],U(),.3),z.pianoStabs.has(u)&&ne.ints.slice(0,3).forEach((b,X)=>ce(N+X*.008,ne.bass+12+b,U()*.8,.26,M,{index:.8,decayIdx:.16})),(z.brass.has(u)||T>.6&&u===14)&&fe(N,ne.ints.slice(0,3).map(b=>ne.bass+24+b),.18,.04,"sawtooth",.975))}function gt(){if(!o||o.state!=="running"||r)return;const u=o.currentTime;for(L<u&&(L=u+.05);L<u+Zg;)wt(F,L),a.musicSteps++,L+=s,F=(F+1)%16,F===0&&(G++,K++,K>=Pa[P].bars&&(K=0,P=P+1>=Pa.length?1:P+1));u>E&&(p.frequency.cancelScheduledValues(u),p.frequency.setTargetAtTime(H*(re/H)**(w?T:0),u,.25))}function Tt(){O||(P=0,K=0,G=0,F=0,L=o.currentTime+.15,O=setInterval(gt,Jg))}function I(){o&&(w||f.gain.setTargetAtTime(1,o.currentTime,.3))}function Et(u,R){e?(Q(u,.07,230*an(.9,1.15),{type:"triangle",fEnd:130,gain:.15*R}),Me(u,.035,{f0:2200*an(.9,1.2),q:1,gain:.08*R,attack:.001})):(Q(u,.14,115*an(.9,1.1),{fEnd:62,gain:.2*R}),Me(u,.05,{type:"lowpass",f0:420,gain:.08*R,attack:.002}))}function it(u,R){Me(u,.9,{f0:R?350:2600,f1:R?2600:350,q:.9,gain:.13,attack:.45})}function rt(u){Me(u,.12,{type:"lowpass",f0:1200,gain:.2,attack:.002}),Q(u,.1,140,{fEnd:70,gain:.22}),Me(u+.06,.09,{type:"highpass",f0:5e3,gain:.07,attack:.002});for(const[R,q]of[[2637,.08],[3520,.05],[1319,.05]])Q(u+.1,1.1,R,{gain:q,attack:.002});[69,72,76,79].forEach((R,q)=>ce(u+.45+q*.17,R,.75,.3,c,{index:1.1})),[57,64,67,72,76].forEach((R,q)=>ce(u+1.2+q*.012,R,.8,.9,c,{index:1.1}))}function he(u){const R=(q,N,ne,ee)=>N.forEach((U,k)=>ce(u+q+k*.018,U,ne,ee,c,{index:.8,decayIdx:.2}));R(0,[48,64,67,71],.7,.22),R(.2,[36,60,64,67,71,74,79],.9,1)}function _t(){r||document.hidden||(o||xe(),o.resume().then(()=>{o.state==="running"&&!r&&(Tt(),I())},()=>{}))}const Fe=()=>{if(_t(),o&&o.state==="running")for(const u of["pointerdown","keydown","click"])window.removeEventListener(u,Fe,!0)};for(const u of["pointerdown","keydown","click"])window.addEventListener(u,Fe,!0);const Ne=document.createElement("button");Ne.id="mute",Ne.type="button",Ne.setAttribute("aria-label","Mute sound"),Ne.innerHTML='<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z" fill="currentColor"/><path class="on" d="M15.5 9a4 4 0 0 1 0 6M18 6.5a8 8 0 0 1 0 11"/><path class="off" d="M16 9.5l5 5M21 9.5l-5 5"/></svg>';const A=()=>Ne.setAttribute("aria-pressed",String(r));return A(),Ne.addEventListener("click",()=>{r=!r;try{localStorage.setItem(Sc,r?"1":"0")}catch{}A(),r?o&&(l.gain.setTargetAtTime(0,o.currentTime,.03),setTimeout(()=>{r&&o&&o.suspend()},250)):(o||xe(),l.gain.setTargetAtTime(.9,o.currentTime,.05),_t())}),(document.querySelector("main")??document.body).appendChild(Ne),document.addEventListener("visibilitychange",()=>{o&&(document.hidden?o.suspend():_t())}),Object.defineProperty(window,"__ncAudio",{get:()=>({state:o?o.state:"none",muted:r,bpm:n,heat:T,counts:{...a},nodes:{created:a.nodesCreated,active:a.nodesCreated-a.nodesFreed}})}),{moveStart(u){if(!te())return;a.moves++;const R=o.currentTime+.005,q=f.gain;q.cancelScheduledValues(R),q.setTargetAtTime(.5,R,.008),q.setTargetAtTime(.85,R+.06,.1);const N=(e?1300:850)*an(.85,1.2)*(.38/u)**.4,ne=N*an(1.3,1.8),ee=Math.random()<.5;Me(R,u,{f0:ee?ne:N,f1:ee?N:ne,q:1.1,gain:(e?.09:.08)*an(.7,1),attack:u*.4,pan:an(-.3,.3)});const U=R+u*.9;Et(U,an(.6,1)),Math.random()<.5&&Et(U+an(.02,.06),an(.3,.5))},lift(u){if(!te())return;a.lifts++;const R=o.currentTime+.005;it(R,u),u||Et(R+.95,.8)},reveal(u=0){if(!te())return;a.reveals++;const R=o.currentTime+u;e?rt(R):he(R);const q=o.currentTime;E=R+1.3,p.frequency.cancelScheduledValues(q),p.frequency.setTargetAtTime(re*1.3,R,.03),p.frequency.setTargetAtTime(H,R+.7,.5),ye(R,1),Ie(R,1),[72,76,79,84].forEach((N,ne)=>nt(R+ne*.09,N,.16,1)),z&&fe(R,z.chord.ints.slice(0,3).map(N=>z.chord.bass+24+N),.5,.05,"sawtooth")},click(){if(!te())return;a.clicks++;const u=o.currentTime+.005;Q(u,.04,e?1500:1900,{type:"triangle",gain:.1}),Me(u,.02,{type:"highpass",f0:4e3,gain:.06,attack:.001})},setMixing(u,R=0){if(T=u?Math.max(0,Math.min(1,R)):0,u===w){u&&!_&&T>=.9&&te()&&(_=!0,mt(o.currentTime+.02,(1-T)*e_+.5));return}w=u,_=!1,I()}}}const Gr=document.querySelector("#scene");let sn;try{sn=new ug({antialias:!0,powerPreference:"high-performance"})}catch{const i=document.getElementById("error");throw i.hidden=!1,i.textContent="Enable WebGL in your browser to play.",new Error("WebGL unavailable")}sn.setPixelRatio(Math.min(devicePixelRatio,2));sn.shadowMap.enabled=!0;sn.shadowMap.type=Ds;sn.toneMapping=Vr;sn.toneMappingExposure=.95;Gr.appendChild(sn.domElement);const gn=new Xc;gn.background=new Be("#080c0a");gn.fog=new Yo("#080c0a",.022);const wn=new cn(28,1,1,120),gu=new qs(sn),_u=new Og,n_=gu.fromScene(_u,.04);gn.environment=n_.texture;gn.environmentIntensity=.8;_u.dispose();gu.dispose();gn.add(new cf("#a9bfb0","#0c100d",.35));const Tn=new hf("#ffd9a0",850,40,.34,1,2);Tn.position.set(-2.5,11,4.5);Tn.target.position.set(0,0,0);Tn.castShadow=!0;Tn.shadow.mapSize.set(2048,2048);Tn.shadow.camera.near=4;Tn.shadow.camera.far=25;Tn.shadow.normalBias=.02;Tn.shadow.bias=-2e-4;Tn.shadow.radius=4;gn.add(Tn,Tn.target);const vu=new su("#8fc4ff",2.2);vu.position.set(3,5,-9);const xu=new su("#ff9a5c",1.4);xu.position.set(-8,4,-4);gn.add(vu,xu);const Un=(i,e,t,n=0,s=0,r=0)=>{const a=new ht(i,e);return a.position.set(n,s,r),a.castShadow=!0,a.receiveShadow=!0,t.add(a),a},hi=(i,e=.5,t=0)=>new yi({color:i,roughness:e,metalness:t}),Mu=Un(new Ln(200,200),hi("#040605",.95),gn,0,-1.25,0);Mu.rotation.x=-Math.PI/2;const fn=new Yn;gn.add(fn);const sl=hi("#2c2018",.38);Un(new Ri(4.5,4.46,.22,128),sl,fn,0,-.16);Un(new Ri(4.43,4.3,.15,128),hi("#141a16",.32,.3),fn,0,-.34);Un(new Ri(2.8,2.65,.65,96),hi("#141b17",.5,.12),gn,0,-.85);const rl=hi("#0f6340",.96);Un(new Ri(4.25,4.25,.045,128),rl,fn,0,-.0325);function Fs(i,e,t,n,s,r=0,a=0){const o=Un(new qr(i,e,8,128),t,n,r,s,a);return o.rotation.x=Math.PI/2,o}const Jr=hi("#bca16b",.33,.7);Fs(4.32,.019,Jr,fn,-.035);Fs(4.03,.008,hi("#749077",.8,.1),fn,.002);Un(new ui(.09,.006,.55),Jr,fn,0,.004,3.88);for(let i=0;i<64;i++){const e=i/64*Math.PI*2,t=Un(new ui(.013,.003,i%8===0?.13:.045),Jr,fn,Math.sin(e)*4.14,0,Math.cos(e)*4.14);t.rotation.y=e}const al=new nu({color:"#a8441f",metalness:.9,roughness:.28,clearcoat:.3,clearcoatRoughness:.2}),Dr=hi("#e7b67d",.24,.8),i_=[[0,1.15],[.3,1.15],[.335,1.11],[.445,.06],[.47,.015],[.495,.025],[.495,.08],[.375,1.2],[.35,1.25],[0,1.25]].map(i=>new be(...i)),s_=new Xr(i_,64),Hr=Array.from({length:9},()=>{const i=new Yn;return fn.add(i),Un(s_,al,i),Fs(.483,.018,Dr,i,.06),Fs(.365,.012,Dr,i,1.19),Fs(.468,.006,Dr,i,.2),i}),Su=Un(new Ws(.215,40,24),new nu({color:"#a6f000",emissive:"#4f9a00",emissiveIntensity:.9,roughness:.2,metalness:.1,clearcoat:1}),fn,0,.215,0),ps=document.body.classList.contains("space")?"space":document.body.classList.contains("street")?"street":"classic",yu=ps==="space",Eu={scene:gn,floor:Mu,table:fn,walnut:sl,felt:rl,copper:al,trim:Dr,brass:Jr,ball:Su,cups:Hr,camera:wn,renderer:sn};let xi=null;yu&&(xi=fg(Eu));hg({space:yu,copper:al,walnut:sl,felt:rl,anisotropy:sn.capabilities.getMaxAnisotropy()});ps==="street"&&(xi=Fg(Eu),sn.toneMappingExposure=1.05);let Sn,Kt=0,Tc=0;const cs=new Vg(sn,new nn(1,1,{type:tn,samples:4}));cs.addPass(new Wg(gn,wn));const[r_,a_,o_]={classic:[.4,.55,.9],space:[.8,.6,.9],street:[.55,.6,1]}[ps],l_=new ls(new be(1,1),r_,a_,o_);cs.addPass(l_);cs.addPass(new qg);const c_=document.querySelector("#phase"),bc=document.querySelector("#phase-label"),u_=document.querySelector("#phase-bar"),h_={classic:{show:"Watch the ball",mix:"Shuffling…",reveal:"There it is!"},space:{show:"Watch the ball",mix:"Shuffling…",reveal:"There it is!"},street:{show:"Keep your eyes on the ball, kid",mix:"Hands are faster than eyes…",reveal:"Hustle complete"}}[ps];let Os;function La(i,e=0){i!==Os&&(Os=i,bc.textContent=h_[i],bc.animate([{opacity:0,transform:"translateY(-8px)"},{opacity:1,transform:"none"}],{duration:450,easing:"ease-out"}),c_.dataset.phase=i),u_.style.transform=`scaleX(${e})`}const Tu=yg({variant:ps}),Ps=t_({variant:ps});document.querySelector(".hud-toggle").addEventListener("click",()=>ol());let To=-1,bo=-1;const Ls=3.8,bs=Ls+Cs+.5;function bu(){const i=Sn;do Sn=Kg();while(i&&JSON.stringify(Sn.moves)===JSON.stringify(i.moves));for(const e of Hr)e.rotation.z=0;Kt=0,To=-1,bo=-1,Tu.reset()}function f_(){const i=Math.max(0,Math.min(Cs,Kt-Ls)),e=$g(Sn,i);for(const p of e)Hr[p.cup].position.set(p.x,0,p.z);let t=0;Kt<1?t=1.9*Lr(Kt):Kt<2.6?t=1.9:Kt<Ls?t=1.9*(1-Lr((Kt-2.6)/1)):Kt>=bs&&(t=1.9*Lr((Kt-bs)/1));const n=Hr[Sn.target];n.position.y=t;const s=t/1.9;n.rotation.z=.14*Math.sin(Math.PI*s)+.05*s;const r=n.position,o=(Kt-bs-.6)/.55,l=o>0&&o<1?.45*4*o*(1-o):0;Su.position.set(r.x,.215+l,r.z),fn.rotation.y=-2*Math.PI*i/15,Kt<Ls?La("show"):Kt<bs?La("mix",i/Cs):La("reveal"),Ps.setMixing(Os==="mix",i/Cs);const c=Kt>=bs?2:Kt>=2.6?1:0;c!==To&&(To=c,Ps.lift(c!==1),c===2&&Ps.reveal(.9));const h=Kt>=Ls?Sn.moves.findIndex(p=>i>=p.start&&i<p.end):-1;h!==bo&&(bo=h,h>=0&&Ps.moveStart(Sn.moves[h].end-Sn.moves[h].start)),Tu.update({phase:Os,mixingTime:i,duration:Cs,moves:Sn.moves,tableDeg:fn.rotation.y*180/Math.PI,ballSlot:Os==="reveal"?Sn.final.indexOf(Sn.target):null})}document.querySelector("#restart").addEventListener("click",()=>{Ps.click(),bu()});const Ac=new B(0,.5,0),Ao=[];for(let i=0;i<32;i++){const e=i/32*Math.PI*2;Ao.push(new B(Math.sin(e)*4.5,-.45,Math.cos(e)*4.5)),Ao.push(new B(Math.sin(e)*3.1,1.9+1.25,Math.cos(e)*3.1))}function d_(i,e){const t=i/e;wn.aspect=t,wn.clearViewOffset(),wn.updateProjectionMatrix();const n=rs.degToRad(62-18*rs.clamp((t-.45)/1.2,0,1)),s=new B(0,Math.sin(n),Math.cos(n)),r=1-2*56/e,a=document.querySelector(".hud.open .hud-panel"),o=a&&!So(i)?e-a.getBoundingClientRect().top+12:0,l=-1+2*Math.max(76,e*.1,o)/e,c=So(i),h=1-(20+c)/i,p=g=>{wn.position.copy(s).multiplyScalar(g).add(Ac),wn.lookAt(Ac),wn.updateMatrixWorld();let d=1/0,M=-1/0,C=0;for(const y of Ao){const w=y.clone().project(wn);d=Math.min(d,w.y),M=Math.max(M,w.y),C=Math.max(C,Math.abs(w.x))}return{minY:d,maxY:M,x:C}};let f=8,m=120;for(let g=0;g<24;g++){const d=(f+m)/2,M=p(d);M.x<=h&&M.maxY-M.minY<=r-l?m=d:f=d}const v=p(m),S=((r+l)/2-(v.maxY+v.minY)/2)*e/2;wn.setViewOffset(i,e,c/2,S,i,e)}function ol(){const i=Gr.clientWidth,e=Gr.clientHeight;!i||!e||(sn.setSize(i,e,!1),cs.setPixelRatio(sn.getPixelRatio()),cs.setSize(i,e),d_(i,e))}new ResizeObserver(ol).observe(Gr);ol();bu();let wo=performance.now();document.addEventListener("visibilitychange",()=>{wo=performance.now()});sn.setAnimationLoop(i=>{var e;if(!document.hidden){const t=Math.max(0,i-wo)/1e3;Kt+=t,Tc+=t}wo=i,f_(),(e=xi==null?void 0:xi.update)==null||e.call(xi,Tc),cs.render()});
