"use strict";function B(r="rgb(0, 0, 0)",i="rgb(255, 255, 255)",c=10){const t=g(r,!1),n=t[0],e=t[1],s=t[2],a=g(i,!1),h=a[0],$=a[1],b=a[2],G=(h-n)/c,R=($-e)/c,d=(b-s)/c,u=[];for(let f=0;f<c;f++){let l=o(`rgb(${Math.round(G*f+n)},${Math.round(R*f+e)},${Math.round(d*f+s)})`);f===0&&(l=o(r)),f===c-1&&(l=o(i)),u.push(l)}return u}function g(r,i=!0){const c=/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;if(r=String(r).toLowerCase(),r&&c.test(r)){if(r.length===4){let n="#";for(let e=1;e<4;e+=1)n+=r.slice(e,e+1).concat(r.slice(e,e+1));r=n}const t=[];for(let n=1;n<7;n+=2)t.push(parseInt(`0x${r.slice(n,n+2)}`));return i?`rgb(${t[0]},${t[1]},${t[2]})`:t}return/^(rgb|RGB)/.test(r)?r.replace(/(?:\(|\)|rgb|RGB)*/g,"").split(",").map(n=>Number(n)):r}function o(r){const i=r,c=/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;if(/^(rgb|RGB)/.test(i)){const t=i.replace(/(?:\(|\)|rgb|RGB)*/g,"").split(",");let n="#";for(let e=0;e<t.length;e++){let s=Number(t[e]).toString(16);s=String(s).length==1?`0${s}`:s,s==="0"&&(s+=s),n+=s}return n.length!==7&&(n=i),n}if(c.test(i)){const t=i.replace(/#/,"").split("");if(t.length===6)return i;if(t.length===3){let n="#";for(let e=0;e<t.length;e+=1)n+=t[e]+t[e];return n}}else return i}function p(r,i){r=o(r);const c=/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;let t=String(r).toLowerCase();if(t&&c.test(t)){if(t.length===4){let e="#";for(let s=1;s<4;s+=1)e+=t.slice(s,s+1).concat(t.slice(s,s+1));t=e}const n=[];for(let e=1;e<7;e+=2)n.push(parseInt(`0x${t.slice(e,e+2)}`));return`rgba(${n.join(",")},${i})`}return t}const x={colorGradient:B,hexToRgb:g,rgbToHex:o,colorToRgba:p};exports.colorGradient=x;
