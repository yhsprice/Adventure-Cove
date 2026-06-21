const holes = [
  { hole: 1, par: 2 }, { hole: 2, par: 3 }, { hole: 3, par: 4 },
  { hole: 4, par: 3 }, { hole: 5, par: 2 }, { hole: 6, par: 2 },
  { hole: 7, par: 2 }, { hole: 8, par: 2 }, { hole: 9, par: 2 },
  { hole: 10, par: 3 }, { hole: 11, par: 2 }, { hole: 12, par: 3 },
  { hole: 13, par: 2 }, { hole: 14, par: 2 }, { hole: 15, par: 2 },
  { hole: 16, par: 2 }, { hole: 17, par: 3 }, { hole: 18, par: 2 }
];

const challengeTypes = {
  HIGHEST_PAR_DECIDES: "The player currently losing chooses how everyone takes their first shot.",
  CLOSEST_TO_HOLE: "Closest to the hole without sinking it wins -1 stroke. If your ball goes in, add +2.",
  UNDER_PAR_REMOVE_WORST: "Beat par and your worst score disappears.",
  HOLE_IN_ONE_ATTACK: "Get a hole-in-one and give +2 strokes to any player.",
  SPIN_WHEEL: "Spin the wheel to learn your fate.",
  SAFE_SHOT: "Safe Shot: no walls or obstacles touched = -1 stroke.",
  OBSTACLE_TROUBLE: "Mutiny! The player currently in first place receives +1 stroke after the hole. The app will apply it.",
  COMEBACK_COVE: "Comeback Cove: losing player gets -1 if they finish par or better.",
  TREASURE_STEAL: "Treasure Steal: hole-in-one earns -1 stroke.",
  WATERFALL_WHISPER: "Waterfall Whisper: everyone stays quiet for first shots. Talk early = +1.",
  LUCKY_BOUNCE: "Lucky Bounce: bounce off a wall and sink it = -1 stroke.",
  TRIVIA: "Do You Dare? Answer a trivia question correctly before your turn. If correct, move your ball forward 1 normal step. No jumping or lunging."
};

const challenges = [
{ text: "Ahoy! Stand on one foot for your first shot.", type: "NORMAL" },
{ text: "Turn the putter upside down and use the handle for your first shot.", type: "NORMAL" },
{ text: "Challenge Captain: the player with the highest score chooses how everyone takes their first shot.", type: "HIGHEST_PAR_DECIDES" },
{ text: "Face away from the hole and putt between your legs for your first shot.", type: "NORMAL" },
{ text: "Closest Wins: after the hole, choose the player whose ball stopped closest to the hole without going in. The app will deduct 1 stroke from their score. Any player whose ball goes in during the challenge gets 2 strokes added.", type: "CLOSEST_TO_HOLE" },
{ text: "Use only one hand for your first shot.", type: "NORMAL" },
{ text: "Pool Shark: strike the ball like you're shooting pool.", type: "NORMAL" },
{ text: "Lucky Break: finish this hole under par and the app will automatically remove your worst hole score so far.", type: "UNDER_PAR_REMOVE_WORST" },
{ text: "Pirate Revenge: score a hole-in-one and the app will let you add 2 strokes to another player's score.", type: "HOLE_IN_ONE_ATTACK" },
{ text: "Swing granny style between your legs for your first shot.", type: "NORMAL" },
{ text: "Spin the wheel to learn your fate.", type: "SPIN_WHEEL" },
{ text: "First player to sink a putt may move another player's ball up to one club length.", type: "NORMAL" },
{ text: "Forget the putter! Use your foot for the entire hole.", type: "NORMAL" },
{ text: "Sit cross-legged and take your first shot.", type: "NORMAL" },
{ text: "Eyes Closed: close your eyes before your first putt.", type: "NORMAL" },
{ text: "Bowl the ball toward the hole. No putter allowed.", type: "NORMAL" },
{ text: "Take your second shot with your eyes closed.", type: "NORMAL" },
{ text: "Use your non-dominant hand for the entire hole.", type: "NORMAL" },
{ text: "Crab Walk Shot: stand sideways for your first shot.", type: "NORMAL" },
{ text: "Best Shot Switch: choose another player to take your first shot for you.", type: "NORMAL" },
{ text: "Bank Shot: your first shot must touch any wall before your second shot.", type: "NORMAL" },
{ text: "No Peeking: look at the hole, then close your eyes before your first shot.", type: "NORMAL" },
{ text: "Two-Finger Grip: hold the putter with only two fingers on your first shot.", type: "NORMAL" },
{ text: "Last Place Rule: the player with the highest score chooses how everyone takes their first shot.", type: "NORMAL" },
{ text: "Leader Trouble: the player with the highest score must use their non-dominant hand on their first shot.", type: "NORMAL" },
{ text: "Tap and Freeze: after your first shot, stay where you are until everyone has taken their turn. Other players must shoot around you.", type: "NORMAL" },
{ text: "Player's Choice: choose any fun way to take your first shot.", type: "NORMAL" },
{ text: "Straight Arm Shot: keep your elbows straight on your first shot.", type: "NORMAL" },
{ text: "Mini Boss Hole: everyone must use the same challenge chosen by the first player.", type: "NORMAL" },
{ text: "Safe Shot: if your ball reaches the hole without touching a wall or obstacle, earn 1 stroke deduction. After the hole, select qualifying players and the app will apply it.", type: "SAFE_SHOT" },
{ text: "Obstacle Trouble: Mutiny! The player currently in first place receives +1 stroke after the hole. The app will apply it.", type: "OBSTACLE_TROUBLE" },
{ text: "Comeback Cove: if the player currently in last place finishes at par or better, they earn a 1 stroke deduction. After the hole, select the player and the app will apply it.", type: "COMEBACK_COVE" },
{ text: "Treasure Steal: score a hole-in-one and earn an extra 1-stroke deduction. After the hole, select the player and the app will apply it.", type: "TREASURE_STEAL" },
{ text: "Captain's Call: the youngest player chooses one rule for everyone's first shot.", type: "NORMAL" },
{ text: "Waterfall Whisper: everyone must stay quiet until all first shots are complete. Anyone who talks receives 1 extra stroke. After the hole, select those players and the app will apply it.", type: "WATERFALL_WHISPER" },
{ text: "Lucky Bounce: if your ball bounces off a wall and then goes in, earn a 1-stroke deduction. After the hole, select qualifying players and the app will apply it.", type: "LUCKY_BOUNCE" },
{ text: "The Detour: your first shot must be aimed at a wall or obstacle instead of directly at the hole.", type: "NORMAL" },
{ text: "Steady Captain: keep both hands touching each other on the putter for the entire hole.", type: "NORMAL" },
{ text: challengeTypes.TRIVIA, type: "TRIVIA" },
  ];

