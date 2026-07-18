function btn(){

    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value/100;

    let bmi = weight/(height*height);

    document.getElementById("result").innerText = `Your BMI is: ${bmi.toFixed(2)}`
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";

    if (bmi < 18.5) {
        document.getElementById("category").innerText = "Under Weight";
        document.getElementById("category").style.color = "orange";
    }
    else if (bmi < 25) {
        document.getElementById("category").innerText = "Normal Weight";
        document.getElementById("category").style.color = "green";
    }
    else if (bmi < 30) {
        document.getElementById("category").innerText = "Over Weight";
        document.getElementById("category").style.color = "darkorange";
    }
    else if (bmi > 30) {
        document.getElementById("category").innerText = "Obse";
        document.getElementById("category").style.color = "red";
    }
  

}

function rst(){

    document.getElementById("result").innerText = "Result Appears Here";
    document.getElementById("category").innerText = "Category Appears Here";

    document.getElementById("category").style.color = "";

}

