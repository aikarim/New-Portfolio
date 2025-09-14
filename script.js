// Typing animation
const intro = "Hi, I'm ";
const nameText = "Abul Irfan Karim";
const typingSpan = document.querySelector('.typing-text');
const nameSpan = document.querySelector('.name');
let i=0, j=0;

function typeIntro(){
  if(i<intro.length){
    typingSpan.textContent += intro[i++];
    setTimeout(typeIntro,55);
  } else setTimeout(typeName,180);
}
function typeName(){
  if(j<nameText.length){
    nameSpan.textContent += nameText[j++];
    setTimeout(typeName,70);
  }
}

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click',()=>{
  document.body.classList.toggle('light');
  themeToggle.querySelector('i').className =
    document.body.classList.contains('light') ? 'fas fa-sun':'fas fa-moon';
});

// Placeholder for buttons
function showMessage(txt){ alert(txt); }

// Start
window.addEventListener('load',()=>{
  document.body.classList.remove('light'); // dark default
  typeIntro();
});
