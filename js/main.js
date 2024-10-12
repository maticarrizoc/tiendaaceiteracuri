let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

document.addEventListener("DOMContentLoaded", () => {
    actualizarCantidadCarrito();
    actualizarCarrito();
    if (window.location.pathname.includes("tienda.html")) {
        filtrarProductos("todos");
    }
});

//! Header
class HeaderAceiteraCuri extends HTMLElement {
    connectedCallback() {
        const currentPath = window.location.pathname;
        
        let logoSrc = currentPath.endsWith("index.html") || currentPath === "/" ? "./img/logo.avif" : "../img/logo.avif";
        let href = currentPath.endsWith("index.html") || currentPath === "/" ? "./pages/" : "./";
  
        this.innerHTML =
            `<header class="header">
                <nav class="navbar navbar-expand-md container">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="../index.html"><img class="img-logo" src="${logoSrc}"
                                alt="Logo de Aceitera Curi"></a>
                        <button class="navbar-toggler boton-navbar" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav menu ms-auto">
                                <li class="nav-item menu-opcion li-sobrenosotros">
                                    <a class="nav-link " href="${href}sobrenosotros.html">Sobre Nosotros</a>
                                </li>
                                <li class="nav-item menu-opcion li-aceites">
                                    <a class="nav-link " href="${href}aceites.html">Aceites</a>
                                </li>
                                <li class="nav-item menu-opcion li-tienda">
                                    <a class="nav-link " href="${href}tienda.html">Tienda</a>
                                </li>
                                <li class="nav-item menu-opcion li-contacto">
                                    <a class="nav-link " href="${href}contacto.html">Contacto</a>
                                </li>
                                <li class="nav-item menu-opcion li-carrito">
                                    <a class="nav-link carrito-nav-link" href="${href}carrito.html">
                                        <i class="bi bi-cart3"></i>
                                        <div class="contador-carrito"><span id="carrito-contador">0</span></div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>`;

        const navLinks = this.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            let href = link.getAttribute('href').slice(1);
            if (currentPath.endsWith(href) || currentPath.endsWith(href.split('/').pop())) {
                link.classList.add('active');
            }
        });
    }
}
customElements.define('header-aceitera-curi', HeaderAceiteraCuri);

//! Footer
class FooterAceiteraCuri extends HTMLElement {
    connectedCallback() {
        const currentPath = window.location.pathname;

        let logoSrc = currentPath.endsWith("index.html") || currentPath === "/" ? "./img/logo.avif" : "../img/logo.avif";
        
        this.innerHTML =
            `<footer class="footer d-flex flex-wrap justify-content-between">
                <section class="footer-logo">
                    <a href="../index.html">
                        <img class="footer-logo-img" src="${logoSrc}" alt="Logo de Aceitera Curi">
                    </a>
                </section>
                <section class="informacion-1">
                    <a class="icono-footer" href="tel://+5492614287701" target="_blank">
                        <i class="bi bi-telephone"></i>
                    </a>
                    <a class="icono-footer"
                        href="https://api.whatsapp.com/send?phone=542615330573&text=Hola!%20Quer%C3%ADa%20consultar%20"
                        target="_blank">
                        <i class="bi bi-whatsapp"></i>
                    </a>
                    <a class="icono-footer" href="https://www.instagram.com/aceiteracuri/?hl=es-la" target="_blank">
                        <i class="bi bi-instagram"></i>
                    </a>
                    <a class="icono-footer" href="https://www.facebook.com/aceitera.curi" target="_blank">
                        <i class="bi bi-facebook"></i>
                    </a>
                    
                    <a class="icono-footer"
                        href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlFmSRJjvlslpxFRHWxWppgmbQkTZkdbxTMmJPNqwZnFnBRnBtSWwZGbkDxpGPPmzjSZCg"
                        target="_blank">
                        <i class="bi bi-envelope-at"></i>
                    </a>

                </section>
                <section class="informacion-2">
                    <p class="m-0">Horario de atención:</p>
                    <p class="m-0">De mañana: Lunes a sábado de 10:00 a 14:00 hs.</p>
                    <p class="m-0">De tarde: Lunes a viernes de 17:00 a 20:00 hs.</p>
                </section>
                <section class="informacion-3">
                    <p class="m-0">Desde el 30 de JUNIO de 1975 OFRECIENDO LA MEJOR CALIDAD.</p>
                    <a class="m-0" href="https://maps.app.goo.gl/fgG6EUMHjFZSFZ8L8" target="_blank">
                        <i class="bi bi-geo-alt-fill"></i>
                        <p class="m-0">Paso de los Andes 223, Ciudad de Mendoza, Mendoza,
                            Argentina.</p>
                    </a>
                </section>
                <section class="footer-copyright">
                    <p class="m-0">Coderhouse |
                        <a href="https://github.com/maticarrizoc" target="_blank">
                            Matías Carrizo Conti <i class="bi bi-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/matias-alejandro-carrizo-conti-300a8a168/" target="_blank">
                            <i class="bi bi-linkedin"></i>
                        </a>
                        | © 2024
                    </p>
                </section>
            </footer>`
    }
}
customElements.define('footer-aceitera-curi', FooterAceiteraCuri);

