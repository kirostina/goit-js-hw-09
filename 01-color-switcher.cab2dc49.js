const t=document.querySelector("body"),e=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");e.addEventListener("click",(function(){n(),a=setInterval(n,1e3)})),d.addEventListener("click",(function(){clearInterval(a),e.disabled=!1,d.disabled=!0}));let a=null;function n(){t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,e.disabled=!0,d.disabled=!1}
//# sourceMappingURL=01-color-switcher.cab2dc49.js.map
