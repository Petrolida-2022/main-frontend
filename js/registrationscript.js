const slidePage = document.querySelector(".slidePage");
const firstNextBtn = document.querySelector(".nextBtn");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".submit");
const bullets = document.querySelectorAll(".bullet");

let max=2;
let current = 1;

firstNextBtn.addEventListener("click",()=>{
  slidePage.style.marginLeft="-25%";

  bullets[current-1].classList.remove("active");
  bullets[current].classList.add("active");
  animation = getComputedStyle(document.querySelectorAll('.bullet')[0], '::after').getPropertyValue('animation');
   console.log(animation);
  current +=1;
})

nextBtnSec.addEventListener("click",()=>{
  slidePage.style.marginLeft="-50%";
  bullets[current-1].classList.remove("active");
  // current +=1;
  setTimeout(() => {
    alert("tersubmit");
    location.reload();
  }, 800);
})

prevBtnSec.addEventListener("click",()=>{
  slidePage.style.marginLeft="0%";
  bullets[current-1].classList.remove("active");
  bullets[current-2].classList.add("active");
  current -=1;
})


$('#chooseFile').bind('change', function () {
  var filename = $("#chooseFile").val();
  if (/^\s*$/.test(filename)) {
    $(".file-upload").removeClass('active');
    $("#noFile").text("No file chosen..."); 
  }
  else {
    $(".file-upload").addClass('active');
    $("#noFile").text(filename.replace("C:\\fakepath\\", "")); 
  }
});

