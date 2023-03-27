let fname = document.querySelector("#fname");
let fnumber = document.querySelector("#fnumber");
let fmonth = document.querySelector("#fmonth");
let fyear = document.querySelector("#fyear");
let fcvc = document.querySelector("#fcvc");

let cname = document.querySelector(".card__name");
let cnumber = document.querySelector(".card__number");
let cexpDate = document.querySelector(".card__exp-date");
let ccvc = document.querySelector(".card__cvc");

let cnameDefault = cname.innerHTML;
let cnumberDefault = cnumber.innerHTML;
let cexpDateDefault = cexpDate.innerHTML;
let ccvcDefault = ccvc.innerHTML;

let submitBtn = document.querySelector(".form__submit__btn");
let ty = document.querySelector(".ty");
let tyBtn = document.querySelector(".ty__btn");
let formClass = document.querySelector(".form");
let inputs = formClass.querySelectorAll("input");

// Form validation
fname.addEventListener("input", () => {
    cname.innerHTML = fname.value;
    if (cname.innerHTML === "") {
        cname.innerHTML = cnameDefault;
    }
});

fnumber.addEventListener("input", () => {
    let num = fnumber.value
    cnumber.innerHTML = `${num.substring(0, 4)} ${num.substring(4, 8)} ${num.substring(8, 12)} ${num.substring(12, 16)}`;
    if (num === "") {
        cnumber.innerHTML = cnumberDefault;
    }
});

fmonth.addEventListener("input", () => {
    if (fyear.value === "") {
        cexpDate.innerHTML = `${fmonth.value}/00`;
    } else {
        cexpDate.innerHTML = `${fmonth.value}/${fyear.value}`;
    }
    if (fyear.value === "" && fmonth.value === "") {
        cexpDate.innerHTML = cexpDateDefault;
    }
});

fyear.addEventListener("input", () => {
    if (fmonth.value === "") {
        cexpDate.innerHTML = `00/${fyear.value}`;
    } else {
        cexpDate.innerHTML = `${fmonth.value}/${fyear.value}`;
    }
    if (fyear.value === "" && fmonth.value === "") {
        cexpDate.innerHTML = cexpDateDefault;
    }
});

fcvc.addEventListener("input", () => {
    ccvc.innerHTML = fcvc.value;
    if (ccvc.innerHTML === "") {
        ccvc.innerHTML = ccvcDefault;
    }
});

// Submit
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let isValid = true;

  inputs.forEach((input) => {
    if (!input.checkValidity()) {
        isValid = false;
      }
  });

  if (isValid) {
    formClass.classList.add("hidden");
    ty.classList.remove("hidden");
  }
});

tyBtn.addEventListener("click", () => {
    formClass.classList.remove("hidden");
    ty.classList.add("hidden");
});