let nav         = document.querySelector(".nav");
let navItems    = document.querySelectorAll(".nav li");
let links       = document.querySelectorAll(".nav li a");
let slide       = document.querySelector("span.slide i");
let scrollTop   = document.querySelector(".top");
let settingBox  = document.querySelector(".setting-box");
let settingIcon = document.querySelector(".config");
let closeBtn    = document.querySelector(".close");
let navbar      = document.querySelector(".navbar");

navItems.forEach(item => {
  item.onclick = function()
  {
      item.parentNode.querySelectorAll("li").forEach(li => {
        li.classList.remove("active");
      });
      this.classList.add('active');
  }
});


links.forEach(link => {
  link.onclick = function(e)
  {
    e.preventDefault();
  }
});


slide.onclick = function(){
  window.scrollTo(0,window.innerHeight);
}


scrollTop.onclick = function(e){
  e.preventDefault();
  window.scrollTo(0,0);
}


this.onscroll = function()
{
  if( this.pageYOffset >= 400 )
  { 
    navbar.classList.add("animate__fadeInDown","fixed");
    scrollTop.style.opacity = "1";
    scrollTop.style.visibility = "visible";
  }
  else{
    navbar.classList.remove("animate__fadeInDown","fixed");
    scrollTop.style.opacity = "0";
    scrollTop.style.visibility = "hidden";

  }
}



settingIcon.onclick = function()
{
  this.style.left = "-32px";
  setTimeout(function(){

    settingBox.style.left = 0;

  },600)
}



closeBtn.onclick = function(){
  settingBox.style.left = "-45px";

  setTimeout(function(){
    settingIcon.style.left = 0;
  },800);
}


settingBox.querySelectorAll("ul li").forEach(item => {
  item.onclick = function()
  {
    document.documentElement.style.setProperty("--color",this.dataset.color);
  }
});
