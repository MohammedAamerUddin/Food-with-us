// Sign Up button
let signup = document.getElementById("sign-up-btn");
let upform = document.getElementsByClassName("signup")[0];
let inform = document.getElementsByClassName("signin")[0]; // moved this up so it's accessible
let topcards = document.getElementsByClassName("top-card")[0];
let bottomcards = document.getElementsByClassName("bottom-card")[0];
let cardsheight = document.querySelector(".sec2")


function hideCards() {
    topcards.style.display = "none";
    bottomcards.style.display = "none";
    cardsheight.style.height = "0px";
    cardsheight.style.overflow = "hidden";
    cardsheight.style.display = "none"; // completely remove from layout
}

// Function to show cards and restore container height
function showCards() {
    topcards.style.display = "flex";
    bottomcards.style.display = "flex";
    cardsheight.style.display = "flex";  // restore display
    cardsheight.style.overflow = "visible";  // reset overflow properly
    cardsheight.style.height = "557px"; // if needed, you can set height explicitly
}

signup.addEventListener("click", () => {
    // Hide signin form
    inform.style.display = "none";
    hideCards();
    // Toggle signup form
    let a = upform.classList.toggle("none");
    if (a) {
        upform.style.display = "flex";
    } else {
        upform.style.display = "none";
        showCards()
    }
});

// Sign In button
let signin = document.getElementById("sign-in-btn");

signin.addEventListener("click", () => {
    // Hide signup form
    upform.style.display = "none";
    hideCards();
    // Toggle signin form
    let b = inform.classList.toggle("none");
    if (b) {
        inform.style.display = "flex";
    } else {
        inform.style.display = "none";
        showCards()
    }
});


// signup form
let signupForm = document.getElementById("signup-form");
let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
let inp3 = document.getElementById("inp3");
let inp4 = document.getElementById("inp4");
signupForm.addEventListener("click", (e) => {
    signinForm.style.display = "none";
    e.preventDefault();
    if (inp1.value != "" && inp2.value != "" && inp3.value != "" && inp4.value != "") {
        let name = inp1.value;
        let phone = inp2.value;
        let email = inp3.value;
        let password = inp4.value;

        inp1.value = "";
        inp2.value = "";
        inp3.value = "";
        inp4.value = "";

        signin.style.display = "none";
        signup.innerHTML = ` Hi ${name}`;
        signup.style.backgroundColor = "white";
        signup.style.color = "rgb(246, 22, 22)";
        signup.style.border = "none";
        signup.style.fontSize = "20px";
        signup.style.cursor = "default";
        upform.style.display = "none";
        showCards();
    }
});

// signin form
let signinForm = document.getElementById("signin-form");
let inp5 = document.getElementById("inp5");
let inp6 = document.getElementById("inp6");
signinForm.addEventListener("click", (e) => {
    signupForm.style.display = "none";
    e.preventDefault();
    if (inp5.value != "" && inp6.value != "") {
        let email1 = inp5.value;
        let password2 = inp6.value;
        console.log(email1, password2);
        inp5.value = "";
        inp6.value = "";
        inform.style.display = "none";
        showCards();
    }
});


// cart_icon
let card_icon = document.getElementById("cart_icon")
let cart = document.getElementsByClassName("cart")[0]
let card = document.getElementsByClassName("cards")[0]
card_icon.addEventListener("click", () => {
    let t = card_icon.classList.toggle("none")
    if (t) {
        cart.style.display = "block"
        card.style.width = "70%"
        // items.style.display="none"
    }
    else {
        cart.style.display = "none"
        card.style.width = "98%"
        // items.style.display="none"

    }

})

// add
let add = document.getElementsByClassName("add-to-cart")[0]
let items = document.getElementsByClassName("items")[0]
add.addEventListener("click", () => {

    let t = add.classList.toggle("none")
    if (t) {
        cart.style.display = "none"
        card.style.width = "70%"
        items.style.display = "block"
    }
    else {
        cart.style.display = "none"
        card.style.width = "98%"
        items.style.display = "none"

    }

});


