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
    constructor(id, producto, precio) {
        this.id = id;
        this.producto = producto;
        this.precio = precio;
    };
};

let Producto1 = new Producto("p1", "One Piece Volumen 1", "img/1.jpg", "100", "$29.990", "Zapatillas negras");
let Producto2 = new Producto("p2", "Berserk Volume 36", "img/2.jpg", "100", "$29.990", "Zapatillas verdes");
let Producto3 = new Producto("p3", "Black Clover Volumen 3", "img/3.jpg", "100", "$16.490", "Zapatillas blancas");

let Productos = [Producto1, Producto2, Producto3];

localStorage.setItem("Productos", JSON.stringify(Productos));
let p = JSON.parse(localStorage.getItem("Productos"));

let Carrito = [];
localStorage.setItem("Carrito", JSON.stringify(Carro));

window.onload = function() {
    contenedor = document.getElementById('contenedor');
    console.log(p);
    p.forEach(element => {
        contenedor.innerHTML += `
        <div class="col" style="color: white;">
            <img class="imgProduc card" src=`+ element.foto +` href="">
            <p>`+ element.producto+`</p>
            <p>`+ element.descripción+`</p>
            <p>`+ element.precio+`</p>
            <p>`+ element.stock+`</p>
            <button class="btn btn-primary" OnClick="agregarAlCarro('`+ element.id +`')">Agregar al carro</button>
        </div>
        `;
    }); 
}

function agregarAlCarro(id){
    console.log(id);
    Carrito = new Carro(id, "", 0);
    localStorage.setItem("Carrito", JSON.stringify(Carrito));
}