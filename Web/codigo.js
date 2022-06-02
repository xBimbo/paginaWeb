class Producto {

    constructor(id, producto, foto, stock, precio, descripción) {
        this.id = id;
        this.producto = producto;
        this.foto = foto;
        this.stock = stock;
        this.precio = precio;
        this.descripción = descripción;
    };

    getId() {
        return this.id;
    };

    setId(id) {
        this.id = id;
    };

    getProducto() {
        return this.producto;
    };

    setProducto(producto) {
        this.producto = producto;
    };

    getFoto() {
        return this.foto;
    };

    setFoto(foto) {
        this.foto = foto;
    };

    getDescripción(){
        this.descripción = descripción;
    };

    setDescripción(descripción){
        this.descripción = descripción;
    };

    toString() {
        return this.id + ", " + this.producto + ", " + this.foto + "," + this.stock + "," + this.precio + "," + this.descripción;
    };

};

class Carro {
    constructor(id, precio) {
        this.id = id;
        this.precio = precio;
    };
};

let Producto1 = new Producto("1", "One Piece Volumen 1", "img/1.jpg", "100", "$29.990", "Zapatillas negras");
let Producto2 = new Producto("2", "Berserk Volume 36", "img/2.jpg", "100", "$29.990", "Zapatillas verdes");
let Producto3 = new Producto("3", "Black Clover Volumen 3", "img/3.jpg", "100", "$16.490", "Zapatillas blancas");

let Productos = [Producto1, Producto2, Producto3];

localStorage.setItem("Productos", JSON.stringify(Productos));
let p = JSON.parse(localStorage.getItem("Productos"));

let Carrito = [];
localStorage.setItem("Carrito", JSON.stringify(Carro));

window.onload = function() {
    contenedor = document.getElementById('productos');
    console.log(p);
    p.forEach(element => {
        // contenedor.innerHTML += `
        // <div class="col" style="color: white;">
        //     <img class="imgProduc card" src=`+ element.foto +` href="">
        //     <p>`+ element.producto+`</p>
        //     <p>`+ element.descripción+`</p>
        //     <p>`+ element.precio+`</p>
        //     <p>`+ element.stock+`</p>
        //     <button class="btn btn-primary" OnClick="agregarAlCarro('` + element.id + `','` + element.precio + `')">Agregar al carro</button>
        // </div>
        // `;

        contenedor.innerHTML += `
        <div class="col">
        <div class="card">
        <div class="card-img"> <img style="width: 100%;" src=`+ element.foto +` > </div>
        <div class="card-info">
          <p class="text-title">`+ element.producto +` </p>
          <p class="text-body">`+ element.descripción +`</p>
        </div>
        <div class="card-footer">
        <span class="text-title">`+ element.precio +`</span>
        <div class="card-button" OnClick="agregarAlCarro('` + element.id + `','` + element.precio + `')">
          <svg class="svg-icon" viewBox="0 0 20 20">
            <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
            <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
            <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
          </svg>
        </div>
        </div></div>
        </div>
        `;
    }); 

    // carro = document.getElementById('carro');
    // carro.innerHTML = `
    //     <div class="col"></div>
    // `;
    

}

function agregarAlCarro(id, precio){
    carro = document.getElementById('carro');
    carro.innerHTML = "";
    precio = precio.replace("$",""); //Elimina el $ del precio
    precio = precio.replace(".",""); //Elimina el . del precio
    precio = parseInt(precio); //Convierte el precio a entero
    auxCarrito = new Carro(id, precio); //Crea un objeto carro con el id y precio del producto
    Carrito.push(auxCarrito); //Agrega el objeto carro al arreglo de carro
    localStorage.setItem("Carrito", JSON.stringify(Carrito)); //Guarda el arreglo de carro en el localStorage
    console.log(Carrito);
    let total = 0;
    Carrito.forEach(element => {
        total += element.precio;
    });
    console.log("total: " + total);
    Carrito.forEach(element => {
        carro.innerHTML += `
            <div class="row bg-white">
                `+ element.precio +`
            </div>
        `;
    });
    carro.innerHTML += `
        <div class="col" style="background-color: white; width: 100px; heigth: 100px;">`+ total +`</div>
    `;
}
