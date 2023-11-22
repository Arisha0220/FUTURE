var input = document.getElementById("inputt");
var button1 = document.getElementById("button1");

function registrationForm(){

    var input_result = perseInt(input.value);

    if (input_result==21){
        var newdiv = document.createElement("div");
        var form = document.createElement("form");
        var input1 = document.createElement("input");
        input1.type  = "text";
        input1.placeholder = "имя";
        form.appendChild(input1);

        var input2 = document.createElement("input");
        input2.type = " text";
        input2.placeholder = "Фамилия";
        form.appendChild(input2);

        var input3 = document.createElement(input);
        input3.placeholder = "Email";
        form.appendChild(input3);

        newdiv.id ="block-inside";
        newdiv.className = "lolkek";

        newdiv.appendChild(form);
        document.body.appendChild(newdiv);


    }


}