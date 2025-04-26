const gallery1Images = [
    "./collections/Su/photo1.jpg",
    "./collections/Su/photo2.jpg",
    "./collections/Su/photo3.jpg"
];

const gallery2Images = [
    "./collections/Yansimalar/photo1.jpg",
    "./collections/Yansimalar/photo2.jpg",
    "./collections/Yansimalar/photo3.jpg"
];

function generateGallery(id, images) {
    const container = document.getElementById(id);
    container.innerHTML = '';
    images.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = "Portfolio Image";
        container.appendChild(img);
    });
}

generateGallery('gallery1', gallery1Images);
generateGallery('gallery2', gallery2Images);

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';

    document.querySelectorAll('.menu a').forEach(link => {
        link.classList.remove('active');
    });
    const activeLink = document.getElementById('link-' + pageId);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

showPage('home');
