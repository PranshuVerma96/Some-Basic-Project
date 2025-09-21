var istatus = document.querySelector('h5')

var btn = document.querySelector('#add')
var check = 0
btn.addEventListener('click',function(){
  if(check == 0){
   istatus.innerHTML = 'Friends'
   btn.innerHTML = 'Remove Friend'
  istatus.style.color = 'green'
  console.log('pat gaya');
  check = 1
  
  }else{
      istatus.innerHTML = 'Stranger'
  istatus.style.color = 'red'
  console.log('pat gaya');
  check = 0
  }

})

// var removeFriend  = document.querySelector('#remove')
// removeFriend.addEventListener('click',function(){
//   istatus.innerHTML = 'Not Friend'
//   istatus.style = 'red'
// })






