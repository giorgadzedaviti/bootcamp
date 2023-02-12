
  document.getElementById("inputText").addEventListener("input", function () {
  document.getElementById("text").innerHTML = this.value;
});


document.getElementById("inputText1").addEventListener("input", function () {
  document.getElementById("surname").innerHTML = this.value;
});


//to upload photo
const uploadBtn = document.querySelector('.upload');
const fileInput = document.querySelector('#file-input');
const preview = document.querySelector('#preview');

uploadBtn.addEventListener('click', function() {
  fileInput.click();
});

fileInput.addEventListener('change', function() {
  const reader = new FileReader();
  reader.addEventListener('load', function() {
    preview.innerHTML = '<img src="' + reader.result + '"/>';
  });
  reader.readAsDataURL(fileInput.files[0]);
});

//to generate on the display our text
document.getElementById("zogadiinfo").addEventListener("input", function () {
  document.getElementById("textaboutme").innerHTML = this.value;
});






const inputField = document.getElementById("email");
const myImage = document.getElementById("myImage");
const textOutput = document.getElementById("textOutput");

inputField.addEventListener("input", function() {
  if (inputField.value) {
    myImage.style.display = "block";
    textOutput.style.display = "block";
    textOutput.innerHTML = inputField.value;
  } else {
    myImage.style.display = "none";
    textOutput.style.display = "none";
  }
});




const inputField1 = document.querySelector(".mobilenumber");
const myImage1 = document.getElementById("myImage1");
const textOutput1 = document.getElementById("textOutput1");

inputField1.addEventListener("input", function() {
  if (inputField1.value) {
    myImage1.style.display = "block";
    textOutput1.style.display = "block";
    textOutput1.innerHTML = inputField1.value;
  } else {
    myImage1.style.display = "none";
    textOutput1.style.display = "none";
  }
});


// input validation for name
const inputText = document.getElementById("inputText");
const validImage = document.getElementById("valid-image");
const warningImage = document.getElementById("warning-image");

inputText.addEventListener("input", function() {
  if (inputText.value.length >= 2 && /^[\u10A0-\u10FF]+$/.test(inputText.value)) {
    inputText.style.borderColor = "#98E37E";
    validImage.style.display = "block";
    warningImage.style.display = "none";
  } else {
    inputText.style.borderColor = "#EF5050";
    validImage.style.display = "none";
    warningImage.style.display = "block";
  }
});

//input validation for surname
const inputText1 = document.getElementById("inputText1");
const validImage1 = document.getElementById("valid-image1");
const warningImage1 = document.getElementById("warning-image1");

inputText1.addEventListener("input", function() {
  if (inputText1.value.length >= 2 && /^[\u10A0-\u10FF]+$/.test(inputText1.value)) {
    inputText1.style.borderColor = "#98E37E";
    validImage1.style.display = "block";
    warningImage1.style.display = "none";
  } else {
    inputText1.style.borderColor = "#EF5050";
    validImage1.style.display = "none";
    warningImage1.style.display = "block";
  }
});

//email validation
const emailInput = document.getElementById("email");
const validImage2 = document.getElementById("valid-image2");
const warningText = document.getElementById("warning-image2");

emailInput.addEventListener("input", function() {
  if (this.value.endsWith("@redberry.ge")) {
    emailInput.style.borderColor = "#98E37E";
    validImage2.style.display = "block";
    warningText.style.display = "none";
  } else {
    emailInput.style.borderColor = "#EF5050";
    validImage2.style.display = "none";
    warningText.style.display = "block";

  }
});




//validation for phone number
const input = document.querySelector(".mobilenumber");
const validImage3 = document.querySelector("#valid-image3");
const warningImage3 = document.querySelector("#warning-image3");

input.addEventListener("input", function() {
  const number = input.value;
  if (number.startsWith("+995") && number.length === 14) {
    input.style.borderColor = "#98E37E";
    validImage3.style.display = "block";
    warningImage3.style.display = "none";
  } else {
    input.style.borderColor = "#EF5050";
    validImage3.style.display = "none";
    warningImage3.style.display = "block";
  }
});


