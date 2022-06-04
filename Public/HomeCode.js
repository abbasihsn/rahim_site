var slideIndex = 1;
var nextSlideTime = setInterval( function() { plusSlides(1) }, 5000);

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var dots = document.getElementsByClassName("dot");
  
  /*var slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) slideIndex = 1;    
  if (n < 1) slideIndex = slides.length;
  
  for (i = 0; i < slides.length; i++) 
  {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";*/  
  
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  
  clearInterval(nextSlideTime);
  nextSlideTime = setInterval( function() { plusSlides(1) }, 5000);
  
  slideIndex += n;
  if (slideIndex == 4) slideIndex = 1;
  if (slideIndex == 0) slideIndex = 3;
  dots[slideIndex - 1].className += " active";

  
  var pic = "SlideShow" + slideIndex + ".jpg";
  document.getElementById("main_menu").style.backgroundImage = "url(" + pic + ")";
  
  if (document.getElementById("English").checked)
  {
	if (slideIndex == 1)
	{
	  //document.getElementById("ServiceHeader").innerHTML = "Temporary Entry";
	  document.getElementById("Service").innerHTML = "Welcome to ViVo Canada Immigration Services. We are a Canadian immigration consultancy firm based in the province of Québec. We offer professional services to help you immigrate to Canada. ";  
	}
  
	if (slideIndex == 2)
	{
	  //document.getElementById("ServiceHeader").innerHTML = "Permanent Residency";
	  document.getElementById("Service").innerHTML = "Our regulated Canadian immigration consultant is also licenced to practice in the province of Quebec. If Quebec is your province of destination, contact us."; 
	}
  
	if (slideIndex == 3)
	{
	  //document.getElementById("ServiceHeader").innerHTML = "About US";
	  document.getElementById("Service").innerHTML = "If you are a self-employed person, an entrepreneur or a business investor, contact us. We are specialized in business immigration programs.";
    }  
  }
  else if (document.getElementById("French").checked)
  {
	if (slideIndex == 1)
	{
	  //document.getElementById("ServiceHeader").innerHTML = "Residence temporaire";
	  document.getElementById("Service").innerHTML = "Bienvenue à ViVo Canada Services d’Immigration. Situé au Québec, nous sommes une firme de consultants en immigration canadienne. Nous offrons des services professionnels pour vous aider à immigrer au Canada.";
	}
  
	if (slideIndex == 2)
	{
	  //document.getElementById("ServiceHeader").innerHTML = "Residence Permanente";
	  document.getElementById("Service").innerHTML = "Notre consultante réglementée en immigration canadienne est également inscrit au registre des consultants en immigration. Contactez-nous si vous pensez vous installer au Québec.";
	}
	
	if (slideIndex == 3)
	{
	  //document.getElementById("ServiceHeader").innerHTML = "À propos de nous";
	  document.getElementById("Service").innerHTML = "Si vous êtes un travailleur autonome, un entrepreneur ou un investisseur, contactez-nous. Nous sommes spécialisés dans les programmes d'immigration d'affaires.";
	}
  }
}

function changeLanguage()
{
	if (document.getElementById("English").checked)
	{
		location.replace("HomeEng.html")
	}
	else if (document.getElementById("French").checked)
	{
		location.replace("HomeFrn.html")
	}
}
