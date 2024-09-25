let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

document.addEventListener("DOMContentLoaded", () => {
    actualizarCarrito();
});

//! Header
class HeaderAceiteraCuri extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            ``
    }
}
customElements.define('header-aceitera-curi', HeaderAceiteraCuri);
//! Footer
class FooterAceiteraCuri extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `<footer class="footer d-flex flex-wrap justify-content-between">
                <section class="footer-logo">
                    <a href="../index.html">
                        <img class="footer-logo-img" src="../img/logo.avif" alt="Logo de Aceitera Curi">
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
const productos = [
    //! Aceites
    {
        id: "aceite-oliva",
        titulo: "Aceite de Oliva Extra Virgen",
        subtitulo: "Primera prensada en frío",
        imagen: "../img/aceiteoliva.avif",
        propiedades: [
            "Gran contenido de ácido oleico y linoleico: Ayuda a reducir los niveles de colesterol malo (HDL-C)",
            "Disminuye la posibilidad de enfermedades cardíacas: Promueve la salud cardiovascular.",
            "Promueve la digestión sana: Alivia síntomas de úlceras y gastritis.",
            "Evita la formación de cálculos biliares: Ayuda en la prevención de piedras en la vesícula.",
            "Equilibria ácidos grasos en el cuerpo",
        ],
        maridaje: {
            parrafo: "El aceite de oliva, especialmente el extra virgen, tiene un sabor robusto y afrutado con un toque de amargor y picante. Es muy versátil y se utiliza tanto en crudo como en cocciones. Nuestras recomendaciones:",
            imagenes: [
                "../img/pan.svg",
                "../img/aliño-ensalada.avif",
                "../img/pasta.svg",
                "../img/verduras-asadas.svg"
            ],
            titulos: [
                "Pan casero",
                "Ensaladas frescas",
                "Pasta",
                "Verduras a la parrilla"
            ],
            descripciones: [
                "Acompaña pan recién horneado con aceite de oliva para mojar. Añade un poco de sal marina para potenciar el sabor.",
                "Utiliza aceite de oliva extra virgen en ensaladas mixtas, con ingredientes como tomate, lechuga, rúcula, quesos y aceitunas.",
                "Un chorrito de aceite de oliva extra virgen sobre pasta recién cocida, especialmente si lleva albahaca y tomate, realza los sabores y añade una textura suave.",
                "Rocía tus verduras a la parrilla con aceite de oliva para un toque de sabor adicional."
            ],
        },
        categoria: {
            nombre: "Aceites",
            id: "aceites"
        },
        precio: 17900
    },
    {
        id: "aceite-uva",
        titulo: "Aceite Puro de pepitas de Uva",
        subtitulo: "",
        imagen: "../img/aceiteuva.avif",
        propiedades: [
            "Rico en vitaminas C y K: Esencial para combatir y disminuir la posibilidad de artritis, artrosis, gastritis, dermatitis, entre otras.",
            "Antiinflamatorio: Muy utilizado en la industria cosmética.",
            "Provee vitamina E y ácido linoleico: Contiene alta concentración de ácidos grasos esenciales, omega G y omega 3.",
        ],
        maridaje: {
            parrafo: "El aceite de semilla de uva es ligero, con un sabor suave y un alto contenido de antioxidantes. Tiene un punto de humo alto, lo que lo hace adecuado para cocinar a altas temperaturas. Nuestras recomendaciones:",
            imagenes: [
                "../img/carne-asada.svg",
                "../img/salsas.svg",
                "../img/postre.svg",
                "../img/pescados.avif"
            ],
            titulos: [
                "Carnes asadas",
                "Salsas y aderezos",
                "Postres",
                "Pescados y mariscos"
            ],
            descripciones: [
                "Usar aceite de uva para aderezar carnes asadas añade un sabor delicado que complementa el ahumado de la parrilla.",
                "Mezcla aceite de uva con vinagre balsámico, limón y sal para crear aderezos ligeros y sabrosos.",
                "Sustituye la manteca por aceite de uva en recetas de bizcochos y tortas para una textura más ligera y un sabor suave.",
                "Ideal para marinar pescados y mariscos antes de cocinarlos, ya que no domina sus sabores delicados."
            ]
        },
        categoria: {
            nombre: "Aceites",
            id: "aceites"
        },
        precio: 8900
    },

    {
        id: "aceite-girasol",
        titulo: "Aceite de Girasol Alto Oleico",
        subtitulo: "",
        imagen: "../img/aceitegirasol.avif",
        propiedades: [
            "Altos niveles de ácidos grasos insaturados, libres de colesterol: Ayudan a disminuir los niveles de colesterol y triglicéridos.",
            "Antioxidante: Beneficioso para el proceso digestivo.",
            "Rico en vitamina E y Zinc, y vitamina B6: Aporta nutrientes esenciales para la salud."
        ],
        maridaje: {
            parrafo: "El aceite de girasol tiene un sabor neutro y es rico en vitamina E. Es muy versátil y se usa comúnmente para freír y hornear debido a su punto de humo alto. Nuestras recomendaciones:",
            imagenes: [
                "../img/frituras.svg",
                "../img/salteado-verduras.svg",
                "../img/reposteria.svg",
                "../img/aliño-ensalada.avif"
            ],
            titulos: [
                "Frituras",
                "Salteados de verduras",
                "Repostería",
                "Aliños de ensaladas"
            ],
            descripciones: [
                "Utiliza aceite de girasol para freír papas, milanesas, empanadas y otros alimentos fritos. Su sabor neutro no interfiere con los sabores naturales de los alimentos.",
                "Es perfecto para saltear verduras, manteniendo su sabor original y añadiendo una textura suave.",
                "Ideal para recetas de tortas y galletas, ya que no afecta el sabor de los ingredientes principales.",
                "Mezcla con otros aceites o vinagres para hacer aliños ligeros y suaves para ensaladas."
            ],
        },
        categoria: {
            nombre: "Aceites",
            id: "aceites"
        },
        precio: 5900
    },
    //! Aceitunas
    {
        id: "aceitunas-descarozadas",
        titulo: "Aceitunas Descarozadas 800g",
        subtitulo: "",
        imagen: "../img/aceitunas-descarozadas.avif",
        categoria: {
            nombre: "Aceitunas",
            id: "aceitunas"
        },
        precio: 8800
    },
    {
        id: "aceitunas-griegas",
        titulo: "Aceitunas Griegas 1kg",
        subtitulo: "",
        imagen: "../img/aceitunas-griegas.avif",
        categoria: {
            nombre: "Aceitunas",
            id: "aceitunas"
        },
        precio: 11200
    },
    {
        id: "aceitunas-rellenas",
        titulo: "Aceitunas Rellenas 1kg",
        subtitulo: "",
        imagen: "../img/aceitunas-rellenas.avif",
        categoria: {
            nombre: "Aceitunas",
            id: "aceitunas"
        },
        precio: 11900
    },
    //! Conservas
    {
        id: "ajies-dulces",
        titulo: "Ajíes Dulces 110g",
        subtitulo: "En vinagre de alcohol",
        imagen: "../img/ajies.avif",
        categoria: {
            nombre: "Conservas",
            id: "conservas"
        },
        precio: 2900
    },
    {
        id: "antipasto",
        titulo: "Antipasto 200g",
        subtitulo: "",
        imagen: "../img/antipasto.avif",
        categoria: {
            nombre: "Conservas",
            id: "conservas"
        },
        precio: 4600
    },
    {
        id: "berenjenas",
        titulo: "Berenjenas en escabeche 220g",
        subtitulo: "",
        imagen: "../img/berenjenas.avif",
        categoria: {
            nombre: "Conservas",
            id: "conservas"
        },
        precio: 4500
    },
    {
        id: "cebollas",
        titulo: "Cebolla en vinagre de vino 800g",
        subtitulo: "",
        imagen: "../img/cebollas.avif",
        categoria: {
            nombre: "Conservas",
            id: "conservas"
        },
        precio: 8100
    },
    {
        id: "cebollitas",
        titulo: "Cebollitas reina en vinagre 220g",
        subtitulo: "",
        imagen: "../img/cebollitas.avif",
        categoria: {
            nombre: "Conservas",
            id: "conservas"
        },
        precio: 4350
    },
    {
        id: "morrones",
        titulo: "Morrones Enteros 220g",
        subtitulo: "",
        imagen: "../img/morrones.avif",
        categoria: {
            nombre: "Conservas",
            id: "conservas"
        },
        precio: 4900
    },
    {
        id: "pepinos",
        titulo: "Pepinos agridulces 200g",
        subtitulo: "",
        imagen: "../img/pepinos.avif",
        categoria: {
            nombre: "Conservas",
            id: "conservas"
        },
        precio: 4900
    },
    {
        id: "pickles",
        titulo: "Pickles 220g",
        subtitulo: "",
        imagen: "../img/pickles.avif",
        categoria: {
            nombre: "Conservas",
            id: "conservas"
        },
        precio: 3000
    },
    {
        id: "tomates",
        titulo: "Tomates peritas 800g",
        subtitulo: "Enteros, pelados y condimentados",
        imagen: "../img/tomates.avif",
        categoria: {
            nombre: "Conservas",
            id: "conservas"
        },
        precio: 3900
    },
];

//! Aceites

let aceiteOlivaBtn = document.querySelector("#aceite-oliva");
let aceiteUvaBtn = document.querySelector("#aceite-uva");
let aceiteGirasolBtn = document.querySelector("#aceite-girasol");

let aceite = document.querySelector(".aceite");
let maridaje = document.querySelector(".maridaje");
if (aceiteOlivaBtn && aceiteUvaBtn && aceiteGirasolBtn && aceite && maridaje) {
    function actualizarInformacion(producto) {
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
                    <button>Agregar al carrito</button>
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
                actualizarInformacion(aceiteSeleccionado);
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

    actualizarCarrito();
}

function actualizarCarrito() {
    let listaCarrito = document.getElementById("carrito-productos");
    let carritoTotal = document.getElementById("carrito-total");

    if (carrito.length === 0) {
        listaCarrito.innerHTML = `<p>Carrito vacío.</p>`;
    } else {
        listaCarrito.innerHTML = "";
        let productoEnCarrito = '';

        carrito.forEach((producto, index) => {
            productoEnCarrito += `
            <article class="carrito-item">
                <h3>${producto.titulo}</h3>
                <p class="precio">$${producto.precio}</p>
                <p class="cantidad">Cantidad: ${producto.cantidad}</p>
                <p class="subtotal">Subtotal: $${producto.precio * producto.cantidad}</p>
                <div class="botones">
                    <button class="carrito-producto-btn btn-aumentar" data-index="${index}"><i class="bi bi-plus"></i></button>
                    <button class="carrito-producto-btn btn-reducir" data-index="${index}"><i class="bi bi-dash"></i></button>
                    <button class="carrito-producto-btn btn-borrar" data-index="${index}"><i class="bi bi-x"></i></button>
                </div>
            </article>
            `;
        });

        listaCarrito.innerHTML = productoEnCarrito;
        // asignarEventosBotonesCarrito();

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

    actualizarTotal();
    localStorage.setItem("carrito", JSON.stringify(carrito));
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
    carrito = [];
    actualizarCarrito();
}

mostrarProductos(productos);