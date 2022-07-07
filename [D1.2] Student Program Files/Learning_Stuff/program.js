var favcolor = prompt("Please give you favoite color.");

$(function () {
    $("#my-button").mouseover(function() {
        $("body").css("background-color", favcolor);
    });
});

$(function () {
    $('ol li').each(function(index, element) {
        if(index%2==0) {
            $(element).css('color', 'red');
        }
        else {
            $(element).css('color', 'blue');
        }
    });
});

$(function () {
    $("#my-button-name").on('click', function(event) {
        var inputname = $("#text-field").val();
        $('ol').append('<li></li>');
        $('li').last().text(inputname);
    });
});

$(function() {
    $("#my-button-animation").click(function(){
        $("p").FadeOut(100, function(){
            alert("done fading");
        });
    });
});

$(function() {
    $('.greeting').animate({backgroundcolor: 'red'}, 500, function() {
        alert("It's Red");
    });
});

console.log("Hello World!");
function hello(name) {
    console.log(name);
}
hello("Adam");

function add(a, b) {
    return a + b;
}

numberadding = add(5,2);
console.log(numberadding);

function multiplication(a, b) {
    return a * b;
}
multiplication = add(6,7);
console.log(multiplication)

function addstrings(a, b) {
    return a + " " + b;
}

seccondname = addstrings("Adam", "Gardner");
console.log(seccondname);

function bigclass(numofstudents) {
    if(numofstudents>30) {
        return "Big Class";
    }
}

function smallclass(numofstudents) {
    if(numofstudents<10) {
        return "Small Class";
    }
}

function tellclasssize(numofstudents) {
    if(numofstudents>30) {
        return "Large Class";
    }
    else {
        return "Small Class";
    }
}

sizeofclass = tellclasssize(37);
console.log(sizeofclass);

for (var x = 1; x < 100; x++) {
    console.log(x);
}
for (var z = 100; z > 0; z--) {
    console.log(z);
}

var a = 0;
var a = "hello";

function isithot(tempituretoday) {
    if(tempituretoday>85) {
        return "Hot";
    }
    else {
        return "Not Hot";
    }
}

for (var loading = 1; loading <101; loading++) {
    console.log(loading + "%");
}
console.log("Done!");

function buildCounter() {
    var c = 0;
    function counter() {
        c=c+1;

        return c;
    };
    return counter;
}
counter = buildCounter();
console.log(counter());
console.log(counter());

























//this is the first test version of the farenheit to celcius calculator:

//function FtoC(TempitureF) {
   //return (TempitureF - 32)*.5556;
//}

//var TempitureF = prompt("testing");
//var TempitureC = FtoC(TempitureF);
//console.log(TempitureC);


// Version 2 Starting:

var whichtoconvert = prompt("Type 1 to convert Fahrenheit to Celsius, Type 2 to convert Celsius to Fahrenheit.");
function whattoconvert(whichtoconvert) {
    if(whichtoconvert = 1) {
        var TempitureF1 = prompt("What is the tempiture in Fahrenheit?");
        function FtoC(TempitureF1) {
            var TempitureC1 = (TempitureF1 - 32)*.5556;
        FtoC(TempitureF1);
        console.log(TempitureC1);
        }    }
}
whattoconvert();

//whattoconvert(whichtoconvert);
//function FtoC(TempitureF1) {
   // var TempitureC1 = (TempitureF1 - 32)*.5556;
//}
//function CtoF(TempitureC2) {
   // var TempitureF2 = TempitureC2*1.8 + 32;
//}
//function finalresults(whichtoconvert) {
  //  if(whichtoconvert = 1) {
  //      alert(TempitureC1);
  //  }
   // else {
   //     alert(TempitureF2);
    //}
//}
//finalresults(whichtoconvert);