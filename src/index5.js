let fs = require('fs'),
PDFParser = require("pdf2json");

//const pdfParser = new PDFParser(this,1);

const pdfCaminho = 'path_file';


//Apartir daqui adicionar a programação que vai ser executada depois que o arquivo for lido:
//Esse bloco de código carrega para leitura o pdf e testa se o arquivo existe no diretório indicado:
if (fs.existsSync(pdfCaminho)) {
    var pdfParser = new PDFParser();
    pdfParser.on("pdfParser_dataError", function (errData) { // Caso haja um erro na leitura do arquivo, retornará ERRO
       console.error(errData.parserError)
    });
    pdfParser.on("pdfParser_dataReady", function (pdfData) { //Se não houver erros na leitura do pdf
       //console.log(pdfData)
    });
    pdfParser.loadPDF(pdfCaminho); //carregue o arquivo pdf para leitura, de acordo com o caminho definido (pdfCaminho)
    //Apartir daqui, execute o código que quiser:
    console.log('Arquivo localizado');
  } else {
    console.log('Arquivo NÃO localizado');
  }

  pdfParser.on("pdfParser_dataReady", function (pdfData) {
    pdfData.formImage.Pages.forEach(function(page, index) { 
    page.Texts.forEach(function(text, index) { 
    text.R.forEach(function(t) { 
    //console.log(pdfData.formImage.Pages[0].Texts[0].R[0].T); // Cada Pages[] possui um array chamado Texts
    console.log(pdfData.formImage.Pages[5].Texts[0].T);
    //console.log(pdfData.formImage.Pages[1].Texts[0]) //Reparei que ao rodar essa linha é impresso a mesma informação da posição dos textos diversas vezes e não entendi porquê.
    //fs.writeFile("./forms.fields.json", JSON.stringify(pdfParser.getAllFieldsTypes()), ()=>{});
    // console.log(t.T);

    const pdfDataParser = t.T
   
    const regexp = /VII/gi;
    const matches = pdfDataParser.match(regexp);

    console.log(matches);
    });
    });
    });
 });

    

 
 //console.log(pdfData.formImage.Pages[0].Texts[1]) mostra a posição de cada elemento R que possui um texto T dentro dele,
//Ele mostra um resultado na tela da forma a seguir para cada elemento Texts dentro da Page 0:
//Pode-se ver que R é um array, onde a chave "T" recebe a segunda linha do arquivo
/* {
  x: 5.068,
  y: 5.1,
  w: 546.805,
  sw: 0.29428125,
  clr: 0,
  A: 'left',
  R: [
    {
      T: 'EXERC%C3%8DCIOS%20RESOLVIDOS%20DE%20JAVASCRIPT%20',
      S: -1,
      TS: [Array]
    }
  ]
}*/