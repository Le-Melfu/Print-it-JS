let leftArrow = document.querySelector(".arrow_left");
let rightArrow = document.querySelector(".arrow_right");


const slides = [
	{
		image:"./assets/images/slideshow/slide1.jpg",
		tagLine:"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image:"./assets/images/slideshow/slide2.jpg",
		tagLine:"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image:"./assets/images/slideshow/slide3.jpg",
		tagLine:"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image:"./assets/images/slideshow/slide4.png",
		tagLine:"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//Ajout des bulletpoints dynamique en fonction du nombre de slides
{
	for(let i = 0; i < slides.length; i++){
		const dots = document.querySelector(".dots");
		let bulletPoint = document.createElement("div");
		dots.appendChild(bulletPoint);
		bulletPoint.classList.add("dot", "dot"+i)
	}
}


// Sélecteur de slide

imageSelected = 0;
let allDotList = document.querySelectorAll(".dot");
let bannerImage = document.querySelector(".banner-img");
let bannerTagLine = document.querySelector("#banner p");
let firstDot = document.querySelector(".dot0");
firstDot.classList.add("dot_selected");

// Enlever le style de la slide non selectionnée
function removeAllActiveDots(){
	for(let i = 0; i < allDotList.length; i++){
		if(allDotList[i].classList.contains("dot_selected")){
			allDotList[i].classList.remove("dot_selected")
		};
	};
}

// ajouter le style du bulletpoint et le contenu de la slide selectionnée
function definirCurrentSlide(imageSelectionnée){
	let currentSlide = slides[imageSelectionnée].image;
	let currentTagLine = slides[imageSelectionnée].tagLine;
	let activeDot = document.querySelector(".dot"+imageSelectionnée);
	activeDot.classList.add("dot_selected");
	bannerImage.src = currentSlide;
	let bannerTagLineContent =  `
		${currentTagLine}
	`;
	bannerTagLine.innerHTML = bannerTagLineContent;
}

//Fonction du click sur les flèches pour fonctionnement complet du carrousel
leftArrow.addEventListener("click", () =>{
	if(imageSelected===0){
		imageSelected = slides.length -1;
	}else{
		imageSelected--;
	}
	removeAllActiveDots();
	definirCurrentSlide(imageSelected)
});
rightArrow.addEventListener("click", () =>{
	if(imageSelected===slides.length-1){
		imageSelected = 0;
	}else{
		imageSelected++;
	}
	removeAllActiveDots();
	definirCurrentSlide(imageSelected)
});












