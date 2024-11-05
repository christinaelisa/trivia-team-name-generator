const teamNames = [
  "The Quizzard of Oz",
  "Tequila Mockingbird",
  "The Big Fact Theory",
  "The Trivial Pursuits",
  "Make America Trivial Again",
  "Let's Get Quizzical",
  "Risky Quizness",
  "The Quizzards of Waverly Place",
  "Quiztopher Columbus",
  "Quizzly Bears",
  "The Quizzie Rascals",
  "Let’s Taco ‘Bout Trivia",
  "The Pursuit of Happiness",
  "Master Minds",
  "No Punny Business",
  "Brewed Awakening",
  "Fact Check",
  "Get a Blue's Clue",
  "Trivia Newton John",
  "The Answer Is Always C",
  "Just Here for the Zipline",
];

const btn = document.createElement("button");

const nameDisplay = document.createElement("div");
nameDisplay.id = "team-name";
document.body.appendChild(nameDisplay);

function addButton() {
  const text = "Pick a team name!";
  btn.textContent = text;

  const paragraph = document.getElementsByTagName("p")[0];

  if (paragraph) {
    paragraph.appendChild(btn);
  } else {
    document.body.appendChild(btn);
  }
  btn.addEventListener("click", () => {
    const name = selectName(teamNames);
    nameDisplay.textContent = name;
  });
}

function selectName(array) {
  const maxLength = array.length;
  let i = Math.floor(Math.random() * maxLength);
  return array[i];
}

addButton();
