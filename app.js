// question 1
let lum1 = prompt("Give first number");
let lum2 = prompt("Give second number");
if (num1 > num2) {
    console.log(lum1);
} else {
    console.log(lum2);
}

// question 2
let signdetector = prompt("Give me number");
if (signdetector > 0) {
    alert("The sign is +");
}
else {
    alert("The sign is -");
}

// question 3
let num1 = prompt("Give first number");
let num2 = prompt("Give second number");
let num3 = prompt("Give third number");
let num4 = prompt("Give fourth number");
let num5 = prompt("Give fifth number");
if (num1 > num2 & num1 > num3 & num1 > num4 & num1 > num5) {
    alert(num1);
} else if (num2 > num1 & num2 > num3 & num2 > num4 & num2 > num5) {
    alert(num2);
} else if (num3 > num2 & num3 > num1 & num3 > num4 & num3 > num5) {
    alert(num3);
} else if (num4 > num1 & num4 > num2 & num4 > num3 & num4 > num5) {
    alert(num4);
} else {
    alert(num5)
}

// question 4 

for (let i = 0; i < 16; i++) {
    if (i % 2 != 1) {
        console.log(i + " is even")
    } else {
        console.log(i + " is odd")
    }

}


// question 5

let marks = prompt("what is your marks?");
if (marks < 60) {
    alert("Fail")
} else if (marks > 90) {
    alert("A")
} else if (marks > 80) {
    alert("B")
} else if (marks > 70) {
    alert("C")
} else {
    alert("D")
}

// question 6
for (let i = 0; i < 101; i++) {
    if (i % 3 == 0) {
        console.log("FIzz")
    } else if (i % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(i);
    }

}


// question 7
for (i = 1; i <= 5; i++) {
    for (j = 1; j <= i; j++) {
        document.write("*")
    }
    document.write("<br>")
}



