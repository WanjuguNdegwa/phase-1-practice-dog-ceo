console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    const imageContainer = document.getElementById('dog-image-container');
    const breedContainer = document.getElementById('dog-breeds');

    let breeds;

    fetch(imgUrl)
        .then((res) => res.json())
        .then((res) => {
            res.message.forEach(url => {
                const img = document.createElement('img');
                img.setAttribute('src', url);
                img.style.width = '200px';
                imageContainer.appendChild(img);
            });
        });

    fetch(breedUrl)
        .then((res) => res.json())
        .then((res) => {
            breeds = Object.keys(res.message);
            breeds.forEach(breed => {
                const li = document.createElement('li');
                li.innerText = breed;
                li.setAttribute('class', 'dog-breed');

                li.addEventListener('click', (e) => {
                    e.target.classList.toggle('red');
                })

                breedContainer.appendChild(li);
            });
        })

    const breedFilter = document.getElementById('breed-dropdown');
    breedFilter.addEventListener('change', (e) => {
        breedContainer.replaceChildren();
        const letter = e.target.value;
        breeds
            .filter(breed => breed.startsWith(letter)) 
            .forEach(breed => {
                const li = document.createElement('li');
                li.innerText = breed;
                li.setAttribute('class', 'dog-breed');

                li.addEventListener('click', (e) => {
                    e.target.classList.toggle('red');
                })

                breedContainer.appendChild(li);
            });
    })
})
