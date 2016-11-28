//jQuery script för villa/br menyn. Scriptet gör att vid tryck på "BR" knappen så
//försvinner "Besiktnings" steget, både knappen högst upp och avsnittet som länkas till knappen.
$(document).ready(function(){
	

    $("#hide").click(function(){
        $(".villa").fadeOut("600");
    });
    $("#show").click(function(){
        $(".villa").fadeIn("600");
    });

//jQuery som döljer "Ringmärkt" steget under besiktningsavsnittet.
	$( "#besiktning_show" ).click(function() {
  		$( "#besiktning_hide" ).slideToggle( "slow", function() {
    
  		});
	});

//jQuery som markerar alla "li" element på sidan med röd färg
	$("li").hover(function(){
		$(this).css({color:"red"});
	},
	function(){
		$(this).css({color:"#000000"});
	});

});

//Script för slider skrivet i javascript
//Slidern används för att visa olika bildvarianter      
//Jag lagrar mina slides i en array, jag använder 2 arrayer, en som visar bilderna och en som har en beskrivande text.
MyText=new Array('Stylat på egen hand','Stylat via företag','Ostylat','Tom bostad')
MySlides=new Array('js/imgslide/stylads.jpg','js/imgslide/styladf.jpg','js/imgslide/ostylat.jpg', 'js/imgslide/tomt.jpg')
Slide=0 //Bildspelet börjar på index 0
function ShowSlides(SlideNumber){ 

	{ Slide=Slide+SlideNumber //Reglerar fram och bak knapparna

		//Den här delen gör så att när jag nått sista sliden i arrayen så startar den om från början.
		if (Slide>MySlides.length-1){
            Slide=0
            }
        //Om jag trycker bakåt när jag är på första sliden så kommer jag till sista.
        if (Slide<0) {
			Slide=MySlides.length-1
            }
        //Skriver ut informationen från arrayerna, ändras vid tryck på fram eller bak knappen 
        document.getElementById("text").innerHTML=MyText[Slide]  
        document.DisplaySlide.src=MySlides[Slide] 
    }
}

//Script för att hantera onclick funktionen på knapparna för marknadsföring
function hemnet() {
	document.getElementsByTagName('img')[1].src = 'img/hemnet.png'
	document.getElementById('rubrik').innerHTML = 'Hemnet' +
	'<ul><li>Hemnet är den största bostadsportalen på marknaden.</li>' + 
	'<li>Vi tar fram hela annonsen med bilder och text.</li>' +
	'<li>Annonsen ligger upp tills att bostaden är såld.</li>' +
	'<li>En annonskostnad från Hemnet faktureras alltid direkt till dig som ska sälja.</li></ul> '   
}
function blocket(){
	document.getElementsByTagName('img')[1].src = 'img/blocket.png',
	document.getElementById('rubrik').innerHTML = 'Blocket' +
	'<ul><li>Blocket är den näst största bostadssiten.</li>' + 
	'<li>Alla mäklare syns inte.</li>' +
	'<li>Annonseringen är helt kostnadsfri</li>' +
	'<li>Annonseringen når även ut till passivt sökande.</li>' +
	'<li>Annonsen ligger uppe tills att bostaden är såld.</li></ul> '
}
function aftonbladet(){
	document.getElementsByTagName('img')[1].src = 'img/aftonbladet.png',
	document.getElementById('rubrik').innerHTML = 'Aftonbladet'	+
	'<ul><li>Din annons syns på aftonbladet.se i tre dagar.</li>' + 
	'<li>är en del av Blockets "lite före" kampanj.</li></ul> '
}
function hittaHem(){
	document.getElementsByTagName('img')[1].src = 'img/hittahem.png',
	document.getElementById('rubrik').innerHTML = 'Hitta Hem' +
	'<ul><li>Genom att annonsera på Hitta Hem når vi flest aktivt sökande.</li>' + 
	'<li>Via Hitta Hems centrala databas med kunder matchas din bostad automatiskt' +
	'med alla som kan vara intresserade.</li>' +
	'<li>Bättre möjligheter att kunna annonsera som kommande och "snart till salu".</li>' +
	'<li>Annonsen ligger upp tills att bostaden är såld.</li></ul> '
}
function facebook(){
	document.getElementsByTagName('img')[1].src = 'img/facebook.png',
	document.getElementById('rubrik').innerHTML = 'Facebook' +
	'<ul><li>Via Facebook har vi möjlighet att nå en större kundgrupp..</li>' + 
	'<li>Målgruppsinriktad marknadsföring gör att vi kan välja ut vilken målgrupp' +
	'som ska se annonsen och fokusera extra mycket på den, detta är bra när vi vet' +
	'vilken målgrupp som är mest intresserad av er bostad.</li></ul>' 
	
}

//Enkel validering av kontaktformuläret. Valideringen kollar endast av ifall vissa fält blivit ifyllda.
function myFunction() {
     var x = document.forms["form"]["namn"].value;
    	if (x == "") {
        alert("Du måste fylla i ett namn");
        return false;
    }
    var y = document.forms["form"]["post"].value;
    	if (y == "") {
        alert("Du glömde din e-post adress");
        return false;
    }
    var z = document.forms["form"]["tel"].value;
    	if (z == "") {
        alert("Du glömde ditt telefonnr");
        return false;
    }
alert("Ditt meddelande har skickats iväg!");
}




