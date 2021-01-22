




var procutObj1 = {
    precio: "23.2€",
    nombre: "Product1",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corrupti, natus aliquam fugiat ad possimus repellat eius ea illum maiores dicta.",
    background: "#eee",
    link: "https://cdn.pixabay.com/photo/2018/08/27/10/11/radio-cassette-3634616_960_720.png"
}
var procutObj2 = {
    precio: "43.2€",
    nombre: "Product2",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corrupti, natus aliquam fugiat ad possimus repellat eius ea illum maiores dicta.",
    background: "#fff",
    link: "https://cdn.pixabay.com/photo/2017/11/02/20/31/guitars-2912447_960_720.jpg"
}
var procutObj3 = {
    precio: "200.2€",
    nombre: "Product3",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corrupti, natus aliquam fugiat ad possimus repellat eius ea illum maiores dicta.",
    background: "#fff",
    link:"https://cdn.pixabay.com/photo/2016/06/27/07/30/elvis-presley-1482026_960_720.jpg"
}


function getProduct(productoObjeto) {
    var selection = document.getElementById("product-info");
    selection.innerHTML = `
    <div id="product-img">
    <img class="img-1" src="${productoObjeto.link}"
    </div>
    <div id="product-card">
    <h5 id="product-title">${productoObjeto.nombre}</h5><br>
    <h6 id="product-description">${productoObjeto.descripcion}<span id="pro-item">PRECIO => ${productoObjeto.precio}</span></h6>
    </div>
    
    `
    console.log(productoObjeto.precio);

}


getProduct(procutObj1);

