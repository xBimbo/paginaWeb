class Producto {

    constructor(id, producto, foto, stock, precio, descripcion) 
    {
        this.id = id;
        this.producto = producto;
        this.foto = foto;
        this.stock = stock;
        this.precio = precio;
        this.descripcion = descripcion;
    }

    actualizarProducto() {
        let idproducto = JSON.parse(localStorage.getItem("idproducto"));
        let productosLS = JSON.parse(localStorage.getItem("Productos"));
        producto = new Producto("NULL","NO EXISTE","img/null.png","0","0","NO DESCRIPCIÓN Ö !");
        if (productosLS==null) {
            return;
        }
        var contador = 0;
        while (contador < productosLS.length) {
            if (productosLS[contador].id == idproducto) {
                producto = new Producto(
                    productosLS[contador].id, 
                    productosLS[contador].producto,
                    productosLS[contador].foto,
                    productosLS[contador].stock,
                    productosLS[contador].precio,
                    productosLS[contador].descripcion
                                                                            );
                break;
            }
            contador++;
        }
    }
    
    getId() 
    {
        return this.id;
    }

    setId(id) 
    {
        this.id = id;
    }

    getProducto() 
    {
        return this.producto;
    }

    setProducto(producto) 
    {
        this.producto = producto;
    }

    getFoto() 
    {
        return this.foto;
    }

    setFoto(foto) 
    {
        this.foto = foto;
    }

    getDescripción()
    {
        this.descripcion = descripcion;
    }

    setDescripción(descripcion)
    {
        this.descripcion = descripcion;
    }

    toString() 
    {
        return this.id + ", " + this.producto + ", " + this.foto + "," + this.stock + "," + this.precio + "," + this.descripcion;
    }

}

class Carrito {
    constructor() {
        this.productos = [];
        this.getProductos();
    }

    convertirJSONtoProducto(element) {
        let producto = new Producto(element.id, element.producto, element.foto, element.stock, element.precio, element.descripcion);
        return producto;
    }

    carritoExist() {
        if (localStorage.getItem("Carrito") === null) return false;
        else return true;
    }

    //Nos actualiza el carrito
    getProductos() {
        this.productos = [];
        if (this.carritoExist()) 
        {
            let productosJSON = JSON.parse(localStorage.getItem("Carrito"));
            productosJSON.forEach( element => {
                this.productos.push(this.convertirJSONtoProducto(element));
            });
        }
        else return this.productos;
    }

    pushProducto(producto, cantidad) {
        if (cantidad==null) {
            alert("Cantidad Incorrecta"); return;
        }
        if (cantidad<1) {
            alert("Cantidad Incorrecta"); return;
        }
        if(producto.id == "NULL") {
            alert("Error al agregar este producto"); return;
        }
        if(cantidad!=Math.round(cantidad)) {
            alert("Error. Ingrese números enteros"); return;
        }
        if(cantidad>producto.stock) {
            alert("Error. Superaste el Stock"); return;
        }
        if(!this.carritoExist()) {
            localStorage.setItem("Carrito", JSON.stringify([]));
        }
        let carritoLS = JSON.parse(localStorage.getItem("Carrito"));

        if(!this.idExiste(producto.id)) {
            producto.cantidad = parseInt(cantidad);
            producto.precioTotal = parseInt(cantidad*producto.precio);
            if(carritoLS.push(producto)){
                localStorage.setItem("Carrito",JSON.stringify(carritoLS));
                console.log(carritoLS);
            }
            // alert("Se ha agregado al Carrito!");
        } else {
            if (parseInt(carritoLS[this.buscarIndex(producto.id)].cantidad) + parseInt(cantidad)>producto.stock){
                alert("Error. Superaste el Stock"); return;
            }
            carritoLS[this.buscarIndex(producto.id)].cantidad = parseInt(carritoLS[this.buscarIndex(producto.id)].cantidad) + parseInt(cantidad);
            carritoLS[this.buscarIndex(producto.id)].precioTotal = parseInt(carritoLS[this.buscarIndex(producto.id)].cantidad*producto.precio);
            localStorage.setItem("Carrito",JSON.stringify(carritoLS));
            // alert("Se ha actualizado stock del producto en el Carrito!");
        }
    }


