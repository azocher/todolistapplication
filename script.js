document.addEventListener('DOMContentLoaded', function() {

  console.log('DOM content loaded');

  document.getElementById('grayButton').onclick = switchGray;
  document.getElementById('whiteButton').onclick = switchWhite;

  function switchGray() {
    console.log("this is working");
    document.body.style.backgroundColor = 'gray';
    document.body.style.color= 'white';
  };

  function switchWhite() {
    console.log("this is working2222 <- anna wanted this");
    document.body.style.backgroundColor = 'white';
    document.body.style.color= 'black';
  };
});
