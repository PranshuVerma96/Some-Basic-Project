let main = document.querySelector('#main');
let cursur = document.querySelector('.cursor')

main.addEventListener('mousemove',function(dets){
  cursur.style.left = dets .x +'px'
  cursur.style.top = dets.y +'px'

  
})