    buscarIndex(idproducto) {
        let carritoLS = JSON.parse(localStorage.getItem("Carrito"));
        var contador = 0;
        if (carritoLS==null) {
            return null;
        }
        var contador = 0;
        while (contador < carritoLS.length) {
            if (carritoLS[contador].id == idproducto) {
                // alert("Se encuentra en "+contador);
                return contador;
            }
            contador++;
        }
        // alert("No toi");
        return null;
    }


    idExiste(idproducto) {
        let carritoLS = JSON.parse(localStorage.getItem("Carrito"));
        if (carritoLS==null) {
            return false;
        }
        var contador = 0;
        while (contador < carritoLS.length) {
            if (carritoLS[contador].id == idproducto) {
                // alert("Existe!");
                return true;
            }
            contador++;
        }
        // alert("No toi");
        return false;
    }


}







var DesZap1 = 'Forum Low Zapatilla Urbana Hombre: Más que una zapatilla, es una declaración de estilo. La adidas Forum entró en escena en 1984'+ 
              'y conquistó corazones tanto en las canchas como en el mundo de la música. Esta versión combina la estética de los 80,'+ 
              'la energía explosiva del baloncesto y el clásico refuerzo lateral en forma de X para crear un diseño de caña baja pensado para las calles';

var DesZap2 =  'Forum Mid Zapatilla Urbana Hombre: Nike Blazer Mid 77 Vintage. Zapatillas. ESTILO VINTAGE. Las zapatillas Nike Blazer Mid '+
               '77 Vintage aprovechan el aspecto de la vieja escuela del básquet de Nike con un acabado de entresuela vintage,'+ 
               'lo que hace que parezca que las has estado guardando durante años. La parte superior de cuero y sintético brinda un soporte cómodo.'+ 
               'El tratamiento vintage en la entresuela proporciona un aspecto de la vieja escuela. La construcción en autoclave fusiona la suela'+ 
               'con la entresuela para una apariencia aerodinámica. La espuma expuesta en la lengüeta proporciona un aspecto retro.'+
               'La suela de goma sólida lisa tiene un diseño en espiga para lograr una excelente adherencia y durabilidad.';

var DesZap3 = 'Forum Low Zapatilla Urbana Mujer: Más que una zapatilla, es una declaración de estilo. La adidas Forum entró en escena en 1984'+ 
              'y conquistó corazones tanto en las canchas como en el mundo de la música. Esta versión combina la estética de los 80,'+ 
              'la energía explosiva del baloncesto y el clásico refuerzo lateral en forma de X para crear un diseño de caña baja pensado para las calles';

var DesZap4 = 'Swift Run 22 Primegreen Zapatilla Urbana Hombre: Más que una zapatilla, es una declaración de estilo. La adidas Forum entró en escena en 1984'+ 
              'y conquistó corazones tanto en las canchas como en el mundo de la música. Esta versión combina la estética de los 80,'+ 
              'la energía explosiva del baloncesto y el clásico refuerzo lateral en forma de X para crear un diseño de caña baja pensado para las calles';

var DesZap5 = 'ZAPATILLA PUMA CLÁSICO: Puma es más que zapatos deportivos, también es estilo de vida; ese estilo de vida que te empuja, el que te dice que todo es posible,'+ 
              'porque todo es posible. Explora la colección de zapatillas para hombre: desde el calzado de alto rendimiento que te ayuda a correr más rápido,'+
              'trabajar más y ser mejor, hasta zapatillas deportivas que te hacen ver bien. Conoce lo último que trae Puma porque, para cada estilo, existe un calzado Puma ideal.'+ 
              'No tienes que sacrificar el look perfecto para encontrar un par de zapatillas que puedan seguirte el ritmo, porque tienes a Puma.';

var DesZap6 = 'Vikky v2 Cat Zapatilla Urbana Mujer: Puma es más que zapatos deportivos, también es estilo de vida; ese estilo de vida que te empuja, el que te dice que todo es posible,'+ 
              'porque todo es posible. Explora la colección de zapatillas para hombre: desde el calzado de alto rendimiento que te ayuda a correr más rápido,'+
              'trabajar más y ser mejor, hasta zapatillas deportivas que te hacen ver bien. Conoce lo último que trae Puma porque, para cada estilo, existe un calzado Puma ideal.'+ 
              'No tienes que sacrificar el look perfecto para encontrar un par de zapatillas que puedan seguirte el ritmo, porque tienes a Puma.';

