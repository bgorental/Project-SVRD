/**
 * @author Bharath Gorental
 * @email bgorental@okkular.io
 * @create date 2021-06-28 06:49:45
 * @modify date 2021-07-02 15:47:58
 * @desc [description]
 */
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
