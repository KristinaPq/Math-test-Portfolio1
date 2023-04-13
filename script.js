let button = document.getElementById("finish");

button.addEventListener("click", checkTest);

function checkTest()    {
    let result = 0;
    let ansver1 = document.getElementById("quastion1").value;
    
    if (ansver1 === "64") {
        result++;
    }
    let ansver2 = document.getElementById("quastion2").value;
    if (ansver2 === "12") {
        result++;
    }
    let ansver3 = document.getElementById("quastion3").value;
    if (ansver3 === "392") {
        result++;
    }
    let ansver4 = document.getElementById("quastion4").value;
    if (ansver4 === "2") {
        result++;
    }
    let ansver5 = document.getElementById("quastion5").value;
    if (ansver5 === "576") {
        result++;
    }
    let ansver6 = document.getElementById("quastion6").value;
    if (ansver6 === "601") {
        result++;
    }
    let ansver7 = document.getElementById("quastion7").value;
    if (ansver7 === "484") {
        result++;
    }
    let ansver8 = document.getElementById("quastion8").value;
    if (ansver8 === "15") {
        result++;
    }

    alert("Правильные ответы: " + result);
}

