function replaceWithHTMLEntities(str, word, HTMLEntity) {
  return str.replace(word, HTMLEntity);
}

function convertHTML(str) {
  for (let word of str) {
    switch (word) {
      case "&":
        str = replaceWithHTMLEntities(str, word, "&amp;");
        break;
      case "<":
        str = replaceWithHTMLEntities(str, word, "&lt;");
        break;
      case ">":
        str = replaceWithHTMLEntities(str, word, "&gt;");
        break;
      case '"':
        str = replaceWithHTMLEntities(str, word, "&quot;");
        break;
      case "'":
        str = replaceWithHTMLEntities(str, word, "&apos;");
        break;
      case "<>":
        str = replaceWithHTMLEntities(str, word, "&lt;&gt;");
        break;
    }

  }
  return str;
}


module.exports = convertHTML;