const triviaQuestions = [
  { question: "What color do you get when you mix red and yellow?", choices: ["Green", "Orange", "Purple", "Blue"], answer: 1 },
  { question: "How many legs does a spider have?", choices: ["6", "8", "10", "12"], answer: 1 },
  { question: "Which planet is known as the Red Planet?", choices: ["Earth", "Mars", "Jupiter", "Venus"], answer: 1 },
  { question: "What animal says moo?", choices: ["Horse", "Cow", "Pig", "Sheep"], answer: 1 },
  { question: "How many days are in a week?", choices: ["5", "6", "7", "8"], answer: 2 },
  { question: "Which ocean is the largest?", choices: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: 2 },
  { question: "What fruit is yellow and curved?", choices: ["Apple", "Pear", "Banana", "Peach"], answer: 2 },
  { question: "What do bees make?", choices: ["Milk", "Honey", "Butter", "Cheese"], answer: 1 },
  { question: "How many wheels does a bicycle have?", choices: ["1", "2", "3", "4"], answer: 1 },
  { question: "Which animal is called the King of the Jungle?", choices: ["Tiger", "Lion", "Elephant", "Bear"], answer: 1 },

  { question: "What is frozen water called?", choices: ["Steam", "Ice", "Snow", "Rain"], answer: 1 },
  { question: "Which holiday comes on December 25?", choices: ["Halloween", "Thanksgiving", "Christmas", "Easter"], answer: 2 },
  { question: "What color are emeralds?", choices: ["Blue", "Red", "Green", "Purple"], answer: 2 },
  { question: "How many months are in a year?", choices: ["10", "11", "12", "13"], answer: 2 },
  { question: "Which bird is often linked with pirates?", choices: ["Parrot", "Crow", "Robin", "Owl"], answer: 0 },
  { question: "What shape has three sides?", choices: ["Square", "Circle", "Triangle", "Rectangle"], answer: 2 },
  { question: "Which season comes after spring?", choices: ["Winter", "Fall", "Summer", "Rainy"], answer: 2 },
  { question: "What do you call a baby dog?", choices: ["Kitten", "Puppy", "Cub", "Foal"], answer: 1 },
  { question: "Which sport uses a bat and ball?", choices: ["Soccer", "Baseball", "Swimming", "Hockey"], answer: 1 },
  { question: "What color is the sky on a clear day?", choices: ["Blue", "Green", "Purple", "Orange"], answer: 0 },

  { question: "How many hours are in a day?", choices: ["12", "18", "24", "36"], answer: 2 },
  { question: "Which animal has a long trunk?", choices: ["Hippo", "Elephant", "Rhino", "Camel"], answer: 1 },
  { question: "What do plants need to make food?", choices: ["Sunlight", "Candy", "Milk", "Sand"], answer: 0 },
  { question: "Which month comes after June?", choices: ["May", "July", "August", "September"], answer: 1 },
  { question: "What is the opposite of hot?", choices: ["Warm", "Cool", "Cold", "Dry"], answer: 2 },
  { question: "How many sides does a square have?", choices: ["3", "4", "5", "6"], answer: 1 },
  { question: "Which animal lives in a shell?", choices: ["Snail", "Dog", "Horse", "Rabbit"], answer: 0 },
  { question: "What color is a stop sign?", choices: ["Blue", "Green", "Yellow", "Red"], answer: 3 },
  { question: "What do you use to tell time?", choices: ["Clock", "Fork", "Pillow", "Book"], answer: 0 },
  { question: "Which planet do we live on?", choices: ["Mars", "Earth", "Venus", "Mercury"], answer: 1 },

  { question: "How many letters are in the English alphabet?", choices: ["24", "25", "26", "27"], answer: 2 },
  { question: "Which animal is known for hopping?", choices: ["Kangaroo", "Bear", "Lion", "Shark"], answer: 0 },
  { question: "What do cows drink?", choices: ["Milk", "Water", "Juice", "Soda"], answer: 1 },
  { question: "Which day comes before Friday?", choices: ["Wednesday", "Thursday", "Saturday", "Monday"], answer: 1 },
  { question: "What is the largest land animal?", choices: ["Giraffe", "Elephant", "Hippo", "Rhino"], answer: 1 },
  { question: "What color are school buses usually?", choices: ["Yellow", "Blue", "Green", "Red"], answer: 0 },
  { question: "How many fingers are on one hand?", choices: ["4", "5", "6", "7"], answer: 1 },
  { question: "Which animal says oink?", choices: ["Pig", "Cow", "Dog", "Duck"], answer: 0 },
  { question: "What is the first month of the year?", choices: ["December", "January", "February", "March"], answer: 1 },
  { question: "What do fish breathe through?", choices: ["Lungs", "Gills", "Noses", "Mouths"], answer: 1 }
];
  
  const wheelOptions = [
  { label: "Instant hole in one", action: "INSTANT_ONE" },
  { label: "Interlock your arms with another player and try to swing", action: "PLAY_NOTE" },
  { label: "Kick the ball and use no hands or club", action: "PLAY_NOTE" },
  { label: "Add 2 to your score for this round", action: "ADD_TWO" },
  { label: "Play normal", action: "PLAY_NOTE" }
];

const roastLines = [
  "{name} spent the day negotiating with the walls. The walls won.",
  "{name} played with the confidence of a captain and the aim of a sleepy seagull.",
  "{name} found adventure, danger, and apparently every obstacle on the course.",
  "{name} did not lose. They simply donated strokes to the Cove.",
  "{name} brought big pirate energy and suspicious putting choices.",
  "{name} made the course look harder than tax season.",
  "{name} may need a map, a compass, and a tiny golf miracle.",
  "{name} turned mini golf into a full survival documentary.",
  "{name} played like the putter owed them money.",
  "{name} gave the ball freedom. Too much freedom.",
  "{name} showed bravery, spirit, and questionable geometry.",
  "{name} had several shots that are now under investigation by Cove officials.",
  "{name} was one bounce away from greatness. Several times. Allegedly.",
  "{name} discovered that the shortest path to the hole is not always the path they selected.",
  "{name} played with heart. The ball played with chaos."
];

const titleLines = [
  "Captain Chaos", "The Wall Whisperer", "Human Pinball", "Putter Pirate Supreme",
  "Master of Disaster", "The Lucky Buccaneer", "One-Legged Legend", "Cove Navigator",
  "Professional Obstacle Tester", "The Almost Champion", "Treasure Hunter",
  "Davy Jones' Favorite Golfer", "The Bounce Bandit", "The Silent Storm",
  "The Putt Plunderer", "Captain Comeback"
];

let players = [];
let scores = [];
let currentHoleIndex = 0;
let currentPlayerIndex = 0;
let currentMode = "Normal";
let currentChallenge = null;
let wheelPlayerIndex = 0;
let wheelBonuses = {};
let wheelNotes = {};
let wheelRotation = 0;
let pendingAfterHole = null;
let gameEvents = [];
let triviaPlayerIndex = 0;
let usedTriviaQuestions = [];
let currentTriviaQuestion = null;

let gameInProgress = false;

history.pushState({ screen: "app" }, "", location.href);

window.addEventListener("popstate", function () {
  if (gameInProgress && scores.length) {
    const leave = confirm("Leave this game? Your current scores could be lost.");

    if (!leave) {
      history.pushState({ screen: "app" }, "", location.href);
      return;
    }
  }

  showOnly("setupScreen");
});

window.addEventListener("beforeunload", function (event) {
  if (gameInProgress && scores.length) {
    saveCurrentGame();
    event.preventDefault();
    event.returnValue = "";
  }
});

function makeStats() {
  return {
    holeInOnes: 0,
    underPar: 0,
    overPar: 0,
    pars: 0,
    wheelSpins: 0,
    penalties: 0,
    bonuses: 0,
    challenges: 0,
    worstHoleScore: 0,
    worstHole: null,
    bestHoleScore: Infinity,
    bestHole: null
  };
}

function championPhoto() {
  const cameraInput = document.getElementById("championCamera");

  if (!cameraInput) {
    alert("Champion camera input is missing from the HTML.");
    return;
  }

  cameraInput.value = "";
  cameraInput.click();
}

document.addEventListener("DOMContentLoaded", function () {
  const cameraInput = document.getElementById("championCamera");

  if (!cameraInput) return;

  cameraInput.addEventListener("change", function (event) {
    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {
      const img = new Image();

      img.onload = function () {
        createChampionPhoto(img);
      };

      img.src = e.target.result;
    };

    reader.readAsDataURL(file);
  });
});

