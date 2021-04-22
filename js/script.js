function myfun(){
   let body = document.querySelector('body')
   body.classList.toggle('body-dark-theme')

   let mainItem = document.querySelectorAll('.main-list-item')
  let link= document.querySelectorAll('.country-link')
  link.forEach((item,i)=>{
      item.classList.toggle('dark-mode')
  })
   mainItem.forEach((item,i)=>{
      item.classList.toggle('dark-mode')
   })  
 document.querySelector('.mode-link').classList.toggle('mode-white')
   let headerNav=document.querySelector('.header-nav')
   headerNav.classList.toggle('dark-mode')
   
 document.querySelector('.inside-nav').classList.toggle('dark-mode')
  
}