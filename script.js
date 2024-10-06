const pierwiastki = [
  { "nazwa": "wodór", "symbol": "H", "nr": 1 },
  { "nazwa": "hel", "symbol": "He", "nr": 2 },
  { "nazwa": "lit", "symbol": "Li", "nr": 3 },
  { "nazwa": "beryl", "symbol": "Be", "nr": 4 },
  { "nazwa": "bor", "symbol": "B", "nr": 5 },
  { "nazwa": "węgiel", "symbol": "C", "nr": 6 },
  { "nazwa": "azot", "symbol": "N", "nr": 7 },
  { "nazwa": "tlen", "symbol": "O", "nr": 8 },
  { "nazwa": "fluor", "symbol": "F", "nr": 9 },
  { "nazwa": "neon", "symbol": "Ne", "nr": 10 },
  { "nazwa": "sód", "symbol": "Na", "nr": 11 },
  { "nazwa": "magnez", "symbol": "Mg", "nr": 12 },
  { "nazwa": "glin", "symbol": "Al", "nr": 13 },
  { "nazwa": "krzem", "symbol": "Si", "nr": 14 },
  { "nazwa": "fosfor", "symbol": "P", "nr": 15 },
  { "nazwa": "siarka", "symbol": "S", "nr": 16 },
  { "nazwa": "chlor", "symbol": "Cl", "nr": 17 },
  { "nazwa": "argon", "symbol": "Ar", "nr": 18 },
  { "nazwa": "potas", "symbol": "K", "nr": 19 },
  { "nazwa": "wapń", "symbol": "Ca", "nr": 20 },
  { "nazwa": "skand", "symbol": "Sc", "nr": 21 },
  { "nazwa": "tytan", "symbol": "Ti", "nr": 22 },
  { "nazwa": "wanad", "symbol": "V", "nr": 23 },
  { "nazwa": "chrom", "symbol": "Cr", "nr": 24 },
  { "nazwa": "mangan", "symbol": "Mn", "nr": 25 },
  { "nazwa": "żelazo", "symbol": "Fe", "nr": 26 },
  { "nazwa": "kobalt", "symbol": "Co", "nr": 27 },
  { "nazwa": "nikiel", "symbol": "Ni", "nr": 28 },
  { "nazwa": "miedź", "symbol": "Cu", "nr": 29 },
  { "nazwa": "cynk", "symbol": "Zn", "nr": 30 },
  { "nazwa": "gal", "symbol": "Ga", "nr": 31 },
  { "nazwa": "german", "symbol": "Ge", "nr": 32 },
  { "nazwa": "arsen", "symbol": "As", "nr": 33 },
  { "nazwa": "selen", "symbol": "Se", "nr": 34 },
  { "nazwa": "brom", "symbol": "Br", "nr": 35 },
  { "nazwa": "krypton", "symbol": "Kr", "nr": 36 },
  { "nazwa": "rubid", "symbol": "Rb", "nr": 37 },
  { "nazwa": "stront", "symbol": "Sr", "nr": 38 },
  { "nazwa": "itr", "symbol": "Y", "nr": 39 },
  { "nazwa": "cyrkon", "symbol": "Zr", "nr": 40 },
  { "nazwa": "niob", "symbol": "Nb", "nr": 41 },
  { "nazwa": "molibden", "symbol": "Mo", "nr": 42 },
  { "nazwa": "technet", "symbol": "Tc", "nr": 43 },
  { "nazwa": "ruten", "symbol": "Ru", "nr": 44 },
  { "nazwa": "rod", "symbol": "Rh", "nr": 45 },
  { "nazwa": "pallad", "symbol": "Pd", "nr": 46 },
  { "nazwa": "srebro", "symbol": "Ag", "nr": 47 },
  { "nazwa": "kadm", "symbol": "Cd", "nr": 48 },
  { "nazwa": "ind", "symbol": "In", "nr": 49 },
  { "nazwa": "cyna", "symbol": "Sn", "nr": 50 },
  { "nazwa": "antymon", "symbol": "Sb", "nr": 51 },
  { "nazwa": "tellur", "symbol": "Te", "nr": 52 },
  { "nazwa": "jod", "symbol": "I", "nr": 53 },
  { "nazwa": "ksenon", "symbol": "Xe", "nr": 54 },
  { "nazwa": "cez", "symbol": "Cs", "nr": 55 },
  { "nazwa": "bar", "symbol": "Ba", "nr": 56 },
  { "nazwa": "lantan", "symbol": "La", "nr": 57 },
  { "nazwa": "cer", "symbol": "Ce", "nr": 58 },
  { "nazwa": "praseodym", "symbol": "Pr", "nr": 59 },
  { "nazwa": "neodym", "symbol": "Nd", "nr": 60 },
  { "nazwa": "promet", "symbol": "Pm", "nr": 61 },
  { "nazwa": "samary", "symbol": "Sm", "nr": 62 },
  { "nazwa": "europ", "symbol": "Eu", "nr": 63 },
  { "nazwa": "gadolin", "symbol": "Gd", "nr": 64 },
  { "nazwa": "terb", "symbol": "Tb", "nr": 65 },
  { "nazwa": "dysproz", "symbol": "Dy", "nr": 66 },
  { "nazwa": "holm", "symbol": "Ho", "nr": 67 },
  { "nazwa": "erb", "symbol": "Er", "nr": 68 },
  { "nazwa": "tul", "symbol": "Tm", "nr": 69 },
  { "nazwa": "iterb", "symbol": "Yb", "nr": 70 },
  { "nazwa": "lutet", "symbol": "Lu", "nr": 71 },
  { "nazwa": "hafn", "symbol": "Hf", "nr": 72 },
  { "nazwa": "tantal", "symbol": "Ta", "nr": 73 },
  { "nazwa": "wolfram", "symbol": "W", "nr": 74 },
  { "nazwa": "ren", "symbol": "Re", "nr": 75 },
  { "nazwa": "os", "symbol": "Os", "nr": 76 },
  { "nazwa": "iryd", "symbol": "Ir", "nr": 77 },
  { "nazwa": "platyna", "symbol": "Pt", "nr": 78 },
  { "nazwa": "złoto", "symbol": "Au", "nr": 79 },
  { "nazwa": "rtęć", "symbol": "Hg", "nr": 80 },
  { "nazwa": "tal", "symbol": "Tl", "nr": 81 },
  { "nazwa": "ołów", "symbol": "Pb", "nr": 82 },
  { "nazwa": "bizmut", "symbol": "Bi", "nr": 83 },
  { "nazwa": "polon", "symbol": "Po", "nr": 84 },
  { "nazwa": "astat", "symbol": "At", "nr": 85 },
  { "nazwa": "radon", "symbol": "Rn", "nr": 86 },
  { "nazwa": "frans", "symbol": "Fr", "nr": 87 },
  { "nazwa": "rad", "symbol": "Ra", "nr": 88 },
  { "nazwa": "aktyn", "symbol": "Ac", "nr": 89 },
  { "nazwa": "tor", "symbol": "Th", "nr": 90 },
  { "nazwa": "protaktyn", "symbol": "Pa", "nr": 91 },
  { "nazwa": "uran", "symbol": "U", "nr": 92 },
  { "nazwa": "neptun", "symbol": "Np", "nr": 93 },
  { "nazwa": "pluton", "symbol": "Pu", "nr": 94 },
  { "nazwa": "ameryk", "symbol": "Am", "nr": 95 },
  { "nazwa": "kiur", "symbol": "Cm", "nr": 96 },
  { "nazwa": "berkel", "symbol": "Bk", "nr": 97 },
  { "nazwa": "kaliforn", "symbol": "Cf", "nr": 98 },
  { "nazwa": "einstein", "symbol": "Es", "nr": 99 },
  { "nazwa": "ferm", "symbol": "Fm", "nr": 100 },
  { "nazwa": "mendelew", "symbol": "Md", "nr": 101 },
  { "nazwa": "nobel", "symbol": "No", "nr": 102 },
  { "nazwa": "lorens", "symbol": "Lr", "nr": 103 },
  { "nazwa": "rutherford", "symbol": "Rf", "nr": 104 },
  { "nazwa": "dubn", "symbol": "Db", "nr": 105 },
  { "nazwa": "seaborg", "symbol": "Sg", "nr": 106 },
  { "nazwa": "bohr", "symbol": "Bh", "nr": 107 },
  { "nazwa": "has", "symbol": "Hs", "nr": 108 },
  { "nazwa": "meitner", "symbol": "Mt", "nr": 109 },
  { "nazwa": "darmstad", "symbol": "Ds", "nr": 110 },
  { "nazwa": "röntgen", "symbol": "Rg", "nr": 111 },
  { "nazwa": "kopernik", "symbol": "Cn", "nr": 112 },
  { "nazwa": "nihon", "symbol": "Nh", "nr": 113 },
  { "nazwa": "flerov", "symbol": "Fl", "nr": 114 },
  { "nazwa": "moskow", "symbol": "Mc", "nr": 115 },
  { "nazwa": "liwermor", "symbol": "Lv", "nr": 116 },
  { "nazwa": "tenes", "symbol": "Ts", "nr": 117 },
  { "nazwa": "oganesson", "symbol": "Og", "nr": 118 }
];

