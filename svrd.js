// const doc = document;
// const menuOpen = doc.querySelector(".menu");
// const menuClose = doc.querySelector(".close");
// const overlay = doc.querySelector(".overlay");

  // menuOpen.addEventListener("click",function(){
  //   overlay.classList.add("overlay--active");
  // });

  // menuClose.addEventListener("click",function(){
  //   overlay.classList.remove("overlay--active");
  // });


  $(".menu").on("click",function(){
  $(".overlay").toggleClass("overlay--active")
  })

 $(".close").on("click",function(){
 $(".overlay").removeClass("overlay--active")
 })
