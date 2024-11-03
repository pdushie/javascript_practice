let element = document.querySelector('body');
let style = window.getComputedStyle(element);
let currentBackground = style.backgroundColor;

function switchBackground() {
  backgroundColor = style.backgroundColor;
  if(backgroundColor !== 'rgb(0, 0, 0)')
  {
    document.querySelector('body').style.backgroundColor="black";
    document.querySelector('body').style.color="white";
    document.querySelector('#darkMode').textContent = "Light Mode";
  }
  else if(backgroundColor == 'rgb(0, 0, 0)') {
    document.querySelector('body').style.backgroundColor = currentBackground;
    document.querySelector('body').style.color="black";
    document.querySelector('#darkMode').textContent = "Dark Mode";
  }
  
}

document.querySelector('#darkMode').addEventListener("click", switchBackground);