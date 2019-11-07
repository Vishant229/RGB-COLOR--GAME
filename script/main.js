var squares=document.querySelectorAll(".get");
var colors=take(6);
var selectedcolor=document.getElementById("vv");
var printingmessage=document.getElementById("print");
var pickedcolor=colors[get()];
var h1=document.getElementById("dd");
var b1=document.getElementById("b1");
var eselected=document.querySelector(".eselected");
var hselected=document.querySelector(".hselected");
eselected.addEventListener("click",function(){
	eselected.classList.add("selected");
	hselected.classList.remove("selected");
	colors=take(3);
	pickedcolor=colors[get()];
	selectedcolor.textContent=pickedcolor;
	for(var i=0;i<6;i++)
	{
		if(colors[i])
		{
			squares[i].style.background=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	} 
});
hselected.addEventListener("click",function(){
	eselected.classList.remove("selected");
	hselected.classList.add("selected");
	colors=take(6);
	pickedcolor=colors[get()];
	selectedcolor.textContent=pickedcolor;
	for(var i=0;i<6;i++)
	{
			squares[i].style.background=colors[i];
			squares[i].style.display="block";
	} 
});
selectedcolor.textContent=pickedcolor;
for(var i=0; i<squares.length; i++)
{
	squares[i].style.background=colors[i];
	squares[i].addEventListener("click",function (){
		var clickedcolor=this.style.background;
		if(clickedcolor===pickedcolor)
		{
			printingmessage.textContent="Correct!!!";
			h1.style.background=clickedcolor;
			b1.textContent="Play Again?";
			for( var j=0; j<squares.length; j++)
			{
				squares[j].style.background=clickedcolor;
			}
		}
		else
		{
			printingmessage.textContent="Try Again";
			this.style.background="black";
		}
	});
}
b1.addEventListener("click",function(){
colors=take(6);
printingmessage.textContent="";
this.textContent="New Colors"
for(var i=0; i<squares.length; i++)
{
	squares[i].style.background=colors[i];
}
pickedcolor=colors[get()];
selectedcolor.textContent=pickedcolor;
h1.style.background="steelblue";
});
function get(){
	return Math.floor(Math.random()*colors.length);
}
function take(n)
{
	var arr=[];
	for(var i=0; i<n; i++)
	{
		var r=Math.floor(Math.random()*256);
		var g=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256);
		arr.push("rgb("+r+", "+g+", "+b+")");
	}
	return arr;
}