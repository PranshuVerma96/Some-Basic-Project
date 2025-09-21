let arr = [
  {
    dp: 'https://praveenbhat.net/wp-content/uploads/2024/08/Screenshot-2024-08-10-191725.png',
    story: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?cs=srgb&dl=pexels-pixabay-417173.jpg&fm=jpg'
  },
  {
    dp: 'https://thumbs.dreamstime.com/b/cool-young-man-fashion-model-hairstyle-hand-hair-beautiful-boy-passes-his-his-intense-gaze-eye-catching-64866209.jpg',
    story: 'https://cdn.pixabay.com/photo/2022/08/31/16/22/silhouette-7423726_1280.jpg'
  },
  {
    dp: 'https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?cs=srgb&dl=pexels-alipazani-2584269.jpg&fm=jpg',
    story: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'
  },
  {
    dp: 'https://images.unsplash.com/photo-1562572159-4efc207f5aff?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fHww',
    story: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'
  }
];

const storiyan = document.querySelector('#storiyan');
const fullScreen = document.querySelector('#full-screen');

let clutter = '';
arr.forEach((elem, idx) => {
  clutter += `<div class="story">
                <img id="${idx}" src="${elem.dp}" alt="">
              </div>`;
});

storiyan.innerHTML = clutter;

// click to show full screen story
storiyan.addEventListener('click', (e) => {
  if(e.target.tagName === 'IMG'){
    const idx = e.target.id;
    fullScreen.style.backgroundImage = `url(${arr[idx].story})`;
    fullScreen.style.display = 'block';

    setTimeout(() => {
      fullScreen.style.display = 'none';
    }, 3000);
  }
});
