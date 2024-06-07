import {
    createHeader,
    createFooter
} from './modules/ui.js'
let footer=document.querySelector('.footers')
createFooter(footer)
var movieScroll = document.getElementById("movie_scroll");
var scrollMovie = document.querySelector(".scroll_movie");

movieScroll.addEventListener("input", function () {
    var value = this.value;
    var scrollWidth = scrollMovie.scrollWidth - scrollMovie.clientWidth;
    var scrollPosition = (value / 100) * scrollWidth;
    scrollMovie.scrollLeft = scrollPosition;
});

scrollMovie.addEventListener("scroll", function () {
    var scrollWidth = scrollMovie.scrollWidth - scrollMovie.clientWidth;
    var scrollPosition = (scrollMovie.scrollLeft / scrollWidth) * 100;
    movieScroll.value = scrollPosition;
});


// VITE_BASE_URL=https://api.themoviedb.org/3/movie
// VITE_API_KEY=Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODAzYWUxZGEwOGU3M2RmM2ZjMTI2OGMzNTE2NWNjMiIsInN1YiI6IjY0MjdlZWY4OGE4OGIyMDBkNTMyOGQ1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8WByVMOVhx2M7eo1SLPb3cPkt2NSfzLg53Afm1_dr-M


// const grid = document.querySelector('.grid')

// fetch('https://api.themoviedb.org/3/movie/now_playing', {
//   headers: {
//     Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODAzYWUxZGEwOGU3M2RmM2ZjMTI2OGMzNTE2NWNjMiIsInN1YiI6IjY0MjdlZWY4OGE4OGIyMDBkNTMyOGQ1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8WByVMOVhx2M7eo1SLPb3cPkt2NSfzLg53Afm1_dr-M
//     `
//   }
// })
//   .then(res => res.json())
//   .then(res =>
//     reload_now(res.results, grid)
//   )
// function reload_now(arr, place) {
//   place.innerHTML=''
//   for (let item of arr) {
//     place += `
//     <div class="item">
//     <img src="https://image.tmdb.org/t/p/original${item.poster_path}" alt="">
//     <span>Побег из Претории</span>
//     <p>${item.title}</p>
//   </div>
//     `
//   }
// }
// let audio2 = new Audio('/img/povezlo-povezlo.mp3')
// let audio = new Audio('/img/o-privet.mp3')

let orig_header = document.querySelector('.orig')
createHeader(orig_header)


const grid = document.querySelector('.grid')
let scroll_movie = document.querySelector('.scroll_movie')
let iframe = document.querySelector('iframe')
let showAll = false;
let body = document.body
let grids = document.querySelector('.grids')
fetch('https://api.themoviedb.org/3/movie/now_playing', {
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODAzYWUxZGEwOGU3M2RmM2ZjMTI2OGMzNTE2NWNjMiIsInN1YiI6IjY0MjdlZWY4OGE4OGIyMDBkNTMyOGQ1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8WByVMOVhx2M7eo1SLPb3cPkt2NSfzLg53Afm1_dr-M`
    }
})
    .then(res => res.json())
    .then(res => {
     
        reload_2(res.results, scroll_movie, iframe);
        reload_now(res.results.slice(0, 8), grid);
       

    })
fetch('https://api.themoviedb.org/3/movie/upcoming?language=ru-RU', {
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODAzYWUxZGEwOGU3M2RmM2ZjMTI2OGMzNTE2NWNjMiIsInN1YiI6IjY0MjdlZWY4OGE4OGIyMDBkNTMyOGQ1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8WByVMOVhx2M7eo1SLPb3cPkt2NSfzLg53Afm1_dr-M`
    }
})
    .then(res => res.json())
    .then(res => {
        reload_now(res.results.slice(0,4), grids);
    })


function reload_now(arr, place) {
    place.innerHTML = ''
    for (let item of arr) {
        // console.log(item);
        place.insertAdjacentHTML('beforeend', `
      <div class="item">
     
        <img class='a' src="https://image.tmdb.org/t/p/original${item.poster_path}" alt="">
        <a class='movie' href='/pages/movie/?id=${item.id}'>${item.title}</a>
        <p>Боевик</p>
      </div>

    `)

    }

    let item = document.querySelectorAll('.a');
    item.forEach(i => {
        i.onmouseenter = () => {
            body.style.backgroundImage = `url(${i.src})`;
        }
    });


}





