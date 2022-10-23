const chosenImage = `url(https://picsum.photos/id/${[
  Math.floor(Math.random() * 100),
]}/1024/768.jpg)`;

console.log(`chosenImage: ${chosenImage}`);

const body = document.querySelector('body');

body.style.backgroundImage = chosenImage;

// 'url(chosenImage)';
