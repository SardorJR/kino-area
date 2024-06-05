import {
    createHeader
} from '../../modules/ui.js'
const id = location.search.split('=').at(-1)

fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODAzYWUxZGEwOGU3M2RmM2ZjMTI2OGMzNTE2NWNjMiIsInN1YiI6IjY0MjdlZWY4OGE4OGIyMDBkNTMyOGQ1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8WByVMOVhx2M7eo1SLPb3cPkt2NSfzLg53Afm1_dr-M`
    }
})
    .then(res => res.json())
    .then(movieData => {
        console.log("Год выпуска:", movieData.release_date.slice(0, 4));
        console.log(movieData);

        console.log("Страна происхождения:", movieData.production_countries.map(country => country.name).join(", "));

        fetch(`https://api.themoviedb.org/3/movie/${id}/credits`, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODAzYWUxZGEwOGU3M2RmM2ZjMTI2OGMzNTE2NWNjMiIsInN1YiI6IjY0MjdlZWY4OGE4OGIyMDBkNTMyOGQ1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8WByVMOVhx2M7eo1SLPb3cPkt2NSfzLg53Afm1_dr-M`
            }
        })
            .then(res => res.json())
            .then(creditsData => {
                console.log("Credits Data:", creditsData);
                let place3 = document.querySelector('.right_foot')
                place3.innerHTML += `
<div class="item">
<h4>Художник:</h4>
<h5>${creditsData.crew.find(member => member.job === 'Art Director')?.name || 'N/A'}</h5>
</div>
<div class="item">
<h4>Монтаж:</h4>
<h5>${creditsData.crew.find(member => member.job === 'Editor')?.name || 'N/A'}</h5>
</div>
<div class="item">
<h4>Жанр:</h4>
<h5>${movieData.genres.map(genre => genre.name).join(", ") || 'N/A'}</h5>
</div>
<div class="item">
<h4>Сборы в мире:</h4>
<h5>${movieData.revenue.toLocaleString() || 'N/A'}</h5>
</div>
<div class="item">
<h4>Премьера(мир):</h4>
<h5>${movieData.release_date || 'N/A'}</h5>
</div>
<div class="item">
<h4>Премьера(РФ):</h4>
<h5>${movieData.release_dates?.results.find(r => r.iso_3166_1 === 'RU')?.release_dates[0]?.release_date || 'N/A'}</h5>
</div>
<div class="item">
<h4>Возраст:</h4>
<h5>${movieData.release_dates?.results.find(r => r.iso_3166_1 === 'US')?.release_dates[0]?.certification || 'N/A'}</h5>
</div>
<div class="item">
<h4>Время:</h4>
<h5>${movieData.runtime ? `${movieData.runtime} мин.` : 'N/A'}</h5>
</div>
`
                let place2 = document.querySelector('.left_foot');
                place2.innerHTML += `
            <div class="item">
                <h4>Год:</h4>
                <h5>${movieData.release_date.slice(0, 4)}</h5>
            </div>
            <div class="item">
                <h4>Страна:</h4>
                <h5>${movieData.production_countries.map(country => country.name).join(", ")}</h5>
            </div>
            <div class="item">
                <h4>Слоган:</h4>
                <h5>${movieData.tagline || 'N/A'}</h5>
            </div>
            <div class="item">
                <h4>Режиссер:</h4>
                <h5>${creditsData.crew.find(member => member.job === 'Director')?.name || 'N/A'}</h5>
            </div>
            <div class="item">
                <h4>Сценарий:</h4>
                <h5>${creditsData.crew.filter(member => member.job === 'Screenplay' || member.job === 'Writer').map(writer => writer.name).join(", ") || 'N/A'}</h5>
            </div>
            <div class="item">
                <h4>Продюсер:</h4>
                <h5>${creditsData.crew.filter(member => member.job === 'Producer').slice(0, 3).map(producer => producer.name).join(" , ") || 'N/A'}</h5>
            </div>
            <div class="item">
                <h4>Оператор:</h4>
                <h5>${creditsData.crew.find(member => member.job === 'Director of Photography')?.name || 'N/A'}</h5>
            </div>
            <div class="item">
                <h4>Композитор:</h4>
                <h5>${creditsData.crew.find(member => member.job === 'Original Music Composer')?.name || 'N/A'}</h5>
            </div>
            
        `;
            })
            .catch(error => console.error("Произошла ошибка при получении данных о составе:", error));
    })
    .catch(error => console.error("Произошла ошибка:", error));

