let navItems = document.querySelectorAll(".nav li");
let links = document.querySelectorAll(".nav li a");
let slide = document.querySelector("span.slide i");
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
  window.scrollTo(0,window.innerHeight)  
}
