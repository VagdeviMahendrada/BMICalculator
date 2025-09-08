
    function calculateBMI() {
      const height = parseFloat(document.getElementById("heightValue").value);
      const weight = parseFloat(document.getElementById("weightValue").value);
      const heightUnit = document.getElementById("heightUnit").value;
      const weightUnit = document.getElementById("weightUnit").value;
      const resultBox = document.getElementById("bmiResult");
 
      if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
        resultBox.innerHTML = "⚠️ Please enter valid, positive numbers.";
        return;
      }
      var heightMeters=0;
      // let heightMeters = heightUnit === "cm" ? height / 100 : height * 0.0254;
      if(heightUnit==="cm"){
        heightMeters=height/100;
      }
      else if(heightUnit==="inches"){
        heightMeters=height * 0.0254;
      }
      else{
        heightMeters=height * 0.3048;
      }
      let weightKg = weightUnit === "kg" ? weight : weight * 0.453592;
 
      const bmi = (weightKg / (heightMeters * heightMeters)).toFixed(2);
      let category = "";
 
      if (bmi < 18.5) category = "Underweight";
      else if (bmi < 24.9) category = "Normal weight";
      else if (bmi < 29.9) category = "Overweight";
      else category = "Obese";
 
      resultBox.innerHTML = `📊 Your BMI is <strong>${bmi}</strong><br><span class="category">${category}</span>`;
    }
  