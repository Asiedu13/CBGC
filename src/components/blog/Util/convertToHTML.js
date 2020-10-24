import marked from "marked";

export let getMarkdownText = (val) => {
  console.log(val);
  if(val){
      var rawMarkup = marked(val, { sanitize: true });
      return { __html: rawMarkup };
  }
  else {
      return;
  }
};

// module.exports = getMarkdownText();
