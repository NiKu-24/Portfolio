const gallery1Images = [
  "./collections/Su/Barselona1.jpg",
  "./collections/Su/Barselona12.jpg",
  "./collections/Su/Barselona3.jpg",
  "./collections/Su/Barselona4.jpg",
  "./collections/Su/Barselona6.jpg",
  "./collections/Su/Barselona9.jpg",
  "./collections/Su/Fethiye_3558A.jpg",
  "./collections/Su/RHIN_0612.jpg",
  "./collections/Su/RHIN_0616.jpg",
  "./collections/Su/RHIN_0681.jpg",
  "./collections/Su/RHIN_0691.jpg",
  "./collections/Su/RHIN_0699.jpg",
  "./collections/Su/RHIN_0734.jpg",
  "./collections/Su/RHIN_0737.jpg",
  "./collections/Su/RHIN_0738.jpg",
  "./collections/Su/RHIN_0740A.jpg",
  "./collections/Su/RHIN_0768.jpg",
  "./collections/Su/RHIN_0789.jpg",
  "./collections/Su/Tayland_9130.jpg",
  "./collections/Su/Tayland_9155.jpg",
  "./collections/Su/Tayland_9615.jpg",
  "./collections/Su/Tayland_9654.jpg",
  "./collections/Su/Vize1.jpg",
  "./collections/Su/Vize11.jpg",
  "./collections/Su/Vize3.jpg",
  "./collections/Su/Vize4.jpg",
  "./collections/Su/Vize6.jpg",
  "./collections/Su/Vize7.jpg",
  "./collections/Su/Vize9.jpg",
  "./collections/Su/Yildizkoy_7641C.jpg"
];

const gallery2Images = [
  "./collections/Yansimalar/Yansimalar01.jpg",
  "./collections/Yansimalar/Yansimalar02.jpg",
  "./collections/Yansimalar/Yansimalar03.jpg",
  "./collections/Yansimalar/Yansimalar04.jpg",
  "./collections/Yansimalar/Yansimalar05.jpg",
  "./collections/Yansimalar/Yansimalar06.jpg",
  "./collections/Yansimalar/Yansimalar07.jpg",
  "./collections/Yansimalar/Yansimalar08.jpg",
  "./collections/Yansimalar/Yansimalar09.jpg",
  "./collections/Yansimalar/Yansimalar10.jpg"
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
