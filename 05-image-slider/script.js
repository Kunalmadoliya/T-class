const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const slides = document.getElementById("slidess");

const images = [
  "https://images.unsplash.com/photo-1754535113699-9cf82795f6a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTl8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1773402208827-97c7cc7d4246?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1761839257661-c2392c65ea72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
  "https://plus.unsplash.com/premium_photo-1741805870438-457e1b6eaa39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D",
];

const img = document.createElement("img");
slides.append(img);

let currentIndex = 0;

function updateSlide(step) {
  currentIndex = (currentIndex + step + images.length) % images.length;
  img.src = images[currentIndex];
}

img.src = images[currentIndex];

prevBtn.addEventListener("click", () => updateSlide(-1));
nextBtn.addEventListener("click", () => updateSlide(1));
