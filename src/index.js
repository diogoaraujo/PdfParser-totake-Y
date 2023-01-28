const { PDFDocument, StandardFonts} = require("pdf-lib");
const { writeFileSync, readFileSync} = require("fs");
const pdfParse = require('pdf-parse');
const fs = require('fs');


async function preenchePDF() {
 
  //const timesRomanFont = await document.embedFont(StandardFonts.Courier);
  //const PaginaReferente = document.getPage();

  //const documentPage = document.getPageCount();
  //console.log(documentPage);
  
  /* for (let index = 0; index < documentPage; index++) {
    const PaginaReferente = document.getPage(index); */
    //console.log(PaginaReferente);

    const getPDF = async (file) => {
      let readFileSync = fs.readFileSync(file)
      try {
        let pdfExtract = await pdfParse(readFileSync)
        //console.log('File content: ', pdfExtract.text)
        console.log('Total pages: ', pdfExtract.numpages)
        //console.log('All content: ', pdfExtract.info)
        
        const str = pdfExtract.text;
        const regexp = (/VII - Dados do Fornecedor do Bem\nDíg.\n1 - Nome Completo\/Razão Social\n/gi);
        const matches = str.match(regexp);
        const matchessearch = str.search(regexp);
        const regexpstr = 'VII - Dados do Fornecedor do Bem\nDíg.\n1 - Nome Completo/Razão Social\n' 
        const matchessearchindice = regexpstr.length;
        console.log(regexpstr.length);
      
        console.log('índice: ',matchessearchindice + matchessearch);
        //console.log(str.split("")[20952])
    
        const indiceAddText = matchessearchindice + matchessearch;
    
        console.log(indiceAddText);
    
        
      } catch (error) {
        throw new Error(error)
      }
    }
    
 // }

  /* const y = 0
  //Preenche Nome Completo/ Razão Social
  PaginaReferente.moveTo(45, 62+y);
  PaginaReferente.drawText("PrimeiroNome NomedoMeio SobreNome\n", {
    font: timesRomanFont,
    size: 11,
    lineHeight: 10,
  });

  //Preenche CPF
  PaginaReferente.moveTo(398, 77+y);
  PaginaReferente.drawText("X\n", {
    font: timesRomanFont,
    size: 14,
    lineHeight: 10,
  });

  //Preenche CNPJ
  PaginaReferente.moveTo(488, 77+y);
  PaginaReferente.drawText("X\n", {
    font: timesRomanFont,
    size: 14,
    lineHeight: 10,
  });

  //Preenche Banco
  PaginaReferente.moveTo(45, 35+y);
  PaginaReferente.drawText("000\n", {
    font: timesRomanFont,
    size: 11,
    lineHeight: 10,
  });

  //Preenche Nome do Banco
  PaginaReferente.moveTo(110, 35+y);
  PaginaReferente.drawText("Banco New Space\n", {
    font: timesRomanFont,
    size: 11,
    lineHeight: 10,
  });
  
  //Preenche do número da Agência
  PaginaReferente.moveTo(390, 35+y);
  PaginaReferente.drawText("0101\n", {
    font: timesRomanFont,
    size: 11,
    lineHeight: 10,
  });

  //Preenche do número da Conta-Corrente
  PaginaReferente.moveTo(455, 35+y);
  PaginaReferente.drawText("01044724\n", {
    font: timesRomanFont,
    size: 11,
    lineHeight: 10,
  });

   //Preenche do número do Dígito
   PaginaReferente.moveTo(560, 35+y);
   PaginaReferente.drawText("3\n", {
     font: timesRomanFont,
     size: 11,
     lineHeight: 10,
   });

  
  writeFileSync("editado-ccb-test3.pdf", await document.save());
   */
//const document = await PDFDocument.load(readFileSync("src/ccb.pdf"));  
const pdfRead = 'src/ccb.pdf'
await getPDF(pdfRead)
}

preenchePDF().catch((err) => console.log(err));