let new_film = document.querySelector('.new_film')
new_film.onclick = () => {
    fetch('https://api.themoviedb.org/3/movie/now_playing', {
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODAzYWUxZGEwOGU3M2RmM2ZjMTI2OGMzNTE2NWNjMiIsInN1YiI6IjY0MjdlZWY4OGE4OGIyMDBkNTMyOGQ1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8WByVMOVhx2M7eo1SLPb3cPkt2NSfzLg53Afm1_dr-M`
        }
    })
        .then(res => res.json())
        .then(res => {

            if (!showAll) {
                reload_now(res.results, grid)
                new_film.innerHTML = 'показать первые 8'
                showAll = true
            } else {
                reload_now(res.results.slice(0, 8), grid)
                new_film.innerHTML = 'показать все новинки'
            }
        }
        )

}
let nam = document.querySelector('.name')

function reload_2(arr, place, iframe) {
    place.innerHTML = ''
    for (let item of arr) {
        const boxItem = document.createElement('div');
        boxItem.classList.add('box_item');

        const item1 = document.createElement('div');
        item1.classList.add('item1');
        item1.style.backgroundImage = `url('https://image.tmdb.org/t/p/original${item.backdrop_path}')`;

        const img = document.createElement('img');
        img.src = '/img/Polygon 2 (1).png';
        img.classList.add('scale')
        img.alt = '';

        const span = document.createElement('span');
        span.textContent = item.title;
        boxItem.id = item.id
        // Добавляем img и span внутрь элемента item1
        item1.appendChild(img);

        // Добавляем item1 и span внутрь элемента boxItem
        boxItem.appendChild(item1);
        boxItem.appendChild(span);

        // Добавляем boxItem в конец контейнера place
        place.appendChild(boxItem);


        item1.onclick = () => {
            fetch(`https://api.themoviedb.org/3/movie/${item.id}/videos`, {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODAzYWUxZGEwOGU3M2RmM2ZjMTI2OGMzNTE2NWNjMiIsInN1YiI6IjY0MjdlZWY4OGE4OGIyMDBkNTMyOGQ1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8WByVMOVhx2M7eo1SLPb3cPkt2NSfzLg53Afm1_dr-M`
                }
            })
                .then(res => res.json())
                .then(res => {
                    const trailer = res.results.find(item => item.type === 'Trailer')
                    iframe.src = `https://www.youtube.com/embed/${trailer.key}?autoplay=1`
                    nam.innerHTML = item.title
                })
        }
    }
}


let grid_2 = document.querySelector('.grid_2')

fetch('https://api.themoviedb.org/3/movie/popular', {
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODAzYWUxZGEwOGU3M2RmM2ZjMTI2OGMzNTE2NWNjMiIsInN1YiI6IjY0MjdlZWY4OGE4OGIyMDBkNTMyOGQ1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8WByVMOVhx2M7eo1SLPb3cPkt2NSfzLg53Afm1_dr-M`
    }
})
    .then(res => res.json())

    .then(res => {
        reload_now(res.results.slice(0, 4), grid_2)
    })
// function rel_popular(arr, place) {
//     place.innerHTML = ''
//     for (let item of arr) {
//         place.insertAdjacentHTML('beforeend', `
//     <div class="item">
//             <img src="https://image.tmdb.org/t/p/original${item.poster_path}" alt="">
//             <span>${item.title}</span>
//             <p>Триллер</p>
//           </div>
//     `)
//     }
// }
const links = document.querySelectorAll('.active');

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        links.forEach(l => l.classList.remove('acti'));
        link.classList.add('acti');
        audio.play()
    });
});




const linkss = document.querySelectorAll('.active2');


