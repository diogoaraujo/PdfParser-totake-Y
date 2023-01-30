const { PDFDocument, StandardFonts } = require("pdf-lib");
const { writeFileSync, readFileSync } = require("fs");
const pdfParse = require("pdf-parse");
const fs = require("fs");

async function preenchePDF() {
  const file = readFileSync("./src/ccb.pdf");
  const pages = await pdfParse(file);
  let str = pages.text;

  const regexp =
    /VII - Dados do Fornecedor do Bem\nDíg.\n1 - Nome Completo\/Razão Social\n/gi;
  const matches = str.match(regexp);

  const matchessearch = str.search(regexp);
  const regexpstr =
    "VII - Dados do Fornecedor do Bem\nDíg.\n1 - Nome Completo/Razão Social\n";
  const matchessearchindice = regexpstr.length + matchessearch;

  regexpstr.replace(regexpstr, matchessearch, 'GAMBIARRA');

  // for (let i = 0; i < matches.length; i++) {
  //   let lala = str.(regexpstr, matches[i] + "GAMBIARRA");
  //   str = lala;
  // }

  writeFileSync("./ihiohasdasdasdio.txt", str);
}

preenchePDF();
