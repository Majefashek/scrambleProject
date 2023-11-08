function scrambleText() {
  let text = document.getElementById("inputText").value;
  let wordsToScramble = document
    .getElementById("wordsToScramble")
    .value.split(" ");
  let asterisks = document.getElementById("asteric").value;
  var scrambleChar = "*";
  if (asterisks == "") {
    scrambleChar = "*";
  } else {
    scrambleChar = asterisks;
  }

  // Split the text into an array of words

  wordsToScramble.forEach((word) => {
    let regex = new RegExp("\\b" + word + "\\b", "gi");
    text = text.replace(regex, scrambleChar.repeat(word.length));
  });

  document.getElementById("outputText").innerText = text;
}
function copyToClipboard() {
  const textarea = document.createElement("textarea");
  const textToCopy = document.getElementById("outputText").innerText;
  textarea.value = textToCopy;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  alert("Text copied to clipboard");
}
