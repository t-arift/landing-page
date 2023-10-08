alert('no backend connected 😉.. created by me')
let bar=document.querySelector('.b')
let nav2=document.querySelector('.nav2')

let check=0
bar.addEventListener('click',function(){
 if(check==0){
 nav2.style.display='flex'

 // nav2.style.marginTop='30px'
 check=1
 }
 else{
     nav2.style.display='none'
     
     // nav2.style.display='block'

     check=0
 }
})