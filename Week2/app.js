const welcomeText = document.querySelector('.banner');
const banner = document.querySelector('.main-header');
const navicon = document.querySelector('.navicon');
const mobile_menu = document.querySelector('.mobile_menu');
const hiddencol = document.querySelectorAll('.hiddencol');
const visualhiddden = document.querySelector('.visualhiddden');
const viewMoreButtun = document.querySelector('.ctabutton');
const cta = document.querySelector('.cta');

banner.addEventListener('click', () =>{
  welcomeText.textContent = 'Have a Good Time!';
});

navicon.addEventListener('click', () =>{
  mobile_menu.classList.toggle('move');
  }
);

viewMoreButtun.addEventListener('click', () => {
  for (let i = 0; i < hiddencol.length; i +=1){
    hiddencol[i].classList.toggle('hiddencol');
  }
  if (cta.innerHTML === 'View More'){
    cta.innerHTML = 'View Less';
  } else {
    cta.innerHTML = 'View More';
  };
});

function changeFunction(x) {
  x.classList.toggle('change');
}
