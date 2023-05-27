const lengthSlider = document.querySelector(".pass-length input"),
options = document.querySelectorAll(".option input"),
passwordInput = document.querySelector(".input-box input");
copyIcon = document.querySelector(".input-box span");
passIndicator = document.querySelector(".pass-indicator");
generateBtn = document.querySelector(".generate-btn");

const characters = {  // object of lettes, numbers and symbols
    lowercase:"abcdefghijklmnopqrstuvwyxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers:"0123456789",
    symbols:"!@#$%^&*()_+=-{}[]';:/?.><,`~"
}

const generatePassword =() => {
    let staticPassword="",
    randomPassword="",
    excludeDuplicate = false,
    passLength = lengthSlider.value;

    options.forEach(option => {  // looping throught each option's checkbox
        if(option.checked) {  // if checkbox is checked
            //if checkbox id isn't exc-duplicate && spaces
            if(option.id !== "exc-duplicate" && option.id !== "spaces" ) {
                // adding particular key value from character object to staticPassword
                staticPassword += characters[option.id];
                
            } else if (option.id === "spaces") {  // if checkbox id is spaces
                staticPassword += `  ${staticPassword}  `;  // if adding space at the beginning & end of staticPassword
            } else {  // else pass true value to excludeDuplicate
                excludeDuplicate = true;

            }  
        }
    });

     for (let i =0; i < passLength; i++) {
            // getting random character from the static password 
            let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)];
            if(excludeDuplicate) { // attention  // if excludeDuplicate is true
                // if randomPassword doesn't contains the current random character or randomChar is equal
                // to space " " then add random character to randoPassword else decrement i by -1
                !randomPassword.includes(randomChar) || randomChar == " " ? randomPassword += randomChar : i--;
            } else {  // else add random character to randomPassword
                randomPassword += randomChar;
            }
     }

    passwordInput.value =randomPassword; // passing randomPassword to passwordInput value
}

const updatePassIndicator = () => {
    // if lengthSlider value is less than 8 then pass "weak" as passIndicator id else if lengthSlider
    // value is less thas 16 then pass "medium" as id else pass "strong" as id
    passIndicator.id = lengthSlider.value <= 8 ? "weak" :lengthSlider.value <= 16 ? "medium" :"strong"
}

const updateSlider =() => {
    // passing slider value as counter text
    document.querySelector(".pass-length span").innerHTML = lengthSlider.value;
    generatePassword();
    updatePassIndicator();
}
updateSlider();

const copyPassword =() => {
    navigator.clipboard.writeText(passwordInput.value);
    copyIcon.innerText = "done";
    
}

// toggle class active
const navbarNav = document.querySelector ('.navbar-nav');

document.querySelector ('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
}

// klik diluar sidebar untuk menghilangkan submenu hamburger menu
// const hamburger = document.querySelector('#hamburger-menu');

// document.addEventListener('click', function(e){
//     if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
//         navbarNav.classList.remove('active')
//     }
// })

lengthSlider.addEventListener('input', updateSlider)
copyIcon.addEventListener('click', copyPassword)
generateBtn.addEventListener('click', generatePassword)

// attention here

// if(excDuplicate) {
//     if(!randomPassword.includes(randomChar) || randomChar == " ") {
//         randomPassword += randomChar;
//     } else {
//         i--;
//     }
// } else {
//     randomPassword += randomChar;
// }

