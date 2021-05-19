// GOOGLE MAPS
function initMap() {
  var bakery = { lat: 46.3242578548615, lng: 16.295716792868586 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: bakery,
  });
  var marker = new google.maps.Marker({ position: bakery, map: map });
}
//MAIL CONTACT FORM
function sendMail(contactForm) {
  emailjs
    .send("gmail", "cake_cookies", {
      from_name: contactForm.name.value,
      from_email: contactForm.emailaddress.value,
      message: contactForm.textarea.value,
    })
    .then(
      function (response) {
        alert("E-pošta je uspješno poslana!", response);
      },
      function (error) {
        alert("E-pošta nije uspješno poslana", error);
      }
    );
  return false;
}

//Border change on the picture, on the contact page
//When user clicks on the "Your name" field in the form, border-radius value is changed.
function borderChange() {
  document.getElementById("mailside").style.cssText =
    "border-radius: 40% 0 0 0.4%";
}
// Highlights nav links orrange
window.onload = function () {
  var path = location.pathname;
  //Compares current var path value, and if same, inserts .currentpage class into the nav link
  if (path == "/CAKE-ATELIER/index.html") {
    document.getElementById("about").className = "currentpage";
  } else if (path == "/CAKE-ATELIER/gallery.html") {
    document.getElementById("gallery").className = "currentpage";
  } else if (path == "/CAKE-ATELIER/contact.html") {
    document.getElementById("contact").className = "currentpage";
  }
  // console.log(location.pathname);
  //Inserts an img into the div with mainimg class
  //mainimg css background removed with @media and this one insterter as HTML element
  var x = document.createElement("img");
  x.setAttribute("src", "assets/img/Princes krafne.jpg");
  x.setAttribute("width", "100%");
  x.setAttribute("height", "auto");
  x.setAttribute("alt", "some cakes");
  document.getElementById("landingPageFirstImage").appendChild(x);

  var y = document.createElement("img");
  y.setAttribute("src", "assets/img/desert u casama.jpg");
  y.setAttribute("width", "100%");
  y.setAttribute("height", "auto");
  y.setAttribute("alt", "apple pie");
  document.getElementById("landingPageGoalImg").appendChild(y);
};

//On burger menu click, main menu will drop down
var burgerMenu = document.getElementsByClassName("burger-menu")[0];
var navbar = document.getElementsByClassName("navbar")[0];
//on click toggle .active class in the navbar to show and hide it
burgerMenu.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// window.onload = function(){
//   var x = document.createElement('img');
//   x.setAttribute('src', 'assets/img/sweets-887722_1920.jpg');
//   x.setAttribute('width', '100%');
//   x.setAttribute('height', 'auto');
//   x.setAttribute('alt', 'some cakes');
//   document.getElementById('landingPageFirstImage').appendChild(x);
// }
