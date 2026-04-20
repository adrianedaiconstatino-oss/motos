function mostrarInfo(tipo) {

    let contenido = "";

    if (tipo === "noche estrellada") {
        contenido = "<h2>Pintura</h2><p>,esta moto es muy rapida la crearon en 2015 en japon es una moto deportiva muy buena <br> .</p>";
    }

    if (tipo === "escultura") {
        contenido =  "<h2>Pintura</h2><p>eta moto es muy   salio muy mala prometia mucho y noi hiso nd <br>su precio era muy caro .</p>";
    }


    if (tipo === "digital") {
        contenido =  "<h2>Pintura</h2><p>eta moto es muy buena calidad precio buen kilometraje salio en el 2020<br>su precio era muy asecible.</p>";
    }

    document.getElementById("info").innerHTML = contenido;
}