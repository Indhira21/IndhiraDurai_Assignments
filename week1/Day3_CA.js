var genderType = "Female";
function printGender(){
    let color = "brown";
    if(genderType === "Female"){
        console.log("Gender is Female");
        var age = 30;
        let color = "pink";
        console.log("Color inside if block:", color);
    }
    console.log("Age outside if block:", age);
}printGender();

genderType = "Male";
console.log("Gender Type outside function:", genderType);

