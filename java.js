const boxs = document.querySelectorAll(".boxfaq");
boxs.forEach(box => {
    box.addEventListener("click", function() {
        const jawab = box.querySelector(".anser");
        const icon = box.querySelector(".imgsoal");
        if (jawab.style.display == "" || jawab.style.display == "none") {
            jawab.style.display = "flex";
            icon.style.transform = "rotate(90deg)";
        } else {
            jawab.style.display = "none";
            icon.style.transform = "rotate(0deg)";
        }
    })
});

const ham = document.querySelector(".ham");
const mobilenav = document.querySelector(".mobilenav");
ham.addEventListener("click", function(){
  if(ham.classList.contains("off")){
    mobilenav.style.top = "100px";
    ham.classList.add("on");
    ham.classList.remove("off");
  }else{
    mobilenav.style.top = "-130px";
    ham.classList.add("off");
    ham.classList.remove("on");
  }
})

