var stack = {X:0, Y:0, Z:0, T:0};
var s = document.getElementById("stack");
var e = "";
ShowStack();

function ShowStack() {
    s.innerHTML = "";
    for (i in stack) { 
        s.innerHTML = i + ": " + stack[i].toPrecision(10) + "<br/>" + s.innerHTML;
    }
    console.log("T value: " + stack.T);
    console.log("Z value: " + stack.Z);
    console.log("Y value: " + stack.Y);
    console.log("X value: " + stack.X);
    console.log("-------------");
}
function Entry() {
    e = document.getElementById("number").value;
    if (e != "")
    {
        MoveStack();
    }
}
function MoveStack() {
    stack.T = stack.Z; stack.Z = stack.Y; stack.Y = stack.X; stack.X = e*1;
    ShowStack();
}
function DropSetX() {
    stack.X = e; stack.Y = stack.Z; stack.Z = stack.T; stack.T = 0
}
function MathAdd() {
    e = +stack.Y + +stack.X
    DropSetX()
    ShowStack()
}
function MathSub() {
    e = stack.Y - stack.X
    DropSetX()
    ShowStack()
}
function MathMultiply() {
    e = stack.Y * stack.X
    DropSetX()
    ShowStack()
}
function MathDivide() {
    e = stack.Y / stack.X
    DropSetX()
    ShowStack()
}
function MathSin() {
    e = Math.sin(stack.X)
    DropSetX()
    ShowStack()
}
function MathCos() {
    e = Math.cos(stack.X)
    DropSetX()
    ShowStack()
}
function MathTan() {
    e = Math.tan(stack.X)
    DropSetX()
    ShowStack()
}
function PlusOrMinus() {
    if (document.getElementById("number").value == "")
    {
        document.getElementById("number").value = "-"
    }
    else if (document.getElementById("number").value == "-")
    {
        document.getElementById("number").value = "+"
    }
    else if (document.getElementById("number").value == "+")
    {
        document.getElementById("number").value = "-"
    }
}
function Clear() {
    stack.X = 0
    stack.Y = 0
    stack.Z = 0
    stack.T = 0
    ShowStack()
    console.log("clearing X,Y,Z,T")
}
function ClearCE() {
    document.getElementById("number").value = ""
}

// Listens for keypress (0-9 & .)
document.addEventListener("keydown", function onEvent(event) {
    if (event.key == "1") {
        console.log("1 key pressed")
        document.getElementById("number").value += "1"
    }
    else if (event.key == "2") {
        console.log("2 key pressed")
        document.getElementById("number").value += "2"
    }
    else if (event.key == "3") {
        console.log("3 key pressed")
        document.getElementById("number").value += "3"
    }
    else if (event.key == "4") {
        console.log("4 key pressed")
        document.getElementById("number").value += "4"
    }
    else if (event.key == "5") {
        console.log("5 key pressed")
        document.getElementById("number").value += "5"
    }
    else if (event.key == "6") {
        console.log("6 key pressed")
        document.getElementById("number").value += "6"
    }
    else if (event.key == "7") {
        console.log("7 key pressed")
        document.getElementById("number").value += "7"
    }
    else if (event.key == "8") {
        console.log("8 key pressed")
        document.getElementById("number").value += "8"
    }
    else if (event.key == "9") {
        console.log("9 key pressed")
        document.getElementById("number").value += "9"
    }
    else if (event.key == "0") {
        console.log("0 key pressed")
        document.getElementById("number").value += "0"
    }
    else if (event.key == ".") {
        console.log(". key pressed")
        document.getElementById("number").value += "."
    }
    // Enter key & math buttons
    else if (event.key == "Enter") {
        console.log("Enter key pressed")
        Entry()
        document.getElementById("number").value = ""
    }
    else if (event.key == "+") {
        console.log("Plus sign key pressed")
        MathAdd()
    }
    else if (event.key == "-") {
        console.log("Minus sign key pressed")
        MathSub()
    }
    else if (event.key == "*") {
        console.log("* key pressed")
        MathMultiply()
    }
    else if (event.key == "/") {
        console.log("/ key pressed")
        MathDivide()
    }
    else if (event.key == "Escape") {
        console.log("Escape key pressed")
        Clear()
    }
    else if (event.key == "Backspace") {
        console.log("Backspace key pressed")
        document.getElementById("number").value = ""
    }
});

