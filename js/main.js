function agregarProducto(productos) {
    const titulo = prompt("Ingresá el nombre del producto:");
    let precio;
    do {
        precio = parseFloat(prompt("Ingresá el precio del producto (debe ser mayor a 0):"));
        if (isNaN(precio) || precio <= 0) {
            alert("Por favor, ingresá un precio válido mayor a 0.");
        }
    } while (isNaN(precio) || precio <= 0);

    const descripcion = prompt("Ingresá la descripción del producto:");
    const nuevoProducto = {
        id: productos.length + 1,
        titulo: titulo,
        precio: precio,
        descripcion: descripcion
    };
    productos.push(nuevoProducto);
    alert("Producto agregado correctamente.");
}

function modificarProducto(productos) {
    listarProductosAdmin(productos);
    const id = parseInt(prompt("Ingresá el ID del producto que deseas modificar:"));
    const producto = productos.find(p => p.id === id);
    if (producto) {
        producto.titulo = prompt("Ingresá el nuevo titulo del producto:", producto.titulo);
        let nuevoPrecio;
        do {
            nuevoPrecio = parseFloat(prompt("Ingresá el nuevo precio del producto (debe ser mayor a 0):", producto.precio));
            if (isNaN(nuevoPrecio) || nuevoPrecio <= 0) {
                alert("Por favor, ingresá un precio válido mayor a 0.");
            }
        } while (isNaN(nuevoPrecio) || nuevoPrecio <= 0);

        producto.precio = nuevoPrecio;
        producto.descripcion = prompt("Ingresá la nueva descripción del producto:", producto.descripcion);
        alert("Producto modificado correctamente.");
    } else {
        alert("Producto no encontrado.");
    }
}

function reasignarId(productos) {
    productos.forEach((producto, indice) => {
        producto.id = indice + 1;
    });
}

function eliminarProducto(productos) {
    listarProductosAdmin(productos);
    const id = parseInt(prompt("Ingresá el ID del producto que deseas eliminar:"));
    const indice = productos.findIndex(p => p.id === id);
    if (indice !== -1) {
        productos.splice(indice, 1);
        reasignarId(productos);
        alert("Producto eliminado correctamente.");
    } else {
        alert("Producto no encontrado.");
    }
}

function listarProductos(productos) {
    let filtroPrecio = prompt("¿Deseas filtrar los productos por precio?\n1. No filtrar\n2. Menores a un precio\n3. Mayores a un precio\n4. Entre un rango de precios");
    let productosFiltrados = productos.slice();
    let precioMin;
    let precioMax;
    switch (filtroPrecio) {

        case "1":
            break;
        case "2":
            precioMax = parseFloat(prompt("Ingresá el precio máximo:"));
            productosFiltrados = productosFiltrados.filter(p => p.precio < precioMax);
            break;
        case "3":
            precioMin = parseFloat(prompt("Ingresá el precio mínimo:"));
            productosFiltrados = productosFiltrados.filter(p => p.precio > precioMin);
            break;
        case "4":
            precioMin = parseFloat(prompt("Ingresá el precio mínimo:"));
            precioMax = parseFloat(prompt("Ingresá el precio máximo:"));
            productosFiltrados = productosFiltrados.filter(p => p.precio >= precioMin && p.precio <= precioMax);
            break;
        default:
            alert("Opción no válida. Se mostrará sin ordenar.");
    }

    let criterioOrden = prompt("¿Cómo deseas ordenar los productos?\n1. Por Defecto\n2. Precio: Menor a Mayor\n3. Precio: Mayor a Menor\n4. Alfabéticamente");
    switch (criterioOrden) {
        case "1":
            productosFiltrados.sort((a, b) => a.id - b.id);
            break;
        case "2":
            productosFiltrados.sort((a, b) => a.precio - b.precio);
            break;
        case "3":
            productosFiltrados.sort((a, b) => b.precio - a.precio);
            break;
        case "4":
            productosFiltrados.sort((a, b) => a.titulo.localeCompare(b.titulo));
            break;
        default:
            alert("Opción no válida. Se mostrará sin ordenar.");
    }


    if (productosFiltrados.length === 0) {
        alert("No hay productos que coincidan con el filtro aplicado.");
    } else {
        let listado = "Productos Disponibles:\n";
        productosFiltrados.forEach(p => {
            listado += `${p.id}. ${p.titulo} - $${p.precio}\n`;
        });
        alert(listado);
    }
}

function listarProductosAdmin(productosFiltrados) {
    let listado = "Productos Disponibles:\n";
    productosFiltrados.forEach(p => {
        listado += `${p.id}. ${p.titulo} - $${p.precio}\n`;
    });
    alert(listado);
}

function verDetallesProducto(productos) {
    listarProductosAdmin(productos);
    const id = parseInt(prompt("Ingresá el ID del producto que deseas ver:"));
    const producto = productos.find(p => p.id === id);
    if (producto) {
        alert(`Detalles del Producto:\n\nTítulo: ${producto.titulo}\nPrecio: $${producto.precio}\nDescripción: ${producto.descripcion}`);
    } else {
        alert("Producto no encontrado.");
    }
}

