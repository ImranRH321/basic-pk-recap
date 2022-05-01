// async function info (){
//     const url = `https://randomuser.me/api/?results=5`
//     const resp = await fetch (url);
//     const data = await resp.json(); 
//     // console.log(data.results[0]);
// };
// info();


// const mealDbLoadData = searchText => {
//     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
//     fetch(url)
//     .then(res => res.json())
//     .then(data => displayLoad(data.meals))
// }
// mealDbLoadData('fish')

// const  displayLoad = user => {
//     const container = document.getElementById('container')
//    const div =  document.createElement('div')
// //    user.forEach(data  => { 
// //        console.log(data);
// //    div.innerHTML = `
// //    <h2>${data.strMeal}</h2>
// //    `;
// // });
 
// container.appendChild(div)
// }


const url = 'https://randomuser.me/api/?nat=gb&results=10';
const users = document.getElementById('container')
const userData = [];

fetch(url)
    .then(blob => blob.json())
    .then(data => userData.push(...data.results));

const markup = userData.map(user => {
    return `
        <li class="users__item">
            <figure class="user">
                <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}" class="user__avatar">
                <figcaption>
                    <p class="user__name">${user.name.first} ${user.name.last}</p>
                    <address class="user__address">
                        ${user.location.street} <br>
                        ${user.location.city} <br>
                        ${user.location.state} <br>
                        ${user.location.postcode}
                    </address>
                    <a href="tel:${user.phone}" class="user__contact">
                        <svg class="icon icon-email" viewBox="0 0 20 20" aria-hidden="true">
                            <path d="M14.608 12.172c0 .84.239 1.175.864 1.175 1.393 0 2.28-1.775 2.28-4.727 0-4.512-3.288-6.672-7.393-6.672-4.223 0-8.064 2.832-8.064 8.184 0 5.112 3.36 7.896 8.52 7.896 1.752 0 2.928-.192 4.727-.792l.386 1.607c-1.776.577-3.674.744-5.137.744-6.768 0-10.393-3.72-10.393-9.456 0-5.784 4.201-9.72 9.985-9.72 6.024 0 9.215 3.6 9.215 8.016 0 3.744-1.175 6.6-4.871 6.6-1.681 0-2.784-.672-2.928-2.161-.432 1.656-1.584 2.161-3.145 2.161-2.088 0-3.84-1.609-3.84-4.848 0-3.264 1.537-5.28 4.297-5.28 1.464 0 2.376.576 2.782 1.488l.697-1.272h2.016v7.057h.002zm-2.951-3.168c0-1.319-.985-1.872-1.801-1.872-.888 0-1.871.719-1.871 2.832 0 1.68.744 2.616 1.871 2.616.792 0 1.801-.504 1.801-1.896v-1.68z" />
                        </svg>
                    </a>
                    <a href="mailto:${user.email}" class="user__contact">
                        <svg class="icon icon-old-phone" viewBox="0 0 20 20" aria-hidden="true">
                            <path d="M17.256 12.253c-.096-.667-.611-1.187-1.274-1.342-2.577-.604-3.223-2.088-3.332-3.734C12.193 7.092 11.38 7 10 7s-2.193.092-2.65.177c-.109 1.646-.755 3.13-3.332 3.734-.663.156-1.178.675-1.274 1.342l-.497 3.442C2.072 16.907 2.962 18 4.2 18h11.6c1.237 0 2.128-1.093 1.953-2.305l-.497-3.442zM10 15.492c-1.395 0-2.526-1.12-2.526-2.5s1.131-2.5 2.526-2.5 2.526 1.12 2.526 2.5-1.132 2.5-2.526 2.5zM19.95 6c-.024-1.5-3.842-3.999-9.95-4C3.891 2.001.073 4.5.05 6s.021 3.452 2.535 3.127c2.941-.381 2.76-1.408 2.76-2.876C5.345 5.227 7.737 4.98 10 4.98s4.654.247 4.655 1.271c0 1.468-.181 2.495 2.76 2.876C19.928 9.452 19.973 7.5 19.95 6z" />
                        </svg>
                    </a>
                </figcaption>
            </figure>
        </li>
    `;
}).join('');

users.innerHTML = markup;