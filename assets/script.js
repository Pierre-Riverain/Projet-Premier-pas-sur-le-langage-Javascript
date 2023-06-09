const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//Cette variable permet d'indiquer le slide actuel du carrousel.
let currentSlide = 0;

//Démarrage du script pour le carrousel.
refreshBanner();

/* Cette fonction permet d'ajouter l'image de fond lorsque l'affichage du carrousel est
rafraichit.
 */
function addBannerImg(bannerContainer) {
	const bannerImg = document.createElement("img");
	bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
	bannerImg.alt = "Banner Print-it";
	bannerImg.classList.add("banner-img");
	bannerContainer.appendChild(bannerImg);
}

/* Cette fonction permet d'ajouter le paragraphe au dessus de l'image du carrousel lorsque 
l'affichage du carrousel est rafraichit.
*/
function addBannerParagraph(bannerContainer) {
	const bannerParagraph = document.createElement("p");
	bannerParagraph.innerHTML = slides[currentSlide].tagLine;
	bannerContainer.appendChild(bannerParagraph);
}

/* Cette fonction permet d'ajouter les flèches permettant de naviguer dans le carrousel lorsque
l'affichage du carrousel est rafraichit.
*/
function addArrows(bannerContainer) {
	const arrowLeft = document.createElement("div");
	const listOfDots = document.querySelectorAll(".dot");

	arrowLeft.innerHTML = `<img src="./assets/images/arrow_left.png" alt="Défiler les images vers la gauche.">`;
	arrowLeft.classList.add("arrow");
	arrowLeft.classList.add("arrow_left");
	arrowLeft.addEventListener("click", (event) => {

		if (currentSlide === 0) {
			currentSlide = slides.length - 1;
		} else {
			currentSlide--;
		}
		refreshBanner();
	})
	bannerContainer.appendChild(arrowLeft);

	const arrowRight = document.createElement("div");
	arrowRight.innerHTML = `<img src="./assets/images/arrow_right.png" alt="Défiler les images vers la droite.">`;
	arrowRight.classList.add("arrow");
	arrowRight.classList.add("arrow_right");
	arrowRight.addEventListener("click", (event) => {

		if (currentSlide === slides.length - 1) {
			currentSlide = 0;
		} else {
			currentSlide++;
		}
		refreshBanner();
	})
	bannerContainer.appendChild(arrowRight);
}


/* Cette fonction permet d'ajouter les points lorsque l'affichage du carrousel est raffraichit.
*/
function addDots(bannerContainer) {
	const dotsContainer = document.createElement("div");
	dotsContainer.classList.add("dots");

	for (let i = 0; i < slides.length; i++) {
		const dotElement = document.createElement("span");
		dotElement.classList.add("dot");

		if (i === currentSlide) {
			dotElement.classList.add("dot_selected");
		}

		dotsContainer.appendChild(dotElement);
	}
	bannerContainer.appendChild(dotsContainer);
}

/* Cette fonction permet de rafraichir l'affichage du carrousel. */
function refreshBanner() {

	const bannerContainer = document.getElementById("banner");
	bannerContainer.innerHTML = "";

	addBannerImg(bannerContainer);

	addBannerParagraph(bannerContainer);

	addArrows(bannerContainer);

	addDots(bannerContainer);
}