function createChampionPhoto(img) {
  const results = scores
    .map(p => ({
      name: p.name,
      total: totalFor(p)
    }))
    .sort((a, b) => a.total - b.total);

  const winner = results[0];

  const canvas = document.getElementById("shareCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = 1080;
  canvas.height = 1080;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
  const x = (canvas.width / 2) - (img.width / 2) * scale;
  const y = (canvas.height / 2) - (img.height / 2) * scale;

  ctx.drawImage(img, x, y, img.width * scale, img.height * scale);

  ctx.fillStyle = "rgba(0, 0, 0, 0.35)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#f5d36f";
  ctx.fillRect(40, 40, 1000, 115);

  ctx.fillStyle = "#06451f";
  ctx.font = "bold 52px Arial";
  ctx.textAlign = "center";
  ctx.fillText("🏴‍☠️ ADVENTURE COVE CHAMPION 🏴‍☠️", 540, 115);

  ctx.fillStyle = "rgba(255, 248, 234, 0.92)";
  ctx.fillRect(90, 710, 900, 260);

  ctx.strokeStyle = "#c8953f";
  ctx.lineWidth = 8;
  ctx.strokeRect(90, 710, 900, 260);

  ctx.fillStyle = "#06451f";
  ctx.font = "bold 72px Arial";
  ctx.fillText(winner.name, 540, 805);

  ctx.fillStyle = "#17321f";
  ctx.font = "bold 46px Arial";
  ctx.fillText(`${winner.total} STROKES`, 540, 875);

  ctx.font = "bold 34px Arial";
  ctx.fillText("Can you beat this score?", 540, 930);

  ctx.fillStyle = "#f5d36f";
  ctx.font = "bold 80px Arial";
  ctx.fillText("🏆", 540, 690);

  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 34px Arial";
  ctx.fillText("Adventure Cove Mini Golf • Wilmington, Ohio", 540, 1035);

 canvas.toBlob(async function (blob) {
  if (!blob) {
    alert("Could not create champion photo.");
    return;
  }

  const file = new File(
    [blob],
    "Adventure-Cove-Champion-Photo.png",
    { type: "image/png" }
  );

  const shareText =
    `🏆 ${winner.name} is the Adventure Cove Champion with ${winner.total} strokes! Think you can beat this score?`;

  try {

  if (navigator.canShare && navigator.canShare({ files: [file] })) {

    await navigator.share({
      title: "Adventure Cove Champion",
      text: shareText,
      files: [file]
    });

  } else if (navigator.share) {

    await navigator.share({
      title: "Adventure Cove Champion",
      text: shareText,
      url: "https://yhsprice.github.io/Adventure-Cove/"
    });

  } else {

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Adventure-Cove-Champion-Photo.png";
    link.click();

    alert("Champion photo downloaded.");
  }

} catch (error) {
  console.log(error);

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "Adventure-Cove-Champion-Photo.png";
  link.click();

  alert("Sharing was cancelled or blocked, so the photo downloaded instead.");
}
}, "image/png");
}

function buildSetup() {
  const box = document.getElementById("playerInputs");

  if (box.children.length === 0) {
    for (let i = 1; i <= 6; i++) {
      const input = document.createElement("input");
      input.maxLength = 8;
      input.placeholder = `Player ${i}`;
      input.id = `player${i}`;
      input.autocomplete = "off";
      box.appendChild(input);
    }
  }

  buildScoreButtons();
}

function buildScoreButtons() {
  const box = document.getElementById("scoreButtons");
  if (!box) return;

  box.innerHTML = "";

  for (let i = 1; i <= 8; i++) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = i;
    btn.onclick = () => enterScore(i);
    box.appendChild(btn);
  }

  const plus = document.createElement("button");
  plus.type = "button";
  plus.textContent = "9+";
  plus.className = "gold-btn";
  plus.onclick = () => {
    const val = Number(prompt("Enter strokes:"));
    if (Number.isInteger(val) && val > 0) enterScore(val);
  };
  box.appendChild(plus);
}

