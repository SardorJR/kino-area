import {
    createHeader,
    createFooter
} from '../../modules/ui.js'
let footer=document.querySelector('footer')
createFooter(footer)
let grid_2 = document.querySelector('.grid_22')
let id = location.search.split('=').at(-1)
fetch(`https://api.themoviedb.org/3/person/${id}/movie_credits`, {
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODAzYWUxZGEwOGU3M2RmM2ZjMTI2OGMzNTE2NWNjMiIsInN1YiI6IjY0MjdlZWY4OGE4OGIyMDBkNTMyOGQ1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8WByVMOVhx2M7eo1SLPb3cPkt2NSfzLg53Afm1_dr-M`
    }
})
    .then(res => res.json())
    .then(res => {
        console.log(res);

        reload_now(res.cast.slice(0, 4), grid_2);
    })
    function reload_now(arr, place) {
        place.innerHTML = ''
        for (let item of arr) {
            // console.log(item);
            place.insertAdjacentHTML('beforeend', `
          <div class="item22">
         
            <img class='a' src="https://image.tmdb.org/t/p/original${item.poster_path}" alt="">
            <a class='movie' href='/pages/movie/?id=${item.id}'>${item.title}</a>
            <p>Боевик</p>
          </div>
    
        `)
    
        }
    }
let header = document.querySelector('header')
createHeader(header)


fetch(`https://api.themoviedb.org/3/person/${id}`, {
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODAzYWUxZGEwOGU3M2RmM2ZjMTI2OGMzNTE2NWNjMiIsInN1YiI6IjY0MjdlZWY4OGE4OGIyMDBkNTMyOGQ1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8WByVMOVhx2M7eo1SLPb3cPkt2NSfzLg53Afm1_dr-M`
    }
})
    .then(res => res.json())
    .then(res => {
        let actor_photo = document.querySelector('.actor_photo');
        let place = document.querySelector('.nix');
        console.log(res);

        actor_photo.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${res.profile_path})`;

        // Fetch combined credits
        fetch(`https://api.themoviedb.org/3/person/${id}/combined_credits`, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODAzYWUxZGEwOGU3M2RmM2ZjMTI2OGMzNTE2NWNjMiIsInN1YiI6IjY0MjdlZWY4OGE4OGIyMDBkNTMyOGQ1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8WByVMOVhx2M7eo1SLPb3cPkt2NSfzLg53Afm1_dr-M`
            }
        })
            .then(creditsRes => creditsRes.json())
            .then(creditsRes => {
                const genres = new Set();
                creditsRes.cast.forEach(movie => {
                    if (movie.genre_ids) {
                        movie.genre_ids.forEach(id => genres.add(id));
                    }
                });

                place.innerHTML += `
                    <h2>${res.name}</h2>
                    <h3>${res.name}</h3>
                    <div class="infa">
                        <a href="#">Информация</a>
                        <h4>Биография</h4>
                    </div>
                    <div class="if">
                        <div class="ite">
                            <p>Карьера:</p>
                            <a href="#">${res.known_for_department}</a>
                        </div>
                        <div class="ite">
                            <p>Рост:</p>
                            <a href="#">${res.height || 'Unknown'}</a>
                        </div>
                        <div class="ite">
                            <p>Дата рождения:</p>
                            <a href="#">${res.birthday}</a>
                        </div>
                        <div class="ite">
                            <p>Место рождения:</p>
                            <a href="#">${res.place_of_birth}</a>
                        </div>
                        <div class="ite">
                            <p>Жанры:</p>
                            <a href="#">${[...genres].slice(0,5).join(', ')}</a>
                        </div>
                        <div class="ite">
                            <p>Всего фильмов:</p>
                            <a href="#">${creditsRes.cast.length}</a>
                        </div>
                    </div>
                `;
            })
            .catch(error => console.error('Error fetching credits:', error));
    })
    .catch(error => console.error('Error fetching person details:', error));