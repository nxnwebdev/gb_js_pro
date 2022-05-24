const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

/*let getRequest = (url, cb) => { // не fetch
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status !== 200) {
                console.log('Error');
            } else {
                cb(xhr.responseText);
            }
        }
    };
    xhr.send();
};*/
let getRequest = (url) => {
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status !== 200) {
                    console.log('Error');
                    reject(xhr.responseText);
                } else {
                    console.log('ok');
                    resolve(xhr.responseText);
                }
            }
        };
        xhr.send();
    });
} 

let addEventToBtn = (className, container, req) => {
    container.addEventListener('click', (e) => {
        console.log(req);
        if(e.target.classList.contains(className)){
            console.log(e.target);
            getRequest(`${API}/${req}`);
        }
    });
}

class ProductList {
    constructor(
        container = '.products',
        textBtn = 'купить',
        classBtn = 'buy-btn',
        req = 'addToBasket.json'
    ){
        this.container = document.querySelector(container);
        this._goods = [];
        this._productsObjects = [];
        this.textBtn = textBtn;
        this.classBtn = classBtn;

        // this._fetchGoods();
        // this._render();
        this.getProducts()
            .then((data) => {
                this._goods = data;
                this._render();
                console.log(this.getTotalPrice());
                addEventToBtn(classBtn, this.container, req);
            });
    }

    // _fetchGoods() {
    //     getRequest(`${API}/catalogData.json`, (data) => {
    //         // console.log(data);
    //         this._goods = JSON.parse(data);
    //         this._render();
    //         console.log(this._goods);
    //     });
    // }

    getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(response => response.json())
            .catch(err => console.log(err));
    }

    getTotalPrice() {
        return this._productsObjects.reduce((accumulator, good) => accumulator + good.price, 0);
    }

    _render() {
        for (const product of this._goods) {
            const productObject = new ProductItem(product, this.textBtn, this.classBtn);
            //console.log(productObject);

            this._productsObjects.push(productObject);
            this.container.insertAdjacentHTML('beforeend', productObject.getHTMLString());
        }
    }
}

class ProductItem {
    constructor(
        product,
        btnText,
        classBtn = 'buy-btn',
        img = 'https://via.placeholder.com/200x150'
    ){
        this.id = product.id_product;
        this.title = product.product_name;
        this.price = product.price;
        this.img = img;
        this.btnText = btnText;
        this.classBtn = classBtn;
    }
    getHTMLString() {
        return `<div class="product-item" data-id="${this.id}">
                  <img src="${this.img}" alt="Some img">
                  <div class="desc">
                      <h3>${this.title}</h3>
                      <p>${this.price} \u20bd</p>
                      <button class="${this.classBtn}">${this.btnText}</button>
                  </div>
              </div>`;
    }
}

class CartList extends ProductList{
    constructor(
            container = '.cart-block',
            textBtn = 'удалить',
            classBtn = 'delete-btn',
            req = 'deleteFromBasket.json'
        ){
        super(container,textBtn,classBtn,req);
        this.getProducts('getBasket.json')
            .then((data) => {
                this._goods = data;
                this._render();
            });
            console.log(this.getTotalPrice());
                console.log(this.classBtn, this.container);
        this.open()
    }
    open(){
        document.querySelector('.btn-cart').addEventListener('click', (e)=>{
            
            e.target.nextElementSibling.classList.toggle('active');
         
        });
    }
    
}


const list = new ProductList();
const cartList = new CartList();
