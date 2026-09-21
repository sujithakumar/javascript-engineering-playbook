console.log("Script Loaded!!!!");

function fill() {

  document.getElementById('textbox').value = "Changing TextBox";
  document.getElementById('textarea').value = "Changing Text Area";

  document.getElementById('para').textContent = "Changing Paragraph";

  document.getElementById('div').innerHTML = `<button class="like-btn">Like</button>`;

}

function read() {
  // 1. Read form values -> use .value
  const inputVal = document.getElementById('textbox').value;
  const textareaVal = document.getElementById('textarea').value;

  // 2. Read visible text (ignoring inner tags) -> use .textContent
  const pText = document.getElementById('para').textContent;

  // 3. Read structural HTML markup -> use .innerHTML
  const feedHtml = document.getElementById('div').innerHTML;

  let out = "textBox: " + inputVal + " textArea:  " + textareaVal + "  para:  " + pText;
  document.getElementById('outdiv').innerHTML = out + feedHtml;
}

