var titles = ["Big Data","Infraestructura","Integración",
			  "Analytics","Process Management",
			  "Seguridad","Gobierno de Info."];
var texts = ["Manejo de información en grandes cantidades que permite el entendimiento de grupos comportamentales en ambientes empresariales.",
			 "Manejo de información en grandes cantidades que permite el entendimiento de grupos comportamentales en ambientes empresariales.",
			 "Manejo de información en grandes cantidades que permite el entendimiento de grupos comportamentales en ambientes empresariales.",
			 "Manejo de información en grandes cantidades que permite el entendimiento de grupos comportamentales en ambientes empresariales.",
			 "Manejo de información en grandes cantidades que permite el entendimiento de grupos comportamentales en ambientes empresariales.",
			 "Manejo de información en grandes cantidades que permite el entendimiento de grupos comportamentales en ambientes empresariales.",
			 "Manejo de información en grandes cantidades que permite el entendimiento de grupos comportamentales en ambientes empresariales."];
var counter = 0;

$(document).ready(function(){
    $("#gearUp").click(function(){
		counter--;
		if(counter < 0)
		{
			counter = titles.length - 1;
		}
		
        $("#gearTitle").fadeToggle("slow");
		setTimeout(function(){
			$("#gearTitle").fadeToggle("slow");
			document.getElementById("gearTitle").innerHTML = titles[counter];
		}, 500);
		
		$("#gearText").fadeToggle("slow");
		setTimeout(function(){
			$("#gearText").fadeToggle("slow");
			document.getElementById("gearText").innerHTML = texts[counter];
		}, 500);
    });
	
	$("#gearDown").click(function(){
		counter++;
		if(counter > 6)
		{
			counter = 0;
		}
		
        $("#gearTitle").fadeToggle("slow");
		setTimeout(function(){
			$("#gearTitle").fadeToggle("slow");
			document.getElementById("gearTitle").innerHTML = titles[counter];
		}, 500);
		
		$("#gearText").fadeToggle("slow");
		setTimeout(function(){
			$("#gearText").fadeToggle("slow");
			document.getElementById("gearText").innerHTML = texts[counter];
		}, 500);
    });
});