fetch(`https://api.themoviedb.org/3/movie/${id}?language=ru-RU`, {
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODAzYWUxZGEwOGU3M2RmM2ZjMTI2OGMzNTE2NWNjMiIsInN1YiI6IjY0MjdlZWY4OGE4OGIyMDBkNTMyOGQ1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8WByVMOVhx2M7eo1SLPb3cPkt2NSfzLg53Afm1_dr-M`
    }
})
    .then(res => res.json())
    .then(res => {
        console.log(res);
        const body = document.querySelector('body')
        body.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${res.backdrop_path})`
        let left_box_img = document.querySelector('.left_box')
        left_box_img.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${res.poster_path})`
        let place = document.querySelector('.gig')

        place.innerHTML += `
            <div class="name_film">
            <h2>${res.title}</h2>
        </div>
        <h4>${res.original_title}</h4>
        <div class="charts">
            <canvas id="myChart"></canvas>
            <canvas id="myhart"></canvas>
        </div>
        <div class="boxes">
            <p>Kinoarea</p>
            <p>IMDb</p>
        </div>
        <h3>${res.overview.slice(0, 200) + '...'}</h3>
            `

        const data = {
            labels: [

            ],
            datasets: [{
                label: 'My First Dataset',
                data: [res.vote_average],
                backgroundColor: [
                    '#4BCB36'
                ],
                hoverOffset: 4
            }]
        };

        const config = {
            type: 'doughnut',
            data: data,
        };
        const ctx = document.getElementById('myChart').getContext('2d');
        const c = document.querySelector('#myhart')
        new Chart(c, config)
        new Chart(ctx, config);
    }
    )

let header = document.querySelector('header')
createHeader(header)


// fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
//     headers: {
//         Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODAzYWUxZGEwOGU3M2RmM2ZjMTI2OGMzNTE2NWNjMiIsInN1YiI6IjY0MjdlZWY4OGE4OGIyMDBkNTMyOGQ1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8WByVMOVhx2M7eo1SLPb3cPkt2NSfzLg53Afm1_dr-M`
//     }
// })
//     .then(res => res.json())
//     .then(movieData => {
//         console.log("Год выпуска:", movieData.release_date.slice(0, 4));
// console.log(movieData);

//         console.log("Страна происхождения:", movieData.production_countries.map(country => country.name).join(", "));
//         let place2 = document.querySelector('.left_foot')
//         place2.innerHTML += `
//         <div class="item">
//         <h4>Год:</h4>
//         <h5>${movieData.release_date.slice(0, 4)}</h5>
//     </div>
//     <div class="item">
//         <h4>Страна:</h4>
//         <h5>${movieData.production_countries.map(country => country.name).join(", ")}</h5>
//     </div>
//     <div class="item">
//         <h4>Слоган:</h4>
//         <h5>${movieData.tagline || 'N/A'}</h5>
//     </div>
//     <div class="item">
//         <h4>Режиссер:</h4>
//         <h5>${creditsData.crew.find(member => member.job === 'Director')?.name || 'N/A'}</h5>
//     </div>
//     <div class="item">
//         <h4>Сценарий:</h4>
//         <h5>${creditsData.crew.filter(member => member.job === 'Screenplay' || member.job === 'Writer').map(writer => writer.name).join(", ") || 'N/A'}</h5>
//     </div>
//     <div class="item">
//         <h4>Продюсер:</h4>
//         <h5>${creditsData.crew.filter(member => member.job === 'Producer').map(producer => producer.name).join(", ") || 'N/A'}</h5>
//     </div>
//     <div class="item">
//         <h4>Оператор:</h4>
//         <h5>${creditsData.crew.find(member => member.job === 'Director of Photography')?.name || 'N/A'}</h5>
//     </div>
//     <div class="item">
//         <h4>Композитор:</h4>
//         <h5>${creditsData.crew.find(member => member.job === 'Original Music Composer')?.name || 'N/A'}</h5>
//     </div>
// `;


//     })
//     .catch(error => console.error("Произошла ошибка:", error));
let iframe=document.querySelector('iframe')
fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, {
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODAzYWUxZGEwOGU3M2RmM2ZjMTI2OGMzNTE2NWNjMiIsInN1YiI6IjY0MjdlZWY4OGE4OGIyMDBkNTMyOGQ1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8WByVMOVhx2M7eo1SLPb3cPkt2NSfzLg53Afm1_dr-M`
    }
})
    .then(res => res.json())
    .then(res => {
        const trailer = res.results.find(item => item.type === 'Trailer')
        iframe.src = `https://www.youtube.com/embed/${trailer.key}?autoplay=1`
        // nam.innerHTML = item.title
    })