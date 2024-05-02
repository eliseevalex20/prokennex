// var acc = document.getElementsByClassName("accordion");
//         var i;

//         for (i = 0; i < acc.length; i++) {
//             acc[i].addEventListener("click", function() {
//                 this.classList.toggle("active");
//                 var panel = this.nextElementSibling;
//                 if (panel.style.display === "block") {
//                     panel.style.display = "none";
//                 } else {
//                     panel.style.display = "block";
//                 }
//             });
//         }

// document.addEventListener('DOMContentLoaded', function() {
//   var currentLocation = window.location.pathname; 
//   var navLinks = document.querySelectorAll('.nav-link');
//   console.log(navLinks);
//   navLinks.forEach(function(link) {
//       console.log(link.getAttribute('href'));
//       console.log(currentLocation);
//       if (link.getAttribute('href') === currentLocation) {
//           console.log('das')
//           link.classList.add('active-nav-link');
//       }
//   });
// });

document.addEventListener('DOMContentLoaded', function() {
  var navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(function(link) {
      var href = link.getAttribute('href');
      var path = href.split('/').pop(); 
      var currentPath = window.location.pathname;
      var curPath = currentPath.split('/').pop();
      if (path === curPath || (path === 'shop.html' && curPath.includes('card'))) {
          link.classList.add('active-nav-link');
      }
  });
});

function toggleContent(contentId) {
  var contentDivs = document.querySelectorAll('.div-content-info');
  contentDivs.forEach(function(div) {
      if (div.id === contentId) {
          div.style.display = 'block';
      } else {
          div.style.display = 'none';
      }
  });
}
