const slides = [
	{
		image:"slide1.jpg",
		tagLine:"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image:"slide2.jpg",
		tagLine:"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image:"slide3.jpg",
		tagLine:"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image:"slide4.png",
		tagLine:"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//Ajout des bulletpoints dynamique en fonction du nombre de slides
for(let i = 0; i < slides.length; i++){
	const dots = document.querySelector(".dots");
	dots.appendChild(document.createElement("div")).classList.add("dot");
}

// Fonction pour changer de slide
let slideSelected = 0;
let allDotList = document.querySelectorAll(".dot");
allDotList[0].classList.add("dot_selected");
function changeSlide(count){
	allDotList[slideSelected].classList.remove("dot_selected");
	slideSelected = slideSelected + count;
	if(slideSelected < 0){
		slideSelected = slides.length -1;
	}
	if(slideSelected >= slides.length){
		slideSelected = 0;
	}
	allDotList[slideSelected].classList.add("dot_selected");
	document.querySelector(".banner-img").src = "./assets/images/slideshow/"+slides[slideSelected].image;
	document.querySelector("#banner p").innerHTML = slides[slideSelected].tagLine;
}

//Event du clic sur les flèches
document.querySelector(".arrow_left").addEventListener("click", () =>{
	changeSlide(-1);
});
document.querySelector(".arrow_right").addEventListener("click", () =>{
	changeSlide(1);
});