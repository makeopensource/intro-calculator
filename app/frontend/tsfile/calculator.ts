
class Calculator {
    currentdisplay: string = ""
    currentNumber: number = 0;
    previousNumber: number = 0;
    totalEval: number = 0;
    currentSymbol: string = "";
    previousSymbol: string = "";
    display_screen: string = (document.getElementById("result") as HTMLInputElement).value

    constructor(){

    }

    // Clears the display 
    full_clear = () => {
        this.currentNumber = 0;
        this.previousNumber = 0; 
        this.totalEval = 0;
        this.clear_screen()
    }

    clear_screen = () => {
        this.currentdisplay = ""
        let display_screen = document.getElementById("result") as HTMLInputElement
        display_screen.value = this.currentdisplay
    }
 
    // Updates the current display bases on input string
    updateDisplay = (input: string) => {
        this.currentdisplay += input
        let display_screen = document.getElementById("result") as HTMLInputElement
        display_screen.value = this.currentdisplay

    }

    // Checks which button was pressed and determines what the functionality should be using switch statements
    button_pressed = (btn: string) => {
        switch (btn){
            case "delete":
                if (this.currentdisplay != ""){
                    this.currentdisplay = this.currentdisplay.substring(0, this.currentdisplay.length - 1)
                    let display_screen = document.getElementById("result") as HTMLInputElement
                    display_screen.value = this.currentdisplay
                    return
                }
            case "clear":
                this.full_clear()
                return
            case "equal":
                if (this.currentdisplay != ""){
                    if (this.currentSymbol == "+"){
                        this.totalEval += parseFloat(this.currentdisplay)
                    }
                    if (this.currentSymbol == "-"){
                        this.totalEval -= parseFloat(this.currentdisplay)
                    }
                    this.clear_screen()
                    this.updateDisplay(this.totalEval.toString())
                }
            case "/":
                this.previousSymbol = this.currentSymbol
                this.currentSymbol = btn
                this.previousNumber = this.currentNumber
                this.currentNumber = parseFloat(this.currentdisplay)
                return
            case "*":
                this.previousSymbol = this.currentSymbol
                this.currentSymbol = btn
                this.previousNumber = this.currentNumber
                this.currentNumber = parseFloat(this.currentdisplay)
                return
             case "+":
                this.clear_screen()
                this.add()
                this.previousSymbol = this.currentSymbol
                this.currentSymbol = btn
                return
            case "-":
                this.previousSymbol = this.currentSymbol
                this.currentSymbol = btn
                this.clear_screen()
                if (this.previousNumber != 0){
                    this.subtract()
                    return
                }
                return

        }
        this.updateDisplay(btn)
        this.currentNumber = parseFloat(this.currentdisplay)
    }

        add = () => {
            this.totalEval = (this.currentNumber) + (this.totalEval)
            this.clear_screen()
        }

        subtract = () => {
            let result = (this.currentNumber) - (this.previousNumber)
            this.currentNumber = result
            this.clear_screen()
        }
}

// Init function that adds EventListeners to each of the buttons on the calculator
function init(){
    let calculator = new Calculator()
    function button_listener(){
        document.getElementById("button_1")?.addEventListener('click', function(){calculator.button_pressed("1")})
        document.getElementById("button_2")?.addEventListener('click', function(){calculator.button_pressed("2")})
        document.getElementById("button_3")?.addEventListener('click', function(){calculator.button_pressed("3")})
        document.getElementById("button_4")?.addEventListener('click', function(){calculator.button_pressed("4")})
        document.getElementById("button_5")?.addEventListener('click', function(){calculator.button_pressed("5")})
        document.getElementById("button_6")?.addEventListener('click', function(){calculator.button_pressed("6")})
        document.getElementById("button_7")?.addEventListener('click', function(){calculator.button_pressed("7")})
        document.getElementById("button_8")?.addEventListener('click', function(){calculator.button_pressed("8")})
        document.getElementById("button_9")?.addEventListener('click', function(){calculator.button_pressed("9")})
        document.getElementById("button_0")?.addEventListener('click', function(){calculator.button_pressed("0")})
        document.getElementById("deci")?.addEventListener('click', function(){calculator.button_pressed(".")})
        document.getElementById("clear")?.addEventListener('click', function(){calculator.button_pressed("clear")})
        document.getElementById("delete")?.addEventListener('click', function(){calculator.button_pressed("delete")})
        document.getElementById("divide")?.addEventListener('click', function(){calculator.button_pressed("/")})
        document.getElementById("multiply")?.addEventListener('click', function(){calculator.button_pressed("*")})
        document.getElementById("add")?.addEventListener('click', function(){calculator.button_pressed("+")})
        document.getElementById("sub")?.addEventListener('click', function(){calculator.button_pressed("-")})
        document.getElementById("equal")?.addEventListener('click', function(){calculator.button_pressed("equal")})
    }
    button_listener();
}

document.addEventListener('DOMContentLoaded', init);