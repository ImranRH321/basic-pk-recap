const user = () => {
  const users = document.getElementById("Search_user").value;
  if(user){
    alert("hi")
    searchApi(users);
  }else{
    console.log('container is bul');
  }
};

// searchApi
const searchApi = users => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${users}`;
  fetch(url)
    .then(res => res.json())
    .then(data => userLoadData(data.data));
};

const userLoadData = data => {
  // console.log(data);
  let price = 12000;
  const userContainer = document.getElementById("userDetail");
  data.slice(0, 10).forEach(product => {
    // console.log(product);
    const div = document.createElement("div");
    div.classList.add('col')
    div.classList.add('col-md-3')
    div.innerHTML = `
    <div class="card h-100 shadow ">
      <img src="${product.image}" class="card-img-top border" alt="...">
      <div class="card-body">
        <h5 class="card-title">${product.phone_name}</h5>
        <h4 class="card-text">${product.slug}</h4>
        <p class="card-text">${product.brand}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">${++price + ' Taka'}</small>
      </div>
      </b>
        <button onclick="detailId('${product.slug}')" class="mx-auto w-50 px-4 bg-dark text-warning">Details</button>
    
    </div>

        `;
    userContainer.appendChild(div);
  });
};

// detail 
const detailId = id => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  fetch(url)
  .then(res => res.json())
  .then(data => dislayIdDetial(data.data)) 
}

const dislayIdDetial = data => {
  console.log(data);
  const ContainerId = document.getElementById('idContainer')
  const div = document.createElement('card');
  div.innerHTML = `
  <div class="w-50 mx-auto border border-success">
  <img class="w-50" src="${data.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.name}</h5>
    <h5 class="card-title">${data.mainFeatures.memory}</h5>
    <h5 class="card-title">${data.mainFeatures.storage}</h5>
    <h5 class="card-title">${data.mainFeatures.sensors[0]  + ' , ' + data.mainFeatures.sensors[2] +  ' , ' + data.mainFeatures.sensors[3]  + ' , ' + data.mainFeatures.sensors[4]}</h5>
    <p class="card-text">${data.releaseDate? data.releaseDate: 'no releaseDate XX'}</p>
  </div>
  </div>
  `;
  ContainerId.appendChild(div)



}

// <!-- local store  -->

// <!-- bayer site  -->
