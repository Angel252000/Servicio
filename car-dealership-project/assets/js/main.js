/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== POPULAR SWIPER ===============*/

let swiperPopular = new Swiper(".popular__container", {
    loop:true,
    spaceBetween: 24,
    slidesPerView : 'auto',
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
        768: {
          slidesPerView: 3,
       
        },
        1024: {
          spaceBetween: 48,
        },
      },

  });
/*=============== MIXITUP FILTER FEATURED ===============*/

let mixerFeatured = mixitup('.featured__content', {
    selectors: {
        target: '.featured__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active featured */ 

const linkFeatured = document.querySelectorAll('.featured__item')

function activeFeatured(){
    linkFeatured.forEach(l => l.classList.remove('active-featured'))
}
/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin:'top',
    distance : '60px',
    duration : 2500,
    delay : 400,
})

sr.reveal('.home__title, .popular__container, .features__img')
sr.reveal('.home__subtitle', {delay : 500}) 
sr.reveal('.home__elec', {delay : 600}) 
sr.reveal('.home__img', {delay : 800}) 
sr.reveal('.home__car-data', {delay : 900 , interval:100, origin : 'bottom'}) 
sr.reveal('.home__button', {delay : 200, origin:'bottom'})
sr.reveal('.about__group , .offer__data', {origin : 'left'})
sr.reveal('.about__data , .offer__img', {origin : 'right'}) 
sr.reveal('.features__map', {delay: 600,origin : 'bottom'})
sr.reveal('.features__card', {interval : 300,origin : 'bottom'}) 
sr.reveal('.featured__card, .logos__content, .footer__content', {interval : 100})              


const audio = new Audio();
audio.src = "assets/js/engine.mp3";



// sign in — login box removido



function unmute(){
    const video = document.getElementById("video1");
    if(video.muted){
        video.muted = false;
    }
    else{
        video.muted = true;
    }
     
}


function changeCarColor(newSrc, button) {
   
    document.getElementById("carImg").src = newSrc;

    var colorBtns = document.getElementsByClassName("colorBtn");
    for (var i = 0; i < colorBtns.length; i++) {
        colorBtns[i].style.border = "none";
    }
    button.style.border = "4px solid white";
}

function changeCarRim(newSrc, button) {
   
    document.getElementById("carRimImg").src = newSrc;

    var colorBtns = document.getElementsByClassName("iris");
    for (var i = 0; i < colorBtns.length; i++) {
        colorBtns[i].style.border = "none";
    }
    button.style.borderLeft = "4px solid black";


}



function changeCarLight(newSrc, button) {
   
    document.getElementById("carImgLight").src = newSrc;

    var colorBtns = document.getElementsByClassName("lightbtn");
    for (var i = 0; i < colorBtns.length; i++) {
        colorBtns[i].style.border = "none";
    }
    button.style.border = "2px solid white";


}



function changeCarTail(newSrc, button) {
   
    document.getElementById("carImgTail").src = newSrc;

    var colorBtns = document.getElementsByClassName("tailbtn");
    for (var i = 0; i < colorBtns.length; i++) {
        colorBtns[i].style.border = "none";
    }
    button.style.border = "2px solid white";


}


function showmsg() {
    document.getElementById("submitmsg").style.display = "none";
    setTimeout(function() {
      document.getElementById("submitmsg").style.display = "block";
    }, 2000);
    setTimeout(function() {
        document.getElementById("submitmsg").style.display = "none";
      }, 9000);
  }
  




  function showsub() {
    var el = document.getElementsByClassName("group")[0];
    if (el.style.display === "none") {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  }


  function showques(){
  const questions = document.querySelectorAll('.faq-section .question');

questions.forEach(question => {
  question.addEventListener('click', () => {
    question.parentElement.classList.toggle('active');
  });
});

  }



am5.ready(function() {

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv");


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);


// Create the map chart
// https://www.amcharts.com/docs/v5/charts/map-chart/
var chart = root.container.children.push(am5map.MapChart.new(root, {
  panX: "translateX",
  panY: "translateY",
  projection: am5map.geoMercator()
}));


// Create main polygon series for countries
// https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
  geoJSON: am5geodata_worldLow,
  exclude: ["AQ"]
}));

polygonSeries.mapPolygons.template.setAll({
  tooltipText: "{name}",
  toggleKey: "active",
  interactive: true
});

polygonSeries.mapPolygons.template.states.create("hover", {
  fill: root.interfaceColors.get("primaryButtonHover")
});

polygonSeries.mapPolygons.template.states.create("active", {
  fill: root.interfaceColors.get("primaryButtonHover")
});

var previousPolygon;

polygonSeries.mapPolygons.template.on("active", function (active, target) {
  if (previousPolygon && previousPolygon != target) {
    previousPolygon.set("active", false);
  }
  if (target.get("active")) {
    polygonSeries.zoomToDataItem(target.dataItem );
  }
  else {
    chart.goHome();
  }
  previousPolygon = target;
});


// Add zoom control
// https://www.amcharts.com/docs/v5/charts/map-chart/map-pan-zoom/#Zoom_control
chart.set("zoomControl", am5map.ZoomControl.new(root, {}));


// Set clicking on "water" to zoom out
chart.chartContainer.get("background").events.on("click", function () {
  chart.goHome();
})


// Make stuff animate on load
chart.appear(1000, 100);

}); // end am5.ready()