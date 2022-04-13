let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
const calculator = document.getElementById("calculator");

let screenValue = "";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log("Button text is ", buttonText);
    if (buttonText == "x") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "C") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "•") {
      screenValue += ".";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
    } else if (buttonText == "sci") {
        calculator.innerHTML = `
        <div class="calculator" id="calculator">
            <input type="text" name="screen" class="sciInput" id="screen"><hr>
            <table>
                <tr>
                    <td><button>X<sup>y</sup></button></td>
                    <td><button>lg</button></td>
                    <td><button>ln</button></td>
                    <td><button>(</button></td>
                    <td><button>)</button></td>
                </tr>
                <tr>
                    <td><button>&radic;X</button></td>
                    <td><button class="operand">C</button></td>
                    <td><button class="operand">←</button></td>
                    <td><button class="operand">%</button></td>
                    <td><button class="operand">/</button></td>
                </tr>
                <tr>
                    <td><button>X!</button></td>
                    <td><button>7</button></td>
                    <td><button>8</button></td>
                    <td><button>9</button></td>
                    <td><button class="operand">x</button></td>
                </tr>
                <tr>
                    <td><button>1/x</button></td>
                    <td><button>4</button></td>
                    <td><button>5</button></td>
                    <td><button>6</button></td>
                    <td><button class="operand">-</button></td>
                </tr>
                <tr>
                    <td><button>π</button></td>
                    <td><button>1</button></td>
                    <td><button>2</button></td>
                    <td><button>3</button></td>
                    <td><button class="operand">+</button></td>
                </tr>
                <tr>
                    <td><button>sci</button></td>
                    <td><button>e</button></td>
                    <td><button>0</button></td>
                    <td><button>•</button></td>
                    <td><button class="operand">=</button></td>
                </tr>
            </table>
        </div>
        
        `;
    } else if (buttonText == "←") {
      screenValue = screenValue.substring(0, screenValue.length - 1);
      screen.value = screenValue;
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}

function scintificCalculator() {
  calculator.innerHTML = `
        <div class="calculator" id="calculator">
            <input type="text" name="screen" class="sciInput" id="screen"><hr>
            <table>
                <tr>
                    <td><button>X<sup>y</sup></button></td>
                    <td><button>lg</button></td>
                    <td><button>ln</button></td>
                    <td><button>(</button></td>
                    <td><button>)</button></td>
                </tr>
                <tr>
                    <td><button>&radic;X</button></td>
                    <td><button class="operand">C</button></td>
                    <td><button class="operand">←</button></td>
                    <td><button class="operand">%</button></td>
                    <td><button class="operand">/</button></td>
                </tr>
                <tr>
                    <td><button>X!</button></td>
                    <td><button>7</button></td>
                    <td><button>8</button></td>
                    <td><button>9</button></td>
                    <td><button class="operand">x</button></td>
                </tr>
                <tr>
                    <td><button>1/x</button></td>
                    <td><button>4</button></td>
                    <td><button>5</button></td>
                    <td><button>6</button></td>
                    <td><button class="operand">-</button></td>
                </tr>
                <tr>
                    <td><button>π</button></td>
                    <td><button>1</button></td>
                    <td><button>2</button></td>
                    <td><button>3</button></td>
                    <td><button class="operand">+</button></td>
                </tr>
                <tr>
                    <td><button>sci</button></td>
                    <td><button>e</button></td>
                    <td><button>0</button></td>
                    <td><button>•</button></td>
                    <td><button class="operand">=</button></td>
                </tr>
            </table>
        </div>
        
        `;
}