var DesZap7 = 'Anzarun Lite Zapatilla Urbana Mujer: Puma es más que zapatos deportivos, también es estilo de vida; ese estilo de vida que te empuja, el que te dice que todo es posible,'+ 
              'porque todo es posible. Explora la colección de zapatillas para hombre: desde el calzado de alto rendimiento que te ayuda a correr más rápido,'+
              'trabajar más y ser mejor, hasta zapatillas deportivas que te hacen ver bien. Conoce lo último que trae Puma porque, para cada estilo, existe un calzado Puma ideal.'+ 
              'No tienes que sacrificar el look perfecto para encontrar un par de zapatillas que puedan seguirte el ritmo, porque tienes a Puma.';

var DesZap8 = 'Electron E Pro Zapatilla Urbana Hombre: Puma es más que zapatos deportivos, también es estilo de vida; ese estilo de vida que te empuja, el que te dice que todo es posible,'+ 
              'porque todo es posible. Explora la colección de zapatillas para hombre: desde el calzado de alto rendimiento que te ayuda a correr más rápido,'+
              'trabajar más y ser mejor, hasta zapatillas deportivas que te hacen ver bien. Conoce lo último que trae Puma porque, para cada estilo, existe un calzado Puma ideal.'+ 
              'No tienes que sacrificar el look perfecto para encontrar un par de zapatillas que puedan seguirte el ritmo, porque tienes a Puma.';

var DesZap9 = 'Star X High Zapatilla Urbana Hombre: Esta Chuck High Street presenta una lona duradera inspirada en el estilo outdoor y nuestra lona clásica,'+ 
              'además de un acolchado adicional en el cuello y la lengüeta, y un cordón elástico interior para un ajuste seguro. Incluye una plantilla OrthoLite'+ 
              'acolchada para mantener la comodidad.';

var DesZap10 = 'Star X High Zapatilla Urbana Mujer: Esta Chuck High Street presenta una lona duradera inspirada en el estilo outdoor y nuestra lona clásica,'+ 
               'además de un acolchado adicional en el cuello y la lengüeta, y un cordón elástico interior para un ajuste seguro. Incluye una plantilla OrthoLite'+ 
               'acolchada para mantener la comodidad.';

var DesZap11 = 'Wing High Zapatilla Urbana Hombre: Esta Chuck High Street presenta una lona duradera inspirada en el estilo outdoor y nuestra lona clásica,'+ 
               'además de un acolchado adicional en el cuello y la lengüeta, y un cordón elástico interior para un ajuste seguro. Incluye una plantilla OrthoLite'+ 
               'acolchada para mantener la comodidad.';

var DesZap12 = 'Star X High Zapatilla Urbana Hombre: Esta Chuck High Street presenta una lona duradera inspirada en el estilo outdoor y nuestra lona clásica,'+ 
               'además de un acolchado adicional en el cuello y la lengüeta, y un cordón elástico interior para un ajuste seguro. Incluye una plantilla OrthoLite'+ 
               'acolchada para mantener la comodidad.';










class ProductoDAO {
    constructor() {
    }

