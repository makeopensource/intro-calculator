"use strict";
class Calculator {
    constructor() {
        this.currentdisplay = "";
        this.currentNumber = 0;
        this.previousNumber = 0;
        this.totalEval = 0;
        this.currentSymbol = "";
        this.previousSymbol = "";
        this.display_screen = document.getElementById("result").value;
        this.clear = () => {
            this.currentdisplay = "";
            let display_screen = document.getElementById("result");
            display_screen.value = this.currentdisplay;
        };
        this.updateDisplay = (input) => {
            this.currentdisplay += input;
            let display_screen = document.getElementById("result");
            display_screen.value = this.currentdisplay;
            console.log(this.currentdisplay);
        };
        this.button_pressed = (btn) => {
            switch (btn) {
                case "delete":
                    if (this.currentdisplay != "") {
                        this.currentdisplay = this.currentdisplay.substring(0, this.currentdisplay.length - 1);
                        let display_screen = document.getElementById("result");
                        display_screen.value = this.currentdisplay;
                        return;
                    }
                case "clear":
                    this.clear();
                    return;
                case "/":
                    this.previousSymbol = this.currentSymbol;
                    this.currentSymbol = btn;
                    return;
                case "*":
                    this.previousSymbol = this.currentSymbol;
                    this.currentSymbol = btn;
                    return;
                case "+":
                    this.previousSymbol = this.currentSymbol;
                    this.currentSymbol = btn;
                    return;
                case "-":
                    this.previousSymbol = this.currentSymbol;
                    this.currentSymbol = btn;
                    return;
            }
            this.updateDisplay(btn);
        };
    }
}
function init() {
    let calculator = new Calculator();
    function button_listener() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        (_a = document.getElementById("button_1")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () { calculator.button_pressed("1"); });
        (_b = document.getElementById("button_2")) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () { calculator.button_pressed("2"); });
        (_c = document.getElementById("button_3")) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () { calculator.button_pressed("3"); });
        (_d = document.getElementById("button_4")) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function () { calculator.button_pressed("4"); });
        (_e = document.getElementById("button_5")) === null || _e === void 0 ? void 0 : _e.addEventListener('click', function () { calculator.button_pressed("5"); });
        (_f = document.getElementById("button_6")) === null || _f === void 0 ? void 0 : _f.addEventListener('click', function () { calculator.button_pressed("6"); });
        (_g = document.getElementById("button_7")) === null || _g === void 0 ? void 0 : _g.addEventListener('click', function () { calculator.button_pressed("7"); });
        (_h = document.getElementById("button_8")) === null || _h === void 0 ? void 0 : _h.addEventListener('click', function () { calculator.button_pressed("8"); });
        (_j = document.getElementById("button_9")) === null || _j === void 0 ? void 0 : _j.addEventListener('click', function () { calculator.button_pressed("9"); });
        (_k = document.getElementById("button_0")) === null || _k === void 0 ? void 0 : _k.addEventListener('click', function () { calculator.button_pressed("0"); });
        (_l = document.getElementById("deci")) === null || _l === void 0 ? void 0 : _l.addEventListener('click', function () { calculator.button_pressed("."); });
        (_m = document.getElementById("clear")) === null || _m === void 0 ? void 0 : _m.addEventListener('click', function () { calculator.button_pressed("clear"); });
        (_o = document.getElementById("delete")) === null || _o === void 0 ? void 0 : _o.addEventListener('click', function () { calculator.button_pressed("delete"); });
        (_p = document.getElementById("divide")) === null || _p === void 0 ? void 0 : _p.addEventListener('click', function () { calculator.button_pressed("/"); });
        (_q = document.getElementById("multiply")) === null || _q === void 0 ? void 0 : _q.addEventListener('click', function () { calculator.button_pressed("*"); });
        (_r = document.getElementById("add")) === null || _r === void 0 ? void 0 : _r.addEventListener('click', function () { calculator.button_pressed("+"); });
        (_s = document.getElementById("sub")) === null || _s === void 0 ? void 0 : _s.addEventListener('click', function () { calculator.button_pressed("-"); });
        (_t = document.getElementById("equal")) === null || _t === void 0 ? void 0 : _t.addEventListener('click', function () { calculator.button_pressed("equal"); });
    }
    button_listener();
}
document.addEventListener('DOMContentLoaded', init);
