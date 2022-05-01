
const searchButton = document.getElementById('search_button') 
searchButton.addEventListener('click', loadData()) 

function loadData (){
    const phoneName = document.getElementById('phone').value;
    console.log(phoneName);
    // alert('hi')
    console.log('phone', phoneName);
}