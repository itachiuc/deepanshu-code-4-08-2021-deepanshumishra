var data = [{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, { "Gender": "Male", "HeightCm": 161, "WeightKg":
85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 166,
"WeightKg": 62}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70}, {"Gender": "Female",
"HeightCm": 167, "WeightKg": 82}, {"Gender": "Female", "HeightCm": 135, "WeightKg": 51}];

function healthRisk(val)
{
    if(val<= 18.4)
        return "Underweight";

    else if(val>=18.5 && val<=25.9)
        return "Normal weight";

    else if(val>=25 && val<=29.9)
        return "Overweight";

    else if(val>=30 && val<=34.9)
        return "Moderately obese";
    
    else if(val>=35 && val<=39.9)
        return "Severely obese";
    
    else
        return "Very severely obese";
}
function Category(val)
{
    if(val<= 18.4)
        return "Malnutrition Risk";

    else if(val>=18.5 && val<=25.9)
        return "Low Risk";

    else if(val>=25 && val<=29.9)
        return "Enhanced Risk";

    else if(val>=30 && val<=34.9)
        return "Medium Risk";
    
    else if(val>=35 && val<=39.9)
        return "High Risk";
    
    else
        return "Very High Risk";
}

var count=0;
data.map(s=>{
    var bmi= s.WeightKg/((s.HeightCm/100)*(s.HeightCm/100));
    bmi=bmi.toFixed(1);
    s.BMI= bmi;
    s.HealthRisk = healthRisk(bmi);
    s.Category = Category(bmi);
    if(bmi>=25 && bmi<=29.9)
       count++;
    
})
console.log(data);
console.log("The total number of Overweight is: ", count);
