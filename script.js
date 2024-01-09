let data = [
  {
    "category": "Reaction",
    "score": 80,
    "icon": "./assets/images/icon-reaction.svg"
  },
  {
    "category": "Memory",
    "score": 92,
    "icon": "./assets/images/icon-memory.svg"
  },
  {
    "category": "Verbal",
    "score": 61,
    "icon": "./assets/images/icon-verbal.svg"
  },
  {
    "category": "Visual",
    "score": 72,
    "icon": "./assets/images/icon-visual.svg"
  }
];

const reaction = document.getElementById("reaction");
const memory = document.getElementById("memory");
const verbal = document.getElementById("verbal");
const visual = document.getElementById("visual");

reaction.innerHTML = data[0].category;
memory.innerHTML = data[1].category;
verbal.innerHTML = data[2].category;
visual.innerHTML = data[3].category;

const achievedReactionScore = document.querySelector(".achievedReactionScore");
const achievedMemoryScore = document.querySelector(".achievedMemoryScore");
const achievedVerbalScore = document.querySelector(".achievedVerbalScore");
const achievedVisualScore = document.querySelector(".achievedVisualScore");

achievedReactionScore.innerHTML = data[0].score;
achievedMemoryScore.innerHTML = data[1].score;
achievedVerbalScore.innerHTML = data[2].score;
achievedVisualScore.innerHTML = data[3].score;