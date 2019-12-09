let x = document.querySelector("#x");
let y = document.querySelector("#y");
let px = document.querySelector("#px");
let o = document.querySelector("#o");
let cube = document.querySelector(".cube");
let output = document.querySelector("#output")
x.addEventListener("input",()=>{
	cube.style.boxShadow = `${x.value}px ${y.value}px ${px.value}px rgba(0,0,0,${o.value})`;
 output.value = `box-shadow:${x.value}px ${y.value}px ${px.value}px a(${o.value});`;

})
y.addEventListener("input",()=>{
	cube.style.boxShadow = `${x.value}px ${y.value}px ${px.value}px rgba(0,0,0,${o.value})`;
 output.value = `box-shadow:${x.value}px ${y.value}px ${px.value}px a(${o.value});`;
})

px.addEventListener("input",()=>{
	cube.style.boxShadow = `${x.value}px ${y.value}px ${px.value}px rgba(0,0,0,${o.value})`;
output.value = `box-shadow:${x.value}px ${y.value}px ${px.value}px a(${o.value});`;
})

o.addEventListener("input",()=>{
	cube.style.boxShadow = `${x.value}px ${y.value}px ${px.value}px rgba(0,0,0,${o.value})`;
	output.value = `box-shadow:${x.value}px ${y.value}px ${px.value}px a(${o.value});`;
})

copy.addEventListener("click",()=>{
	output.select()
	document.execCommand("Copy");
	alert("EMPERA PROTECS")
})