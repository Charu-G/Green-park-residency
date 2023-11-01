// Scroll on click
var navbar = document.querySelector(".navbar");

let sticky = navbar.offsetTop;


function scrollFunction() {
    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}


window.addEventListener('scroll', scrollFunction);

// Popup

var popup = document.querySelector('.popup');
// var popup1 = document.querySelector('.popup1');
var body = document.querySelector('body');

function myPopup() {
    if (popup.style.display === "none") {
        navbar.classList.add('parentDisable');
        popup.style.display = "flex";
        body.style.overflow = "hidden";
    } 
  }

function closePopup(){
    popup.style.display = "none";
    body.style.overflowY = "scroll";
    body.style.overflowX = "hidden";
    navbar.classList.remove('parentDisable');
}

// Function to show pop-up after every 30 sec
var popupagain = setInterval(()=>{
    myPopup()
    console.log("call")
},60000)


// Calling Thank popup

var thank = document.querySelector(".thank-popup");

function thankpop(){
    thank.style.display="flex";
    navbar.classList.add('parentDisable1');
}

function thankClose(){
    thank.style.display="none";
    navbar.classList.remove('parentDisable1');
}

// Send mail on Click

function sendMail(){
    (function(){
        emailjs.init("wab7q1A_EZuskFEQZ");
    })();

    var params = {
        sendername: document.querySelector("#sendername").value,
        phone_no: document.querySelector("#phone_no").value, 
        email_id: document.querySelector("#email_id").value,  
    };

    var serviceID = "service_elgp3yr";
    var tempelateID = "template_hye8v4b";

    emailjs.send(serviceID, tempelateID, params)
    .then( res => {
        document.getElementById("mailform").reset()
        thankpop();
        clearInterval(popupagain);
        closePopup();
    })
    .catch();
    return false
}


// Hamburger menu

var hamburger = document.querySelector(".green-ham");
var enq = document.querySelector(".enquire");
var xmark = document.querySelector(".icon-x");
var bar = document.querySelector(".icon-bar")
var ognav =document.querySelector(".green");
var head = document.querySelector(".header");

function hamMenu(){
    hamburger.style.display = "flex";
    ognav.style.display = "none";
    bar.style.display = "none";
    xmark.style.display = "block";
    enq.style.display = "none";
}

function closehamMenu(){
    hamburger.style.display = "none";
    ognav.style.display = "flex";
    bar.style.display = "block";
    xmark.style.display = "none";
    enq.style.display = "flex";
}