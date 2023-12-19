const Inputname = document.querySelector("form input");
const button = document.querySelector("form button");
const form = document.querySelector("form");

const containerGender = document.querySelector(".gender-container")
const Username = document.querySelector(".name");
const genderSymbol = document.querySelector(".gender-container img");
const gender = document.querySelector(".gender");
const probability = document.querySelector(".probability");
const error = document.querySelector(".error")

Inputname.addEventListener("keydown", function(event){
    if(event.keyCode === 13){
        fetcData();
    }

});

form.addEventListener("submit",(event)=>{
    event.preventDefault();
});

button.addEventListener("click", fetcData);

function fetcData(){
    
    try {
        const url = `https://api.genderize.io?name=${Inputname.value}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.name) {
       
                    Inputname.classList.remove("danger");
                    
                    const regex = /^[A-Za-z]+$/;
                    //Print Data 

                   if(regex.test(Inputname.value)){

                    Username.textContent = data.name;
                    if(data.gender === "male"){
                        containerGender.classList.remove("female-topic");
                        containerGender.classList.add("man-topic");
                        genderSymbol.src = "mars-solid.svg";
                    }

                    else if(data.gender = "female"){
                        containerGender.classList.remove("man-topic");
                        containerGender.classList.add("female-topic");
                        genderSymbol.src = "venus-solid.svg";
                    }

                    gender.textContent = `Gender : ${data.gender}`;
                    probability.textContent = `Probability : ${data.probability*100}%`;

                   }

                   else{
                    alert("Name must contain only letters");
                    
                   }

                }

                else {
                    Inputname.classList.add("danger");
                    alert(`Fill correctly the input Please`);
                }


            })
    }
    catch (error) {
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

