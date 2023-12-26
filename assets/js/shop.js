const renderData = document.querySelector(".renderData");

async function getData() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    console.log(data);

    data.map((ele) => {
        console.log(ele.images);

        let mainDiv = document.createElement("div");
        let createImgEle = document.createElement("img");
        let createTitle = document.createElement("p");
        let createPriceEle = document.createElement("p");
        let btnEle = document.createElement("i");

        let createPriceText = document.createTextNode(`Price : ${ele.price}`);
        let createTextTitle = document.createTextNode(`${ele.title}`.slice(0,25));

        btnEle.setAttribute("class", "fa-solid fa-cart-shopping cartbtn");
        createImgEle.setAttribute("src", ele.image);
        createImgEle.setAttribute("class", "myImages");
        mainDiv.setAttribute("class", "box-main");
        createTitle.setAttribute("class", "prodTitle");
        createPriceEle.setAttribute("class", "price")
        
        createTitle.appendChild(createTextTitle);
        createPriceEle.appendChild(createPriceText);
        
        mainDiv.appendChild(createImgEle);
        mainDiv.appendChild(createTitle);
        mainDiv.appendChild(btnEle);
        mainDiv.appendChild(createPriceEle);
        renderData.appendChild(mainDiv);
        

    });
}

getData();