var t=document.querySelectorAll(".population"),e=document.querySelector(".total-population"),o=document.querySelector(".average-population"),n=0;t.forEach(function(t){var e=+t.textContent.replaceAll(",","");n+=e}),e.textContent=n.toLocaleString("en-US"),o.textContent=(n/t.length).toLocaleString("en-US");
//# sourceMappingURL=index.252bd574.js.map