//! Productos
let productos = [];
fetch("../js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })
//! Aceites

let aceiteOlivaBtn = document.querySelector("#aceite-oliva");
let aceiteUvaBtn = document.querySelector("#aceite-uva");
let aceiteGirasolBtn = document.querySelector("#aceite-girasol");

let aceite = document.querySelector(".aceite");
let maridaje = document.querySelector(".maridaje");
if (aceiteOlivaBtn && aceiteUvaBtn && aceiteGirasolBtn && aceite && maridaje) {
    function actualizarInformacion(producto, boton) {
        let botones = document.querySelectorAll('.opcion-aceites');
        botones.forEach(btn => btn.classList.remove('active'));

        boton.classList.add('active');
        
        let listaPropiedades = producto.propiedades.map(propiedad =>
            `<li class="propiedad-aceite">${propiedad}</li>`
        ).join('');

        aceite.innerHTML = `
        <img class="imagen-aceite" src=${producto.imagen} alt=${producto.titulo} />
        <div class="informacion-aceite">
            <h2 class="titulo-aceite">${producto.titulo}</h2>
            <h3 class="subtitulo-aceite">${producto.subtitulo}</h3>
            <h3 class="subtitulo-aceite">Propiedades y beneficios</h3>
            <ul class="propiedades-aceite">
                ${listaPropiedades}
            </ul>
            <div class="medidas">
                <h3>Presentaciones</h3>
                <div class="opciones-medidas">
                    <button>500ml</button>
                    <button>1l</button>
                    <button>2l</button>
                    <button>3l</button>
                    <button>5l</button>
                </div>
                <div class="div-botones-carrito">
                    <button class="producto-btn">Agregar al carrito</button>
                </div>
            </div>
        </div>
    `;

        let listaMaridaje = producto.maridaje.imagenes.map((imagen, index) =>
            `<div class="carousel-item ${index === 0 ? 'active' : ''}">
            <img src="${imagen}" class="d-block w-100 imagen-maridaje" alt="${producto.maridaje.titulos[index]}">
            <div class="carousel-caption d-xs-block">
                <h5 class="titulo-maridaje">${producto.maridaje.titulos[index]}</h5>
                <p class="descripcion-maridaje">${producto.maridaje.descripciones[index]}</p>
            </div>
        </div>`
        ).join('');

        maridaje.innerHTML = `
        <h2 class="titulo-maridar">¿Cómo maridar este Aceite?</h2>
        <p class="parrafo-maridaje">${producto.maridaje.parrafo}</p>
        <div id="carouselMaridajeAceite" class="carousel slide">
            <div class="carousel-indicators">
                ${producto.maridaje.imagenes.map((_, index) => `
                    <button type="button" data-bs-target="#carouselMaridajeAceite" 
                        data-bs-slide-to="${index}" ${index === 0 ? 'class="active"' : ''} 
                        aria-label="Slide ${index + 1}"></button>
                `).join('')}
            </div>
            <div class="carousel-inner">
                ${listaMaridaje}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselMaridajeAceite"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselMaridajeAceite"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    `;
    }

    function mostrarDetalleAceite(boton) {
        boton.addEventListener("click", () => {
            const aceiteSeleccionado = productos.find(producto => producto.id === boton.id);
            if (aceiteSeleccionado) {
                actualizarInformacion(aceiteSeleccionado, boton);
            }
        });
    }

    [aceiteOlivaBtn, aceiteUvaBtn, aceiteGirasolBtn].forEach(boton => mostrarDetalleAceite(boton));
}
//! Tienda

function mostrarProductos(productos) {
    let tienda = document.querySelector("#tienda");
    let productosHTML = '';

    productos.forEach((producto) => {
        productosHTML += `
        <article class="tienda-item">
            <div class="titulo-subtitulo-producto">
                <h2 class="titulo-producto">${producto.titulo}</h2>
                <h3 class="subtitulo-producto">${producto.subtitulo}</h3>
            </div>
            <img class="${producto.categoria.id === 'aceites' ? 'imagen-aceite' : 'imagen-producto'}" src="${producto.imagen}" alt="${producto.titulo}" />
            <button class="producto-btn">Agregar al carrito</button>
        </article>
        `;
    });

    tienda.innerHTML = productosHTML;

    const botonAgregarAlCarrito = document.querySelectorAll(".producto-btn");
    botonAgregarAlCarrito.forEach((boton, index) => {
        boton.addEventListener("click", () => {
            agregarAlCarrito(productos[index]);
        });
    });
}

function agregarAlCarrito(producto) {
    let itemEncontrado = carrito.find((item) => item.id === producto.id);

    if (itemEncontrado) {
        itemEncontrado.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

    Toastify({
        text: `Producto agregado al carrito`,
        duration: 3000,
        destination: "./carrito.html",
        newWindow: false,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
            padding: `5px`,
            fontFamily: `Truculenta`,
            fontSize: `16px`,
            fontWeight: `800`,
            color: `#181B34`,
            background: `#dfd9c9`,
            border: `2px solid #181B34`,
            borderRadius: `2.5px`,
            closeColor: `#181B34`,
        },

    }).showToast();

    actualizarCarrito();
}

function actualizarCarrito() {
    let listaCarrito = document.getElementById("carrito-productos");

    if (carrito.length === 0) {
        listaCarrito.innerHTML = `<p>Carrito vacío.</p>`;
    } else {
        let productoEnCarrito = `
        <table>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>`;

        carrito.forEach((producto, index) => {
            productoEnCarrito += `
            <tr>
                <td>${producto.titulo}</td>
                <td>$${producto.precio}</td>
                <td class="cantidad">
                    <button class="carrito-producto-btn btn-reducir" data-index="${index}"><i class="bi bi-dash"></i></button>
                    ${producto.cantidad}
                    <button class="carrito-producto-btn btn-aumentar" data-index="${index}"><i class="bi bi-plus"></i></button>
                </td>
                <td>$${producto.precio * producto.cantidad}</td>
                <td class="eliminar">
                    <button class="carrito-producto-btn btn-borrar" data-index="${index}"><i class="bi bi-x"></i></button>
                </td>
            </tr>`;
        });

        productoEnCarrito += `</tbody></table>`;
        listaCarrito.innerHTML = productoEnCarrito;

        const botonAumentarProductoAlCarrito = document.querySelectorAll(".btn-aumentar");
        botonAumentarProductoAlCarrito.forEach((boton, index) => {
            boton.addEventListener("click", () => {
                carrito[index].cantidad++;
                actualizarCarrito();
            });
        });

        const botonReducirProductoAlCarrito = document.querySelectorAll(".btn-reducir");
        botonReducirProductoAlCarrito.forEach((boton, index) => {
            boton.addEventListener("click", () => {
                if (carrito[index].cantidad > 1) {
                    carrito[index].cantidad--;
                } else {
                    carrito.splice(index, 1);
                }
                actualizarCarrito();
            });
        });

        const botonBorrarProductoDelCarrito = document.querySelectorAll(".btn-borrar");
        botonBorrarProductoDelCarrito.forEach((boton, index) => {
            boton.addEventListener("click", () => {
                carrito.splice(index, 1);
                actualizarCarrito();
            });
        });
    }

    actualizarCantidadCarrito();
    actualizarTotal();
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function actualizarCantidadCarrito() {
    const cantidadCarrito = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    document.getElementById("carrito-contador").textContent = `${cantidadCarrito}`;
}

function actualizarTotal() {
    const total = carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
    document.getElementById("carrito-total").textContent = `$${total}`;
}

function filtrarProductos(categoria) {
    if (categoria === 'todos') {
        mostrarProductos(productos);
    } else {
        const productosFiltrados = productos.filter(producto => producto.categoria.id === categoria);
        mostrarProductos(productosFiltrados);
    }
}

const botonesFiltro = document.querySelectorAll(".categorias button");
botonesFiltro.forEach((boton) => {
    boton.addEventListener("click", () => {
        const categoria = boton.getAttribute("data-categoria");
        filtrarProductos(categoria);
    });
});

const vaciarCarritoBtn = document.getElementById("vaciar-carrito-btn");
vaciarCarritoBtn.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {

    if (carrito.length > 0) {
        Swal.fire({
            title: "¿Quiere eliminar su carrito?",
            text: "¡No podrás volver atrás!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#911714",
            cancelButtonColor: "#3A3A39",
            confirmButtonText: "Eliminar carrito",
            cancelButtonText: "Deseo volver"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Usted vacío su carrito.",
                    icon: "success"
                });
                carrito = [];
                actualizarCarrito();
            }
        });

    }

}

mostrarProductos(productos);