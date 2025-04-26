const gallery1Images = [
    "./collections/Collection1/photo1.jpg",
    "./collections/Collection1/photo2.jpg",
    "./collections/Collection1/photo3.jpg"
];

const gallery2Images = [
    "./collections/Collection2/photo1.jpg",
    "./collections/Collection2/photo2.jpg",
    "./collections/Collection2/photo3.jpg"
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

// Default show home
showPage('home');
