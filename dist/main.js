(()=>{var e={954:e=>{e.exports={getRandomNr:function(e){const t=parseInt(e)+1;let n=Math.floor(Math.random()*t);return console.log(n),n}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}(()=>{"use strict";var e=n(954);const t=function(t,n){const r=document.createElement("div");return(0,e.getRandomNr)(n)===parseInt(t)?(r.style.backgroundColor="green",r.textContent="Correct guess!"):(r.style.backgroundColor="red",r.textContent="Wrong guess"),r};window.getAnswerMsg=t;const r=document.getElementById("guess-wrapper"),o=document.getElementById("answer-wrapper"),s=document.createElement("div");s.className="user-input-wrapper";const a=document.createElement("input");a.placeholder="enter a number",a.type="number";const c=document.createElement("button");c.innerText="Guess!",s.append(a,c),r.appendChild(s),c.addEventListener("click",(()=>{o.innerHTML="";const e=a.value,n=function(){const e=document.querySelector('input[type="radio"]:checked');if(e)return e.value;console.log("No input")}();if(e&&n){const r=t(e,n);r.className="answerBox",o.appendChild(r),setTimeout((()=>{o.removeChild(r)}),2e3)}else alert("Please enter Level of challenge and your guess");a.value=""}))})()})();