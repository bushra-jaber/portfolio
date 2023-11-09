const navbar=document.querySelector('.navbar')
const headerContentSpan=document.querySelector('.header-content span')
const loading=document.querySelector('.loading')
const scrolltopbuttn=document.querySelector('.scroll-top')
const aboutsection=document.querySelector('.about')
const navlinks=document.querySelectorAll('.nav-link')
window.addEventListener('scroll',function(){
   
    if(window.scrollY>headerContentSpan.offsetTop){
        navbar.style.backgroundColor=" #4e4e4e7a"
    }
  else{
    navbar.style.backgroundColor="transparent"
  }
  if(window.scrollY>aboutsection.offsetTop){
    scrolltopbuttn.classList.remove('opacity-0','invisible')
  }else{
    scrolltopbuttn.classList.add('opacity-0','invisible') 
  }
})
window.addEventListener('load', function(){
this.setTimeout(function(){
loading.classList.add('opacity-0','invisible')
document.body.style.overflow='auto'
},2000)
})
scrolltopbuttn.addEventListener('click',function(){
    window.scroll({
        top:0,
        behavior:"smooth"
    })
})
for(let i=0;i<navlinks.length;i++){
    navlinks[i].addEventListener('click',function(e){
e.preventDefault()
document.querySelector('.nav-link.active').classList.remove('active')
navlinks[i].classList.add('active')
let currentId=this.getAttribute('href')
let targetSection=document.querySelector(currentId)
window.scroll({
    top:targetSection.offsetTop,
    behavior:"smooth"
})
    })
}