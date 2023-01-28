(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();class v{constructor(){}isValid(o){const s=[],e=o.split("").reverse().map(n=>parseInt(n)),t=e.filter(n=>(n+1)%2===0),p=e.filter(n=>(n+1)%2===1).map(n=>n),d=t.map(n=>n*2).reduce((n,r)=>n+=r,0);return s.push(d),[...s,...p].reduce((n,r)=>n+=r,0)%10===0}maskify(o){return o.slice(0,4).replace(/./g,"#")+o.slice(4)}}class E{constructor(){}root(){const o=document.getElementById("app");o.className="bg-zinc-800 h-screen flex justify-center items-center";const s=document.createElement("section");s.className="w-full flex flex-col items-center gap-5 px-4";const i=document.createElement("div");i.className="w-96 h-56 rounded-md	 bg-zinc-500 shadow-lg shadow-zinc-500/50 flex flex-col items-start justify-end pb-5 gap-1 p-10";const e=document.createElement("div");e.className="w-full flex justify-end pt-5";const t=document.createElement("h2");t.textContent="Master Card",t.className="text-3xl text-gray-700 m-0";const c=document.createElement("div"),p=document.createElement("figure"),x=document.createElement("img");x.setAttribute("src","https://i.postimg.cc/g0hFtXRs/chip.jpg");const d=document.createElement("div"),l=document.createElement("p");l.textContent="#### #### #### ####",l.className="text-purple-800 text-3xl w-max p-3";const u=document.createElement("p");u.className="text-purple-800 text-2xl p-3",u.textContent="Name";const n=document.createElement("div");n.className="bg-zinc-700 p-14 rounded-md w-full md:w-2/4";const r=document.createElement("form");r.className="mt-8 space-y-6";const f=document.createElement("label");f.setAttribute("for","name"),f.textContent="Full Name",f.className="text-md";const a=document.createElement("input");a.setAttribute("type","text"),a.setAttribute("required",""),a.setAttribute("name","name"),a.className="mb-8 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm";const g=document.createElement("label");g.setAttribute("for","number"),g.textContent="Number Card",g.className="text-md";const m=document.createElement("input");a.setAttribute("type","text"),a.setAttribute("name","number"),a.setAttribute("autocomplete","off"),m.className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm";const b=document.createElement("input");return b.setAttribute("type","submit"),b.setAttribute("value","Verificar"),b.className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",m.addEventListener("input",()=>{const C=new v().maskify(m.value);l.textContent=C,l.textContent===""&&(l.textContent="#### #### #### ###")}),a.addEventListener("input",()=>{u.textContent=a.value}),r.addEventListener("submit",y=>{y.preventDefault();const N=new v().isValid(m.value);alert(N?"Numero de tarjeta valido":"Numero de tarjeta invalido"),r.reset(),a.focus()}),i.appendChild(e),e.appendChild(t),i.appendChild(c),c.appendChild(p),p.appendChild(x),i.appendChild(d),d.appendChild(l),d.appendChild(u),n.appendChild(r),r.appendChild(f),r.appendChild(a),r.appendChild(g),r.appendChild(m),r.appendChild(b),s.appendChild(i),s.appendChild(n),o.appendChild(s),s}}const $=new E;$.root();
