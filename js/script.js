const gallery1Images = [
  { thumb: "./collections/Su/Thumbnail/Barselona1.jpg", full: "./collections/Su/Barselona1.jpg" },
  { thumb: "./collections/Su/Thumbnail/Barselona12.jpg", full: "./collections/Su/Barselona12.jpg" },
  { thumb: "./collections/Su/Thumbnail/Barselona3.jpg", full: "./collections/Su/Barselona3.jpg" },
  { thumb: "./collections/Su/Thumbnail/Barselona4.jpg", full: "./collections/Su/Barselona4.jpg" },
  { thumb: "./collections/Su/Thumbnail/Barselona6.jpg", full: "./collections/Su/Barselona6.jpg" },
  { thumb: "./collections/Su/Thumbnail/Barselona9.jpg", full: "./collections/Su/Barselona9.jpg" },
  { thumb: "./collections/Su/Thumbnail/Fethiye_3558A.jpg", full: "./collections/Su/Fethiye_3558A.jpg" },
  { thumb: "./collections/Su/Thumbnail/RHIN_0612.jpg", full: "./collections/Su/RHIN_0612.jpg" },
  { thumb: "./collections/Su/Thumbnail/RHIN_0616.jpg", full: "./collections/Su/RHIN_0616.jpg" },
  { thumb: "./collections/Su/Thumbnail/RHIN_0681.jpg", full: "./collections/Su/RHIN_0681.jpg" },
  { thumb: "./collections/Su/Thumbnail/RHIN_0691.jpg", full: "./collections/Su/RHIN_0691.jpg" },
  { thumb: "./collections/Su/Thumbnail/RHIN_0699.jpg", full: "./collections/Su/RHIN_0699.jpg" },
  { thumb: "./collections/Su/Thumbnail/RHIN_0734.jpg", full: "./collections/Su/RHIN_0734.jpg" },
  { thumb: "./collections/Su/Thumbnail/RHIN_0737.jpg", full: "./collections/Su/RHIN_0737.jpg" },
  { thumb: "./collections/Su/Thumbnail/RHIN_0738.jpg", full: "./collections/Su/RHIN_0738.jpg" },
  { thumb: "./collections/Su/Thumbnail/RHIN_0740A.jpg", full: "./collections/Su/RHIN_0740A.jpg" },
  { thumb: "./collections/Su/Thumbnail/RHIN_0768.jpg", full: "./collections/Su/RHIN_0768.jpg" },
  { thumb: "./collections/Su/Thumbnail/RHIN_0789.jpg", full: "./collections/Su/RHIN_0789.jpg" },
  { thumb: "./collections/Su/Thumbnail/Tayland_9130.jpg", full: "./collections/Su/Tayland_9130.jpg" },
  { thumb: "./collections/Su/Thumbnail/Tayland_9155.jpg", full: "./collections/Su/Tayland_9155.jpg" },
  { thumb: "./collections/Su/Thumbnail/Tayland_9615.jpg", full: "./collections/Su/Tayland_9615.jpg" },
  { thumb: "./collections/Su/Thumbnail/Tayland_9654.jpg", full: "./collections/Su/Tayland_9654.jpg" },
  { thumb: "./collections/Su/Thumbnail/Vize1.jpg", full: "./collections/Su/Vize1.jpg" },
  { thumb: "./collections/Su/Thumbnail/Vize11.jpg", full: "./collections/Su/Vize11.jpg" },
  { thumb: "./collections/Su/Thumbnail/Vize3.jpg", full: "./collections/Su/Vize3.jpg" },
  { thumb: "./collections/Su/Thumbnail/Vize4.jpg", full: "./collections/Su/Vize4.jpg" },
  { thumb: "./collections/Su/Thumbnail/Vize6.jpg", full: "./collections/Su/Vize6.jpg" },
  { thumb: "./collections/Su/Thumbnail/Vize7.jpg", full: "./collections/Su/Vize7.jpg" },
  { thumb: "./collections/Su/Thumbnail/Vize9.jpg", full: "./collections/Su/Vize9.jpg" },
  { thumb: "./collections/Su/Thumbnail/Yildizkoy_7641C.jpg", full: "./collections/Su/Yildizkoy_7641C.jpg" }
];

const gallery2Images = [
  { thumb: "./collections/Yansimalar/Thumbnail/Yansimalar01.jpg", full: "./collections/Yansimalar/Yansimalar01.jpg" },
  { thumb: "./collections/Yansimalar/Thumbnail/Yansimalar02.jpg", full: "./collections/Yansimalar/Yansimalar02.jpg" },
  { thumb: "./collections/Yansimalar/Thumbnail/Yansimalar03.jpg", full: "./collections/Yansimalar/Yansimalar03.jpg" },
  { thumb: "./collections/Yansimalar/Thumbnail/Yansimalar04.jpg", full: "./collections/Yansimalar/Yansimalar04.jpg" },
  { thumb: "./collections/Yansimalar/Thumbnail/Yansimalar05.jpg", full: "./collections/Yansimalar/Yansimalar05.jpg" },
  { thumb: "./collections/Yansimalar/Thumbnail/Yansimalar06.jpg", full: "./collections/Yansimalar/Yansimalar06.jpg" },
  { thumb: "./collections/Yansimalar/Thumbnail/Yansimalar07.jpg", full: "./collections/Yansimalar/Yansimalar07.jpg" },
  { thumb: "./collections/Yansimalar/Thumbnail/Yansimalar08.jpg", full: "./collections/Yansimalar/Yansimalar08.jpg" },
  { thumb: "./collections/Yansimalar/Thumbnail/Yansimalar09.jpg", full: "./collections/Yansimalar/Yansimalar09.jpg" },
  { thumb: "./collections/Yansimalar/Thumbnail/Yansimalar10.jpg", full: "./collections/Yansimalar/Yansimalar10.jpg" }
];

function generateGallery(id, images) {
    const container = document.getElementById(id);
    container.innerHTML = '';
    images.forEach((img, index) => {
        const image = document.createElement('img');
        image.src = img.thumb;
        image.alt = "Thumbnail";
        image.classList.add('thumbnail');
        image.onclick = () => openModal(img.full, images, index);
        container.appendChild(image);
    });
}

let currentGallery = [];
let currentIndex = 0;

function openModal(imageUrl, galleryImages, index) {
    currentGallery = galleryImages;
    currentIndex = index;
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    modalImg.src = imageUrl;
    modal.style.display = "flex";
}

function showImage(index) {
    if (index >= 0 && index < currentGallery.length) {
        currentIndex = index;
        const modalImg = document.getElementById('modal-img');
        modalImg.src = currentGallery[currentIndex].full;
    }
}

document.getElementById('prevBtn').onclick = (e) => {
    e.stopPropagation();
    showImage(currentIndex - 1);
};

document.getElementById('nextBtn').onclick = (e) => {
    e.stopPropagation();
    showImage(currentIndex + 1);
};

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}

function showImage(index) {
    if (index >= 0 && index < currentGallery.length) {
        currentIndex = index;
        const modalImg = document.getElementById('modal-img');
        modalImg.src = currentGallery[currentIndex].full;
    }
}

// Arrow buttons
document.getElementById('prevBtn').onclick = (e) => {
    e.stopPropagation();
    showImage(currentIndex - 1);
};

document.getElementById('nextBtn').onclick = (e) => {
    e.stopPropagation();
    showImage(currentIndex + 1);
};

// Initialize
generateGallery('gallery1', gallery1Images);
generateGallery('gallery2', gallery2Images);
showPage('home');
