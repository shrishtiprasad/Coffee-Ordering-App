// Add the coffee to local storage with key "coffee"

async function addItem(){
    try{
        let res = await fetch("https://masai-mock-api.herokuapp.com/coffee/menu");
        let data = await res.json();

        console.log(data.menu);
        append(data.menu);
    }
    catch(err){
        console.log(err);
    }
}

// fetch("https://masai-mock-api.herokuapp.com/coffee/menu")
//   .then(function(res){
//       return res.json();
//   })
//   .then(function(res){
//       console.log(res.menu);
//       append(res.menu);
//   })
//   .catch(function (err){
//       console.log(err);
//   })


addItem();

let arr = [];

function append(data){

    data.data.map(function(elem){

        let box = document.createElement('div');

        let img = document.createElement('img');
        img.src = elem.image;

        let name = document.createElement('h4');
        name.innerText = elem.title;

        let price = document.createElement('p');
        price.innerText = elem.price;

        let button = document.createElement('button');
        button.innerText = 'Add to Bucket';
        button.setAttribute('id', 'add_to_bucket');
        button.addEventListener('click', function(){
            addBucket(elem);
        })

        box.append(img, name, price, button);
        document.getElementById('menu').append(box);
    })
}
function addBucket(elem){

    arr.push(elem);
    localStorage.setItem('coffee', JSON.stringify(arr));
    document.getElementById('coffee_count').innerHTML = arr.length;
}