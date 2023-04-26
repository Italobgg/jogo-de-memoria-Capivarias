const grid = document.querySelector(".grid");

const capivaras = [
  "capivara-amiga",
  "capivara-amiga2",
  "capivara-banho",
  "capivara-bigode",
  "capivara-capivarias",
  "capivara-coelho",
  "capivara-mae",
  "capivara-policial",
  "capivara-reflexiva",
  "capivara-walpaper",
];

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

let firstCard = "";
let secondCard = "";

const checkEndGame = () => {
  const disableCards = document.querySelectorAll(".disable-card");

  if (disableCards.length == 20) {
    alert("Parabéns, você achou todos os pares !!!");
  }
};

const checkCards = () => {
  const firstCapivara = firstCard.getAttribute("data-capivara");
  const secondCapivara = secondCard.getAttribute("data-capivara");

  if (firstCapivara == secondCapivara) {
    firstCard.firstChild.classList.add("disable-card");
    secondCard.firstChild.classList.add("disable-card");
    

    firstCard = "";
    secondCard = "";

    checkEndGame();

  } else {
    setTimeout(() => {
      firstCard.classList.remove("reavel-card");
      secondCard.classList.remove("reavel-card");

      firstCard = "";
      secondCard = "";
    }, 500);
  }
};

const reavelCard = ({ target }) => {
  if (target.parentNode.className.includes("reavel-card")) {
    return;
  }

  if (firstCard == "") {
    target.parentNode.classList.add("reavel-card");
    firstCard = target.parentNode;
  } else if (secondCard == "") {
    target.parentNode.classList.add("reavel-card");
    secondCard = target.parentNode;

    checkCards();
  }
};

const createCard = (capivara) => {
  const card = createElement("div", "card");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");

  front.style.backgroundImage = `url('../images/${capivara}.png')`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener("click", reavelCard);
  card.setAttribute("data-capivara", capivara);

  return card;
};

const loadGame = () => {
  const duplicarCapivaras = [...capivaras, ...capivaras];

  const shuffledArray = duplicarCapivaras.sort(() => Math.random() - 0.5);

  shuffledArray.forEach((capivara) => {
    const card = createCard(capivara);
    grid.appendChild(card);
  });
};

loadGame();
