/**
 * Separa una descripción en bloques de texto y bloques de código, donde los bloques de código están encerrados entre
 * tags "```" con un título opcional de la forma "title:Título del bloque de código". Los bloques de texto se mezclan
 * con los bloques de código según su orden de aparición en la descripción.
 *
 * @param {string} description - La descripción a separar en bloques.
 * @returns {Array.<string|{ title: string, code: string }>} - Un array que contiene bloques de texto y bloques de código,
 * en el orden en que aparecen en la descripción.
 */

function extractCodeBlocks(description) {
    const codeBlocks = [];

    for (const match of description.matchAll(/```([\w\W]+?)```/g)) {
      const [fullMatch, code] = match;
      const title = code.match(/title:(.*)/)?.[1]?.trim() ?? "Code";
      codeBlocks.push({ title, code });
    }

    return codeBlocks;
  }

function splitTextIntoBlocks(description, codeBlocks) {
    const textBlocks = [];

    for (const [index, block] of description.split(/```([\w\W]+?)```/).entries()) {
        const isCodeBlock = index % 2 === 1;
        if (isCodeBlock) {
        const matchingBlockIndex = codeBlocks.findIndex(({ code }) => code === block);
        if (matchingBlockIndex !== -1) {
            textBlocks.push(codeBlocks[matchingBlockIndex]);
            codeBlocks.splice(matchingBlockIndex, 1);
        }
        } else if (block) {
        textBlocks.push(block);
        }
    }

    return textBlocks;
}

    export function splitDescriptionIntoBlocks(description) {
    // Extraer los bloques de código de la descripción
    const codeBlocks = extractCodeBlocks(description);

    // Dividir la descripción en bloques de texto y mezclarlos con los bloques de código según su orden de aparición
    const textBlocks = splitTextIntoBlocks(description, codeBlocks);

    // Devolver un array que contiene los bloques de texto y los bloques de código, en el orden en que aparecen
    return [...textBlocks, ...codeBlocks];
}

