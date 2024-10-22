const input = document.querySelector('#inputFile');
const campoImg = document.querySelector('#img');
const elementoDialog = document.querySelector('#dialog');

let atualizaFoto = false;


input.addEventListener('change', (event) => {

    let fileInput =  event.target.files;

    let inputSelecionado = fileInput[0];

    let imagem = URL.createObjectURL(inputSelecionado);

    campoImg.src = imagem;

    atualizaFoto = true;
    
    setTimeout(() => {
        openDialog()
    }, 1500);
})

function openDialog() {
    
    if(atualizaFoto == true){
        elementoDialog.show();
        atualizaFoto = false;
    }
    
}

function closeDialog(){
    elementoDialog.close();
}