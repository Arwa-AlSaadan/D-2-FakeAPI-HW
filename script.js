

let container = document.getElementById("container-s")


fetch('https://fakestoreapi.com/products' ,{method:"get"})
            .then(res=>res.json())
            .then((data)=> { for(let i=0;i<data.length;i++){

                let box = document.createElement("div");
                container.appendChild(box);
                box.classList.add('box-style');

                let title = document.createElement("p");
                title.innerText= data[i].title;
                title.classList.add('p-style');
                box.appendChild(title);

                let image = document.createElement("img");
                image.classList.add('img-style');
                image.src = data[i].image;
                box.appendChild(image);

                let price = document.createElement("p");
                price.innerText= `${data[i].price +" $"}`;
                box.appendChild(price);
            }})

            .catch((err)=> console.log(err))



