import logo from './logo.svg';
import './App.css';
let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    }
    else if (e.target.innerHTML == "C") {
      string = " "
      document.querySelector("input").value = string;
    }
    else {
      console.log(e.target)
      string = string + e.target.innerHTML
      document.querySelector("input").value = string;
    }
  })
})
function App() {
  return (



  <>
  <title>Calculator</title>

<body>
  <h1>
    W.E.L.C.O.M.E
  </h1>
  <div class="put">
    <input class="box" type="text"/>
  </div>
  <div class="contaner ">
    <div class="row1">
      <button class="button">C</button>
      <button class="button">(</button>
      <button class="button">)</button>
      <button class="button">/</button>
    </div>
    <div class="row2">
      <button class="button">7</button>
      <button class="button">8</button>
      <button class="button">9</button>
      <button class="button">*</button>
    </div>
    <div class="row3">
      <button class="button">4</button>
      <button class="button">5</button>
      <button class="button">6</button>
      <button class="button">-</button>
    </div>
    <div class="row4">
      <button class="button">1</button>
      <button class="button">2</button>
      <button class="button">3</button>
      <button class="button">+</button>
    </div>
    <div class="row5">
      <button class="button">0</button>
      <button class="button">.</button>
      <button class="button">%</button>
      <button class="button">=</button>
    </div>
  </div>
</body>
       </>
  );
}

export default App;