function agregarAlCarrito(productos, carrito) {
    listarProductos(productos);
    const id = parseInt(prompt("Ingresá el ID del producto que deseas agregar al carrito:"));
    const producto = productos.find(p => p.id === id);
    if (producto) {
        carrito.push(producto);
        alert("Producto agregado al carrito.");
    } else {
        alert("Producto no encontrado.");
    }
}

function finalizarCompra(rol, carrito) {
    if (carrito.length === 0) {
        alert(`${rol} No tienes productos en el carrito.`);
        return;
    }

    let listadoCarrito = "Productos agregados:\n";
    let total = 0;
    carrito.forEach(p => {
        listadoCarrito += `${p.titulo} - $${p.precio}\n`;
        total += p.precio;
    });

    alert(`${listadoCarrito}\nTotal de la compra: $${total}\nGracias ${rol} por tu compra.`);
    carrito.length = 0;
}

function tiendaProductos() {
    alert("Bienvenido a Tienda Aceitera Curi");
    const productos = [
        { id: 1, titulo: "Aceite de Oliva", precio: 17600, descripcion: "Aceite de Oliva Extra Virgen. 1° Prensada en frío. Gran contenido de ácido oleico y linoleico." },
        { id: 2, titulo: "Aceite de Uva", precio: 8900, descripcion: "Aceite puro depepitas de Uva. Contiene vitaminas C, E y K, ácido linoleico, y ácidos grasos esenciales, omega G y omega 3" },
        { id: 3, titulo: "Aceite de Girasol", precio: 2700, descripcion: "Aceite de Girasol alto Oleico. Contiene vitaminas B6 y E, Zinc, y altos niveles de ácidos grasos insaturados, libres de colesterol: Ayudan a disminuir los niveles de colesterol y triglicéridos." },
        { id: 4, titulo: "Salsa de Tomate", precio: 1250, descripcion: "Puré de tomates frescos seleccionados. Hecho en Mendoza." },
        { id: 5, titulo: "Berenjenas en escabeche", precio: 4690, descripcion: "Tradicional Berenjena hecha al escabeche 100% natural." },
        { id: 6, titulo: "Pepinos agridulces", precio: 7400, descripcion: "Pepinos seleccionados de pequeño tamaño preparados para generar un sabor agridulce." }
    ];
    const carrito = [];

    const rol = prompt("Ingresá tu nombre para visitar la tienda y comprar.\nSi eres ADMIN, recuerda ingresar con ese nombre y luego ingresar la contraseña.");

    if (rol.toUpperCase() === "ADMIN") {
        let contraseniaCorrecta = false;
        do {
            const contrasenia = prompt("Ingresá la contraseña de ADMIN para administrar la tienda.");
            if (contrasenia == 1234) {
                contraseniaCorrecta = true;
                let opcionAdmin;
                do {
                    opcionAdmin = prompt("¿Qué quieres hacer hoy?\n1. Agregar Producto\n2. Modificar Producto\n3. Ver Productos\n4. Eliminar Producto\n5. Salir");
                    switch (opcionAdmin) {
                        case "1":
                            agregarProducto(productos);
                            break;
                        case "2":
                            modificarProducto(productos);
                            break;
                        case "3":
                            listarProductosAdmin(productos);
                            break;
                        case "4":
                            eliminarProducto(productos);
                            break;
                        case "5":
                            alert("Saliendo de la administración.");
                            break;
                        default:
                            alert("Opción no válida.");
                    }
                } while (opcionAdmin !== "5");
            } else {
                alert("Contraseña incorrecta.");
                let opcionContraseniaIncorrecta = prompt("¿Qué quieres hacer?\n1. Ingresar nuevamente la contraseña\n2. Volver al menú principal\n3. Salir");
                switch (opcionContraseniaIncorrecta) {
                    case "1":
                        break;
                    case "2":
                        tiendaProductos();
                        return;
                    case "3":
                        alert("Saliendo.");
                        return;
                    default:
                        alert("Opción no válida.");
                }
            }
        } while (!contraseniaCorrecta);
    } else {
        let opcionUsuario;
        do {
            opcionUsuario = prompt("¿Qué quieres hacer?\n1. Ver Productos\n2. Ver Detalles de un Producto\n3. Agregar Producto al Carrito\n4. Finalizar Compra\n5. Salir");
            switch (opcionUsuario) {
                case "1":
                    listarProductos(productos);
                    break;
                case "2":
                    verDetallesProducto(productos);
                    break;
                case "3":
                    agregarAlCarrito(productos, carrito);
                    break;
                case "4":
                    finalizarCompra(rol, carrito);
                    break;
                case "5":
                    alert("Gracias " + rol + " por visitar la tienda.");
                    break;
                default:
                    alert("Opción no válida.");
            }
        } while (opcionUsuario !== "5");
    }
}

tiendaProductos();