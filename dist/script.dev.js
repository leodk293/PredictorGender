"use strict";

var Inputname = document.querySelector("form input");
var button = document.querySelector("form button");
var form = document.querySelector("form");
var containerGender = document.querySelector(".gender-container");
var Username = document.querySelector(".name");
var genderSymbol = document.querySelector(".gender-container img");
var gender = document.querySelector(".gender");
var probability = document.querySelector(".probability");
var error = document.querySelector(".error");
Inputname.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    fetcData();
  }
});
form.addEventListener("submit", function (event) {
  event.preventDefault();
});
button.addEventListener("click", fetcData);

function fetcData() {
  try {
    var url = "https://api.genderize.io?name=".concat(Inputname.value);
    fetch(url).then(function (res) {
      return res.json();
    }).then(function (data) {
      console.log(data);

      if (data.name) {
        Inputname.classList.remove("danger");
        var regex = /^[A-Za-z]+$/; //Print Data 

        if (regex.test(Inputname.value)) {
          Username.textContent = data.name;

          if (data.gender === "male") {
            containerGender.classList.remove("female-topic");
            containerGender.classList.add("man-topic");
            genderSymbol.src = "mars-solid.svg";
          } else if (data.gender = "female") {
            containerGender.classList.remove("man-topic");
            containerGender.classList.add("female-topic");
            genderSymbol.src = "venus-solid.svg";
          }

          gender.textContent = "Gender : ".concat(data.gender);
          probability.textContent = "Probability : ".concat(data.probability * 100, "%");
        } else {
          alert("Name must contain only letters");
        }
      } else {
        Inputname.classList.add("danger");
        alert("Fill correctly the input Please");
      }
    });
  } catch (error) {
    console.error(error);
  }
}
/*function handleError(nameEmpty, input) {
    if (nameEmpty = "") {
        input.classList.add("danger")
    }
    else {
        input.classList.remove("danger")
    }
}
function handleGender(gender, topic, genderSymbol) {
    if (gender == "male") {
        genderSymbol.src = "mars-solid.svg"
        topic.classList.add("man-topic")
    }
    else {
        genderSymbol.src = "venus-solid.svg"
        topic.classList.add("female-topic")
    }

}*/