function showOnly(id) {
  [
    "setupScreen",
    "choiceScreen",
    "pathScreen",
    "playScreen",
    "specialScreen",
    "wheelScreen",
    "finalScreen",
    "historyScreen"
  ].forEach(screen => {
    document.getElementById(screen).classList.add("hidden");
  });

  document.getElementById(id).classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startGame() {
  players = [];

  for (let i = 1; i <= 6; i++) {
    const input = document.getElementById(`player${i}`);
    const name = input.value.trim().toUpperCase();

    if (name) {
      players.push(name.substring(0, 8));
    }
  }

  if (players.length < 1) {
    alert("Enter at least one player. Even pirates need a crew.");
    return;
  }

  scores = players.map(name => ({
    name,
    holes: Array(18).fill(null),
    adjustments: Array(18).fill(0),
    notes: Array(18).fill(""),
    stats: makeStats()
  }));

  currentHoleIndex = 0;
  currentPlayerIndex = 0;
  currentMode = "Normal";
  currentChallenge = null;
  pendingAfterHole = null;
  gameEvents = [];
  gameInProgress = true;
  saveCurrentGame();
  updateChoiceScreen();
  showOnly("choiceScreen");
}

function updateChoiceScreen() {
  const hole = holes[currentHoleIndex];

  document.getElementById("choiceHole").textContent = hole.hole;
  document.getElementById("choicePar").textContent = hole.par;
  document.getElementById("choicePlayers").textContent = players.length;

  renderLiveScoreboard("choiceScoreboard");
}

function chooseNormal() {
  currentMode = "Normal";
  currentChallenge = null;
  pendingAfterHole = null;
  startHolePlay();
}

function choosePath() {
  newChallenge();
  showOnly("pathScreen");
}

function newChallenge() {
  currentChallenge = challenges[Math.floor(Math.random() * challenges.length)];

  document.getElementById("challengeText").textContent = currentChallenge.text;

  const preview = document.getElementById("challengePreview");
  const message = getChallengePreviewMessage(currentChallenge.type);

  if (message) {
    preview.textContent = message;
    preview.classList.remove("hidden");
  } else {
    preview.classList.add("hidden");
  }
}

function getChallengePreviewMessage(type) {
  if (type === "HIGHEST_PAR_DECIDES") return highestScoreMessage();
  if (type === "SPIN_WHEEL") return "Each player spins, then takes their turn right away.";
  if (type === "TRIVIA") return "Each player answers a trivia question before taking their turn. Correct answer = move forward 1 normal step.";
  if (type === "CLOSEST_TO_HOLE") return "After everyone scores, choose the closest player and mark if anyone sank the ball.";
  if (type === "UNDER_PAR_REMOVE_WORST") return "After the hole, the app removes the worst previous score for anyone who beats par.";
  if (type === "HOLE_IN_ONE_ATTACK") return "After the hole, anyone with a hole-in-one can add +2 to another player.";
  if (["SAFE_SHOT", "OBSTACLE_TROUBLE", "COMEBACK_COVE", "TREASURE_STEAL", "WATERFALL_WHISPER", "LUCKY_BOUNCE"].includes(type)) {
    return "After this hole, you can choose who gets the score change.";
  }
  return "";
}

function acceptChallenge() {
  currentMode = "Challenge";
  pendingAfterHole = null;

  gameEvents.push({
    type: "challenge",
    text: currentChallenge.text,
    hole: holes[currentHoleIndex].hole
  });

  if (currentChallenge.type === "SPIN_WHEEL") {
    startWheelChallenge();
  } else if (currentChallenge.type === "TRIVIA") {
    startTriviaChallenge();
  } else {
    startHolePlay();
  }
}

function highestScoreMessage() {
  const totals = scores.map(p => ({
    name: p.name,
    total: totalFor(p)
  }));

  const max = Math.max(...totals.map(p => p.total));

  if (max === 0) {
    const randomName = players[Math.floor(Math.random() * players.length)];
    return `No leader yet. Random pick: ${randomName} decides how everyone must hit the ball.`;
  }

  const leaders = totals.filter(p => p.total === max).map(p => p.name);

  if (leaders.length === 1) {
    return `${leaders[0]} is currently losing and decides how everyone must hit the ball.`;
  }

  const randomLeader = leaders[Math.floor(Math.random() * leaders.length)];
  return `There is a tie for highest score. Random pick: ${randomLeader} decides how everyone must hit the ball.`;
}

  function startTriviaChallenge() {
  triviaPlayerIndex = 0;
  usedTriviaQuestions = [];
  showTriviaQuestion();
}

function showTriviaQuestion() {
  currentPlayerIndex = triviaPlayerIndex;
  currentTriviaQuestion = getRandomTriviaQuestion();

  document.getElementById("specialTitle").textContent = `Do You Dare, ${players[triviaPlayerIndex]}?`;

  document.getElementById("specialContent").innerHTML = `
    <div class="message-box">
      Answer correctly and move your ball forward <strong>1 normal step</strong>.<br>
      No jumping, running, or lunging.
    </div>

    <div class="rule-panel">
      <h3>${currentTriviaQuestion.question}</h3>

      ${currentTriviaQuestion.choices.map((choice, index) => `
        <button class="blue-btn" onclick="answerTrivia(${index})">
          ${choice}
        </button>
      `).join("")}
    </div>
  `;

  showOnly("specialScreen");
}

function getRandomTriviaQuestion() {
  if (usedTriviaQuestions.length >= triviaQuestions.length) {
    usedTriviaQuestions = [];
  }

  let index;

  do {
    index = Math.floor(Math.random() * triviaQuestions.length);
  } while (usedTriviaQuestions.includes(index));

  usedTriviaQuestions.push(index);
  return triviaQuestions[index];
}

function answerTrivia(choiceIndex) {
  const correct = choiceIndex === currentTriviaQuestion.answer;

  document.getElementById("specialTitle").textContent = correct ? "Correct!" : "Not This Time!";

  document.getElementById("specialContent").innerHTML = `
    <div class="message-box">
      ${correct
        ? `${players[triviaPlayerIndex]}, move your ball forward <strong>1 normal step</strong>.`
        : `${players[triviaPlayerIndex]}, play from where your ball is.`}
    </div>

    <div class="center">
      <button onclick="continueTriviaChallenge()">Continue</button>
    </div>
  `;
}

function continueTriviaChallenge() {
  triviaPlayerIndex++;

  if (triviaPlayerIndex >= players.length) {
    startHolePlay();
  } else {
    showTriviaQuestion();
  }
}

function startHolePlay() {
  currentPlayerIndex = 0;
  updatePlayScreen();
  showOnly("playScreen");
}

function updatePlayScreen() {
  const hole = holes[currentHoleIndex];

  document.getElementById("playHole").textContent = hole.hole;
  document.getElementById("playPar").textContent = hole.par;
  document.getElementById("playMode").textContent = currentMode;
  document.getElementById("turnName").textContent = players[currentPlayerIndex];

  renderLiveScoreboard("playScoreboard");

  const challengeBox = document.getElementById("activeChallenge");
  const messageBox = document.getElementById("challengeMessage");

  if (currentMode === "Challenge" && currentChallenge) {
    challengeBox.textContent = currentChallenge.text;
    challengeBox.classList.remove("hidden");
  } else {
    challengeBox.classList.add("hidden");
  }

  let msg = "";

  if (currentChallenge?.type === "HIGHEST_PAR_DECIDES") {
    msg = highestScoreMessage();
  }

  if (currentChallenge?.type === "SPIN_WHEEL") {
    const bonus = wheelBonuses[currentPlayerIndex];
    const note = wheelNotes[currentPlayerIndex];

    if (bonus?.forceScore) msg = `${players[currentPlayerIndex]} spun Instant Hole in One. Score will be saved as 1.`;
    else if (bonus?.add) msg = `${players[currentPlayerIndex]} spun Add 2. Enter strokes normally; the app will add 2.`;
    else if (note) msg = `${players[currentPlayerIndex]} spun: ${note}.`;
  }

  if (msg) {
    messageBox.textContent = msg;
    messageBox.classList.remove("hidden");
  } else {
    messageBox.classList.add("hidden");
  }
}

function renderLiveScoreboard(elementId) {
  const box = document.getElementById(elementId);
  if (!box || !scores.length) return;

  const rows = scores.map(player => {
    const raw = player.holes[currentHoleIndex];
    const adj = Number(player.adjustments[currentHoleIndex]) || 0;
    const holeTotal = raw === null ? "—" : getHoleTotal(player, currentHoleIndex);

    let currentText = holeTotal;

    if (raw !== null && adj !== 0) {
      currentText = `${holeTotal}<div class="score-adjust-note">${raw} ${adj > 0 ? "+" : ""}${adj}</div>`;
    }

    return `
      <div class="live-score-row">
        <div>${player.name}</div>
        <div>${currentText}</div>
        <div>${totalFor(player)}</div>
      </div>
    `;
  }).join("");

  const showEditButton = scores.some(player => player.holes.some(score => score !== null));

  box.innerHTML = `
    <h3>Current Scorecard</h3>

    <div class="live-score-row header">
      <div>Player</div>
      <div>Hole ${holes[currentHoleIndex].hole}</div>
      <div>Total</div>
    </div>

    ${rows}

    <p class="muted center">
      Scores update as each player is entered. Challenge adjustments are included in totals.
    </p>

    ${
      showEditButton
        ? `<div class="center">
            <button class="small-btn blue-btn" onclick="openEditScores()">✏️ Edit Scores</button>
          </div>`
        : ""
    }
  `;
}

function enterScore(strokes) {
  const bonus = currentChallenge?.type === "SPIN_WHEEL" ? wheelBonuses[currentPlayerIndex] : null;

  let finalStrokes = strokes;
  let note = "";

  if (bonus?.forceScore) {
    finalStrokes = 1;
    note = bonus.note;
  }

  if (bonus?.add) {
    finalStrokes = strokes + bonus.add;
    note = bonus.note;
  }

  if (wheelNotes[currentPlayerIndex]) {
    note = `Wheel: ${wheelNotes[currentPlayerIndex]}`;
  }

  scores[currentPlayerIndex].holes[currentHoleIndex] = finalStrokes;
  scores[currentPlayerIndex].notes[currentHoleIndex] = note;

  saveCurrentGame();

  recalculateAllStats();

  if (currentMode === "Challenge") {
    scores[currentPlayerIndex].stats.challenges++;
  }

  if (currentChallenge?.type === "SPIN_WHEEL") {
    continueWheelFlow();
    return;
  }

  currentPlayerIndex++;

  if (currentPlayerIndex >= players.length) {
    handleEndOfHole();
  } else {
    updatePlayScreen();
  }
}

function updatePlayerStatsForHole(player, holeIndex) {
  const par = holes[holeIndex].par;
  const total = getHoleTotal(player, holeIndex);

  if (total === 1) player.stats.holeInOnes++;
  if (total < par) player.stats.underPar++;
  if (total === par) player.stats.pars++;
  if (total > par) player.stats.overPar++;

  if (total > player.stats.worstHoleScore) {
    player.stats.worstHoleScore = total;
    player.stats.worstHole = holes[holeIndex].hole;
  }

  if (total < player.stats.bestHoleScore) {
    player.stats.bestHoleScore = total;
    player.stats.bestHole = holes[holeIndex].hole;
  }
}

function recalculateAllStats() {
  scores.forEach(player => {
    const oldPenalties = player.stats?.penalties || 0;
    const oldBonuses = player.stats?.bonuses || 0;
    const oldWheelSpins = player.stats?.wheelSpins || 0;
    const oldChallenges = player.stats?.challenges || 0;

    player.stats = makeStats();

    player.stats.penalties = oldPenalties;
    player.stats.bonuses = oldBonuses;
    player.stats.wheelSpins = oldWheelSpins;
    player.stats.challenges = oldChallenges;

    player.holes.forEach((score, holeIndex) => {
      if (score !== null) {
        updatePlayerStatsForHole(player, holeIndex);
      }
    });
  });
}

function goBackOnePlayer() {
  if (currentPlayerIndex <= 0) {
    alert("You are already on the first player for this hole.");
    return;
  }

  const previousPlayer = players[currentPlayerIndex - 1];

  if (!confirm(`Go back and erase ${previousPlayer}'s score for this hole?`)) {
    return;
  }

  currentPlayerIndex--;
  scores[currentPlayerIndex].holes[currentHoleIndex] = null;
  scores[currentPlayerIndex].notes[currentHoleIndex] = "";
  scores[currentPlayerIndex].adjustments[currentHoleIndex] = 0;

  recalculateAllStats();
  saveCurrentGame();
  updatePlayScreen();
}

function handleEndOfHole() {
  if (currentMode === "Challenge" && currentChallenge) {
    if (currentChallenge.type === "CLOSEST_TO_HOLE") return showClosestToHoleScreen();
    if (currentChallenge.type === "UNDER_PAR_REMOVE_WORST") return applyUnderParRemoveWorst();
    if (currentChallenge.type === "HOLE_IN_ONE_ATTACK") return showHoleInOneAttackScreen();

    if (["SAFE_SHOT", "OBSTACLE_TROUBLE", "COMEBACK_COVE", "TREASURE_STEAL", "WATERFALL_WHISPER", "LUCKY_BOUNCE"].includes(currentChallenge.type)) {
      return showEditableAdjustmentScreen();
    }
  }

  advanceHole();
}

function advanceHole() {
  currentHoleIndex++;

  saveCurrentGame();

  if (currentHoleIndex >= holes.length) {
    finishGame();
  } else {
    currentChallenge = null;
    currentMode = "Normal";
    updateChoiceScreen();
    showOnly("choiceScreen");
  }
}

function openEditScores() {
  const list = document.getElementById("editScoresList");
  list.innerHTML = "";

  scores.forEach((player, playerIndex) => {
    const title = document.createElement("h3");
    title.textContent = player.name;
    list.appendChild(title);

    player.holes.forEach((score, holeIndex) => {
      if (score === null) return;

      const row = document.createElement("div");
      row.className = "edit-score-row";

      row.innerHTML = `
        <label>Hole ${holeIndex + 1}</label>
        <input 
          type="number"
          min="1"
          max="20"
          value="${score}"
          data-player="${playerIndex}"
          data-hole="${holeIndex}"
        >
      `;

      list.appendChild(row);
    });
  });

  document.getElementById("editScoresModal").classList.remove("hidden");
}

function closeEditScores() {
  document.getElementById("editScoresModal").classList.add("hidden");
}

function saveEditedScores() {
  const inputs = document.querySelectorAll("#editScoresList input");

  inputs.forEach(input => {
    const playerIndex = Number(input.dataset.player);
    const holeIndex = Number(input.dataset.hole);
    const newScore = Number(input.value);

    if (Number.isInteger(newScore) && newScore > 0) {
      scores[playerIndex].holes[holeIndex] = newScore;
    }
  });

  recalculateAllStats();
  closeEditScores();

  saveCurrentGame();

  if (!document.getElementById("finalScreen").classList.contains("hidden")) {
    finishGame();
  } else if (!document.getElementById("choiceScreen").classList.contains("hidden")) {
    updateChoiceScreen();
  } else {
    updatePlayScreen();
  }
}

function startWheelChallenge() {
  wheelPlayerIndex = 0;
  wheelBonuses = {};
  wheelNotes = {};
  wheelRotation = 0;

  const wheel = document.getElementById("wheel");
  wheel.style.transition = "none";
  wheel.style.transform = "rotate(0deg)";

  setTimeout(() => {
    wheel.style.transition = "transform 2.4s cubic-bezier(.08,.8,.18,1)";
  }, 20);

  updateWheelScreen();
  showOnly("wheelScreen");
}

function updateWheelScreen() {
  document.getElementById("wheelPlayer").textContent = `${players[wheelPlayerIndex]}, spin to learn your fate.`;
  document.getElementById("wheelResult").classList.add("hidden");
  document.getElementById("spinBtn").disabled = false;
  document.getElementById("nextSpinBtn").classList.add("hidden");
}

function spinWheel() {
  const spinBtn = document.getElementById("spinBtn");
  spinBtn.disabled = true;

  const selectedIndex = Math.floor(Math.random() * wheelOptions.length);
  const segmentSize = 360 / wheelOptions.length;
  const selectedCenterAngle = selectedIndex * segmentSize + segmentSize / 2;
  const extraSpins = 5 * 360;
  const finalRotation = extraSpins - selectedCenterAngle;

  wheelRotation += finalRotation;

  document.getElementById("wheel").style.transform = `rotate(${wheelRotation}deg)`;

  setTimeout(() => {
    const playerName = players[wheelPlayerIndex];
    const option = wheelOptions[selectedIndex];
    const resultBox = document.getElementById("wheelResult");

    resultBox.textContent = `${playerName}: ${option.label}`;
    resultBox.classList.remove("hidden");

    scores[wheelPlayerIndex].stats.wheelSpins++;

    gameEvents.push({
      type: "wheel",
      player: playerName,
      result: option.label,
      hole: holes[currentHoleIndex].hole
    });

    if (option.action === "INSTANT_ONE") {
      wheelBonuses[wheelPlayerIndex] = { forceScore: 1, note: "Wheel: instant hole in one" };
    } else if (option.action === "ADD_TWO") {
      wheelBonuses[wheelPlayerIndex] = { add: 2, note: "Wheel: +2" };
    } else {
      wheelNotes[wheelPlayerIndex] = option.label;
    }

    document.getElementById("nextSpinBtn").textContent = "Take Turn";
    document.getElementById("nextSpinBtn").classList.remove("hidden");
  }, 2450);
}

function nextWheelPlayer() {
  currentPlayerIndex = wheelPlayerIndex;
  updatePlayScreen();
  showOnly("playScreen");
}

function continueWheelFlow() {
  wheelPlayerIndex++;

  if (wheelPlayerIndex >= players.length) {
    handleEndOfHole();
  } else {
    updateWheelScreen();
    showOnly("wheelScreen");
  }
}

function showEditableAdjustmentScreen() {
  const type = currentChallenge.type;

  const settings = {
    SAFE_SHOT: { title: "Safe Shot", amount: -1, label: "Who earned the safe shot deduction?", button: "Deduct 1 Stroke" },
    OBSTACLE_TROUBLE: { title: "Mutiny!", amount: 1, label: "Who is currently in first place?", button: "Add 1 Stroke" },
    COMEBACK_COVE: { title: "Comeback Cove", amount: -1, label: "Who finished in par or better and gets the comeback deduction?", button: "Deduct 1 Stroke" },
    TREASURE_STEAL: { title: "Treasure Steal", amount: -1, label: "Who got a hole-in-one and gets the deduction?", button: "Deduct 1 Stroke" },
    WATERFALL_WHISPER: { title: "Waterfall Whisper", amount: 1, label: "Who talked before everyone took their first shot?", button: "Add 1 Stroke", question: "Did anyone speak before everyone took their first shot?" },
    LUCKY_BOUNCE: { title: "Lucky Bounce", amount: -1, label: "Who got the lucky bounce deduction?", button: "Deduct 1 Stroke" }
  };

  const item = settings[type];

  document.getElementById("specialTitle").textContent = item.title;

  document.getElementById("specialContent").innerHTML = `
    <div class="message-box">${currentChallenge.text}</div>
    <div class="rule-panel">
      ${item.question ? `<div class="message-box">${item.question}</div>` : ""}
      <label><strong>${item.label}</strong></label>
      ${playerSelectHtml("editableAdjustPlayer")}
      <div class="center">
        <button onclick="applyEditableAdjustment('${type}')">${item.button}</button>
        <button class="gold-btn" onclick="advanceHole()">No Change / Continue</button>
      </div>
    </div>
  `;

  showOnly("specialScreen");
}

function applyEditableAdjustment(type) {
  const settings = {
    SAFE_SHOT: { amount: -1, note: "Safe Shot: -1." },
    OBSTACLE_TROUBLE: { amount: 1, note: "Obstacle Trouble: +1." },
    COMEBACK_COVE: { amount: -1, note: "Comeback Cove: -1." },
    TREASURE_STEAL: { amount: -1, note: "Treasure Steal: -1." },
    WATERFALL_WHISPER: { amount: 1, note: "Waterfall Whisper: +1." },
    LUCKY_BOUNCE: { amount: -1, note: "Lucky Bounce: -1." }
  };

  const playerIndex = Number(document.getElementById("editableAdjustPlayer").value);
  const item = settings[type];

  scores[playerIndex].adjustments[currentHoleIndex] += item.amount;
  scores[playerIndex].notes[currentHoleIndex] += ` ${item.note}`;

  if (item.amount > 0) scores[playerIndex].stats.penalties++;
  else scores[playerIndex].stats.bonuses++;

  gameEvents.push({
    type: item.amount > 0 ? "penalty" : "bonus",
    player: scores[playerIndex].name,
    amount: item.amount,
    note: item.note,
    hole: holes[currentHoleIndex].hole
  });

  askAnotherEditableAdjustment();
}

function askAnotherEditableAdjustment() {
  document.getElementById("specialTitle").textContent = "Another Score Change?";

  document.getElementById("specialContent").innerHTML = `
    <div class="message-box">Do you need to adjust another player's score for this challenge?</div>
    <div class="center">
      <button onclick="showEditableAdjustmentScreen()">Yes</button>
      <button class="gold-btn" onclick="advanceHole()">No, Continue</button>
    </div>
  `;

  showOnly("specialScreen");
}

function showClosestToHoleScreen() {
  document.getElementById("specialTitle").textContent = "Closest to the Hole";

  document.getElementById("specialContent").innerHTML = `
    <div class="message-box">Select who got closest without going in. That player gets -1 stroke.</div>
    <div class="rule-panel">
      <label><strong>Closest player</strong></label>
      ${playerSelectHtml("closestSelect")}
      <div class="center">
        <button onclick="applyClosestWinner()">Apply Closest Player</button>
      </div>
    </div>
  `;

  showOnly("specialScreen");
}

function applyClosestWinner() {
  const closestIndex = Number(document.getElementById("closestSelect").value);

  scores[closestIndex].adjustments[currentHoleIndex] -= 1;
  scores[closestIndex].notes[currentHoleIndex] += " Closest: -1.";
  scores[closestIndex].stats.bonuses++;

  document.getElementById("specialContent").innerHTML = `
    <div class="message-box">${players[closestIndex]} gets -1 stroke. Did anyone's ball go in?</div>
    <div class="center">
      <button onclick="showWentInSelector()">Yes</button>
      <button class="gold-btn" onclick="advanceHole()">No, Continue</button>
    </div>
  `;
}

function showWentInSelector() {
  document.getElementById("specialContent").innerHTML = `
    <div class="message-box">Choose the player whose ball went in. They get +2 strokes.</div>
    <div class="rule-panel">
      ${playerSelectHtml("wentInSelect")}
      <div class="center">
        <button onclick="applyWentInPenalty()">Add 2 Strokes</button>
      </div>
    </div>
  `;
}

function applyWentInPenalty() {
  const playerIndex = Number(document.getElementById("wentInSelect").value);

  scores[playerIndex].adjustments[currentHoleIndex] += 2;
  scores[playerIndex].notes[currentHoleIndex] += " Ball went in: +2.";
  scores[playerIndex].stats.penalties++;

  askAnotherWentInPenalty();
}

function askAnotherWentInPenalty() {
  document.getElementById("specialTitle").textContent = "Another Ball Went In?";

  document.getElementById("specialContent").innerHTML = `
    <div class="message-box">Did another player's ball go in too?</div>
    <div class="center">
      <button onclick="showWentInSelector()">Yes</button>
      <button class="gold-btn" onclick="advanceHole()">No, Continue</button>
    </div>
  `;

  showOnly("specialScreen");
}

function applyUnderParRemoveWorst() {
  const par = holes[currentHoleIndex].par;
  const luckyNames = [];

  scores.forEach(player => {
    const thisHoleScore = getHoleTotal(player, currentHoleIndex);

    if (thisHoleScore < par) {
      const worst = findWorstPreviousHole(player, currentHoleIndex);

      if (worst !== null) {
        player.adjustments[worst] -= getHoleTotal(player, worst);
        player.notes[worst] += " Worst score eliminated.";
        player.stats.bonuses++;
        luckyNames.push(player.name);
      }
    }
  });

  document.getElementById("specialTitle").textContent = "Lucky Break";

  const message = luckyNames.length === 0
    ? "Nobody is lucky today."
    : `${luckyNames.join(", ")} eliminated their worst previous score.`;

  document.getElementById("specialContent").innerHTML = `
    <div class="message-box">${message}</div>
    <div class="center">
      <button onclick="advanceHole()">Continue</button>
    </div>
  `;

  showOnly("specialScreen");
}

function findWorstPreviousHole(player, currentIndex) {
  let worstIndex = null;
  let worstValue = -Infinity;

  for (let i = 0; i <= currentIndex; i++) {
    const value = getHoleTotal(player, i);

    if (value > worstValue) {
      worstValue = value;
      worstIndex = i;
    }
  }

  return worstIndex;
}

function showHoleInOneAttackScreen() {
  const holeInOnePlayers = scores
    .map((p, index) => ({
      name: p.name,
      index,
      score: getHoleTotal(p, currentHoleIndex)
    }))
    .filter(p => p.score === 1);

  if (holeInOnePlayers.length === 0) {
    document.getElementById("specialTitle").textContent = "No Hole-in-One";

    document.getElementById("specialContent").innerHTML = `
      <div class="message-box">No hole-in-one this round. No revenge today.</div>
      <div class="center">
        <button onclick="advanceHole()">Continue</button>
      </div>
    `;

    showOnly("specialScreen");
    return;
  }

  pendingAfterHole = {
    type: "HOLE_IN_ONE_ATTACK",
    attackers: holeInOnePlayers,
    current: 0
  };

  showAttackChoice();
}

function showAttackChoice() {
  const attacker = pendingAfterHole.attackers[pendingAfterHole.current];

  document.getElementById("specialTitle").textContent = "Hole-in-One Power Move";

  document.getElementById("specialContent").innerHTML = `
    <div class="message-box">${attacker.name} got a hole-in-one! Choose someone to receive +2 strokes.</div>
    <div class="rule-panel">
      ${playerSelectHtml("attackTarget", attacker.index)}
      <div class="center">
        <button onclick="applyAttackPenalty()">Add 2 Strokes</button>
      </div>
    </div>
  `;

  showOnly("specialScreen");
}

function applyAttackPenalty() {
  const targetIndex = Number(document.getElementById("attackTarget").value);
  const attacker = pendingAfterHole.attackers[pendingAfterHole.current];

  scores[targetIndex].adjustments[currentHoleIndex] += 2;
  scores[targetIndex].notes[currentHoleIndex] += ` +2 from ${attacker.name}.`;
  scores[targetIndex].stats.penalties++;

  pendingAfterHole.current++;

  if (pendingAfterHole.current >= pendingAfterHole.attackers.length) {
    pendingAfterHole = null;
    advanceHole();
  } else {
    showAttackChoice();
  }
}

function playerSelectHtml(id, excludeIndex = null) {
  let html = `<select id="${id}">`;

  players.forEach((name, index) => {
    if (index !== excludeIndex) {
      html += `<option value="${index}">${name}</option>`;
    }
  });

  html += `</select>`;
  return html;
}

function getHoleTotal(player, holeIndex) {
  return (Number(player.holes[holeIndex]) || 0) + (Number(player.adjustments[holeIndex]) || 0);
}

function totalFor(player) {
  return player.holes.reduce((sum, val, i) => {
    return sum + (Number(val) || 0) + (Number(player.adjustments[i]) || 0);
  }, 0);
}

function finishGame() {
  const results = scores.map(p => ({
    name: p.name,
    total: totalFor(p),
    holes: p.holes,
    adjustments: p.adjustments,
    notes: p.notes,
    stats: p.stats
  }));

  results.sort((a, b) => a.total - b.total);

  const winner = results[0];

  document.getElementById("winnerText").textContent = `${winner.name} wins with ${winner.total}!`;
  document.getElementById("winnerSubtext").textContent = "The cove has spoken. Bragging rights unlocked.";

  const places = document.getElementById("places");
  places.innerHTML = "";

  results.forEach((p, index) => {
    const div = document.createElement("div");
    div.className = "place";
    div.innerHTML = `<span>${placeLabel(index)} ${p.name}<br><small>${assignTitle(p, index)}</small></span><span>${p.total} strokes</span>`;
    places.appendChild(div);
  });

  document.getElementById("gameHighlights").innerHTML = generateHighlights(results).map(h => `<div class="highlight">${h}</div>`).join("");
  document.getElementById("finalScoreTable").innerHTML = buildTable(scores);

  const records = updateCoveRecords(results);
  document.getElementById("coveRecords").innerHTML = renderRecords(records);
 
  gameInProgress = false;
  localStorage.removeItem("adventureCoveCurrentGame");
 
  saveGame(results);
  showOnly("finalScreen");
  launchConfetti();
}

function placeLabel(index) {
  if (index === 0) return "🏆 1st";
  if (index === 1) return "🥈 2nd";
  if (index === 2) return "🥉 3rd";
  return `${index + 1}th`;
}

function assignTitle(player, placeIndex) {
  if (placeIndex === 0) return "Cove Champion";
  if (player.stats.holeInOnes > 0) return "Hole-in-One Hero";
  if (player.stats.wheelSpins >= 2) return "Wheel-Tossed Buccaneer";
  if (player.stats.penalties >= 2) return "Penalty Pirate";
  return titleLines[Math.floor(Math.random() * titleLines.length)];
}

function generateHighlights(results) {
  const highlights = [];

  const winner = results[0];
  const last = results[results.length - 1];

  const bestHoleInOnes = [...results].sort((a, b) => b.stats.holeInOnes - a.stats.holeInOnes)[0];
  const mostPenalties = [...results].sort((a, b) => b.stats.penalties - a.stats.penalties)[0];
  const mostBonuses = [...results].sort((a, b) => b.stats.bonuses - a.stats.bonuses)[0];
  const mostWheel = [...results].sort((a, b) => b.stats.wheelSpins - a.stats.wheelSpins)[0];

  const biggestGap = last.total - winner.total;

  highlights.push(`🏴‍☠️ Captain ${winner.name} claimed the Cove with ${winner.total} strokes.`);

  if (biggestGap > 0) {
    highlights.push(`📜 ${last.name} finished ${biggestGap} strokes behind the champion.`);
  }

  if (bestHoleInOnes.stats.holeInOnes > 0) {
    highlights.push(`⛳ ${bestHoleInOnes.name} scored ${bestHoleInOnes.stats.holeInOnes} hole-in-one${bestHoleInOnes.stats.holeInOnes === 1 ? "" : "s"}.`);
  }

  if (mostPenalties.stats.penalties > 0) {
    highlights.push(`⚓ ${mostPenalties.name} collected the most penalties.`);
  }

  if (mostBonuses.stats.bonuses > 0) {
    highlights.push(`💰 ${mostBonuses.name} grabbed the most bonuses.`);
  }

  if (mostWheel.stats.wheelSpins > 0) {
    highlights.push(`🎡 ${mostWheel.name} spun the wheel ${mostWheel.stats.wheelSpins} time${mostWheel.stats.wheelSpins === 1 ? "" : "s"}.`);
  }

  const randomPlayers = shuffle([...results]).slice(0, Math.min(4, results.length));
  randomPlayers.forEach(p => {
    highlights.push(roastLines[Math.floor(Math.random() * roastLines.length)].replace("{name}", p.name));
  });

  gameEvents.slice(-5).forEach(e => {
    if (e.type === "wheel") highlights.push(`🎡 On Hole ${e.hole}, ${e.player} spun “${e.result}.”`);
    if (e.type === "bonus") highlights.push(`💎 On Hole ${e.hole}, ${e.player} earned a bonus.`);
    if (e.type === "penalty") highlights.push(`🦜 On Hole ${e.hole}, ${e.player} took a penalty.`);
  });

  return shuffle(highlights).slice(0, Math.min(8, highlights.length));
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

function updateCoveRecords(results) {
  const records = JSON.parse(localStorage.getItem("adventureCoveRecords") || "{}");

  const winner = results[0];
  const highest = results[results.length - 1];

  const totalHoleInOnes = results.reduce((s, p) => s + p.stats.holeInOnes, 0);
  const totalPenalties = results.reduce((s, p) => s + p.stats.penalties, 0);
  const totalWheel = results.reduce((s, p) => s + p.stats.wheelSpins, 0);

  if (!records.lowestScore || winner.total < records.lowestScore.score) {
    records.lowestScore = { name: winner.name, score: winner.total, date: new Date().toLocaleDateString() };
  }

  if (!records.highestScore || highest.total > records.highestScore.score) {
    records.highestScore = { name: highest.name, score: highest.total, date: new Date().toLocaleDateString() };
  }

  if (!records.mostHoleInOnes || totalHoleInOnes > records.mostHoleInOnes.count) {
    records.mostHoleInOnes = { count: totalHoleInOnes, date: new Date().toLocaleDateString() };
  }

  if (!records.mostPenalties || totalPenalties > records.mostPenalties.count) {
    records.mostPenalties = { count: totalPenalties, date: new Date().toLocaleDateString() };
  }

  if (!records.mostWheelSpins || totalWheel > records.mostWheelSpins.count) {
    records.mostWheelSpins = { count: totalWheel, date: new Date().toLocaleDateString() };
  }

  localStorage.setItem("adventureCoveRecords", JSON.stringify(records));
  return records;
}

function renderRecords(records) {
  return `
    <div class="record-card">🏆 Lowest winning score: <strong>${records.lowestScore?.score ?? "—"}</strong> by ${records.lowestScore?.name ?? "—"}</div>
    <div class="record-card">🌊 Highest score survived: <strong>${records.highestScore?.score ?? "—"}</strong> by ${records.highestScore?.name ?? "—"}</div>
    <div class="record-card">⛳ Most hole-in-ones in a game: <strong>${records.mostHoleInOnes?.count ?? 0}</strong></div>
    <div class="record-card">⚓ Most penalties in a game: <strong>${records.mostPenalties?.count ?? 0}</strong></div>
    <div class="record-card">🎡 Most wheel spins in a game: <strong>${records.mostWheelSpins?.count ?? 0}</strong></div>
  `;
}

function buildTable(data) {
  let html = `<div style="overflow:auto;"><table class="score-table"><thead><tr><th>Player</th>`;

  holes.forEach(h => {
    html += `<th>${h.hole}</th>`;
  });

  html += `<th>Total</th></tr></thead><tbody>`;

  data.forEach(p => {
    html += `<tr><td>${p.name}</td>`;

    p.holes.forEach((s, i) => {
      const adj = Number(p.adjustments[i]) || 0;
      const total = getHoleTotal(p, i);
      const note = p.notes[i] ? ` title="${p.notes[i].trim()}"` : "";

      html += `<td${note}>${s ?? ""}${adj ? `<br><small>${adj > 0 ? "+" : ""}${adj}</small><br><strong>${total}</strong>` : ""}</td>`;
    });

    html += `<td><strong>${totalFor(p)}</strong></td></tr>`;
  });

  html += `</tbody></table><p class="muted">Small + or - numbers show challenge adjustments.</p></div>`;

  return html;
}

function saveGame(results) {
  const history = JSON.parse(localStorage.getItem("adventureCoveHistory") || "[]");

  history.unshift({
    date: new Date().toLocaleString(),
    winner: results[0].name,
    winningScore: results[0].total,
    results
  });

  localStorage.setItem("adventureCoveHistory", JSON.stringify(history.slice(0, 50)));
}

function showHistory() {
  const history = JSON.parse(localStorage.getItem("adventureCoveHistory") || "[]");
  const list = document.getElementById("historyList");

  if (!history.length) {
    list.innerHTML = `<p>No past games saved yet.</p>`;
  } else {
    list.innerHTML = history.map(game => `
      <div class="history-item">
        <div>
          <strong>${game.winner}</strong> won with <strong>${game.winningScore}</strong><br>
          <span class="muted">${game.date}</span>
        </div>
        <div>${game.results.map(r => `${r.name}: ${r.total}`).join(" | ")}</div>
      </div>
    `).join("");
  }

  showOnly("historyScreen");
}

function clearHistory() {
  if (confirm("Clear all saved games and Cove records?")) {
    localStorage.removeItem("adventureCoveHistory");
    localStorage.removeItem("adventureCoveRecords");
    showHistory();
  }
}

function backHome() {
  showOnly("setupScreen");
}

function newGame() {
  if (scores.length && !confirm("Start a new game? This will clear the current scores.")) {
    return;
  }

  players = [];
  scores = [];
  currentHoleIndex = 0;
  currentPlayerIndex = 0;
  currentMode = "Normal";
  currentChallenge = null;
  pendingAfterHole = null;
  gameEvents = [];
  gameInProgress = false;

  localStorage.removeItem("adventureCoveCurrentGame");

  for (let i = 1; i <= 6; i++) {
    const input = document.getElementById(`player${i}`);
    if (input) input.value = "";
  }

  showOnly("setupScreen");
}

async function shareResults() {

  if (!scores.length) {
    alert("No scores to share yet.");
    return;
  }

  const results = scores
    .map(p => ({
      name: p.name,
      total: totalFor(p)
    }))
    .sort((a, b) => a.total - b.total);

  const winner = results[0];

  const canvas = document.getElementById("shareCanvas");
  const ctx = canvas.getContext("2d");

  // draw image here
  // KEEP ALL OF YOUR EXISTING CANVAS DRAWING CODE

  canvas.toBlob(async function(blob) {

    if (!blob) {
      alert("Could not create share image.");
      return;
    }

    const file = new File(
      [blob],
      "AdventureCoveChampion.png",
      { type: "image/png" }
    );

    const shareText =
      `🏆 ${winner.name} won Adventure Cove with ${winner.total} strokes! Think you can beat this score?`;

    try {

      if (
        navigator.canShare &&
        navigator.canShare({ files: [file] })
      ) {

        await navigator.share({
          title: "Adventure Cove Champion",
          text: shareText,
          files: [file]
        });

      } else {

        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "AdventureCoveChampion.png";
        link.click();

        alert("Your device doesn't support direct sharing. Image downloaded instead.");
      }

    } catch (err) {
      console.log(err);
    }

  }, "image/png");
}

async function challengeFriends() {
  if (!scores.length) {
    alert("No completed game to challenge from yet.");
    return;
  }

  const results = scores
    .map(p => ({ name: p.name, total: totalFor(p) }))
    .sort((a, b) => a.total - b.total);

  const winner = results[0];

  const shareText =
    `🏴‍☠️ ${winner.name} scored ${winner.total} at Adventure Cove Mini Golf! Think you can beat it?`;

  const gameUrl = "https://yhsprice.github.io/Adventure-Cove/";

  try {
    if (navigator.share) {
      await navigator.share({
        title: "Beat My Adventure Cove Score",
        text: shareText,
        url: gameUrl
      });
    } else {
      navigator.clipboard.writeText(`${shareText} Play here: ${gameUrl}`);
      alert("Challenge copied to clipboard!");
    }
  } catch (error) {
    console.log(error);

    navigator.clipboard.writeText(`${shareText} Play here: ${gameUrl}`);
    alert("Sharing was cancelled or blocked, so the challenge copied instead.");
  }
}

function launchConfetti() {
  const emojis = ["🏴‍☠️", "⛳", "⭐", "💰", "🌊", "🦜", "⚓", "🏆"];

  for (let i = 0; i < 110; i++) {
    const piece = document.createElement("div");

    piece.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    piece.style.position = "fixed";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.top = "-40px";
    piece.style.fontSize = (16 + Math.random() * 24) + "px";
    piece.style.zIndex = "9999";
    piece.style.pointerEvents = "none";

    const fallTime = 2200 + Math.random() * 2600;
    const delay = Math.random() * 900;
    const drift = (Math.random() * 240) - 120;
    const spin = (Math.random() * 1440) - 720;

    piece.style.transition = `
      transform ${fallTime}ms cubic-bezier(.18,.72,.35,1),
      opacity ${fallTime}ms ease-in
    `;

    document.body.appendChild(piece);

    setTimeout(() => {
      piece.style.transform = `
        translate(${drift}px, ${window.innerHeight + 100}px)
        rotate(${spin}deg)
      `;
      piece.style.opacity = "0";
    }, delay);

    setTimeout(() => {
      piece.remove();
    }, fallTime + delay + 200);
  }
}

function saveCurrentGame() {
  if (!scores.length) return;

  localStorage.setItem("adventureCoveCurrentGame", JSON.stringify({
    players,
    scores,
    currentHoleIndex,
    currentPlayerIndex,
    currentMode,
    currentChallenge,
    wheelPlayerIndex,
    wheelBonuses,
    wheelNotes,
    pendingAfterHole,
    gameEvents
  }));
}

function loadCurrentGame() {
  const saved = localStorage.getItem("adventureCoveCurrentGame");

  if (!saved) return false;

  const resume = confirm("You have an unfinished Adventure Cove game. Resume it?");

  if (!resume) {
    localStorage.removeItem("adventureCoveCurrentGame");
    return false;
  }

  const game = JSON.parse(saved);

  players = game.players || [];
  scores = game.scores || [];
  currentHoleIndex = game.currentHoleIndex || 0;
  currentPlayerIndex = game.currentPlayerIndex || 0;
  currentMode = game.currentMode || "Normal";
  currentChallenge = game.currentChallenge || null;
  wheelPlayerIndex = game.wheelPlayerIndex || 0;
  wheelBonuses = game.wheelBonuses || {};
  wheelNotes = game.wheelNotes || {};
  pendingAfterHole = game.pendingAfterHole || null;
  gameEvents = game.gameEvents || [];
  gameInProgress = true;

  updateChoiceScreen();
  showOnly("choiceScreen");

  return true;
}

function cancelChallengeGoNormal() {
  currentMode = "Normal";
  currentChallenge = null;
  pendingAfterHole = null;
  saveCurrentGame();
  startHolePlay();
}

buildSetup();
loadCurrentGame();
