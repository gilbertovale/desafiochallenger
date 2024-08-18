const textArea = document.querySelector("#text-area");
const inputText = document.querySelector("#inputText");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar() {
     const textoEncriptado = encriptar(textArea.value);
     inputText.value = textoEncriptado;
     textArea.value = "";
}


function encriptar(stringEncriptada) {

    let matrizcodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringEncriptada = stringEncriptada;


    for(let i = 0; i < matrizcodigo.length; i++) {
        if(stringEncriptada.includes(matrizcodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1]);
        }
    }
    return stringEncriptada;
}


function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    inputText.value = textoDesencriptado;
    textArea.value = "";
}


function desencriptar(stringDesencriptada) {

   let matrizcodigo = [["e","enter"] , ["a","ai"] , ["i","imes"] , ["o","ober"] , ["u","ufat"]];
   stringDesencriptada = stringDesencriptada;


   for(let i = 0; i < matrizcodigo.length; i++) {
       if(stringDesencriptada.includes(matrizcodigo[i][1])) {
           stringDesencriptada = stringDesencriptada.replaceAll(matrizcodigo[i][1], matrizcodigo[i][0]);
       }
   }
   return stringDesencriptada;
}

function btncopiar() {
    const textarea = document.getElementById('inputText');
    navigator.clipboard.writeText(textarea.value)
      .then(() => {
        alert('Texto copiado para a área de transferência!');
      })
      .catch(err => {
        console.error('Falha ao copiar: ', err);
      });
  }
  