    crearLocalStorage() {
        let producto1 = new Producto("zap1", "Forum Low Zapatilla Urbana Hombre", "Zapatillas/adidas1.jpg", "200", "84.000", DesZap1);
        let producto2 = new Producto("zap2", "Forum Mid Zapatilla Urbana Hombre", "Zapatillas/adidas2.jpg", "200", "94.990", DesZap2);
        let producto3 = new Producto("zap3", "Forum Low Zapatilla Urbana Mujer", "Zapatillas/adidas3.jpg", "200", "94.990", DesZap3);
        let producto4 = new Producto("zap4", "Swift Run 22 Primegreen Zapatilla Urbana Hombre", "Zapatillas/adidas4.jpg", "200", "74.990", DesZap4);
        let producto5 = new Producto("zap5", "Clasico Zapatilla Urbana Hombre", "Zapatillas/Puma1.jpg", "200", "46.990", DesZap5);
        let producto6 = new Producto("zap6", "Vikky v2 Cat Zapatilla Urbana Mujer", "Zapatillas/Puma2.jpg", "200", "49.990", DesZap6);
        let producto7 = new Producto("zap7", "Anzarun Lite Zapatilla Urbana Mujer", "Zapatillas/Puma3.jpg", "200", "37.990", DesZap7);
        let producto8 = new Producto("zap8", "Electron E Pro Zapatilla Urbana Hombre", "Zapatillas/Puma4.jpg", "200", "49.990", DesZap8);
        let producto9 = new Producto("zap9", "Star X High Zapatilla Urbana Hombre", "Zapatillas/starter1.jpg", "200", "54.990", DesZap9);
        let producto10 = new Producto("zap10", "Zapatilla Urbana Hombre", "Zapatillas/starter2.jpg", "200", "44.990", DesZap10);
        let producto11 = new Producto("zap11", "Wing High Zapatilla Urbana Hombre", "Zapatillas/starter3.jpg", "200", "44.990", DesZap11);
        let producto12 = new Producto("zap12", "Star X High Zapatilla Urbana Hombre", "Zapatillas/starter4.jpg", "200", "54.990", DesZap12);

        let Productos = [producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8,producto9,producto10,producto11,producto12];

        localStorage.setItem("Productos", JSON.stringify(Productos));
    }

    seleccionarProducto(id) {
        localStorage.setItem("idproducto", JSON.stringify(id));
        producto.actualizarProducto();
    }

    mostrarProducto() {
        let idproducto = JSON.parse(localStorage.getItem("idproducto"));
        let productosLS = JSON.parse(localStorage.getItem("Productos"));
        var styleImg=" style='height:128px; width: 128px;' "
        var styleDiv=" style='border: 2px solid white; padding: 15px; background-color: black;' "
        let documento = new Producto("NULL","NO EXISTE","img/null.png",0,0,"NO DESCRIPCIÓN Ö !");
        if (productosLS==null) {
            var salida="";
            salida = salida + "<div>";
            salida = salida + "<div"+styleDiv+"><img "+styleImg+" src='" + documento.foto + "'><br>";
            salida = salida + "ID = " + documento.id + "<br>";
            salida = salida + "Nombre = " + documento.producto + "<br>";
            salida = salida + "Precio = $" + documento.precio + "<br>";
            salida = salida + "Stock = " + documento.stock + "<br>";
            salida = salida + "Descripcion = " +documento.descripcion +"</div><br>"
            document.getElementById("info-producto").innerHTML=salida;
            return;
        }
        var contador = 0;
        while (contador < productosLS.length) {
            if (productosLS[contador].id == idproducto) {
                documento = new Producto(
                    productosLS[contador].id, 
                    productosLS[contador].producto,
                    productosLS[contador].foto,
                    productosLS[contador].stock,
                    productosLS[contador].precio,
                    productosLS[contador].descripcion
                                                                            );
                break;
            }
            contador++;
        }
        var salida="";
        salida = salida + "<div>";
        salida = salida + "<div"+styleDiv+"><img "+styleImg+" src='" + documento.foto + "'><br>";
        salida = salida + "ID = " + documento.id + "<br>";
        salida = salida + "Nombre = " + documento.producto + "<br>";
        salida = salida + "Precio = $" + documento.precio + "<br>";
        salida = salida + "Stock = " + documento.stock + "<br>";
        salida = salida + "Descripcion = " +documento.descripcion +"</div><br>"
        document.getElementById("info-producto").innerHTML=salida;
    }

    actualizarCantidad() {
        let cantidadid = document.getElementById("cantidadid");
        cantidad = cantidadid.value;
    }
}









                        
var cantidad = 1;

let carrito = new Carrito();

let productoDAO = new ProductoDAO();

let producto = new Producto("zap1", "Forum Low Zapatilla Urbana Hombre", "Zapatillas/adidas1.jpg", 200, 84000, "null");

if (localStorage.getItem("idproducto")==null) {
    localStorage.setItem("idproducto", JSON.stringify("zap1"));
}

producto.actualizarProducto();




