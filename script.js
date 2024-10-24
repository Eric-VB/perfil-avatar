const input = document.querySelector('#inputFile');

const campoImg = document.querySelector('#img');

const elementoDialog = document.querySelector('#dialog');

const tamanhoAtual = document.querySelector('#tamanhoAtual');

const conteudoCard = document.querySelector('#conteudoCard');

const cardPrincipal = document.querySelector('#cardPrincipal');

let atualizaFoto = false;

// ------------------------------------------------------------

input.addEventListener('change', (event) => {

    let fileInput =  event.target.files[0];

    let fileTamanho = fileInput.size;
    let fileTamanhoKB = (fileTamanho / 1024).toFixed(2);
    
    if(fileTamanhoKB > 15){

        cardPrincipal.style.height = '70%';

        conteudoCard.style.display = 'flex';

        tamanhoAtual.textContent = `Tamanho do arquivo selecionado ${fileTamanhoKB} KB`;
    
    } else {

        let imagem = URL.createObjectURL(fileInput);
    
        campoImg.src = imagem;
    
        atualizaFoto = true;
        
        setTimeout(() => {
            openDialog()
        }, 1500);

        cardPrincipal.style.height = 'auto';

        conteudoCard.style.display = 'none';

        console.log(fileTamanhoKB)
    }
})

function openDialog() {
    
    if(atualizaFoto == true){
        elementoDialog.show();
        atualizaFoto = false;
        elementoDialog.style.animation = 'slideUp 0.5s ease-out';
    }

    setTimeout(() => {
        
        elementoDialog.style.animation = 'slideDown 0.5s ease-out';
        
        setTimeout(() => {
            closeDialog();
        }, 500);

    }, 5000);
    
}

function closeDialog(){
    elementoDialog.style.animation = 'slideDown 0.5s ease-out';

    setTimeout(() => {
        elementoDialog.close();
    }, 500);

}
  