document.getElementById("inputText").addEventListener("input", function () {
    document.getElementById("text").innerHTML = this.value;
  });


  const inputText5 = document.getElementById("inputText");
  const validImage5 = document.getElementById("valid-image");
  const warningImage5 = document.getElementById("warning-image");
  
  inputText5.addEventListener("input", function() {
    if (inputText5.value.length >= 2 && /^[\u10A0-\u10FF]+$/.test(inputText.value)) {
      inputTex5t.style.borderColor = "#98E37E";
      validImage5.style.display = "block";
      warningImage5.style.display = "none";
    } else {
      inputText5.style.borderColor = "#EF5050";
      validImage5.style.display = "none";
      warningImage5.style.display = "block";
    }
  });
  