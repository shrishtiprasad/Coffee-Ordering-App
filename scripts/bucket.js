// On clicking remove button the item should be removed from DOM as well as localstorage.

let bucketData = JSON.parse(localStorage.getItem('coffee'));
console.log(bucketData);

bucketData.map(function(elem, index){

    let box = document.createElement('div');

    let img = document.createElement('img');
    img.src = elem.image;

    let name = document.createElement('h4');
    name.innerText = elem.title;

    let price = document.createElement('p');
    price.innerText = elem.price;

    let button = document.createElement('button');
    button.innerText = 'remove';
    button.setAttribute('id', 'remove_coffee');
    button.addEventListener('click', function(){
        removeBucket(elem, index);
    })

    box.append(img, name, price, button);
    document.getElementById('bucket').append(box);
})
function removeBucket(elem, index){

    bucketData.splice(index, 1);
    localStorage.setItem('coffee', JSON.stringify(bucketData));
    window.location.reload();
}
let total = bucketData.reduce(function(sum, elem){
    return sum + Number(elem.price);
},0);
document.getElementById('total_amount').innerHTML = total;