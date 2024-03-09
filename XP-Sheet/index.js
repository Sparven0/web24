function openNav() {
    document.getElementById("mySidebar").style.width = "275px";//had to change from 250 to 275 for email to fit//
    document.getElementById("main").style.marginLeft = "275px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }



  window.onscroll = function() {myFunction()};
  let title = document.getElementById('title');
  let sticky = document.getElementById('sticky');

  function myFunction() {
    if (window.pageYOffset >= sticky) {
        title.classList.add('sticky')
    }
    else{title.classList.remove('sticky');
}
  }

  let topBtn = document.getElementById('topBtn');

  window.onscroll = function() {scrollFunction()};
  function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        topBtn.style.display = 'block';
    } else {topBtn.style.display = 'none'}
  }
  function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;}