const switchElem = document.querySelector("#switch")
const leftArrowElem = document.querySelector("#left_arrow")
const rightArrowElem = document.querySelector("#right_arrow")

const counterElem = document.querySelector("#counter")
const accuracyElem = document.querySelector("#accuracy")

const buttonCorrectElem = document.querySelector("#button_correct")
const buttonWrongElem = document.querySelector("#button_wrong")

const elementElem = document.querySelector("#element")
const nrElem = document.querySelector("#nr")
const signElem = document.querySelector("#sign")
const nameElem = document.querySelector("#name")
const amountInput = document.querySelector("#amount")

let pressed = false
let mode = "symbol"
let correct_ones = 0
let tries = -1

counterElem.innerHTML = amountInput.value
amountInput.addEventListener("change", () => {
  if (tries <= 0 && !censored) {
    counterElem.innerHTML = amountInput.value
  }
})


buttonCorrectElem.addEventListener("touchstart", () => {
  handle_press(1)
})
buttonWrongElem.addEventListener("touchstart", () => {
  handle_press(0)
})

buttonCorrectElem.addEventListener("mousedown", () => {
  handle_press(1)
})
buttonWrongElem.addEventListener("mousedown", () => {
  handle_press(0)
})

document.body.addEventListener("keydown", e => {
  if(!pressed) {
    if (e.key == "ArrowRight") {
      buttonCorrectElem.classList.add("pressed")
      pressed = true
      handle_press(1)
    } else if (e.key == "ArrowLeft") {
      buttonWrongElem.classList.add("pressed")
      pressed = true
      handle_press(0)
    }
  }
})
document.body.addEventListener("keyup", e => {
  if(pressed) {
    if (e.key == "ArrowRight") {
      buttonCorrectElem.classList.remove("pressed")
      pressed = false
    } else if (e.key == "ArrowLeft") {
      buttonWrongElem.classList.remove("pressed")
      pressed = false
    }
  }
})

