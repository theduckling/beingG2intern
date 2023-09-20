fetch('https://fakestoreapi.com/products/1')
    .then(res => res.json())
    .then(json => {
        console.log(json)
        console.log('item', json)
        const ul = document.querySelector("ul")
        const li = document.createElement('li')
        li.textContent = json.title;
        console.log(li)
        ul.appendChild(li)
    })


// .catch((output) => confirm.log(title));