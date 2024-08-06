const accessKey = "7GmowybR5J3lE6c_Tr-G4RZ_S3I1hhxnaiXqg1yZL50";
const url = "https://api.unsplash.com/search/photos?page=1&query=";

let input = document.querySelector('.searchInput');
let btn = document.querySelector('.searchButton');
let imageContainer = document.querySelector('.box');

async function getData(searchText) {
    imageContainer.innerHTML = '';

    let response = await fetch(url + searchText + `&client_id=${accessKey}`);
    let data = await response.json();

    if (data.results && data.results.length > 0) {
        data.results.forEach(i => {
            let card = document.createElement('div');
            card.classList.add('card', 'mb-4');
            card.style.width = '350px';
            card.style.height = '350px';
            card.style.overflow = 'hidden';
            imageContainer.appendChild(card);

            let link = document.createElement('a');
            link.href = i.links.html;
            link.target = '_blank';
            link.classList.add('h-100', 'w-100')
            card.appendChild(link);

            let image = document.createElement('img');
            image.classList.add('card-img-top');
            image.src = i.urls.small;
            image.style.width = '100%';
            image.style.height = '100%';
            image.style.display = 'block';            
            link.appendChild(image);
        });
    } else {
        let errMsg = document.createElement('p');
        errMsg.innerHTML = 'Sorry! Could not find data.';
        errMsg.classList.add('text-light', 'text-center', 'mt-5', 'display-6');
        imageContainer.appendChild(errMsg);
    }
}

btn.addEventListener('click', () => getData(input.value));
