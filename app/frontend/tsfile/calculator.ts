
class Calculator {
    currentdisplay: string = ""
    equate_pressed: boolean = false
    currentNumber: number = 0;
    previousNumber: number = 0;
    totalEval: number = 0;
    history: string[] = []
    display_screen: string = (document.getElementById("result") as HTMLInputElement).value

    constructor(){

    }

    // Clears the display 
    full_clear = () => {
        this.currentNumber = 0;
        this.previousNumber = 0; 
        this.totalEval = 0;
        this.history = []
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
        if (this.equate_pressed == true){
            this.full_clear()
            this.equate_pressed = false
        }
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
                this.equate()
                return
                
            case "/":
                if (!Array.isArray(this.history)){
                    return
                }
                if (this.history.length == 1){
                    this.history.push("/")
                    this.clear_screen()
                    return
                }
                this.history.push(this.currentNumber.toString())
                this.history.push("/")
                this.clear_screen()
                return

            case "*":
                if (!Array.isArray(this.history)){
                    return
                }
                if (this.history.length == 1){
                    this.history.push("*")
                    this.clear_screen()
                    return
                }
                this.history.push(this.currentNumber.toString())
                this.history.push("*")
                this.clear_screen()
                return

            case "+":
                if (!Array.isArray(this.history)){
                    return
                }
                if (this.history.length == 1){
                    this.history.push("+")
                    this.clear_screen()
                    return
                }
                this.history.push(this.currentNumber.toString())
                this.history.push("+")
                this.clear_screen()
                return

                
            case "-":
                if (!Array.isArray(this.history)){
                    return
                }
                if (this.history.length == 1){
                    this.history.push("-")
                    this.clear_screen()
                    return
                }
                this.history.push(this.currentNumber.toString())
                this.history.push("-")
                this.clear_screen()
                return
                

        }
        this.updateDisplay(btn)
        this.currentNumber = parseFloat(this.currentdisplay)
    }

        add = (number_1: number, number_2:number) => {
            this.totalEval = (number_1) + (number_2)
        }

        subtract = (number_1: number, number_2:number) => {
            this.totalEval = (number_2) - (number_1)
        }

        multiply = (number_1: number, number_2: number) => {
            this.totalEval = (number_1) * (number_2)
        }

        divide = (number_1: number, number_2: number) => {
            this.totalEval = (number_2)/number_1
        }

        equate = () => {
            this.equate_pressed = true
            this.history.push(this.currentNumber.toString())
                // console.log(this.history)
                for (let i = 0; i < this.history.length; i++){
                    console.log(this.totalEval)
                    if(this.history[i] == "+"){
                        this.currentNumber = parseFloat(this.history[i+1])
                        this.add(this.currentNumber, this.previousNumber)
                        this.history[i+1] = this.totalEval.toString()
                        console.log(this.history)
                    }

                    if(this.history[i] == "-"){
                        this.currentNumber = parseFloat(this.history[i+1])
                        this.subtract(this.currentNumber, this.previousNumber)
                        this.history[i+1] = this.totalEval.toString()
                        console.log(this.history)
                    }

                    if(this.history[i] == "*"){
                        this.currentNumber = parseFloat(this.history[i+1])
                        this.multiply(this.currentNumber, this.previousNumber)
                        this.history[i+1] = this.totalEval.toString()
                        console.log(this.history)
                    }

                    if(this.history[i] == "/"){
                        this.currentNumber = parseFloat(this.history[i+1])
                        this.divide(this.currentNumber, this.previousNumber)
                        this.history[i+1] = this.totalEval.toString()
                        console.log(this.history)
                    }

                    else{
                        this.previousNumber = parseFloat(this.history[i])
                    }
                }
                this.clear_screen()
                this.history = []
                this.history = [this.totalEval.toString()]
                this.updateDisplay(this.totalEval.toString())
                return
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