// function sub(event) {
//     event.preventDefault();  // not allow form to clear automatically after submitting value.
//     const name = document.querySelector("#name").value;
//     alert(`You just entered that name, ${name}`);

//     const btn = document.querySelector("#btn");
//     btn.classList.toggle("activate");

//     console.log(name);
// }

// const btn = document.querySelector("#btn");
// btn.addEventListener("click", sub);

// const form = document.querySelector("#form");
// form.addEventListener("submit", sub)

const btn = document.querySelector("#toggle");

function tog(event) {
    event.preventDefault();
    const side = document.querySelector("#sidebar");
    side.classList.toggle("toggle");
    // console.log("working");

    const btn = document.querySelector("#toggle");
    btn.classList.toggle("activate");

    const cancel = document.querySelector("#cancel");
    cancel.classList.toggle("activate");
}

btn.addEventListener("click", tog);

cancel.addEventListener("click", tog);
