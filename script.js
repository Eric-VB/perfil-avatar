const input = document.querySelector('#inputFile');
const campoImg = document.querySelector('#img');
let atualizaFoto = 0;

input.addEventListener('change', (event) => {

    let fileInput =  event.target.files;

    let inputSelecionado = fileInput[0];

    let imagem = URL.createObjectURL(inputSelecionado);

    campoImg.src = imagem;

    atualizaFoto = 1;
    
    setTimeout(() => {
        dialog()
    }, 2000)
})

function dialog() {
    
    if(atualizaFoto == 1){
        atualizaFoto = 0;
    }
    
    console.log(atualizaFoto)
    
}