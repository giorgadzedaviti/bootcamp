
  document.getElementById("inputText").addEventListener("input", function () {
  document.getElementById("text").innerHTML = this.value;
});


document.getElementById("inputText1").addEventListener("input", function () {
  document.getElementById("surname").innerHTML = this.value;
});



const fileInput = document.getElementById("fileInput");
const uploadButton = document.getElementById("uploadButton");
const preview = document.getElementById("preview");

uploadButton.addEventListener("click", function() {
  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.addEventListener("load", function() {
    preview.src = reader.result;
  });

  reader.readAsDataURL(file);
});
