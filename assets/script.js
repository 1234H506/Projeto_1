function toggleMode() {
    // Pegamos o elemento body , acessamos a tag html com document.documentElement
    const html = document.documentElement;

    // Adicionamos ou removemos a classe light no elemento html
    html.classList.toggle("light");

    // pegar a tag img
    const img = document.querySelector("#profile img");

    //substituir a imagem
    if (html.classList.contains("light")) {
        //se tiver a classe light, adicionar a imagem light.png
        img.setAttribute("src", "./assets/avatar.png");
    } else {
        //se não tiver a classe light, manter a imagem dark.png
        img.setAttribute("src", "./assets/avatar-light.png");
    }
    
}