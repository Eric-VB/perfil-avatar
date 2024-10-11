const input = document.querySelector('#inputFile');
const campoImg = document.querySelector('#img');


input.addEventListener('change', (event) => {

    let fileInput =  event.target.files;

    let inputSelecionado = fileInput[0];

    let imagem = URL.createObjectURL(inputSelecionado);

    campoImg.src = imagem;

})
