function animate_string(id) {
  var element = document.getElementById(id);
  var textNode = element.childNodes[0];
  var text = textNode.data;

  const holder = setInterval(function () {
    text = text[text.length -1] + text.substring(0, text.length -1); // Shift one character to the end
    textNode.data = text;
  }, 100);
  clearInterval(holder);
}