linkss.forEach(lin => {
    lin.addEventListener('click', (event) => {
        event.preventDefault();

        linkss.forEach(l => l.classList.remove('act'));
        lin.classList.add('act');
        audio2.play()
    });
});
let elem2 = document.querySelector('.elem2')
let flex = document.querySelector('.flexes')
fetch('https://api.themoviedb.org/3/person/popular?language=en-US&page=1', {
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODAzYWUxZGEwOGU3M2RmM2ZjMTI2OGMzNTE2NWNjMiIsInN1YiI6IjY0MjdlZWY4OGE4OGIyMDBkNTMyOGQ1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8WByVMOVhx2M7eo1SLPb3cPkt2NSfzLg53Afm1_dr-M`
    }
})
    .then(res => res.json())
    .then(res => {
        relPath(res.results.slice(0, 2), flex)
        Info(res.results.slice(3), elem2)
    })
let number = 3
function Info(arr, place) {
    for (let item of arr) {
        place.insertAdjacentHTML('beforeend', `
        <a class="elem_2" href=/pages/actor/index.html?id=${item.id}>
        
            
                <div class="el">
                    <h3>${item.name}</h3>
                    <span>Quentin Tarantino</span>
                    <p>57 лет</p>
                </div>
            
            <p class="yel-father"><span class="yel">${number++} -е место<span/></p>
            </a>
    `)
    }

}
let num = 1

function relPath(arr, place) {
    place.innerHTML = ''
    for (let item of arr) {
        // console.log(item);
        place.insertAdjacentHTML('beforeend', `
    <a  href="/pages/actor/index.html?id=${item.id}" class="elem" style="background-image: url(https://image.tmdb.org/t/p/original${item.profile_path});">
    <p><b>${num++}<b/>-е место</p>
    <div class="dannie">
      <h3>${item.name}</h3>
      <span>${item.name}</span>
      <p>57 лет</p>
    </div>
  </a>
    `)
    }
}


function fetchMoviesByGenre(genreId) {
    let key = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODAzYWUxZGEwOGU3M2RmM2ZjMTI2OGMzNTE2NWNjMiIsInN1YiI6IjY0MjdlZWY4OGE4OGIyMDBkNTMyOGQ1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8WByVMOVhx2M7eo1SLPb3cPkt2NSfzLg53Afm1_dr-M`;

    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=${genreId}`, {
        headers: {
            Authorization: key
        }
    })
        .then(res => res.json())
        .then(res => {
            reload_now(res.results.slice(0, 8), grid)
            const movies = res.results;


            movies.forEach(movie => {
                const releaseYear = movie.release_date ? movie.release_date.slice(0, 4) : "Неизвестно";
                console.log(`${movie.title} (${releaseYear})`);
            });
        }
        );


}

document.querySelector('.b').onclick = () => fetchMoviesByGenre(53);
document.querySelector('.bb').onclick = () => fetchMoviesByGenre(28);
document.querySelector('.travel').onclick = () => fetchMoviesByGenre(12);
document.querySelector('.comedya').onclick = () => fetchMoviesByGenre(35);
document.querySelector('.fantasy').onclick = () => fetchMoviesByGenre(878);
document.querySelector('.drama').onclick = () => fetchMoviesByGenre(18);



let all = document.querySelector('.all')

all.onclick = () => {
    let key = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODAzYWUxZGEwOGU3M2RmM2ZjMTI2OGMzNTE2NWNjMiIsInN1YiI6IjY0MjdlZWY4OGE4OGIyMDBkNTMyOGQ1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8WByVMOVhx2M7eo1SLPb3cPkt2NSfzLg53Afm1_dr-M`;

    fetch(`https://api.themoviedb.org/3/discover/movie`, {
        headers: {
            Authorization: key
        }
    })
        .then(res => res.json())
        .then(res => reload_now(res.results.slice(0, 8), grid));

}


function fetchMoviesByYear(year) {
    let key = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODAzYWUxZGEwOGU3M2RmM2ZjMTI2OGMzNTE2NWNjMiIsInN1YiI6IjY0MjdlZWY4OGE4OGIyMDBkNTMyOGQ1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8WByVMOVhx2M7eo1SLPb3cPkt2NSfzLg53Afm1_dr-M`;

    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&primary_release_year=${year}`, {
        headers: {
            Authorization: key
        }
    })
        .then(res => res.json())
        .then(res => {
            reload_now(res.results.slice(0, 4), grid_2); // Перезагрузка информации на странице
        });
}

// Получаем ссылки на все элементы с годами
let yearLinks = document.querySelectorAll('.year-link');

// Перебираем каждый элемент и назначаем ему обработчик события при клике
yearLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Отменяем стандартное поведение ссылки


        yearLinks.forEach(link => {
            link.style.color = ''; // Удаляем цвет
        });

        const year = this.textContent; // Получаем текст (год) из ссылки
        fetchMoviesByYear(year); // Вызываем функцию для загрузки фильмов по году
        this.style.color = 'white'; // Добавляем белый цвет выбранной ссылке
        audio.play()
    });
});