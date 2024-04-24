document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('calorieForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get values from form
        const age = parseInt(document.getElementById('ageOnForm').value);
        const feet = parseInt(document.getElementById('Feet').value);
        const inches = parseInt(document.getElementById('Inches').value);
        const sex = document.querySelector('input[name="Sex"]:checked').value;
        const weight = parseInt(document.getElementById('weight').value);
        const activityFactor = parseFloat(document.getElementById('ActivityLevel').value);

        // Calculations for height and weight in metric units
        const heightInInches = (feet * 12) + inches;
        const heightInCm = heightInInches * 2.54;
        const heightInMeters = heightInCm / 100;
        const weightInKg = weight * 0.453592;

        // Calculate BMR based on sex
        let BMR;
        if (sex === 'Male') {
            BMR = 10 * weightInKg + 6.25 * heightInCm - 5 * age + 5;
        } else {
            BMR = 10 * weightInKg + 6.25 * heightInCm - 5 * age - 161;
        }

        // Calculate TDEE using the activity factor
        const TDEE = BMR * activityFactor;

        // Calculate BMI
        const BMI = weightInKg / (heightInMeters * heightInMeters);

          // Display results with explanations
          document.getElementById('formHolder').innerHTML = `
          <h1>Results:</strong></h1>
          <br>
          <br>
          <strong>Basal Metabolic Rate (BMR):</strong> ${BMR.toFixed(2)} calories/day.<br>
          <em>Your BMR is the number of calories your body needs to accomplish its most basic (basal) life-sustaining functions.</em><br><br>
          <strong>Total Daily Energy Expenditure (TDEE):</strong> ${TDEE.toFixed(2)} calories/day.<br>
          <em>Your TDEE is an estimate of how many calories you need in a day based on your activity level. It's calculated by multiplying your BMR by an activity factor.</em><br><br>
          <strong>Body Mass Index (BMI):</strong> ${BMI.toFixed(2)}.<br>
          <em>BMI is a simple calculation using a person's height and weight. The formula categorizes whether a person is underweight, normal weight, overweight, or obese, based on the value calculated.</em>
      `;


        // Console output for debugging
        console.log(`Age: ${age}, Sex: ${sex}, Height: ${heightInMeters} meters, Weight: ${weightInKg} kg, Activity Factor: ${activityFactor}, BMR: ${BMR}, TDEE: ${TDEE}, BMI: ${BMI}`);
    });
});
