(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pl="170",hn={ROTATE:0,DOLLY:1,PAN:2},Pn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},iu=0,gc=1,su=2,Qh=1,td=2,Yn=3,ti=0,je=1,Ne=2,vi=0,xs=1,Ia=2,vc=3,_c=4,ru=5,Oi=100,ou=101,au=102,lu=103,cu=104,hu=200,du=201,uu=202,fu=203,Da=204,Ua=205,pu=206,mu=207,gu=208,vu=209,_u=210,xu=211,yu=212,Mu=213,bu=214,Na=0,Oa=1,Fa=2,Ts=3,ka=4,Ba=5,za=6,Ha=7,ed=0,Su=1,wu=2,_i=0,Eu=1,Tu=2,Au=3,nd=4,Cu=5,Ru=6,Pu=7,id=300,As=301,Cs=302,Va=303,Ga=304,Ao=306,vo=1e3,ki=1001,Wa=1002,sn=1003,Lu=1004,Cr=1005,Ln=1006,Ho=1007,Bi=1008,ei=1009,sd=1010,rd=1011,hr=1012,Ll=1013,Hi=1014,In=1015,yr=1016,Il=1017,Dl=1018,Rs=1020,od=35902,ad=1021,ld=1022,Mn=1023,cd=1024,hd=1025,ys=1026,Ps=1027,Ul=1028,Nl=1029,dd=1030,Ol=1031,Fl=1033,lo=33776,co=33777,ho=33778,uo=33779,Xa=35840,qa=35841,Ya=35842,$a=35843,ja=36196,Za=37492,Ja=37496,Ka=37808,Qa=37809,tl=37810,el=37811,nl=37812,il=37813,sl=37814,rl=37815,ol=37816,al=37817,ll=37818,cl=37819,hl=37820,dl=37821,fo=36492,ul=36494,fl=36495,ud=36283,pl=36284,ml=36285,gl=36286,Iu=3200,Du=3201,fd=0,Uu=1,gi="",Me="srgb",Bs="srgb-linear",Co="linear",he="srgb",Ji=7680,xc=519,Nu=512,Ou=513,Fu=514,pd=515,ku=516,Bu=517,zu=518,Hu=519,yc=35044,Mc="300 es",$n=2e3,_o=2001;class qi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bc=1234567;const Ms=Math.PI/180,dr=180/Math.PI;function Yi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]).toLowerCase()}function Ie(n,t,e){return Math.max(t,Math.min(e,n))}function kl(n,t){return(n%t+t)%t}function Vu(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Gu(n,t,e){return n!==t?(e-n)/(t-n):0}function sr(n,t,e){return(1-e)*n+e*t}function Wu(n,t,e,i){return sr(n,t,1-Math.exp(-e*i))}function Xu(n,t=1){return t-Math.abs(kl(n,t*2)-t)}function qu(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Yu(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function $u(n,t){return n+Math.floor(Math.random()*(t-n+1))}function ju(n,t){return n+Math.random()*(t-n)}function Zu(n){return n*(.5-Math.random())}function Ju(n){n!==void 0&&(bc=n);let t=bc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ku(n){return n*Ms}function Qu(n){return n*dr}function tf(n){return(n&n-1)===0&&n!==0}function ef(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function nf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function sf(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),d=r((t-i)/2),u=o((t-i)/2),f=r((i-t)/2),m=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*d,l*u,a*c);break;case"YZY":n.set(l*u,a*h,l*d,a*c);break;case"ZXZ":n.set(l*d,l*u,a*h,a*c);break;case"XZX":n.set(a*h,l*m,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*m,a*c);break;case"ZYZ":n.set(l*m,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ps(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ye(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ur={DEG2RAD:Ms,RAD2DEG:dr,generateUUID:Yi,clamp:Ie,euclideanModulo:kl,mapLinear:Vu,inverseLerp:Gu,lerp:sr,damp:Wu,pingpong:Xu,smoothstep:qu,smootherstep:Yu,randInt:$u,randFloat:ju,randFloatSpread:Zu,seededRandom:Ju,degToRad:Ku,radToDeg:Qu,isPowerOfTwo:tf,ceilPowerOfTwo:ef,floorPowerOfTwo:nf,setQuaternionFromProperEuler:sf,normalize:Ye,denormalize:ps};class ct{constructor(t=0,e=0){ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,i,s,r,o,a,l,c){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],m=i[8],v=s[0],g=s[3],p=s[6],x=s[1],y=s[4],_=s[7],P=s[2],E=s[5],R=s[8];return r[0]=o*v+a*x+l*P,r[3]=o*g+a*y+l*E,r[6]=o*p+a*_+l*R,r[1]=c*v+h*x+d*P,r[4]=c*g+h*y+d*E,r[7]=c*p+h*_+d*R,r[2]=u*v+f*x+m*P,r[5]=u*g+f*y+m*E,r[8]=u*p+f*_+m*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,m=e*d+i*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return t[0]=d*v,t[1]=(s*c-h*i)*v,t[2]=(a*i-s*o)*v,t[3]=u*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(i*l-c*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Vo.makeScale(t,e)),this}rotate(t){return this.premultiply(Vo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vo=new qt;function md(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function fr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function rf(){const n=fr("canvas");return n.style.display="block",n}const Sc={};function nr(n){n in Sc||(Sc[n]=!0,console.warn(n))}function of(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function af(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function lf(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ne={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===he&&(n.r=Zn(n.r),n.g=Zn(n.g),n.b=Zn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===he&&(n.r=bs(n.r),n.g=bs(n.g),n.b=bs(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===gi?Co:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Zn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function bs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const wc=[.64,.33,.3,.6,.15,.06],Ec=[.2126,.7152,.0722],Tc=[.3127,.329],Ac=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cc=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ne.define({[Bs]:{primaries:wc,whitePoint:Tc,transfer:Co,toXYZ:Ac,fromXYZ:Cc,luminanceCoefficients:Ec,workingColorSpaceConfig:{unpackColorSpace:Me},outputColorSpaceConfig:{drawingBufferColorSpace:Me}},[Me]:{primaries:wc,whitePoint:Tc,transfer:he,toXYZ:Ac,fromXYZ:Cc,luminanceCoefficients:Ec,outputColorSpaceConfig:{drawingBufferColorSpace:Me}}});let Ki;class cf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ki===void 0&&(Ki=fr("canvas")),Ki.width=t.width,Ki.height=t.height;const i=Ki.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ki}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=fr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zn(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Zn(e[i]/255)*255):e[i]=Zn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let hf=0;class gd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=Yi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Go(s[o].image)):r.push(Go(s[o]))}else r=Go(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Go(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?cf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let df=0;class He extends qi{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,i=ki,s=ki,r=Ln,o=Bi,a=Mn,l=ei,c=He.DEFAULT_ANISOTROPY,h=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=Yi(),this.name="",this.source=new gd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==id)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vo:t.x=t.x-Math.floor(t.x);break;case ki:t.x=t.x<0?0:1;break;case Wa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vo:t.y=t.y-Math.floor(t.y);break;case ki:t.y=t.y<0?0:1;break;case Wa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=id;He.DEFAULT_ANISOTROPY=1;class Ee{constructor(t=0,e=0,i=0,s=1){Ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,_=(f+1)/2,P=(p+1)/2,E=(h+u)/4,R=(d+v)/4,L=(m+g)/4;return y>_&&y>P?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=E/i,r=R/i):_>P?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=E/s,r=L/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=R/r,s=L/r),this.set(i,s,r,e),this}let x=Math.sqrt((g-m)*(g-m)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(d-v)/x,this.z=(u-h)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uf extends qi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new He(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new gd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends uf{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class vd extends He{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ff extends He{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bi{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3];const u=r[o+0],f=r[o+1],m=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=m,t[e+3]=v;return}if(d!==v||l!==u||c!==f||h!==m){let g=1-a;const p=l*u+c*f+h*m+d*v,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const P=Math.sqrt(y),E=Math.atan2(P,p*x);g=Math.sin(g*E)/P,a=Math.sin(a*E)/P}const _=a*x;if(l=l*g+u*_,c=c*g+f*_,h=h*g+m*_,d=d*g+v*_,g===1-a){const P=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=P,c*=P,h*=P,d*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-a*f,t[e+2]=c*m+h*f+a*u-l*d,t[e+3]=h*m-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,i=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Wo.copy(this).projectOnVector(t),this.sub(Wo)}reflect(t){return this.sub(Wo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wo=new A,Rc=new bi;class ii{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,pn):pn.fromBufferAttribute(r,o),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rr.copy(i.boundingBox)),Rr.applyMatrix4(t.matrixWorld),this.union(Rr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(js),Pr.subVectors(this.max,js),Qi.subVectors(t.a,js),ts.subVectors(t.b,js),es.subVectors(t.c,js),li.subVectors(ts,Qi),ci.subVectors(es,ts),Ei.subVectors(Qi,es);let e=[0,-li.z,li.y,0,-ci.z,ci.y,0,-Ei.z,Ei.y,li.z,0,-li.x,ci.z,0,-ci.x,Ei.z,0,-Ei.x,-li.y,li.x,0,-ci.y,ci.x,0,-Ei.y,Ei.x,0];return!Xo(e,Qi,ts,es,Pr)||(e=[1,0,0,0,1,0,0,0,1],!Xo(e,Qi,ts,es,Pr))?!1:(Lr.crossVectors(li,ci),e=[Lr.x,Lr.y,Lr.z],Xo(e,Qi,ts,es,Pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Hn=[new A,new A,new A,new A,new A,new A,new A,new A],pn=new A,Rr=new ii,Qi=new A,ts=new A,es=new A,li=new A,ci=new A,Ei=new A,js=new A,Pr=new A,Lr=new A,Ti=new A;function Xo(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ti.fromArray(n,r);const a=s.x*Math.abs(Ti.x)+s.y*Math.abs(Ti.y)+s.z*Math.abs(Ti.z),l=t.dot(Ti),c=e.dot(Ti),h=i.dot(Ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const pf=new ii,Zs=new A,qo=new A;class zs{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):pf.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zs.subVectors(t,this.center);const e=Zs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Zs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zs.copy(t.center).add(qo)),this.expandByPoint(Zs.copy(t.center).sub(qo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vn=new A,Yo=new A,Ir=new A,hi=new A,$o=new A,Dr=new A,jo=new A;class Ro{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Yo.copy(t).add(e).multiplyScalar(.5),Ir.copy(e).sub(t).normalize(),hi.copy(this.origin).sub(Yo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ir),a=hi.dot(this.direction),l=-hi.dot(Ir),c=hi.lengthSq(),h=Math.abs(1-o*o);let d,u,f,m;if(h>0)if(d=o*l-a,u=o*a-l,m=r*h,d>=0)if(u>=-m)if(u<=m){const v=1/h;d*=v,u*=v,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Yo).addScaledVector(Ir,u),f}intersectSphere(t,e){Vn.subVectors(t.center,this.origin);const i=Vn.dot(this.direction),s=Vn.dot(Vn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,i,s,r){$o.subVectors(e,t),Dr.subVectors(i,t),jo.crossVectors($o,Dr);let o=this.direction.dot(jo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hi.subVectors(this.origin,t);const l=a*this.direction.dot(Dr.crossVectors(hi,Dr));if(l<0)return null;const c=a*this.direction.dot($o.cross(hi));if(c<0||l+c>o)return null;const h=-a*hi.dot(jo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,i,s,r,o,a,l,c,h,d,u,f,m,v,g){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,d,u,f,m,v,g)}set(t,e,i,s,r,o,a,l,c,h,d,u,f,m,v,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/ns.setFromMatrixColumn(t,0).length(),r=1/ns.setFromMatrixColumn(t,1).length(),o=1/ns.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,f=o*d,m=a*h,v=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-v*c,e[9]=-a*l,e[2]=v-u*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,m=c*h,v=c*d;e[0]=u+v*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=v+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,m=c*h,v=c*d;e[0]=u-v*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=v-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,f=o*d,m=a*h,v=a*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,f=o*c,m=a*l,v=a*c;e[0]=l*h,e[4]=v-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-v*d}else if(t.order==="XZY"){const u=o*l,f=o*c,m=a*l,v=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=o*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mf,t,gf)}lookAt(t,e,i){const s=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),di.crossVectors(i,tn),di.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),di.crossVectors(i,tn)),di.normalize(),Ur.crossVectors(tn,di),s[0]=di.x,s[4]=Ur.x,s[8]=tn.x,s[1]=di.y,s[5]=Ur.y,s[9]=tn.y,s[2]=di.z,s[6]=Ur.z,s[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],m=i[2],v=i[6],g=i[10],p=i[14],x=i[3],y=i[7],_=i[11],P=i[15],E=s[0],R=s[4],L=s[8],b=s[12],M=s[1],I=s[5],V=s[9],S=s[13],U=s[2],z=s[6],N=s[10],k=s[14],F=s[3],W=s[7],Y=s[11],Q=s[15];return r[0]=o*E+a*M+l*U+c*F,r[4]=o*R+a*I+l*z+c*W,r[8]=o*L+a*V+l*N+c*Y,r[12]=o*b+a*S+l*k+c*Q,r[1]=h*E+d*M+u*U+f*F,r[5]=h*R+d*I+u*z+f*W,r[9]=h*L+d*V+u*N+f*Y,r[13]=h*b+d*S+u*k+f*Q,r[2]=m*E+v*M+g*U+p*F,r[6]=m*R+v*I+g*z+p*W,r[10]=m*L+v*V+g*N+p*Y,r[14]=m*b+v*S+g*k+p*Q,r[3]=x*E+y*M+_*U+P*F,r[7]=x*R+y*I+_*z+P*W,r[11]=x*L+y*V+_*N+P*Y,r[15]=x*b+y*S+_*k+P*Q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],v=t[7],g=t[11],p=t[15];return m*(+r*l*d-s*c*d-r*a*u+i*c*u+s*a*f-i*l*f)+v*(+e*l*f-e*c*u+r*o*u-s*o*f+s*c*h-r*l*h)+g*(+e*c*d-e*a*f-r*o*d+i*o*f+r*a*h-i*c*h)+p*(-s*a*h-e*l*d+e*a*u+s*o*d-i*o*u+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],v=t[13],g=t[14],p=t[15],x=d*g*c-v*u*c+v*l*f-a*g*f-d*l*p+a*u*p,y=m*u*c-h*g*c-m*l*f+o*g*f+h*l*p-o*u*p,_=h*v*c-m*d*c+m*a*f-o*v*f-h*a*p+o*d*p,P=m*d*l-h*v*l-m*a*u+o*v*u+h*a*g-o*d*g,E=e*x+i*y+s*_+r*P;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/E;return t[0]=x*R,t[1]=(v*u*r-d*g*r-v*s*f+i*g*f+d*s*p-i*u*p)*R,t[2]=(a*g*r-v*l*r+v*s*c-i*g*c-a*s*p+i*l*p)*R,t[3]=(d*l*r-a*u*r-d*s*c+i*u*c+a*s*f-i*l*f)*R,t[4]=y*R,t[5]=(h*g*r-m*u*r+m*s*f-e*g*f-h*s*p+e*u*p)*R,t[6]=(m*l*r-o*g*r-m*s*c+e*g*c+o*s*p-e*l*p)*R,t[7]=(o*u*r-h*l*r+h*s*c-e*u*c-o*s*f+e*l*f)*R,t[8]=_*R,t[9]=(m*d*r-h*v*r-m*i*f+e*v*f+h*i*p-e*d*p)*R,t[10]=(o*v*r-m*a*r+m*i*c-e*v*c-o*i*p+e*a*p)*R,t[11]=(h*a*r-o*d*r-h*i*c+e*d*c+o*i*f-e*a*f)*R,t[12]=P*R,t[13]=(h*v*s-m*d*s+m*i*u-e*v*u-h*i*g+e*d*g)*R,t[14]=(m*a*s-o*v*s-m*i*l+e*v*l+o*i*g-e*a*g)*R,t[15]=(o*d*s-h*a*s+h*i*l-e*d*l-o*i*u+e*a*u)*R,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,m=r*d,v=o*h,g=o*d,p=a*d,x=l*c,y=l*h,_=l*d,P=i.x,E=i.y,R=i.z;return s[0]=(1-(v+p))*P,s[1]=(f+_)*P,s[2]=(m-y)*P,s[3]=0,s[4]=(f-_)*E,s[5]=(1-(u+p))*E,s[6]=(g+x)*E,s[7]=0,s[8]=(m+y)*R,s[9]=(g-x)*R,s[10]=(1-(u+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=ns.set(s[0],s[1],s[2]).length();const o=ns.set(s[4],s[5],s[6]).length(),a=ns.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],mn.copy(this);const c=1/r,h=1/o,d=1/a;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=d,mn.elements[9]*=d,mn.elements[10]*=d,e.setFromRotationMatrix(mn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=$n){const l=this.elements,c=2*r/(e-t),h=2*r/(i-s),d=(e+t)/(e-t),u=(i+s)/(i-s);let f,m;if(a===$n)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===_o)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=$n){const l=this.elements,c=1/(e-t),h=1/(i-s),d=1/(o-r),u=(e+t)*c,f=(i+s)*h;let m,v;if(a===$n)m=(o+r)*d,v=-2*d;else if(a===_o)m=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ns=new A,mn=new fe,mf=new A(0,0,0),gf=new A(1,1,1),di=new A,Ur=new A,tn=new A,Pc=new fe,Lc=new bi;class Nn{constructor(t=0,e=0,i=0,s=Nn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ie(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Pc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Lc.setFromEuler(this),this.setFromQuaternion(Lc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nn.DEFAULT_ORDER="XYZ";class Bl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vf=0;const Ic=new A,is=new bi,Gn=new fe,Nr=new A,Js=new A,_f=new A,xf=new bi,Dc=new A(1,0,0),Uc=new A(0,1,0),Nc=new A(0,0,1),Oc={type:"added"},yf={type:"removed"},ss={type:"childadded",child:null},Zo={type:"childremoved",child:null};class ye extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new A,e=new Nn,i=new bi,s=new A(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new qt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.multiply(is),this}rotateOnWorldAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.premultiply(is),this}rotateX(t){return this.rotateOnAxis(Dc,t)}rotateY(t){return this.rotateOnAxis(Uc,t)}rotateZ(t){return this.rotateOnAxis(Nc,t)}translateOnAxis(t,e){return Ic.copy(t).applyQuaternion(this.quaternion),this.position.add(Ic.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Dc,t)}translateY(t){return this.translateOnAxis(Uc,t)}translateZ(t){return this.translateOnAxis(Nc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Nr.copy(t):Nr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Js,Nr,this.up):Gn.lookAt(Nr,Js,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),is.setFromRotationMatrix(Gn),this.quaternion.premultiply(is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Oc),ss.child=t,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yf),Zo.child=t,this.dispatchEvent(Zo),Zo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Oc),ss.child=t,this.dispatchEvent(ss),ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,t,_f),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,xf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}ye.DEFAULT_UP=new A(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new A,Wn=new A,Jo=new A,Xn=new A,rs=new A,os=new A,Fc=new A,Ko=new A,Qo=new A,ta=new A,ea=new Ee,na=new Ee,ia=new Ee;class cn{constructor(t=new A,e=new A,i=new A){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),gn.subVectors(t,e),s.cross(gn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){gn.subVectors(s,e),Wn.subVectors(i,e),Jo.subVectors(t,e);const o=gn.dot(gn),a=gn.dot(Wn),l=gn.dot(Jo),c=Wn.dot(Wn),h=Wn.dot(Jo),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xn.x),l.addScaledVector(o,Xn.y),l.addScaledVector(a,Xn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return ea.setScalar(0),na.setScalar(0),ia.setScalar(0),ea.fromBufferAttribute(t,e),na.fromBufferAttribute(t,i),ia.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ea,r.x),o.addScaledVector(na,r.y),o.addScaledVector(ia,r.z),o}static isFrontFacing(t,e,i,s){return gn.subVectors(i,e),Wn.subVectors(t,e),gn.cross(Wn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),gn.cross(Wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return cn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;rs.subVectors(s,i),os.subVectors(r,i),Ko.subVectors(t,i);const l=rs.dot(Ko),c=os.dot(Ko);if(l<=0&&c<=0)return e.copy(i);Qo.subVectors(t,s);const h=rs.dot(Qo),d=os.dot(Qo);if(h>=0&&d<=h)return e.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(rs,o);ta.subVectors(t,r);const f=rs.dot(ta),m=os.dot(ta);if(m>=0&&f<=m)return e.copy(r);const v=f*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(i).addScaledVector(os,a);const g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return Fc.subVectors(r,s),a=(d-h)/(d-h+(f-m)),e.copy(s).addScaledVector(Fc,a);const p=1/(g+v+u);return o=v*p,a=u*p,e.copy(i).addScaledVector(rs,o).addScaledVector(os,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const _d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Or={h:0,s:0,l:0};function sa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Zt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=i,ne.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ne.workingColorSpace){if(t=kl(t,1),e=Ie(e,0,1),i=Ie(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=sa(o,r,t+1/3),this.g=sa(o,r,t),this.b=sa(o,r,t-1/3)}return ne.toWorkingColorSpace(this,s),this}setStyle(t,e=Me){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Me){const i=_d[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zn(t.r),this.g=Zn(t.g),this.b=Zn(t.b),this}copyLinearToSRGB(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Me){return ne.fromWorkingColorSpace(We.copy(this),t),Math.round(Ie(We.r*255,0,255))*65536+Math.round(Ie(We.g*255,0,255))*256+Math.round(Ie(We.b*255,0,255))}getHexString(t=Me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(We.copy(this),e);const i=We.r,s=We.g,r=We.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=Me){ne.fromWorkingColorSpace(We.copy(this),t);const e=We.r,i=We.g,s=We.b;return t!==Me?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ui),this.setHSL(ui.h+t,ui.s+e,ui.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ui),t.getHSL(Or);const i=sr(ui.h,Or.h,e),s=sr(ui.s,Or.s,e),r=sr(ui.l,Or.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new Zt;Zt.NAMES=_d;let Mf=0;class Hs extends qi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=Yi(),this.name="",this.blending=xs,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Da,this.blendDst=Ua,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(i.blending=this.blending),this.side!==ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Da&&(i.blendSrc=this.blendSrc),this.blendDst!==Ua&&(i.blendDst=this.blendDst),this.blendEquation!==Oi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Qt extends Hs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=ed,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new A,Fr=new ct;class bn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=yc,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Fr.fromBufferAttribute(this,e),Fr.applyMatrix3(t),this.setXY(e,Fr.x,Fr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ps(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ye(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ps(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ps(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ps(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ps(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),i=Ye(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),i=Ye(i,this.array),s=Ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),i=Ye(i,this.array),s=Ye(s,this.array),r=Ye(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yc&&(t.usage=this.usage),t}}class xd extends bn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class yd extends bn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Yt extends bn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let bf=0;const on=new fe,ra=new ye,as=new A,en=new ii,Ks=new ii,ke=new A;class Se extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(md(t)?yd:xd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new qt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,i){return on.makeTranslation(t,e,i),this.applyMatrix4(on),this}scale(t,e,i){return on.makeScale(t,e,i),this.applyMatrix4(on),this}lookAt(t){return ra.lookAt(t),ra.updateMatrix(),this.applyMatrix4(ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Yt(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];en.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const i=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ks.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(en.min,Ks.min),en.expandByPoint(ke),ke.addVectors(en.max,Ks.max),en.expandByPoint(ke)):(en.expandByPoint(Ks.min),en.expandByPoint(Ks.max))}en.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)ke.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ke));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ke.fromBufferAttribute(a,c),l&&(as.fromBufferAttribute(t,c),ke.add(as)),s=Math.max(s,i.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new A,l[L]=new A;const c=new A,h=new A,d=new A,u=new ct,f=new ct,m=new ct,v=new A,g=new A;function p(L,b,M){c.fromBufferAttribute(i,L),h.fromBufferAttribute(i,b),d.fromBufferAttribute(i,M),u.fromBufferAttribute(r,L),f.fromBufferAttribute(r,b),m.fromBufferAttribute(r,M),h.sub(c),d.sub(c),f.sub(u),m.sub(u);const I=1/(f.x*m.y-m.x*f.y);isFinite(I)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(I),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(I),a[L].add(v),a[b].add(v),a[M].add(v),l[L].add(g),l[b].add(g),l[M].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let L=0,b=x.length;L<b;++L){const M=x[L],I=M.start,V=M.count;for(let S=I,U=I+V;S<U;S+=3)p(t.getX(S+0),t.getX(S+1),t.getX(S+2))}const y=new A,_=new A,P=new A,E=new A;function R(L){P.fromBufferAttribute(s,L),E.copy(P);const b=a[L];y.copy(b),y.sub(P.multiplyScalar(P.dot(b))).normalize(),_.crossVectors(E,b);const I=_.dot(l[L])<0?-1:1;o.setXYZW(L,y.x,y.y,y.z,I)}for(let L=0,b=x.length;L<b;++L){const M=x[L],I=M.start,V=M.count;for(let S=I,U=I+V;S<U;S+=3)R(t.getX(S+0)),R(t.getX(S+1)),R(t.getX(S+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new bn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const s=new A,r=new A,o=new A,a=new A,l=new A,c=new A,h=new A,d=new A;if(t)for(let u=0,f=t.count;u<f;u+=3){const m=t.getX(u+0),v=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,m=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let p=0;p<h;p++)u[m++]=c[f++]}return new bn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Se,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kc=new fe,Ai=new Ro,kr=new zs,Bc=new A,Br=new A,zr=new A,Hr=new A,oa=new A,Vr=new A,zc=new A,Gr=new A;class ht extends ye{constructor(t=new Se,e=new Qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Vr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(oa.fromBufferAttribute(d,t),o?Vr.addScaledVector(oa,h):Vr.addScaledVector(oa.sub(e),h))}e.add(Vr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),kr.copy(i.boundingSphere),kr.applyMatrix4(r),Ai.copy(t.ray).recast(t.near),!(kr.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(kr,Bc)===null||Ai.origin.distanceToSquared(Bc)>(t.far-t.near)**2))&&(kc.copy(r).invert(),Ai.copy(t.ray).applyMatrix4(kc),!(i.boundingBox!==null&&Ai.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ai)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=u.length;m<v;m++){const g=u[m],p=o[g.materialIndex],x=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let _=x,P=y;_<P;_+=3){const E=a.getX(_),R=a.getX(_+1),L=a.getX(_+2);s=Wr(this,p,t,i,c,h,d,E,R,L),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const x=a.getX(g),y=a.getX(g+1),_=a.getX(g+2);s=Wr(this,o,t,i,c,h,d,x,y,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=u.length;m<v;m++){const g=u[m],p=o[g.materialIndex],x=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=x,P=y;_<P;_+=3){const E=_,R=_+1,L=_+2;s=Wr(this,p,t,i,c,h,d,E,R,L),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const x=g,y=g+1,_=g+2;s=Wr(this,o,t,i,c,h,d,x,y,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Sf(n,t,e,i,s,r,o,a){let l;if(t.side===je?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===ti,a),l===null)return null;Gr.copy(a),Gr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Gr);return c<e.near||c>e.far?null:{distance:c,point:Gr.clone(),object:n}}function Wr(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Br),n.getVertexPosition(l,zr),n.getVertexPosition(c,Hr);const h=Sf(n,t,e,i,Br,zr,Hr,zc);if(h){const d=new A;cn.getBarycoord(zc,Br,zr,Hr,d),s&&(h.uv=cn.getInterpolatedAttribute(s,a,l,c,d,new ct)),r&&(h.uv1=cn.getInterpolatedAttribute(r,a,l,c,d,new ct)),o&&(h.normal=cn.getInterpolatedAttribute(o,a,l,c,d,new A),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new A,materialIndex:0};cn.getNormal(Br,zr,Hr,u.normal),h.face=u,h.barycoord=d}return h}class re extends Se{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;m("z","y","x",-1,-1,i,e,t,o,r,0),m("z","y","x",1,-1,i,e,-t,o,r,1),m("x","z","y",1,1,t,i,e,s,o,2),m("x","z","y",1,-1,t,i,-e,s,o,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(d,2));function m(v,g,p,x,y,_,P,E,R,L,b){const M=_/R,I=P/L,V=_/2,S=P/2,U=E/2,z=R+1,N=L+1;let k=0,F=0;const W=new A;for(let Y=0;Y<N;Y++){const Q=Y*I-S;for(let st=0;st<z;st++){const pt=st*M-V;W[v]=pt*x,W[g]=Q*y,W[p]=U,c.push(W.x,W.y,W.z),W[v]=0,W[g]=0,W[p]=E>0?1:-1,h.push(W.x,W.y,W.z),d.push(st/R),d.push(1-Y/L),k+=1}}for(let Y=0;Y<L;Y++)for(let Q=0;Q<R;Q++){const st=u+Q+z*Y,pt=u+Q+z*(Y+1),B=u+(Q+1)+z*(Y+1),K=u+(Q+1)+z*Y;l.push(st,pt,K),l.push(pt,B,K),F+=6}a.addGroup(f,F,b),f+=F,u+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new re(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ls(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function $e(n){const t={};for(let e=0;e<n.length;e++){const i=Ls(n[e]);for(const s in i)t[s]=i[s]}return t}function wf(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Md(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const Ef={clone:Ls,merge:$e};var Tf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Af=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Si extends Hs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tf,this.fragmentShader=Af,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ls(t.uniforms),this.uniformsGroups=wf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class bd extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=$n}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fi=new A,Hc=new ct,Vc=new ct;class ln extends bd{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=dr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ms*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return dr*2*Math.atan(Math.tan(Ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fi.x,fi.y).multiplyScalar(-t/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fi.x,fi.y).multiplyScalar(-t/fi.z)}getViewSize(t,e){return this.getViewBounds(t,Hc,Vc),e.subVectors(Vc,Hc)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ms*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ls=-90,cs=1;class Cf extends ye{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ln(ls,cs,t,e);s.layers=this.layers,this.add(s);const r=new ln(ls,cs,t,e);r.layers=this.layers,this.add(r);const o=new ln(ls,cs,t,e);o.layers=this.layers,this.add(o);const a=new ln(ls,cs,t,e);a.layers=this.layers,this.add(a);const l=new ln(ls,cs,t,e);l.layers=this.layers,this.add(l);const c=new ln(ls,cs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===$n)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_o)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Sd extends He{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:As,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Rf extends Vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Sd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new re(5,5,5),r=new Si({name:"CubemapFromEquirect",uniforms:Ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:je,blending:vi});r.uniforms.tEquirect.value=e;const o=new ht(s,r),a=e.minFilter;return e.minFilter===Bi&&(e.minFilter=Ln),new Cf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const aa=new A,Pf=new A,Lf=new qt;class pi{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=aa.subVectors(i,e).cross(Pf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(aa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Lf.getNormalMatrix(t),s=this.coplanarPoint(aa).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new zs,Xr=new A;class zl{constructor(t=new pi,e=new pi,i=new pi,s=new pi,r=new pi,o=new pi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=$n){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],m=s[9],v=s[10],g=s[11],p=s[12],x=s[13],y=s[14],_=s[15];if(i[0].setComponents(l-r,u-c,g-f,_-p).normalize(),i[1].setComponents(l+r,u+c,g+f,_+p).normalize(),i[2].setComponents(l+o,u+h,g+m,_+x).normalize(),i[3].setComponents(l-o,u-h,g-m,_-x).normalize(),i[4].setComponents(l-a,u-d,g-v,_-y).normalize(),e===$n)i[5].setComponents(l+a,u+d,g+v,_+y).normalize();else if(e===_o)i[5].setComponents(a,d,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(t){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Xr.x=s.normal.x>0?t.max.x:t.min.x,Xr.y=s.normal.y>0?t.max.y:t.min.y,Xr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wd(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function If(n){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){const m=d[u],v=d[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){const v=d[f];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class dn extends Se{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],m=[],v=[],g=[];for(let p=0;p<h;p++){const x=p*u-o;for(let y=0;y<c;y++){const _=y*d-r;m.push(_,-x,0),v.push(0,0,1),g.push(y/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const y=x+c*p,_=x+c*(p+1),P=x+1+c*(p+1),E=x+1+c*p;f.push(y,_,E),f.push(_,P,E)}this.setIndex(f),this.setAttribute("position",new Yt(m,3)),this.setAttribute("normal",new Yt(v,3)),this.setAttribute("uv",new Yt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Df=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uf=`#ifdef USE_ALPHAHASH
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
#endif`,Nf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Of=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ff=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bf=`#ifdef USE_AOMAP
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
#endif`,zf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hf=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Vf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qf=`#ifdef USE_IRIDESCENCE
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
#endif`,Yf=`#ifdef USE_BUMPMAP
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
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ep=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,np=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,ip=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sp=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,op=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ap=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cp="gl_FragColor = linearToOutputTexel( gl_FragColor );",hp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,up=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fp=`#ifdef USE_ENVMAP
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
#endif`,pp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_p=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yp=`#ifdef USE_GRADIENTMAP
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
}`,Mp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wp=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Ep=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Tp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Lp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ip=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Dp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Up=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Np=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Op=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vp=`#if defined( USE_POINTS_UV )
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
#endif`,Gp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$p=`#ifdef USE_MORPHTARGETS
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
#endif`,jp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Jp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,em=`#ifdef USE_NORMALMAP
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
#endif`,nm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,im=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,om=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,am=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,um=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,mm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,gm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,vm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,_m=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xm=`#ifdef USE_SKINNING
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
#endif`,ym=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mm=`#ifdef USE_SKINNING
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
#endif`,bm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Em=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tm=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Am=`#ifdef USE_TRANSMISSION
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
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Im=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dm=`uniform sampler2D t2D;
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
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,km=`#include <common>
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
}`,Bm=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zm=`#define DISTANCE
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
}`,Hm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`uniform float scale;
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
}`,Xm=`uniform vec3 diffuse;
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
}`,qm=`#include <common>
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
}`,Ym=`uniform vec3 diffuse;
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
}`,$m=`#define LAMBERT
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
}`,jm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Zm=`#define MATCAP
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
}`,Jm=`#define MATCAP
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
}`,Km=`#define NORMAL
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
}`,Qm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tg=`#define PHONG
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
}`,eg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,ng=`#define STANDARD
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
}`,ig=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,sg=`#define TOON
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
}`,rg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,og=`uniform float size;
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
}`,ag=`uniform vec3 diffuse;
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
}`,lg=`#include <common>
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
}`,cg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,hg=`uniform float rotation;
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
}`,dg=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:Df,alphahash_pars_fragment:Uf,alphamap_fragment:Nf,alphamap_pars_fragment:Of,alphatest_fragment:Ff,alphatest_pars_fragment:kf,aomap_fragment:Bf,aomap_pars_fragment:zf,batching_pars_vertex:Hf,batching_vertex:Vf,begin_vertex:Gf,beginnormal_vertex:Wf,bsdfs:Xf,iridescence_fragment:qf,bumpmap_pars_fragment:Yf,clipping_planes_fragment:$f,clipping_planes_pars_fragment:jf,clipping_planes_pars_vertex:Zf,clipping_planes_vertex:Jf,color_fragment:Kf,color_pars_fragment:Qf,color_pars_vertex:tp,color_vertex:ep,common:np,cube_uv_reflection_fragment:ip,defaultnormal_vertex:sp,displacementmap_pars_vertex:rp,displacementmap_vertex:op,emissivemap_fragment:ap,emissivemap_pars_fragment:lp,colorspace_fragment:cp,colorspace_pars_fragment:hp,envmap_fragment:dp,envmap_common_pars_fragment:up,envmap_pars_fragment:fp,envmap_pars_vertex:pp,envmap_physical_pars_fragment:Ep,envmap_vertex:mp,fog_vertex:gp,fog_pars_vertex:vp,fog_fragment:_p,fog_pars_fragment:xp,gradientmap_pars_fragment:yp,lightmap_pars_fragment:Mp,lights_lambert_fragment:bp,lights_lambert_pars_fragment:Sp,lights_pars_begin:wp,lights_toon_fragment:Tp,lights_toon_pars_fragment:Ap,lights_phong_fragment:Cp,lights_phong_pars_fragment:Rp,lights_physical_fragment:Pp,lights_physical_pars_fragment:Lp,lights_fragment_begin:Ip,lights_fragment_maps:Dp,lights_fragment_end:Up,logdepthbuf_fragment:Np,logdepthbuf_pars_fragment:Op,logdepthbuf_pars_vertex:Fp,logdepthbuf_vertex:kp,map_fragment:Bp,map_pars_fragment:zp,map_particle_fragment:Hp,map_particle_pars_fragment:Vp,metalnessmap_fragment:Gp,metalnessmap_pars_fragment:Wp,morphinstance_vertex:Xp,morphcolor_vertex:qp,morphnormal_vertex:Yp,morphtarget_pars_vertex:$p,morphtarget_vertex:jp,normal_fragment_begin:Zp,normal_fragment_maps:Jp,normal_pars_fragment:Kp,normal_pars_vertex:Qp,normal_vertex:tm,normalmap_pars_fragment:em,clearcoat_normal_fragment_begin:nm,clearcoat_normal_fragment_maps:im,clearcoat_pars_fragment:sm,iridescence_pars_fragment:rm,opaque_fragment:om,packing:am,premultiplied_alpha_fragment:lm,project_vertex:cm,dithering_fragment:hm,dithering_pars_fragment:dm,roughnessmap_fragment:um,roughnessmap_pars_fragment:fm,shadowmap_pars_fragment:pm,shadowmap_pars_vertex:mm,shadowmap_vertex:gm,shadowmask_pars_fragment:vm,skinbase_vertex:_m,skinning_pars_vertex:xm,skinning_vertex:ym,skinnormal_vertex:Mm,specularmap_fragment:bm,specularmap_pars_fragment:Sm,tonemapping_fragment:wm,tonemapping_pars_fragment:Em,transmission_fragment:Tm,transmission_pars_fragment:Am,uv_pars_fragment:Cm,uv_pars_vertex:Rm,uv_vertex:Pm,worldpos_vertex:Lm,background_vert:Im,background_frag:Dm,backgroundCube_vert:Um,backgroundCube_frag:Nm,cube_vert:Om,cube_frag:Fm,depth_vert:km,depth_frag:Bm,distanceRGBA_vert:zm,distanceRGBA_frag:Hm,equirect_vert:Vm,equirect_frag:Gm,linedashed_vert:Wm,linedashed_frag:Xm,meshbasic_vert:qm,meshbasic_frag:Ym,meshlambert_vert:$m,meshlambert_frag:jm,meshmatcap_vert:Zm,meshmatcap_frag:Jm,meshnormal_vert:Km,meshnormal_frag:Qm,meshphong_vert:tg,meshphong_frag:eg,meshphysical_vert:ng,meshphysical_frag:ig,meshtoon_vert:sg,meshtoon_frag:rg,points_vert:og,points_frag:ag,shadow_vert:lg,shadow_frag:cg,sprite_vert:hg,sprite_frag:dg},_t={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Cn={basic:{uniforms:$e([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:$e([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Zt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:$e([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:$e([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:$e([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Zt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:$e([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:$e([_t.points,_t.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:$e([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:$e([_t.common,_t.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:$e([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:$e([_t.sprite,_t.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:$e([_t.common,_t.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:$e([_t.lights,_t.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Cn.physical={uniforms:$e([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const qr={r:0,b:0,g:0},Ri=new Nn,ug=new fe;function fg(n,t,e,i,s,r,o){const a=new Zt(0);let l=r===!0?0:1,c,h,d=null,u=0,f=null;function m(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?e:t).get(y)),y}function v(x){let y=!1;const _=m(x);_===null?p(a,l):_&&_.isColor&&(p(_,1),y=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(x,y){const _=m(y);_&&(_.isCubeTexture||_.mapping===Ao)?(h===void 0&&(h=new ht(new re(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:Ls(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ri.copy(y.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ug.makeRotationFromEuler(Ri)),h.material.toneMapped=ne.getTransfer(_.colorSpace)!==he,(d!==_||u!==_.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,d=_,u=_.version,f=n.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ht(new dn(2,2),new Si({name:"BackgroundMaterial",uniforms:Ls(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ne.getTransfer(_.colorSpace)!==he,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||u!==_.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=_,u=_.version,f=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,y){x.getRGB(qr,Md(n)),i.buffers.color.setClear(qr.r,qr.g,qr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:v,addToRenderList:g}}function pg(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,o=!1;function a(M,I,V,S,U){let z=!1;const N=d(S,V,I);r!==N&&(r=N,c(r.object)),z=f(M,S,V,U),z&&m(M,S,V,U),U!==null&&t.update(U,n.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,_(M,I,V,S),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function d(M,I,V){const S=V.wireframe===!0;let U=i[M.id];U===void 0&&(U={},i[M.id]=U);let z=U[I.id];z===void 0&&(z={},U[I.id]=z);let N=z[S];return N===void 0&&(N=u(l()),z[S]=N),N}function u(M){const I=[],V=[],S=[];for(let U=0;U<e;U++)I[U]=0,V[U]=0,S[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:V,attributeDivisors:S,object:M,attributes:{},index:null}}function f(M,I,V,S){const U=r.attributes,z=I.attributes;let N=0;const k=V.getAttributes();for(const F in k)if(k[F].location>=0){const Y=U[F];let Q=z[F];if(Q===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor)),Y===void 0||Y.attribute!==Q||Q&&Y.data!==Q.data)return!0;N++}return r.attributesNum!==N||r.index!==S}function m(M,I,V,S){const U={},z=I.attributes;let N=0;const k=V.getAttributes();for(const F in k)if(k[F].location>=0){let Y=z[F];Y===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(Y=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(Y=M.instanceColor));const Q={};Q.attribute=Y,Y&&Y.data&&(Q.data=Y.data),U[F]=Q,N++}r.attributes=U,r.attributesNum=N,r.index=S}function v(){const M=r.newAttributes;for(let I=0,V=M.length;I<V;I++)M[I]=0}function g(M){p(M,0)}function p(M,I){const V=r.newAttributes,S=r.enabledAttributes,U=r.attributeDivisors;V[M]=1,S[M]===0&&(n.enableVertexAttribArray(M),S[M]=1),U[M]!==I&&(n.vertexAttribDivisor(M,I),U[M]=I)}function x(){const M=r.newAttributes,I=r.enabledAttributes;for(let V=0,S=I.length;V<S;V++)I[V]!==M[V]&&(n.disableVertexAttribArray(V),I[V]=0)}function y(M,I,V,S,U,z,N){N===!0?n.vertexAttribIPointer(M,I,V,U,z):n.vertexAttribPointer(M,I,V,S,U,z)}function _(M,I,V,S){v();const U=S.attributes,z=V.getAttributes(),N=I.defaultAttributeValues;for(const k in z){const F=z[k];if(F.location>=0){let W=U[k];if(W===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(W=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(W=M.instanceColor)),W!==void 0){const Y=W.normalized,Q=W.itemSize,st=t.get(W);if(st===void 0)continue;const pt=st.buffer,B=st.type,K=st.bytesPerElement,at=B===n.INT||B===n.UNSIGNED_INT||W.gpuType===Ll;if(W.isInterleavedBufferAttribute){const rt=W.data,mt=rt.stride,At=W.offset;if(rt.isInstancedInterleavedBuffer){for(let Ot=0;Ot<F.locationSize;Ot++)p(F.location+Ot,rt.meshPerAttribute);M.isInstancedMesh!==!0&&S._maxInstanceCount===void 0&&(S._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ot=0;Ot<F.locationSize;Ot++)g(F.location+Ot);n.bindBuffer(n.ARRAY_BUFFER,pt);for(let Ot=0;Ot<F.locationSize;Ot++)y(F.location+Ot,Q/F.locationSize,B,Y,mt*K,(At+Q/F.locationSize*Ot)*K,at)}else{if(W.isInstancedBufferAttribute){for(let rt=0;rt<F.locationSize;rt++)p(F.location+rt,W.meshPerAttribute);M.isInstancedMesh!==!0&&S._maxInstanceCount===void 0&&(S._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let rt=0;rt<F.locationSize;rt++)g(F.location+rt);n.bindBuffer(n.ARRAY_BUFFER,pt);for(let rt=0;rt<F.locationSize;rt++)y(F.location+rt,Q/F.locationSize,B,Y,Q*K,Q/F.locationSize*rt*K,at)}}else if(N!==void 0){const Y=N[k];if(Y!==void 0)switch(Y.length){case 2:n.vertexAttrib2fv(F.location,Y);break;case 3:n.vertexAttrib3fv(F.location,Y);break;case 4:n.vertexAttrib4fv(F.location,Y);break;default:n.vertexAttrib1fv(F.location,Y)}}}}x()}function P(){L();for(const M in i){const I=i[M];for(const V in I){const S=I[V];for(const U in S)h(S[U].object),delete S[U];delete I[V]}delete i[M]}}function E(M){if(i[M.id]===void 0)return;const I=i[M.id];for(const V in I){const S=I[V];for(const U in S)h(S[U].object),delete S[U];delete I[V]}delete i[M.id]}function R(M){for(const I in i){const V=i[I];if(V[M.id]===void 0)continue;const S=V[M.id];for(const U in S)h(S[U].object),delete S[U];delete V[M.id]}}function L(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:b,dispose:P,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:g,disableUnusedAttributes:x}}function mg(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),e.update(h,i,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let f=0;for(let m=0;m<d;m++)f+=h[m];e.update(f,i,1)}function l(c,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],h[m],u[m]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let m=0;for(let v=0;v<d;v++)m+=h[v]*u[v];e.update(m,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function gg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Mn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const L=R===yr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ei&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==In&&!L)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=m>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:P,maxSamples:E}}function vg(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new pi,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const m=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,p=n.get(d);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{const x=r?0:i,y=x*4;let _=p.clippingState||null;l.value=_,_=h(m,u,y,f);for(let P=0;P!==y;++P)_[P]=e[P];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,m){const v=d!==null?d.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const p=f+v*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,_=f;y!==v;++y,_+=4)o.copy(d[y]).applyMatrix4(x,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function _g(n){let t=new WeakMap;function e(o,a){return a===Va?o.mapping=As:a===Ga&&(o.mapping=Cs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Va||a===Ga)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Rf(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Ed extends bd{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const gs=4,Gc=[.125,.215,.35,.446,.526,.582],Fi=20,la=new Ed,Wc=new Zt;let ca=null,ha=0,da=0,ua=!1;const Ni=(1+Math.sqrt(5))/2,hs=1/Ni,Xc=[new A(-Ni,hs,0),new A(Ni,hs,0),new A(-hs,0,Ni),new A(hs,0,Ni),new A(0,Ni,-hs),new A(0,Ni,hs),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class qc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){ca=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),da=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ca,ha,da),this._renderer.xr.enabled=ua,t.scissorTest=!1,Yr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===As||t.mapping===Cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ca=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),da=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:yr,format:Mn,colorSpace:Bs,depthBuffer:!1},s=Yc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yc(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xg(r)),this._blurMaterial=yg(r,t,e)}return s}_compileMaterial(t){const e=new ht(this._lodPlanes[0],t);this._renderer.compile(e,la)}_sceneToCubeUV(t,e,i,s){const a=new ln(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Wc),h.toneMapping=_i,h.autoClear=!1;const f=new Qt({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),m=new ht(new re,f);let v=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,v=!0):(f.color.copy(Wc),v=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;Yr(s,x*y,p>2?y:0,y,y),h.setRenderTarget(s),v&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=g}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===As||t.mapping===Cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$c());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ht(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Yr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,la)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Xc[(s-r-1)%Xc.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ht(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Fi-1),v=r/m,g=isFinite(r)?1+Math.floor(h*v):Fi;g>Fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Fi}`);const p=[];let x=0;for(let R=0;R<Fi;++R){const L=R/v,b=Math.exp(-L*L/2);p.push(b),R===0?x+=b:R<g&&(x+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/x;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:y}=this;u.dTheta.value=m,u.mipInt.value=y-i;const _=this._sizeLods[s],P=3*_*(s>y-gs?s-y+gs:0),E=4*(this._cubeSize-_);Yr(e,P,E,3*_,2*_),l.setRenderTarget(e),l.render(d,la)}}function xg(n){const t=[],e=[],i=[];let s=n;const r=n-gs+1+Gc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-gs?l=Gc[o-n+gs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,m=6,v=3,g=2,p=1,x=new Float32Array(v*m*f),y=new Float32Array(g*m*f),_=new Float32Array(p*m*f);for(let E=0;E<f;E++){const R=E%3*2/3-1,L=E>2?0:-1,b=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];x.set(b,v*m*E),y.set(u,g*m*E);const M=[E,E,E,E,E,E];_.set(M,p*m*E)}const P=new Se;P.setAttribute("position",new bn(x,v)),P.setAttribute("uv",new bn(y,g)),P.setAttribute("faceIndex",new bn(_,p)),t.push(P),s>gs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Yc(n,t,e){const i=new Vi(n,t,e);return i.texture.mapping=Ao,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Yr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function yg(n,t,e){const i=new Float32Array(Fi),s=new A(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function $c(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function jc(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Hl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Mg(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Va||l===Ga,h=l===As||l===Cs;if(c||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new qc(n)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new qc(n)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function bg(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&nr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Sg(n,t,e,i){const s={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);for(const m in u.morphAttributes){const v=u.morphAttributes[m];for(let g=0,p=v.length;g<p;g++)t.remove(v[g])}u.removeEventListener("dispose",o),delete s[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const m in u)t.update(u[m],n.ARRAY_BUFFER);const f=d.morphAttributes;for(const m in f){const v=f[m];for(let g=0,p=v.length;g<p;g++)t.update(v[g],n.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,m=d.attributes.position;let v=0;if(f!==null){const x=f.array;v=f.version;for(let y=0,_=x.length;y<_;y+=3){const P=x[y+0],E=x[y+1],R=x[y+2];u.push(P,E,E,R,R,P)}}else if(m!==void 0){const x=m.array;v=m.version;for(let y=0,_=x.length/3-1;y<_;y+=3){const P=y+0,E=y+1,R=y+2;u.push(P,E,E,R,R,P)}}else return;const g=new(md(u)?yd:xd)(u,1);g.version=v;const p=r.get(d);p&&t.remove(p),r.set(d,g)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function wg(n,t,e){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){n.drawElements(i,f,r,u*o),e.update(f,i,1)}function c(u,f,m){m!==0&&(n.drawElementsInstanced(i,f,r,u*o,m),e.update(f,i,m))}function h(u,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,i,1)}function d(u,f,m,v){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<u.length;p++)c(u[p]/o,f[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,r,u,0,v,0,m);let p=0;for(let x=0;x<m;x++)p+=f[x]*v[x];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Eg(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Tg(n,t,e){const i=new WeakMap,s=new Ee;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(a);if(u===void 0||u.count!==d){let M=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var f=M;u!==void 0&&u.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let _=0;m===!0&&(_=1),v===!0&&(_=2),g===!0&&(_=3);let P=a.attributes.position.count*_,E=1;P>t.maxTextureSize&&(E=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const R=new Float32Array(P*E*4*d),L=new vd(R,P,E,d);L.type=In,L.needsUpdate=!0;const b=_*4;for(let I=0;I<d;I++){const V=p[I],S=x[I],U=y[I],z=P*E*4*I;for(let N=0;N<V.count;N++){const k=N*b;m===!0&&(s.fromBufferAttribute(V,N),R[z+k+0]=s.x,R[z+k+1]=s.y,R[z+k+2]=s.z,R[z+k+3]=0),v===!0&&(s.fromBufferAttribute(S,N),R[z+k+4]=s.x,R[z+k+5]=s.y,R[z+k+6]=s.z,R[z+k+7]=0),g===!0&&(s.fromBufferAttribute(U,N),R[z+k+8]=s.x,R[z+k+9]=s.y,R[z+k+10]=s.z,R[z+k+11]=U.itemSize===4?s.w:1)}}u={count:d,texture:L,size:new ct(P,E)},i.set(a,u),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const v=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Ag(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Td extends He{constructor(t,e,i,s,r,o,a,l,c,h=ys){if(h!==ys&&h!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ys&&(i=Hi),i===void 0&&h===Ps&&(i=Rs),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ad=new He,Zc=new Td(1,1),Cd=new vd,Rd=new ff,Pd=new Sd,Jc=[],Kc=[],Qc=new Float32Array(16),th=new Float32Array(9),eh=new Float32Array(4);function Vs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Jc[s];if(r===void 0&&(r=new Float32Array(s),Jc[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Oe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Fe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Po(n,t){let e=Kc[t];e===void 0&&(e=new Int32Array(t),Kc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Cg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Rg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2fv(this.addr,t),Fe(e,t)}}function Pg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;n.uniform3fv(this.addr,t),Fe(e,t)}}function Lg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4fv(this.addr,t),Fe(e,t)}}function Ig(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,i))return;eh.set(i),n.uniformMatrix2fv(this.addr,!1,eh),Fe(e,i)}}function Dg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,i))return;th.set(i),n.uniformMatrix3fv(this.addr,!1,th),Fe(e,i)}}function Ug(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,i))return;Qc.set(i),n.uniformMatrix4fv(this.addr,!1,Qc),Fe(e,i)}}function Ng(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Og(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2iv(this.addr,t),Fe(e,t)}}function Fg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;n.uniform3iv(this.addr,t),Fe(e,t)}}function kg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4iv(this.addr,t),Fe(e,t)}}function Bg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function zg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2uiv(this.addr,t),Fe(e,t)}}function Hg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;n.uniform3uiv(this.addr,t),Fe(e,t)}}function Vg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4uiv(this.addr,t),Fe(e,t)}}function Gg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Zc.compareFunction=pd,r=Zc):r=Ad,e.setTexture2D(t||r,s)}function Wg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Rd,s)}function Xg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Pd,s)}function qg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Cd,s)}function Yg(n){switch(n){case 5126:return Cg;case 35664:return Rg;case 35665:return Pg;case 35666:return Lg;case 35674:return Ig;case 35675:return Dg;case 35676:return Ug;case 5124:case 35670:return Ng;case 35667:case 35671:return Og;case 35668:case 35672:return Fg;case 35669:case 35673:return kg;case 5125:return Bg;case 36294:return zg;case 36295:return Hg;case 36296:return Vg;case 35678:case 36198:case 36298:case 36306:case 35682:return Gg;case 35679:case 36299:case 36307:return Wg;case 35680:case 36300:case 36308:case 36293:return Xg;case 36289:case 36303:case 36311:case 36292:return qg}}function $g(n,t){n.uniform1fv(this.addr,t)}function jg(n,t){const e=Vs(t,this.size,2);n.uniform2fv(this.addr,e)}function Zg(n,t){const e=Vs(t,this.size,3);n.uniform3fv(this.addr,e)}function Jg(n,t){const e=Vs(t,this.size,4);n.uniform4fv(this.addr,e)}function Kg(n,t){const e=Vs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Qg(n,t){const e=Vs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function t0(n,t){const e=Vs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function e0(n,t){n.uniform1iv(this.addr,t)}function n0(n,t){n.uniform2iv(this.addr,t)}function i0(n,t){n.uniform3iv(this.addr,t)}function s0(n,t){n.uniform4iv(this.addr,t)}function r0(n,t){n.uniform1uiv(this.addr,t)}function o0(n,t){n.uniform2uiv(this.addr,t)}function a0(n,t){n.uniform3uiv(this.addr,t)}function l0(n,t){n.uniform4uiv(this.addr,t)}function c0(n,t,e){const i=this.cache,s=t.length,r=Po(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Fe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Ad,r[o])}function h0(n,t,e){const i=this.cache,s=t.length,r=Po(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Fe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Rd,r[o])}function d0(n,t,e){const i=this.cache,s=t.length,r=Po(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Fe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Pd,r[o])}function u0(n,t,e){const i=this.cache,s=t.length,r=Po(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Fe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Cd,r[o])}function f0(n){switch(n){case 5126:return $g;case 35664:return jg;case 35665:return Zg;case 35666:return Jg;case 35674:return Kg;case 35675:return Qg;case 35676:return t0;case 5124:case 35670:return e0;case 35667:case 35671:return n0;case 35668:case 35672:return i0;case 35669:case 35673:return s0;case 5125:return r0;case 36294:return o0;case 36295:return a0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return c0;case 35679:case 36299:case 36307:return h0;case 35680:case 36300:case 36308:case 36293:return d0;case 36289:case 36303:case 36311:case 36292:return u0}}class p0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Yg(e.type)}}class m0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=f0(e.type)}}class g0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const fa=/(\w+)(\])?(\[|\.)?/g;function nh(n,t){n.seq.push(t),n.map[t.id]=t}function v0(n,t,e){const i=n.name,s=i.length;for(fa.lastIndex=0;;){const r=fa.exec(i),o=fa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){nh(e,c===void 0?new p0(a,n,t):new m0(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new g0(a),nh(e,d)),e=d}}}class po{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);v0(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function ih(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const _0=37297;let x0=0;function y0(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const sh=new qt;function M0(n){ne._getMatrix(sh,ne.workingColorSpace,n);const t=`mat3( ${sh.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(n)){case Co:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function rh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+y0(n.getShaderSource(t),o)}else return s}function b0(n,t){const e=M0(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function S0(n,t){let e;switch(t){case Eu:e="Linear";break;case Tu:e="Reinhard";break;case Au:e="Cineon";break;case nd:e="ACESFilmic";break;case Ru:e="AgX";break;case Pu:e="Neutral";break;case Cu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const $r=new A;function w0(){ne.getLuminanceCoefficients($r);const n=$r.x.toFixed(4),t=$r.y.toFixed(4),e=$r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ir).join(`
`)}function T0(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function A0(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function ir(n){return n!==""}function oh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ah(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const C0=/^[ \t]*#include +<([\w\d./]+)>/gm;function vl(n){return n.replace(C0,P0)}const R0=new Map;function P0(n,t){let e=jt[t];if(e===void 0){const i=R0.get(t);if(i!==void 0)e=jt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return vl(e)}const L0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lh(n){return n.replace(L0,I0)}function I0(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ch(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function D0(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Qh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===td?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Yn&&(t="SHADOWMAP_TYPE_VSM"),t}function U0(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case As:case Cs:t="ENVMAP_TYPE_CUBE";break;case Ao:t="ENVMAP_TYPE_CUBE_UV";break}return t}function N0(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Cs:t="ENVMAP_MODE_REFRACTION";break}return t}function O0(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ed:t="ENVMAP_BLENDING_MULTIPLY";break;case Su:t="ENVMAP_BLENDING_MIX";break;case wu:t="ENVMAP_BLENDING_ADD";break}return t}function F0(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function k0(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=D0(e),c=U0(e),h=N0(e),d=O0(e),u=F0(e),f=E0(e),m=T0(r),v=s.createProgram();let g,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ir).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ir).join(`
`),p.length>0&&(p+=`
`)):(g=[ch(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),p=[ch(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_i?"#define TONE_MAPPING":"",e.toneMapping!==_i?jt.tonemapping_pars_fragment:"",e.toneMapping!==_i?S0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,b0("linearToOutputTexel",e.outputColorSpace),w0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ir).join(`
`)),o=vl(o),o=oh(o,e),o=ah(o,e),a=vl(a),a=oh(a,e),a=ah(a,e),o=lh(o),a=lh(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+g+o,_=x+p+a,P=ih(s,s.VERTEX_SHADER,y),E=ih(s,s.FRAGMENT_SHADER,_);s.attachShader(v,P),s.attachShader(v,E),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(I){if(n.debug.checkShaderErrors){const V=s.getProgramInfoLog(v).trim(),S=s.getShaderInfoLog(P).trim(),U=s.getShaderInfoLog(E).trim();let z=!0,N=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,P,E);else{const k=rh(s,P,"vertex"),F=rh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+V+`
`+k+`
`+F)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(S===""||U==="")&&(N=!1);N&&(I.diagnostics={runnable:z,programLog:V,vertexShader:{log:S,prefix:g},fragmentShader:{log:U,prefix:p}})}s.deleteShader(P),s.deleteShader(E),L=new po(s,v),b=A0(s,v)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,_0)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=x0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=E,this}let B0=0;class z0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new H0(t),e.set(t,i)),i}}class H0{constructor(t){this.id=B0++,this.code=t,this.usedTimes=0}}function V0(n,t,e,i,s,r,o){const a=new Bl,l=new z0,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures;let f=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,M,I,V,S){const U=V.fog,z=S.geometry,N=b.isMeshStandardMaterial?V.environment:null,k=(b.isMeshStandardMaterial?e:t).get(b.envMap||N),F=k&&k.mapping===Ao?k.image.height:null,W=m[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const Y=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Q=Y!==void 0?Y.length:0;let st=0;z.morphAttributes.position!==void 0&&(st=1),z.morphAttributes.normal!==void 0&&(st=2),z.morphAttributes.color!==void 0&&(st=3);let pt,B,K,at;if(W){const ce=Cn[W];pt=ce.vertexShader,B=ce.fragmentShader}else pt=b.vertexShader,B=b.fragmentShader,l.update(b),K=l.getVertexShaderID(b),at=l.getFragmentShaderID(b);const rt=n.getRenderTarget(),mt=n.state.buffers.depth.getReversed(),At=S.isInstancedMesh===!0,Ot=S.isBatchedMesh===!0,Gt=!!b.map,it=!!b.matcap,dt=!!k,O=!!b.aoMap,Ut=!!b.lightMap,ut=!!b.bumpMap,Tt=!!b.normalMap,vt=!!b.displacementMap,Bt=!!b.emissiveMap,wt=!!b.metalnessMap,D=!!b.roughnessMap,w=b.anisotropy>0,$=b.clearcoat>0,et=b.dispersion>0,lt=b.iridescence>0,nt=b.sheen>0,Pt=b.transmission>0,xt=w&&!!b.anisotropyMap,Et=$&&!!b.clearcoatMap,Jt=$&&!!b.clearcoatNormalMap,ft=$&&!!b.clearcoatRoughnessMap,Ct=lt&&!!b.iridescenceMap,zt=lt&&!!b.iridescenceThicknessMap,Ht=nt&&!!b.sheenColorMap,Rt=nt&&!!b.sheenRoughnessMap,ee=!!b.specularMap,$t=!!b.specularColorMap,pe=!!b.specularIntensityMap,G=Pt&&!!b.transmissionMap,yt=Pt&&!!b.thicknessMap,tt=!!b.gradientMap,ot=!!b.alphaMap,St=b.alphaTest>0,Mt=!!b.alphaHash,Wt=!!b.extensions;let we=_i;b.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(we=n.toneMapping);const Ve={shaderID:W,shaderType:b.type,shaderName:b.name,vertexShader:pt,fragmentShader:B,defines:b.defines,customVertexShaderID:K,customFragmentShaderID:at,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Ot,batchingColor:Ot&&S._colorsTexture!==null,instancing:At,instancingColor:At&&S.instanceColor!==null,instancingMorph:At&&S.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:rt===null?n.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Bs,alphaToCoverage:!!b.alphaToCoverage,map:Gt,matcap:it,envMap:dt,envMapMode:dt&&k.mapping,envMapCubeUVHeight:F,aoMap:O,lightMap:Ut,bumpMap:ut,normalMap:Tt,displacementMap:u&&vt,emissiveMap:Bt,normalMapObjectSpace:Tt&&b.normalMapType===Uu,normalMapTangentSpace:Tt&&b.normalMapType===fd,metalnessMap:wt,roughnessMap:D,anisotropy:w,anisotropyMap:xt,clearcoat:$,clearcoatMap:Et,clearcoatNormalMap:Jt,clearcoatRoughnessMap:ft,dispersion:et,iridescence:lt,iridescenceMap:Ct,iridescenceThicknessMap:zt,sheen:nt,sheenColorMap:Ht,sheenRoughnessMap:Rt,specularMap:ee,specularColorMap:$t,specularIntensityMap:pe,transmission:Pt,transmissionMap:G,thicknessMap:yt,gradientMap:tt,opaque:b.transparent===!1&&b.blending===xs&&b.alphaToCoverage===!1,alphaMap:ot,alphaTest:St,alphaHash:Mt,combine:b.combine,mapUv:Gt&&v(b.map.channel),aoMapUv:O&&v(b.aoMap.channel),lightMapUv:Ut&&v(b.lightMap.channel),bumpMapUv:ut&&v(b.bumpMap.channel),normalMapUv:Tt&&v(b.normalMap.channel),displacementMapUv:vt&&v(b.displacementMap.channel),emissiveMapUv:Bt&&v(b.emissiveMap.channel),metalnessMapUv:wt&&v(b.metalnessMap.channel),roughnessMapUv:D&&v(b.roughnessMap.channel),anisotropyMapUv:xt&&v(b.anisotropyMap.channel),clearcoatMapUv:Et&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&v(b.sheenRoughnessMap.channel),specularMapUv:ee&&v(b.specularMap.channel),specularColorMapUv:$t&&v(b.specularColorMap.channel),specularIntensityMapUv:pe&&v(b.specularIntensityMap.channel),transmissionMapUv:G&&v(b.transmissionMap.channel),thicknessMapUv:yt&&v(b.thicknessMap.channel),alphaMapUv:ot&&v(b.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Tt||w),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:S.isPoints===!0&&!!z.attributes.uv&&(Gt||ot),fog:!!U,useFog:b.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:mt,skinning:S.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:st,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:we,decodeVideoTexture:Gt&&b.map.isVideoTexture===!0&&ne.getTransfer(b.map.colorSpace)===he,decodeVideoTextureEmissive:Bt&&b.emissiveMap.isVideoTexture===!0&&ne.getTransfer(b.emissiveMap.colorSpace)===he,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ne,flipSided:b.side===je,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Wt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&b.extensions.multiDraw===!0||Ot)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ve.vertexUv1s=c.has(1),Ve.vertexUv2s=c.has(2),Ve.vertexUv3s=c.has(3),c.clear(),Ve}function p(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)M.push(I),M.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(x(M,b),y(M,b),M.push(n.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function x(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function _(b){const M=m[b.type];let I;if(M){const V=Cn[M];I=Ef.clone(V.uniforms)}else I=b.uniforms;return I}function P(b,M){let I;for(let V=0,S=h.length;V<S;V++){const U=h[V];if(U.cacheKey===M){I=U,++I.usedTimes;break}}return I===void 0&&(I=new k0(n,M,b,r),h.push(I)),I}function E(b){if(--b.usedTimes===0){const M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function R(b){l.remove(b)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:P,releaseProgram:E,releaseShaderCache:R,programs:h,dispose:L}}function G0(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function W0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function hh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function dh(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d,u,f,m,v,g){let p=n[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:m,renderOrder:d.renderOrder,z:v,group:g},n[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=m,p.renderOrder=d.renderOrder,p.z=v,p.group=g),t++,p}function a(d,u,f,m,v,g){const p=o(d,u,f,m,v,g);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(d,u,f,m,v,g){const p=o(d,u,f,m,v,g);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(d,u){e.length>1&&e.sort(d||W0),i.length>1&&i.sort(u||hh),s.length>1&&s.sort(u||hh)}function h(){for(let d=t,u=n.length;d<u;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function X0(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new dh,n.set(i,[o])):s>=r.length?(o=new dh,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function q0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new Zt};break;case"SpotLight":e={position:new A,direction:new A,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new A,halfWidth:new A,halfHeight:new A};break}return n[t.id]=e,e}}}function Y0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let $0=0;function j0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Z0(n){const t=new q0,e=Y0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new A);const s=new A,r=new fe,o=new fe;function a(c){let h=0,d=0,u=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,m=0,v=0,g=0,p=0,x=0,y=0,_=0,P=0,E=0,R=0;c.sort(j0);for(let b=0,M=c.length;b<M;b++){const I=c[b],V=I.color,S=I.intensity,U=I.distance,z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=V.r*S,d+=V.g*S,u+=V.b*S;else if(I.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(I.sh.coefficients[N],S);R++}else if(I.isDirectionalLight){const N=t.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const k=I.shadow,F=e.get(I);F.shadowIntensity=k.intensity,F.shadowBias=k.bias,F.shadowNormalBias=k.normalBias,F.shadowRadius=k.radius,F.shadowMapSize=k.mapSize,i.directionalShadow[f]=F,i.directionalShadowMap[f]=z,i.directionalShadowMatrix[f]=I.shadow.matrix,x++}i.directional[f]=N,f++}else if(I.isSpotLight){const N=t.get(I);N.position.setFromMatrixPosition(I.matrixWorld),N.color.copy(V).multiplyScalar(S),N.distance=U,N.coneCos=Math.cos(I.angle),N.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),N.decay=I.decay,i.spot[v]=N;const k=I.shadow;if(I.map&&(i.spotLightMap[P]=I.map,P++,k.updateMatrices(I),I.castShadow&&E++),i.spotLightMatrix[v]=k.matrix,I.castShadow){const F=e.get(I);F.shadowIntensity=k.intensity,F.shadowBias=k.bias,F.shadowNormalBias=k.normalBias,F.shadowRadius=k.radius,F.shadowMapSize=k.mapSize,i.spotShadow[v]=F,i.spotShadowMap[v]=z,_++}v++}else if(I.isRectAreaLight){const N=t.get(I);N.color.copy(V).multiplyScalar(S),N.halfWidth.set(I.width*.5,0,0),N.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=N,g++}else if(I.isPointLight){const N=t.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity),N.distance=I.distance,N.decay=I.decay,I.castShadow){const k=I.shadow,F=e.get(I);F.shadowIntensity=k.intensity,F.shadowBias=k.bias,F.shadowNormalBias=k.normalBias,F.shadowRadius=k.radius,F.shadowMapSize=k.mapSize,F.shadowCameraNear=k.camera.near,F.shadowCameraFar=k.camera.far,i.pointShadow[m]=F,i.pointShadowMap[m]=z,i.pointShadowMatrix[m]=I.shadow.matrix,y++}i.point[m]=N,m++}else if(I.isHemisphereLight){const N=t.get(I);N.skyColor.copy(I.color).multiplyScalar(S),N.groundColor.copy(I.groundColor).multiplyScalar(S),i.hemi[p]=N,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const L=i.hash;(L.directionalLength!==f||L.pointLength!==m||L.spotLength!==v||L.rectAreaLength!==g||L.hemiLength!==p||L.numDirectionalShadows!==x||L.numPointShadows!==y||L.numSpotShadows!==_||L.numSpotMaps!==P||L.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=_+P-E,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=R,L.directionalLength=f,L.pointLength=m,L.spotLength=v,L.rectAreaLength=g,L.hemiLength=p,L.numDirectionalShadows=x,L.numPointShadows=y,L.numSpotShadows=_,L.numSpotMaps=P,L.numLightProbes=R,i.version=$0++)}function l(c,h){let d=0,u=0,f=0,m=0,v=0;const g=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const y=c[p];if(y.isDirectionalLight){const _=i.directional[d];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),d++}else if(y.isSpotLight){const _=i.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const _=i.rectArea[m];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const _=i.point[u];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:i}}function uh(n){const t=new Z0(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function J0(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new uh(n),t.set(s,[a])):r>=o.length?(a=new uh(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class K0 extends Hs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Iu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Q0 extends Hs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const tv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ev=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nv(n,t,e){let i=new zl;const s=new ct,r=new ct,o=new Ee,a=new K0({depthPacking:Du}),l=new Q0,c={},h=e.maxTextureSize,d={[ti]:je,[je]:ti,[Ne]:Ne},u=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:tv,fragmentShader:ev}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const m=new Se;m.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ht(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qh;let p=this.type;this.render=function(E,R,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const b=n.getRenderTarget(),M=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),V=n.state;V.setBlending(vi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const S=p!==Yn&&this.type===Yn,U=p===Yn&&this.type!==Yn;for(let z=0,N=E.length;z<N;z++){const k=E[z],F=k.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const W=F.getFrameExtents();if(s.multiply(W),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,F.mapSize.y=r.y)),F.map===null||S===!0||U===!0){const Q=this.type!==Yn?{minFilter:sn,magFilter:sn}:{};F.map!==null&&F.map.dispose(),F.map=new Vi(s.x,s.y,Q),F.map.texture.name=k.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();const Y=F.getViewportCount();for(let Q=0;Q<Y;Q++){const st=F.getViewport(Q);o.set(r.x*st.x,r.y*st.y,r.x*st.z,r.y*st.w),V.viewport(o),F.updateMatrices(k,Q),i=F.getFrustum(),_(R,L,F.camera,k,this.type)}F.isPointLightShadow!==!0&&this.type===Yn&&x(F,L),F.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(b,M,I)};function x(E,R){const L=t.update(v);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Vi(s.x,s.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(R,null,L,u,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(R,null,L,f,v,null)}function y(E,R,L,b){let M=null;const I=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)M=I;else if(M=L.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const V=M.uuid,S=R.uuid;let U=c[V];U===void 0&&(U={},c[V]=U);let z=U[S];z===void 0&&(z=M.clone(),U[S]=z,R.addEventListener("dispose",P)),M=z}if(M.visible=R.visible,M.wireframe=R.wireframe,b===Yn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:d[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=n.properties.get(M);V.light=L}return M}function _(E,R,L,b,M){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===Yn)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);const S=t.update(E),U=E.material;if(Array.isArray(U)){const z=S.groups;for(let N=0,k=z.length;N<k;N++){const F=z[N],W=U[F.materialIndex];if(W&&W.visible){const Y=y(E,W,b,M);E.onBeforeShadow(n,E,R,L,S,Y,F),n.renderBufferDirect(L,null,S,Y,E,F),E.onAfterShadow(n,E,R,L,S,Y,F)}}}else if(U.visible){const z=y(E,U,b,M);E.onBeforeShadow(n,E,R,L,S,z,null),n.renderBufferDirect(L,null,S,z,E,null),E.onAfterShadow(n,E,R,L,S,z,null)}}const V=E.children;for(let S=0,U=V.length;S<U;S++)_(V[S],R,L,b,M)}function P(E){E.target.removeEventListener("dispose",P);for(const L in c){const b=c[L],M=E.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const iv={[Na]:Oa,[Fa]:za,[ka]:Ha,[Ts]:Ba,[Oa]:Na,[za]:Fa,[Ha]:ka,[Ba]:Ts};function sv(n,t){function e(){let G=!1;const yt=new Ee;let tt=null;const ot=new Ee(0,0,0,0);return{setMask:function(St){tt!==St&&!G&&(n.colorMask(St,St,St,St),tt=St)},setLocked:function(St){G=St},setClear:function(St,Mt,Wt,we,Ve){Ve===!0&&(St*=we,Mt*=we,Wt*=we),yt.set(St,Mt,Wt,we),ot.equals(yt)===!1&&(n.clearColor(St,Mt,Wt,we),ot.copy(yt))},reset:function(){G=!1,tt=null,ot.set(-1,0,0,0)}}}function i(){let G=!1,yt=!1,tt=null,ot=null,St=null;return{setReversed:function(Mt){if(yt!==Mt){const Wt=t.get("EXT_clip_control");yt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT);const we=St;St=null,this.setClear(we)}yt=Mt},getReversed:function(){return yt},setTest:function(Mt){Mt?rt(n.DEPTH_TEST):mt(n.DEPTH_TEST)},setMask:function(Mt){tt!==Mt&&!G&&(n.depthMask(Mt),tt=Mt)},setFunc:function(Mt){if(yt&&(Mt=iv[Mt]),ot!==Mt){switch(Mt){case Na:n.depthFunc(n.NEVER);break;case Oa:n.depthFunc(n.ALWAYS);break;case Fa:n.depthFunc(n.LESS);break;case Ts:n.depthFunc(n.LEQUAL);break;case ka:n.depthFunc(n.EQUAL);break;case Ba:n.depthFunc(n.GEQUAL);break;case za:n.depthFunc(n.GREATER);break;case Ha:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ot=Mt}},setLocked:function(Mt){G=Mt},setClear:function(Mt){St!==Mt&&(yt&&(Mt=1-Mt),n.clearDepth(Mt),St=Mt)},reset:function(){G=!1,tt=null,ot=null,St=null,yt=!1}}}function s(){let G=!1,yt=null,tt=null,ot=null,St=null,Mt=null,Wt=null,we=null,Ve=null;return{setTest:function(ce){G||(ce?rt(n.STENCIL_TEST):mt(n.STENCIL_TEST))},setMask:function(ce){yt!==ce&&!G&&(n.stencilMask(ce),yt=ce)},setFunc:function(ce,un,Bn){(tt!==ce||ot!==un||St!==Bn)&&(n.stencilFunc(ce,un,Bn),tt=ce,ot=un,St=Bn)},setOp:function(ce,un,Bn){(Mt!==ce||Wt!==un||we!==Bn)&&(n.stencilOp(ce,un,Bn),Mt=ce,Wt=un,we=Bn)},setLocked:function(ce){G=ce},setClear:function(ce){Ve!==ce&&(n.clearStencil(ce),Ve=ce)},reset:function(){G=!1,yt=null,tt=null,ot=null,St=null,Mt=null,Wt=null,we=null,Ve=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,f=[],m=null,v=!1,g=null,p=null,x=null,y=null,_=null,P=null,E=null,R=new Zt(0,0,0),L=0,b=!1,M=null,I=null,V=null,S=null,U=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,k=0;const F=n.getParameter(n.VERSION);F.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=k>=1):F.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=k>=2);let W=null,Y={};const Q=n.getParameter(n.SCISSOR_BOX),st=n.getParameter(n.VIEWPORT),pt=new Ee().fromArray(Q),B=new Ee().fromArray(st);function K(G,yt,tt,ot){const St=new Uint8Array(4),Mt=n.createTexture();n.bindTexture(G,Mt),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Wt=0;Wt<tt;Wt++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(yt,0,n.RGBA,1,1,ot,0,n.RGBA,n.UNSIGNED_BYTE,St):n.texImage2D(yt+Wt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,St);return Mt}const at={};at[n.TEXTURE_2D]=K(n.TEXTURE_2D,n.TEXTURE_2D,1),at[n.TEXTURE_CUBE_MAP]=K(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[n.TEXTURE_2D_ARRAY]=K(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),at[n.TEXTURE_3D]=K(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(n.DEPTH_TEST),o.setFunc(Ts),ut(!1),Tt(gc),rt(n.CULL_FACE),O(vi);function rt(G){h[G]!==!0&&(n.enable(G),h[G]=!0)}function mt(G){h[G]!==!1&&(n.disable(G),h[G]=!1)}function At(G,yt){return d[G]!==yt?(n.bindFramebuffer(G,yt),d[G]=yt,G===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=yt),G===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=yt),!0):!1}function Ot(G,yt){let tt=f,ot=!1;if(G){tt=u.get(yt),tt===void 0&&(tt=[],u.set(yt,tt));const St=G.textures;if(tt.length!==St.length||tt[0]!==n.COLOR_ATTACHMENT0){for(let Mt=0,Wt=St.length;Mt<Wt;Mt++)tt[Mt]=n.COLOR_ATTACHMENT0+Mt;tt.length=St.length,ot=!0}}else tt[0]!==n.BACK&&(tt[0]=n.BACK,ot=!0);ot&&n.drawBuffers(tt)}function Gt(G){return m!==G?(n.useProgram(G),m=G,!0):!1}const it={[Oi]:n.FUNC_ADD,[ou]:n.FUNC_SUBTRACT,[au]:n.FUNC_REVERSE_SUBTRACT};it[lu]=n.MIN,it[cu]=n.MAX;const dt={[hu]:n.ZERO,[du]:n.ONE,[uu]:n.SRC_COLOR,[Da]:n.SRC_ALPHA,[_u]:n.SRC_ALPHA_SATURATE,[gu]:n.DST_COLOR,[pu]:n.DST_ALPHA,[fu]:n.ONE_MINUS_SRC_COLOR,[Ua]:n.ONE_MINUS_SRC_ALPHA,[vu]:n.ONE_MINUS_DST_COLOR,[mu]:n.ONE_MINUS_DST_ALPHA,[xu]:n.CONSTANT_COLOR,[yu]:n.ONE_MINUS_CONSTANT_COLOR,[Mu]:n.CONSTANT_ALPHA,[bu]:n.ONE_MINUS_CONSTANT_ALPHA};function O(G,yt,tt,ot,St,Mt,Wt,we,Ve,ce){if(G===vi){v===!0&&(mt(n.BLEND),v=!1);return}if(v===!1&&(rt(n.BLEND),v=!0),G!==ru){if(G!==g||ce!==b){if((p!==Oi||_!==Oi)&&(n.blendEquation(n.FUNC_ADD),p=Oi,_=Oi),ce)switch(G){case xs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ia:n.blendFunc(n.ONE,n.ONE);break;case vc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _c:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case xs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ia:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case vc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _c:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}x=null,y=null,P=null,E=null,R.set(0,0,0),L=0,g=G,b=ce}return}St=St||yt,Mt=Mt||tt,Wt=Wt||ot,(yt!==p||St!==_)&&(n.blendEquationSeparate(it[yt],it[St]),p=yt,_=St),(tt!==x||ot!==y||Mt!==P||Wt!==E)&&(n.blendFuncSeparate(dt[tt],dt[ot],dt[Mt],dt[Wt]),x=tt,y=ot,P=Mt,E=Wt),(we.equals(R)===!1||Ve!==L)&&(n.blendColor(we.r,we.g,we.b,Ve),R.copy(we),L=Ve),g=G,b=!1}function Ut(G,yt){G.side===Ne?mt(n.CULL_FACE):rt(n.CULL_FACE);let tt=G.side===je;yt&&(tt=!tt),ut(tt),G.blending===xs&&G.transparent===!1?O(vi):O(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);const ot=G.stencilWrite;a.setTest(ot),ot&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Bt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?rt(n.SAMPLE_ALPHA_TO_COVERAGE):mt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ut(G){M!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),M=G)}function Tt(G){G!==iu?(rt(n.CULL_FACE),G!==I&&(G===gc?n.cullFace(n.BACK):G===su?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):mt(n.CULL_FACE),I=G}function vt(G){G!==V&&(N&&n.lineWidth(G),V=G)}function Bt(G,yt,tt){G?(rt(n.POLYGON_OFFSET_FILL),(S!==yt||U!==tt)&&(n.polygonOffset(yt,tt),S=yt,U=tt)):mt(n.POLYGON_OFFSET_FILL)}function wt(G){G?rt(n.SCISSOR_TEST):mt(n.SCISSOR_TEST)}function D(G){G===void 0&&(G=n.TEXTURE0+z-1),W!==G&&(n.activeTexture(G),W=G)}function w(G,yt,tt){tt===void 0&&(W===null?tt=n.TEXTURE0+z-1:tt=W);let ot=Y[tt];ot===void 0&&(ot={type:void 0,texture:void 0},Y[tt]=ot),(ot.type!==G||ot.texture!==yt)&&(W!==tt&&(n.activeTexture(tt),W=tt),n.bindTexture(G,yt||at[G]),ot.type=G,ot.texture=yt)}function $(){const G=Y[W];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function et(){try{n.compressedTexImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function lt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function nt(){try{n.texSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pt(){try{n.texSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function xt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Et(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Jt(){try{n.texStorage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ft(){try{n.texStorage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ct(){try{n.texImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function zt(){try{n.texImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ht(G){pt.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),pt.copy(G))}function Rt(G){B.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),B.copy(G))}function ee(G,yt){let tt=c.get(yt);tt===void 0&&(tt=new WeakMap,c.set(yt,tt));let ot=tt.get(G);ot===void 0&&(ot=n.getUniformBlockIndex(yt,G.name),tt.set(G,ot))}function $t(G,yt){const ot=c.get(yt).get(G);l.get(yt)!==ot&&(n.uniformBlockBinding(yt,ot,G.__bindingPointIndex),l.set(yt,ot))}function pe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},W=null,Y={},d={},u=new WeakMap,f=[],m=null,v=!1,g=null,p=null,x=null,y=null,_=null,P=null,E=null,R=new Zt(0,0,0),L=0,b=!1,M=null,I=null,V=null,S=null,U=null,pt.set(0,0,n.canvas.width,n.canvas.height),B.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:mt,bindFramebuffer:At,drawBuffers:Ot,useProgram:Gt,setBlending:O,setMaterial:Ut,setFlipSided:ut,setCullFace:Tt,setLineWidth:vt,setPolygonOffset:Bt,setScissorTest:wt,activeTexture:D,bindTexture:w,unbindTexture:$,compressedTexImage2D:et,compressedTexImage3D:lt,texImage2D:Ct,texImage3D:zt,updateUBOMapping:ee,uniformBlockBinding:$t,texStorage2D:Jt,texStorage3D:ft,texSubImage2D:nt,texSubImage3D:Pt,compressedTexSubImage2D:xt,compressedTexSubImage3D:Et,scissor:Ht,viewport:Rt,reset:pe}}function fh(n,t,e,i){const s=rv(i);switch(e){case ad:return n*t;case cd:return n*t;case hd:return n*t*2;case Ul:return n*t/s.components*s.byteLength;case Nl:return n*t/s.components*s.byteLength;case dd:return n*t*2/s.components*s.byteLength;case Ol:return n*t*2/s.components*s.byteLength;case ld:return n*t*3/s.components*s.byteLength;case Mn:return n*t*4/s.components*s.byteLength;case Fl:return n*t*4/s.components*s.byteLength;case lo:case co:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ho:case uo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case qa:case $a:return Math.max(n,16)*Math.max(t,8)/4;case Xa:case Ya:return Math.max(n,8)*Math.max(t,8)/2;case ja:case Za:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ja:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case tl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case el:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case nl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case il:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case sl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case rl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case ol:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case al:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ll:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case cl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case hl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case dl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case fo:case ul:case fl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ud:case pl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ml:case gl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function rv(n){switch(n){case ei:case sd:return{byteLength:1,components:1};case hr:case rd:case yr:return{byteLength:2,components:1};case Il:case Dl:return{byteLength:2,components:4};case Hi:case Ll:case In:return{byteLength:4,components:1};case od:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function ov(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(D,w){return f?new OffscreenCanvas(D,w):fr("canvas")}function v(D,w,$){let et=1;const lt=wt(D);if((lt.width>$||lt.height>$)&&(et=$/Math.max(lt.width,lt.height)),et<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const nt=Math.floor(et*lt.width),Pt=Math.floor(et*lt.height);d===void 0&&(d=m(nt,Pt));const xt=w?m(nt,Pt):d;return xt.width=nt,xt.height=Pt,xt.getContext("2d").drawImage(D,0,0,nt,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+nt+"x"+Pt+")."),xt}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),D;return D}function g(D){return D.generateMipmaps}function p(D){n.generateMipmap(D)}function x(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(D,w,$,et,lt=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let nt=w;if(w===n.RED&&($===n.FLOAT&&(nt=n.R32F),$===n.HALF_FLOAT&&(nt=n.R16F),$===n.UNSIGNED_BYTE&&(nt=n.R8)),w===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(nt=n.R8UI),$===n.UNSIGNED_SHORT&&(nt=n.R16UI),$===n.UNSIGNED_INT&&(nt=n.R32UI),$===n.BYTE&&(nt=n.R8I),$===n.SHORT&&(nt=n.R16I),$===n.INT&&(nt=n.R32I)),w===n.RG&&($===n.FLOAT&&(nt=n.RG32F),$===n.HALF_FLOAT&&(nt=n.RG16F),$===n.UNSIGNED_BYTE&&(nt=n.RG8)),w===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(nt=n.RG8UI),$===n.UNSIGNED_SHORT&&(nt=n.RG16UI),$===n.UNSIGNED_INT&&(nt=n.RG32UI),$===n.BYTE&&(nt=n.RG8I),$===n.SHORT&&(nt=n.RG16I),$===n.INT&&(nt=n.RG32I)),w===n.RGB_INTEGER&&($===n.UNSIGNED_BYTE&&(nt=n.RGB8UI),$===n.UNSIGNED_SHORT&&(nt=n.RGB16UI),$===n.UNSIGNED_INT&&(nt=n.RGB32UI),$===n.BYTE&&(nt=n.RGB8I),$===n.SHORT&&(nt=n.RGB16I),$===n.INT&&(nt=n.RGB32I)),w===n.RGBA_INTEGER&&($===n.UNSIGNED_BYTE&&(nt=n.RGBA8UI),$===n.UNSIGNED_SHORT&&(nt=n.RGBA16UI),$===n.UNSIGNED_INT&&(nt=n.RGBA32UI),$===n.BYTE&&(nt=n.RGBA8I),$===n.SHORT&&(nt=n.RGBA16I),$===n.INT&&(nt=n.RGBA32I)),w===n.RGB&&$===n.UNSIGNED_INT_5_9_9_9_REV&&(nt=n.RGB9_E5),w===n.RGBA){const Pt=lt?Co:ne.getTransfer(et);$===n.FLOAT&&(nt=n.RGBA32F),$===n.HALF_FLOAT&&(nt=n.RGBA16F),$===n.UNSIGNED_BYTE&&(nt=Pt===he?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(nt=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(nt=n.RGB5_A1)}return(nt===n.R16F||nt===n.R32F||nt===n.RG16F||nt===n.RG32F||nt===n.RGBA16F||nt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function _(D,w){let $;return D?w===null||w===Hi||w===Rs?$=n.DEPTH24_STENCIL8:w===In?$=n.DEPTH32F_STENCIL8:w===hr&&($=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Hi||w===Rs?$=n.DEPTH_COMPONENT24:w===In?$=n.DEPTH_COMPONENT32F:w===hr&&($=n.DEPTH_COMPONENT16),$}function P(D,w){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==sn&&D.minFilter!==Ln?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function E(D){const w=D.target;w.removeEventListener("dispose",E),L(w),w.isVideoTexture&&h.delete(w)}function R(D){const w=D.target;w.removeEventListener("dispose",R),M(w)}function L(D){const w=i.get(D);if(w.__webglInit===void 0)return;const $=D.source,et=u.get($);if(et){const lt=et[w.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&b(D),Object.keys(et).length===0&&u.delete($)}i.remove(D)}function b(D){const w=i.get(D);n.deleteTexture(w.__webglTexture);const $=D.source,et=u.get($);delete et[w.__cacheKey],o.memory.textures--}function M(D){const w=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(w.__webglFramebuffer[et]))for(let lt=0;lt<w.__webglFramebuffer[et].length;lt++)n.deleteFramebuffer(w.__webglFramebuffer[et][lt]);else n.deleteFramebuffer(w.__webglFramebuffer[et]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[et])}else{if(Array.isArray(w.__webglFramebuffer))for(let et=0;et<w.__webglFramebuffer.length;et++)n.deleteFramebuffer(w.__webglFramebuffer[et]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let et=0;et<w.__webglColorRenderbuffer.length;et++)w.__webglColorRenderbuffer[et]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[et]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const $=D.textures;for(let et=0,lt=$.length;et<lt;et++){const nt=i.get($[et]);nt.__webglTexture&&(n.deleteTexture(nt.__webglTexture),o.memory.textures--),i.remove($[et])}i.remove(D)}let I=0;function V(){I=0}function S(){const D=I;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),I+=1,D}function U(D){const w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function z(D,w){const $=i.get(D);if(D.isVideoTexture&&vt(D),D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){const et=D.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B($,D,w);return}}e.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+w)}function N(D,w){const $=i.get(D);if(D.version>0&&$.__version!==D.version){B($,D,w);return}e.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+w)}function k(D,w){const $=i.get(D);if(D.version>0&&$.__version!==D.version){B($,D,w);return}e.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+w)}function F(D,w){const $=i.get(D);if(D.version>0&&$.__version!==D.version){K($,D,w);return}e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+w)}const W={[vo]:n.REPEAT,[ki]:n.CLAMP_TO_EDGE,[Wa]:n.MIRRORED_REPEAT},Y={[sn]:n.NEAREST,[Lu]:n.NEAREST_MIPMAP_NEAREST,[Cr]:n.NEAREST_MIPMAP_LINEAR,[Ln]:n.LINEAR,[Ho]:n.LINEAR_MIPMAP_NEAREST,[Bi]:n.LINEAR_MIPMAP_LINEAR},Q={[Nu]:n.NEVER,[Hu]:n.ALWAYS,[Ou]:n.LESS,[pd]:n.LEQUAL,[Fu]:n.EQUAL,[zu]:n.GEQUAL,[ku]:n.GREATER,[Bu]:n.NOTEQUAL};function st(D,w){if(w.type===In&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Ln||w.magFilter===Ho||w.magFilter===Cr||w.magFilter===Bi||w.minFilter===Ln||w.minFilter===Ho||w.minFilter===Cr||w.minFilter===Bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,W[w.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,W[w.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,W[w.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,Y[w.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,Y[w.minFilter]),w.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,Q[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===sn||w.minFilter!==Cr&&w.minFilter!==Bi||w.type===In&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");n.texParameterf(D,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function pt(D,w){let $=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",E));const et=w.source;let lt=u.get(et);lt===void 0&&(lt={},u.set(et,lt));const nt=U(w);if(nt!==D.__cacheKey){lt[nt]===void 0&&(lt[nt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,$=!0),lt[nt].usedTimes++;const Pt=lt[D.__cacheKey];Pt!==void 0&&(lt[D.__cacheKey].usedTimes--,Pt.usedTimes===0&&b(w)),D.__cacheKey=nt,D.__webglTexture=lt[nt].texture}return $}function B(D,w,$){let et=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(et=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(et=n.TEXTURE_3D);const lt=pt(D,w),nt=w.source;e.bindTexture(et,D.__webglTexture,n.TEXTURE0+$);const Pt=i.get(nt);if(nt.version!==Pt.__version||lt===!0){e.activeTexture(n.TEXTURE0+$);const xt=ne.getPrimaries(ne.workingColorSpace),Et=w.colorSpace===gi?null:ne.getPrimaries(w.colorSpace),Jt=w.colorSpace===gi||xt===Et?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let ft=v(w.image,!1,s.maxTextureSize);ft=Bt(w,ft);const Ct=r.convert(w.format,w.colorSpace),zt=r.convert(w.type);let Ht=y(w.internalFormat,Ct,zt,w.colorSpace,w.isVideoTexture);st(et,w);let Rt;const ee=w.mipmaps,$t=w.isVideoTexture!==!0,pe=Pt.__version===void 0||lt===!0,G=nt.dataReady,yt=P(w,ft);if(w.isDepthTexture)Ht=_(w.format===Ps,w.type),pe&&($t?e.texStorage2D(n.TEXTURE_2D,1,Ht,ft.width,ft.height):e.texImage2D(n.TEXTURE_2D,0,Ht,ft.width,ft.height,0,Ct,zt,null));else if(w.isDataTexture)if(ee.length>0){$t&&pe&&e.texStorage2D(n.TEXTURE_2D,yt,Ht,ee[0].width,ee[0].height);for(let tt=0,ot=ee.length;tt<ot;tt++)Rt=ee[tt],$t?G&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,Rt.width,Rt.height,Ct,zt,Rt.data):e.texImage2D(n.TEXTURE_2D,tt,Ht,Rt.width,Rt.height,0,Ct,zt,Rt.data);w.generateMipmaps=!1}else $t?(pe&&e.texStorage2D(n.TEXTURE_2D,yt,Ht,ft.width,ft.height),G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ft.width,ft.height,Ct,zt,ft.data)):e.texImage2D(n.TEXTURE_2D,0,Ht,ft.width,ft.height,0,Ct,zt,ft.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){$t&&pe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,yt,Ht,ee[0].width,ee[0].height,ft.depth);for(let tt=0,ot=ee.length;tt<ot;tt++)if(Rt=ee[tt],w.format!==Mn)if(Ct!==null)if($t){if(G)if(w.layerUpdates.size>0){const St=fh(Rt.width,Rt.height,w.format,w.type);for(const Mt of w.layerUpdates){const Wt=Rt.data.subarray(Mt*St/Rt.data.BYTES_PER_ELEMENT,(Mt+1)*St/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,Mt,Rt.width,Rt.height,1,Ct,Wt)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,Rt.width,Rt.height,ft.depth,Ct,Rt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,tt,Ht,Rt.width,Rt.height,ft.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?G&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,Rt.width,Rt.height,ft.depth,Ct,zt,Rt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,tt,Ht,Rt.width,Rt.height,ft.depth,0,Ct,zt,Rt.data)}else{$t&&pe&&e.texStorage2D(n.TEXTURE_2D,yt,Ht,ee[0].width,ee[0].height);for(let tt=0,ot=ee.length;tt<ot;tt++)Rt=ee[tt],w.format!==Mn?Ct!==null?$t?G&&e.compressedTexSubImage2D(n.TEXTURE_2D,tt,0,0,Rt.width,Rt.height,Ct,Rt.data):e.compressedTexImage2D(n.TEXTURE_2D,tt,Ht,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?G&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,Rt.width,Rt.height,Ct,zt,Rt.data):e.texImage2D(n.TEXTURE_2D,tt,Ht,Rt.width,Rt.height,0,Ct,zt,Rt.data)}else if(w.isDataArrayTexture)if($t){if(pe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,yt,Ht,ft.width,ft.height,ft.depth),G)if(w.layerUpdates.size>0){const tt=fh(ft.width,ft.height,w.format,w.type);for(const ot of w.layerUpdates){const St=ft.data.subarray(ot*tt/ft.data.BYTES_PER_ELEMENT,(ot+1)*tt/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ot,ft.width,ft.height,1,Ct,zt,St)}w.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Ct,zt,ft.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ht,ft.width,ft.height,ft.depth,0,Ct,zt,ft.data);else if(w.isData3DTexture)$t?(pe&&e.texStorage3D(n.TEXTURE_3D,yt,Ht,ft.width,ft.height,ft.depth),G&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Ct,zt,ft.data)):e.texImage3D(n.TEXTURE_3D,0,Ht,ft.width,ft.height,ft.depth,0,Ct,zt,ft.data);else if(w.isFramebufferTexture){if(pe)if($t)e.texStorage2D(n.TEXTURE_2D,yt,Ht,ft.width,ft.height);else{let tt=ft.width,ot=ft.height;for(let St=0;St<yt;St++)e.texImage2D(n.TEXTURE_2D,St,Ht,tt,ot,0,Ct,zt,null),tt>>=1,ot>>=1}}else if(ee.length>0){if($t&&pe){const tt=wt(ee[0]);e.texStorage2D(n.TEXTURE_2D,yt,Ht,tt.width,tt.height)}for(let tt=0,ot=ee.length;tt<ot;tt++)Rt=ee[tt],$t?G&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,Ct,zt,Rt):e.texImage2D(n.TEXTURE_2D,tt,Ht,Ct,zt,Rt);w.generateMipmaps=!1}else if($t){if(pe){const tt=wt(ft);e.texStorage2D(n.TEXTURE_2D,yt,Ht,tt.width,tt.height)}G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Ct,zt,ft)}else e.texImage2D(n.TEXTURE_2D,0,Ht,Ct,zt,ft);g(w)&&p(et),Pt.__version=nt.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function K(D,w,$){if(w.image.length!==6)return;const et=pt(D,w),lt=w.source;e.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+$);const nt=i.get(lt);if(lt.version!==nt.__version||et===!0){e.activeTexture(n.TEXTURE0+$);const Pt=ne.getPrimaries(ne.workingColorSpace),xt=w.colorSpace===gi?null:ne.getPrimaries(w.colorSpace),Et=w.colorSpace===gi||Pt===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const Jt=w.isCompressedTexture||w.image[0].isCompressedTexture,ft=w.image[0]&&w.image[0].isDataTexture,Ct=[];for(let ot=0;ot<6;ot++)!Jt&&!ft?Ct[ot]=v(w.image[ot],!0,s.maxCubemapSize):Ct[ot]=ft?w.image[ot].image:w.image[ot],Ct[ot]=Bt(w,Ct[ot]);const zt=Ct[0],Ht=r.convert(w.format,w.colorSpace),Rt=r.convert(w.type),ee=y(w.internalFormat,Ht,Rt,w.colorSpace),$t=w.isVideoTexture!==!0,pe=nt.__version===void 0||et===!0,G=lt.dataReady;let yt=P(w,zt);st(n.TEXTURE_CUBE_MAP,w);let tt;if(Jt){$t&&pe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,yt,ee,zt.width,zt.height);for(let ot=0;ot<6;ot++){tt=Ct[ot].mipmaps;for(let St=0;St<tt.length;St++){const Mt=tt[St];w.format!==Mn?Ht!==null?$t?G&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St,0,0,Mt.width,Mt.height,Ht,Mt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St,ee,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St,0,0,Mt.width,Mt.height,Ht,Rt,Mt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St,ee,Mt.width,Mt.height,0,Ht,Rt,Mt.data)}}}else{if(tt=w.mipmaps,$t&&pe){tt.length>0&&yt++;const ot=wt(Ct[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,yt,ee,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(ft){$t?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Ct[ot].width,Ct[ot].height,Ht,Rt,Ct[ot].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ee,Ct[ot].width,Ct[ot].height,0,Ht,Rt,Ct[ot].data);for(let St=0;St<tt.length;St++){const Wt=tt[St].image[ot].image;$t?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St+1,0,0,Wt.width,Wt.height,Ht,Rt,Wt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St+1,ee,Wt.width,Wt.height,0,Ht,Rt,Wt.data)}}else{$t?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Ht,Rt,Ct[ot]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ee,Ht,Rt,Ct[ot]);for(let St=0;St<tt.length;St++){const Mt=tt[St];$t?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St+1,0,0,Ht,Rt,Mt.image[ot]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St+1,ee,Ht,Rt,Mt.image[ot])}}}g(w)&&p(n.TEXTURE_CUBE_MAP),nt.__version=lt.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function at(D,w,$,et,lt,nt){const Pt=r.convert($.format,$.colorSpace),xt=r.convert($.type),Et=y($.internalFormat,Pt,xt,$.colorSpace),Jt=i.get(w),ft=i.get($);if(ft.__renderTarget=w,!Jt.__hasExternalTextures){const Ct=Math.max(1,w.width>>nt),zt=Math.max(1,w.height>>nt);lt===n.TEXTURE_3D||lt===n.TEXTURE_2D_ARRAY?e.texImage3D(lt,nt,Et,Ct,zt,w.depth,0,Pt,xt,null):e.texImage2D(lt,nt,Et,Ct,zt,0,Pt,xt,null)}e.bindFramebuffer(n.FRAMEBUFFER,D),Tt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,et,lt,ft.__webglTexture,0,ut(w)):(lt===n.TEXTURE_2D||lt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,et,lt,ft.__webglTexture,nt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(D,w,$){if(n.bindRenderbuffer(n.RENDERBUFFER,D),w.depthBuffer){const et=w.depthTexture,lt=et&&et.isDepthTexture?et.type:null,nt=_(w.stencilBuffer,lt),Pt=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=ut(w);Tt(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt,nt,w.width,w.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt,nt,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,nt,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pt,n.RENDERBUFFER,D)}else{const et=w.textures;for(let lt=0;lt<et.length;lt++){const nt=et[lt],Pt=r.convert(nt.format,nt.colorSpace),xt=r.convert(nt.type),Et=y(nt.internalFormat,Pt,xt,nt.colorSpace),Jt=ut(w);$&&Tt(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Jt,Et,w.width,w.height):Tt(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Jt,Et,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Et,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function mt(D,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const et=i.get(w.depthTexture);et.__renderTarget=w,(!et.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),z(w.depthTexture,0);const lt=et.__webglTexture,nt=ut(w);if(w.depthTexture.format===ys)Tt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,lt,0,nt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,lt,0);else if(w.depthTexture.format===Ps)Tt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,lt,0,nt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function At(D){const w=i.get(D),$=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){const et=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),et){const lt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,et.removeEventListener("dispose",lt)};et.addEventListener("dispose",lt),w.__depthDisposeCallback=lt}w.__boundDepthTexture=et}if(D.depthTexture&&!w.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");mt(w.__webglFramebuffer,D)}else if($){w.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[et]),w.__webglDepthbuffer[et]===void 0)w.__webglDepthbuffer[et]=n.createRenderbuffer(),rt(w.__webglDepthbuffer[et],D,!1);else{const lt=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,nt=w.__webglDepthbuffer[et];n.bindRenderbuffer(n.RENDERBUFFER,nt),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,nt)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),rt(w.__webglDepthbuffer,D,!1);else{const et=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,lt),n.framebufferRenderbuffer(n.FRAMEBUFFER,et,n.RENDERBUFFER,lt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ot(D,w,$){const et=i.get(D);w!==void 0&&at(et.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&At(D)}function Gt(D){const w=D.texture,$=i.get(D),et=i.get(w);D.addEventListener("dispose",R);const lt=D.textures,nt=D.isWebGLCubeRenderTarget===!0,Pt=lt.length>1;if(Pt||(et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture()),et.__version=w.version,o.memory.textures++),nt){$.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(w.mipmaps&&w.mipmaps.length>0){$.__webglFramebuffer[xt]=[];for(let Et=0;Et<w.mipmaps.length;Et++)$.__webglFramebuffer[xt][Et]=n.createFramebuffer()}else $.__webglFramebuffer[xt]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){$.__webglFramebuffer=[];for(let xt=0;xt<w.mipmaps.length;xt++)$.__webglFramebuffer[xt]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(Pt)for(let xt=0,Et=lt.length;xt<Et;xt++){const Jt=i.get(lt[xt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=n.createTexture(),o.memory.textures++)}if(D.samples>0&&Tt(D)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let xt=0;xt<lt.length;xt++){const Et=lt[xt];$.__webglColorRenderbuffer[xt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[xt]);const Jt=r.convert(Et.format,Et.colorSpace),ft=r.convert(Et.type),Ct=y(Et.internalFormat,Jt,ft,Et.colorSpace,D.isXRRenderTarget===!0),zt=ut(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,zt,Ct,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,$.__webglColorRenderbuffer[xt])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),rt($.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(nt){e.bindTexture(n.TEXTURE_CUBE_MAP,et.__webglTexture),st(n.TEXTURE_CUBE_MAP,w);for(let xt=0;xt<6;xt++)if(w.mipmaps&&w.mipmaps.length>0)for(let Et=0;Et<w.mipmaps.length;Et++)at($.__webglFramebuffer[xt][Et],D,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Et);else at($.__webglFramebuffer[xt],D,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);g(w)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let xt=0,Et=lt.length;xt<Et;xt++){const Jt=lt[xt],ft=i.get(Jt);e.bindTexture(n.TEXTURE_2D,ft.__webglTexture),st(n.TEXTURE_2D,Jt),at($.__webglFramebuffer,D,Jt,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,0),g(Jt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let xt=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(xt=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(xt,et.__webglTexture),st(xt,w),w.mipmaps&&w.mipmaps.length>0)for(let Et=0;Et<w.mipmaps.length;Et++)at($.__webglFramebuffer[Et],D,w,n.COLOR_ATTACHMENT0,xt,Et);else at($.__webglFramebuffer,D,w,n.COLOR_ATTACHMENT0,xt,0);g(w)&&p(xt),e.unbindTexture()}D.depthBuffer&&At(D)}function it(D){const w=D.textures;for(let $=0,et=w.length;$<et;$++){const lt=w[$];if(g(lt)){const nt=x(D),Pt=i.get(lt).__webglTexture;e.bindTexture(nt,Pt),p(nt),e.unbindTexture()}}}const dt=[],O=[];function Ut(D){if(D.samples>0){if(Tt(D)===!1){const w=D.textures,$=D.width,et=D.height;let lt=n.COLOR_BUFFER_BIT;const nt=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pt=i.get(D),xt=w.length>1;if(xt)for(let Et=0;Et<w.length;Et++)e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Et=0;Et<w.length;Et++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(lt|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(lt|=n.STENCIL_BUFFER_BIT)),xt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pt.__webglColorRenderbuffer[Et]);const Jt=i.get(w[Et]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Jt,0)}n.blitFramebuffer(0,0,$,et,0,0,$,et,lt,n.NEAREST),l===!0&&(dt.length=0,O.length=0,dt.push(n.COLOR_ATTACHMENT0+Et),D.depthBuffer&&D.resolveDepthBuffer===!1&&(dt.push(nt),O.push(nt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,O)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,dt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xt)for(let Et=0;Et<w.length;Et++){e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,Pt.__webglColorRenderbuffer[Et]);const Jt=i.get(w[Et]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,Jt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const w=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function ut(D){return Math.min(s.maxSamples,D.samples)}function Tt(D){const w=i.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function vt(D){const w=o.render.frame;h.get(D)!==w&&(h.set(D,w),D.update())}function Bt(D,w){const $=D.colorSpace,et=D.format,lt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||$!==Bs&&$!==gi&&(ne.getTransfer($)===he?(et!==Mn||lt!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),w}function wt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=S,this.resetTextureUnits=V,this.setTexture2D=z,this.setTexture2DArray=N,this.setTexture3D=k,this.setTextureCube=F,this.rebindTextures=Ot,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=at,this.useMultisampledRTT=Tt}function av(n,t){function e(i,s=gi){let r;const o=ne.getTransfer(s);if(i===ei)return n.UNSIGNED_BYTE;if(i===Il)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Dl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===od)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===sd)return n.BYTE;if(i===rd)return n.SHORT;if(i===hr)return n.UNSIGNED_SHORT;if(i===Ll)return n.INT;if(i===Hi)return n.UNSIGNED_INT;if(i===In)return n.FLOAT;if(i===yr)return n.HALF_FLOAT;if(i===ad)return n.ALPHA;if(i===ld)return n.RGB;if(i===Mn)return n.RGBA;if(i===cd)return n.LUMINANCE;if(i===hd)return n.LUMINANCE_ALPHA;if(i===ys)return n.DEPTH_COMPONENT;if(i===Ps)return n.DEPTH_STENCIL;if(i===Ul)return n.RED;if(i===Nl)return n.RED_INTEGER;if(i===dd)return n.RG;if(i===Ol)return n.RG_INTEGER;if(i===Fl)return n.RGBA_INTEGER;if(i===lo||i===co||i===ho||i===uo)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===lo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===lo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===co)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ho)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===uo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xa||i===qa||i===Ya||i===$a)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Xa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ya)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$a)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ja||i===Za||i===Ja)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ja||i===Za)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ja)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ka||i===Qa||i===tl||i===el||i===nl||i===il||i===sl||i===rl||i===ol||i===al||i===ll||i===cl||i===hl||i===dl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ka)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===tl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===el)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===nl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===il)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===sl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===rl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ol)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===al)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ll)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===cl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===hl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===dl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fo||i===ul||i===fl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===fo)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ud||i===pl||i===ml||i===gl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===fo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===pl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ml)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Rs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class lv extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ft extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cv={type:"move"};class pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const g=e.getJointPose(v,i),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ft;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const hv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dv=`
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

}`;class uv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new He,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Si({vertexShader:hv,fragmentShader:dv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ht(new dn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fv extends qi{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null;const v=new uv,g=e.getContextAttributes();let p=null,x=null;const y=[],_=[],P=new ct;let E=null;const R=new ln;R.viewport=new Ee;const L=new ln;L.viewport=new Ee;const b=[R,L],M=new lv;let I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let K=y[B];return K===void 0&&(K=new pa,y[B]=K),K.getTargetRaySpace()},this.getControllerGrip=function(B){let K=y[B];return K===void 0&&(K=new pa,y[B]=K),K.getGripSpace()},this.getHand=function(B){let K=y[B];return K===void 0&&(K=new pa,y[B]=K),K.getHandSpace()};function S(B){const K=_.indexOf(B.inputSource);if(K===-1)return;const at=y[K];at!==void 0&&(at.update(B.inputSource,B.frame,c||o),at.dispatchEvent({type:B.type,data:B.inputSource}))}function U(){s.removeEventListener("select",S),s.removeEventListener("selectstart",S),s.removeEventListener("selectend",S),s.removeEventListener("squeeze",S),s.removeEventListener("squeezestart",S),s.removeEventListener("squeezeend",S),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",z);for(let B=0;B<y.length;B++){const K=_[B];K!==null&&(_[B]=null,y[B].disconnect(K))}I=null,V=null,v.reset(),t.setRenderTarget(p),f=null,u=null,d=null,s=null,x=null,pt.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",S),s.addEventListener("selectstart",S),s.addEventListener("selectend",S),s.addEventListener("squeeze",S),s.addEventListener("squeezestart",S),s.addEventListener("squeezeend",S),s.addEventListener("end",U),s.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){const K={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,K),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Vi(f.framebufferWidth,f.framebufferHeight,{format:Mn,type:ei,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,at=null,rt=null;g.depth&&(rt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=g.stencil?Ps:ys,at=g.stencil?Rs:Hi);const mt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(mt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new Vi(u.textureWidth,u.textureHeight,{format:Mn,type:ei,depthTexture:new Td(u.textureWidth,u.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),pt.setContext(s),pt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function z(B){for(let K=0;K<B.removed.length;K++){const at=B.removed[K],rt=_.indexOf(at);rt>=0&&(_[rt]=null,y[rt].disconnect(at))}for(let K=0;K<B.added.length;K++){const at=B.added[K];let rt=_.indexOf(at);if(rt===-1){for(let At=0;At<y.length;At++)if(At>=_.length){_.push(at),rt=At;break}else if(_[At]===null){_[At]=at,rt=At;break}if(rt===-1)break}const mt=y[rt];mt&&mt.connect(at)}}const N=new A,k=new A;function F(B,K,at){N.setFromMatrixPosition(K.matrixWorld),k.setFromMatrixPosition(at.matrixWorld);const rt=N.distanceTo(k),mt=K.projectionMatrix.elements,At=at.projectionMatrix.elements,Ot=mt[14]/(mt[10]-1),Gt=mt[14]/(mt[10]+1),it=(mt[9]+1)/mt[5],dt=(mt[9]-1)/mt[5],O=(mt[8]-1)/mt[0],Ut=(At[8]+1)/At[0],ut=Ot*O,Tt=Ot*Ut,vt=rt/(-O+Ut),Bt=vt*-O;if(K.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Bt),B.translateZ(vt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),mt[10]===-1)B.projectionMatrix.copy(K.projectionMatrix),B.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const wt=Ot+vt,D=Gt+vt,w=ut-Bt,$=Tt+(rt-Bt),et=it*Gt/D*wt,lt=dt*Gt/D*wt;B.projectionMatrix.makePerspective(w,$,et,lt,wt,D),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function W(B,K){K===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(K.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let K=B.near,at=B.far;v.texture!==null&&(v.depthNear>0&&(K=v.depthNear),v.depthFar>0&&(at=v.depthFar)),M.near=L.near=R.near=K,M.far=L.far=R.far=at,(I!==M.near||V!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,V=M.far),R.layers.mask=B.layers.mask|2,L.layers.mask=B.layers.mask|4,M.layers.mask=R.layers.mask|L.layers.mask;const rt=B.parent,mt=M.cameras;W(M,rt);for(let At=0;At<mt.length;At++)W(mt[At],rt);mt.length===2?F(M,R,L):M.projectionMatrix.copy(R.projectionMatrix),Y(B,M,rt)};function Y(B,K,at){at===null?B.matrix.copy(K.matrixWorld):(B.matrix.copy(at.matrixWorld),B.matrix.invert(),B.matrix.multiply(K.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(K.projectionMatrix),B.projectionMatrixInverse.copy(K.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=dr*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(B){l=B,u!==null&&(u.fixedFoveation=B),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=B)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let Q=null;function st(B,K){if(h=K.getViewerPose(c||o),m=K,h!==null){const at=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let rt=!1;at.length!==M.cameras.length&&(M.cameras.length=0,rt=!0);for(let At=0;At<at.length;At++){const Ot=at[At];let Gt=null;if(f!==null)Gt=f.getViewport(Ot);else{const dt=d.getViewSubImage(u,Ot);Gt=dt.viewport,At===0&&(t.setRenderTargetTextures(x,dt.colorTexture,u.ignoreDepthValues?void 0:dt.depthStencilTexture),t.setRenderTarget(x))}let it=b[At];it===void 0&&(it=new ln,it.layers.enable(At),it.viewport=new Ee,b[At]=it),it.matrix.fromArray(Ot.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(Ot.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),At===0&&(M.matrix.copy(it.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),rt===!0&&M.cameras.push(it)}const mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")){const At=d.getDepthInformation(at[0]);At&&At.isValid&&At.texture&&v.init(t,At,s.renderState)}}for(let at=0;at<y.length;at++){const rt=_[at],mt=y[at];rt!==null&&mt!==void 0&&mt.update(rt,K,c||o)}Q&&Q(B,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),m=null}const pt=new wd;pt.setAnimationLoop(st),this.setAnimationLoop=function(B){Q=B},this.dispose=function(){}}}const Pi=new Nn,pv=new fe;function mv(n,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Md(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,x,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,x,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===je&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===je&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=t.get(p),y=x.envMap,_=x.envMapRotation;y&&(g.envMap.value=y,Pi.copy(_),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),g.envMapRotation.value.setFromMatrix4(pv.makeRotationFromEuler(Pi)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===je&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const x=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function gv(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const _=y.program;i.uniformBlockBinding(x,_)}function c(x,y){let _=s[x.id];_===void 0&&(m(x),_=h(x),s[x.id]=_,x.addEventListener("dispose",g));const P=y.program;i.updateUBOMapping(x,P);const E=t.render.frame;r[x.id]!==E&&(u(x),r[x.id]=E)}function h(x){const y=d();x.__bindingPointIndex=y;const _=n.createBuffer(),P=x.__size,E=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,P,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,_),_}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const y=s[x.id],_=x.uniforms,P=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let E=0,R=_.length;E<R;E++){const L=Array.isArray(_[E])?_[E]:[_[E]];for(let b=0,M=L.length;b<M;b++){const I=L[b];if(f(I,E,b,P)===!0){const V=I.__offset,S=Array.isArray(I.value)?I.value:[I.value];let U=0;for(let z=0;z<S.length;z++){const N=S[z],k=v(N);typeof N=="number"||typeof N=="boolean"?(I.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,V+U,I.__data)):N.isMatrix3?(I.__data[0]=N.elements[0],I.__data[1]=N.elements[1],I.__data[2]=N.elements[2],I.__data[3]=0,I.__data[4]=N.elements[3],I.__data[5]=N.elements[4],I.__data[6]=N.elements[5],I.__data[7]=0,I.__data[8]=N.elements[6],I.__data[9]=N.elements[7],I.__data[10]=N.elements[8],I.__data[11]=0):(N.toArray(I.__data,U),U+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(x,y,_,P){const E=x.value,R=y+"_"+_;if(P[R]===void 0)return typeof E=="number"||typeof E=="boolean"?P[R]=E:P[R]=E.clone(),!0;{const L=P[R];if(typeof E=="number"||typeof E=="boolean"){if(L!==E)return P[R]=E,!0}else if(L.equals(E)===!1)return L.copy(E),!0}return!1}function m(x){const y=x.uniforms;let _=0;const P=16;for(let R=0,L=y.length;R<L;R++){const b=Array.isArray(y[R])?y[R]:[y[R]];for(let M=0,I=b.length;M<I;M++){const V=b[M],S=Array.isArray(V.value)?V.value:[V.value];for(let U=0,z=S.length;U<z;U++){const N=S[U],k=v(N),F=_%P,W=F%k.boundary,Y=F+W;_+=W,Y!==0&&P-Y<k.storage&&(_+=P-Y),V.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=_,_+=k.storage}}}const E=_%P;return E>0&&(_+=P-E),x.__size=_,x.__cache={},this}function v(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function g(x){const y=x.target;y.removeEventListener("dispose",g);const _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class vv{constructor(t={}){const{canvas:e=rf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const x=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Me,this.toneMapping=_i,this.toneMappingExposure=1;const _=this;let P=!1,E=0,R=0,L=null,b=-1,M=null;const I=new Ee,V=new Ee;let S=null;const U=new Zt(0);let z=0,N=e.width,k=e.height,F=1,W=null,Y=null;const Q=new Ee(0,0,N,k),st=new Ee(0,0,N,k);let pt=!1;const B=new zl;let K=!1,at=!1;const rt=new fe,mt=new fe,At=new A,Ot=new Ee,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function dt(){return L===null?F:1}let O=i;function Ut(C,X){return e.getContext(C,X)}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Pl}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),O===null){const X="webgl2";if(O=Ut(X,C),O===null)throw Ut(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ut,Tt,vt,Bt,wt,D,w,$,et,lt,nt,Pt,xt,Et,Jt,ft,Ct,zt,Ht,Rt,ee,$t,pe,G;function yt(){ut=new bg(O),ut.init(),$t=new av(O,ut),Tt=new gg(O,ut,t,$t),vt=new sv(O,ut),Tt.reverseDepthBuffer&&u&&vt.buffers.depth.setReversed(!0),Bt=new Eg(O),wt=new G0,D=new ov(O,ut,vt,wt,Tt,$t,Bt),w=new _g(_),$=new Mg(_),et=new If(O),pe=new pg(O,et),lt=new Sg(O,et,Bt,pe),nt=new Ag(O,lt,et,Bt),Ht=new Tg(O,Tt,D),ft=new vg(wt),Pt=new V0(_,w,$,ut,Tt,pe,ft),xt=new mv(_,wt),Et=new X0,Jt=new J0(ut),zt=new fg(_,w,$,vt,nt,f,l),Ct=new nv(_,nt,Tt),G=new gv(O,Bt,Tt,vt),Rt=new mg(O,ut,Bt),ee=new wg(O,ut,Bt),Bt.programs=Pt.programs,_.capabilities=Tt,_.extensions=ut,_.properties=wt,_.renderLists=Et,_.shadowMap=Ct,_.state=vt,_.info=Bt}yt();const tt=new fv(_,O);this.xr=tt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const C=ut.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ut.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(C){C!==void 0&&(F=C,this.setSize(N,k,!1))},this.getSize=function(C){return C.set(N,k)},this.setSize=function(C,X,Z=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=C,k=X,e.width=Math.floor(C*F),e.height=Math.floor(X*F),Z===!0&&(e.style.width=C+"px",e.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(N*F,k*F).floor()},this.setDrawingBufferSize=function(C,X,Z){N=C,k=X,F=Z,e.width=Math.floor(C*Z),e.height=Math.floor(X*Z),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(I)},this.getViewport=function(C){return C.copy(Q)},this.setViewport=function(C,X,Z,J){C.isVector4?Q.set(C.x,C.y,C.z,C.w):Q.set(C,X,Z,J),vt.viewport(I.copy(Q).multiplyScalar(F).round())},this.getScissor=function(C){return C.copy(st)},this.setScissor=function(C,X,Z,J){C.isVector4?st.set(C.x,C.y,C.z,C.w):st.set(C,X,Z,J),vt.scissor(V.copy(st).multiplyScalar(F).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(C){vt.setScissorTest(pt=C)},this.setOpaqueSort=function(C){W=C},this.setTransparentSort=function(C){Y=C},this.getClearColor=function(C){return C.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(C=!0,X=!0,Z=!0){let J=0;if(C){let q=!1;if(L!==null){const gt=L.texture.format;q=gt===Fl||gt===Ol||gt===Nl}if(q){const gt=L.texture.type,bt=gt===ei||gt===Hi||gt===hr||gt===Rs||gt===Il||gt===Dl,Lt=zt.getClearColor(),It=zt.getClearAlpha(),Vt=Lt.r,Xt=Lt.g,Dt=Lt.b;bt?(m[0]=Vt,m[1]=Xt,m[2]=Dt,m[3]=It,O.clearBufferuiv(O.COLOR,0,m)):(v[0]=Vt,v[1]=Xt,v[2]=Dt,v[3]=It,O.clearBufferiv(O.COLOR,0,v))}else J|=O.COLOR_BUFFER_BIT}X&&(J|=O.DEPTH_BUFFER_BIT),Z&&(J|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),Et.dispose(),Jt.dispose(),wt.dispose(),w.dispose(),$.dispose(),nt.dispose(),pe.dispose(),G.dispose(),Pt.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",lc),tt.removeEventListener("sessionend",cc),wi.stop()};function ot(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const C=Bt.autoReset,X=Ct.enabled,Z=Ct.autoUpdate,J=Ct.needsUpdate,q=Ct.type;yt(),Bt.autoReset=C,Ct.enabled=X,Ct.autoUpdate=Z,Ct.needsUpdate=J,Ct.type=q}function Mt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Wt(C){const X=C.target;X.removeEventListener("dispose",Wt),we(X)}function we(C){Ve(C),wt.remove(C)}function Ve(C){const X=wt.get(C).programs;X!==void 0&&(X.forEach(function(Z){Pt.releaseProgram(Z)}),C.isShaderMaterial&&Pt.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,Z,J,q,gt){X===null&&(X=Gt);const bt=q.isMesh&&q.matrixWorld.determinant()<0,Lt=tu(C,X,Z,J,q);vt.setMaterial(J,bt);let It=Z.index,Vt=1;if(J.wireframe===!0){if(It=lt.getWireframeAttribute(Z),It===void 0)return;Vt=2}const Xt=Z.drawRange,Dt=Z.attributes.position;let se=Xt.start*Vt,me=(Xt.start+Xt.count)*Vt;gt!==null&&(se=Math.max(se,gt.start*Vt),me=Math.min(me,(gt.start+gt.count)*Vt)),It!==null?(se=Math.max(se,0),me=Math.min(me,It.count)):Dt!=null&&(se=Math.max(se,0),me=Math.min(me,Dt.count));const ge=me-se;if(ge<0||ge===1/0)return;pe.setup(q,J,Lt,Z,It);let Ze,oe=Rt;if(It!==null&&(Ze=et.get(It),oe=ee,oe.setIndex(Ze)),q.isMesh)J.wireframe===!0?(vt.setLineWidth(J.wireframeLinewidth*dt()),oe.setMode(O.LINES)):oe.setMode(O.TRIANGLES);else if(q.isLine){let Nt=J.linewidth;Nt===void 0&&(Nt=1),vt.setLineWidth(Nt*dt()),q.isLineSegments?oe.setMode(O.LINES):q.isLineLoop?oe.setMode(O.LINE_LOOP):oe.setMode(O.LINE_STRIP)}else q.isPoints?oe.setMode(O.POINTS):q.isSprite&&oe.setMode(O.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)oe.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))oe.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Nt=q._multiDrawStarts,zn=q._multiDrawCounts,ae=q._multiDrawCount,fn=It?et.get(It).bytesPerElement:1,Zi=wt.get(J).currentProgram.getUniforms();for(let Qe=0;Qe<ae;Qe++)Zi.setValue(O,"_gl_DrawID",Qe),oe.render(Nt[Qe]/fn,zn[Qe])}else if(q.isInstancedMesh)oe.renderInstances(se,ge,q.count);else if(Z.isInstancedBufferGeometry){const Nt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,zn=Math.min(Z.instanceCount,Nt);oe.renderInstances(se,ge,zn)}else oe.render(se,ge)};function ce(C,X,Z){C.transparent===!0&&C.side===Ne&&C.forceSinglePass===!1?(C.side=je,C.needsUpdate=!0,Ar(C,X,Z),C.side=ti,C.needsUpdate=!0,Ar(C,X,Z),C.side=Ne):Ar(C,X,Z)}this.compile=function(C,X,Z=null){Z===null&&(Z=C),p=Jt.get(Z),p.init(X),y.push(p),Z.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),C!==Z&&C.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights();const J=new Set;return C.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const gt=q.material;if(gt)if(Array.isArray(gt))for(let bt=0;bt<gt.length;bt++){const Lt=gt[bt];ce(Lt,Z,q),J.add(Lt)}else ce(gt,Z,q),J.add(gt)}),y.pop(),p=null,J},this.compileAsync=function(C,X,Z=null){const J=this.compile(C,X,Z);return new Promise(q=>{function gt(){if(J.forEach(function(bt){wt.get(bt).currentProgram.isReady()&&J.delete(bt)}),J.size===0){q(C);return}setTimeout(gt,10)}ut.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let un=null;function Bn(C){un&&un(C)}function lc(){wi.stop()}function cc(){wi.start()}const wi=new wd;wi.setAnimationLoop(Bn),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(C){un=C,tt.setAnimationLoop(C),C===null?wi.stop():wi.start()},tt.addEventListener("sessionstart",lc),tt.addEventListener("sessionend",cc),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(X),X=tt.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,X,L),p=Jt.get(C,y.length),p.init(X),y.push(p),mt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),B.setFromProjectionMatrix(mt),at=this.localClippingEnabled,K=ft.init(this.clippingPlanes,at),g=Et.get(C,x.length),g.init(),x.push(g),tt.enabled===!0&&tt.isPresenting===!0){const gt=_.xr.getDepthSensingMesh();gt!==null&&zo(gt,X,-1/0,_.sortObjects)}zo(C,X,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(W,Y),it=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,it&&zt.addToRenderList(g,C),this.info.render.frame++,K===!0&&ft.beginShadows();const Z=p.state.shadowsArray;Ct.render(Z,C,X),K===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=g.opaque,q=g.transmissive;if(p.setupLights(),X.isArrayCamera){const gt=X.cameras;if(q.length>0)for(let bt=0,Lt=gt.length;bt<Lt;bt++){const It=gt[bt];dc(J,q,C,It)}it&&zt.render(C);for(let bt=0,Lt=gt.length;bt<Lt;bt++){const It=gt[bt];hc(g,C,It,It.viewport)}}else q.length>0&&dc(J,q,C,X),it&&zt.render(C),hc(g,C,X);L!==null&&(D.updateMultisampleRenderTarget(L),D.updateRenderTargetMipmap(L)),C.isScene===!0&&C.onAfterRender(_,C,X),pe.resetDefaultState(),b=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],K===!0&&ft.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function zo(C,X,Z,J){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)Z=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||B.intersectsSprite(C)){J&&Ot.setFromMatrixPosition(C.matrixWorld).applyMatrix4(mt);const bt=nt.update(C),Lt=C.material;Lt.visible&&g.push(C,bt,Lt,Z,Ot.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||B.intersectsObject(C))){const bt=nt.update(C),Lt=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ot.copy(C.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Ot.copy(bt.boundingSphere.center)),Ot.applyMatrix4(C.matrixWorld).applyMatrix4(mt)),Array.isArray(Lt)){const It=bt.groups;for(let Vt=0,Xt=It.length;Vt<Xt;Vt++){const Dt=It[Vt],se=Lt[Dt.materialIndex];se&&se.visible&&g.push(C,bt,se,Z,Ot.z,Dt)}}else Lt.visible&&g.push(C,bt,Lt,Z,Ot.z,null)}}const gt=C.children;for(let bt=0,Lt=gt.length;bt<Lt;bt++)zo(gt[bt],X,Z,J)}function hc(C,X,Z,J){const q=C.opaque,gt=C.transmissive,bt=C.transparent;p.setupLightsView(Z),K===!0&&ft.setGlobalState(_.clippingPlanes,Z),J&&vt.viewport(I.copy(J)),q.length>0&&Tr(q,X,Z),gt.length>0&&Tr(gt,X,Z),bt.length>0&&Tr(bt,X,Z),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function dc(C,X,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new Vi(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?yr:ei,minFilter:Bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));const gt=p.state.transmissionRenderTarget[J.id],bt=J.viewport||I;gt.setSize(bt.z,bt.w);const Lt=_.getRenderTarget();_.setRenderTarget(gt),_.getClearColor(U),z=_.getClearAlpha(),z<1&&_.setClearColor(16777215,.5),_.clear(),it&&zt.render(Z);const It=_.toneMapping;_.toneMapping=_i;const Vt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),K===!0&&ft.setGlobalState(_.clippingPlanes,J),Tr(C,Z,J),D.updateMultisampleRenderTarget(gt),D.updateRenderTargetMipmap(gt),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Dt=0,se=X.length;Dt<se;Dt++){const me=X[Dt],ge=me.object,Ze=me.geometry,oe=me.material,Nt=me.group;if(oe.side===Ne&&ge.layers.test(J.layers)){const zn=oe.side;oe.side=je,oe.needsUpdate=!0,uc(ge,Z,J,Ze,oe,Nt),oe.side=zn,oe.needsUpdate=!0,Xt=!0}}Xt===!0&&(D.updateMultisampleRenderTarget(gt),D.updateRenderTargetMipmap(gt))}_.setRenderTarget(Lt),_.setClearColor(U,z),Vt!==void 0&&(J.viewport=Vt),_.toneMapping=It}function Tr(C,X,Z){const J=X.isScene===!0?X.overrideMaterial:null;for(let q=0,gt=C.length;q<gt;q++){const bt=C[q],Lt=bt.object,It=bt.geometry,Vt=J===null?bt.material:J,Xt=bt.group;Lt.layers.test(Z.layers)&&uc(Lt,X,Z,It,Vt,Xt)}}function uc(C,X,Z,J,q,gt){C.onBeforeRender(_,X,Z,J,q,gt),C.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),q.onBeforeRender(_,X,Z,J,C,gt),q.transparent===!0&&q.side===Ne&&q.forceSinglePass===!1?(q.side=je,q.needsUpdate=!0,_.renderBufferDirect(Z,X,J,q,C,gt),q.side=ti,q.needsUpdate=!0,_.renderBufferDirect(Z,X,J,q,C,gt),q.side=Ne):_.renderBufferDirect(Z,X,J,q,C,gt),C.onAfterRender(_,X,Z,J,q,gt)}function Ar(C,X,Z){X.isScene!==!0&&(X=Gt);const J=wt.get(C),q=p.state.lights,gt=p.state.shadowsArray,bt=q.state.version,Lt=Pt.getParameters(C,q.state,gt,X,Z),It=Pt.getProgramCacheKey(Lt);let Vt=J.programs;J.environment=C.isMeshStandardMaterial?X.environment:null,J.fog=X.fog,J.envMap=(C.isMeshStandardMaterial?$:w).get(C.envMap||J.environment),J.envMapRotation=J.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,Vt===void 0&&(C.addEventListener("dispose",Wt),Vt=new Map,J.programs=Vt);let Xt=Vt.get(It);if(Xt!==void 0){if(J.currentProgram===Xt&&J.lightsStateVersion===bt)return pc(C,Lt),Xt}else Lt.uniforms=Pt.getUniforms(C),C.onBeforeCompile(Lt,_),Xt=Pt.acquireProgram(Lt,It),Vt.set(It,Xt),J.uniforms=Lt.uniforms;const Dt=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Dt.clippingPlanes=ft.uniform),pc(C,Lt),J.needsLights=nu(C),J.lightsStateVersion=bt,J.needsLights&&(Dt.ambientLightColor.value=q.state.ambient,Dt.lightProbe.value=q.state.probe,Dt.directionalLights.value=q.state.directional,Dt.directionalLightShadows.value=q.state.directionalShadow,Dt.spotLights.value=q.state.spot,Dt.spotLightShadows.value=q.state.spotShadow,Dt.rectAreaLights.value=q.state.rectArea,Dt.ltc_1.value=q.state.rectAreaLTC1,Dt.ltc_2.value=q.state.rectAreaLTC2,Dt.pointLights.value=q.state.point,Dt.pointLightShadows.value=q.state.pointShadow,Dt.hemisphereLights.value=q.state.hemi,Dt.directionalShadowMap.value=q.state.directionalShadowMap,Dt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Dt.spotShadowMap.value=q.state.spotShadowMap,Dt.spotLightMatrix.value=q.state.spotLightMatrix,Dt.spotLightMap.value=q.state.spotLightMap,Dt.pointShadowMap.value=q.state.pointShadowMap,Dt.pointShadowMatrix.value=q.state.pointShadowMatrix),J.currentProgram=Xt,J.uniformsList=null,Xt}function fc(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=po.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function pc(C,X){const Z=wt.get(C);Z.outputColorSpace=X.outputColorSpace,Z.batching=X.batching,Z.batchingColor=X.batchingColor,Z.instancing=X.instancing,Z.instancingColor=X.instancingColor,Z.instancingMorph=X.instancingMorph,Z.skinning=X.skinning,Z.morphTargets=X.morphTargets,Z.morphNormals=X.morphNormals,Z.morphColors=X.morphColors,Z.morphTargetsCount=X.morphTargetsCount,Z.numClippingPlanes=X.numClippingPlanes,Z.numIntersection=X.numClipIntersection,Z.vertexAlphas=X.vertexAlphas,Z.vertexTangents=X.vertexTangents,Z.toneMapping=X.toneMapping}function tu(C,X,Z,J,q){X.isScene!==!0&&(X=Gt),D.resetTextureUnits();const gt=X.fog,bt=J.isMeshStandardMaterial?X.environment:null,Lt=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Bs,It=(J.isMeshStandardMaterial?$:w).get(J.envMap||bt),Vt=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Xt=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Dt=!!Z.morphAttributes.position,se=!!Z.morphAttributes.normal,me=!!Z.morphAttributes.color;let ge=_i;J.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ge=_.toneMapping);const Ze=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,oe=Ze!==void 0?Ze.length:0,Nt=wt.get(J),zn=p.state.lights;if(K===!0&&(at===!0||C!==M)){const rn=C===M&&J.id===b;ft.setState(J,C,rn)}let ae=!1;J.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==zn.state.version||Nt.outputColorSpace!==Lt||q.isBatchedMesh&&Nt.batching===!1||!q.isBatchedMesh&&Nt.batching===!0||q.isBatchedMesh&&Nt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Nt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Nt.instancing===!1||!q.isInstancedMesh&&Nt.instancing===!0||q.isSkinnedMesh&&Nt.skinning===!1||!q.isSkinnedMesh&&Nt.skinning===!0||q.isInstancedMesh&&Nt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Nt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Nt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Nt.instancingMorph===!1&&q.morphTexture!==null||Nt.envMap!==It||J.fog===!0&&Nt.fog!==gt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==ft.numPlanes||Nt.numIntersection!==ft.numIntersection)||Nt.vertexAlphas!==Vt||Nt.vertexTangents!==Xt||Nt.morphTargets!==Dt||Nt.morphNormals!==se||Nt.morphColors!==me||Nt.toneMapping!==ge||Nt.morphTargetsCount!==oe)&&(ae=!0):(ae=!0,Nt.__version=J.version);let fn=Nt.currentProgram;ae===!0&&(fn=Ar(J,X,q));let Zi=!1,Qe=!1,Ys=!1;const ve=fn.getUniforms(),En=Nt.uniforms;if(vt.useProgram(fn.program)&&(Zi=!0,Qe=!0,Ys=!0),J.id!==b&&(b=J.id,Qe=!0),Zi||M!==C){vt.buffers.depth.getReversed()?(rt.copy(C.projectionMatrix),af(rt),lf(rt),ve.setValue(O,"projectionMatrix",rt)):ve.setValue(O,"projectionMatrix",C.projectionMatrix),ve.setValue(O,"viewMatrix",C.matrixWorldInverse);const oi=ve.map.cameraPosition;oi!==void 0&&oi.setValue(O,At.setFromMatrixPosition(C.matrixWorld)),Tt.logarithmicDepthBuffer&&ve.setValue(O,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&ve.setValue(O,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,Qe=!0,Ys=!0)}if(q.isSkinnedMesh){ve.setOptional(O,q,"bindMatrix"),ve.setOptional(O,q,"bindMatrixInverse");const rn=q.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),ve.setValue(O,"boneTexture",rn.boneTexture,D))}q.isBatchedMesh&&(ve.setOptional(O,q,"batchingTexture"),ve.setValue(O,"batchingTexture",q._matricesTexture,D),ve.setOptional(O,q,"batchingIdTexture"),ve.setValue(O,"batchingIdTexture",q._indirectTexture,D),ve.setOptional(O,q,"batchingColorTexture"),q._colorsTexture!==null&&ve.setValue(O,"batchingColorTexture",q._colorsTexture,D));const $s=Z.morphAttributes;if(($s.position!==void 0||$s.normal!==void 0||$s.color!==void 0)&&Ht.update(q,Z,fn),(Qe||Nt.receiveShadow!==q.receiveShadow)&&(Nt.receiveShadow=q.receiveShadow,ve.setValue(O,"receiveShadow",q.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(En.envMap.value=It,En.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&X.environment!==null&&(En.envMapIntensity.value=X.environmentIntensity),Qe&&(ve.setValue(O,"toneMappingExposure",_.toneMappingExposure),Nt.needsLights&&eu(En,Ys),gt&&J.fog===!0&&xt.refreshFogUniforms(En,gt),xt.refreshMaterialUniforms(En,J,F,k,p.state.transmissionRenderTarget[C.id]),po.upload(O,fc(Nt),En,D)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(po.upload(O,fc(Nt),En,D),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&ve.setValue(O,"center",q.center),ve.setValue(O,"modelViewMatrix",q.modelViewMatrix),ve.setValue(O,"normalMatrix",q.normalMatrix),ve.setValue(O,"modelMatrix",q.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const rn=J.uniformsGroups;for(let oi=0,ai=rn.length;oi<ai;oi++){const mc=rn[oi];G.update(mc,fn),G.bind(mc,fn)}}return fn}function eu(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function nu(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(C,X,Z){wt.get(C.texture).__webglTexture=X,wt.get(C.depthTexture).__webglTexture=Z;const J=wt.get(C);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,X){const Z=wt.get(C);Z.__webglFramebuffer=X,Z.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,Z=0){L=C,E=X,R=Z;let J=!0,q=null,gt=!1,bt=!1;if(C){const It=wt.get(C);if(It.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(O.FRAMEBUFFER,null),J=!1;else if(It.__webglFramebuffer===void 0)D.setupRenderTarget(C);else if(It.__hasExternalTextures)D.rebindTextures(C,wt.get(C.texture).__webglTexture,wt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Dt=C.depthTexture;if(It.__boundDepthTexture!==Dt){if(Dt!==null&&wt.has(Dt)&&(C.width!==Dt.image.width||C.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(C)}}const Vt=C.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(bt=!0);const Xt=wt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Xt[X])?q=Xt[X][Z]:q=Xt[X],gt=!0):C.samples>0&&D.useMultisampledRTT(C)===!1?q=wt.get(C).__webglMultisampledFramebuffer:Array.isArray(Xt)?q=Xt[Z]:q=Xt,I.copy(C.viewport),V.copy(C.scissor),S=C.scissorTest}else I.copy(Q).multiplyScalar(F).floor(),V.copy(st).multiplyScalar(F).floor(),S=pt;if(vt.bindFramebuffer(O.FRAMEBUFFER,q)&&J&&vt.drawBuffers(C,q),vt.viewport(I),vt.scissor(V),vt.setScissorTest(S),gt){const It=wt.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+X,It.__webglTexture,Z)}else if(bt){const It=wt.get(C.texture),Vt=X||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,It.__webglTexture,Z||0,Vt)}b=-1},this.readRenderTargetPixels=function(C,X,Z,J,q,gt,bt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=wt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&bt!==void 0&&(Lt=Lt[bt]),Lt){vt.bindFramebuffer(O.FRAMEBUFFER,Lt);try{const It=C.texture,Vt=It.format,Xt=It.type;if(!Tt.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-J&&Z>=0&&Z<=C.height-q&&O.readPixels(X,Z,J,q,$t.convert(Vt),$t.convert(Xt),gt)}finally{const It=L!==null?wt.get(L).__webglFramebuffer:null;vt.bindFramebuffer(O.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(C,X,Z,J,q,gt,bt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=wt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&bt!==void 0&&(Lt=Lt[bt]),Lt){const It=C.texture,Vt=It.format,Xt=It.type;if(!Tt.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Tt.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=C.width-J&&Z>=0&&Z<=C.height-q){vt.bindFramebuffer(O.FRAMEBUFFER,Lt);const Dt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Dt),O.bufferData(O.PIXEL_PACK_BUFFER,gt.byteLength,O.STREAM_READ),O.readPixels(X,Z,J,q,$t.convert(Vt),$t.convert(Xt),0);const se=L!==null?wt.get(L).__webglFramebuffer:null;vt.bindFramebuffer(O.FRAMEBUFFER,se);const me=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await of(O,me,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Dt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,gt),O.deleteBuffer(Dt),O.deleteSync(me),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,X=null,Z=0){C.isTexture!==!0&&(nr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,C=arguments[1]);const J=Math.pow(2,-Z),q=Math.floor(C.image.width*J),gt=Math.floor(C.image.height*J),bt=X!==null?X.x:0,Lt=X!==null?X.y:0;D.setTexture2D(C,0),O.copyTexSubImage2D(O.TEXTURE_2D,Z,0,0,bt,Lt,q,gt),vt.unbindTexture()},this.copyTextureToTexture=function(C,X,Z=null,J=null,q=0){C.isTexture!==!0&&(nr("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,C=arguments[1],X=arguments[2],q=arguments[3]||0,Z=null);let gt,bt,Lt,It,Vt,Xt,Dt,se,me;const ge=C.isCompressedTexture?C.mipmaps[q]:C.image;Z!==null?(gt=Z.max.x-Z.min.x,bt=Z.max.y-Z.min.y,Lt=Z.isBox3?Z.max.z-Z.min.z:1,It=Z.min.x,Vt=Z.min.y,Xt=Z.isBox3?Z.min.z:0):(gt=ge.width,bt=ge.height,Lt=ge.depth||1,It=0,Vt=0,Xt=0),J!==null?(Dt=J.x,se=J.y,me=J.z):(Dt=0,se=0,me=0);const Ze=$t.convert(X.format),oe=$t.convert(X.type);let Nt;X.isData3DTexture?(D.setTexture3D(X,0),Nt=O.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(D.setTexture2DArray(X,0),Nt=O.TEXTURE_2D_ARRAY):(D.setTexture2D(X,0),Nt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,X.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,X.unpackAlignment);const zn=O.getParameter(O.UNPACK_ROW_LENGTH),ae=O.getParameter(O.UNPACK_IMAGE_HEIGHT),fn=O.getParameter(O.UNPACK_SKIP_PIXELS),Zi=O.getParameter(O.UNPACK_SKIP_ROWS),Qe=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,ge.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ge.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,It),O.pixelStorei(O.UNPACK_SKIP_ROWS,Vt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Xt);const Ys=C.isDataArrayTexture||C.isData3DTexture,ve=X.isDataArrayTexture||X.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const En=wt.get(C),$s=wt.get(X),rn=wt.get(En.__renderTarget),oi=wt.get($s.__renderTarget);vt.bindFramebuffer(O.READ_FRAMEBUFFER,rn.__webglFramebuffer),vt.bindFramebuffer(O.DRAW_FRAMEBUFFER,oi.__webglFramebuffer);for(let ai=0;ai<Lt;ai++)Ys&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,wt.get(C).__webglTexture,q,Xt+ai),C.isDepthTexture?(ve&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,wt.get(X).__webglTexture,q,me+ai),O.blitFramebuffer(It,Vt,gt,bt,Dt,se,gt,bt,O.DEPTH_BUFFER_BIT,O.NEAREST)):ve?O.copyTexSubImage3D(Nt,q,Dt,se,me+ai,It,Vt,gt,bt):O.copyTexSubImage2D(Nt,q,Dt,se,me+ai,It,Vt,gt,bt);vt.bindFramebuffer(O.READ_FRAMEBUFFER,null),vt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ve?C.isDataTexture||C.isData3DTexture?O.texSubImage3D(Nt,q,Dt,se,me,gt,bt,Lt,Ze,oe,ge.data):X.isCompressedArrayTexture?O.compressedTexSubImage3D(Nt,q,Dt,se,me,gt,bt,Lt,Ze,ge.data):O.texSubImage3D(Nt,q,Dt,se,me,gt,bt,Lt,Ze,oe,ge):C.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,q,Dt,se,gt,bt,Ze,oe,ge.data):C.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,q,Dt,se,ge.width,ge.height,Ze,ge.data):O.texSubImage2D(O.TEXTURE_2D,q,Dt,se,gt,bt,Ze,oe,ge);O.pixelStorei(O.UNPACK_ROW_LENGTH,zn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ae),O.pixelStorei(O.UNPACK_SKIP_PIXELS,fn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Zi),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Qe),q===0&&X.generateMipmaps&&O.generateMipmap(Nt),vt.unbindTexture()},this.copyTextureToTexture3D=function(C,X,Z=null,J=null,q=0){return C.isTexture!==!0&&(nr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,J=arguments[1]||null,C=arguments[2],X=arguments[3],q=arguments[4]||0),nr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,X,Z,J,q)},this.initRenderTarget=function(C){wt.get(C).__webglFramebuffer===void 0&&D.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?D.setTextureCube(C,0):C.isData3DTexture?D.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?D.setTexture2DArray(C,0):D.setTexture2D(C,0),vt.unbindTexture()},this.resetState=function(){E=0,R=0,L=null,vt.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}class Vl{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Zt(t),this.near=e,this.far=i}clone(){return new Vl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class _v extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class xv extends He{constructor(t=null,e=1,i=1,s,r,o,a,l,c=sn,h=sn,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ph extends bn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ds=new fe,mh=new fe,jr=[],gh=new ii,yv=new fe,Qs=new ht,tr=new zs;class yn extends ht{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ph(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,yv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ds),gh.copy(t.boundingBox).applyMatrix4(ds),this.boundingBox.union(gh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new zs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ds),tr.copy(t.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(tr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Qs.geometry=this.geometry,Qs.material=this.material,Qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tr.copy(this.boundingSphere),tr.applyMatrix4(i),t.ray.intersectsSphere(tr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ds),mh.multiplyMatrices(i,ds),Qs.matrixWorld=mh,Qs.raycast(t,jr);for(let o=0,a=jr.length;o<a;o++){const l=jr[o];l.instanceId=r,l.object=this,e.push(l)}jr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ph(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new xv(new Float32Array(s*this.count),s,this.count,Ul,In));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Gl extends Hs{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const xo=new A,yo=new A,vh=new fe,er=new Ro,Zr=new zs,ma=new A,_h=new A;class Mv extends ye{constructor(t=new Se,e=new Gl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)xo.fromBufferAttribute(e,s-1),yo.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=xo.distanceTo(yo);t.setAttribute("lineDistance",new Yt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zr.copy(i.boundingSphere),Zr.applyMatrix4(s),Zr.radius+=r,t.ray.intersectsSphere(Zr)===!1)return;vh.copy(s).invert(),er.copy(t.ray).applyMatrix4(vh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let v=f,g=m-1;v<g;v+=c){const p=h.getX(v),x=h.getX(v+1),y=Jr(this,t,er,l,p,x);y&&e.push(y)}if(this.isLineLoop){const v=h.getX(m-1),g=h.getX(f),p=Jr(this,t,er,l,v,g);p&&e.push(p)}}else{const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let v=f,g=m-1;v<g;v+=c){const p=Jr(this,t,er,l,v,v+1);p&&e.push(p)}if(this.isLineLoop){const v=Jr(this,t,er,l,m-1,f);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Jr(n,t,e,i,s,r){const o=n.geometry.attributes.position;if(xo.fromBufferAttribute(o,s),yo.fromBufferAttribute(o,r),e.distanceSqToSegment(xo,yo,ma,_h)>i)return;ma.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(ma);if(!(l<t.near||l>t.far))return{distance:l,point:_h.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const xh=new A,yh=new A;class Ld extends Mv{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)xh.fromBufferAttribute(e,s),yh.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+xh.distanceTo(yh);t.setAttribute("lineDistance",new Yt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Rn extends He{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class kn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const h=i[s],u=i[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ct:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new A,s=[],r=[],o=[],a=new A,l=new fe;for(let f=0;f<=t;f++){const m=f/t;s[f]=this.getTangentAt(m,new A)}r[0]=new A,o[0]=new A;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Ie(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ie(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Wl extends kn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ct){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class bv extends Wl{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Xl(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const Kr=new A,ga=new Xl,va=new Xl,_a=new Xl;class Lo extends kn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new A){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Kr.subVectors(s[0],s[1]).add(s[0]),c=Kr);const d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Kr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Kr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),ga.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,v,g),va.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,v,g),_a.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,v,g)}else this.curveType==="catmullrom"&&(ga.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),va.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),_a.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(ga.calc(l),va.calc(l),_a.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Mh(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function Sv(n,t){const e=1-n;return e*e*t}function wv(n,t){return 2*(1-n)*n*t}function Ev(n,t){return n*n*t}function rr(n,t,e,i){return Sv(n,t)+wv(n,e)+Ev(n,i)}function Tv(n,t){const e=1-n;return e*e*e*t}function Av(n,t){const e=1-n;return 3*e*e*n*t}function Cv(n,t){return 3*(1-n)*n*n*t}function Rv(n,t){return n*n*n*t}function or(n,t,e,i,s){return Tv(n,t)+Av(n,e)+Cv(n,i)+Rv(n,s)}class Id extends kn{constructor(t=new ct,e=new ct,i=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ct){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(or(t,s.x,r.x,o.x,a.x),or(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Pv extends kn{constructor(t=new A,e=new A,i=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new A){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(or(t,s.x,r.x,o.x,a.x),or(t,s.y,r.y,o.y,a.y),or(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Dd extends kn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lv extends kn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ud extends kn{constructor(t=new ct,e=new ct,i=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ct){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(rr(t,s.x,r.x,o.x),rr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ql extends kn{constructor(t=new A,e=new A,i=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new A){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(rr(t,s.x,r.x,o.x),rr(t,s.y,r.y,o.y),rr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nd extends kn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Mh(a,l.x,c.x,h.x,d.x),Mh(a,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new ct().fromArray(s))}return this}}var Mo=Object.freeze({__proto__:null,ArcCurve:bv,CatmullRomCurve3:Lo,CubicBezierCurve:Id,CubicBezierCurve3:Pv,EllipseCurve:Wl,LineCurve:Dd,LineCurve3:Lv,QuadraticBezierCurve:Ud,QuadraticBezierCurve3:ql,SplineCurve:Nd});class Iv extends kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Mo[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Mo[s.type]().fromJSON(s))}return this}}class _l extends Iv{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Dd(this.currentPoint.clone(),new ct(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new Ud(this.currentPoint.clone(),new ct(t,e),new ct(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new Id(this.currentPoint.clone(),new ct(t,e),new ct(i,s),new ct(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Nd(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const c=new Wl(t,e,i,s,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Yl extends Se{constructor(t=[new ct(0,-.5),new ct(.5,0),new ct(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Ie(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,d=new A,u=new ct,f=new A,m=new A,v=new A;let g=0,p=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:g=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,f.x=p*1,f.y=-g,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:g=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(m)}for(let x=0;x<=e;x++){const y=i+x*h*s,_=Math.sin(y),P=Math.cos(y);for(let E=0;E<=t.length-1;E++){d.x=t[E].x*_,d.y=t[E].y,d.z=t[E].x*P,o.push(d.x,d.y,d.z),u.x=x/e,u.y=E/(t.length-1),a.push(u.x,u.y);const R=l[3*E+0]*_,L=l[3*E+1],b=l[3*E+0]*P;c.push(R,L,b)}}for(let x=0;x<e;x++)for(let y=0;y<t.length-1;y++){const _=y+x*t.length,P=_,E=_+t.length,R=_+t.length+1,L=_+1;r.push(P,E,L),r.push(R,L,E)}this.setIndex(r),this.setAttribute("position",new Yt(o,3)),this.setAttribute("uv",new Yt(a,2)),this.setAttribute("normal",new Yt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yl(t.points,t.segments,t.phiStart,t.phiLength)}}class $l extends Yl{constructor(t=1,e=1,i=4,s=8){const r=new _l;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new $l(t.radius,t.length,t.capSegments,t.radialSegments)}}class vs extends Se{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new A,h=new ct;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=i+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(a,3)),this.setAttribute("uv",new Yt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Be extends Se{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let m=0;const v=[],g=i/2;let p=0;x(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Yt(d,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(f,2));function x(){const _=new A,P=new A;let E=0;const R=(e-t)/i;for(let L=0;L<=r;L++){const b=[],M=L/r,I=M*(e-t)+t;for(let V=0;V<=s;V++){const S=V/s,U=S*l+a,z=Math.sin(U),N=Math.cos(U);P.x=I*z,P.y=-M*i+g,P.z=I*N,d.push(P.x,P.y,P.z),_.set(z,R,N).normalize(),u.push(_.x,_.y,_.z),f.push(S,1-M),b.push(m++)}v.push(b)}for(let L=0;L<s;L++)for(let b=0;b<r;b++){const M=v[b][L],I=v[b+1][L],V=v[b+1][L+1],S=v[b][L+1];(t>0||b!==0)&&(h.push(M,I,S),E+=3),(e>0||b!==r-1)&&(h.push(I,V,S),E+=3)}c.addGroup(p,E,0),p+=E}function y(_){const P=m,E=new ct,R=new A;let L=0;const b=_===!0?t:e,M=_===!0?1:-1;for(let V=1;V<=s;V++)d.push(0,g*M,0),u.push(0,M,0),f.push(.5,.5),m++;const I=m;for(let V=0;V<=s;V++){const U=V/s*l+a,z=Math.cos(U),N=Math.sin(U);R.x=b*N,R.y=g*M,R.z=b*z,d.push(R.x,R.y,R.z),u.push(0,M,0),E.x=z*.5+.5,E.y=N*.5*M+.5,f.push(E.x,E.y),m++}for(let V=0;V<s;V++){const S=P+V,U=I+V;_===!0?h.push(U,U+1,S):h.push(U+1,U,S),L+=3}c.addGroup(p,L,_===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Be(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Jn extends Be{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Jn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class jl extends Se{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new Yt(r,3)),this.setAttribute("normal",new Yt(r.slice(),3)),this.setAttribute("uv",new Yt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const y=new A,_=new A,P=new A;for(let E=0;E<e.length;E+=3)f(e[E+0],y),f(e[E+1],_),f(e[E+2],P),l(y,_,P,x)}function l(x,y,_,P){const E=P+1,R=[];for(let L=0;L<=E;L++){R[L]=[];const b=x.clone().lerp(_,L/E),M=y.clone().lerp(_,L/E),I=E-L;for(let V=0;V<=I;V++)V===0&&L===E?R[L][V]=b:R[L][V]=b.clone().lerp(M,V/I)}for(let L=0;L<E;L++)for(let b=0;b<2*(E-L)-1;b++){const M=Math.floor(b/2);b%2===0?(u(R[L][M+1]),u(R[L+1][M]),u(R[L][M])):(u(R[L][M+1]),u(R[L+1][M+1]),u(R[L+1][M]))}}function c(x){const y=new A;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(x),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function h(){const x=new A;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];const _=g(x)/2/Math.PI+.5,P=p(x)/Math.PI+.5;o.push(_,1-P)}m(),d()}function d(){for(let x=0;x<o.length;x+=6){const y=o[x+0],_=o[x+2],P=o[x+4],E=Math.max(y,_,P),R=Math.min(y,_,P);E>.9&&R<.1&&(y<.2&&(o[x+0]+=1),_<.2&&(o[x+2]+=1),P<.2&&(o[x+4]+=1))}}function u(x){r.push(x.x,x.y,x.z)}function f(x,y){const _=x*3;y.x=t[_+0],y.y=t[_+1],y.z=t[_+2]}function m(){const x=new A,y=new A,_=new A,P=new A,E=new ct,R=new ct,L=new ct;for(let b=0,M=0;b<r.length;b+=9,M+=6){x.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),_.set(r[b+6],r[b+7],r[b+8]),E.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),L.set(o[M+4],o[M+5]),P.copy(x).add(y).add(_).divideScalar(3);const I=g(P);v(E,M+0,x,I),v(R,M+2,y,I),v(L,M+4,_,I)}}function v(x,y,_,P){P<0&&x.x===1&&(o[y]=x.x-1),_.x===0&&_.z===0&&(o[y]=P/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jl(t.vertices,t.indices,t.radius,t.details)}}const Qr=new A,to=new A,xa=new A,eo=new cn;class Od extends Se{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Ms*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);const{a:v,b:g,c:p}=eo;if(v.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),eo.getNormal(xa),d[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,d[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let x=0;x<3;x++){const y=(x+1)%3,_=d[x],P=d[y],E=eo[h[x]],R=eo[h[y]],L=`${_}_${P}`,b=`${P}_${_}`;b in u&&u[b]?(xa.dot(u[b].normal)<=r&&(f.push(E.x,E.y,E.z),f.push(R.x,R.y,R.z)),u[b]=null):L in u||(u[L]={index0:c[x],index1:c[y],normal:xa.clone()})}}for(const m in u)if(u[m]){const{index0:v,index1:g}=u[m];Qr.fromBufferAttribute(a,v),to.fromBufferAttribute(a,g),f.push(Qr.x,Qr.y,Qr.z),f.push(to.x,to.y,to.z)}this.setAttribute("position",new Yt(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class $i extends _l{constructor(t){super(t),this.uuid=Yi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new _l().fromJSON(s))}return this}}const Dv={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=Fd(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,d,u,f;if(i&&(r=kv(n,t,r,e)),n.length>80*e){a=c=n[0],l=h=n[1];for(let m=e;m<s;m+=e)d=n[m],u=n[m+1],d<a&&(a=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return pr(r,o,e,a,l,f,0),o}};function Fd(n,t,e,i,s){let r,o;if(s===jv(n,t,e,i)>0)for(r=t;r<e;r+=i)o=bh(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=bh(r,n[r],n[r+1],o);return o&&Io(o,o.next)&&(gr(o),o=o.next),o}function Gi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Io(e,e.next)||be(e.prev,e,e.next)===0)){if(gr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function pr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Gv(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?Nv(n,i,s,r):Uv(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),gr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Ov(Gi(n),t,e),pr(n,t,e,i,s,r,2)):o===2&&Fv(n,t,e,i,s,r):pr(Gi(n),t,e,i,s,r,1);break}}}function Uv(n){const t=n.prev,e=n,i=n.next;if(be(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,u=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c;let m=i.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=f&&_s(s,a,r,l,o,c,m.x,m.y)&&be(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Nv(n,t,e,i){const s=n.prev,r=n,o=n.next;if(be(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=a<l?a<c?a:c:l<c?l:c,m=h<d?h<u?h:u:d<u?d:u,v=a>l?a>c?a:c:l>c?l:c,g=h>d?h>u?h:u:d>u?d:u,p=xl(f,m,t,e,i),x=xl(v,g,t,e,i);let y=n.prevZ,_=n.nextZ;for(;y&&y.z>=p&&_&&_.z<=x;){if(y.x>=f&&y.x<=v&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&_s(a,h,l,d,c,u,y.x,y.y)&&be(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=f&&_.x<=v&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&_s(a,h,l,d,c,u,_.x,_.y)&&be(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=v&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&_s(a,h,l,d,c,u,y.x,y.y)&&be(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=x;){if(_.x>=f&&_.x<=v&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&_s(a,h,l,d,c,u,_.x,_.y)&&be(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Ov(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!Io(s,r)&&kd(s,i,i.next,r)&&mr(s,r)&&mr(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),gr(i),gr(i.next),i=n=r),i=i.next}while(i!==n);return Gi(i)}function Fv(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&qv(o,a)){let l=Bd(o,a);o=Gi(o,o.next),l=Gi(l,l.next),pr(o,t,e,i,s,r,0),pr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function kv(n,t,e,i){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Fd(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(Xv(c));for(s.sort(Bv),r=0;r<s.length;r++)e=zv(s[r],e);return e}function Bv(n,t){return n.x-t.x}function zv(n,t){const e=Hv(n,t);if(!e)return t;const i=Bd(e,n);return Gi(i,i.next),Gi(e,e.next)}function Hv(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>i&&(i=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,d;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&_s(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),mr(e,n)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&Vv(s,e)))&&(s=e,h=d)),e=e.next;while(e!==a);return s}function Vv(n,t){return be(n.prev,n,t.prev)<0&&be(t.next,n,n.next)<0}function Gv(n,t,e,i){let s=n;do s.z===0&&(s.z=xl(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Wv(s)}function Wv(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function xl(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Xv(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function _s(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function qv(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Yv(n,t)&&(mr(n,t)&&mr(t,n)&&$v(n,t)&&(be(n.prev,n,t.prev)||be(n,t.prev,t))||Io(n,t)&&be(n.prev,n,n.next)>0&&be(t.prev,t,t.next)>0)}function be(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Io(n,t){return n.x===t.x&&n.y===t.y}function kd(n,t,e,i){const s=io(be(n,t,e)),r=io(be(n,t,i)),o=io(be(e,i,n)),a=io(be(e,i,t));return!!(s!==r&&o!==a||s===0&&no(n,e,t)||r===0&&no(n,i,t)||o===0&&no(e,n,i)||a===0&&no(e,t,i))}function no(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function io(n){return n>0?1:n<0?-1:0}function Yv(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&kd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function mr(n,t){return be(n.prev,n,n.next)<0?be(n,t,n.next)>=0&&be(n,n.prev,t)>=0:be(n,t,n.prev)<0||be(n,n.next,t)<0}function $v(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Bd(n,t){const e=new yl(n.i,n.x,n.y),i=new yl(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function bh(n,t,e,i){const s=new yl(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function gr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function yl(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function jv(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class xi{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return xi.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Sh(t),wh(i,t);let o=t.length;e.forEach(Sh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,wh(i,e[l]);const a=Dv.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Sh(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function wh(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Gs extends Se{constructor(t=new $i([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Yt(s,3)),this.setAttribute("uv",new Yt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:Zv;let y,_=!1,P,E,R,L;p&&(y=p.getSpacedPoints(h),_=!0,u=!1,P=p.computeFrenetFrames(h,!1),E=new A,R=new A,L=new A),u||(g=0,f=0,m=0,v=0);const b=a.extractPoints(c);let M=b.shape;const I=b.holes;if(!xi.isClockWise(M)){M=M.reverse();for(let it=0,dt=I.length;it<dt;it++){const O=I[it];xi.isClockWise(O)&&(I[it]=O.reverse())}}const S=xi.triangulateShape(M,I),U=M;for(let it=0,dt=I.length;it<dt;it++){const O=I[it];M=M.concat(O)}function z(it,dt,O){return dt||console.error("THREE.ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(dt,O)}const N=M.length,k=S.length;function F(it,dt,O){let Ut,ut,Tt;const vt=it.x-dt.x,Bt=it.y-dt.y,wt=O.x-it.x,D=O.y-it.y,w=vt*vt+Bt*Bt,$=vt*D-Bt*wt;if(Math.abs($)>Number.EPSILON){const et=Math.sqrt(w),lt=Math.sqrt(wt*wt+D*D),nt=dt.x-Bt/et,Pt=dt.y+vt/et,xt=O.x-D/lt,Et=O.y+wt/lt,Jt=((xt-nt)*D-(Et-Pt)*wt)/(vt*D-Bt*wt);Ut=nt+vt*Jt-it.x,ut=Pt+Bt*Jt-it.y;const ft=Ut*Ut+ut*ut;if(ft<=2)return new ct(Ut,ut);Tt=Math.sqrt(ft/2)}else{let et=!1;vt>Number.EPSILON?wt>Number.EPSILON&&(et=!0):vt<-Number.EPSILON?wt<-Number.EPSILON&&(et=!0):Math.sign(Bt)===Math.sign(D)&&(et=!0),et?(Ut=-Bt,ut=vt,Tt=Math.sqrt(w)):(Ut=vt,ut=Bt,Tt=Math.sqrt(w/2))}return new ct(Ut/Tt,ut/Tt)}const W=[];for(let it=0,dt=U.length,O=dt-1,Ut=it+1;it<dt;it++,O++,Ut++)O===dt&&(O=0),Ut===dt&&(Ut=0),W[it]=F(U[it],U[O],U[Ut]);const Y=[];let Q,st=W.concat();for(let it=0,dt=I.length;it<dt;it++){const O=I[it];Q=[];for(let Ut=0,ut=O.length,Tt=ut-1,vt=Ut+1;Ut<ut;Ut++,Tt++,vt++)Tt===ut&&(Tt=0),vt===ut&&(vt=0),Q[Ut]=F(O[Ut],O[Tt],O[vt]);Y.push(Q),st=st.concat(Q)}for(let it=0;it<g;it++){const dt=it/g,O=f*Math.cos(dt*Math.PI/2),Ut=m*Math.sin(dt*Math.PI/2)+v;for(let ut=0,Tt=U.length;ut<Tt;ut++){const vt=z(U[ut],W[ut],Ut);rt(vt.x,vt.y,-O)}for(let ut=0,Tt=I.length;ut<Tt;ut++){const vt=I[ut];Q=Y[ut];for(let Bt=0,wt=vt.length;Bt<wt;Bt++){const D=z(vt[Bt],Q[Bt],Ut);rt(D.x,D.y,-O)}}}const pt=m+v;for(let it=0;it<N;it++){const dt=u?z(M[it],st[it],pt):M[it];_?(R.copy(P.normals[0]).multiplyScalar(dt.x),E.copy(P.binormals[0]).multiplyScalar(dt.y),L.copy(y[0]).add(R).add(E),rt(L.x,L.y,L.z)):rt(dt.x,dt.y,0)}for(let it=1;it<=h;it++)for(let dt=0;dt<N;dt++){const O=u?z(M[dt],st[dt],pt):M[dt];_?(R.copy(P.normals[it]).multiplyScalar(O.x),E.copy(P.binormals[it]).multiplyScalar(O.y),L.copy(y[it]).add(R).add(E),rt(L.x,L.y,L.z)):rt(O.x,O.y,d/h*it)}for(let it=g-1;it>=0;it--){const dt=it/g,O=f*Math.cos(dt*Math.PI/2),Ut=m*Math.sin(dt*Math.PI/2)+v;for(let ut=0,Tt=U.length;ut<Tt;ut++){const vt=z(U[ut],W[ut],Ut);rt(vt.x,vt.y,d+O)}for(let ut=0,Tt=I.length;ut<Tt;ut++){const vt=I[ut];Q=Y[ut];for(let Bt=0,wt=vt.length;Bt<wt;Bt++){const D=z(vt[Bt],Q[Bt],Ut);_?rt(D.x,D.y+y[h-1].y,y[h-1].x+O):rt(D.x,D.y,d+O)}}}B(),K();function B(){const it=s.length/3;if(u){let dt=0,O=N*dt;for(let Ut=0;Ut<k;Ut++){const ut=S[Ut];mt(ut[2]+O,ut[1]+O,ut[0]+O)}dt=h+g*2,O=N*dt;for(let Ut=0;Ut<k;Ut++){const ut=S[Ut];mt(ut[0]+O,ut[1]+O,ut[2]+O)}}else{for(let dt=0;dt<k;dt++){const O=S[dt];mt(O[2],O[1],O[0])}for(let dt=0;dt<k;dt++){const O=S[dt];mt(O[0]+N*h,O[1]+N*h,O[2]+N*h)}}i.addGroup(it,s.length/3-it,0)}function K(){const it=s.length/3;let dt=0;at(U,dt),dt+=U.length;for(let O=0,Ut=I.length;O<Ut;O++){const ut=I[O];at(ut,dt),dt+=ut.length}i.addGroup(it,s.length/3-it,1)}function at(it,dt){let O=it.length;for(;--O>=0;){const Ut=O;let ut=O-1;ut<0&&(ut=it.length-1);for(let Tt=0,vt=h+g*2;Tt<vt;Tt++){const Bt=N*Tt,wt=N*(Tt+1),D=dt+Ut+Bt,w=dt+ut+Bt,$=dt+ut+wt,et=dt+Ut+wt;At(D,w,$,et)}}}function rt(it,dt,O){l.push(it),l.push(dt),l.push(O)}function mt(it,dt,O){Ot(it),Ot(dt),Ot(O);const Ut=s.length/3,ut=x.generateTopUV(i,s,Ut-3,Ut-2,Ut-1);Gt(ut[0]),Gt(ut[1]),Gt(ut[2])}function At(it,dt,O,Ut){Ot(it),Ot(dt),Ot(Ut),Ot(dt),Ot(O),Ot(Ut);const ut=s.length/3,Tt=x.generateSideWallUV(i,s,ut-6,ut-3,ut-2,ut-1);Gt(Tt[0]),Gt(Tt[1]),Gt(Tt[3]),Gt(Tt[1]),Gt(Tt[2]),Gt(Tt[3])}function Ot(it){s.push(l[it*3+0]),s.push(l[it*3+1]),s.push(l[it*3+2])}function Gt(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Jv(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Mo[s.type]().fromJSON(s)),new Gs(i,t.options)}}const Zv={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new ct(r,o),new ct(a,l),new ct(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],d=t[i*3+2],u=t[s*3],f=t[s*3+1],m=t[s*3+2],v=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ct(o,1-l),new ct(c,1-d),new ct(u,1-m),new ct(v,1-p)]:[new ct(a,1-l),new ct(h,1-d),new ct(f,1-m),new ct(g,1-p)]}};function Jv(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class yi extends jl{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new yi(t.radius,t.detail)}}class Zl extends Se{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let d=t;const u=(e-t)/s,f=new A,m=new ct;for(let v=0;v<=s;v++){for(let g=0;g<=i;g++){const p=r+g/i*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}d+=u}for(let v=0;v<s;v++){const g=v*(i+1);for(let p=0;p<i;p++){const x=p+g,y=x,_=x+i+1,P=x+i+2,E=x+1;a.push(y,_,E),a.push(_,P,E)}}this.setIndex(a),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(c,3)),this.setAttribute("uv",new Yt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Jl extends Se{constructor(t=new $i([new ct(0,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Yt(s,3)),this.setAttribute("normal",new Yt(r,3)),this.setAttribute("uv",new Yt(o,2));function c(h){const d=s.length/3,u=h.extractPoints(e);let f=u.shape;const m=u.holes;xi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){const x=m[g];xi.isClockWise(x)===!0&&(m[g]=x.reverse())}const v=xi.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){const x=m[g];f=f.concat(x)}for(let g=0,p=f.length;g<p;g++){const x=f[g];s.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let g=0,p=v.length;g<p;g++){const x=v[g],y=x[0]+d,_=x[1]+d,P=x[2]+d;i.push(y,_,P),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Kv(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];i.push(o)}return new Jl(i,t.curveSegments)}}function Kv(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class Xe extends Se{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new A,u=new A,f=[],m=[],v=[],g=[];for(let p=0;p<=i;p++){const x=[],y=p/i;let _=0;p===0&&o===0?_=.5/e:p===i&&l===Math.PI&&(_=-.5/e);for(let P=0;P<=e;P++){const E=P/e;d.x=-t*Math.cos(s+E*r)*Math.sin(o+y*a),d.y=t*Math.cos(o+y*a),d.z=t*Math.sin(s+E*r)*Math.sin(o+y*a),m.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),g.push(E+_,1-y),x.push(c++)}h.push(x)}for(let p=0;p<i;p++)for(let x=0;x<e;x++){const y=h[p][x+1],_=h[p][x],P=h[p+1][x],E=h[p+1][x+1];(p!==0||o>0)&&f.push(y,_,E),(p!==i-1||l<Math.PI)&&f.push(_,P,E)}this.setIndex(f),this.setAttribute("position",new Yt(m,3)),this.setAttribute("normal",new Yt(v,3)),this.setAttribute("uv",new Yt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class vr extends Se{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new A,d=new A,u=new A;for(let f=0;f<=i;f++)for(let m=0;m<=s;m++){const v=m/s*r,g=f/i*Math.PI*2;d.x=(t+e*Math.cos(g))*Math.cos(v),d.y=(t+e*Math.cos(g))*Math.sin(v),d.z=e*Math.sin(g),a.push(d.x,d.y,d.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(m/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let m=1;m<=s;m++){const v=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,x=(s+1)*f+m;o.push(v,g,x),o.push(g,p,x)}this.setIndex(o),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(l,3)),this.setAttribute("uv",new Yt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Kl extends Se{constructor(t=new ql(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new A,l=new A,c=new ct;let h=new A;const d=[],u=[],f=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new Yt(d,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(f,2));function v(){for(let y=0;y<e;y++)g(y);g(r===!1?e:0),x(),p()}function g(y){h=t.getPointAt(y/e,h);const _=o.normals[y],P=o.binormals[y];for(let E=0;E<=s;E++){const R=E/s*Math.PI*2,L=Math.sin(R),b=-Math.cos(R);l.x=b*_.x+L*P.x,l.y=b*_.y+L*P.y,l.z=b*_.z+L*P.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=e;y++)for(let _=1;_<=s;_++){const P=(s+1)*(y-1)+(_-1),E=(s+1)*y+(_-1),R=(s+1)*y+_,L=(s+1)*(y-1)+_;m.push(P,E,L),m.push(E,R,L)}}function x(){for(let y=0;y<=e;y++)for(let _=0;_<=s;_++)c.x=y/e,c.y=_/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Kl(new Mo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class xe extends Hs{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fd,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Qv extends Gl{static get type(){return"LineDashedMaterial"}constructor(t){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}const Eh={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class t_{constructor(t,e,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const e_=new t_;class Ql{constructor(t){this.manager=t!==void 0?t:e_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ql.DEFAULT_MATERIAL_NAME="__DEFAULT";class n_ extends Ql{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Eh.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=fr("img");function l(){h(),Eh.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(d){h(),s&&s(d),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class i_ extends Ql{constructor(t){super(t)}load(t,e,i,s){const r=new He,o=new n_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}}class zd extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class s_ extends zd{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ya=new fe,Th=new A,Ah=new A;class r_{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zl,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Th.setFromMatrixPosition(t.matrixWorld),e.position.copy(Th),Ah.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ah),e.updateMatrixWorld(),ya.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ya),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ya)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class o_ extends r_{constructor(){super(new Ed(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class a_ extends zd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new o_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class l_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ch(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ch();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ch(){return performance.now()}const Rh=new fe;class Hd{constructor(t,e,i=0,s=1/0){this.ray=new Ro(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Bl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Rh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Rh),this}intersectObject(t,e=!0,i=[]){return Ml(t,this,i,e),i.sort(Ph),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Ml(t[s],this,i,e);return i.sort(Ph),i}}function Ph(n,t){return n.distance-t.distance}function Ml(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Ml(r[o],t,e,!0)}}class Lh{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ie(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class c_ extends qi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pl);const wn={person:{name:"Manu Pratap Singh",headline:"Product Manager, AI Strategy",subline:"0→1 platforms in AdTech, Gaming and SaaS · The Lisbon MBA 2026",location:"Lisbon, Portugal",email:"sam123.manu@gmail.com",linkedin:"https://www.linkedin.com/in/pratapmanusingh",cvFile:"Manu_Pratap_Singh_CV.pdf"},cv:{availability:"Available full-time from mid-December 2026",lookingFor:"Product Manager and consulting roles in AI, platforms and growth",openTo:"Lisbon, anywhere in Europe, or remote",summary:{text:"I'm a product manager with 4+ years building consumer and B2B platforms from zero to scale: I grew a real-money gaming app to 1M+ users and built an ad exchange from scratch with $100k/month in ad spend running through it. Today I lead AI strategy, product quality and company direction at a CRM and automation company while finishing The Lisbon MBA. I have an engineering degree, read API docs, turn them into build plans and work with engineers as a peer."},signature:[{value:"1M+",label:"users and $500k+ in deposits on a real-money gaming platform",where:"GMNG"},{value:"$100k/mo",label:"ad spend through an ad exchange I built from scratch",where:"XY ADS"},{value:"< 2 months",label:"to make a whole company AI-native",where:"MR Neo"},{value:"+30%",label:"new-user retention from Everybody Wins, my idea",where:"GMNG"}],featuredCases:["ai-testing-skills","self-serve-exchange","everybody-wins"],experience:[{ids:["mr-neo"],company:"MR Neo",role:"Product Manager, AI Strategy",dates:"Aug 2026 – present",location:"India-based company · remote, part-time alongside the MBA",context:"Business automation and CRM platform. The founder brought me in; I report to him and own where AI creates value, product quality and, increasingly, company strategy.",bullets:[{text:"Reset pricing and positioning: introduced competitor benchmarking and try-before-you-upgrade add-ons, and moved the company from “a CRM/CPaaS” to helping customers grow their business. Now shaping company strategy and the operating model."},{text:"Made the whole company AI-native in **under two months**: a central AI knowledge base connected to the codebase, documentation and website, a sales AI workspace and automated team workflows. Sales decks now need **1–2 iterations** instead of many rounds, and information lag across teams has gone."},{text:"Leading the redesign into an **AI-first platform** for early 2027, where users mainly work through AI and manual paths remain."},{text:"Designed flow-conflict detection for the automation builder, so users see which flows overlap, contradict or supersede each other before they break, and an AI daily briefing on each person's tasks and workload for the week."},{text:"Unblocked a Shopify integration the developers had been stuck on for a month by speccing the integration hub, API choice and build steps; shipped and approved."},{text:"Set the product-quality bar: audited the 60+ page platform and turned my own testing method into reusable AI skills the whole team now uses."}]},{ids:["xy-ads"],company:"XY ADS",role:"Product Manager, Product & Platform",dates:"Aug 2023 – Jan 2025",location:"Gurgaon, India",context:"High-volume performance marketing agency and GMNG's parent company. I joined with no marketing background and was working at the level of 5–6-year veterans within 2–3 months.",bullets:[{text:"Built a proprietary ad exchange from scratch, moving clients from manually run DSP campaigns to a self-service platform: **$100k/month** in ad spend ran through it by the time I left, and one client grew to **$30k/month**."},{text:"Wrote API-level OpenRTB PRDs and architected the exchange for **100M+ monthly impressions**; integrated many DSPs and SSPs by breaking each partner's API docs into the exact APIs developers had to build."},{text:"Built and led the team: interviewed and hired **3 developers**; developers and designers reported to me."},{text:"Cut operating costs **15%** by moving vendors to long-term, tiered, volume-based contracts."},{text:"Designed role-based access (RBAC) so agency teams could run campaigns under central master accounts, and directed the developers to cut latency under very high traffic."}]},{ids:["gmng"],company:"GMNG",role:"Product Manager",promotion:"Promoted from Associate PM within 11 months (APM Feb 2021 – Jan 2022 · PM Feb 2022 – Jul 2023)",dates:"Feb 2021 – Jul 2023",location:"Gurgaon, India",context:"Real-money mobile gaming platform (poker and other skill games). As PM I led a team of 8–9 across development, customer support and sales.",bullets:[{text:"Scaled the platform to **1M+ users** and **$500k+ in user deposits**; a two-tier referral scheme alone brought in **200,000+ new users** in a single month."},{text:"Everybody Wins (my idea): diagnosed new-user churn caused by loss aversion and gave new players a second chance after losing their first real-money game, lifting new-user retention **30%**."},{text:"Designed a 7-day gamified poker onboarding loop (my idea): **60%** of the targeted high-paying players converted, bringing in **$40,000** in revenue."},{text:"Led an engagement push as PM (more games, the 7-day poker loop, UI changes such as pinned favourite games and faster app loading) that together **tripled gameplay frequency** and lifted revenue **50%** in key games."},{text:"Conceptualised an ad-tech Offer Wall, packaged it as a B2B SaaS module and licensed it to **3–4 companies** for about **$5–6k/month**."},{text:"Found that **80%** of depositors used Paytm and pivoted the payment gateway toward it, resolving deposit drop-offs."},{text:"Redesigned the homepage and first-time experience (**+20%** user satisfaction in an in-app survey) and integrated third-party gaming services that removed wait times and lifted revenue **20%**."},{text:"Onboarded partnerships with Dream11 and Pocket52, and contributed to shareholder presentations that secured **$100,000** in development funding."}]},{ids:["library"],company:"Career break",role:"GMAT and MBA applications",dates:"Feb – Dec 2025",location:"India",context:"Prepared for the GMAT and applied to MBA programmes; admitted to The Lisbon MBA (Jan 2026).",bullets:[]}],projects:[{ids:["lara-hotel"],name:"Lará",kind:"Current project · AI hotel platform",dates:"Oct 2026 – now",summary:"A white-label app that runs a hotel's operations and improves the guest experience with AI, for guests and every team: front desk, restaurant and bar, housekeeping and managers. I'm prototyping it with AI coding tools; the proof of concept is built and I'm preparing the pitch to a first hotel.",bullets:[{text:"AI concierge that knows the hotel and books services for guests; allergy alerts reach the restaurant team and manager within seconds and must be acknowledged, even with AI switched off."},{text:"**4** end-to-end pitch scenarios working live; AI reply drafts in Portuguese, English, French and German; iPhone and web."}]},{ids:["sovena"],name:"Sovena",kind:"MBA summer internship · 8 weeks · Lisbon",dates:"Jul – Aug 2026",summary:"Portuguese food group. Reviewed its 59-product tea range: ran consumer surveys, social listening and market research, recommended repositioning from health claims to consumption occasions, presented to a director, and handed over the research as a queryable AI research base (NotebookLM).",bullets:[]},{ids:["dhl","dhl-plane"],name:"DHL Express",kind:"MBA consulting project",dates:"2026",summary:"Market understanding for urgent 50kg+ SPOT shipments. Confidential.",bullets:[]},{ids:["vision-lab"],name:"Food image-recognition app",kind:"Undergraduate final project",dates:"2020 – 2021",summary:"A convolutional neural network (CNN) trained on 10,000 images to classify 100 foods, built into a calorie-tracking app.",bullets:[]}],education:[{ids:["lisbon-mba"],name:"The Lisbon MBA International",school:"Católica | Nova · Lisbon",dates:"Jan – Dec 2026",note:"Completing December 2026."},{ids:["mit-sloan"],name:"MIT Sloan Summer Immersion Certificate",school:"MIT Sloan · Boston · part of The Lisbon MBA",dates:"Jun 2026",note:"Managing Technological Innovation and Leadership; Global Markets and Strategy; Global Compliance and Ethical Issues; visits to Boston-based companies."},{ids:["manipal"],name:"B.Tech, Information Technology, minor in Digital Marketing",school:"Manipal Institute of Technology · India",dates:"2016 – 2020",note:""}],skills:[{label:"Product",text:"Product strategy, 0→1 platform builds, PRDs, pricing and positioning, growth, retention and onboarding, third-party API integrations, product QA and UX audits, hiring and leading cross-functional teams"},{label:"AI",text:"AI strategy and adoption, AI-first product design, AI knowledge bases and assistants on company data, AI-assisted testing and prototyping, workflow automation"},{label:"Technical",text:"APIs, OpenRTB, RBAC, SQL (working), Postman, Jira, Figma, Claude, NotebookLM"},{label:"Languages",text:"English (proficient), Hindi (native)"}],beyond:{text:"50m rifle shooting at national level · mixed martial arts (state-level training) · travel · I set up a library for underprivileged children in Rajasthan, India, and taught young people basic computer skills."}},title:{eyebrow:"Product Manager · AI Strategy",headline:["Ten years.","Five islands.","One climb."],lede:"From an engineering degree in India to **leading AI strategy** at an Indian CRM company, while finishing an MBA in Lisbon.",stats:[{value:"1M+",label:"users on a gaming platform"},{value:"$100k",label:"a month through an ad exchange I built"},{value:"< 2 mo",label:"to make a company AI-native"},{value:"+30%",label:"new-user retention"}]},chapters:[{n:"01",title:"Foundations",years:"2016 – 2020",place:"Manipal, India",lede:"An engineering degree, and a first taste of AI.",card:"B.Tech in IT · a CNN food-recognition app",points:["**B.Tech in Information Technology** at Manipal, with a minor in Digital Marketing","Trained a **CNN on 10,000 images** to recognise 100 foods, built into a calorie-tracking app","**4 verified AI and ML certificates**, from TensorFlow to ML for product managers"]},{n:"02",title:"Build & scale",years:"2021 – 2025",place:"Gurgaon, India",lede:"Two companies, one pattern: build the product from zero, then scale it.",card:"1M+ users · $100k/mo ad exchange",points:["**1M+ users** and $500k+ in deposits at GMNG, where I went from Associate PM to PM in **11 months**","An ad exchange built from scratch at XY ADS, with **$100k a month** in ad spend running through it","2025: the GMAT, MBA applications, and a library for underprivileged children"]},{n:"03",title:"New perspective",years:"2026",place:"Lisbon · Boston · India, remote",lede:"An MBA in Lisbon, a summer at MIT Sloan, and AI strategy for an Indian CRM company.",card:"MBA + MIT Sloan · AI-native in < 2 months",points:["**The Lisbon MBA** at Católica | Nova, completing December 2026, with a Summer Immersion at **MIT Sloan**","**Sovena** internship: reviewed 59 tea products and recommended a new positioning","**MR Neo**: made the whole company AI-native in **under two months**, now leading its AI-first redesign","**DHL Express** consulting project: market understanding for urgent 50kg+ SPOT shipments. Confidential."],extras:["mit-sloan","dhl"]},{n:"04",title:"Building now",years:"2026 · Now",place:"Lisbon",lede:"Lará: an AI platform that runs a hotel and looks after its guests.",card:"Lará, an AI hotel platform",points:["Proof of concept built with AI coding tools; preparing the pitch to a **first hotel**","AI concierge for guests, AI reply drafts in **4 languages**, and allergy alerts the team must acknowledge","Off the clock: **50m rifle shooting** at national level, and mixed martial arts"]},{n:"05",title:"What's next",years:"From mid-December 2026",place:"",lede:"The road's paved to mid-December 2026. The next stretch leads to your office.",card:"Your team. Available mid-December.",points:["Looking for **Product Manager and consulting roles** in AI, platforms and growth","Based in Lisbon; open to anywhere in Europe, or remote","Available full-time from **mid-December 2026**"],cta:!0}],makeTheCall:{intro:"Five real decisions from my career. Make each call yourself, then see what I chose and what happened.",scoreLines:{5:"Same instincts. Let’s talk.","3-4":"Close. The calls we made differently would be a good interview conversation.","0-2":"Different instincts, which makes for a good conversation."},decisions:[{id:"gmng-first-loss",active:!0,buildingId:"gmng",caseStudyId:"everybody-wins",title:"GMNG, Associate PM: new players quitting",situation:"You're an Associate PM at a real-money gaming app. New players deposit, play their first game, lose, and never come back. What do you try?",options:[{id:"a",text:"Lower the entry fee on first games so a loss hurts less."},{id:"b",text:"If a new player loses their first real-money game, give them in-game currency to play another real-money game."},{id:"c",text:"Send win-back notifications with a deposit bonus a few days later."}],manuChoice:"b",outcome:"The problem was loss aversion: new players hated losing their first deposit. “Everybody Wins” gave them a second chance, so most won one of their first two games. It ran on a dual wallet that kept game points separate from withdrawable cash. New-user retention rose 30%.",lesson:"Fix the feeling behind the churn, not just the number."},{id:"gmng-payments",active:!0,buildingId:"gmng",caseStudyId:"paytm-pivot",title:"GMNG: deposits that never came",situation:"You launched card payments because you and your friends all pay by card. Two months later, deposits are tiny. What now?",options:[{id:"a",text:"Talk to the players who did deposit before changing anything."},{id:"b",text:"Run a deposit bonus to get people paying by card."},{id:"c",text:"Add more card networks and a smoother checkout."}],manuChoice:"a",outcome:"80% of depositors used Paytm. I moved the payment gateway to it, and the deposit drop-offs stopped.",lesson:"My habits weren't my customers' habits."},{id:"xyads-who-for",active:!0,buildingId:"xy-ads",caseStudyId:"self-serve-exchange",title:"XY ADS: who to build the ad exchange for",situation:"You're building an ad exchange from scratch, with no marketing background. Competing platforms are powerful but confusing, and built for experienced agencies. Who do you design for?",options:[{id:"a",text:"Experienced agencies: match the competitors feature for feature."},{id:"b",text:"The agency's own campaign team only."},{id:"c",text:"Small businesses and owner-run shops with no marketing expertise."}],manuChoice:"c",outcome:"Clients moved from manually run campaigns to a self-service platform. By the time I left, $100k a month in ad spend ran through it, and one client had grown to $30k a month.",lesson:"The gap in the market was ease of use, not more features."},{id:"mrneo-testing",active:!0,buildingId:"mr-neo",caseStudyId:"ai-testing-skills",title:"MR Neo: a big product, no testing process",situation:"You join a CRM and automation company. The product has 60+ pages, plenty of bugs and no testing process, and you're one person. What do you do?",options:[{id:"a",text:"Test every page yourself and log the bugs."},{id:"b",text:"Ask the founder to hire a QA tester."},{id:"c",text:"Record yourself testing and thinking aloud, then turn that into AI skills the whole team can run."}],manuChoice:"c",outcome:"I recorded 4–5 hours of myself testing, turned it into reusable Claude skills built on existing bug-finding skills, and shared them. They found roughly 500–600 bugs and UX issues, and the team now uses and improves them.",lesson:"Don't just do the work with AI. Turn the way you work into something the team can reuse."},{id:"lara-allergy",active:!0,buildingId:"lara-hotel",caseStudyId:"building-lara-with-ai",title:"Lará: an allergy and an AI concierge",situation:"Your hotel app's AI concierge handles guest requests. A guest mentions a severe allergy. How should that reach the restaurant?",options:[{id:"a",text:"A separate alert that reaches the restaurant team and manager within seconds, must be acknowledged, and works even with AI switched off."},{id:"b",text:"Through the AI concierge, like every other request."},{id:"c",text:"Saved to the guest's profile for staff to check before service."}],manuChoice:"a",outcome:"That’s how Lará works: allergy alerts never depend on the AI.",lesson:"Use AI for convenience, never as the only path for something safety-critical."}]},caseStudies:{labels:{problem:"The problem",whatIDid:"What I did",whatItDoes:"What it does",howIUsedAI:"How I used AI",myCall:"My call",result:"The result",also:"Also",whereAIWasWrong:"Where the AI got it wrong",whatNext:"What's next"},items:[{id:"everybody-wins",buildingId:"gmng",title:"Everybody Wins",problem:"New players quit after losing their first real-money game.",whatIDid:["Diagnosed the churn as loss aversion: new players hated losing their first deposit.","Designed a second-chance model: the loser of a first real-money game gets in-game currency to play again for real money.","Built it on a dual-wallet economy that keeps game points separate from withdrawable cash. A game developer built it in Unity."],myCall:"Tackle the fear of losing, not just the drop-off.",result:"New-user retention rose 30%. Here, conversion meant playing a second game after depositing and playing the first."},{id:"one-field-signup",buildingId:"gmng",title:"One-field sign-up",problem:"People downloaded the app but dropped out at registration.",whatIDid:["Benchmarked how other apps handle sign-up.","Replaced the form with one entry point for everyone: phone number, then OTP, then log in if the number exists or create the account if not.","Collected profile details later."],result:"Sign-up drop-off fell by about 60%."},{id:"paytm-pivot",buildingId:"gmng",title:"The Paytm pivot",problem:"I launched card payments assuming cards would dominate, because my friends and I used them. After about two months there were very few deposits.",whatIDid:["Spoke to customers and found 80% of depositors used Paytm.","Moved the payment gateway to it."],myCall:"My habits weren't the customer's.",result:"Deposit drop-offs resolved."},{id:"poker-habit-loop",buildingId:"gmng",title:"The 7-day poker habit loop",problem:"Poker was one of the highest-revenue, higher-margin games, but its learning curve kept players away.",whatIDid:["While testing it, I noticed I'd built a daily habit myself, so the team recreated those steps as a 7-day gamified onboarding loop.","Each day had a small, fun goal, including spending a free allowance (about $10 per user for the week).","It targeted high-paying players from other games."],result:"60% of the targeted cohort converted, bringing in $40,000 in revenue."},{id:"offer-wall",buildingId:"gmng",title:"The Offer Wall",problem:"The parent agency paid other platforms to run app-install campaigns.",whatIDid:["Saw those campaigns could run inside GMNG as an in-game Offer Wall: players earn rewards, and the group earns on installs and actions.","Proposed selling it to other gaming companies."],result:"Packaged as a B2B SaaS module and licensed to 3–4 companies for about $5–6k a month."},{id:"self-serve-exchange",buildingId:"xy-ads",title:"A self-serve ad exchange",problem:"Clients who needed a DSP ran campaigns manually, and competing platforms were confusing and built for experienced agencies.",whatIDid:["Owned the build and direction of a proprietary ad exchange from scratch (I didn't write the code).","Wrote API-level OpenRTB PRDs covering business logic, data architecture, API and data workflows, and unit economics.","Architected it for 100M+ monthly impressions.","Integrated many DSPs and SSPs by breaking each partner's API docs into the exact APIs developers had to build.","Designed role-based access so agency teams could run campaigns under central master accounts.","Interviewed and hired 3 developers and the designer."],myCall:"Design for small businesses and owner-run shops with no marketing expertise.",result:"$100k a month in ad spend ran through it by the time I left, and one client grew to $30k a month.",also:"Cut operating costs 15% by moving vendors to long-term, tiered, volume-based contracts."},{id:"learning-adtech-fast",buildingId:"xy-ads",title:"Learning AdTech fast",problem:"I moved into AdTech with no marketing background. When GMNG closed, I was the GMNG employee the group kept, and it moved me into a domain I'd never worked in to build its exchange.",whatIDid:["Spent 2–3 months researching ad exchanges, Google Ads and the ad ecosystem, and taught myself OpenRTB and ad-serving concepts.","My method: start from the problem, list the ideal features, sketch a first mock, and only then study competitors, so my thinking isn't anchored to what exists."],result:"Within that time, colleagues with 5–6 years in the industry were coming to me with questions about how the systems worked."},{id:"ai-testing-skills",buildingId:"mr-neo",title:"AI testing skills",problem:"A 60+ page CRM and automation platform with no testing process.",whatIDid:["Recorded 4–5 hours of myself testing the platform and thinking aloud: what I click and why.","Turned that into reusable Claude skills, and folded in existing skills to make them better at finding bugs."],howIUsedAI:"The skills now run the testing method I recorded.",myCall:"Build on existing skills instead of starting from zero, and hand them to the team to keep improving.",result:"Roughly 500–600 bugs and UX issues found. The team uses and improves the skills to find bugs, UX issues and feature ideas.",media:[]},{id:"ai-native-company",buildingId:"mr-neo",title:"An AI-native company in under two months",problem:"Current company and product information was slow to reach people, and sales decks went through many rounds.",whatIDid:["Set up a central AI knowledge base connected read-only to the codebase, documentation and website, kept current as the single source of truth.","Built a sales AI workspace grounded in company knowledge and sales frameworks, for pitches, decks and outreach planning.","Automated day-to-day workflows for sales and development."],myCall:"Read-only codebase access, and one source of truth for the whole company.",result:"Done in under two months. Sales decks need 1–2 iterations instead of many rounds, there is virtually no delay in anyone getting current information, and developers ship features with fewer bugs."},{id:"shopify-unblock",buildingId:"mr-neo",title:"Unblocking the Shopify integration",problem:"The developers had been stuck on a Shopify integration for a month.",whatIDid:["Read Shopify's API documentation and specced the integration hub: the UI, which APIs to use and the build steps."],result:"Built, approved and shipped.",also:"My usual pattern: the developers try first. When they're stuck, I read the partner's API docs and give them a step-by-step plan. I did the same for the Google Ads integration."},{id:"flow-conflict-detection",buildingId:"mr-neo",title:"Flow conflict detection",status:"Designed, not yet built",problem:"A gap I found myself, not from a customer: when someone builds their 21st automation flow, they can’t see which flows fire first, overlap, contradict or supersede each other.",whatIDid:["Designed how this should look and work, including warnings while building if a new flow duplicates an existing one or would break another."],howIUsedAI:"I designed it in Claude Design."},{id:"building-lara-with-ai",buildingId:"lara-hotel",title:"Building Lará with AI",status:"Proof of concept built; preparing the pitch to a first hotel",problem:"A white-label app to run a hotel's operations and improve the guest experience, for guests and every team: front desk, restaurant and bar, housekeeping and managers.",whatIDid:["Prototyped it with AI coding tools in 7 phases, each with a security attack-and-harden pass.","Ran it on free cloud tiers until a hotel signs."],whatItDoes:["An AI concierge that knows the hotel and books services.","A live request loop: requests land in the right team's queue, and managers see everything.","Checkout to housekeeping to QR check-in.","An AI staff assistant answering from the hotel's own procedures.","AI reply drafts in Portuguese, English, French and German.","AI-drafted manager briefings."],myCall:"Allergy alerts never depend on the AI: they reach the restaurant team and manager within seconds, must be acknowledged, and work with AI switched off.",result:"260 automatic database security tests, and 4 end-to-end pitch scenarios working live.",media:[{file:"hotel/01-welcome.jpg",caption:"Each hotel gets its own brand: guests log in, or scan a QR code from the front desk",alt:"Lará guest welcome screen"},{file:"hotel/02-room-suggestions.jpg",caption:"Room suggestions from the guest's likes and booking, plus upgrade offers for loyal guests",alt:"Lará room suggestions screen"},{file:"hotel/03-front-desk-board.jpg",caption:"Live front-desk board: arrivals, departures, known guests and rooms that need action",alt:"Lará front-desk board"},{file:"hotel/04-staff-assistant.jpg",caption:"AI staff assistant answering from the hotel's own documents",alt:"Lará AI staff assistant"}],links:[{label:"How I built this city and Lará with AI ›",href:"how-built/"}]},{id:"sovena-occasions",buildingId:"sovena",title:"Selling an occasion, not a health claim",problem:"Review a 59-product tea range, from packaging to marketing.",whatIDid:["Built the research base: consumer surveys, social listening on Reddit and other platforms, and market research.","Recommended selling an occasion rather than a health claim, and presented it to a director."],howIUsedAI:"Handed the whole research corpus over as a queryable NotebookLM workspace, so the team can keep using it.",myCall:"Sell an occasion, not a health claim."},{id:"food-recognition",buildingId:"vision-lab",title:"Food recognition (undergraduate final project)",whatIDid:["Trained a convolutional neural network on 10,000 images to classify 100 foods, and built it into a calorie-tracking app."]}]},buildings:[{id:"manipal",order:1,buildYear:2016,yearLabel:"2016–2020",district:"india",style:"campus",name:"Manipal Institute of Technology",hook:"B.Tech in IT",career:!0,role:"B.Tech, Information Technology · minor in Digital Marketing",dates:"2016 – Oct 2020",location:"India",story:"Where it started: an engineering degree in Information Technology, with a minor in Digital Marketing. It's the reason I can read API docs and talk to engineers as a peer.",metrics:[],highlights:[{text:"B.Tech, Information Technology, minor in Digital Marketing, 2016 – Oct 2020"}],tags:["Engineering","IT","Digital Marketing"]},{id:"vision-lab",order:2,buildYear:2020,yearLabel:"2020–21",district:"india",style:"lab",name:"Image Recognition Lab",hook:"CNN · 100 foods",ai:"ai-subject",career:!0,role:"Undergraduate final project",dates:"2020 – 2021",location:"Manipal, India",story:"A calorie-tracking app that recognises food from a photo. I trained a convolutional neural network (CNN) on 10,000 images to classify 100 foods, then built it into the app.",metrics:[{value:"10,000",label:"training images",vizType:"scan"},{value:"100",label:"foods recognised",vizType:"scan"}],highlights:[{text:"Food image-recognition classifier: a CNN trained on 10,000 images to classify 100 foods, built into a calorie-tracking app"}],tags:["CNN","TensorFlow","Python","Computer vision"]},{id:"learning-tower",order:3,buildYear:2020,yearLabel:"2020–2025",district:"india",style:"learning-tower",name:"Learning Tower",hook:"4 AI/ML certificates",ai:"ai-subject",career:!0,role:"Courses and certificates",dates:"2020 – 2025",location:null,story:"Each floor is one AI or machine learning course, stacked in the order I finished them: TensorFlow, CNNs and Python in 2020, then ML for product managers in 2025. Every floor links to its certificate on Coursera.",metrics:[{value:"4",label:"verified AI/ML certificates",vizType:"floors"}],certificates:[{title:"Introduction to TensorFlow for AI, ML and Deep Learning",issuer:"DeepLearning.AI · Coursera",date:"2020-04-26",topic:"AI/ML",verify:"https://coursera.org/verify/5PEQPPYS4HFL",shortTitle:"TensorFlow for AI & ML"},{title:"Convolutional Neural Networks in TensorFlow",issuer:"DeepLearning.AI · Coursera",date:"2020-06-14",topic:"AI/ML",verify:"https://coursera.org/verify/XRJEAPU85WAA",shortTitle:"CNNs in TensorFlow"},{title:"Python for Data Science, AI & Development",issuer:"IBM · Coursera",date:"2020-10-31",topic:"AI/ML",verify:"https://coursera.org/verify/LGR9L3QVWSQY",shortTitle:"Python for Data Science & AI"},{title:"Machine Learning Foundations for Product Managers",issuer:"Duke University · Coursera",date:"2025-07-06",topic:"Product",verify:"https://coursera.org/verify/ZPDM0PJ66P53",shortTitle:"ML for Product Managers"}],highlights:[],tags:["AI/ML","Product"],howTo:"Tap a course below (or a floor on the tower) to light it up."},{id:"gmng",order:4,buildYear:2021,yearLabel:"2021–2023",district:"india",style:"arcade",name:"GMNG",hook:"1M+ users",career:!0,role:"Associate Product Manager → Product Manager (promoted within 11 months)",dates:"Feb 2021 – Jul 2023",location:"Gurgaon, India",floors:[{label:"APM",dates:"Feb 2021 – Jan 2022"},{label:"PM",dates:"Feb 2022 – Jul 2023"}],story:"A real-money mobile gaming platform (poker and other skill games). I grew it to 1M+ users, designed the features that kept new players coming back, and turned an ad-tech idea into a B2B product other companies paid for. As PM I led a team of 8–9 across development, support and sales.",metrics:[{value:"1M+",label:"users",vizType:"crowd"},{value:"200,000+",label:"new users in one month (referrals)",vizType:"stream"},{value:"+30%",label:"new-user retention (Everybody Wins)",vizType:"lift"},{value:"3×",label:"gameplay frequency, from the engagement push I led (combined result)",vizType:"lift"}],highlights:[{text:"Scaled the platform to 1M+ users and $500k+ in user deposits"},{text:"Everybody Wins (my idea): a second chance for new players who lose their first real-money game. It tackled churn caused by loss aversion and lifted new-user retention 30%"},{text:"7-day gamified poker onboarding loop (my idea): 60% of the targeted high-paying players converted, bringing in $40,000 in revenue"},{text:"The engagement push I led as PM (more games, the 7-day poker loop, UI changes such as pinned favourite games and faster app loading) tripled gameplay frequency and lifted revenue 50% in key games, as a combined result"},{text:"Two-tier referral scheme that brought in 200,000+ new users in a single month"},{text:"Conceptualised an ad-tech Offer Wall and licensed it as a B2B SaaS module to 3–4 companies for about $5–6k/month"},{text:"Found that 80% of depositors used Paytm and pivoted the payment gateway toward it, resolving deposit drop-offs"},{text:"Redesigned the homepage, UI and first-time experience: user satisfaction up 20% in an in-app survey"},{text:"Integrated third-party gaming services, eliminating wait times and lifting revenue 20%"},{text:"Onboarded partnerships with Dream11 and Pocket52; contributed to shareholder presentations that secured $100,000 in development funding"}],tags:["Growth","Retention","Gamification","Payments","B2B SaaS","Team leadership"],card:{hero:{value:"1M+",label:"users on a real-money gaming platform, and $500k+ in deposits"},proofs:[{value:"+30%",label:"new-user retention from Everybody Wins, my idea"},{value:"200k+",label:"new users in one month from a referral scheme"},{value:"$100k",label:"development funding, from shareholder presentations I contributed to"}]}},{id:"xy-ads",order:5,buildYear:2023,yearLabel:"2023–2025",district:"india",style:"tower",name:"XY ADS",hook:"$100k/mo ad spend",career:!0,role:"Product Manager, Product & Platform",dates:"Aug 2023 – Jan 2025",location:"Gurgaon, India",story:"A high-volume performance marketing agency, and GMNG's parent company. I built its ad exchange from scratch, so clients moved from manually run campaigns to a self-service platform. I joined with no marketing background and was working at the level of 5–6-year veterans within 2–3 months.",metrics:[{value:"100M+",label:"monthly impressions the architecture was built to handle",vizType:"ticker"},{value:"$100k",label:"ad spend per month through the platform",vizType:"money"},{value:"$30k",label:"per month from one client",vizType:"money"},{value:"−15%",label:"operating costs",vizType:"drop"}],highlights:[{text:"Built a proprietary ad exchange from scratch: wrote API-level OpenRTB PRDs and architected the exchange for 100M+ monthly impressions"},{text:"Moved clients from manually run DSP campaigns to self-service: $100k/month in ad spend by the time I left, with one client growing to $30k/month"},{text:"Integrated many DSPs and SSPs by breaking each partner's API docs into the exact APIs developers had to build"},{text:"Interviewed and hired 3 developers; developers and designers reported to me"},{text:"Cut operating costs 15% with long-term, tiered, volume-based vendor contracts"},{text:"Designed role-based access (RBAC) so agency teams could run campaigns under central master accounts"},{text:"Directed the developers to cut latency under very high traffic"}],tags:["OpenRTB","Ad exchange","Programmatic","DSP/SSP","RBAC","0→1"],card:{hero:{value:"$100k/mo",label:"ad spend through an ad exchange I built from scratch"},proofs:[{value:"100M+",label:"monthly impressions the architecture was built to handle"},{value:"$30k/mo",label:"from one client on the platform"},{value:"−15%",label:"operating costs, from new vendor contracts"}]}},{id:"library",order:6,buildYear:2025,yearLabel:"2025",district:"india",style:"library",name:"The Library",hook:"GMAT year",career:!0,role:"GMAT, MBA applications and a library for children",dates:"Feb – Dec 2025",location:"Rajasthan, India",story:"A year to step back and invest, in myself and in others. I prepared for the GMAT and applied to MBA programmes, and set up a library for underprivileged children, where I taught young people basic computer skills. I was admitted to The Lisbon MBA, starting January 2026.",metrics:[],highlights:[{text:"2025: GMAT and MBA applications (admitted to The Lisbon MBA, Jan 2026)"},{text:"Established a library for underprivileged children; taught basic computer skills to youth in Rajasthan, India"}],tags:["GMAT","MBA","Community","Education"]},{id:"lisbon-mba",order:7,buildYear:2026,yearLabel:"2026",district:"lisbon",style:"university",name:"The Lisbon MBA · Católica | Nova",hook:"MBA + MIT Sloan",career:!0,role:"MBA International + MIT Sloan Summer Immersion",dates:"Jan – Dec 2026",location:"Lisbon, Portugal · Boston, US",annex:{name:"MIT Sloan annex",dates:"Jun 2026"},story:"An international MBA in Lisbon, including a month at MIT Sloan in Boston studying technological innovation and global strategy.",metrics:[],highlights:[{text:"The Lisbon MBA International, Católica | Nova, completing December 2026"},{text:"MIT Sloan Summer Immersion Certificate, Boston, June 2026: Managing Technological Innovation, Global Strategy, Compliance and Ethics"},{text:"DHL Express consulting project: market understanding for urgent 50kg+ SPOT shipments (confidential)"}],tags:["MBA","MIT Sloan","Strategy"]},{id:"sovena",order:8,buildYear:2026,yearLabel:"Jul–Aug 2026",district:"lisbon",style:"teahouse",name:"Sovena",hook:"59 teas reviewed",ai:"built-with-ai",career:!0,role:"Summer internship (8 weeks)",dates:"Jul – Aug 2026",location:"Lisbon, Portugal",story:"Sovena is a Portuguese food group. My brief was to review its 59-product tea range and recommend what to do with it, from packaging to marketing. My answer: sell an occasion, not a health claim.",metrics:[{value:"59",label:"tea products reviewed",vizType:"none"}],highlights:[{text:"Built the research base: consumer surveys, social listening (Reddit and other platforms) and market research"},{text:"Recommended repositioning from health claims to consumption occasions; presented to a director"},{text:"Handed over the whole research corpus as a queryable AI research base (NotebookLM) so the team can keep making informed decisions"}],tags:["FMCG","Consumer research","Positioning","NotebookLM"]},{id:"mr-neo",order:9,buildYear:2026,yearLabel:"Aug 2026 – now",district:"lisbon",style:"hq-ai",name:"MR Neo",hook:"AI-native in < 2 months",ai:"built-with-ai",career:!0,role:"Product Manager, AI Strategy (part-time, alongside the MBA)",dates:"Aug 2026 – present",location:"India-based company · remote",story:"A business automation and CRM platform. The founder brought me in to shape the company's direction and to put AI to work across the product and the business: I reset pricing and positioning, made the whole company AI-native in under two months, and I'm now leading its redesign into an AI-first platform.",metrics:[{value:"< 2 months",label:"to make the whole company AI-native",vizType:"lights"},{value:"AI-first",label:"platform redesign I'm leading for early 2027",vizType:"none"},{value:"1–2",label:"sales deck iterations, down from many rounds",vizType:"drop"},{value:"1 month",label:"Shopify integration had been stuck before I specced the fix",vizType:"none"}],highlights:[{text:"Made the company AI-native in under two months: a central AI knowledge base connected to the codebase, documentation and website, a sales AI workspace, and automated workflows. Deck revisions fell to 1–2 iterations and information lag across teams disappeared"},{text:"Reset pricing and positioning: competitor benchmarking and try-before-you-upgrade add-ons, and a shift from 'a CRM/CPaaS' to helping customers grow their business; now shaping company strategy and the operating model"},{text:"Leading the redesign into an AI-first platform for early 2027, where users mainly work through AI and manual paths remain"},{text:"Designed flow-conflict detection for the automation builder, so users see which flows overlap, contradict or supersede each other before they break"},{text:"Designed an AI daily briefing for the tasks page that briefs each person on their week and, for developers, links a bug report to where the fix probably sits"},{text:"Unblocked a Shopify integration the developers had been stuck on for a month by speccing the integration hub, API choice and build steps; shipped and approved"},{text:"Set the product-quality bar: audited the 60+ page platform and turned my own testing method into reusable AI skills the whole team now uses"}],tags:["AI strategy","AI adoption","Pricing & positioning","Product design","Integrations"],card:{hero:{value:"< 2 months",label:"to make the whole company AI-native"},proofs:[{value:"AI-first",label:"platform redesign I'm leading for early 2027"},{value:"1–2",label:"sales deck iterations, down from many rounds"},{value:"1 month",label:"the Shopify integration had been stuck, until I specced the fix"}]}},{id:"lara-hotel",order:10,buildYear:2026,underConstruction:!0,yearLabel:"Now · building",district:"lisbon",style:"hotel-construction",name:"Lará Hotel 🚧",hook:"AI hotel platform",ai:"built-with-ai",career:!0,role:"Current project: AI hotel platform",dates:"Oct 2026 – now",location:"Lisbon, Portugal",status:"Proof of concept built · preparing the pitch to a first hotel",story:"A white-label app that runs a hotel's operations and improves the guest experience with AI, for guests and every team: front desk, restaurant & bar, housekeeping, managers and admins. It started as a prototype and is now being built into a full platform, which I'm prototyping with AI coding tools.",metrics:[{value:"4",label:"end-to-end pitch scenarios working live",vizType:"crane"},{value:"4",label:"languages for AI reply drafts",vizType:"bubbles"},{value:"260",label:"automatic database security tests",vizType:"none"}],highlights:[{text:"AI concierge that knows the hotel, books services for guests, and passes allergies straight to the restaurant"},{text:"Allergy safety alerts reach the restaurant team and manager within seconds and must be acknowledged. They work even with AI switched off"},{text:"Live request loop: a guest books the spa or a table, it lands in the right team's queue, staff confirm or transfer it, and the manager sees everything"},{text:"Checkout → housekeeping → QR check-in: the room flows from departure to cleaning to the next guest, who logs in by scanning a code"},{text:"AI staff assistant answering from the hotel's own procedures, AI reply drafts in Portuguese, English, French and German, and AI-drafted manager briefings"},{text:"Room suggestions, weather-aware guest suggestions, loyalty points and a manager dashboard on live numbers; English and Portuguese throughout; iPhone and web"},{text:"Built in 7 phases with security attack-and-harden passes, on free cloud tiers until a hotel signs"}],screenshots:[{file:"hotel/01-welcome.jpg",caption:"Each hotel gets its own brand: guests log in, or scan a QR code from the front desk"},{file:"hotel/02-room-suggestions.jpg",caption:"Room suggestions from the guest's likes and booking, plus upgrade offers for loyal guests"},{file:"hotel/03-front-desk-board.jpg",caption:"Live front-desk board: arrivals, departures, known guests and rooms that need action"},{file:"hotel/04-staff-assistant.jpg",caption:"AI staff assistant answering from the hotel's own documents"}],tags:["AI product","Hospitality","iOS + web","0→1"]},{id:"hobby-park",order:11,buildYear:null,yearLabel:"Off the clock",district:"park",style:"park",name:"Hobby Park",hook:"50m rifle · national level",career:!1,role:"Shooting range · MMA dojo",dates:null,location:null,story:"Off the clock: national-level 50m rifle shooting, mixed martial arts, and travel.",metrics:[],highlights:[{text:"50m rifle shooting, national level"},{text:"Mixed martial arts, state-level training"},{text:"Travel"}],tags:["Shooting","MMA","Travel"]},{id:"post-office",order:12,buildYear:null,yearLabel:"Say hello",district:"park",style:"post-office",name:"Contact Me",hook:"Email · LinkedIn · CV",career:!1,role:"Get in touch · email, LinkedIn or my CV",dates:null,location:"Lisbon, Portugal",story:"Want to talk about a role? This is the place. Email me, connect on LinkedIn, or download my CV. Looking for product and consulting roles in AI, platforms and growth, available from mid-December 2026.",metrics:[],highlights:[{text:"Lisbon-based; open to anywhere in Europe and to remote roles"},{text:"Available from mid-December 2026"}],links:[{label:"Email",href:"mailto:sam123.manu@gmail.com"},{label:"LinkedIn",href:"https://www.linkedin.com/in/pratapmanusingh"},{label:"Download CV",href:"Manu_Pratap_Singh_CV.pdf"}],tags:[]},{id:"your-plot",order:13,buildYear:2026,yearLabel:"Mid-Dec 2026",district:"park",style:"empty-plot",name:"The next stretch",hook:"From mid-December 2026",career:!1,role:"Where the road goes next",dates:"Ready mid-December 2026",location:"Lisbon · Europe · Remote",story:"The road's paved to mid-December 2026. The next stretch leads to your office: in Lisbon, anywhere in Europe, or remote.",sign:"The road's paved to mid-December 2026. The next stretch leads to your office.",metrics:[],highlights:[{text:"Available from mid-December 2026"},{text:"Lisbon-based; open to anywhere in Europe and to remote roles"}],tags:[],visual:"The paved road ends at a 'paving ends' marker. A gravel stretch with survey stakes leads on to an empty plot. The sign stands where the asphalt stops.",cta:{label:"Contact me",opens:"A small card over the scene, with two one-click actions",actions:[{label:"View my CV",href:"Manu_Pratap_Singh_CV.pdf",kind:"cv",note:"Opens the PDF in a new tab (with download)"},{label:"Email me",href:"mailto:sam123.manu@gmail.com?subject=Claiming%20my%20spot%20on%20your%20road&body=Hi%20Manu%2C%0A%0AI%20saw%20your%20city%20portfolio%20and%20would%20like%20to%20talk%20about%20a%20role%20at%20",kind:"email",note:"Opens the visitor's email app with the subject and first line filled in"},{label:"Copy email",value:"sam123.manu@gmail.com",kind:"copy",note:"Fallback for visitors without an email app; shows 'Copied'"}]}}],vehicles:[{id:"dhl-plane",count:1,style:"cargo-plane",district:"lisbon",route:"lisbon-sky",depot:"lisbon-mba",colors:{body:"#FFCC00",stripe:"#D40511"},banner:"DHL EXPRESS · MBA CONSULTING PROJECT",cargo:"Crate slung under the plane, stamped 'URGENT · 50 KG+'",behaviour:"Loops slowly over the Lisbon district towing a long banner; its shadow glides over the city. A floating label makes it easy to find. Click it: the camera follows the plane and its panel opens.",panel:{name:"DHL Express",role:"MBA consulting project",dates:"2026",story:'Market understanding for urgent 50kg+ "SPOT" shipments.',note:"Confidential."},label:"✈ DHL project"}],islets:[{id:"mit-sloan",name:"MIT Sloan",role:"Summer Immersion Certificate · part of The Lisbon MBA",dates:"Jun 2026",location:"Boston, US",yearLabel:"Jun 2026",after:"lisbon-mba",story:"One month on MIT's campus in Boston, taught by MIT Sloan faculty, with visits to Boston-based companies.",highlights:[{text:"MIT Sloan Summer Immersion Certificate, Boston, June 2026"},{text:"Courses: Managing Technological Innovation and Leadership, Global Markets and Strategy, Global Compliance and Ethical Issues"},{text:"Visits to Boston-based companies"}],tags:["MIT Sloan","Innovation","Strategy"]}]},Do=wn.person,h_=wn.vehicles||[],Mr=wn.islets||[],Is=2026.9,d_=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];function u_(n,t){if(n.style==="empty-plot")return 2026.84;if(n.buildYear==null)return 2026.78+t*.01;if(n.buildYear!==2026)return n.buildYear;const e=(n.dates||"").toLowerCase().match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/);return 2026+(e?d_.indexOf(e[0])/12:0)}const De=wn.buildings.slice().sort((n,t)=>n.order-t.order).map((n,t)=>({...n,index:t,appearYear:u_(n,t)}));Object.fromEntries(De.map(n=>[n.id,n]));function f_(n){if(!n.date)return 2020;const t=new Date(n.date);return t.getFullYear()+t.getMonth()/12}const p_=wn.title,Ws=wn.chapters||[],m_=wn.makeTheCall||{decisions:[]};var $h;const tc=(($h=wn.caseStudies)==null?void 0:$h.items)||[];var jh;const g_=((jh=wn.caseStudies)==null?void 0:jh.labels)||{},Ue=(n,t,e)=>Math.min(e,Math.max(t,n)),Ma=(n,t,e)=>n+(t-n)*e,Ss=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2,bl=n=>1-Math.pow(1-n,3),Ih=n=>1+2.4*Math.pow(n-1,3)+1.4*Math.pow(n-1,2),Kn=()=>typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches;function Sl(n=7){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const bo=new Set;function ws({duration:n=1,ease:t=Ss,onUpdate:e,onDone:i}){const s={elapsed:0,duration:Math.max(1e-4,n),ease:t,onUpdate:e,onDone:i,dead:!1};return bo.add(s),{cancel:()=>{s.dead=!0,bo.delete(s)}}}function v_(n){var t,e;for(const i of[...bo]){if(i.dead)continue;i.elapsed+=n;const s=Ue(i.elapsed/i.duration,0,1);(t=i.onUpdate)==null||t.call(i,i.ease(s),s),s>=1&&(bo.delete(i),(e=i.onDone)==null||e.call(i))}}const ba=new Map;function H(n,t={}){const e=n+JSON.stringify(t);if(!t.unique&&ba.has(e))return ba.get(e);const{unique:i,...s}=t,r=new xe({color:n,roughness:.85,metalness:0,flatShading:!0,...s});return i||ba.set(e,r),r}function Vd({text:n,sub:t,w:e=512,h:i=128,bg:s="#243447",fg:r="#ffffff",font:o="Inter",weight:a=700,size:l,border:c,align:h="center",radius:d=18}){const u=document.createElement("canvas");u.width=e,u.height=i;const f=u.getContext("2d");return So(f,{text:n,sub:t,w:e,h:i,bg:s,fg:r,font:o,weight:a,size:l,border:c,align:h,radius:d}),u}function So(n,{text:t,sub:e,w:i,h:s,bg:r,fg:o,font:a="Inter",weight:l=700,size:c,border:h,align:d="center",radius:u=18}){n.clearRect(0,0,i,s),r&&(n.fillStyle=r,Dh(n,0,0,i,s,u),n.fill()),h&&(n.strokeStyle=h,n.lineWidth=8,Dh(n,4,4,i-8,s-8,u),n.stroke()),n.fillStyle=o,n.textAlign=d,n.textBaseline="middle";let f=c||Math.floor(s*(e?.38:.5));for(n.font=`${l} ${f}px ${a}, system-ui, sans-serif`;n.measureText(t).width>i*.92&&f>10;)f-=2,n.font=`${l} ${f}px ${a}, system-ui, sans-serif`;const m=t,v=d==="center"?i/2:i*.06;if(n.fillText(m,v,e?s*.38:s/2),e){n.globalAlpha=.8;let g=Math.floor(s*.22);for(n.font=`500 ${g}px ${a}, system-ui, sans-serif`;n.measureText(e).width>i*.92&&g>10;)g-=2,n.font=`500 ${g}px ${a}, system-ui, sans-serif`;n.fillText(e,v,s*.74),n.globalAlpha=1}}function Dh(n,t,e,i,s,r){n.beginPath(),n.moveTo(t+r,e),n.arcTo(t+i,e,t+i,e+s,r),n.arcTo(t+i,e+s,t,e+s,r),n.arcTo(t,e+s,t,e,r),n.arcTo(t,e,t+i,e,r),n.closePath()}function Le(n,t,e,{emissive:i=!1,doubleSide:s=!0}={}){const r=Vd(n),o=new Rn(r);o.colorSpace=Me,o.anisotropy=4;const a={map:o,transparent:!0,side:s?Ne:ti,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2},l=i?new Qt(a):new xe({...a,roughness:.7}),c=new ht(new dn(t,e),l);return c.userData.canvas=r,c.userData.texture=o,c}function j(n,t,e,i,s=0,r=0,o=0){const a=new ht(new re(n,t,e),i);return a.position.set(s,r+t/2,o),a.castShadow=!0,a.receiveShadow=!0,a}function te(n,t,e,i,s=12,r=0,o=0,a=0){const l=new ht(new Be(n,t,e,s),i);return l.position.set(r,o+e/2,a),l.castShadow=!0,l.receiveShadow=!0,l}function Ds(n,t){try{if(t===void 0)return localStorage.getItem(n);localStorage.setItem(n,t)}catch{return null}return t}function __(n){return n>=1e6?(n/1e6).toFixed(n>=1e7?0:1).replace(/\.0$/,"")+"M":n>=1e3?Math.round(n).toLocaleString("en-US"):Math.round(n).toString()}const Uh=[{key:"foundations",title:"Foundations",years:"2016 — 2020",stops:["manipal","vision-lab","learning-tower"],w:74,d:64,top:2,place:"india"},{key:"build",title:"Build & scale",years:"2021 — 2025",stops:["gmng","xy-ads","library"],w:78,d:66,top:9,place:"india"},{key:"perspective",title:"New perspective",years:"2026",stops:["lisbon-mba","sovena","mr-neo"],w:84,d:68,top:16,place:"lisbon"},{key:"horizon",title:"Building now",years:"2026 · Now",stops:["lara-hotel","hobby-park","post-office"],w:88,d:72,top:24,place:"horizon"},{key:"next",title:"What's next",years:"From mid-December 2026",stops:["your-plot"],w:52,d:52,top:32,place:"next"}],x_=32,y_=[28,14,0,-14,-28],de=(()=>{const n=[];let t=0;Uh.forEach((i,s)=>{s&&(t+=Uh[s-1].w/2+x_+i.w/2),n.push({...i,index:s,x:t,z:y_[s]})});const e=(n[0].x+n[n.length-1].x)/2;return n.forEach(i=>{i.x-=e,i.pathZ=i.z+i.d/2-14,i.rowX=14,i.slots=[i.pathZ-14,i.pathZ-36],i.streetEnd=i.place==="next"?i.pathZ-12:i.pathZ-47}),n})(),_n=(()=>{const n=de[de.length-1],t=de[0].x-de[0].w/2,e=n.x+n.w/2;return{w:e-t+60,d:220,minX:t,maxX:e,centerX:(t+e)/2}})(),M_=Object.fromEntries(de.flatMap(n=>n.stops.map(t=>[t,n]))),b_=[[-1,0],[-1,1],[1,1],[1,0]];function S_(){const n=[];for(const t of de)t.stops.map(i=>De.find(s=>s.id===i)).filter(Boolean).forEach((i,s)=>{const r=i.style==="empty-plot",[o,a]=b_[s],l=r?new A(t.x,t.top,t.streetEnd-11):new A(t.x+o*t.rowX,t.top,t.slots[a]),c=r?new A(0,0,1):new A(-o,0,0);n.push({stop:i,island:t,pos:l,face:c,side:r?0:o,t:i.index/(De.length-1)})});return n.sort((t,e)=>t.stop.order-e.stop.order)}const wo=S_(),w_=Object.fromEntries(wo.map(n=>[n.stop.id,n])),Gd=de.slice(0,-1).map((n,t)=>{const e=de[t+1];return{index:t,from:n,to:e,a:new A(n.x+n.w/2-.5,n.top,n.pathZ),b:new A(e.x-e.w/2+.5,e.top,e.pathZ),year:["2021","2026","NOW","NEXT"][t],suspension:e.place==="lisbon",unbuilt:e.place==="next"}}),an=-7,kt={sea:"#2f7896",rock:"#b6c1b5",edge:"#8f8873",stone:"#a39b86",walk:"#f4efe3",coral:"#d9734e",gold:"#c9a35f",white:"#faf7ec",trim:"#e3dcc9",dark:"#254953",grass:"#a9c39c",leaf:"#759d78",leaf2:"#507e68",red:"#c0392b",yellow:"#f2c230",saffron:"#f08a24"},E_={padTop:.32},xn=(n,t=1)=>H(n,{flatShading:!1,roughness:.9,polygonOffset:!0,polygonOffsetFactor:-t,polygonOffsetUnits:-t});function Wd(n,t,e=3){const i=new $i;return i.moveTo(-n/2+e,-t/2),i.lineTo(n/2-e,-t/2),i.quadraticCurveTo(n/2,-t/2,n/2,-t/2+e),i.lineTo(n/2,t/2-e),i.quadraticCurveTo(n/2,t/2,n/2-e,t/2),i.lineTo(-n/2+e,t/2),i.quadraticCurveTo(-n/2,t/2,-n/2,t/2-e),i.lineTo(-n/2,-t/2+e),i.quadraticCurveTo(-n/2,-t/2,-n/2+e,-t/2),i}function Es(n,t,e,i,s=.3){const r=new Gs(n,{depth:e-t,bevelEnabled:s>0,bevelSize:s,bevelThickness:s*.5,bevelSegments:2,curveSegments:8});r.rotateX(-Math.PI/2),r.translate(0,t,0);const o=new ht(r,i);return o.castShadow=o.receiveShadow=!0,o}function Li(n,t,e,i){const s=[],r=[],o=new A(0,1,0);n.forEach((c,h)=>{const d=n[Math.min(h+1,n.length-1)],u=n[Math.max(h-1,0)],f=d.clone().sub(u).setY(0).normalize(),m=new A().crossVectors(o,f).normalize().multiplyScalar(t/2);for(const v of[c.clone().add(m),c.clone().sub(m),c.clone().add(m).setY(c.y-e),c.clone().sub(m).setY(c.y-e)])s.push(v.x,v.y,v.z)});for(let c=0;c<n.length-1;c++){const h=c*4,d=h+4;r.push(h,d,h+1,h+1,d,d+1,h+2,h+3,d+2,h+3,d+3,d+2,h,h+2,d,h+2,d+2,d,h+1,d+1,h+3,h+3,d+1,d+3)}const a=new Se;a.setAttribute("position",new Yt(s,3)),a.setIndex(r),a.computeVertexNormals();const l=new ht(a,i);return l.castShadow=l.receiveShadow=!0,l}const nn=(n,t,e,i=40)=>{const s=new ht(new Kl(new Lo(n),i,t,6,!1),e);return s.castShadow=!0,s};function Sa(n,{bg:t=kt.dark,fg:e="#f6e7c1",w:i=7,h:s=2.3}={}){const r=Le({text:n,w:512,h:168,bg:t,fg:e,radius:30},i,s);return r.userData.billboard=!0,r}function T_(n=1){const t=new Ft,e=[];for(let s=0;s<=5;s++)e.push(new A(Math.sin(s*.45)*.6*n,s*1.3*n,0));t.add(nn(e,.28*n,H("#8b6b4a"),12));const i=e[5];for(let s=0;s<7;s++){const r=s/7*Math.PI*2;t.add(nn([i,i.clone().add(new A(Math.cos(r)*2.2*n,.7*n,Math.sin(r)*2.2*n)),i.clone().add(new A(Math.cos(r)*4*n,-1*n,Math.sin(r)*4*n))],.24*n,H("#4f8a52"),8))}return t}function A_(){const n=new Ft;n.add(j(1.6,1.2,2.6,H(kt.yellow),0,.35,0)),n.add(j(1.7,.25,2.2,H("#1f2a2c"),0,1.55,-.1)),n.add(j(1.3,.7,.1,H("#3a5a66",{roughness:.3}),0,.9,1.25));for(const[t,e]of[[-.7,-.8],[.7,-.8],[0,1]]){const i=new ht(new Be(.35,.35,.25,10),H("#222"));i.rotation.z=Math.PI/2,i.position.set(t,.35,e),n.add(i)}return n}function C_(){const n=new Ft,t=H("#e7c9a0");n.add(j(9,1,9,H("#d8b88e"),0,0,0)),n.add(j(6,3.4,6,t,0,1,0)),n.add(j(3,2.6,.4,H("#7a3b1e"),0,1,3.05));for(let s=0;s<5;s++)n.add(j(5.2-s*.9,1.1,5.2-s*.9,t,0,4.4+s*1.05,0));const e=new ht(new Xe(.9,12,8),H("#d9a84e",{metalness:.4}));e.position.y=10.1,n.add(e),n.add(te(.06,.06,3,H("#5b3a2a"),6,0,10.4,0));const i=new ht(new Se().setFromPoints([new A(0,13.3,0),new A(1.8,12.8,0),new A(0,12.2,0)]),new xe({color:kt.saffron,side:Ne}));return n.add(i),n.add(nn([new A(-1.6,3.6,3.3),new A(0,3,3.4),new A(1.6,3.6,3.3)],.14,H("#f2a51d"),10)),n.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),n}function R_(n){const t=new Ft;t.add(j(6,6,5.5,H(n),0,0,0)),t.add(j(6.4,.6,5.9,H("#f4e6d0"),0,6,0)),t.add(j(2.6,1.6,1,H("#f4e6d0"),0,3.4,3.1));const e=new ht(new Xe(1.3,10,6,0,Math.PI*2,0,Math.PI/2),H("#f4e6d0"));e.position.set(0,5,3.1),e.scale.set(1,.6,.6),t.add(e);for(const i of[-2,0,2])t.add(j(.9,1.2,.1,H("#3d5a66"),i,1.2,2.8));return t.traverse(i=>{i.isMesh&&(i.castShadow=!0)}),t}function P_(){const n=new Ft;n.add(j(3.4,1.6,2,H("#8b5a3c"),0,0,0));const t=document.createElement("canvas");t.width=64,t.height=16;const e=t.getContext("2d");for(let r=0;r<8;r++)e.fillStyle=r%2?"#ffffff":"#d9534f",e.fillRect(r*8,0,8,16);const i=new Rn(t);i.colorSpace=Me;const s=new ht(new re(4,.2,2.8),new xe({map:i}));s.position.set(0,3,.4),s.rotation.x=.18,n.add(s);for(const r of[-1.8,1.8])n.add(j(.12,3,.12,H("#5b3a2a"),r,0,1.6));return n.add(te(.35,.3,.6,H("#c0c4c8",{metalness:.6}),10,.8,1.6,0)),n.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),n}function L_(){const n=new Ft,t=H("#7b6450");n.add(te(.9,1.3,5,t,8));for(let e=0;e<8;e++){const i=e/8*Math.PI*2;n.add(te(.12,.12,4.6,t,5,Math.cos(i)*3.2,0,Math.sin(i)*3.2))}for(const[e,i,s,r]of[[0,6.2,0,3.6],[2.6,5.6,1,2.8],[-2.6,5.8,-.6,3],[.6,6,-2.4,2.6],[-.8,5.6,2.4,2.5]]){const o=new ht(new yi(r,1),H("#5f8f4e"));o.position.set(e,i,s),o.scale.y=.65,n.add(o)}return n.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),n}function I_(){const n=new Ft,t=j(12,.12,2.4,xn("#c9a46a",2),0,0,0);t.castShadow=!1,n.add(t);for(const i of[-5.4,5.4])for(const s of[-.35,0,.35])n.add(j(.1,1.2,.1,H("#f4ead2"),i,0,s));const e=(i,s,r)=>{const o=new Ft;o.add(te(.3,.35,1.1,H(i),8));const a=new ht(new Xe(.3,8,6),H("#b98563"));return a.position.y=1.4,o.add(a),o.position.set(s,0,r),o.traverse(l=>{l.isMesh&&(l.castShadow=!0)}),o};return n.add(e("#ffffff",-4.6,.6),e("#3d7ea6",4.4,-.6),e("#e07a5f",1,2.4),e("#f2c14e",-1.5,-2.6)),n.add(j(.12,.9,.12,H("#d9b98c"),-4.2,.4,.6)),n}function D_(n,t=6.5){const e=new Ft,i=[new A(-n/2,t,0),new A(0,t-1,0),new A(n/2,t,0)],s=new Lo(i);e.add(nn(i,.04,H("#555"),12));const r=["#f2c14e","#e07a5f","#3d7ea6","#81b29a","#d94a8c","#f08a24"],o=new Se().setFromPoints([new A(-.35,0,0),new A(.35,0,0),new A(0,-.8,0)]);o.computeVertexNormals();const a=Math.floor(n/1.2);for(let l=1;l<a;l++){const c=s.getPoint(l/a),h=new ht(o,new xe({color:r[l%r.length],side:Ne}));h.position.copy(c),e.add(h)}for(const l of[-n/2,n/2])e.add(te(.08,.08,t,H(kt.dark),6,l,0,0));return e}function U_(){const n=document.createElement("canvas");n.width=n.height=256;const t=n.getContext("2d");t.fillStyle="#f6f3ea",t.fillRect(0,0,256,256);for(let i=0;i<8;i++)for(let s=0;s<8;s++)t.save(),t.translate(s*32+16,i*32+16),t.strokeStyle="#2f5d9b",t.lineWidth=3,t.beginPath(),t.arc(0,0,9,0,Math.PI*2),t.stroke(),t.fillStyle="#2f5d9b",t.rotate(Math.PI/4),t.fillRect(-4,-4,8,8),t.restore();const e=new Rn(n);return e.colorSpace=Me,e.wrapS=e.wrapT=vo,e}function N_(n){const t=new Ft;t.add(j(6,5.5,5,H(n),0,0,0));const e=new ht(new Jn(4.6,2.4,4),H("#cf6a43"));e.rotation.y=Math.PI/4,e.position.y=6.7,e.scale.set(1,1,.85),t.add(e);for(const i of[-1.6,1.6])t.add(j(1,1.3,.1,H("#2f5d9b"),i,2.6,2.55));return t.traverse(i=>{i.isMesh&&(i.castShadow=!0)}),t}function O_(){const n=document.createElement("canvas");n.width=190,n.height=100;const t=n.getContext("2d");for(let i=0;i<13;i++)t.fillStyle=i%2?"#ffffff":"#b22234",t.fillRect(0,i*100/13,190,100/13+.5);t.fillStyle="#3c3b6e",t.fillRect(0,0,76,54),t.fillStyle="#ffffff";for(let i=0;i<5;i++)for(let s=0;s<6;s++)t.beginPath(),t.arc(7+s*12.5,6+i*10.5,1.8,0,Math.PI*2),t.fill();const e=new Rn(n);return e.colorSpace=Me,e}function F_(){const i=new Ft,s=Wd(44,32,4);i.add(Es(s,an-2,8-.9,H(kt.rock),.6)),i.add(Es(s,8-.9,8-.25,H(kt.edge),.35)),i.add(Es(s,8-.25,8,H(kt.stone),.15));const r=Le({text:"MIT SLOAN · BOSTON",sub:"SUMMER IMMERSION · JUN 2026",w:1600,h:320,bg:"rgba(250,247,236,0.95)",fg:"#7a1f2b",weight:700,radius:34},34,6.8,{doubleSide:!1});r.position.set(0,8-1.15-3.4,32/2+.8),i.add(r);const o=H("#ece6d8"),a=new Ft;a.position.set(4,8,-3),a.add(j(20,6,9,o,0,0,0)),a.add(j(20.6,.6,9.6,H("#ddd5c4"),0,6,0));for(let v=0;v<8;v++)a.add(te(.38,.42,5.2,H("#f6f2e8"),10,-5.6+v*1.6,.3,5.1));a.add(j(13.4,1.1,1.6,H("#ddd5c4"),0,5.5,5.1));const l=new $i;l.moveTo(-6.9,0),l.lineTo(6.9,0),l.lineTo(0,1.9),l.closePath();const c=new Gs(l,{depth:1.6,bevelEnabled:!1});c.translate(0,0,-.8);const h=new ht(c,H("#ddd5c4"));h.position.set(0,6.6,5.1),a.add(h),a.add(te(3.4,3.6,2.6,o,24,0,6.6,-.5));const d=new ht(new Xe(3.6,24,12,0,Math.PI*2,0,Math.PI/2),H("#d8d2c4"));d.position.set(0,9.2,-.5),a.add(d),a.add(te(.6,.8,1,o,12,0,12.6,-.5));for(const v of[-7.5,-5,5,7.5])a.add(j(1,2.4,.1,H("#3d5a66"),v,1.6,4.55));a.traverse(v=>{v.isMesh&&(v.castShadow=v.receiveShadow=!0)}),i.add(a);const u=H("#9c4a35");for(let v=0;v<4;v++){const g=new Ft;g.position.set(-17+v*3.4,8,-9);const p=7+v%2*1.2;g.add(j(3.3,p,6,u,0,0,0)),g.add(j(2,p-2,1,H("#a85640"),0,1,3.3)),g.add(j(3.5,.4,6.2,H("#2b2b2b"),0,p,0));for(let x=0;x<3;x++)g.add(j(1.4,1,.1,H("#33454f"),0,1.6+x*2,3.85));g.add(j(1.1,1.6,.1,H("#1f2a37"),-1.1,0,3.05)),g.traverse(x=>{x.isMesh&&(x.castShadow=!0)}),i.add(g)}for(const[v,g]of[[-16,6],[-11,9],[-6,6.5],[15,10],[18,4],[-19,1]]){const p=new Ft;p.add(te(.25,.35,2.2,H("#8a6a4c"),6));const x=new ht(new yi(1.8,1),H(kt.leaf));x.position.y=3.3,p.add(x),p.position.set(v,8,g),p.traverse(y=>{y.isMesh&&(y.castShadow=!0)}),i.add(p)}i.add(te(.1,.12,10,H("#c9ccd1",{metalness:.5}),8,-9,8,9));const f=new ht(new dn(3.8,2).translate(1.9,0,0),new xe({map:O_(),side:Ne}));f.position.set(-8.9,8+8.9,9),i.add(f);const m=j(4,.12,12,xn(kt.walk,1),4,8,9);return m.castShadow=!1,i.add(m),i.add(j(10,.4,3,H("#ab7750"),12,an+.3,32/2+4)),{group:i,W:44,D:32,TOP:8,flag:f}}function k_(n){const t=new Ft;t.name="terrain",n.add(t);const e=Sl(42),i=new ye,s={tram:null,boats:[],beam:null},r=new ht(new dn(6e3,6e3),new xe({color:kt.sea,roughness:.35,metalness:.15}));r.rotation.x=-Math.PI/2,r.position.y=an,r.receiveShadow=!0,t.add(r);const o=new yn(new re(1,.05,.25),new Qt({color:"#9cc9d2",transparent:!0,opacity:.45}),160);for(let S=0;S<160;S++)i.position.set(_n.centerX+(e()-.5)*620,an+.05,(e()-.5)*320),i.scale.set(3+e()*9,1,1),i.rotation.set(0,(e()-.5)*.2,0),i.updateMatrix(),o.setMatrixAt(S,i.matrix);t.add(o);const a=de.map(()=>[]),l=(S,U,z,N,k)=>a[S.index].push({x0:U-N,x1:U+N,z0:z-k,z1:z+k}),c=(S,U,z,N)=>Math.abs(U)>S.w/2-N-1||Math.abs(z)>S.d/2-N-1?!1:a[S.index].every(k=>U+N<k.x0||U-N>k.x1||z+N<k.z0||z-N>k.z1),h=de.map(S=>{const U=new Ft;U.name=`island-${S.index}`,U.position.set(S.x,0,S.z),t.add(U);const z=Wd(S.w,S.d,4);U.add(Es(z,an-2,S.top-.9,H(kt.rock),.6)),U.add(Es(z,S.top-.9,S.top-.25,H(kt.edge),.35)),U.add(Es(z,S.top-.25,S.top,H(kt.stone),.15));for(let at=an+2;at<S.top-1.6-Math.min(8.5,S.top-an-1.6);at+=2.6){const rt=j(S.w-6,.12,.12,H(kt.edge),0,at,S.d/2+.62);rt.castShadow=!1,U.add(rt)}const N=Math.min(8.5,S.top-an-1.6),k=Math.min(N*5,S.w-8),F=Le({text:`0${S.index+1}  ${S.title.toUpperCase()}`,sub:S.years.toUpperCase(),w:1600,h:320,bg:"rgba(250,247,236,0.95)",fg:"#2f5550",weight:700,radius:34},k,N,{doubleSide:!1});F.position.set(0,S.top-1.15-N/2,S.d/2+.8),U.add(F);const W=S.pathZ-S.z,Y=S.streetEnd-S.z,Q=j(S.w-1,.12,6,xn(kt.walk,1),0,S.top,W),st=j(S.w-1,.14,1.3,xn(kt.coral,2),0,S.top+.02,W),pt=j(7,.12,W-Y,xn(kt.walk,1),0,S.top,(W+Y)/2),B=j(1,.14,W-Y-3,xn(kt.coral,2),0,S.top+.02,(W+Y)/2-1.5);[Q,st,pt,B].forEach(at=>{at.castShadow=!1,U.add(at)}),l(S,0,W,S.w/2,3.5),l(S,0,(W+Y)/2,4,(W-Y)/2+1);const K=j(S.w-10,.2,2.2,xn(kt.grass,1),0,S.top,-(S.d/2-2.2));return K.castShadow=!1,U.add(K),U}),d=[];for(const S of wo){const U=S.island,z=S.pos.x-U.x,N=S.pos.z-U.z;if(S.stop.style==="empty-plot"){l(U,z,N,10,13);continue}const k=j(20,E_.padTop-.02,20,H("#fbf8f0"),z,U.top+.02,N);k.castShadow=!1,h[U.index].add(k),l(U,z,N,10.5,10.5)}for(const S of de){if(S.place==="next")continue;const U=new Set(wo.filter(z=>z.island===S).map(z=>`${Math.sign(z.pos.x-S.x)}:${z.pos.z}`));for(const z of[-1,1])for(const N of S.slots){if(U.has(`${z}:${N}`))continue;const k=h[S.index],F=z*S.rowX,W=N-S.z,Y=j(18,.2,18,xn(kt.grass,1),F,S.top,W);Y.castShadow=!1,k.add(Y);for(const[Q,st]of[[-5,-5],[5,-5],[-5,5],[5,5]]){const pt=new Ft;pt.add(te(.25,.35,2.2,H("#8a6a4c"),6));const B=new ht(new yi(1.7,1),H(kt.leaf));B.position.y=3.2,pt.add(B),pt.position.set(F+Q,S.top,W+st),pt.traverse(K=>{K.isMesh&&(K.castShadow=!0)}),k.add(pt)}k.add(j(3,.5,1,H("#ab7750"),F,S.top,W),te(1.4,1.6,.6,H(kt.white),16,F,S.top,W-3.5)),l(S,F,W,10.5,10.5)}}for(const S of de){const U=h[S.index],z=S.pathZ-S.z,N=(W,Y,Q,st,pt=0)=>c(S,Y,Q,st)?(W.position.set(Y,S.top,Q),W.rotation.y=pt,U.add(W),l(S,Y,Q,st,st),!0):!1,k=S.slots.map(W=>W-S.z),F=S.rowX+10+(S.w/2-S.rowX-10)/2;if(S.place==="india"){const W=S.index===1;N(C_(),W?F:-F,k[W?1:0],4.6,W?-Math.PI/2:Math.PI/2);for(const[st,pt]of[[0,"#e8a0a8"],[1,"#6f8fc9"],[2,"#e5b465"]]){const B=(W?-1:1)*F;N(R_(pt),B,k[0]-14+st*9+(W?4:0),3.4,(W?1:-1)*Math.PI/2)}N(I_(),W?14:-16,z+7.5,3),N(P_(),W?-18:20,z+7,2.2,Math.PI),N(L_(),W?-S.w/2+9:S.w/2-9,z+7.5,4);for(const st of[-S.w/2+5,-6,6,S.w/2-5,0])N(T_(.9+e()*.2),st,z+9.5,1.6,e()*6);for(const st of k){const pt=D_(7.5);pt.position.set(0,S.top,st+11),U.add(pt)}const Y=A_();Y.position.set(W?10:-12,S.top+.1,z+1.6),Y.rotation.y=Math.PI/2,U.add(Y);const Q=j(S.w*.3,.35,1.6,H("#e3913f"),-S.w*.25,S.top,z+4.4);Q.castShadow=!1,U.add(Q)}if(S.place==="lisbon"){const W=U_();W.repeat.set(4,1.6);const Y=new ht(new dn(26,8),new xe({map:W,roughness:.6,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}));Y.rotation.x=-Math.PI/2,Y.position.set(-12,S.top+.05,z+7.5),Y.receiveShadow=!0,U.add(Y),l(S,-12,z+7.5,13,4);const Q=S.streetEnd-S.z;for(const pt of[-1.1,1.1])U.add(j(.18,.1,z-Q,H("#4a5560"),pt,S.top+.08,(z+Q)/2));const st=new Ft;st.add(j(2.4,2.4,7,H(kt.yellow),0,.3,0),j(2.6,.35,7.3,H(kt.white),0,2.7,0));for(const pt of[-1,1])st.add(j(.05,.9,5.6,H("#3d6f7b",{roughness:.3}),pt*1.22,1.5,0));st.add(nn([new A(0,3,0),new A(0,4.6,-1)],.05,H("#333"),2)),st.position.set(0,S.top,(z+Q)/2),st.traverse(pt=>{pt.isMesh&&(pt.castShadow=!0)}),U.add(st),s.tram={tram:st,mid:(z+Q)/2,span:(z-Q)/2-6};for(const[pt,B,K]of[[-1,0,"#f7f2e7"],[-1,1,"#f3d9a8"],[1,0,"#e9eef2"],[1,1,"#f7f2e7"]])N(N_(K),pt*F,k[B],3.6,pt*-Math.PI/2);for(const pt of[8,20,S.w/2-6])N(new Ft().add(te(.25,.35,2.2,H("#8a6a4c"),6),new ht(new yi(1.7,1).translate(0,3.2,0),H(kt.leaf))),pt,z+8,2)}if(S.place==="horizon"){const W=new Ft;W.add(te(1.4,2,13,H(kt.white),16));for(let st=0;st<3;st++)W.add(te(1.85-st*.15,1.95-st*.15,1.1,H(kt.red),16,0,2+st*3.6,0));W.add(te(1.2,1.2,1.8,new xe({color:"#fff4c2",emissive:"#ffd76a",emissiveIntensity:1.2}),16,0,13,0)),W.add(te(.2,1.6,1.4,H(kt.gold,{metalness:.4}),16,0,14.8,0));const Y=new ht(new Jn(4,26,24,1,!0).translate(0,-13,0),new Qt({color:"#ffd76a",transparent:!0,opacity:.22,depthWrite:!1,side:Ne})),Q=new Ft;Q.position.y=13.9,Y.rotation.z=Math.PI/2,Q.add(Y),W.add(Q),W.traverse(st=>{st.isMesh&&st!==Y&&(st.castShadow=!0)}),N(W,F,k[1],2.5),s.beam=Q}}const u=new Zt,f=new Be(.25,.35,2.2,6).translate(0,1.1,0),m=new yi(1.7,1).translate(0,3.2,0),v=H("#3d6f7b",{roughness:.25,metalness:.3});for(const S of de){const U=h[S.index],z=S.pathZ-S.z;if(S.place!=="india"&&S.place!=="next")for(let Y=0,Q=0;Y<80&&Q<3;Y++){const st=S.slots[1]-S.z+4,pt=(e()-.5)*(S.w-10),B=-S.d/2+5+e()*(st+S.d/2-5);if(!c(S,pt,B,3.6))continue;const K=4+S.index*2.6+e()*(3+S.index*2),at=5+e()*2,rt=5+e()*2,mt=new Ft;mt.position.set(pt,S.top,B),mt.add(j(at,K,rt,H("#eef1f2"),0,0,0));for(let At=0;At<Math.max(1,Math.floor(K/2.4));At++)mt.add(j(at+.06,.8,rt+.06,v,0,.9+At*2.4,0));mt.add(j(at+.4,.3,rt+.4,H(kt.trim),0,K,0)),mt.traverse(At=>{At.isMesh&&(At.castShadow=At.receiveShadow=!0)}),U.add(mt),l(S,pt,B,at/2+1,rt/2+1),Q++}const N=[];for(let Y=-S.w/2+4;Y<=S.w/2-4;Y+=5.5)for(const Q of[-S.d/2+4,z+9])c(S,Y,Q,1.8)&&(N.push({x:Y,z:Q}),l(S,Y,Q,1.8,1.8));for(let Y=-S.d/2+8;Y<z-4;Y+=6)for(const Q of[-S.w/2+3.5,S.w/2-3.5])c(S,Q,Y,1.8)&&(N.push({x:Q,z:Y}),l(S,Q,Y,1.8,1.8));if(N.length){const Y=new yn(f,H("#8a6a4c"),N.length),Q=new yn(m,H("#ffffff"),N.length);N.forEach((st,pt)=>{i.position.set(st.x,S.top,st.z),i.rotation.set(0,e()*6,0),i.scale.setScalar(.75+e()*.35),i.updateMatrix(),Y.setMatrixAt(pt,i.matrix),Q.setMatrixAt(pt,i.matrix),Q.setColorAt(pt,u.set(e()<.6?kt.leaf:kt.leaf2))}),Y.castShadow=Q.castShadow=!0,U.add(Y,Q)}const k=[];for(let Y=-S.w/2+4;Y<=S.w/2-4;Y+=9)k.push({x:Y,z:z+3.8,r:0});for(let Y=z-6;Y>S.streetEnd-S.z+2;Y-=9)for(const Q of[-1,1])k.push({x:Q*4.2,z:Y,r:Q>0?-Math.PI/2:Math.PI/2});const F=new yn(new Be(.1,.12,3.6,6).translate(0,1.8,0),H(kt.dark),k.length),W=new yn(new re(.9,.18,.4).translate(.3,3.6,0),new xe({color:kt.gold,emissive:"#ffd27a",emissiveIntensity:.25}),k.length);k.forEach((Y,Q)=>{i.position.set(Y.x,S.top,Y.z),i.rotation.set(0,Y.r,0),i.scale.setScalar(1),i.updateMatrix(),F.setMatrixAt(Q,i.matrix),W.setMatrixAt(Q,i.matrix)}),F.castShadow=!0,U.add(F,W)}const g=Gd.map(S=>{const U=new Ft;U.name=`bridge-${S.index}`,t.add(U);const{a:z,b:N}=S,k=N.clone().sub(z).setY(0).normalize(),F=new A(-k.z,0,k.x);if(S.suspension){const st=Array.from({length:21},(at,rt)=>z.clone().lerp(N,rt/20).add(new A(0,.15,0)));U.add(Li(st,6.5,.9,H("#7d8a8f"))),U.add(Li(st.map(at=>at.clone().add(new A(0,.05,0))),1.3,.1,xn(kt.coral,2)));const pt=H(kt.red,{roughness:.5}),B=[z.clone().lerp(N,.2),z.clone().lerp(N,.8)];for(const at of B){for(const mt of[-1,1])U.add(j(.9,16,.9,pt,at.x+F.x*3.4*mt,at.y-3,at.z+F.z*3.4*mt));const rt=j(.9,.9,7.6,pt,at.x,at.y+11.6,at.z);rt.rotation.y=Math.atan2(F.x,F.z),U.add(rt)}for(const at of[-1,1]){const rt=F.clone().multiplyScalar(3.4*at),mt=B[0].clone().add(rt).setY(B[0].y+12.5),At=B[1].clone().add(rt).setY(B[1].y+12.5),Ot=Array.from({length:17},(Gt,it)=>{const dt=mt.clone().lerp(At,it/16);return dt.y-=Math.sin(it/16*Math.PI)*10,dt});U.add(nn(Ot,.2,pt,40)),U.add(nn([z.clone().add(rt).setY(z.y+.6),mt],.2,pt,4),nn([At,N.clone().add(rt).setY(N.y+.6)],.2,pt,4));for(let Gt=2;Gt<=14;Gt+=2){const it=Ot[Gt],dt=z.clone().lerp(N,.2+Gt/16*.6);U.add(nn([it,new A(it.x,dt.y+.2,it.z)],.07,pt,2))}}const K=Sa("LISBON",{bg:kt.red,fg:"#ffffff",w:8,h:2.6});return K.position.copy(z.clone().lerp(N,.5)).add(new A(0,15,0)),U.add(K),U}const W=Array.from({length:41},(st,pt)=>{const B=pt/40,K=z.clone().lerp(N,B);return K.y+=Math.sin(B*Math.PI)*6+.15,K});if(S.unbuilt){const st=W.slice(0,24);U.add(Li(st,6.5,.8,H(kt.white))),U.add(Li(st.map(mt=>mt.clone().add(new A(0,.05,0))),1.3,.1,xn(kt.coral,2)));const pt=Li(W.slice(23),6.5,.8,new Qt({color:"#ffffff",transparent:!0,opacity:.22,depthWrite:!1}));pt.castShadow=!1,U.add(pt);for(let mt=25;mt<40;mt+=2){const At=W[mt],Ot=j(1.3,.12,1.2,H(kt.coral),At.x,At.y+.05,At.z);Ot.castShadow=!1,U.add(Ot)}const B=W[23],K=H("#d9a441");for(const mt of[-1,1])for(const At of[-1,1])U.add(j(.2,12,.2,K,B.x+At*1.2,B.y-9,B.z+mt*3.4));for(let mt=-8;mt<=2;mt+=2.5)U.add(j(2.8,.15,7.2,K,B.x,B.y+mt,B.z));const at=mt=>ur.lerp(z.y-6,N.y-6,mt)+Math.sin(mt*Math.PI)*11.5;for(const mt of[-1,1]){const At=F.clone().multiplyScalar(2.7*mt);U.add(nn(Array.from({length:12},(Ot,Gt)=>{const it=Gt/11*.575,dt=z.clone().lerp(N,it).add(At);return dt.y=at(it),dt}),.45,H(kt.trim),24))}const rt=Sa("NEXT",{bg:kt.coral,fg:"#ffffff"});return rt.position.copy(W[20]).add(new A(0,4.8,0)),U.add(rt,te(.12,.12,3.4,H(kt.dark),6,W[20].x,W[20].y,W[20].z)),U}U.add(Li(W,6.5,.8,H(kt.white))),U.add(Li(W.map(st=>st.clone().add(new A(0,.05,0))),1.3,.1,xn(kt.coral,2)));const Y=st=>ur.lerp(z.y-6,N.y-6,st)+Math.sin(st*Math.PI)*11.5;for(const st of[-1,1]){const pt=F.clone().multiplyScalar(2.7*st),B=Array.from({length:21},(K,at)=>{const rt=at/20,mt=z.clone().lerp(N,rt).add(pt);return mt.y=Y(rt),mt});U.add(nn(B,.45,H(kt.trim),40)),U.add(nn(W.map(K=>K.clone().add(F.clone().multiplyScalar(3.1*st)).add(new A(0,1.1,0))),.12,H(kt.gold,{metalness:.4,roughness:.35}),60));for(let K=4;K<=36;K+=4){const at=W[K].clone().add(pt),rt=Y(K/40);at.y-.7-rt>.5&&U.add(nn([at.clone().setY(at.y-.7),new A(at.x,rt,at.z)],.07,H(kt.trim),2))}}const Q=Sa(S.year);return Q.position.copy(W[20]).add(new A(0,4.8,0)),U.add(Q,te(.12,.12,3.4,H(kt.dark),6,W[20].x,W[20].y,W[20].z)),U}),p=de.find(S=>S.place==="lisbon"),x=F_();x.group.name="islet-mit-sloan",x.group.position.set(p.x+18,0,p.z+p.d/2+x.D/2+26),t.add(x.group);const y=new ht(new re(x.W,20,x.D),new Qt({visible:!1}));y.position.set(0,x.TOP+4,0),y.userData.extraId="mit-sloan",x.group.add(y);const _=new A(p.x+18,an+.1,p.z+p.d/2+2),P=new A(x.group.position.x-6,an+.1,x.group.position.z-x.D/2-2),E=new ql(_,_.clone().lerp(P,.5).add(new A(-14,0,0)),P),R=new yn(new Be(.45,.45,.12,10),new Qt({color:"#ffffff"}),18);for(let S=0;S<18;S++)i.position.copy(E.getPoint((S+.5)/18)),i.rotation.set(0,0,0),i.scale.setScalar(1),i.updateMatrix(),R.setMatrixAt(S,i.matrix);x.group.attach(R);const L=()=>x.group.localToWorld(new A(0,x.TOP,0)),b=de[0];for(let S=0;S<3;S++)t.add(j(3,.4,14,H("#ab7750"),b.x-14+S*5,an+.3,b.z+b.d/2+9));for(let S=0;S<4;S++){const U=new Ft;U.add(j(2,.8,6,H(kt.white),0,0,0)),U.add(te(.07,.07,7,H(kt.dark),6,0,.8,0));const z=new Se().setFromPoints([new A(0,1.4,0),new A(0,7.4,0),new A(0,1.4,3.6)]);z.computeVertexNormals(),U.add(new ht(z,new xe({color:"#f7f3df",side:Ne}))),U.traverse(k=>{k.isMesh&&(k.castShadow=!0)});const N=_n.centerX+(S-1.5)*120+e()*30;U.position.set(N,an+.2,(S%2?1:-1)*(75+e()*30)),U.userData={x0:N,speed:2+e()*2,phase:e()*6},t.add(U),s.boats.push(U)}const M=[2015.7,2020.75,2025.7,2026.4,2026.55],I=2026.25;function V(S){const U=Ue((S-I)/.2,0,1);x.group.visible=U>0,x.group.position.y=(1-bl(U))*-20,h.forEach((z,N)=>{const k=Ue((S-M[N])/.25,0,1);z.visible=k>0,z.position.y=(1-bl(k))*-(de[N].top+12)}),g.forEach((z,N)=>{z.visible=S>=M[N+1]+.15})}return{group:t,clouds:new Ft,obstacles:[],islandGroups:h,setYear:V,pickables:[y],extras:{"mit-sloan":{anchor:S=>S.copy(L()).add(new A(4,17,-3)),focus:()=>{const S=L().add(new A(2,4,0));return{target:S,pos:S.clone().add(new A(18,40,82))}}}},update(S,U=0,z){if(z){const N=z.aspect<.9;for(const k of d){const F=N?k.spots.tall:k.spots.wide;k.holder.position.z=F.z,k.holder.position.y=F.y+Math.sin(U*.9+k.phase)*.8,k.holder.scale.setScalar(N?1.2:1),k.beam.visible=k.emitter.visible=!N;const W=k.holder.getWorldPosition(new A);k.holder.quaternion.copy(z.quaternion);const Y=z.position.distanceTo(W),Q=Math.min(1,Math.max(0,(Y-110)/140));k.panel.material.opacity=Q,k.beam.material.opacity=.18*Q,k.panel.visible=Q>.02}}s.tram&&(s.tram.tram.position.z=s.tram.mid+Math.sin(U*.25)*s.tram.span),s.beam&&(s.beam.rotation.y=U*.6),x.flag.rotation.y=Math.sin(U*1.7)*.12;for(const N of s.boats)N.position.x=N.userData.x0+Math.sin(U*.05*N.userData.speed+N.userData.phase)*40,N.rotation.z=Math.sin(U*1.3+N.userData.phase)*.04}}}const B_=.32,z_=new i_;function so(n,t,e,i){const s=new $i;s.moveTo(-t/2,0),s.lineTo(t/2,0),s.lineTo(0,e),s.closePath();const r=new Gs(s,{depth:n,bevelEnabled:!1});r.translate(0,0,-n/2),r.rotateY(Math.PI/2);const o=new ht(r,H(i));return o.castShadow=!0,o}function H_(n,t,e,i){const s=new $i;s.moveTo(-n/2,0),s.lineTo(n/2,0),s.lineTo(0,t),s.closePath();const r=new Gs(s,{depth:e,bevelEnabled:!1});r.translate(0,0,-e/2);const o=new ht(r,H(i));return o.castShadow=!0,o}function Ii(n,{w:t,h:e,rows:i,cols:s,x:r=0,y:o,z:a,color:l="#3f5b74",ww:c=.9,wh:h=1.1,emissive:d="#ffd98a",lit:u=.12,rotY:f=0}){const m=new re(c,h,.15),v=new yn(m,new xe({color:l,emissive:d,emissiveIntensity:u,roughness:.3,metalness:.1}),i*s),g=new ye;let p=0;for(let x=0;x<i;x++)for(let y=0;y<s;y++){const _=s===1?0:-t/2+t*y/(s-1),P=i===1?0:e*x/(i-1);g.position.set(_,P,0),g.updateMatrix(),v.setMatrixAt(p++,g.matrix)}return v.position.set(r,o,a),v.rotation.y=f,n.add(v),v}function qn(n,t,{y:e,z:i,w:s=9,h:r=1.8,bg:o="#243447",fg:a="#fff",sub:l,emissive:c=!1}){const h=Le({text:t,sub:l,w:1024,h:Math.round(1024*r/s),bg:o,fg:a},s,r,{emissive:c});return h.position.set(0,e,i),n.add(h),h}function V_(n){const t=new Ft;t.add(te(.32,.38,1.1,H(n),6));const e=new ht(new Xe(.3,8,6),H("#f0c8a0"));return e.position.y=1.4,t.add(e),t}const G_={campus(n){n.add(j(16,6,8,H("#e9cfa5"),0,0,-1)),n.add(j(16.6,.6,8.6,H("#c98f62"),0,6,-1));for(let r=0;r<6;r++)n.add(te(.38,.45,5,H("#f6ead2"),8,-6.25+r*2.5,.3,3.6));n.add(j(15.5,.35,2.2,H("#d9b98c"),0,0,3.8)),n.add(j(15.5,.8,1.8,H("#c98f62"),0,5.3,3.6)),n.add(j(3.6,14,3.6,H("#e3c294"),0,0,-3));const e=new ht(new Jn(3.1,3.6,4),H("#b5654a"));e.rotation.y=Math.PI/4,e.position.set(0,15.8,-3),e.castShadow=!0,n.add(e);const i=new Rn(W_());i.colorSpace=Me;const s=new ht(new vs(1.25,24),new Qt({map:i}));return s.position.set(0,11.6,-1.18),n.add(s),Ii(n,{w:12,h:2.2,rows:2,cols:7,y:1.8,z:3.05}),qn(n,"MANIPAL INSTITUTE OF TECHNOLOGY",{y:7.4,z:3.2,w:11,h:1.3,bg:"#7a2e2e"}),n.add(j(16,.15,3.5,H("#9cc56e"),0,.05,6.8)),{clock:s}},lab(n){n.add(te(6,6.3,3.6,H("#f4f1ea"),20));const t=new ht(new Xe(5.8,20,10,0,Math.PI*2,0,Math.PI/2),H("#d9e4ec",{flatShading:!0}));t.position.y=3.6,t.castShadow=!0,n.add(t),Ii(n,{w:6,h:0,rows:1,cols:4,y:1.9,z:6.2,color:"#5a7d99"});const e=j(.6,.6,7,H("#3a4250"),0,8.8,2.4);n.add(e),n.add(j(.6,3.6,.6,H("#3a4250"),0,6,-1.2));const i=new Ft;i.position.set(0,9.1,6.2);const s=te(1.1,1.1,1.8,H("#2b3240"),16);s.rotation.x=Math.PI/2.6,s.position.set(0,0,0),i.add(s);const r=new ht(new vs(.75,20),new Qt({color:"#6fd3ff"}));r.position.set(0,-.75,.55),r.rotation.x=Math.PI/2+.3,i.add(r),n.add(i),n.add(te(1.9,1.6,.9,H("#cbd2da"),16,0,0,8.2)),n.add(te(1.8,1.4,.18,H("#ffffff"),20,0,.9,8.2));const o=new ht(new Xe(.62,12,10),H("#d64545"));o.position.set(-.4,1.6,8.2);const a=new ht(new Xe(.5,10,8),H("#a3c454"));return a.position.set(.6,1.5,8),o.castShadow=a.castShadow=!0,n.add(o,a),qn(n,"IMAGE RECOGNITION LAB",{y:4.6,z:6.15,w:9,h:1.15}),{eye:i,lens:r,plate:new A(0,1.6,8.2)}},"learning-tower"(n,t){const e=t.certificates||[];n.add(j(8,2.2,8,H("#e8dfcf"),0,0,0)),n.add(j(3,1.8,.3,H("#3f5b74"),0,0,4.05));const i=[],s=["#f4efe4","#efe6d4","#f4efe4","#efe6d4","#f4efe4","#efe6d4"];e.forEach((l,c)=>{const h=new Ft;h.position.y=2.2+c*3.4;const d=j(7,3,7,H(s[c%s.length]),0,0,0),u=new ht(new re(7.2,1.1,7.2),new xe({color:"#40607c",emissive:"#ffcf6b",emissiveIntensity:.08,roughness:.3}));u.position.y=1.55;const f=j(7.6,.4,7.6,H("#d8cbb3"),0,3,0);[d,u,f].forEach(m=>{m.userData.certIndex=c}),h.add(d,u,f),h.userData={year:f_(l),band:u,index:c},n.add(h),i.push(h)});const r=2.2+e.length*3.4+.4,o=new ht(new Be(0,3.2,2.6,4),H("#c66b4f"));o.rotation.y=Math.PI/4,o.position.y=r+1.3,o.castShadow=!0,n.add(o),n.add(te(.12,.12,3.4,H("#3a4250"),6,0,r+2.4,0));const a=new ht(new Xe(.35,8,6),new Qt({color:"#ff7a59"}));return a.position.y=r+6,n.add(a),qn(n,"LEARNING TOWER",{y:1.1,z:4.2,w:6.6,h:1}),{floors:i,crown:o,tip:a,top:r}},arcade(n){n.add(j(17,5,10,H("#5b3fa0"),0,0,-1)),n.add(j(14,4.2,8,H("#7656c2"),0,5,-2)),n.add(j(17.4,.4,10.4,H("#2e2350"),0,5,-1)),n.add(j(14.4,.4,8.4,H("#2e2350"),0,9.2,-2)),n.add(j(10,3.2,.2,new xe({color:"#2a1d4a",emissive:"#ff4fd8",emissiveIntensity:.25,roughness:.2}),0,.4,4.05));const e=new Qt({color:"#ff5fd2"}),i=new Qt({color:"#4ff0ff"}),s=new ht(new re(17.2,.22,.22),e);s.position.set(0,4.85,4.12);const r=new ht(new re(14.2,.22,.22),i);r.position.set(0,9.05,2.12),n.add(s,r);const o=new yn(new Xe(.2,6,4),new Qt({color:"#ffe17a"}),16),a=new ye;for(let d=0;d<16;d++)a.position.set(-7.5+d,3.9,4.25),a.updateMatrix(),o.setMatrixAt(d,a.matrix);n.add(o);const l=Le({text:"GMNG",w:512,h:192,bg:"#1b1233",fg:"#ff7be5",border:"#4ff0ff"},7,2.6,{emissive:!0});l.position.set(0,11.2,.5),n.add(l),n.add(j(.3,1.6,.3,H("#2e2350"),-2.5,9.4,.4),j(.3,1.6,.3,H("#2e2350"),2.5,9.4,.4));const c=Le({text:"APM · 2021",w:512,h:128,bg:"#ffffff",fg:"#3b2a6b"},3.4,.85);c.position.set(-6.2,4.3,4.13);const h=Le({text:"PM · 2022–23",w:512,h:128,bg:"#ffffff",fg:"#3b2a6b"},3.6,.9);return h.position.set(-4.4,8.2,2.13),n.add(c,h),Ii(n,{w:10,h:0,rows:1,cols:5,y:6.9,z:2.1,color:"#2a1d4a",emissive:"#4ff0ff",lit:.5}),n.add(j(17,.12,4.5,H("#e4d6f2"),0,.03,6.4)),{door:new A(0,0,4.3),plaza:new A(0,0,6.6),bulbs:o}},tower(n){const t=new xe({color:"#8fbcd8",roughness:.15,metalness:.35,flatShading:!0});n.add(j(12,3.4,10,H("#dfe5ea"),0,0,0)),n.add(j(7,26,7,t,0,3.4,-1));for(let l=0;l<9;l++)n.add(j(7.2,.25,7.2,H("#e9eef2"),0,4.2+l*2.9,-1));n.add(j(7.4,.8,7.4,H("#d0d8df"),0,29.4,-1)),n.add(te(.1,.1,5,H("#3a4250"),6,1.8,30.2,-1.8));const e=new ht(new Xe(.3,8,6),new Qt({color:"#ff4d4d"}));e.position.set(1.8,35.3,-1.8),n.add(e),n.add(j(.4,4.5,.4,H("#3a4250"),-3.5,3.4,3.2),j(.4,4.5,.4,H("#3a4250"),3.5,3.4,3.2));const i=Vd({text:"XY ADS",sub:"Ad exchange · built from scratch",w:1024,h:384,bg:"#111827",fg:"#ffffff"}),s=new Rn(i);s.colorSpace=Me;const r=new ht(new dn(9,3.4),new Qt({map:s}));r.position.set(0,9.5,3.4),n.add(r,j(9.4,3.8,.3,H("#2b3240"),0,7.6,3.2));const o=[],a=[[-8.2,-6.5,"DSP"],[8.2,-6.5,"SSP"],[-8.2,5.5,"DSP"],[8.2,4.5,"SSP"]];for(const[l,c,h]of a){const d=3+Math.abs(l+c)%3;n.add(j(3,d,3,H(h==="DSP"?"#f6d6a8":"#cde3c7"),l,0,c));const u=Le({text:h,w:256,h:128,bg:"#243447",fg:"#fff"},1.6,.8);u.position.set(l,d+.7,c),u.userData.billboard=!0,n.add(u),o.push(new A(l,d+.2,c))}return{board:r,canvas:i,texture:s,partners:o,hub:new A(0,27,-1),blink:e}},library(n){const t="#f3ead8";for(let r=0;r<3;r++)n.add(j(15-r*.8,.45,10-r*.6,H("#ddd2bd"),0,r*.45,0));n.add(j(13,6,7,H(t),0,1.35,-1));for(let r=0;r<6;r++)n.add(te(.42,.48,5.4,H("#fbf6ea"),10,-5+r*2,1.35,3.2));n.add(j(13.6,.7,2.4,H("#e9dcc2"),0,6.75,2.6));const e=H_(13.6,2.6,2.4,"#e9dcc2");e.position.set(0,7.45,2.6),n.add(e),n.add(j(13.4,.5,7.4,H("#c46b4e"),0,7.35,-1.2)),qn(n,"THE LIBRARY",{y:8.3,z:3.85,w:5,h:.9,bg:"#f3ead8",fg:"#5b4636"});const i=["#c0504d","#4f81bd","#9bbb59","#f2c14e","#8064a2"];for(let r=0;r<3;r++)for(let o=0;o<4;o++){const a=j(1.4,.32,1,H(i[(r+o)%5]),-5+r*5,1.35+o*.32,5.4);a.rotation.y=o%2*.3-.15,n.add(a)}const s=[];return[["#e07a5f",-3],["#3d7ea6",2.5],["#f2c14e",4.3]].forEach(([r,o])=>{const a=V_(r);a.scale.setScalar(.7),a.position.set(o,1.35,4.4),n.add(a),s.push(a)}),{kids:s}},university(n){const t="#fbf7ef";n.add(j(14,7,6,H(t),0,0,-3));const e=so(14.6,6.8,2.8,"#cf6a43");e.position.set(0,7,-3),n.add(e);for(const l of[-1,1]){n.add(j(4.5,5.5,8,H(t),l*6.3,0,2));const c=so(8.6,5.1,2.2,"#cf6a43");c.rotation.y=Math.PI/2,c.position.set(l*6.3,5.5,2),n.add(c)}const i=document.createElement("canvas");i.width=256,i.height=32;const s=i.getContext("2d");s.fillStyle="#ffffff",s.fillRect(0,0,256,32);for(let l=0;l<16;l++)s.fillStyle="#2f5d9b",s.save(),s.translate(l*16+8,16),s.rotate(Math.PI/4),s.fillRect(-5,-5,10,10),s.restore();const r=new Rn(i);r.colorSpace=Me;const o=new ht(new dn(14,.9),new xe({map:r,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));o.position.set(0,1.4,.03),n.add(o),n.add(j(3.2,4.2,.4,H("#2f3a48"),0,0,.1));const a=new ht(new Be(1.6,1.6,.42,16,1,!1,0,Math.PI),H("#2f3a48"));return a.rotation.z=Math.PI/2,a.rotation.y=Math.PI/2,a.position.set(0,4.2,.1),n.add(a),Ii(n,{w:9,h:2.6,rows:2,cols:5,y:2.6,z:.05,color:"#3f5b74"}),qn(n,"CATÓLICA | NOVA · THE LISBON MBA",{y:6.2,z:.12,w:10,h:.95,bg:"#1d3557"}),n.add(j(8,.12,6,H("#e8dcc8"),0,.03,5.5)),{depot:new A(0,0,6)}},teahouse(n){n.add(j(10,4.6,8,H("#e2ecd7"),0,0,-1));const t=so(10.8,9,3.2,"#3f6b4a");t.position.set(0,4.6,-1),n.add(t),n.add(j(2,3,.25,H("#6b4f3a"),0,0,3.1)),Ii(n,{w:6,h:0,rows:1,cols:2,y:2.4,z:3.05,color:"#557a5f",ww:1.4,wh:1.4});const e=new Ft;e.position.set(0,7.2,-1),e.add(te(2.2,3.2,.4,H("#ffffff"),20,0,-.3,0)),e.add(te(2.3,1.6,2.6,H("#ffffff"),20,0,0,0));const i=new ht(new vs(2.1,20),H("#b5793b"));i.rotation.x=-Math.PI/2,i.position.y=2.45,e.add(i);const s=new ht(new vr(.75,.22,6,12),H("#ffffff"));s.position.set(2.4,1.3,0),e.add(s),e.traverse(l=>{l.isMesh&&(l.castShadow=!0)}),n.add(e),qn(n,"SOVENA · TEA HOUSE",{y:4,z:3.08,w:6.4,h:.9,bg:"#3f6b4a"});const r=new yn(new yi(.7,0),H("#5f9a52"),24),o=new ye;let a=0;for(let l=0;l<3;l++)for(let c=0;c<8;c++)o.position.set(-7+c*2,.6,5+l*1.6),o.scale.set(1,.8,1),o.updateMatrix(),r.setMatrixAt(a++,o.matrix);return r.castShadow=!0,n.add(r),{steamFrom:new A(0,9.8,-1)}},"hq-ai"(n){n.add(j(14,5,10,H("#f4f5f7"),0,0,-1));const t=new xe({color:"#2d3a4a",roughness:.2,metalness:.4});n.add(j(11,6,8,t,1,5,-2)),n.add(j(11.4,.4,8.4,H("#e7eaee"),1,11,-2)),Ii(n,{w:11,h:0,rows:1,cols:6,y:2.6,z:4.05,color:"#2d3a4a",emissive:"#7fd6ff",lit:.15});const e=[];for(let r=0;r<3;r++)for(let o=0;o<4;o++){const a=new xe({color:"#36465a",emissive:"#7cf0c5",emissiveIntensity:0,roughness:.4}),l=new ht(new re(2.1,.3,1.8),a);l.position.set(-2.6+o*2.4,11.55,-4.6+r*2.2),l.castShadow=!0,n.add(l),e.push(l)}const i=new ht(new vr(1.6,.22,8,32),new Qt({color:"#7cf0c5"}));i.position.set(-5,8.6,2.2),n.add(i);const s=Le({text:"AI",w:256,h:256,bg:null,fg:"#7cf0c5"},2.2,2.2,{emissive:!0});return s.position.set(-5,8.6,2.25),n.add(s),qn(n,"MR NEO",{y:4,z:4.06,w:4,h:1,bg:"#111827"}),{panels:e,ring:i,ai:s}},"hotel-construction"(n,t){n.add(j(14,9,8,H("#f6ecdc"),0,0,-2));for(let m=0;m<3;m++)Ii(n,{w:11,h:0,rows:1,cols:6,y:1.7+m*3,z:2.08,color:"#40607c",ww:1.2,wh:1.5,lit:.18}),m>0&&n.add(j(13,.18,.9,H("#d8c7ad"),0,m*3,2.4));const i=H("#c9c4bb");for(let m=0;m<2;m++){n.add(j(14,.35,8,i,0,9+m*3,-2));for(const v of[-6.6,-2.2,2.2,6.6])for(const g of[-5.6,1.6])n.add(j(.45,3,.45,i,v,9.35+m*3,g))}const s=H("#d9a441");for(let m=0;m<5;m++)n.add(j(.15,15,.15,s,7.6,0,-5.6+m*2));for(let m=0;m<5;m++)n.add(j(.15,.15,8.4,s,7.6,3+m*3,-2));const r=new Ft;r.position.set(-9,0,-7);const o=H("#f2b632");r.add(j(1.3,26,1.3,o));for(let m=0;m<9;m++){const v=j(1.8,.18,.18,H("#c88f12"),0,1+m*2.8,.66);v.rotation.z=.7*(m%2?1:-1),r.add(v)}const a=new Ft;a.position.y=26,a.add(j(24,.9,1,o,6,0,0)),a.add(j(3,2.2,1.8,H("#5b6573"),-5,-.6,0)),a.add(j(1.8,1.6,1.8,H("#e7e1d4"),0,-1.7,0)),a.add(j(.6,3,.6,o,0,.8,0));const l=new Ft;l.position.x=12;const c=new ht(new Be(.06,.06,1,4),H("#333"));l.add(c);const h=new Ft,d=j(3,1.2,1.8,H("#b8b2a7"));d.position.y=-1.3,h.add(j(.5,.5,.5,H("#333"),0,-.5,0),d),l.add(h),a.add(l),r.add(a),n.add(r),n.add(j(17,2.6,.25,H("#2f4a3a"),0,0,5.2));const u=Le({text:"LARÁ · OPENING SOON",sub:"An AI hotel platform, under construction",w:1024,h:256,bg:"#f2b632",fg:"#2a2a2a"},8.6,2.15);return u.position.set(0,10.6,2.3),n.add(u),(t.screenshots||[]).slice(0,4).forEach((m,v)=>{const g=z_.load(m.file);g.colorSpace=Me;const p=new ht(new dn(1.75,3.6),new Qt({map:g}));p.position.set(-5.4+v*3.6,2.25,5.43),n.add(p,j(2.05,3.9,.15,H("#1f2a37"),-5.4+v*3.6,.3,5.3))}),{jib:a,trolley:l,cable:c,hook:h,windowsAt:[new A(-5,11.5,0),new A(5,4,2.2),new A(5,11.5,0),new A(-5,4,2.2)],door:new A(0,0,6)}},park(n){const t=new Ft;t.position.set(-4.5,0,0),t.add(j(7,3,3,H("#d9c6a1"),0,0,4));const e=so(7.4,3.6,1.2,"#7b5c3e");e.position.set(0,3,4),t.add(e);for(let c=0;c<3;c++)t.add(j(.15,.6,9,H("#efe3c8"),-2.2+c*2.2,0,-2.5));const i=new Rn(X_());i.colorSpace=Me;const s=[];for(let c=0;c<3;c++){const h=new ht(new vs(.9,24),new Qt({map:i}));h.position.set(-2.2+c*2.2,1.6,-7.2),t.add(h,j(.18,1.2,.18,H("#6b4f3a"),-2.2+c*2.2,0,-7.3)),s.push(h)}t.add(j(8,2.4,.5,H("#9c8463"),0,0,-8)),n.add(t);const r=new Ft;r.position.set(5.5,0,-1),r.add(j(6,.6,6,H("#cbbba0"))),r.add(j(5,3.2,5,H("#f4ead6"),0,.6,0));const o=new ht(new Jn(5.2,2.2,4),H("#b23a2f"));o.rotation.y=Math.PI/4,o.position.y=4.9;const a=new ht(new Jn(3.4,1.8,4),H("#b23a2f"));a.rotation.y=Math.PI/4,a.position.y=6.6,o.castShadow=a.castShadow=!0,r.add(o,a,j(1.4,2.2,.15,H("#5b3a2a"),0,.6,2.55));const l=Le({text:"MMA DOJO",w:512,h:128,bg:"#1f2a37",fg:"#fff"},2.8,.7);return l.position.set(0,3.3,2.6),r.add(l),n.add(r),qn(n,"HOBBY PARK",{y:2.4,z:7.5,w:4.4,h:.9,bg:"#2f6b4f"}),n.add(j(.2,2,.2,H("#6b4f3a"),-1.9,0,7.4),j(.2,2,.2,H("#6b4f3a"),1.9,0,7.4)),{targets:s}},"post-office"(n){const t="#d9734e",e="#243447";n.add(j(16,.5,12,H("#e9e3d6"),0,0,-1)),n.add(j(15,9,10,H("#fbf7ef"),0,.5,-1.5));const i=new xe({color:"#7fb3c4",roughness:.15,metalness:.3,emissive:"#ffe2b0",emissiveIntensity:.12});n.add(j(12.6,7.6,.2,i,0,.9,3.55));for(let c=0;c<=6;c++)n.add(j(.18,7.6,.3,H(e),-6.3+c*2.1,.9,3.6));n.add(j(12.8,.25,.4,H(e),0,4.6,3.6)),n.add(j(3.4,3.4,.25,H("#ffe9c7",{emissive:"#ffd58a",emissiveIntensity:.5}),0,.5,3.7)),n.add(j(7,.35,3,H(t),0,4.1,4.9));for(const c of[-3.2,3.2])n.add(j(.2,3.6,.2,H(e),c,.5,6.2));qn(n,"CONTACT ME",{y:10.6,z:3.7,w:13,h:2.2,bg:t,fg:"#ffffff"});const s=new Ft;s.position.set(0,13.6,-1.5),s.add(j(7,4.4,.6,H("#ffffff",{emissive:"#ffffff",emissiveIntensity:.15})));const r=new $i;r.moveTo(-3.5,4.4),r.lineTo(0,1.6),r.lineTo(3.5,4.4),r.closePath();const o=new ht(new Jl(r),new xe({color:t,side:Ne}));o.position.z=.32,s.add(o),s.add(j(.3,3,.3,H(e),-2.5,-3,0),j(.3,3,.3,H(e),2.5,-3,0)),s.traverse(c=>{c.isMesh&&(c.castShadow=!0)}),s.userData.billboard=!0,n.add(s);const a=Le({text:"CONTACT ME",w:1024,h:256,bg:t,fg:"#ffffff"},9,2.25);a.position.set(7.6,7.2,-1.5),a.rotation.y=Math.PI/2,n.add(a);const l=new Ft;return l.position.set(5.6,.5,6),l.add(te(.6,.6,2.2,H("#c8102e"),14),te(.68,.68,.3,H("#a50d26"),14,0,2.2,0)),n.add(l),n.add(j(2.4,.5,.8,H("#ab7750"),-5.4,.5,6.4)),{flag:s,mailFrom:new A(0,14.5,-1)}},"empty-plot"(n){n.add(j(18,.3,16,H("#cdb995"),0,.02,0));const t=[[-8,-7],[8,-7],[8,7],[-8,7]];t.forEach(([d,u])=>{n.add(j(.25,1.4,.25,H("#a77d4f"),d,.3,u)),n.add(j(.7,.45,.04,H("#ff7a2f"),d+.35,1.3,u))});for(let d=0;d<4;d++){const[u,f]=t[d],[m,v]=t[(d+1)%4],g=j(Math.hypot(m-u,v-f),.05,.05,H("#ffffff"),(u+m)/2,1.4,(f+v)/2);g.rotation.y=-Math.atan2(v-f,m-u),g.castShadow=!1,n.add(g)}const e=new ht(new re(12,14,9),new Qt({color:"#ffffff",transparent:!0,opacity:.14,depthWrite:!1}));e.position.y=7.3;const i=new Ld(new Od(e.geometry),new Qv({color:"#d9734e",dashSize:.7,gapSize:.45}));i.computeLineDistances(),i.position.y=7.3,n.add(e,i);const s=Le({text:"YOUR OFFICE HERE",w:1024,h:200,size:84,bg:"#ffffff",fg:"#243447",border:"#ff7a2f"},11,2.15);s.position.set(0,15.8,0),s.userData.billboard=!0,n.add(s);const r=document.createElement("canvas");r.width=256,r.height=32;const o=r.getContext("2d");for(let d=0;d<16;d++)o.fillStyle=d%2?"#ffffff":"#d7263d",o.fillRect(d*16,0,16,32);const a=new Rn(r);a.colorSpace=Me;const l=new ht(new re(7,.5,.25),new xe({map:a}));l.position.set(0,1.3,9.5),l.castShadow=!0,n.add(l,j(.3,1.5,.3,H("#3a4250"),-3.5,.2,9.5),j(.3,1.5,.3,H("#3a4250"),3.5,.2,9.5));const c=new Ft;c.position.set(8.5,.2,10),c.rotation.y=.2;const h=Le({text:"The road's paved to mid-December 2026.",sub:"The next stretch leads to your office →",w:1280,h:320,bg:"#243447",fg:"#ffffff"},12,3);return h.position.y=4.6,c.add(h,j(.3,3.2,.3,H("#3a4250"),-4.8,0,-.1),j(.3,3.2,.3,H("#3a4250"),4.8,0,-.1)),n.add(c),{hereSign:s,ghost:e,edges:i,roadSign:h}}};function W_(){const n=document.createElement("canvas");n.width=n.height=128;const t=n.getContext("2d");return t.fillStyle="#fbf6ea",t.beginPath(),t.arc(64,64,62,0,Math.PI*2),t.fill(),t.strokeStyle="#3a2e25",t.lineWidth=5,t.stroke(),t.lineCap="round",t.beginPath(),t.moveTo(64,64),t.lineTo(64,26),t.stroke(),t.beginPath(),t.moveTo(64,64),t.lineTo(92,74),t.stroke(),n}function X_(){const n=document.createElement("canvas");n.width=n.height=128;const t=n.getContext("2d");return["#ffffff","#1f2a37","#4f81bd","#d7263d","#f2c14e"].forEach((i,s)=>{t.fillStyle=i,t.beginPath(),t.arc(64,64,62-s*12,0,Math.PI*2),t.fill()}),n}const ro=1.3,q_=new Set(["post-office","hobby-park"]),Y_=n=>n.style!=="empty-plot"&&(n.career||q_.has(n.id));let wa=null;function $_(){if(!wa){const t=document.createElement("canvas");t.width=t.height=256;const e=t.getContext("2d"),i=e.createRadialGradient(128,128,30,128,128,128);i.addColorStop(0,"rgba(20,16,12,0.55)"),i.addColorStop(1,"rgba(20,16,12,0)"),e.fillStyle=i,e.fillRect(0,0,256,256),wa=new Rn(t)}const n=new ht(new dn(30,30),new Qt({map:wa,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));return n.renderOrder=1,n.rotation.x=-Math.PI/2,n.raycast=()=>{},n}const j_=new xe({color:"#2f3b4a",roughness:.7}),Z_=new xe({color:"#d9734e",roughness:.6}),J_=new Qt({color:"#1f2329",side:je,polygonOffset:!0,polygonOffsetFactor:2,polygonOffsetUnits:2}),Ea=.12,Ta=new ii,Di=new A,Nh=new A;function K_(n){const t=[];n.traverse(e=>{var a,l;if(!e.isMesh||e.isInstancedMesh||!e.geometry||e.userData.outline||(a=e.material)!=null&&a.transparent||(l=e.material)!=null&&l.map)return;const i=e.geometry.type;if(i==="PlaneGeometry"||i==="RingGeometry"||i==="CircleGeometry")return;e.geometry.computeBoundingBox(),Ta.copy(e.geometry.boundingBox),Ta.getSize(Di),Ta.getCenter(Nh);const s=new A;if(e.getWorldScale(s),Math.min(Di.x*s.x,Di.y*s.y,Di.z*s.z)<.6)return;const r=new A(1+2*Ea/(Di.x*s.x),1+2*Ea/(Di.y*s.y),1+2*Ea/(Di.z*s.z)),o=new ht(e.geometry,J_);o.scale.copy(r),o.position.copy(Nh).multiply(new A(1-r.x,1-r.y,1-r.z)),o.userData.outline=!0,o.raycast=()=>{},t.push([e,o])});for(const[e,i]of t)e.add(i)}function Q_(n){const t=[],e=[];for(const a of wo){const{stop:l}=a,c=new Ft;c.name=l.id,c.position.copy(a.pos),c.rotation.y=Math.atan2(a.face.x,a.face.z),n.add(c),c.updateMatrixWorld(!0);const h=new Ft,d=Y_(l),u=l.style==="empty-plot"?0:B_,f=u+(d?ro:0);h.position.y=f,c.add(h);let m=null;if(d){m=new Ft;const R=$_();R.position.y=u+.05;const L=new ht(new re(18.5,ro-.24,18.5),j_);L.position.y=u+(ro-.24)/2;const b=new ht(new re(18.9,.24,18.9),Z_);b.position.y=u+ro-.12;for(const M of[L,b])M.castShadow=!0,M.receiveShadow=!0,M.userData.stopId=l.id;m.add(R,L,b),c.add(m)}const v=G_[l.style],g=v?v(h,l,a)||{}:{};d&&innerWidth>860&&K_(h),h.traverse(R=>{R.isMesh&&(R.userData.stopId=l.id,R.castShadow===void 0&&(R.castShadow=!0))}),h.updateMatrixWorld(!0);const x=new ii().setFromObject(h).getSize(new A),y=l.style==="empty-plot"?11:Math.min(x.y,40),_=new Ld(new Od(new re(Math.min(x.x,18),y,Math.min(x.z,18))),new Gl({color:"#ff8a3d",transparent:!0,opacity:.9}));_.position.y=f+y/2,_.visible=!1,c.add(_);const P=new ht(new re(18,Math.max(6,y+f),18),new Qt({visible:!1}));P.position.y=Math.max(6,y+f)/2,P.userData.stopId=l.id,c.add(P),e.push(P),h.traverse(R=>{R.isMesh&&R.userData.certIndex!==void 0&&e.unshift(R)});const E={stop:l,place:a,root:c,inner:h,parts:g,height:y,scaffold:_,radius:l.style==="empty-plot"?4:9.5,anchor:new A(0,y+2.2,0),progress:1,hover:0,hoverTarget:0,baseY:f,groundY:u,base:m};t.push(E)}function i(a){for(const l of t){const c=Math.max(.005,Math.min(.7,Is-l.stop.appearYear-.005)),h=Ue((a-l.stop.appearYear)/c,0,1);l.progress=h;const d=h>0;l.inner.visible=d,l.base&&(l.base.visible=d,l.base.scale.set(1,Math.max(.001,Math.min(1,h*4)),1));const u=h>=1?1:Math.max(.001,Ih(h));if(l.inner.scale.set(1,u,1),l.scaffold.visible=h>0&&h<1,l.scaffold.material.opacity=.9*(1-h),l.parts.floors)for(const f of l.parts.floors){const m=Ue((a-f.userData.year)/.25,0,1);f.visible=m>0,f.scale.set(1,Math.max(.001,Ih(m)),1)}}}const s=[];for(const a of t)a.inner.traverse(l=>{l.userData.billboard&&s.push({o:l,root:a.root})});const r=new A;function o(a,l,c){if(c)for(const{o:u,root:f}of s)u.getWorldPosition(r),u.rotation.y=Math.atan2(c.position.x-r.x,c.position.z-r.z)-f.rotation.y;for(const u of t)u.hover+=(u.hoverTarget-u.hover)*Math.min(1,a*7),u.inner.position.y=u.baseY+u.hover*.45;const h=t.find(u=>u.parts.blink);h&&(h.parts.blink.visible=Math.sin(l*4)>0);const d=t.find(u=>u.parts.tip);d&&d.parts.tip.material.color.setHSL(.03,.9,.55+Math.sin(l*3)*.15)}return{city:t,pickables:e,setYear:i,update:o,byId:Object.fromEntries(t.map(a=>[a.stop.id,a]))}}function Oh(n,t,e){const i=n.getContext("2d");So(i,{text:t,sub:e,w:n.width,h:n.height,bg:"#111827",fg:"#7cf0c5"})}const Fh=["#e07a5f","#3d7ea6","#f2c14e","#81b29a","#9b5de5","#f28482","#2a9d8f"];function Aa(n,t,e,{to:i,label:s,prefix:r="",suffix:o="",duration:a=3,cls:l="",final:c}){let h=a;const d=n.add(t,e,c?`<span class="big">${c}</span>${s}`:u(i),l);function u(f){return`<span class="big">${r}${__(f)}${o}</span>${s}`}return{update(f){if(h>=a)return;h+=f;const m=bl(Ue(h/a,0,1));d.set(h>=a&&c?`<span class="big">${c}</span>${s}`:u(i*m))},remove:()=>d.remove()}}function kh(n,t){const e=new $l(.28,.7,2,6);e.translate(0,.65,0);const i=new yn(e,new xe({roughness:.8}),t),s=new Zt;for(let r=0;r<t;r++)i.setColorAt(r,s.set(Fh[r%Fh.length]));return i.count=0,i.castShadow=!0,n.add(i),i}const tx={gmng(n,t){const{inner:e,parts:i}=n,s=Sl(3),r=kh(e,260),o=Array.from({length:70},()=>({t:s(),lane:(s()-.5)*3,speed:.25+s()*.2})),a=Array.from({length:190},()=>({x:(s()-.5)*15,z:i.plaza.z-1.8+s()*3.6+(s()<.35?3:0)})),l=new ye;let c=0;const h=Aa(t,e,new A(0,14.5,0),{to:2e5,label:"new users in one month",duration:3.2,final:"200,000+"});let d=null;return{update(u){c+=u,h.update(u),c>2.4&&!d&&(d=Aa(t,e,new A(-8,7,5),{to:1e6,label:"users",suffix:"+",duration:2.5,cls:"light",final:"1M+"})),d==null||d.update(u);let f=0;for(const v of o){v.t+=u*v.speed,v.t>1&&(v.t-=1);const g=20-v.t*(20-i.door.z);l.position.set(v.lane+Math.sin((v.t+v.lane)*20)*.1,Math.abs(Math.sin(v.t*60))*.12,g),l.rotation.y=Math.PI,l.scale.setScalar(1),l.updateMatrix(),r.setMatrixAt(f++,l.matrix)}const m=Math.floor(Ue((c-1.5)/3.5,0,1)*a.length);for(let v=0;v<m;v++){const g=a[v];l.position.set(g.x,Math.max(0,Math.sin(c*6+v)*.08),g.z),l.rotation.y=v,l.updateMatrix(),r.setMatrixAt(f++,l.matrix)}r.count=f,r.instanceMatrix.needsUpdate=!0},dispose(){h.remove(),d==null||d.remove(),e.remove(r),r.geometry.dispose()}}},"xy-ads"(n,t){const{inner:e,parts:i}=n,s=Sl(9),r=new yn(new Xe(.32,6,4),new Qt({color:"#7cf0c5"}),60);e.add(r);const o=Array.from({length:60},(m,v)=>({p:v%i.partners.length,t:s(),speed:.5+s()*.6,out:s()<.5})),a=new ye;let l=0,c=0;const h=Aa(t,e,new A(0,37,-1),{to:1e8,label:"monthly impressions it was built to handle",suffix:"+",duration:.001,final:"100M+"}),d=new A,u=new A,f=new A;return{update(m){l+=m,h.update(m),Math.floor(l*12)!==c&&(c=Math.floor(l*12),Oh(i.canvas,"100M+","built to handle / month"),i.texture.needsUpdate=!0),o.forEach((v,g)=>{v.t+=m*v.speed,v.t>1&&(v.t=0,v.out=!v.out);const p=v.out?i.hub:i.partners[v.p],x=v.out?i.partners[v.p]:i.hub;d.copy(p),u.copy(x),f.copy(d).add(u).multiplyScalar(.5),f.y+=6;const y=v.t,_=1-y;a.position.set(_*_*d.x+2*_*y*f.x+y*y*u.x,_*_*d.y+2*_*y*f.y+y*y*u.y,_*_*d.z+2*_*y*f.z+y*y*u.z),a.updateMatrix(),r.setMatrixAt(g,a.matrix)}),r.instanceMatrix.needsUpdate=!0},dispose(){h.remove(),e.remove(r),Oh(i.canvas,"XY ADS","Ad exchange · built from scratch"),i.texture.needsUpdate=!0}}},"mr-neo"(n,t){const{inner:e,parts:i}=n;let s=0;const r=t.add(e,new A(3,15.5,-2),'<span class="big">&lt; 2 months</span>to an AI-native company');let o=null;return{update(a){s+=a;const l=Math.floor(Ue((s-.4)/2.6,0,1)*i.panels.length);i.panels.forEach((c,h)=>{c.material.emissiveIntensity=h<l?.9:0}),l===i.panels.length&&!o&&(o=t.add(e,new A(-5,12,2.2),"✨ Strategy · pricing · AI-first redesign","light")),i.ring.rotation.z+=a*1.5},dispose(){r.remove(),o==null||o.remove(),i.panels.forEach(a=>{a.material.emissiveIntensity=0})}}},"vision-lab"(n,t){const{inner:e,parts:i}=n,s=new ht(new Jn(2.2,7.4,20,1,!0),new Qt({color:"#6fd3ff",transparent:!0,opacity:.18,side:Ne,depthWrite:!1}));s.position.set(0,5.3,7.4),s.rotation.x=.12,e.add(s);let r=0,o=null,a=null;return{update(l){r+=l,s.material.opacity=.12+Math.abs(Math.sin(r*3))*.18,s.rotation.z=Math.sin(r*1.6)*.18,r>1.4&&!o&&(o=t.add(e,new A(-1.5,3.4,8.2),"🍎 Apple · recognised","light")),r>2.4&&!a&&(a=t.add(e,new A(2.2,2.6,8.2),'<span class="big">100</span>foods · 10,000 training images'))},dispose(){e.remove(s),o==null||o.remove(),a==null||a.remove()}}},"learning-tower"(n,t){const{inner:e,parts:i,stop:s}=n,r=s.certificates||[];let o=0,a=null;const l=[];i.floors.forEach((d,u)=>{const f=r[u]||{},m=f.date?new Date(f.date).getFullYear():"",v=innerWidth<=600,g=v?new A(0,d.position.y+2,3.8):new A(4.6,d.position.y+2.4,3.6);setTimeout(()=>{const p=v?`<b>${u+1}</b> · ${f.shortTitle||f.title}`:`<b>Floor ${u+1}</b> · ${f.shortTitle||f.title} · ${m}`;c||(l[u]=t.add(e,g,p,"light floor-tag"))},250+u*320)});let c=!1;const h=()=>{i.floors.forEach((d,u)=>{var g,p;const f=o>.3+u*.32,m=a===null?f:a===u,v=d.userData.band.material;v.emissiveIntensity=m?a===u?1.2:.7:.05,v.color.set(a===u?"#ffd56b":m?"#f2c14e":"#40607c"),(p=(g=l[u])==null?void 0:g.el)==null||p.classList.toggle("picked",a===u)})};return{update(d){o+=d,h()},highlight(d){a=d,h()},dispose(){c=!0,l.forEach(d=>d==null?void 0:d.remove()),i.floors.forEach(d=>{d.userData.band.material.emissiveIntensity=.08,d.userData.band.material.color.set("#40607c")})}}},"lara-hotel"(n,t){const{inner:e,parts:i}=n,s=[["⚠️ Nut allergy → restaurant alerted","alert"],["✉️ Reply drafted in Portuguese",""],["🛏️ Suggested: room 315, sea view","light"],["☀️ Morning briefing ready",""],["🧹 Room 204: cleaned → ready","light"]];let r=0,o=0,a=[];const l=kh(e,12),c=new ye;return{update(h){if(r+=h,Math.floor(r/1.5)>=o){const[u,f]=s[o%s.length],m=i.windowsAt[o%i.windowsAt.length];a.push(t.add(e,m,u,f)),a.length>2&&a.shift().remove(),o++}for(let u=0;u<12;u++){const f=(r*.18+u/12)%1;c.position.set(-3+u%4*2,0,16-f*10),c.rotation.y=Math.PI,c.updateMatrix(),l.setMatrixAt(u,c.matrix)}l.count=12,l.instanceMatrix.needsUpdate=!0},dispose(){a.forEach(h=>h.remove()),e.remove(l)}}},"post-office"(n,t){const{inner:e,parts:i}=n,s=new ht(new re(1.2,.1,.8),new xe({color:"#ffffff"}));e.add(s);let r=0;const o=t.add(e,new A(0,18.5,-1.5),"✉️ Email · LinkedIn · CV, one click each","light");return{update(a){r+=a;const l=r*.5%1;s.position.set(i.mailFrom.x-l*2,i.mailFrom.y+l*10,i.mailFrom.z+l*6),s.rotation.set(l*4,l*6,0),s.visible=l<.95},dispose(){e.remove(s),o.remove()}}},"your-plot"(n,t){const{inner:e}=n,i=t.add(e,new A(0,13.4,0),"🏗️ Ready to break ground mid-Dec 2026","");return{update(){},dispose(){i.remove()}}},"hobby-park"(n,t){const{inner:e,parts:i}=n;let s=0;const r=t.add(e,new A(-4.5,5,-7),"🎯 50m rifle · national level","light");return{update(o){s+=o,i.targets.forEach((a,l)=>{a.scale.setScalar(1+Math.max(0,Math.sin(s*5-l))*.15)})},dispose(){r.remove(),i.targets.forEach(o=>o.scale.setScalar(1))}}}};function ex(n,t){let e=null;const i=[],s=n.byId.sovena;if(s)for(let r=0;r<6;r++){const o=new ht(new Xe(.45,6,5),new Qt({color:"#ffffff",transparent:!0,opacity:.5,depthWrite:!1}));s.inner.add(o),i.push({s:o,t:r/6})}return{start(r){this.stop();const o=n.byId[r],a=tx[r];o&&a&&(e={id:r,fx:a(o,t)})},stop(){e==null||e.fx.dispose(),e=null},highlight(r){var o,a;(a=e==null?void 0:(o=e.fx).highlight)==null||a.call(o,r)},update(r,o){e==null||e.fx.update(r,o);const a=n.byId["lara-hotel"];if(a){const{jib:c,trolley:h,cable:d,hook:u}=a.parts;c.rotation.y=Math.sin(o*.25)*.9+.4,h.position.x=9+Math.sin(o*.4)*4;const f=8+Math.sin(o*.7)*6;d.scale.y=f,d.position.y=-f/2,u.position.y=-f}const l=n.byId["vision-lab"];l&&(l.parts.eye.rotation.y=Math.sin(o*.8)*.25);for(const c of i){c.t=(c.t+r*.25)%1;const h=s.parts.steamFrom;c.s.position.set(h.x+Math.sin(c.t*8+c.s.id)*.5,h.y+c.t*5,h.z),c.s.scale.setScalar(.6+c.t*1.4),c.s.material.opacity=.55*(1-c.t)}},get activeId(){return e==null?void 0:e.id}}}function nx(n,t,e){const i=new Ft;for(const s of[1,-1]){const r=Le({text:n,sub:t,w:2048,h:320,bg:"#ffffff",fg:e.stripe,border:e.body},26,4.1,{doubleSide:!1});r.rotation.y=s>0?Math.PI/2:-Math.PI/2,r.position.x=s*.03,i.add(r)}return i}function ix(n,t){const e=new Ft,i=H(n.body,{flatShading:!0}),s=H(n.stripe),r=new ht(new Be(1.5,1.1,13,12),i);r.rotation.x=Math.PI/2;const o=new ht(new Xe(1.5,12,8,0,Math.PI*2,0,Math.PI/2),i);o.rotation.x=Math.PI/2,o.position.z=6.5;const a=new ht(new Jn(1.1,3.4,12),i);a.rotation.x=-Math.PI/2,a.position.z=-8.2;const l=new ht(new Be(1.53,1.33,2.2,12),s);l.rotation.x=Math.PI/2,l.position.z=-2;const c=new ht(new re(2.2,.7,1.4),H("#24323f",{roughness:.2}));c.position.set(0,.95,5.4);const h=new ht(new re(22,.45,3.4),i);h.position.set(0,.5,1);const d=[-11,11].map(R=>{const L=new ht(new re(.6,.5,3.4),s);return L.position.set(R,.5,1),L}),u=new ht(new re(8,.3,2),i);u.position.set(0,.6,-8.5);const f=new ht(new re(.35,3.6,2.6),s);f.position.set(0,2.3,-8.4),e.add(r,o,a,l,c,h,...d,u,f);const m=[];for(const R of[-5,5]){const L=new ht(new Be(.75,.6,3,10),H("#5b6573"));L.rotation.x=Math.PI/2,L.position.set(R,.2,2.6);const b=new Ft;b.position.set(R,.2,4.2);for(let M=0;M<3;M++){const I=new ht(new re(.3,3.6,.12),H("#2b3240"));I.rotation.z=M*Math.PI*2/3,b.add(I)}e.add(L,b),m.push(b)}const v=new ht(new Be(.05,.05,3,4),H("#333"));v.position.set(0,-2.6,.5);const g=new ht(new re(2.6,2,2.6),H("#b98a52"));g.position.set(0,-5,.5);const p=Le({text:"URGENT · 50 KG+",w:512,h:128,bg:"#d40511",fg:"#fff"},2.5,.62);p.position.set(0,-5,1.82);const x=p.clone();x.position.z=-.82,x.rotation.y=Math.PI,e.add(v,g,p,x);const[y,_]=t.split("·").map(R=>R.trim()),P=new ht(new Be(.05,.05,9,4),H("#333"));P.rotation.x=Math.PI/2,P.position.set(0,0,-14.5);const E=nx(y,_,n);return E.position.set(0,0,-32),e.add(P,E),e.traverse(R=>{R.isMesh&&(R.castShadow=!0)}),{g:e,props:m,banner:E}}function sx(n,t){const e=new Ft;n.add(e);const i=t.find(h=>h.style==="cargo-plane"),s=[];let r=null,o=null;if(i){const h=ix(i.colors,i.banner);r=h,h.g.traverse(f=>{f.isMesh&&(f.userData.vehicleId=i.id)});const d=new ht(new re(26,10,50),new Qt({visible:!1}));d.position.set(0,-1,-12),d.userData.vehicleId=i.id,h.g.add(d),s.push(d),e.add(h.g);const u=de.find(f=>f.place==="lisbon");o={cx:u.x,cz:u.z,rx:70,rz:52,alt:u.top+52,u:.15,speed:.022}}const a=new A,l=new A,c=(h,d)=>d.set(o.cx+Math.cos(h*Math.PI*2)*o.rx,o.alt+Math.sin(h*Math.PI*4)*2.5,o.cz+Math.sin(h*Math.PI*2)*o.rz);return{plane:(r==null?void 0:r.g)||null,pickables:s,vehicleData:i,update(h,d=0){if(r){o.u=(o.u+h*o.speed)%1,c(o.u,a),c(o.u+.01,l),r.g.position.copy(a),r.g.lookAt(l),r.g.rotateZ(-.22);for(const u of r.props)u.rotation.z+=h*30;r.banner.rotation.y=Math.sin(d*2.2)*.05}}}}const Bh={type:"change"},ec={type:"start"},Xd={type:"end"},oo=new Ro,zh=new pi,rx=Math.cos(70*ur.DEG2RAD),Pe=new A,Je=2*Math.PI,ue={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ca=1e-6;class ox extends c_{constructor(t,e=null){super(t,e),this.state=ue.NONE,this.enabled=!0,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:hn.ROTATE,MIDDLE:hn.DOLLY,RIGHT:hn.PAN},this.touches={ONE:Pn.ROTATE,TWO:Pn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new bi,this._lastTargetPosition=new A,this._quat=new bi().setFromUnitVectors(t.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Lh,this._sphericalDelta=new Lh,this._scale=1,this._panOffset=new A,this._rotateStart=new ct,this._rotateEnd=new ct,this._rotateDelta=new ct,this._panStart=new ct,this._panEnd=new ct,this._panDelta=new ct,this._dollyStart=new ct,this._dollyEnd=new ct,this._dollyDelta=new ct,this._dollyDirection=new A,this._mouse=new ct,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=lx.bind(this),this._onPointerDown=ax.bind(this),this._onPointerUp=cx.bind(this),this._onContextMenu=gx.bind(this),this._onMouseWheel=ux.bind(this),this._onKeyDown=fx.bind(this),this._onTouchStart=px.bind(this),this._onTouchMove=mx.bind(this),this._onMouseDown=hx.bind(this),this._onMouseMove=dx.bind(this),this._interceptControlDown=vx.bind(this),this._interceptControlUp=_x.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Bh),this.update(),this.state=ue.NONE}update(t=null){const e=this.object.position;Pe.copy(e).sub(this.target),Pe.applyQuaternion(this._quat),this._spherical.setFromVector3(Pe),this.autoRotate&&this.state===ue.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Je:i>Math.PI&&(i-=Je),s<-Math.PI?s+=Je:s>Math.PI&&(s-=Je),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Pe.setFromSpherical(this._spherical),Pe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Pe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Pe.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new A(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new A(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Pe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(oo.origin.copy(this.object.position),oo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(oo.direction))<rx?this.object.lookAt(this.target):(zh.setFromNormalAndCoplanarPoint(this.object.up,this.target),oo.intersectPlane(zh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ca||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ca||this._lastTargetPosition.distanceToSquared(this.target)>Ca?(this.dispatchEvent(Bh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Je/60*this.autoRotateSpeed*t:Je/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Pe.setFromMatrixColumn(e,0),Pe.multiplyScalar(-t),this._panOffset.add(Pe)}_panUp(t,e){this.screenSpacePanning===!0?Pe.setFromMatrixColumn(e,1):(Pe.setFromMatrixColumn(e,0),Pe.crossVectors(this.object.up,Pe)),Pe.multiplyScalar(t),this._panOffset.add(Pe)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Pe.copy(s).sub(this.target);let r=Pe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Je*this._rotateDelta.x/e.clientHeight),this._rotateUp(Je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Je*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Je*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Je*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Je*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Je*this._rotateDelta.x/e.clientHeight),this._rotateUp(Je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ct,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function ax(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function lx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function cx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Xd),this.state=ue.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function hx(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case hn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ue.DOLLY;break;case hn.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ue.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ue.ROTATE}break;case hn.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ue.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ue.PAN}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(ec)}function dx(n){switch(this.state){case ue.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ue.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ue.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function ux(n){this.enabled===!1||this.enableZoom===!1||this.state!==ue.NONE||(n.preventDefault(),this.dispatchEvent(ec),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Xd))}function fx(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function px(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Pn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ue.TOUCH_ROTATE;break;case Pn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ue.TOUCH_PAN;break;default:this.state=ue.NONE}break;case 2:switch(this.touches.TWO){case Pn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ue.TOUCH_DOLLY_PAN;break;case Pn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ue.TOUCH_DOLLY_ROTATE;break;default:this.state=ue.NONE}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(ec)}function mx(n){switch(this._trackPointer(n),this.state){case ue.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ue.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ue.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ue.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ue.NONE}}function gx(n){this.enabled!==!1&&n.preventDefault()}function vx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function _x(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class xx extends ox{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:hn.PAN,MIDDLE:hn.DOLLY,RIGHT:hn.ROTATE},this.touches={ONE:Pn.PAN,TWO:Pn.DOLLY_ROTATE}}}function yx(n){const t=new ln(32,1,4,1500),e=new xx(t,n);e.enableDamping=!0,e.dampingFactor=.08,e.maxPolarAngle=1.32,e.minPolarAngle=.25,e.minDistance=22,e.maxDistance=900,e.screenSpacePanning=!1,e.zoomToCursor=!1,e.zoomSpeed=.9,e.rotateSpeed=.6,e.panSpeed=1.1,e.mouseButtons={LEFT:hn.PAN,MIDDLE:hn.DOLLY,RIGHT:hn.ROTATE},e.touches={ONE:Pn.PAN,TWO:Pn.DOLLY_ROTATE};let i=null,s="overview",r=!1,o=null;const a={x:0,y:0,tx:0,ty:0};function l(){const M=t.aspect,I=ur.degToRad(t.fov),V=2*Math.atan(Math.tan(I/2)*M);if(M<.9){const N=new A(_n.centerX+14,8,10),k=new A(-.78,.58,.24).normalize(),F=Math.max(_n.d*.98/2/Math.tan(V/2),_n.w*.58/2/Math.tan(I/2));return{pos:N.clone().addScaledVector(k,F),target:N}}const S=new A(_n.centerX+2,10,0),U=new A(.12,.6,.79).normalize(),z=Math.max(_n.w*.98/2/Math.tan(V/2),_n.d*.78/2/Math.tan(I/2));return{pos:S.clone().addScaledVector(U,z),target:S}}function c(){const M=e.enableDamping,I=e.enabled;e.enabled=!0,e.enableDamping=!1,e.update(),e.enableDamping=M,e.enabled=I}function h(M,I,V=1.15,S){i==null||i.cancel(),c();const U=t.position.clone(),z=e.target.clone();Kn()&&(V=.25),e.enabled=!1,i=ws({duration:V,ease:Ss,onUpdate:N=>{t.position.lerpVectors(U,M,N);const k=Math.sin(N*Math.PI)*Math.min(60,U.distanceTo(M)*.18);t.position.y+=k,e.target.lerpVectors(z,I,N),t.lookAt(e.target)},onDone:()=>{i=null,s!=="drive"&&s!=="follow"&&!r&&(e.enabled=!0,e.update()),S==null||S()}})}function d(){s==="drive"||r||(i&&(i.cancel(),i=null),s==="follow"&&(s="focus",o=null),r||(e.enabled=!0))}function u(M){r=M,M?e.enabled=!1:!i&&s!=="follow"&&s!=="drive"&&(e.enabled=!0)}function f(M){if(s==="drive")return;d();const I=t.position.clone().sub(e.target),V=I.length(),S=Ue(V*M,e.minDistance,e.maxDistance),U=I.normalize();i=ws({duration:Kn()?.01:.35,ease:Ss,onUpdate:z=>{t.position.copy(e.target).addScaledVector(U,Ma(V,S,z)),t.lookAt(e.target)},onDone:()=>{i=null,e.update()}})}function m(M,I){if(s==="drive")return;d();const V=t.position.clone().sub(e.target).normalize(),S=Ue(M/Math.max(.2,I),e.minDistance,e.maxDistance);t.position.copy(e.target).addScaledVector(V,S),t.lookAt(e.target)}const v=()=>t.position.distanceTo(e.target);function g(M){if(s==="drive")return;d();const I=t.position.clone().sub(e.target),V=new A(0,1,0);i=ws({duration:Kn()?.01:.45,ease:Ss,onUpdate:S=>{t.position.copy(e.target).add(I.clone().applyAxisAngle(V,M*S)),t.lookAt(e.target)},onDone:()=>{i=null,e.update()}})}function p(M=1.2){s="overview",o=null;const{pos:I,target:V}=l();h(I,V,M)}function x(M){s="focus",o=null;const{place:I,height:V}=M,S=M.stop.style==="learning-tower",U=I.pos.clone().setY(I.pos.y+Math.min(V,30)*(S?.5:.42)),z=(S?66:Ue(V*2.6,58,100))*(t.aspect<.9?S?1.9:1.5:1),N=I.face.clone();let k;if(Math.abs(N.x)>.5)k=U.clone().add(N.clone().multiplyScalar(z*.5)).add(new A(0,0,z*.6)).add(new A(0,z*(S?.62:.92),0));else{const F=new A(-N.z,0,N.x).multiplyScalar(.45);k=U.clone().add(N.multiplyScalar(z*.78)).add(F.multiplyScalar(z)).add(new A(0,z*(S?.36:.55),0))}h(k,U)}let y="chase";function _(M,I){s="focus",o=null,h(M,I)}function P(M,I="chase"){i==null||i.cancel(),i=null,c(),s="follow",o=M,y=I,e.enabled=!1}function E(M){s=M,M==="drive"&&(e.enabled=!1)}function R(M,I){a.tx=M,a.ty=I}function L(M,I){t.aspect=M/I,t.updateProjectionMatrix()}function b(M,I){var S;if(s==="follow"&&o){const U=o.getWorldPosition(new A),z=o.getWorldQuaternion(new bi),N=new A(0,0,1).applyQuaternion(z).setY(0).normalize();let k;if(y==="side"){const F=new A(-N.z,0,N.x);k=U.clone().addScaledVector(F,92).addScaledVector(N,-20).add(new A(0,34,0)),U.addScaledVector(N,-20).add(new A(0,-4,0))}else if(y==="drone"){const F=t.aspect<.9?new A(-46,58,22):new A(14,50,62);k=U.clone().add(F)}else k=U.clone().addScaledVector(N,-22).add(new A(0,14,0));t.position.lerp(k,Math.min(1,M*2.5)),e.target.lerp(U,Math.min(1,M*4)),t.lookAt(e.target)}else!i&&s!=="drive"&&(e.update(),e.target.x=Ue(e.target.x,_n.minX-30,_n.maxX+30),e.target.z=Ue(e.target.z,-220/2,_n.d/2),e.target.y=Ue(e.target.y,-2,70));const V=Math.min(1,M*6);a.x=Ma(a.x,a.tx,V),a.y=Ma(a.y,a.ty,V),Math.abs(a.x)>.5||Math.abs(a.y)>.5?t.setViewOffset(I.w,I.h,a.x,a.y,I.w,I.h):(S=t.view)!=null&&S.enabled&&t.clearViewOffset()}return{camera:t,controls:e,overview:p,overviewPose:l,focusBuilding:x,follow:P,flyTo:h,setMode:E,setPanelOffset:R,resize:L,update:b,interrupt:d,zoomBy:f,rotateBy:g,zoomLive:m,distance:v,focusPoint:_,setLocked:u,get locked(){return r},get mode(){return s},get flying(){return!!i}}}const Ae=new A;function Mx(n,t,e,{onHover:i=()=>{}}={}){const s=p=>p.replace(/[^\p{L}\p{N}\s|·&.,'’<>/$+-]/gu,"").trim(),r=t.map(p=>{const x=p.stop,y=document.createElement("button");y.className="label"+(x.underConstruction?" now":"")+(x.style==="empty-plot"?" always":""),y.setAttribute("role","listitem");const _=x.style==="empty-plot"?"Your office →":bx(x.name),P=x.hook||"";y.append(Object.assign(document.createElement("span"),{className:"n",textContent:String(x.order)}),Object.assign(document.createElement("span"),{className:"t",textContent:_})),P&&y.append(Object.assign(document.createElement("span"),{className:"k",textContent:P}));const E=x.ai==="built-with-ai"?"Built with AI":x.ai==="ai-subject"?"AI subject":"";if(E){y.classList.add("has-ai");const M=Object.assign(document.createElement("span"),{className:"ai-chip "+(x.ai==="built-with-ai"?"built":"subject")});M.append(Object.assign(document.createElement("span"),{className:"ai-star",textContent:"✦"}),Object.assign(document.createElement("span"),{className:"ai-word",textContent:E})),M.setAttribute("aria-hidden","true"),y.append(M)}const R=()=>`${s(x.name)}${P?`: ${s(P)}`:""}${E?`. ${E}`:""}. ${x.yearLabel}${y.classList.contains("unvisited")?". Not visited yet":""}`;y.setAttribute("aria-label",R()),y.addEventListener("click",M=>{M.stopPropagation(),e(x.id)});const L=()=>{p.hoverTarget=1,i(x.id)},b=()=>{p.hoverTarget=0,i(null)};return y.addEventListener("mouseenter",L),y.addEventListener("mouseleave",b),y.addEventListener("focus",L),y.addEventListener("blur",b),n.appendChild(y),{b:p,el:y,label:R}});let o=null,a=null,l=!1,c=null,h=[];const d=new Hd;let u=[],f=0;const m=new A,v=[],g=(p,x)=>h.some(y=>p>y.left&&p<y.right&&x>y.top&&x<y.bottom);return{setOccluders(p){u=p},invalidate(){for(const p of r)p.dirty=!0;for(const p of v)p.w=0,p.h=0},addExtra(p,x,y,_=null){n.appendChild(p),v.push({el:p,anchorFn:x,hiddenFn:y,island:_})},setView({hidden:p=!1,island:x=null,avoidRects:y=[]}={}){l=p,c=x,h=y},setVisited(p){for(const x of r){const y=!!x.b.stop.career&&!p.has(x.b.stop.id);x.el.classList.contains("unvisited")!==y&&(x.el.classList.toggle("unvisited",y),x.el.setAttribute("aria-label",x.label()))}},setFocused(p){var x;o=p,a=((x=r.find(y=>y.b.stop.id===p))==null?void 0:x.b.place.island)||null},setHot(p){for(const x of r){const y=x.b.stop.id===p;x.el.classList.contains("hot")!==y&&(x.el.classList.toggle("hot",y),x.dirty=!0)}},update(p,x){const y=[],_=u.length&&f++%8===0;_&&p.getWorldPosition(m);const P=x.w<=600;for(const L of r){const{b,el:M}=L;if(Ae.copy(b.anchor),Ae.y=b.height*b.inner.scale.y+2.2+b.hover*.8+b.baseY,b.root.localToWorld(Ae),_){const Y=b.root.position.clone().setY(b.root.position.y+Math.max(2,b.height*.5)).clone().sub(m),Q=Y.length();d.set(m,Y.normalize()),d.far=Q-4,L.occluded=d.intersectObjects(u,!1).length>0}const I=p.position.distanceTo(Ae);Ae.project(p);const V=Ae.z>1,S=b.progress>.6,U=(Ae.x*.5+.5)*x.w,z=(-Ae.y*.5+.5)*x.h,N=o===b.stop.id,k=!!a&&b.place.island!==a||c!=null&&b.place.island.index!==c,F=l||V||!S||N||k||L.occluded||g(U,z)||U<-80||U>x.w+80||z<-40||z>x.h+40;if(M.classList.toggle("gone",F),M.classList.toggle("dim",!!o&&!N),M.tabIndex=S&&!F?0:-1,!F){const W=P?1:Math.max(.86,Math.min(1.08,260/I+.55));(!L.w||L.dirty)&&(L.w=M.offsetWidth,L.h=M.offsetHeight,L.dirty=!1),y.push({it:L,x:U,y:z,s:W,dist:I})}}for(const L of v){L.anchorFn(Ae);const b=p.position.distanceTo(Ae);Ae.project(p);const M=(Ae.x*.5+.5)*x.w,I=(-Ae.y*.5+.5)*x.h,V=l||Ae.z>1||L.hiddenFn()||!!o||g(M,I)||c!=null&&L.island!=null&&L.island!==c;L.el.classList.toggle("gone",V),L.el.classList.toggle("dim",!!o),!V&&(L.w||(L.w=L.el.offsetWidth,L.h=L.el.offsetHeight),L.w&&y.push({it:L,x:M,y:I,s:1,dist:b+1e6}))}y.sort((L,b)=>L.dist-b.dist);const E=[],R=3;for(const L of y){const b=L.it.w*L.s,M=L.it.h*L.s,I=F=>Math.min(x.w-b/2-6,Math.max(b/2+6,F));let V=I(L.x);const S=F=>E.find(W=>V-b/2<W.r+R&&V+b/2>W.l-R&&F<W.b+R&&F+M>W.t-R),U=F=>h.find(W=>V-b/2<W.right&&V+b/2>W.left&&F<W.bottom&&F+M>W.top),z=F=>{let W=F<0?L.y-M:L.y+8;for(let Y=0;Y<14;Y++){const Q=S(W);if(!Q)break;W=F<0?Q.t-M-R-1:Q.b+R+1}return S(W)||U(W)?null:W};let N=z(-1);if(L.it.anchorFn&&(N==null||L.y-(N+M)>30)){L.it.el.classList.add("gone");continue}if(N==null&&(N=z(1)),N==null){const F=U(L.y-M);if(F){const W=F.right+b/2+6,Y=F.left-b/2-6,Q=Math.abs(W-L.x)<Math.abs(Y-L.x)?W:Y;Math.abs(Q-L.x)<b&&(V=I(Q),N=z(-1)??z(1))}}if(N==null){L.it.el.classList.add("gone"),L.it.el.tabIndex=-1;continue}E.push({l:V-b/2,r:V+b/2,t:N,b:N+M});const k=N+M;L.it.el.style.transform=`translate(${V.toFixed(1)}px, ${k.toFixed(1)}px) translate(-50%, -100%) scale(${L.s.toFixed(3)})`,L.it.el.style.zIndex=String(1e3-Math.round(L.dist)),L.it.el.classList.toggle("nudged",k<L.y-2||N>L.y)}}}}function bx(n){return n.replace("Manipal Institute of Technology","Manipal").replace("The Lisbon MBA · Católica | Nova","Lisbon MBA").replace(" 🚧","").replace("The Library","Library").replace("Contact Me","✉ Contact me")}function Sx(n){const t=new Set;return{add(e,i,s,r=""){const o=document.createElement("div");o.className="badge "+r,o.innerHTML=s,n.appendChild(o);const a={el:o,object3d:e,localPos:i.clone(),dead:!1};return t.add(a),{el:o,set(l){o.innerHTML=l},remove(){a.dead=!0,t.delete(a),o.style.transition="opacity 0.25s",o.style.opacity="0",setTimeout(()=>o.remove(),260)}}},clear(){for(const e of[...t])e.el.remove(),t.delete(e)},update(e,i){for(const s of t){if(Ae.copy(s.localPos),s.object3d.localToWorld(Ae),Ae.project(e),Ae.z>1){s.el.style.opacity="0";continue}let r=(Ae.x*.5+.5)*i.w;const o=Math.max(-Ae.y*.5*i.h+.5*i.h,150);if(!s.el.classList.contains("floor-tag")||i.w<=600){const l=(s.el.offsetWidth||0)/2+8;l*2<i.w&&(r=Math.min(i.w-l,Math.max(l,r)))}s.el.style.opacity="";const a=s.el.classList.contains("floor-tag")&&i.w>600;s.el.style.transform=a?`translate(${r.toFixed(1)}px, ${o.toFixed(1)}px) translate(8px, -50%)`:`translate(${r.toFixed(1)}px, ${o.toFixed(1)}px) translate(-50%, -100%)`}}}}function T(n,t={},...e){const[i,...s]=n.split("."),r=document.createElement(i||"div");s.length&&(r.className=s.join(" "));for(const[o,a]of Object.entries(t||{}))a==null||a===!1||(o.startsWith("on")&&typeof a=="function"?r.addEventListener(o.slice(2),a):o==="text"?r.textContent=a:r.setAttribute(o,a===!0?"":a));for(const o of e.flat())o==null||o===!1||r.append(o instanceof Node?o:document.createTextNode(String(o)));return r}function qd(n,t,e=1100){const i=String(t).match(/^([^\d]*)([\d,.]+)(.*)$/);if(!i||/–/.test(t)||matchMedia("(prefers-reduced-motion: reduce)").matches){n.textContent=t;return}const[,s,r,o]=i,a=parseFloat(r.replace(/,/g,"")),l=(r.split(".")[1]||"").length,c=r.includes(","),h=performance.now(),d=u=>{const f=Math.min(1,(u-h)/e),m=1-Math.pow(1-f,3);let v=(a*m).toFixed(l);c&&(v=Number(v).toLocaleString("en-US")),n.textContent=s+v+o,f<1?requestAnimationFrame(d):n.textContent=t};requestAnimationFrame(d)}function Hh(n=""){return String(n).split(/\*\*(.+?)\*\*/).map((t,e)=>e%2?T("strong",{text:t}):t)}const us=n=>n!=null&&n!==""&&!JSON.stringify(n).includes("TODO-MANU");function wl(n,{animate:t=!1,onClaim:e,hotCert:i,onCert:s,bare:r=!1,skipStory:o=!1,skipMetrics:a=!1}={}){var d,u,f,m,v;const l=n.underConstruction||/now|present/i.test(n.dates||""),c=document.createDocumentFragment();if(!r){c.append(T("span.chip"+(l?".now":""),{},l?"● ":"",n.yearLabel),T("h2",{text:n.name.replace(" 🚧","")})),n.role&&c.append(T("p.role",{text:n.role}));const g=[n.dates,n.location].filter(Boolean).join(" · ");g&&c.append(T("p.meta",{text:g}))}if(n.status&&c.append(T("p.status",{},"🚧 ",n.status)),n.story&&!o&&c.append(T("p.story",{text:n.story})),(d=n.metrics)!=null&&d.length&&!a){const g=T("div.metrics");for(const p of n.metrics){const x=T("div.v");t?qd(x,p.value):x.textContent=p.value,g.append(T("div.metric",{},x,T("div.l",{text:p.label})))}c.append(g)}if((u=n.certificates)!=null&&u.length){c.append(T("h3",{text:"Certificates · one per floor"})),n.howTo&&s&&c.append(T("p.howto",{text:n.howTo}));const g=T("ul.certs"),p=x=>{g.querySelectorAll("li").forEach(y=>y.classList.toggle("hot",Number(y.dataset.cert)===x)),s==null||s(x)};n.certificates.forEach((x,y)=>{const _=x.date?new Date(x.date).toLocaleDateString("en-GB",{month:"short",year:"numeric"}):"";g.append(T("li"+(i===y?".hot":""),{"data-cert":y,tabindex:s?0:null,onmouseenter:s?()=>s(y):null,onmouseleave:s?()=>s(g.querySelector("li.hot")?Number(g.querySelector("li.hot").dataset.cert):null):null,onclick:s?P=>{P.target.closest("a")||p(y)}:null,onkeydown:s?P=>{P.key==="Enter"&&p(y)}:null},T("div.t",{},T("span.floor",{text:`Floor ${y+1}`}),x.title),T("div.s",{},T("span",{text:[x.issuer,_].filter(Boolean).join(" · ")}),x.verify?T("a",{href:x.verify,target:"_blank",rel:"noopener",text:"Verify ↗"}):null)))}),c.append(g)}if((f=n.highlights)!=null&&f.length){const g=n.certificates?"Notes":{"empty-plot":"The details","post-office":"The details",park:"Off the clock",campus:"Highlights",university:"Highlights",library:"Highlights"}[n.style]||(n.id==="dhl"?"The project":"What I did");c.append(T("h3",{text:g})),c.append(T("ul.highlights",{},n.highlights.map(p=>T("li",{text:p.text}))))}(m=n.screenshots)!=null&&m.length&&(c.append(T("h3",{text:"From the app"})),c.append(T("div.shots",{},n.screenshots.map(g=>T("figure",{},T("img",{src:g.file,alt:g.caption,loading:"lazy"}),T("figcaption",{text:g.caption}))))));const h=[];n.cta&&h.push(T("button.primary",{onclick:()=>e==null?void 0:e()},`${n.cta.label} →`));for(const g of n.links||[])h.push(T("a.ghost",{href:g.href,target:g.href.startsWith("mailto:")?null:"_blank",rel:"noopener"},g.label));return h.length&&c.append(T("div.links",{},h)),(v=n.tags)!=null&&v.length&&c.append(T("div.tags",{},n.tags.map(g=>T("span",{text:g})))),c}function wx(n,{chapter:t,prev:e,next:i,position:s,onNav:r,onClaim:o,onCert:a,hotCert:l,caseId:c,onCase:h,tab:d}={}){var L,b,M,I,V;const u=document.createDocumentFragment(),f=document.createDocumentFragment(),m=document.createDocumentFragment(),v=n.name.replace(" 🚧",""),g=n.underConstruction||/now|present/i.test(n.dates||"");f.append(T("p.card-eyebrow"+(g?".now":""),{text:t?`Chapter ${t.n} · ${t.title}`:n.yearLabel||""})),f.append(T("h2.card-title",{text:v})),n.role&&f.append(T("p.card-role",{text:n.role}));const p=[n.dates,n.location].filter(Boolean).join(" · ");p&&f.append(T("p.card-meta",{text:p}));const x=n.metrics||[],y=((L=n.card)==null?void 0:L.hero)||x[0],_=((b=n.card)==null?void 0:b.proofs)||x.slice(1,4);if(y){const S=T("div.hero-v"+(String(y.value).length>6?".long":""));qd(S,y.value),m.append(T("div.hero",{},S,T("div.hero-l",{text:y.label}))),_.length&&m.append(T("ul.proofs",{},_.map(U=>T("li",{},T("span.v",{text:U.value}),T("span.l",{text:U.label})))))}else n.story&&m.append(T("p.card-story",{text:n.story}));const P=!!((M=n.certificates)!=null&&M.length||n.cta||(I=n.links)!=null&&I.length),E=T("div.card-more",{hidden:P?null:!0},wl(n,{bare:!0,skipStory:!y,skipMetrics:!0,onClaim:o,onCert:a,hotCert:l}));if(!P&&((V=n.highlights)!=null&&V.length||y)){const S=T("button.card-toggle",{type:"button","aria-expanded":"false",onclick:()=>{const U=E.hidden;E.hidden=!U,S.setAttribute("aria-expanded",String(U)),S.textContent=U?"Show less":"Read the full story ›",U&&E.scrollIntoView({behavior:"smooth",block:"start"})}},"Read the full story ›");m.append(S)}m.append(E),u.append(f);const R=tc.filter(S=>S.buildingId===n.id);return R.length?u.append(Tx(m,R,{caseId:c,onCase:h,tab:d})):u.append(m),(e||i)&&u.append(T("nav.card-nav",{"aria-label":"Buildings"},T("button",{type:"button",onclick:()=>r(-1),disabled:e?null:!0},e?`‹ ${e}`:""),T("span",{text:s||""}),T("button.next",{type:"button",onclick:()=>r(1),disabled:i?null:!0},i?`${i} ›`:""))),u}let Ex=0;function Tx(n,t,{caseId:e,onCase:i,tab:s}){const r=++Ex,o=!!e||s==="cases",a=[T("div.tab-pane",{id:`pane-o-${r}`,role:"tabpanel","aria-labelledby":`tab-o-${r}`,tabindex:"0"},n),T("div.tab-pane",{id:`pane-c-${r}`,role:"tabpanel","aria-labelledby":`tab-c-${r}`,tabindex:"0"},T("ul.cases",{},t.map(d=>Ax(d,d.id===e,i))))],l=[T("button.tab",{type:"button",role:"tab",id:`tab-o-${r}`,"aria-controls":`pane-o-${r}`},"Overview"),T("button.tab",{type:"button",role:"tab",id:`tab-c-${r}`,"aria-controls":`pane-c-${r}`},"Case studies",T("span.tab-count",{text:String(t.length)}))],c=(d,u)=>{l.forEach((f,m)=>{f.setAttribute("aria-selected",String(m===d)),f.tabIndex=m===d?0:-1,a[m].hidden=m!==d}),u&&l[d].focus()};l.forEach((d,u)=>{d.addEventListener("click",()=>c(u)),d.addEventListener("keydown",f=>{(f.key==="ArrowRight"||f.key==="ArrowLeft")&&(f.preventDefault(),f.stopPropagation(),c(1-u,!0))})}),c(o?1:0);const h=document.createDocumentFragment();return h.append(T("div.tabs",{role:"tablist","aria-label":"Building details"},l),...a),h}function Ax(n,t,e){const i=g_,s=`case-${n.id}`,r=[];us(n.status)&&r.push(T("p.case-status",{text:n.status}));for(const d of["problem","whatIDid","whatItDoes","howIUsedAI","myCall","result","also","whereAIWasWrong","whatNext"]){const u=n[d];if(!us(u))continue;const f=Array.isArray(u)?T("ul",{},u.map(m=>T("li",{text:m}))):T("p",{text:u});r.push(T("section.case-sec"+(d==="myCall"?".call":d==="result"?".result":""),{},T("h4",{text:i[d]||d}),f))}const o=(n.media||[]).filter(us);o.length&&r.push(T("div.case-media",{},o.map(d=>T("figure",{},/\.(mp4|webm)$/i.test(d.file)?T("video",{src:d.file,muted:!0,loop:!0,playsinline:!0,autoplay:matchMedia("(prefers-reduced-motion: reduce)").matches?null:!0,"aria-label":d.alt||""}):T("img",{src:d.file,alt:d.alt||"",loading:"lazy"}),us(d.caption)?T("figcaption",{text:d.caption}):null))));const a=(n.links||[]).filter(us);a.length&&r.push(T("p.case-links",{},a.map(d=>T("a",{href:d.href},d.label))));const l=us(n.problem)?n.problem:(Array.isArray(n.whatIDid)?n.whatIDid[0]:n.whatIDid)||"",c=T("div.case-body",{id:s,hidden:t?null:!0},r),h=T("button.case-head",{type:"button","aria-expanded":String(!!t),"aria-controls":s},T("span.case-title",{text:n.title}),T("span.case-sum",{text:l}),T("span.case-chev",{"aria-hidden":"true",text:"›"}));return h.addEventListener("click",()=>{const d=c.hidden;c.hidden=!d,h.setAttribute("aria-expanded",String(d)),e==null||e(d?n.id:null)}),T("li.case"+(t?".open":""),{"data-case":n.id},h,c)}function Cx({el:n,body:t,closeBtn:e,onClose:i,onNav:s,onClaim:r,onCert:o,onCase:a}){e.addEventListener("click",()=>i());let l=null;return{open(c,{hotCert:h,nav:d={},caseId:u,tab:f}={}){var m;l=c.id,t.replaceChildren(wx(c,{...d,onNav:s,onClaim:r,onCert:o,hotCert:h,caseId:u,onCase:a,tab:f})),t.scrollTop=0,n.hidden=!1,h!=null&&((m=t.querySelector(`[data-cert="${h}"]`))==null||m.scrollIntoView({block:"center"})),u&&requestAnimationFrame(()=>{var v;return(v=t.querySelector(`[data-case="${u}"]`))==null?void 0:v.scrollIntoView({block:"start"})})},openContent(c,h){l=c,t.replaceChildren(h),t.scrollTop=0,n.hidden=!1},close(){l=null,n.hidden=!0},get isOpen(){return!n.hidden},get currentId(){return l}}}function Rx(n,t,e,i){const s=(e==null?void 0:e.actions)||[{label:"View my CV",href:i.cvFile,kind:"cv"},{label:"Email me",href:`mailto:${i.email}`,kind:"email"},{label:"Copy email",value:i.email,kind:"copy"}],r={cv:"📄",email:"✉️",copy:"📋"},o={cv:"Opens the PDF · one page",email:i.email,copy:"For when you have no mail app here"};for(const c of s){const h=[T("span.ic",{text:r[c.kind]||"→"}),T("span",{},c.label,T("small",{text:o[c.kind]||""}))];if(c.kind==="copy"){const d=T("button",{onclick:async()=>{let u=!1;try{await navigator.clipboard.writeText(c.value),u=!0}catch{}if(!u){const f=T("textarea",{},c.value);document.body.append(f),f.select();try{u=document.execCommand("copy")}catch{u=!1}f.remove()}d.querySelector("small").textContent=u?"Copied ✓":c.value}},h);t.append(d)}else t.append(T("a"+(c.kind==="email"?".main":""),{href:c.href,target:c.kind==="cv"?"_blank":null,rel:"noopener"},h))}let a=null;const l=()=>{var c;n.hidden=!0,(c=a==null?void 0:a.focus)==null||c.call(a)};return n.addEventListener("click",c=>{(c.target===n||c.target.closest("[data-close]"))&&l()}),{open(){var c;a=document.activeElement,n.hidden=!1,(c=n.querySelector(".claim-actions a, .claim-actions button"))==null||c.focus()},close:l,get isOpen(){return!n.hidden}}}function Vh(n=""){return String(n).split(/\*\*(.+?)\*\*/).map((t,e)=>e%2?T("strong",{text:t}):t)}const Px=(n="")=>n.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,"");function Lx(n,{person:t,stops:e,extras:i=[],onClaim:s,onGame:r,onCase:o,onClose:a}){var p,x,y;const l=wn.cv,c={},h=(_,P=[])=>{for(const E of P)c[E]??(c[E]=_);return _},d={},u=(_,P,...E)=>{const R=T("section.qv-section",{"aria-labelledby":`qv-h-${_}`},T("h2.qv-h",{id:`qv-h-${_}`,text:P}),...E);return d[_]=R,R},f=_=>_==null?void 0:_.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"}),m=[["experience","Experience"],["projects","Projects"],["education","Education"],["skills","Skills"]],v=T("div.quick-top.qv-top",{},T("div.bar.qv-bar",{},T("div.qv-brand",{},T("strong",{text:t.name}),T("span",{text:"CV"})),l?T("nav.qv-nav",{"aria-label":"CV sections"},m.map(([_,P])=>T("button",{type:"button",onclick:()=>f(d[_])},P))):null,T("div.qv-actions",{},T("button.ghost",{type:"button",onclick:a},T("span",{"aria-hidden":"true",text:"← "}),T("span.qv-long",{text:"Back to the "}),"city"),T("button.primary",{type:"button",onclick:s},"Contact me")))),g=T("div.quick-inner.qv-sheet");if(l){const _=Px(t.linkedin),P=h(T("header.qv-header",{},T("p.qv-status",{},T("span.qv-dot",{"aria-hidden":"true"}),l.availability),T("h1.qv-name",{text:t.name}),T("p.qv-headline",{text:t.headline}),T("p.qv-sub",{text:t.subline}),T("ul.qv-facts",{},T("li",{},T("span",{text:"Based in"}),t.location),T("li",{},T("span",{text:"Open to"}),l.openTo),T("li",{},T("span",{text:"Looking for"}),l.lookingFor)),T("div.qv-contact",{},T("a.primary",{href:`mailto:${t.email}`},"Email me"),T("a.ghost",{href:t.linkedin,target:"_blank",rel:"noopener"},"LinkedIn ↗"),T("a.ghost",{href:t.cvFile,target:"_blank",rel:"noopener",download:""},"Download CV (PDF)")),T("p.qv-print-contact",{text:[t.location,t.email,_].join("  ·  ")})),["post-office","your-plot"]),E=T("p.qv-summary",{text:(p=l.summary)==null?void 0:p.text}),R=T("div.qv-signature",{role:"list","aria-label":"Signature results"},(l.signature||[]).map(B=>T("div.qv-stat",{role:"listitem"},T("div.qv-stat-v",{text:B.value}),T("div.qv-stat-l",{text:B.label}),T("div.qv-stat-w",{text:B.where})))),L=((x=wn.caseStudies)==null?void 0:x.items)||[],b=Object.fromEntries(e.map(B=>[B.id,B.name.replace(" 🚧","")])),M=B=>typeof B=="string"&&B&&!B.includes("TODO-MANU"),I=(l.featuredCases||[]).map(B=>L.find(K=>K.id===B)).filter(Boolean),V=I.length?T("section.qv-cases",{"aria-labelledby":"qv-h-cases"},T("h2.qv-h",{id:"qv-h-cases",text:"Three cases in 60 seconds"}),T("div.qv-case-grid",{},I.map(B=>T("article.qv-case",{},T("p.qv-case-where",{text:b[B.buildingId]||""}),T("h3",{text:B.title}),M(B.problem)?T("p.qv-case-p",{text:B.problem}):null,M(B.myCall)?T("p.qv-case-call",{},T("span",{text:"My call "}),B.myCall):null,M(B.result)?T("p.qv-case-r",{},T("span",{text:"Result "}),B.result):null,o?T("button.qv-case-open",{type:"button",onclick:()=>o(B.id)},"Open it in the city ›"):null))),r?T("div.qv-call",{},T("div",{},T("p.qv-call-t",{text:"Make the call"}),T("p.qv-call-s",{text:"Five real decisions from my career. Make each call, then see mine."})),T("button.primary",{type:"button",onclick:B=>r(B.currentTarget)},"Play ›")):null):null,S=B=>B!=null&&B.length?T("ul.qv-bullets",{},B.map(K=>T("li",{},Vh(K.text??K)))):null,U=(B,K,at)=>T("div.qv-entry-head",{},T("div.qv-entry-title",{},B,K),T("p.qv-dates",{text:at})),z=(l.experience||[]).map(B=>{var K,at;return h(T("article.qv-entry"+((K=B.bullets)!=null&&K.length?"":".qv-entry-short"),{id:`q-${(at=B.ids)==null?void 0:at[0]}`},U(T("h3.qv-role",{text:B.role}),T("p.qv-org",{},T("strong",{text:B.company}),B.location?T("span",{text:` · ${B.location}`}):null),B.dates),B.promotion?T("p.qv-promo",{text:B.promotion}):null,B.context?T("p.qv-context",{text:B.context}):null,S(B.bullets)),B.ids)}),N=(l.projects||[]).map(B=>{var K;return h(T("article.qv-entry.qv-project",{id:`q-${(K=B.ids)==null?void 0:K[0]}`},U(T("h3.qv-role",{text:B.name}),T("p.qv-org",{text:B.kind}),B.dates),B.summary?T("p.qv-context",{},Vh(B.summary)):null,S(B.bullets)),B.ids)}),k=(l.education||[]).map(B=>{var K;return h(T("article.qv-entry.qv-entry-short",{id:`q-${(K=B.ids)==null?void 0:K[0]}`},U(T("h3.qv-role",{text:B.name}),T("p.qv-org",{text:B.school}),B.dates),B.note?T("p.qv-context",{text:B.note}):null),B.ids)}),F=e.find(B=>{var K;return(K=B.certificates)==null?void 0:K.length}),W=((F==null?void 0:F.certificates)||[]).map(B=>{const K=B.date?new Date(B.date).toLocaleDateString("en-GB",{month:"short",year:"numeric"}):"";return T("li",{},T("div",{},T("strong",{text:B.title}),T("span",{text:[B.issuer,K].filter(Boolean).join(" · ")})),B.verify?T("a",{href:B.verify,target:"_blank",rel:"noopener","aria-label":`Verify certificate: ${B.title}`},"Verify ↗"):null)}),Y=W.length?h(T("div.qv-certs",{},T("h3.qv-subh",{text:"Certifications"}),T("ul",{},W)),F?[F.id]:[]):null,Q=T("dl.qv-skills",{},(l.skills||[]).map(B=>T("div",{},T("dt",{text:B.label}),T("dd",{text:B.text})))),st=h(T("div.qv-beyond",{},T("h3.qv-subh",{text:"Beyond work"}),T("p",{text:(y=l.beyond)==null?void 0:y.text})),["hobby-park"]),pt=T("div.qv-cta",{},T("div",{},T("p.qv-cta-t",{text:"Let's talk"}),T("p.qv-cta-s",{text:`${l.lookingFor} · ${l.openTo} · ${l.availability.replace(/^Available/,"available")}.`})),T("div.qv-cta-actions",{},T("button.primary",{type:"button",onclick:s},"Contact me"),r?T("button.ghost",{type:"button",onclick:B=>r(B.currentTarget)},"Make the call"):null,T("a.ghost",{href:`mailto:${t.email}`},t.email),T("a.ghost",{href:"how-built/"},"How this city was built"),T("button.ghost",{type:"button",onclick:a},"← Back to the city")));g.append(P,R,...V?[V]:[],E,u("experience","Experience",z),u("projects","Projects",N),u("education","Education",k,Y),u("skills","Skills",Q,st),pt)}else{g.append(T("h1",{text:t.name}),T("p.lede",{},`${t.headline} · ${t.subline}`));for(const _ of e){g.append(h(T("article",{},wl(_,{onClaim:s})),[_.id]));for(const P of i.filter(E=>E.after===_.id))g.append(h(T("article",{},wl(P)),[P.id]))}}return n.tabIndex=-1,n.append(v,g),{open(_){var E;n.hidden=!1;const P=_&&c[_];P?P.scrollIntoView():n.scrollTop=0,(E=n.focus)==null||E.call(n,{preventScroll:!0})},close(){n.hidden=!0},get isOpen(){return!n.hidden}}}const fs=new A;function Ix(n,t,e){const i=de.map((r,o)=>{const a=t[o]||{},l=(a.card||a.lede||"").replace(/\*\*/g,""),c=T("button.era"+(o===de.length-1?".next":""),{type:"button","aria-label":`Chapter ${a.n}: ${a.title}, ${a.years}. ${l}`,onclick:h=>{h.stopPropagation(),e(o)}},T("span.n",{text:a.n}),T("span.t",{text:a.title}),T("span.y",{text:a.years}),T("span.h",{text:a.card||""}));return n.append(c),{I:r,el:c,w:0}});let s=!1;return{set visible(r){r!==s&&(s=r,n.classList.toggle("on",r))},get visible(){return s},invalidate(){for(const r of i)r.w=0},update(r,o){if(!s)return;const a=r.aspect<.9;n.classList.toggle("chips",a),i.forEach((l,c)=>{const{I:h,el:d}=l;if(a?fs.set(h.x,h.top+6,h.z):fs.set(h.x,h.top+34,h.z-h.d/2+8),fs.project(r),fs.z>1){d.style.visibility="hidden";return}d.style.visibility="";let u=(fs.x*.5+.5)*o.w;const f=(-fs.y*.5+.5)*o.h;l.w||(l.w=d.offsetWidth);const m=l.w/2+12,v=a?u+(c%2?-70:70):u,g=Math.min(o.w-m,Math.max(m,v));d.style.setProperty("--stem",`${50+(u-g)/(l.w||1)*100}%`),d.style.transform=`translate(${g.toFixed(1)}px, ${f.toFixed(1)}px) translate(-50%, ${a?"-50%":"-100%"})`})}}}function Dx({rig:n,titleEl:t,storyEl:e,title:i,chapters:s,names:r,onOpen:o,onClaim:a,onCV:l,onGame:c,onFlyby:h,onExplore:d,onChapter:u,blocked:f}){let m="off",v=-1;const g=()=>n.camera.aspect<.9;t.append(T("div.title-fade",{"aria-hidden":"true"}),T("div.title-inner",{},T("p.title-name",{text:i.name||"Manu Pratap Singh"}),T("p.eyebrow",{text:i.eyebrow}),T("h1",{},i.headline.flatMap((k,F)=>F?[T("br"),k]:[k])),T("p.title-lede",{},Hh(i.lede)),T("div.title-stats",{},i.stats.map(k=>T("div",{},T("b",{text:k.value}),T("span",{text:k.label})))),T("div.title-actions",{},T("button.primary.big",{type:"button",onclick:()=>I(0)},"Start the journey ›"),T("button.ghost.big",{type:"button",onclick:()=>l()},"View CV")),T("p.title-avail",{},T("i",{"aria-hidden":"true"}),i.available||"Available full-time from mid-December 2026"),T("p.title-more",{},h?T("button.title-flyby",{type:"button",onclick:()=>h()},"▶ Watch the 60-second fly-by"):null,T("button.title-explore",{type:"button",onclick:()=>d()},"or explore the city freely"))),T("p.title-hint",{"aria-hidden":"true",text:"Scroll to begin ↓"}));const p=T("div.story-col",{"aria-live":"polite"}),x=T("nav.story-rail",{"aria-label":"Chapters"},s.map((k,F)=>T("button",{type:"button","aria-label":`Chapter ${k.n}: ${k.title}`,title:k.title,onclick:()=>I(F)},T("span",{text:k.n}))));e.append(p,x);const y=T("button.title-tab",{type:"button",hidden:!0,"aria-label":"Back to the overview",onclick:()=>M()},T("span.tab-name",{text:i.name||"Manu Pratap Singh"}),T("span.tab-line",{text:i.headline.join(" ")}),T("span.tab-back",{text:"Back to the overview ›"}));t.after(y);let _=null;p.addEventListener("animationend",()=>p.classList.remove("enter"));function P(k){const F=s[k],Y=[...de[k].stops,...F.extras||[]],Q=s[k+1];p.replaceChildren(T("p.eyebrow",{text:[`Chapter ${F.n}`,F.years,F.place].filter(Boolean).join(" · ")}),T("h2",{text:F.title}),T("p.story-lede",{text:F.lede}),T("ul.story-points",{},F.points.map(st=>T("li",{},Hh(st)))),F.cta?T("div.story-actions",{},T("button.primary",{type:"button",onclick:()=>a()},"Contact me"),T("button.ghost",{type:"button",onclick:()=>l()},"View CV"),c?T("button.ghost",{type:"button",onclick:st=>c(st.currentTarget)},"Make the call"):null):T("div.story-stops",{},T("span",{text:"Open"}),Y.filter(st=>r[st]).map(st=>T("button.ghost",{type:"button",onclick:()=>o(st)},r[st]))),T("p.story-next",{},Q?`${g()?"Swipe up":"Scroll ↓"} to cross the bridge to ${Q.title}`:"The end of the road, for now."," · ",T("button",{type:"button",onclick:()=>d()},"explore freely"))),x.querySelectorAll("button").forEach((st,pt)=>st.classList.toggle("on",pt===k))}const E=()=>Math.min(500,innerWidth*.4);function R(k){const F=de[k],W=n.camera,Y=g(),Q=2*Math.atan(Math.tan(ur.degToRad(W.fov)/2)*W.aspect),st=(F.w+F.d*.45)*({lisbon:1.45,next:1.7}[F.place]||1.1),pt=Y?1:(innerWidth-E())/innerWidth,B=1.22*(st/2)/(Math.tan(Q/2)*pt),K=new A(F.x+(F.place==="lisbon"?8:0),F.top+3,F.z+(F.place==="lisbon"?14:-4)),at=(Y?new A(-.25,.8,.55):new A(-.35,.62,.7)).normalize();return{pos:K.clone().addScaledVector(at,B),target:K}}function L(){if(g())return n.overviewPose();const k=de[2],F=new A(k.x+5,22,k.z),W=new A(-.7,.5,.6).normalize(),Y=390*Math.max(1,1.6/n.camera.aspect);return{pos:F.clone().addScaledVector(W,Y),target:F}}function b(){if(m==="title"){const{pos:k,target:F}=L();n.setPanelOffset(0,g()?(t.querySelector(".title-inner").offsetHeight||innerHeight*.5)*.5:0),n.focusPoint(k,F)}else if(m==="story"){const{pos:k,target:F}=R(v);n.setPanelOffset(g()?0:-E()/2,g()?(p.offsetHeight||innerHeight*.45)*.5:0),n.focusPoint(k,F)}}function M(){m="title",v=-1,n.setLocked(!0),clearTimeout(_),y.hidden=!0,t.classList.remove("tucked"),e.hidden=!0,t.hidden=!1,u(-1),requestAnimationFrame(b)}function I(k){k=Math.max(0,Math.min(s.length-1,k));const F=m!=="story"||k!==v;m="story",v=k,n.setLocked(!0),clearTimeout(_),y.hidden=!0,t.classList.remove("tucked"),t.hidden=!0,e.hidden=!1,e.classList.remove("away"),F&&(P(k),p.classList.remove("enter"),p.offsetWidth,p.classList.add("enter")),u(k),requestAnimationFrame(b)}function V(k){if(m==="title"){k>0&&I(0);return}if(m==="story"){if(k<0&&v===0)return M();k>0&&v===s.length-1||I(v+k)}}let S=0,U=0,z=0;addEventListener("wheel",k=>{var W,Y;if(m==="off"||f()||k.ctrlKey||(Y=(W=k.target).closest)!=null&&Y.call(W,"#panel, #quick, .modal"))return;k.preventDefault();const F=performance.now();F-z>220&&(S=0),z=F,!(F<U)&&(S+=k.deltaY+k.deltaX*.5,Math.abs(S)>46&&(V(Math.sign(S)),S=0,U=F+900))},{passive:!1});let N=null;return addEventListener("touchstart",k=>{var F,W;if(m==="off"||f()||k.touches.length!==1){N=null;return}if((W=(F=k.target).closest)!=null&&W.call(F,"#panel, #quick, .modal, #topbar")){N=null;return}N={x:k.touches[0].clientX,y:k.touches[0].clientY}},{passive:!0}),addEventListener("touchend",k=>{if(!N)return;const F=k.changedTouches[0],W=F.clientX-N.x,Y=N.y-F.clientY;N=null,Math.abs(Y)>50&&Math.abs(Y)>Math.abs(W)*1.2&&V(Y>0?1:-1)},{passive:!0}),{showTitle:M,go:I,step:V,frame:b,away(k){e.classList.toggle("away",k)},resume(){m==="story"?I(v):m==="title"&&M()},hide(){const k=m==="title";m="off",e.hidden=!0,y.hidden=!1,y.classList.toggle("fresh",k),k?(t.classList.add("tucked"),clearTimeout(_),_=setTimeout(()=>{t.hidden=!0,t.classList.remove("tucked")},450)):t.hidden=!0,n.setLocked(!1),n.setPanelOffset(0,0)},get mode(){return m},get index(){return v}}}const Gh="manu-city-best-call",Ux=n=>JSON.stringify(n).includes("TODO-MANU"),Wh=["A","B","C"];function Nx({data:n,person:t,onCase:e,onExplore:i}){const s=((n==null?void 0:n.decisions)||[]).filter(P=>P.active&&!Ux(P)),r=s.length,o=T("div.game-body"),a=T("div.modal-card.game-card",{},T("button.panel-close",{type:"button","aria-label":"Close the game",onclick:()=>_()},"×"),o),l=T("div.modal.game",{id:"game",role:"dialog","aria-modal":"true","aria-labelledby":"game-title",hidden:!0},a);document.getElementById("app").append(l);let c=0,h=0,d=null;const u=(...P)=>o.replaceChildren(...P.filter(Boolean));function f(P){const E=n.scoreLines||{};return P===r?E[5]:P>=3?E["3-4"]:E["0-2"]}function m(P){return T("div.game-head",{},T("p.eyebrow",{text:"Make the call"}),T("div.game-progress",{"aria-label":`Question ${P+1} of ${r}`},T("span",{text:`${P+1} of ${r}`}),T("span.game-dots",{"aria-hidden":"true"},s.map((E,R)=>T("i"+(R<P?".done":R===P?".on":""))))))}function v(P){const E=s[P],R=T("div.game-reveal",{"aria-live":"polite"}),L=E.options.map((M,I)=>T("button.game-option",{type:"button","data-id":M.id,onclick:()=>g(E,M.id,L,R)},T("span.game-letter",{"aria-hidden":"true",text:Wh[I]}),T("span.game-text",{text:M.text}))),b=T("h2",{id:"game-title",tabindex:"-1",text:E.title});u(m(P),P===0&&n.intro?T("p.game-intro",{text:n.intro}):null,b,T("p.game-situation",{text:E.situation}),T("div.game-options",{role:"group","aria-label":"Your options"},L),R),a.scrollTop=0,b.focus()}function g(P,E,R,L){const b=E===P.manuChoice;b&&(h+=1);for(const S of R){const U=S.dataset.id;S.disabled=!0,S.classList.toggle("picked",U===E),S.classList.toggle("manu",U===P.manuChoice),S.classList.toggle("other",U!==E&&U!==P.manuChoice);const z=[];U===E&&z.push("Your call"),U===P.manuChoice&&z.push("My call"),z.length&&S.append(T("span.game-tag",{text:z.join(" · ")}))}const M=S=>Wh[P.options.findIndex(U=>U.id===S)],I=c===r-1,V=T("button.primary",{type:"button",onclick:()=>I?p():v(++c)},I?"See your result ›":"Next ›");L.replaceChildren(T("p.game-verdict"+(b?".same":""),{text:b?`Same call: ${M(E)}.`:`You chose ${M(E)}. I chose ${M(P.manuChoice)}.`}),T("h3",{text:"What happened"}),T("p.game-outcome",{text:P.outcome}),T("p.game-lesson",{text:P.lesson}),T("div.game-actions",{},P.caseStudyId?T("button.ghost",{type:"button",onclick:()=>{_(!1),e(P.caseStudyId,P.buildingId)}},"See the case study ›"):null,V)),V.focus({preventScroll:!0}),L.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"nearest"})}function p(){let P=Number(Ds(Gh))||0;h>P&&(P=h,Ds(Gh,String(h)));const E=T("h2",{id:"game-title",tabindex:"-1",text:`You made ${h} of ${r} calls the way I did.`});u(T("div.game-head",{},T("p.eyebrow",{text:"Make the call"}),T("div.game-progress",{},T("span",{text:"Your result"}))),E,T("p.game-band",{text:f(h)}),P>h?T("p.game-best",{text:`Your best so far: ${P} of ${r}.`}):null,T("div.game-end-actions",{},T("a.primary",{href:t.cvFile,target:"_blank",rel:"noopener"},"View my CV"),T("a.ghost",{href:`mailto:${t.email}`},"Email me"),T("button.ghost",{type:"button",onclick:()=>{_(!1),i()}},"Explore the city")),T("button.game-again",{type:"button",onclick:()=>x()},"Play again")),E.focus()}function x(){c=0,h=0,v(0)}l.addEventListener("keydown",P=>{if(P.key==="Escape"){P.stopPropagation(),_();return}if(P.key!=="Tab")return;const E=[...a.querySelectorAll('button:not([disabled]), a[href], [tabindex="0"]')];if(!E.length)return;const R=E[0],L=E[E.length-1];P.shiftKey&&document.activeElement===R?(P.preventDefault(),L.focus()):!P.shiftKey&&document.activeElement===L&&(P.preventDefault(),R.focus())}),l.addEventListener("click",P=>{P.target===l&&_()});function y(P){r&&(d=P||document.activeElement,l.hidden=!1,x())}function _(P=!0){var E;l.hidden=!0,P&&((E=d==null?void 0:d.focus)==null||E.call(d))}return{open:y,close:_,get isOpen(){return!l.hidden},get available(){return r>0}}}function Ox(){const n=new Ft;n.name="make-the-call-booth";const t=H("#243447",{roughness:.55}),e=H("#d9734e",{roughness:.5});n.add(j(4.4,.35,3.6,H("#efe9dc"),0,0,0)),n.add(j(3.2,5.4,2.2,t,0,.35,-.2)),n.add(j(3.4,.35,1.3,e,0,2.55,1.2));const i=["#d9734e","#f2c14e","#4fb3a9"];[-.9,0,.9].forEach((o,a)=>n.add(te(.24,.24,.22,new Qt({color:i[a]}),14,o,2.9,1.3)));const s=Le({text:"YOUR CALL?",sub:"5 real decisions",w:512,h:320,bg:"#0f1b2a",fg:"#7cf0c5"},2.6,1.6,{emissive:!0,doubleSide:!1});s.position.set(0,4.3,.92),n.add(s),n.add(j(3.7,1.1,2.5,e,0,5.75,-.2));const r=Le({text:"MAKE THE CALL",w:768,h:160,bg:"#d9734e",fg:"#ffffff"},3.5,.75,{emissive:!0,doubleSide:!1});return r.position.set(0,6.3,1.06),n.add(r),n.traverse(o=>{o.isMesh&&(o.castShadow=!0,o.receiveShadow=!0)}),n}function Fx(){const n=new Ft;n.name="build-log-sign";const t=H("#3a2f28");n.add(j(.35,6.2,.35,t,-3.4,0,0),j(.35,6.2,.35,t,3.4,0,0)),n.add(j(8,3.6,.3,H("#1e3a5f"),0,2.8,0));const e=Le({text:"BUILT WITH AI",sub:"How this city and Lará were built ›",w:1024,h:440,bg:"#1e3a5f",fg:"#ffffff",border:"#8fb8ff"},7.6,3.25,{emissive:!0,doubleSide:!1});e.position.set(0,4.6,.17),n.add(e),n.traverse(s=>{s.isMesh&&(s.castShadow=!0,s.receiveShadow=!0)});const i=new ht(new re(9,7,2),new Qt({visible:!1}));return i.position.y=3.5,i.userData.buildLog=!0,n.add(i),n.userData.hit=i,n}function kx(n,{extra:t=[]}={}){const e=new Map,i=new Zl(13.8,15.2,64);for(const s of n){if(!s.stop.career&&!t.includes(s.stop.id))continue;const r=new ht(i,new Qt({color:"#ffcf7a",transparent:!0,opacity:.5,depthWrite:!1,side:Ne}));r.rotation.x=-Math.PI/2,r.position.y=(s.groundY??s.baseY)+.04,r.renderOrder=2,r.userData.offset=e.size*.7,s.root.add(r),e.set(s.stop.id,{mesh:r,b:s})}return{setVisited(s){for(const[r,o]of e)o.mesh.visible=!s.has(r)},update(s){const r=Kn();for(const{mesh:o,b:a}of e.values())o.visible&&(o.material.opacity=(a.progress>.6?1:0)*(r?.45:.3+.28*(.5+.5*Math.sin(s*2.2+o.userData.offset))),r||o.scale.setScalar(1+.04*Math.sin(s*2.2+o.userData.offset)))}}}function Bx(n){let t=null;const e=new Map,i=new Map;function s(o){if(!i.has(o)){const a=o.clone();a.emissive&&(a.emissive=new Zt("#ffb070"),a.emissiveIntensity=.45),i.set(o,a)}return i.get(o)}function r(){for(const[o,a]of e)o.material=a;e.clear(),t=null}return{set(o){if(o===t)return;r();const a=o&&n[o];a&&(t=o,a.inner.traverse(l=>{!l.isMesh||!l.material||Array.isArray(l.material)||!l.material.emissive||l.material.map||(e.set(l,l.material),l.material=s(l.material))}))}}}const zx="#3b82f6";function Hx(n,{lights:t=[]}={}){const e=new Be(5.5,7.5,70,32,1,!0);e.translate(0,35,0);const i=e.attributes.position,s=[];for(let u=0;u<i.count;u++){const f=1-i.getY(u)/70;s.push(f,f,f)}e.setAttribute("color",new Yt(s,3));const r=new vr(8.5,.35,8,64),o=[];for(const u of n){const f=u.stop.ai;if(!f)continue;const m=f==="built-with-ai";let v=null;m&&(v=new ht(e,new Qt({color:zx,vertexColors:!0,transparent:!0,opacity:.2,blending:Ia,depthWrite:!1,side:Ne})),v.position.y=u.baseY,v.raycast=()=>{},u.root.add(v));const g=new ht(r,new Qt({color:m?"#bcd6ff":"#9cc3ff",transparent:!0,opacity:m?.9:.55}));g.rotation.x=Math.PI/2,g.scale.setScalar(m?1:.85),g.position.y=u.height+(m?6:4),g.raycast=()=>{},u.root.add(g),o.push({b:u,built:m,beam:v,ring:g,base:{beam:.2,ring:m?.9:.55}})}const a=new Map,l=new Map,c=u=>{if(!l.has(u)){const f=u.clone();f.emissive=new Zt("#5b9cff"),f.emissiveIntensity=.38,l.set(u,f)}return l.get(u)};let h=!1;const d=t.map(u=>u.intensity);return{get on(){return h},setMode(u){if(u!==h){h=u,t.forEach((f,m)=>{f.intensity=d[m]*(h?.42:1)});for(const f of o)f.beam&&(f.beam.material.opacity=h?.42:f.base.beam),f.ring.material.opacity=h?1:f.base.ring,f.b.inner.traverse(m=>{!m.isMesh||!m.material||Array.isArray(m.material)||!m.material.emissive||m.material.map||(h?(a.set(m,m.material),m.material=c(m.material)):a.has(m)&&(m.material=a.get(m)))});h||a.clear()}},update(u){const f=Kn();for(const m of o)m.ring.visible=m.b.progress>.6,m.beam&&(m.beam.visible=m.b.progress>.6),f||(m.ring.rotation.z=u*.4,m.ring.position.y=m.b.height+(m.built?6:4)+Math.sin(u*1.2+m.b.stop.order)*.5)}}}function Vx({stops:n,chapters:t,extras:e=[],onPick:i}){const s=Object.fromEntries(n.map(u=>[u.id,u])),r=T("div.list-body"),o=T("div.modal-card.list-card",{},T("button.panel-close",{type:"button","aria-label":"Close the list",onclick:()=>d()},"×"),T("h2",{id:"list-title",tabindex:"-1",text:"Buildings"}),r),a=T("div.modal",{id:"buildings",role:"dialog","aria-modal":"true","aria-labelledby":"list-title",hidden:!0},o);document.getElementById("app").append(a);let l=null;function c(u){const f=n.filter(g=>g.career).length,m=n.filter(g=>g.career&&u.has(g.id)).length,v=[T("p.list-sub",{text:`You've visited ${m} of ${f} career buildings.`})];de.forEach((g,p)=>{const x=t[p],y=[...g.stops,...e.filter(_=>_.island===p).map(_=>_.id)];v.push(T("h3.list-ch",{text:`${(x==null?void 0:x.n)||""} · ${(x==null?void 0:x.title)||""}`})),v.push(T("ul.list-items",{},y.map(_=>{const P=s[_]||e.find(L=>L.id===_);if(!P)return null;const E=(P.style==="empty-plot"?"The next stretch: your office":P.name).replace(" 🚧",""),R=P.career?u.has(_)?T("span.lv",{text:"✓ Visited"}):T("span.lv.no",{text:"Not yet"}):T("span");return T("li",{},T("button",{type:"button",onclick:()=>{d(!1),i(_)}},T("span.ln",{"aria-hidden":"true",text:P.order?String(P.order):"★"}),T("span",{},E,P.hook?T("span.lh",{text:P.hook}):null),R))}).filter(Boolean)))}),r.replaceChildren(...v)}a.addEventListener("keydown",u=>{if(u.key==="Escape"){u.stopPropagation(),d();return}if(u.key!=="Tab")return;const f=[...o.querySelectorAll("button")],m=f[0],v=f[f.length-1];u.shiftKey&&document.activeElement===m?(u.preventDefault(),v.focus()):!u.shiftKey&&document.activeElement===v&&(u.preventDefault(),m.focus())}),a.addEventListener("click",u=>{u.target===a&&d()});function h(u,f){l=f||document.activeElement,c(u),a.hidden=!1,o.scrollTop=0,o.querySelector("#list-title").focus()}function d(u=!0){var f;a.hidden=!0,u&&((f=l==null?void 0:l.focus)==null||f.call(l))}return{open:h,close:d,get isOpen(){return!a.hidden}}}const Gx=5.2;function Wx({stops:n,byId:t,rig:e,highlighter:i,labels:s,onStart:r,onEnd:o}){const a=n.filter(E=>E.career&&t[E.id]),l=T("div.fb-caption",{"aria-live":"polite"}),c=T("div.fb-progress",{"aria-hidden":"true"},a.map(()=>T("i"))),h=T("button.fb-btn",{type:"button",onclick:()=>P()},"Pause"),d=T("div",{id:"flyby",role:"region","aria-label":"60-second fly-by",hidden:!0},c,l,T("div.fb-controls",{},h,T("button.fb-btn",{type:"button",onclick:()=>x(m+1)},"Next ›"),T("button.fb-btn.exit",{type:"button",onclick:()=>_()},"Exit")));document.getElementById("app").append(d);let u=!1,f=!1,m=-1,v=0,g=!1;function p(E){const R=a[E],L=t[R.id];i.set(R.id),L.hoverTarget=1;for(const M of a)M.id!==R.id&&(t[M.id].hoverTarget=0);s.setFocused(null),s.setHot(R.id),g||e.focusBuilding(L);const b=R.hook||"";l.replaceChildren(...[T("span.fb-count",{text:`${E+1} of ${a.length}`}),T("strong",{text:R.name.replace(" 🚧","").replace("The Lisbon MBA · Católica | Nova","The Lisbon MBA")}),T("span.fb-years",{text:R.yearLabel||R.dates||""}),b?T("span.fb-result",{text:b}):null].filter(Boolean)),c.querySelectorAll("i").forEach((M,I)=>{M.classList.toggle("done",I<E),M.classList.toggle("on",I===E)})}function x(E){if(u){if(E>=a.length){_();return}m=Math.max(0,E),v=0,p(m)}}function y(){g=Kn(),u=!0,f=!1,h.textContent="Pause",d.hidden=!1,r(),g&&e.overview(.01),e.setLocked(!0),x(0),d.querySelector(".fb-btn").focus({preventScroll:!0})}function _(E="exit"){if(u){u=!1,d.hidden=!0,i.set(null);for(const R of a)t[R.id].hoverTarget=0;s.setHot(null),e.setLocked(!1),o(E)}}function P(){f=!f,h.textContent=f?"Play":"Pause"}return{start:y,stop:_,get active(){return u},update(E){!u||f||(v+=E,v>=Gx&&x(m+1))}}}function Xx(n,{person:t,caseTitle:e,onCase:i}){const s=document.createDocumentFragment();s.append(T("p.card-eyebrow",{text:`For ${n.company}`})),s.append(T("h2.card-title",{text:`The next stretch leads to ${n.company}`})),n.role&&s.append(T("p.card-role",{text:n.role})),n.greeting&&s.append(T("p.pitch-greeting",{text:n.greeting}));const r=(n.sections||[]).filter(o=>o.text);return r.length&&s.append(T("ol.pitch-sections",{},r.map((o,a)=>{var l,c;return T("li.pitch-sec",{"data-kind":o.kind||""},T("span.pitch-n",{"aria-hidden":"true",text:String(a+1)}),T("div",{},o.title?T("h3",{text:o.title}):null,T("p",{text:o.text}),(l=o.image)!=null&&l.file?T("img",{src:o.image.file,alt:o.image.alt||"",loading:"lazy"}):null,(c=o.link)!=null&&c.href?T("a.pitch-link",{href:o.link.href,target:"_blank",rel:"noopener"},`${o.link.label||"Open"} ↗`):null))}))),e&&i&&s.append(T("div.pitch-start",{},T("span",{text:"Where to start"}),T("button",{type:"button",onclick:()=>i()},`${e} ›`))),s.append(T("div.pitch-actions",{},T("a.primary",{href:t.cvFile,target:"_blank",rel:"noopener"},"My CV"),T("a.ghost",{href:`mailto:${t.email}?subject=${encodeURIComponent(`${n.role||"Role"} at ${n.company}`)}`},"Email me"),T("a.ghost",{href:t.linkedin,target:"_blank",rel:"noopener"},"LinkedIn ↗"))),s}function qx(){const n=new Ft,t=H("#d9734e",{roughness:.45});n.add(j(2.4,.9,4.4,t,0,.35,0)),n.add(j(2.1,.85,2.3,H("#eaf2f5",{roughness:.15,metalness:.2}),0,1.25,-.25)),n.add(j(2.2,.18,2.4,t,0,2.1,-.25));for(const e of[-.75,.75])n.add(j(.5,.25,.08,new Qt({color:"#fff6c9"}),e,.75,2.22));for(const e of[-.75,.75])n.add(j(.5,.2,.08,new Qt({color:"#ff5a4f"}),e,.75,-2.22));for(const[e,i]of[[-1.15,1.4],[1.15,1.4],[-1.15,-1.4],[1.15,-1.4]]){const s=new ht(new Be(.45,.45,.35,12),H("#1f2329"));s.rotation.z=Math.PI/2,s.position.set(e,.45,i),n.add(s)}return n.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),n}function Yx(){const n=[],t=[],i=(s,r,o)=>n.push(new A(s,r,o));return de.forEach((s,r)=>{const o=s.top+.18,a=s.pathZ;if(s.place==="next")return;r===0&&i(s.x-s.w/2+5,o,a),i(s.x-7,o,a),i(s.x-1.7,o,a-5);const l=s.stops.map(m=>w_[m]).filter(Boolean),c=[...new Set(l.map(m=>m.pos.z))].sort((m,v)=>v-m);for(const m of c)i(s.x-1.7,o,m);const h=c[c.length-1];i(s.x-1.7,o,h-3),i(s.x,o,h-5.5),i(s.x+1.7,o,h-3);for(const m of[...c].reverse().slice(1))i(s.x+1.7,o,m);i(s.x+1.7,o,a-5),i(s.x+7,o,a),l.forEach(m=>t.push({id:m.stop.id,point:new A(s.x+(m.side>0?1.7:-1.7),o,m.pos.z)})),s.place==="lisbon"&&(i(s.x+18,o,a),t.push({id:"mit-sloan",extra:!0,point:new A(s.x+18,o,a)})),i(s.x+s.w/2-.5,o,a);const d=Gd[r];if(!d)return;const u=20,f=m=>{const v=d.a.clone().lerp(d.b,m);return v.y+=(d.suspension?0:Math.sin(m*Math.PI)*6)+.35,v};if(d.unbuilt){for(let m=1;m<=11;m++)n.push(f(m/u));t.push({id:"your-plot",point:f(.55)})}else for(let m=1;m<=u;m++)n.push(f(m/u))}),{curve:new Lo(n,!1,"centripetal",.5),parks:t}}function $x({scene:n,rig:t,onArrive:e,onLeave:i,onStatus:s}){const{curve:r,parks:o}=Yx();r.arcLengthDivisions=4e3;const a=r.getLength(),l=4e3,c=r.getSpacedPoints(l);let h=0;for(const _ of o){let P=h,E=1/0;for(let R=h;R<=l;R++){const L=c[R].distanceToSquared(_.point);L<E&&(E=L,P=R)}_.u=P/l,h=P}const d=qx();n.add(d);const u=new A;let f=0,m=-1,v=null,g=!1,p=1;const x=_=>{const P=r.getPointAt(Ue(_,0,1));d.position.copy(P),r.getPointAt(Ue(_+.0015*p,0,1),u),u.distanceToSquared(P)>1e-6&&d.lookAt(u)};x(0);function y(_){if(_=Ue(_,0,o.length-1),_===m&&!v){e(o[_]);return}g=!0,v==null||v.cancel();const P=o[_],E=f,R=Math.abs(P.u-E)*a;p=P.u>=E?1:-1,m=_,t.follow(d,"drone"),s({driving:!0,index:_,total:o.length,park:P});const L=Kn()?.3:Ue(R/28,1.4,7);v=ws({duration:L,ease:Ss,onUpdate:b=>{f=E+(P.u-E)*b,x(f)},onDone:()=>{v=null,s({driving:!1,index:_,total:o.length,park:P})}})}return{car:d,parks:o,get active(){return g},get index(){return m},get driving(){return!!v},next(){y(m+1)},prev(){y(Math.max(0,m-1))},go:y,jumpTo(_){const P=o.findIndex(E=>E.id===_);P<0||(v==null||v.cancel(),v=null,m=P,f=o[P].u,p=1,x(f))},glideTo(_){const P=o.findIndex(b=>b.id===_);if(P<0||P===m&&!v)return;v==null||v.cancel();const E=o[P],R=f;p=E.u>=R?1:-1,m=P;const L=Kn()?.3:Ue(Math.abs(E.u-R)*a/45,1.2,4);v=ws({duration:L,ease:Ss,onUpdate:b=>{f=R+(E.u-R)*b,x(f)},onDone:()=>{v=null}})},end(){v==null||v.cancel(),v=null,g=!1},setVisible(_){d.visible=_}}}const le=n=>document.getElementById(n),Ke=le("scene"),_e={w:innerWidth,h:innerHeight};function jx(){try{const n=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(n.getContext("webgl2")||n.getContext("webgl")))}catch{return!1}}var Zh;if(!jx())throw(Zh=window.__cityFallback)==null||Zh.call(window,"webgl"),new Error("WebGL is not available: showing the static CV instead");const El=()=>innerWidth<=860,On=new vv({canvas:Ke,antialias:!0,alpha:!0,powerPreference:"high-performance"});On.setPixelRatio(Math.min(devicePixelRatio,2));On.setSize(_e.w,_e.h,!1);On.outputColorSpace=Me;On.toneMapping=nd;On.toneMappingExposure=1.05;On.shadowMap.enabled=!0;On.shadowMap.type=td;const Zx="#f3d6b8",Fn=new _v;Fn.fog=new Vl(Zx,500,1400);const Yd=new s_("#ffe7cc","#55708c",1.7);Fn.add(Yd);const si=new a_("#ffc489",3.6);si.position.set(230,120,90);si.castShadow=!0;si.shadow.mapSize.set(El()?1024:2048,El()?1024:2048);Object.assign(si.shadow.camera,{left:-260,right:260,top:170,bottom:-170,near:10,far:700});si.shadow.camera.updateProjectionMatrix();si.shadow.bias=-4e-4;si.shadow.normalBias=.6;Fn.add(si);const ri=k_(Fn),br=Q_(Fn),{city:nc,byId:ze}=br,$d=Sx(le("badges")),Wi=ex(br,$d),Us=sx(Fn,h_),Kt=yx(Ke);Kt.resize(_e.w,_e.h);const An=Us.vehicleData,Ns=An&&{id:"dhl",after:An.depot,order:0,yearLabel:"MBA project · 2026",name:An.panel.name,role:An.panel.role,dates:An.panel.dates,story:An.panel.story,highlights:[{text:An.panel.note}],tags:["Logistics","Market research","Consulting"]},Os=Object.fromEntries(Mr.map(n=>[n.id,n])),Ce={selected:null,cityYear:Is,exploring:!1},Ra=De.find(n=>n.cta),Mi=Rx(le("claim"),le("claim-actions"),Ra==null?void 0:Ra.cta,Do),Re=Cx({el:le("panel"),body:le("panel-body"),closeBtn:le("panel-close"),onClose:()=>ji(),onNav:n=>Rl(n),onClaim:()=>Mi.open(),onCert:n=>Wi.highlight(n),onCase:n=>ic(n?`case/${n}`:"")});function ic(n){const t=location.pathname+location.search+(n?`#${n}`:"");try{history.replaceState(null,"",t)}catch{}}const Dn=Lx(le("quick"),{person:Do,stops:De,extras:[...Mr,...Ns?[Ns]:[]],onClaim:()=>Mi.open(),onGame:n=>Sn.open(n),onCase:n=>{Dn.close(),Er(n)},onClose:()=>Dn.close()}),_r=Bx(ze);let Tl=null;const qe=Mx(le("labels"),nc,n=>ni(n),{onHover:n=>{Tl=n,_r.set(n||Tn)}}),jn=window.__pitch&&window.__pitch.company?window.__pitch:null,sc=kx(nc,{extra:jn?["your-plot"]:[]}),Xs=Hx(nc,{lights:[Yd,si]});qe.setOccluders(ri.islandGroups.map(n=>n.children[0]));const Xi=de.findIndex(n=>n.place==="lisbon");var Jh;const Jx=T("button.label.vehicle",{"aria-label":"DHL Express, MBA consulting project (plane)",onclick:n=>{n.stopPropagation(),ko()}},T("span.n",{text:"✈"}),T("span.t",{text:((Jh=An==null?void 0:An.label)==null?void 0:Jh.replace("✈ ",""))||"DHL project"}));var Kh;for(const n of Mr){const t=(Kh=ri.extras)==null?void 0:Kh[n.id];if(!t)continue;const e=T("button.label.islet",{"aria-label":`${n.name}, ${n.location}`,onclick:i=>{i.stopPropagation(),Sr(n.id)}},T("span.n",{text:"★"}),T("span.t",{text:`${n.name} · Boston`}));qe.addExtra(e,i=>t.anchor(i),()=>Ce.selected===n.id||Ce.cityYear<2026.4,Xi)}Us.plane&&qe.addExtra(Jx,n=>{Us.plane.getWorldPosition(n),n.y+=7},()=>Ce.selected==="dhl",Xi);const Pa=()=>{},xr=$x({scene:Fn,rig:Kt,onArrive:Pa,onLeave:Pa,onStatus:Pa}),Al={...Object.fromEntries(De.map(n=>[n.id,n.style==="empty-plot"?"Your office":n.name.replace(" 🚧","").replace("The Lisbon MBA · Católica | Nova","The Lisbon MBA")])),...Object.fromEntries(Mr.map(n=>[n.id,n.name])),...Ns?{dhl:"DHL Express"}:{}},ie=Dx({rig:Kt,titleEl:le("title"),storyEl:le("story"),title:p_,chapters:Ws,names:Al,onOpen:n=>n==="dhl"?ko():Os[n]?Sr(n):ni(n),onClaim:()=>Mi.open(),onCV:()=>Dn.open(),onGame:n=>Sn.open(n),onFlyby:()=>Qn.start(),onExplore:()=>qs(),onChapter:n=>{wr(),Ce.exploring=!1,Uo(),Re.isOpen&&ji({quiet:!0}),n<0?xr.jumpTo(De[0].id):xr.glideTo(de[n].stops[0])},blocked:()=>Re.isOpen||Dn.isOpen||Mi.isOpen||Sn.isOpen||(zi==null?void 0:zi.isOpen)}),Eo=Ix(le("eras"),Ws,n=>ie.go(n)),Sn=Nx({data:m_,person:Do,onCase:(n,t)=>{Dn.close(),Er(n)||ni(t)},onExplore:()=>{Dn.close(),qs()}}),La=le("btn-call");Sn.available?La.addEventListener("click",()=>Sn.open(La)):La.hidden=!0;const ao=de.findIndex(n=>n.place==="next"),mi=Ox();if(Sn.available&&ao>=0){const n=de[ao];mi.position.set(-12,n.top,n.pathZ-n.z-5),mi.rotation.y=.35;const t=new ht(new re(5.5,8,4.5),new Qt({visible:!1}));t.position.set(0,4,0),t.userData.boothId="make-the-call",mi.add(t),mi.userData.hit=t,ri.islandGroups[ao].add(mi);const e=T("button.label.booth",{"aria-label":"Make the call: a 5-question game",onclick:i=>{i.stopPropagation(),Sn.open(e)}},T("span.n",{text:"?"}),T("span.t",{text:"Make the call"}));qe.addExtra(e,i=>{mi.getWorldPosition(i),i.y+=8},()=>!1,ao)}const mo=Fx();{const n=ze["lara-hotel"],t=n.place.island;mo.position.set(n.place.pos.x-n.place.side*2-t.x,t.top,n.place.pos.z+11-t.z),ri.islandGroups[t.index].add(mo);const e=T("a.label.buildlog",{href:"how-built/","aria-label":"Build log: how this city and Lará were built with AI",onclick:i=>i.stopPropagation()},T("span.n",{text:"✦"}),T("span.t",{text:"Build log"}));qe.addExtra(e,i=>{mo.getWorldPosition(i),i.y+=7.5},()=>!1,t.index)}const Cl=le("btn-mode");function Uo(){Cl.replaceChildren(T("span.long",{text:Ce.exploring?"‹ Back to the story":"Explore freely"}),T("span.short",{text:Ce.exploring?"‹ Story":"Explore"})),Cl.title=Ce.exploring?"Return to the chapter you were on":"Move around the city yourself"}let rc=0;Cl.addEventListener("click",()=>Ce.exploring?ie.go(rc):qs());function qs(){ie.index>=0&&(rc=ie.index),wr(),Re.isOpen&&ji({quiet:!0}),ie.hide(),Ce.exploring=!0,Uo(),Kt.overview()}function Fs(n){const t=M_[n];return t?t.index:n==="dhl"||Os[n]?Xi:-1}function Kx(n){const t=De.findIndex(i=>i.id===n),e=Ws[Fs(n)];return t<0?{chapter:e}:{chapter:e,prev:De[t-1]&&Al[De[t-1].id],next:De[t+1]&&Al[De[t+1].id],position:`${t+1} of ${De.length}`}}function No(){if(Re.isOpen)if(El()){const n=le("panel").getBoundingClientRect().height||_e.h*.5;Kt.setPanelOffset(0,n*.5)}else{const n=le("panel").getBoundingClientRect().width||420;Kt.setPanelOffset((n+24)*.5,0)}}function oc(n){wr(),ie.mode==="title"&&ie.go(Math.max(0,Fs(n))),ie.mode==="story"&&(rc=Math.max(0,Fs(n)),ie.away(!0))}const jd="manu-city-visited",Un=new Set((()=>{try{return JSON.parse(Ds(jd)||"[]")}catch{return[]}})()),Xh=De.filter(n=>n.career).length,ks=le("btn-buildings"),Oo=le("btn-ai"),Fo=le("ai-legend");function ac(n){_r.set(null),Xs.setMode(n),document.body.classList.toggle("ai-mode",n),Oo.setAttribute("aria-pressed",String(n)),Fo.hidden=!n,n&&(Re.isOpen&&ji({quiet:!0}),ie.mode!=="off"?qs():Kt.overview())}Oo.addEventListener("click",()=>ac(!Xs.on));Fo.querySelector("[data-ai-off]").addEventListener("click",()=>{ac(!1),Oo.focus()});function Zd(){qe.setVisited(Un),sc.setVisited(Un);const n=De.filter(t=>t.career&&Un.has(t.id)).length;ks.replaceChildren("Buildings",T("small",{text:`Visited ${n} of ${Xh}`})),ks.setAttribute("aria-label",`Buildings list. You've visited ${n} of ${Xh} career buildings.`)}function Qx(n){var t;!((t=ze[n])!=null&&t.stop.career)||Un.has(n)||(Un.add(n),Ds(jd,JSON.stringify([...Un])),Zd())}const zi=Vx({stops:De,chapters:Ws,extras:[...Mr.map(n=>({id:n.id,name:`${n.name} · Boston`,hook:n.role,island:Xi})),...Ns?[{id:"dhl",name:"DHL Express (the plane)",hook:"MBA consulting project · Confidential",island:Xi}]:[]],onPick:n=>n==="dhl"?ko():Os[n]?Sr(n):ni(n)});ks.addEventListener("click",()=>zi.open(Un,ks));const Qn=Wx({stops:De,byId:ze,rig:Kt,highlighter:_r,labels:qe,onStart:()=>{wr(),Re.isOpen&&ji({quiet:!0}),ie.hide(),Ce.exploring=!0,Uo()},onEnd:n=>{n!=="opened"&&Kt.overview()}});function ty(){var t;const n=tc.find(e=>e.id===jn.suggestedCase);Re.openContent("your-plot",Xx(jn,{person:Do,caseTitle:n&&`${n.title} (${((t=ze[n.buildingId])==null?void 0:t.stop.name.replace(" 🚧",""))||""})`,onCase:n?()=>Er(n.id):null}))}function ni(n,{hotCert:t,caseId:e,tab:i}={}){var o,a;Qn.active&&Qn.stop("opened"),!i&&Xs.on&&((o=ze[n])!=null&&o.stop.ai)&&(i="cases");const s=ze[n];if(!s||s.progress<=0)return;const r=Re.isOpen&&Re.currentId===n&&!e;oc(n),xr.jumpTo(n),Ce.selected=n,Qx(n),Kt.focusBuilding(s),jn&&n==="your-plot"?(ty(),Un.has(n)||(Un.add(n),sc.setVisited(Un))):r&&t!=null?(le("panel-body").querySelectorAll(".certs li").forEach(l=>l.classList.toggle("hot",Number(l.dataset.cert)===t)),(a=le("panel-body").querySelector(`[data-cert="${t}"]`))==null||a.scrollIntoView({block:"nearest",behavior:"smooth"})):(Re.open(s.stop,{hotCert:t,nav:Kx(n),caseId:e,tab:i}),Wi.start(n)),t!=null&&Wi.highlight(t),qe.setFocused(n),requestAnimationFrame(No)}function ko(){Ns&&(oc("dhl"),Ce.selected="dhl",Wi.stop(),qe.setFocused(null),Re.open(Ns,{nav:{chapter:Ws[Xi]}}),Kt.follow(Us.plane,"side"),requestAnimationFrame(No))}function Sr(n){var r;const t=Os[n],e=(r=ri.extras)==null?void 0:r[n];if(!t||!e)return;oc(n),xr.jumpTo(n),Ce.selected=n,Wi.stop(),qe.setFocused(null),Re.open(t,{nav:{chapter:Ws[Xi]}});const{pos:i,target:s}=e.focus();Kt.focusPoint(i,s),requestAnimationFrame(No)}function ji({quiet:n=!1}={}){const t=Ce.selected;location.hash.startsWith("#case/")&&ic(""),Ce.selected=null,Re.close(),Wi.stop(),qe.setFocused(null),Kt.setPanelOffset(0,0),!n&&(ie.mode==="story"?ie.go(t?Math.max(0,Fs(t)):ie.index):ie.mode==="title"?ie.resume():Kt.overview())}function Rl(n){const t=De.findIndex(i=>i.id===Ce.selected),e=De[t<0?0:t+n];e&&ni(e.id)}le("btn-home").addEventListener("click",()=>{Re.isOpen&&ji({quiet:!0}),ie.showTitle()});le("btn-claim").addEventListener("click",()=>Mi.open());le("btn-quick").addEventListener("click",()=>Dn.open(Ce.selected));addEventListener("keydown",n=>{var i,s,r,o,a,l;if((s=(i=n.target).closest)!=null&&s.call(i,"input, textarea")||(o=(r=n.target).closest)!=null&&o.call(r,'[role="tab"]')&&n.key.startsWith("Arrow"))return;if(n.key==="Escape")return Qn.active?Qn.stop():Sn.isOpen?Sn.close():zi.isOpen?zi.close():Mi.isOpen?Mi.close():Dn.isOpen?Dn.close():Re.isOpen?ji():Xs.on?ac(!1):Ce.exploring?Kt.overview():void 0;if(Mi.isOpen||Dn.isOpen||Sn.isOpen||zi.isOpen||Qn.active)return;const t=["ArrowDown","ArrowRight","PageDown"," "].includes(n.key),e=["ArrowUp","ArrowLeft","PageUp"].includes(n.key);if(!(!t&&!e)&&!((l=(a=n.target).closest)!=null&&l.call(a,"button, a")&&n.key===" ")){if(n.preventDefault(),Re.isOpen){n.key==="ArrowRight"&&Rl(1),n.key==="ArrowLeft"&&Rl(-1);return}ie.mode!=="off"&&ie.step(t?1:-1)}});addEventListener("wheel",n=>{var t,e;n.ctrlKey&&(n.preventDefault(),n.target!==Ke&&!((e=(t=n.target).closest)!=null&&e.call(t,"#panel, #quick, .modal"))&&Ke.dispatchEvent(new WheelEvent("wheel",n)))},{passive:!1});let To=null;addEventListener("gesturestart",n=>{var t,e;n.preventDefault(),!Kt.locked&&!((e=(t=n.target).closest)!=null&&e.call(t,"#panel, #quick, .modal"))&&(To=Kt.distance())},{passive:!1});addEventListener("gesturechange",n=>{n.preventDefault(),To!=null&&Kt.zoomLive(To,n.scale)},{passive:!1});addEventListener("gestureend",n=>{n.preventDefault(),To=null},{passive:!1});for(const n of[le("labels"),le("eras")])n.addEventListener("wheel",t=>{ie.mode==="off"&&(t.preventDefault(),t.stopPropagation(),Ke.dispatchEvent(new WheelEvent("wheel",t)))},{passive:!1});Ke.addEventListener("pointerdown",()=>Kt.interrupt(),{capture:!0});Ke.addEventListener("wheel",()=>Kt.interrupt(),{capture:!0,passive:!0});const qh=new Hd,Yh=new ct;let ms=null,Tn=null,ar=null;function Jd(n,t){const e=Ke.getBoundingClientRect();Yh.set((n-e.left)/e.width*2-1,-((t-e.top)/e.height)*2+1),qh.setFromCamera(Yh,Kt.camera);const i=qh.intersectObjects([...br.pickables,...Us.pickables,...ri.pickables||[],...mi.userData.hit?[mi.userData.hit]:[],mo.userData.hit],!1);for(const s of i){const r=s.object;if(r.userData.boothId)return{booth:!0};if(r.userData.buildLog)return{buildLog:!0};if(r.userData.vehicleId)return{vehicle:r.userData.vehicleId};if(r.userData.extraId)return{extra:r.userData.extraId};const o=r.userData.stopId;if(!o||ze[o].progress<=0)continue;const a=i.find(l=>{var c;return l.object.userData.stopId===o&&l.object.userData.certIndex!==void 0&&((c=l.object.parent)==null?void 0:c.visible)});return{id:o,cert:a==null?void 0:a.object.userData.certIndex}}return null}Ke.addEventListener("pointerdown",n=>{ms={x:n.clientX,y:n.clientY,t:performance.now()}});Ke.addEventListener("pointerup",n=>{if(!ms)return;const t=Math.hypot(n.clientX-ms.x,n.clientY-ms.y),e=performance.now()-ms.t<600;if(ms=null,t>7||!e)return;const i=Jd(n.clientX,n.clientY);ie.mode==="title"&&qs(),i!=null&&i.buildLog?location.href="how-built/":i!=null&&i.booth?Sn.open():i!=null&&i.vehicle?ko():i!=null&&i.extra?Sr(i.extra):i!=null&&i.id&&ni(i.id,{hotCert:i.cert})});Ke.addEventListener("pointermove",n=>{n.pointerType==="mouse"&&(ar={x:n.clientX,y:n.clientY})});Ke.addEventListener("pointerleave",()=>{ar=null});function ey(){if(!ar||Kt.flying){Tn&&(ze[Tn]&&(ze[Tn].hoverTarget=0),Tn=null,qe.setHot(null),Tl||_r.set(null)),Ke.classList.remove("hovering");return}const n=Jd(ar.x,ar.y),t=(n==null?void 0:n.id)||null;Ke.classList.toggle("hovering",!!n),t!==Tn&&(Tn&&ze[Tn]&&(ze[Tn].hoverTarget=0),Tn=t,t&&(ze[t].hoverTarget=1),qe.setHot(t),Tl||_r.set(t))}function lr(n){Ce.cityYear=n,ri.setYear(n),xr.setVisible(n>=2016),br.setYear(n)}let cr=null;function ny(){lr(2015.7),cr=ws({duration:4.5,ease:n=>n,onUpdate:n=>lr(2015.7+n*(Is-2015.7)),onDone:()=>{cr=null,lr(Is)}}),Ds("manu-city-intro","1")}function wr(){cr&&(cr.cancel(),cr=null,lr(Is))}let go=600;function Bo(){_e.w=innerWidth,_e.h=innerHeight,On.setPixelRatio(Math.min(devicePixelRatio,2)),On.setSize(_e.w,_e.h,!1),Kt.resize(_e.w,_e.h),ri.clouds.visible=_e.w/_e.h>.9,document.body.classList.toggle("tall",_e.w/_e.h<.9);const{pos:n,target:t}=Kt.overviewPose();go=n.distanceTo(t),Fn.fog.near=go*.75,Fn.fog.far=Math.min(go*1.9,1480),qe.invalidate(),Eo.invalidate(),Re.isOpen?No():ie.frame()}addEventListener("resize",Bo);const iy=new l_;let Ui=0,sy=0;function ry(){const n=[],t=(e,i={})=>{if(!e||e.hidden||e.closest("[hidden]"))return;const s=e.getBoundingClientRect();s.width&&n.push({left:s.left-(i.l||0),right:s.right+(i.r||0),top:s.top-(i.t||0),bottom:s.bottom+(i.b||0)})};if(t(le("topbar"),{b:6}),ie.mode==="title"){const e=document.querySelector(".title-inner");if(_e.w>860&&e){const i=e.getBoundingClientRect();n.push({left:-9999,right:i.right+28,top:-9999,bottom:9999})}else t(e,{t:24})}return ie.mode==="story"&&(t(document.querySelector("#story:not(.away) .story-col")),t(document.querySelector("#story:not(.away) .story-rail"),{l:8,r:8,t:8,b:8})),Re.isOpen&&t(le("panel")),t(ks),t(Fo,{l:4,r:4,t:4,b:4}),_e.w<=860&&t(Oo),n}function oy(){Eo.visible=Ce.exploring&&!Re.isOpen&&!Xs.on&&!Qn.active&&Kt.distance()>go*.8,qe.setView({hidden:Eo.visible,island:ie.mode==="story"?ie.index:null,avoidRects:ry()}),document.body.classList.toggle("labels-compact",ie.mode==="title"&&_e.w<=860),document.body.classList.toggle("title-mode",ie.mode==="title"),document.body.classList.toggle("flyby-on",Qn.active),Fo.classList.toggle("behind",Re.isOpen),ks.hidden=ie.mode==="story"&&_e.w<=860}function Kd(){(innerWidth!==_e.w||innerHeight!==_e.h)&&Bo();const n=iy.getDelta(),t=Math.min(.05,n);Ui+=t,v_(Math.min(.25,n)),ri.update(t,Ui,Kt.camera),Us.update(t,Ui),Wi.update(t,Ui),sc.update(Ui),Qn.update(t),Xs.update(Ui),br.update(t,Ui,Kt.camera),Kt.update(t,_e),(sy++&1)===0&&ey(),On.render(Fn,Kt.camera),oy(),qe.update(Kt.camera,_e),Eo.update(Kt.camera,_e),$d.update(Kt.camera,_e),requestAnimationFrame(Kd)}function Er(n){const t=tc.find(e=>e.id===n);return!t||!ze[t.buildingId]?!1:(wr(),ie.mode!=="off"&&ie.go(Math.max(0,Fs(t.buildingId))),ni(t.buildingId,{caseId:n}),ic(`case/${n}`),!0)}addEventListener("hashchange",()=>{const n=location.hash.match(/^#case\/([\w-]+)$/);n&&Er(n[1])});if(jn){const n=ze["your-plot"],t=n==null?void 0:n.parts.roadSign;if(t!=null&&t.userData.canvas){const s=t.userData.canvas;So(s.getContext("2d"),{text:"The road's paved to mid-December 2026.",sub:`The next stretch leads to ${jn.company} →`,w:s.width,h:s.height,bg:"#243447",fg:"#ffffff"}),t.userData.texture.needsUpdate=!0}const e=n==null?void 0:n.parts.hereSign;if(e!=null&&e.userData.canvas){const s=e.userData.canvas;So(s.getContext("2d"),{text:`${jn.company.toUpperCase()} HERE`,w:s.width,h:s.height,size:84,bg:"#ffffff",fg:"#243447",border:"#ff7a2f"}),e.userData.texture.needsUpdate=!0}const i=[...document.querySelectorAll("#labels .label")].find(s=>/Your office/.test(s.textContent));i&&(i.querySelector(".t").textContent=`${jn.company} →`,i.classList.add("unvisited"))}Zd();Bo();Uo();const ay=!Ds("manu-city-intro"),vn=location.hash.replace("#","");lr(Is);const{pos:ly,target:Qd}=Kt.overviewPose();Kt.camera.position.copy(ly);Kt.controls.target.copy(Qd);Kt.camera.lookAt(Qd);Kd();requestAnimationFrame(()=>{var t;if(window.__cityReady=!0,document.documentElement.classList.add("city-ready"),(t=document.getElementById("cvs-open-city"))==null||t.addEventListener("click",()=>{document.documentElement.classList.remove("no-city"),Bo()}),le("loading").classList.add("done"),setTimeout(()=>le("loading").remove(),600),ie.showTitle(),jn){qs(),ni("your-plot");return}const n=vn.match(/^case\/([\w-]+)$/);if(n){Er(n[1]);return}vn&&(ze[vn]||Os[vn])&&ie.go(Math.max(0,Fs(vn))),vn&&ze[vn]?ni(vn):vn&&Os[vn]?Sr(vn):ay&&!Kn()&&ny()});
