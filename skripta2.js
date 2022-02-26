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
  article[0].childNodes[1].src = "https://cdn.skatepro.com/product/440/toy-machine-pro-doll-skateboard-deck-ay.jpg";
});

article[0].addEventListener("mouseleave", function() {
  article[0].childNodes[1].src = "https://cdn.skatepro.com/product/440/toy-machine-pro-doll-skateboard-deck-pn.jpg";
});

article[1].addEventListener("mouseenter", function() {
  article[1].childNodes[1].src = "https://cdn.skatepro.com/product/440/girl-vibration-og-skateboard-deck-7r.jpg";
});

article[1].addEventListener("mouseleave", function() {
  article[1].childNodes[1].src = "https://cdn.skatepro.com/product/440/girl-vibration-og-skateboard-deck-8r.jpg";
});

article[2].addEventListener("mouseenter", function() {
  article[2].childNodes[1].src = "https://cdn.skatepro.com/product/440/toy-machine-monster-skateboard-deck-14.jpg";
});

article[2].addEventListener("mouseleave", function() {
  article[2].childNodes[1].src = "https://cdn.skatepro.com/product/440/toy-machine-monster-skateboard-deck-66.jpg";
});

article[3].addEventListener("mouseenter", function() {
  article[3].childNodes[1].src = "https://cdn.skatepro.com/product/440/blind-og-stacked-stamp-skateboard-deck-x.jpg";
});

article[3].addEventListener("mouseleave", function() {
  article[3].childNodes[1].src = "https://cdn.skatepro.com/product/440/blind-og-stacked-stamp-skateboard-deck-l6.jpg";
});

article[4].addEventListener("mouseenter", function() {
  article[4].childNodes[1].src = "https://cdn.skatepro.com/product/440/heart-supply-insignia-check-skateboard-deck-jw.jpg";
});

article[4].addEventListener("mouseleave", function() {
  article[4].childNodes[1].src = "https://cdn.skatepro.com/product/440/heart-supply-insignia-check-skateboard-deck-kv.jpg";
});

article[5].addEventListener("mouseenter", function() {
  article[5].childNodes[1].src = "https://cdn.skatepro.com/product/440/flip-penny-toms-friends-skateboard-deck-d3.jpg";
});

article[5].addEventListener("mouseleave", function() {
  article[5].childNodes[1].src = "https://cdn.skatepro.com/product/440/flip-penny-toms-friends-skateboard-deck-6a.jpg";
});

article[6].addEventListener("mouseenter", function() {
  article[6].childNodes[1].src = "https://cdn.skatepro.com/product/440/heart-supply-bam-margera-skateboard-deck-qc.jpg";
});

article[6].addEventListener("mouseleave", function() {
  article[6].childNodes[1].src = "https://cdn.skatepro.com/product/440/heart-supply-bam-margera-skateboard-deck-nb.jpg";
});