import {
    createHeader
} from '../../modules/ui.js'
const id = location.search.split('=').at(-1)

fetch(`https://api.themoviedb.org/3/movie/${id}?language=ru-RU`, {
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODAzYWUxZGEwOGU3M2RmM2ZjMTI2OGMzNTE2NWNjMiIsInN1YiI6IjY0MjdlZWY4OGE4OGIyMDBkNTMyOGQ1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8WByVMOVhx2M7eo1SLPb3cPkt2NSfzLg53Afm1_dr-M`
    }
})
    .then(res => res.json())
    .then(res => {
    console.log(res);
        const body = document.querySelector('.body')
        body.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${res.backdrop_path})`
        let left_box_img = document.querySelector('.left_box')
        left_box_img.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${res.poster_path})`
        let place=document.querySelector('.gig')
      
            place.innerHTML+=`
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
        <h3>${res.overview.slice(0,200)+'...'}</h3>
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
            new Chart(c,config)
            new Chart(ctx, config);
        }
    )

let header = document.querySelector('header')
createHeader(header)


