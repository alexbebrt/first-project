function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

var article_name = document.getElementsByClassName('article_name');

for(var i = 0; i<article_name.length; i++){
  article_name[i].style.fontsize = "16px";
  article_name[i].style.fontWeight = "600";
  article_name[i].style.textTransform = "Uppercase";
  article_name[i].style.padding = "15px 0";
}

var article = document.querySelectorAll('article');
article.forEach(function(currentValue) {
  currentValue.addEventListener("mouseenter", function(){
    currentValue.style.boxShadow = "10px 10px 5px -4px rgba(0,0,0,0.56)";
    currentValue.style.width = "33%";
    currentValue.style.transition = "0.5s";
    // currentValue.childNodes[1].src = "https://cdn.shopify.com/s/files/1/0261/2615/5855/products/UNISEX_STARSHIP_PULLOVER_BONE_BACKcopy_800x.png?v=1634582513";
  });
});

article.forEach(function(currentValue) {
  currentValue.addEventListener("mouseleave", function(){
    currentValue.style.boxShadow = "none";
    currentValue.style.width = "30%";
  });
});


article[0].addEventListener("mouseenter", function() {
  article[0].childNodes[1].src = "https://static.skatepro.com/product/1500/enuff-cherry-blossom-complete-skateboard-jn.jpg";
});

article[0].addEventListener("mouseleave", function() {
  article[0].childNodes[1].src = "https://static.skatepro.com/product/1500/enuff-cherry-blossom-complete-skateboard-2l.jpg";
});

article[1].addEventListener("mouseenter", function() {
  article[1].childNodes[1].src = "https://static.skatepro.com/product/1500/enuff-skully-complete-skateboard-t8.jpg";
});

article[1].addEventListener("mouseleave", function() {
  article[1].childNodes[1].src = "https://static.skatepro.com/product/1500/enuff-skully-complete-skateboard-bw.jpg";
});

article[2].addEventListener("mouseenter", function() {
  article[2].childNodes[1].src = "https://static.skatepro.com/product/1500/enuff-cherry-blossom-complete-skateboard-jn.jpg";
});

article[3].addEventListener("mouseleave", function() {
  article[3].childNodes[1].src = "https://cdn.skatepro.com/product/440/toy-machine-sect-complete-skateboard-jy.jpg";
});

article[3].addEventListener("mouseenter", function() {
  article[3].childNodes[1].src = "https://cdn.skatepro.com/product/440/toy-machine-sect-complete-skateboard-ts.jpg";
});

article[2].addEventListener("mouseleave", function() {
  article[2].childNodes[1].src = "https://cdn.skatepro.com/product/440/globe-g1-complete-skateboard-rj.jpg";
});

article[4].addEventListener("mouseenter", function() {
  article[4].childNodes[1].src = "https://cdn.skatepro.com/product/440/madrid-street-complete-skateboard-vk.jpg";
});

article[4].addEventListener("mouseleave", function() {
  article[4].childNodes[1].src = "https://cdn.skatepro.com/product/440/madrid-street-complete-skateboard-cf.jpg";
});

article[5].addEventListener("mouseenter", function() {
  article[5].childNodes[1].src = "https://cdn.skatepro.com/product/440/flip-complete-skateboard-fw.jpg";
});

article[5].addEventListener("mouseleave", function() {
  article[5].childNodes[1].src = "https://cdn.skatepro.com/product/440/flip-complete-skateboard-6x.jpg";
});
//button
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}