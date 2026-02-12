/* ==================================================
   SAFE MASTER ENGINE
================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* =====================
     SCENE SLIDE SYSTEM
  ===================== */
  const scenes = document.querySelectorAll(".scene");

  function goToScene(id){
    scenes.forEach(s=>{
      s.classList.remove("active");
    });

    const next = document.getElementById(id);
    if(next){
      next.classList.add("active");
      window.scrollTo({top:0,behavior:"smooth"});
    }
  }

  const nextButtons = document.querySelectorAll(".next");

  nextButtons.forEach(btn=>{
    btn.addEventListener("click",()=>{
      const next = btn.dataset.next;
      if(next) goToScene(next);
    });
  });



  /* =====================
     OPTION B TRICK
  ===================== */
  const optionB = document.querySelector(".option-b");

  if(optionB){
    optionB.addEventListener("click",()=>{
      optionB.classList.add("rotate");

      setTimeout(()=>{
        optionB.innerText = "Option A";
      },300);
    });
  }



  /* =====================
     OPTION A → NAME SHOW
  ===================== */
  const s4Card = document.querySelector("#s4 .card");

  const optionAButtons = document.querySelectorAll('[data-next="s4"]');

  optionAButtons.forEach(btn=>{
    btn.addEventListener("click",()=>{
      if(s4Card){
        s4Card.innerHTML = "mujhe pata tha 😌❤️ <br><br> <b>Ilhan</b>";
      }
    });
  });



  /* =====================
     CURTAIN + VIDEO
  ===================== */
  const finalSection = document.getElementById("s25");

  if(finalSection){
    finalSection.addEventListener("click",()=>{

      const video = document.getElementById("finalVideo");
      const tapText = document.querySelector(".tapReveal");

      finalSection.classList.add("open");

      if(video){
        video.play().catch(()=>{});
      }

      if(tapText){
        tapText.style.display="none";
      }

    });
  }

});