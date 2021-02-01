window.onscroll = function() {
  wasScrolled()
};

function wasScrolled() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    botton = document.getElementById("go-to-top");
    botton.classList ? botton.classList.add("go-to-top-show") : botton.className += "go-to-top-show";
  } else {
    document.getElementById("go-to-top").classList.remove("go-to-top-show");
  }
}