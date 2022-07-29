//1----------------------------------

document.forms[0].addEventListener("submit",
function (e) {
   e.preventDefault();
   let userName = document.forms[0].elements.username.value;
   console.log('Name ===>' + (/^[a-z]+$/gi).test(userName));
   let userTel = document.forms[0].elements.usertelephone.value;
   console.log('Tel ===>' + (/^\+380[0-9]{9}$/g).test(userTel));
   let userEmail = document.forms[0].elements.useremail.value;
   console.log('Email ===>' + ( /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+)/gi).test(userEmail));
});

//2, 3----------------------------------

let palette = document.getElementById("palette");

palette.addEventListener("click", function (event) {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext('2d');
  ctx.strokeStyle = event.target.style.color;

  let x, y, even = 0;
  canvas.addEventListener('click', (event) => {
  if (even) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();

    x = event.offsetX;
    y = event.offsetY;

    // even = 0;
  } else {
    x = event.offsetX;
    y = event.offsetY;
    even = 1;
  }
  });
});

//4----------------------------------

let url = "https://lms.ithillel.ua";
let reg =/((((http|https)\:\/\/)|(www.))[a-zA-Z0-9./]+)/gi;
console.log(reg.test(url));