rightArrowElem.addEventListener("mousedown", () => {
  mode = "nazwa"
  switchElem.classList.add("margin")
  if(censored) {
    elementElem.classList.remove("censored");
    nameElem.classList.add("censored")
  }
  else {
    elementElem.classList.remove("censored");
    nameElem.classList.remove("censored")
  }
})

leftArrowElem.addEventListener("mousedown", () => {
  mode = "symbol"
  switchElem.classList.remove("margin")
  if(censored) {
    nameElem.classList.remove("censored")
    elementElem.classList.add("censored");
  }
  else {
    elementElem.classList.remove("censored");
    nameElem.classList.remove("censored")
  }
})



let censored = false;
let queue = [];
let currentElement = null; // Przechowuje aktualnie wyświetlany pierwiastek



// Funkcja tasująca tablicę
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Funkcja do obsługi przycisku
function handle_press(state) {
  if (!censored) {
    censored = true;
    if (mode == "symbol") {
      elementElem.classList.add("censored");
    }
    else {
      nameElem.classList.add("censored");

    }
    randomize_element(state);  // Przekazujemy state do randomize_element
  } else {
    elementElem.classList.remove("censored");
    nameElem.classList.remove("censored");
    censored = false;
  }
}

// Funkcja aktualizująca licznik
function update_counter() {
  counterElem.innerHTML = queue.length + 1; // Zaktualizuj licznik
}

// Funkcja losująca nowy pierwiastek i zarządzająca kolejką
function randomize_element(state) {
  // Jeśli istnieje aktualny element (pierwiastek) i state = 0, przenieś go na początek kolejki
  if (currentElement && state === 0) {
    queue.unshift(currentElement); // Dodaj na początek kolejki
  }

  // Jeśli state = 1, usuwamy element z kolejki (nie dodajemy go z powrotem)
  var accuracy = 0

  if (queue.length === 0) {
    // Jeśli kolejka jest pusta, przetasuj pierwiastki
    queue = shuffle([...pierwiastki]).slice(0, amountInput.value);
    correct_ones = state ? -1 : 0 
    tries = -1
  }


  if (state) {
    correct_ones++
  }
  tries++
  
  if (currentElement && tries > 0) {
    accuracy = parseFloat(correct_ones*100.0 / tries).toFixed(2)
    accuracyElem.innerHTML = `${accuracy}`
  }

  // Wyciągnij następny element z kolejki
  currentElement = queue.pop();

  // Aktualizuj HTML
  nameElem.innerHTML = currentElement.nazwa;
  signElem.innerHTML = currentElement.symbol;
  nrElem.innerHTML = String(currentElement.nr);

  // Zaktualizuj licznik pierwiastków
  update_counter();

  // Sprawdź, czy użytkownik zgadł wszystkie pierwiastki
  if (queue.length === 0 && state === 1) {
    // Jeśli wszystkie zgadnięte, przetasuj pierwiastki od nowa
    queue = shuffle([...pierwiastki]).slice(0, amountInput.value);
    correct_ones = state ? -1 : 0 
    tries = -1
  }
}