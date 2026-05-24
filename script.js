const holes = [
      { hole: 1, par: 2 }, { hole: 2, par: 3 }, { hole: 3, par: 4 },
      { hole: 4, par: 3 }, { hole: 5, par: 2 }, { hole: 6, par: 2 },
      { hole: 7, par: 2 }, { hole: 8, par: 2 }, { hole: 9, par: 2 },
      { hole: 10, par: 3 }, { hole: 11, par: 2 }, { hole: 12, par: 3 },
      { hole: 13, par: 2 }, { hole: 14, par: 2 }, { hole: 15, par: 2 },
      { hole: 16, par: 2 }, { hole: 17, par: 3 }, { hole: 18, par: 2 }
    ];

    const challengeTypes = {
      HIGHEST_PAR_DECIDES: "Player with the highest score determines how everyone must hit the ball.",
      CLOSEST_TO_HOLE: "Putt the ball as close to the hole without going in, but no more than 2 strokes. Closest player deducts 1 point. If a player’s ball goes in, they get an extra 2 points.",
      UNDER_PAR_REMOVE_WORST: "Any player who gets under par this round can eliminate their worst score so far.",
      HOLE_IN_ONE_ATTACK: "Any player who gets a hole-in-one on this round can add two strokes to another player’s score.",
      SPIN_WHEEL: "Spin the wheel to learn your fate.",
      SAFE_SHOT: "Safe Shot: if your ball touches no wall or obstacle on this hole, deduct 1 stroke.",
      OBSTACLE_TROUBLE: "Obstacle Trouble: if your ball gets stuck or leaves the green, add 1 stroke.",
      COMEBACK_COVE: "Comeback Cove: the player with the highest score may deduct 1 stroke if they finish this hole in par or better.",
      TREASURE_STEAL: "Treasure Steal: get a hole-in-one and remove 1 stroke from your score.",
      WATERFALL_WHISPER: "Waterfall Whisper: everyone must take their first shot quietly. If someone talks before everyone shoots, they add 1 stroke.",
      LUCKY_BOUNCE: "Lucky Bounce: if your ball bounces off a wall and still goes in, deduct 1 stroke."
    };

    const challenges = [
      { text: "Ahoy! Walk the plank and hit the ball standing on one foot.", type: "NORMAL" },
      { text: "Turn the club upside down and hit the ball with the handle.", type: "NORMAL" },
      { text: challengeTypes.HIGHEST_PAR_DECIDES, type: "HIGHEST_PAR_DECIDES" },
      { text: "Face backward and putt the ball between your legs.", type: "NORMAL" },
      { text: challengeTypes.CLOSEST_TO_HOLE, type: "CLOSEST_TO_HOLE" },
      { text: "Play one handed with your dominant hand.", type: "NORMAL" },
      { text: "Hit the ball like this is a game of pool.", type: "NORMAL" },
      { text: challengeTypes.UNDER_PAR_REMOVE_WORST, type: "UNDER_PAR_REMOVE_WORST" },
      { text: challengeTypes.HOLE_IN_ONE_ATTACK, type: "HOLE_IN_ONE_ATTACK" },
      { text: "Swing granny style between the legs.", type: "NORMAL" },
      { text: challengeTypes.SPIN_WHEEL, type: "SPIN_WHEEL" },
      { text: "First one to sink a shot this round may move another player's ball anywhere within the length of their club.", type: "NORMAL" },
      { text: "Forget the club and use your foot to hit the ball for this round!", type: "NORMAL" },
      { text: "Hit the ball while sitting on the ground cross-legged.", type: "NORMAL" },
      { text: "Aaargh! Putt the ball with your eyes closed. If you dare.", type: "NORMAL" },
      { text: "Bowl the ball into the hole. Don't use your club!", type: "NORMAL" },
      { text: "Take your 2nd shot of this round with your eyes closed!", type: "NORMAL" },
      { text: "Golf this hole with your unfavored hand.", type: "NORMAL" },
      { text: "Crab Walk Shot: stand sideways when you take your first shot.", type: "NORMAL" },
      { text: "Best Shot Switch: choose another player to take your first shot for you. Pick wisely — you want their best shot, not their villain arc.", type: "NORMAL" },
      { text: "Wall First: your first shot must touch a side wall before it can go in.", type: "NORMAL" },
      { text: "No Peeking Putt: look at the hole, then close your eyes before your first shot.", type: "NORMAL" },
      { text: "Two-Finger Grip: hold the putter with only two fingers on your first shot.", type: "NORMAL" },
      { text: "Last Place Rule: the player with the highest score chooses how everyone takes their first shot.", type: "NORMAL" },
      { text: "Leader Trouble: the player with the highest score must use their non-dominant hand on the first shot.", type: "NORMAL" },
      { text: "Tap and Freeze: after each player takes their first shot, they must stay in place until everyone has taken their turn.", type: "NORMAL" },
      { text: "Player's Choice: each player chooses how they take their first shot — one hand, two hands, sideways, eyes closed, or any fun way they want.", type: "NORMAL" },
      { text: "Straight Arm Shot: keep your elbows straight for your first shot.", type: "NORMAL" },
      { text: "Mini Boss Hole: everyone must use the same challenge from the player who goes first.", type: "NORMAL" },
      { text: challengeTypes.SAFE_SHOT, type: "SAFE_SHOT" },
      { text: challengeTypes.OBSTACLE_TROUBLE, type: "OBSTACLE_TROUBLE" },
      { text: challengeTypes.COMEBACK_COVE, type: "COMEBACK_COVE" },
      { text: challengeTypes.TREASURE_STEAL, type: "TREASURE_STEAL" },
      { text: "Captain's Call: before anyone shoots, the youngest player chooses one rule for this hole: one hand, eyes closed first shot, or sideways stance.", type: "NORMAL" },
      { text: challengeTypes.WATERFALL_WHISPER, type: "WATERFALL_WHISPER" },
      { text: challengeTypes.LUCKY_BOUNCE, type: "LUCKY_BOUNCE" },
      { text: "The Detour: your first shot must aim for a wall or obstacle before heading toward the hole.", type: "NORMAL" },
      { text: "Steady Captain: hold the putter with both hands touching each other for the whole hole.", type: "NORMAL" }
    ];

    const wheelOptions = [
      { label: "Instant hole in one", action: "INSTANT_ONE" },
      { label: "Stand one legged while hitting", action: "PLAY_NOTE" },
      { label: "Swing with your non-dominant hand", action: "PLAY_NOTE" },
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
      "Professional Obstacle Tester", "The Almost Champion", "Treasure Hunter", "Davy Jones' Favorite Golfer",
      "The Bounce Bandit", "The Silent Storm", "The Putt Plunderer", "Captain Comeback"
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

    function makeStats() {
      return { holeInOnes: 0, underPar: 0, overPar: 0, pars: 0, wheelSpins: 0, penalties: 0, bonuses: 0, challenges: 0, worstHoleScore: 0, worstHole: null, bestHoleScore: Infinity, bestHole: null };
    }

    function buildSetup() {
      const box = document.getElementById("playerInputs");
      box.innerHTML = "";
      for (let i = 1; i <= 6; i++) {
        const input = document.createElement("input");
        input.maxLength = 8;
        input.placeholder = `Player ${i}`;
        input.id = `player${i}`;
        box.appendChild(input);
      }
      buildScoreButtons();
    }

    function buildScoreButtons() {
      const box = document.getElementById("scoreButtons");
      box.innerHTML = "";
      for (let i = 1; i <= 8; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;
        btn.onclick = () => enterScore(i);
        box.appendChild(btn);
      }
      const plus = document.createElement("button");
      plus.textContent = "9+";
      plus.className = "gold-btn";
      plus.onclick = () => {
        const val = Number(prompt("Enter strokes:"));
        if (Number.isInteger(val) && val > 0) enterScore(val);
      };
      box.appendChild(plus);
    }

    function showOnly(id) {
      ["setupScreen", "choiceScreen", "pathScreen", "playScreen", "specialScreen", "wheelScreen", "finalScreen", "historyScreen"].forEach(screen => document.getElementById(screen).classList.add("hidden"));
      document.getElementById(id).classList.remove("hidden");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function startGame() {
      players = [];
      for (let i = 1; i <= 6; i++) {
        const name = document.getElementById(`player${i}`).value.trim().toUpperCase();
        if (name) players.push(name.substring(0, 8));
      }
      if (players.length < 1) return alert("Enter at least one player. Even pirates need a crew.");
      scores = players.map(name => ({ name, holes: Array(18).fill(null), adjustments: Array(18).fill(0), notes: Array(18).fill(""), stats: makeStats() }));
      currentHoleIndex = 0;
      currentPlayerIndex = 0;
      currentChallenge = null;
      gameEvents = [];
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
      if (type === "SPIN_WHEEL") return "Each player will spin, then take their turn right away.";
      if (type === "CLOSEST_TO_HOLE") return "After everyone scores, choose the closest player and mark if anyone accidentally sank the ball.";
      if (type === "UNDER_PAR_REMOVE_WORST") return "After the hole, the app removes the worst previous score for anyone who beats par.";
      if (type === "HOLE_IN_ONE_ATTACK") return "After the hole, anyone with a hole-in-one can add 2 strokes to another player.";
      if (["SAFE_SHOT", "OBSTACLE_TROUBLE", "COMEBACK_COVE", "TREASURE_STEAL", "WATERFALL_WHISPER", "LUCKY_BOUNCE"].includes(type)) return "After this hole, you can choose who gets the score change.";
      return "";
    }

    function acceptChallenge() {
      currentMode = "Challenge";
      pendingAfterHole = null;
      gameEvents.push({ type: "challenge", text: currentChallenge.text, hole: holes[currentHoleIndex].hole });
      if (currentChallenge.type === "SPIN_WHEEL") startWheelChallenge();
      else startHolePlay();
    }

    function highestScoreMessage() {
      const totals = scores.map(p => ({ name: p.name, total: totalFor(p) }));
      const max = Math.max(...totals.map(p => p.total));
      if (max === 0) {
        const randomName = players[Math.floor(Math.random() * players.length)];
        return `No leader yet. Random pick: ${randomName} decides how everyone must hit the ball.`;
      }
      const leaders = totals.filter(p => p.total === max).map(p => p.name);
      if (leaders.length === 1) return `${leaders[0]} has the highest score so far and decides how everyone must hit the ball.`;
      const randomLeader = leaders[Math.floor(Math.random() * leaders.length)];
      return `There is a tie for highest score. Random pick: ${randomLeader} decides how everyone must hit the ball.`;
    }

    function startWheelChallenge() {
      wheelPlayerIndex = 0;
      wheelBonuses = {};
      wheelNotes = {};
      wheelRotation = 0;
      const wheel = document.getElementById("wheel");
      wheel.style.transition = "none";
      wheel.style.transform = "rotate(0deg)";
      setTimeout(() => wheel.style.transition = "transform 2.4s cubic-bezier(.08,.8,.18,1)", 20);
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
        gameEvents.push({ type: "wheel", player: playerName, result: option.label, hole: holes[currentHoleIndex].hole });
        if (option.action === "INSTANT_ONE") wheelBonuses[wheelPlayerIndex] = { forceScore: 1, note: "Wheel: instant hole in one" };
        else if (option.action === "ADD_TWO") wheelBonuses[wheelPlayerIndex] = { add: 2, note: "Wheel: +2" };
        else wheelNotes[wheelPlayerIndex] = option.label;
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
      if (wheelPlayerIndex >= players.length) handleEndOfHole();
      else { updateWheelScreen(); showOnly("wheelScreen"); }
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
      if (currentMode === "Challenge" && currentChallenge) { challengeBox.textContent = currentChallenge.text; challengeBox.classList.remove("hidden"); }
      else challengeBox.classList.add("hidden");
      let msg = "";
      if (currentChallenge?.type === "HIGHEST_PAR_DECIDES") msg = highestScoreMessage();
      if (currentChallenge?.type === "SPIN_WHEEL") {
        const bonus = wheelBonuses[currentPlayerIndex];
        const note = wheelNotes[currentPlayerIndex];
        if (bonus?.forceScore) msg = `${players[currentPlayerIndex]} spun Instant Hole in One. Score will be saved as 1.`;
        else if (bonus?.add) msg = `${players[currentPlayerIndex]} spun Add 2. Enter strokes normally; the app will add 2.`;
        else if (note) msg = `${players[currentPlayerIndex]} spun: ${note}.`;
      }
      if (msg) { messageBox.textContent = msg; messageBox.classList.remove("hidden"); }
      else messageBox.classList.add("hidden");
    }

    function renderLiveScoreboard(elementId) {
      const box = document.getElementById(elementId);
      if (!box || !scores.length) return;
      const rows = scores.map(player => {
        const total = totalFor(player);
        const currentRaw = player.holes[currentHoleIndex];
        const currentAdj = Number(player.adjustments?.[currentHoleIndex]) || 0;
        let currentText = currentRaw === null ? "—" : `${getHoleTotal(player, currentHoleIndex)}`;
        if (currentRaw !== null && currentAdj !== 0) currentText += `<div class="score-adjust-note">${currentRaw} ${currentAdj > 0 ? "+" : ""}${currentAdj}</div>`;
        return `<div class="live-score-row"><div>${player.name}</div><div>${currentText}</div><div>${total}</div></div>`;
      }).join("");
      box.innerHTML = `<h3>Current Scorecard</h3><div class="live-score-row header"><div>Player</div><div>Hole ${holes[currentHoleIndex].hole}</div><div>Total</div></div>${rows}<p class="muted center">Scores update as each player is entered. Challenge adjustments are included in totals.</p>`;
    }

    function enterScore(strokes) {
      const bonus = currentChallenge?.type === "SPIN_WHEEL" ? wheelBonuses[currentPlayerIndex] : null;
      let finalStrokes = strokes;
      let note = "";
      if (bonus?.forceScore) { finalStrokes = 1; note = bonus.note; }
      if (bonus?.add) { finalStrokes = strokes + bonus.add; note = bonus.note; }
      if (wheelNotes[currentPlayerIndex]) note = `Wheel: ${wheelNotes[currentPlayerIndex]}`;
      scores[currentPlayerIndex].holes[currentHoleIndex] = finalStrokes;
      scores[currentPlayerIndex].notes[currentHoleIndex] = note;
      updatePlayerStatsForHole(scores[currentPlayerIndex], currentHoleIndex);
      if (currentMode === "Challenge") scores[currentPlayerIndex].stats.challenges++;
      if (currentChallenge?.type === "SPIN_WHEEL") { continueWheelFlow(); return; }
      currentPlayerIndex++;
      if (currentPlayerIndex >= players.length) handleEndOfHole();
      else updatePlayScreen();
    }

    function updatePlayerStatsForHole(player, holeIndex) {
      const par = holes[holeIndex].par;
      const total = getHoleTotal(player, holeIndex);
      if (total === 1) player.stats.holeInOnes++;
      if (total < par) player.stats.underPar++;
      if (total === par) player.stats.pars++;
      if (total > par) player.stats.overPar++;
      if (total > player.stats.worstHoleScore) { player.stats.worstHoleScore = total; player.stats.worstHole = holes[holeIndex].hole; }
      if (total < player.stats.bestHoleScore) { player.stats.bestHoleScore = total; player.stats.bestHole = holes[holeIndex].hole; }
    }

    function handleEndOfHole() {
      if (currentMode === "Challenge" && currentChallenge) {
        if (currentChallenge.type === "CLOSEST_TO_HOLE") return showClosestToHoleScreen();
        if (currentChallenge.type === "UNDER_PAR_REMOVE_WORST") return applyUnderParRemoveWorst();
        if (currentChallenge.type === "HOLE_IN_ONE_ATTACK") return showHoleInOneAttackScreen();
        if (["SAFE_SHOT", "OBSTACLE_TROUBLE", "COMEBACK_COVE", "TREASURE_STEAL", "WATERFALL_WHISPER", "LUCKY_BOUNCE"].includes(currentChallenge.type)) return showEditableAdjustmentScreen();
      }
      advanceHole();
    }

    function advanceHole() {
      currentHoleIndex++;
      if (currentHoleIndex >= holes.length) finishGame();
      else { currentChallenge = null; currentMode = "Normal"; updateChoiceScreen(); showOnly("choiceScreen"); }
    }

    function goBackOnePlayer() {
      if (currentPlayerIndex > 0) {
        currentPlayerIndex--;
        scores[currentPlayerIndex].holes[currentHoleIndex] = null;
        scores[currentPlayerIndex].notes[currentHoleIndex] = "";
        updatePlayScreen();
      }
    }

    function showEditableAdjustmentScreen() {
      const type = currentChallenge.type;
      const settings = {
        SAFE_SHOT: { title: "Safe Shot", amount: -1, label: "Who earned the safe shot deduction?", button: "Deduct 1 Stroke" },
        OBSTACLE_TROUBLE: { title: "Obstacle Trouble", amount: 1, label: "Who got stuck or left the green?", button: "Add 1 Stroke" },
        COMEBACK_COVE: { title: "Comeback Cove", amount: -1, label: "Who finished in par or better and gets the comeback deduction?", button: "Deduct 1 Stroke" },
        TREASURE_STEAL: { title: "Treasure Steal", amount: -1, label: "Who got a hole-in-one and gets the deduction?", button: "Deduct 1 Stroke" },
        WATERFALL_WHISPER: { title: "Waterfall Whisper", amount: 1, label: "Who talked before everyone took their first shot?", button: "Add 1 Stroke", question: "Did anyone speak before everyone took their first shot?" },
        LUCKY_BOUNCE: { title: "Lucky Bounce", amount: -1, label: "Who got the lucky bounce deduction?", button: "Deduct 1 Stroke" }
      };
      const item = settings[type];
      document.getElementById("specialTitle").textContent = item.title;
      document.getElementById("specialContent").innerHTML = `<div class="message-box">${currentChallenge.text}</div><div class="rule-panel">${item.question ? `<div class="message-box">${item.question}</div>` : ""}<label><strong>${item.label}</strong></label>${playerSelectHtml("editableAdjustPlayer")}<div class="center"><button onclick="applyEditableAdjustment('${type}')">${item.button}</button><button class="gold-btn" onclick="advanceHole()">No Change / Continue</button></div></div>`;
      showOnly("specialScreen");
    }

    function applyEditableAdjustment(type) {
      const settings = {
        SAFE_SHOT: { amount: -1, note: "Safe Shot: -1." }, OBSTACLE_TROUBLE: { amount: 1, note: "Obstacle Trouble: +1." }, COMEBACK_COVE: { amount: -1, note: "Comeback Cove: -1." }, TREASURE_STEAL: { amount: -1, note: "Treasure Steal: -1." }, WATERFALL_WHISPER: { amount: 1, note: "Waterfall Whisper: +1." }, LUCKY_BOUNCE: { amount: -1, note: "Lucky Bounce: -1." }
      };
      const playerIndex = Number(document.getElementById("editableAdjustPlayer").value);
      const item = settings[type];
      scores[playerIndex].adjustments[currentHoleIndex] += item.amount;
      scores[playerIndex].notes[currentHoleIndex] += ` ${item.note}`;
      if (item.amount > 0) scores[playerIndex].stats.penalties++; else scores[playerIndex].stats.bonuses++;
      gameEvents.push({ type: item.amount > 0 ? "penalty" : "bonus", player: scores[playerIndex].name, amount: item.amount, note: item.note, hole: holes[currentHoleIndex].hole });
      const more = confirm("Do you need to adjust another player's score for this challenge?");
      if (more) showEditableAdjustmentScreen(); else advanceHole();
    }

    function showClosestToHoleScreen() {
      document.getElementById("specialTitle").textContent = "Closest to the Hole";
      document.getElementById("specialContent").innerHTML = `<div class="message-box">Select who got closest without going in. That player gets 1 stroke deducted.</div><div class="rule-panel"><label><strong>Closest player</strong></label>${playerSelectHtml("closestSelect")}<div class="center"><button onclick="applyClosestWinner()">Apply Closest Player</button></div></div>`;
      showOnly("specialScreen");
    }

    function applyClosestWinner() {
      const closestIndex = Number(document.getElementById("closestSelect").value);
      scores[closestIndex].adjustments[currentHoleIndex] -= 1;
      scores[closestIndex].notes[currentHoleIndex] += " Closest: -1.";
      scores[closestIndex].stats.bonuses++;
      document.getElementById("specialContent").innerHTML = `<div class="message-box">${players[closestIndex]} gets 1 stroke deducted. Did anyone's ball go in?</div><div class="center"><button onclick="showWentInSelector()">Yes</button><button class="gold-btn" onclick="advanceHole()">No, Continue</button></div>`;
    }

    function showWentInSelector() {
      document.getElementById("specialContent").innerHTML = `<div class="message-box">Choose the player whose ball went in. They get 2 strokes added.</div><div class="rule-panel">${playerSelectHtml("wentInSelect")}<div class="center"><button onclick="applyWentInPenalty()">Add 2 Strokes</button></div></div>`;
    }

    function applyWentInPenalty() {
      const playerIndex = Number(document.getElementById("wentInSelect").value);
      scores[playerIndex].adjustments[currentHoleIndex] += 2;
      scores[playerIndex].notes[currentHoleIndex] += " Ball went in: +2.";
      scores[playerIndex].stats.penalties++;
      const more = confirm("Did another player's ball go in too?");
      if (more) showWentInSelector(); else advanceHole();
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
      const message = luckyNames.length === 0 ? "Nobody is lucky today." : luckyNames.length === 1 ? `Lucky for ${luckyNames[0]}! Their worst previous score has been eliminated.` : `Lucky for ${luckyNames[0]} and someone else! Worst previous scores have been eliminated.`;
      document.getElementById("specialContent").innerHTML = `<div class="message-box">${message}</div><div class="center"><button onclick="advanceHole()">Continue</button></div>`;
      showOnly("specialScreen");
    }

    function findWorstPreviousHole(player, currentIndex) {
      let worstIndex = null, worstValue = -Infinity;
      for (let i = 0; i <= currentIndex; i++) {
        const value = getHoleTotal(player, i);
        if (value > worstValue) { worstValue = value; worstIndex = i; }
      }
      return worstIndex;
    }

    function showHoleInOneAttackScreen() {
      const holeInOnePlayers = scores.map((p, index) => ({ name: p.name, index, score: getHoleTotal(p, currentHoleIndex) })).filter(p => p.score === 1);
      if (holeInOnePlayers.length === 0) {
        document.getElementById("specialTitle").textContent = "No Hole-in-One";
        document.getElementById("specialContent").innerHTML = `<div class="message-box">No hole-in-one this round. No revenge today.</div><div class="center"><button onclick="advanceHole()">Continue</button></div>`;
        showOnly("specialScreen");
        return;
      }
      pendingAfterHole = { type: "HOLE_IN_ONE_ATTACK", attackers: holeInOnePlayers, current: 0 };
      showAttackChoice();
    }

    function showAttackChoice() {
      const attacker = pendingAfterHole.attackers[pendingAfterHole.current];
      document.getElementById("specialTitle").textContent = "Hole-in-One Power Move";
      document.getElementById("specialContent").innerHTML = `<div class="message-box">${attacker.name} got a hole-in-one! Choose someone to receive +2 strokes.</div><div class="rule-panel">${playerSelectHtml("attackTarget", attacker.index)}<div class="center"><button onclick="applyAttackPenalty()">Add 2 Strokes</button></div></div>`;
      showOnly("specialScreen");
    }

    function applyAttackPenalty() {
      const targetIndex = Number(document.getElementById("attackTarget").value);
      const attacker = pendingAfterHole.attackers[pendingAfterHole.current];
      scores[targetIndex].adjustments[currentHoleIndex] += 2;
      scores[targetIndex].notes[currentHoleIndex] += ` +2 from ${attacker.name}.`;
      scores[targetIndex].stats.penalties++;
      pendingAfterHole.current++;
      if (pendingAfterHole.current >= pendingAfterHole.attackers.length) { pendingAfterHole = null; advanceHole(); }
      else showAttackChoice();
    }

    function playerSelectHtml(id, excludeIndex = null) {
      let html = `<select id="${id}">`;
      players.forEach((name, index) => { if (index !== excludeIndex) html += `<option value="${index}">${name}</option>`; });
      html += `</select>`;
      return html;
    }

    function getHoleTotal(player, holeIndex) {
      return (Number(player.holes[holeIndex]) || 0) + (Number(player.adjustments[holeIndex]) || 0);
    }

    function totalFor(player) {
      return player.holes.reduce((sum, val, i) => sum + (Number(val) || 0) + (Number(player.adjustments?.[i]) || 0), 0);
    }

    function finishGame() {
      const results = scores.map(p => ({ name: p.name, total: totalFor(p), holes: p.holes, adjustments: p.adjustments, notes: p.notes, stats: p.stats }));
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
      const bestHoleInOnes = [...results].sort((a,b) => b.stats.holeInOnes - a.stats.holeInOnes)[0];
      const mostPenalties = [...results].sort((a,b) => b.stats.penalties - a.stats.penalties)[0];
      const mostBonuses = [...results].sort((a,b) => b.stats.bonuses - a.stats.bonuses)[0];
      const mostWheel = [...results].sort((a,b) => b.stats.wheelSpins - a.stats.wheelSpins)[0];
      const biggestGap = last.total - winner.total;
      highlights.push(`🏴‍☠️ Captain ${winner.name} claimed the Cove with ${winner.total} strokes. The treasure chest has been notified.`);
      if (biggestGap > 0) highlights.push(`📜 ${last.name} finished ${biggestGap} strokes behind the champion, bravely proving that every pirate crew needs comic relief.`);
      if (bestHoleInOnes.stats.holeInOnes > 0) highlights.push(`⛳ ${bestHoleInOnes.name} scored ${bestHoleInOnes.stats.holeInOnes} hole-in-one${bestHoleInOnes.stats.holeInOnes === 1 ? "" : "s"}. Cove officials are checking for wizardry.`);
      if (mostPenalties.stats.penalties > 0) highlights.push(`⚓ ${mostPenalties.name} collected the most penalties. That is not usually the treasure people are looking for.`);
      if (mostBonuses.stats.bonuses > 0) highlights.push(`💰 ${mostBonuses.name} grabbed the most bonuses. Suspiciously lucky. Pirate-level suspicious.`);
      if (mostWheel.stats.wheelSpins > 0) highlights.push(`🎡 ${mostWheel.name} spun the wheel ${mostWheel.stats.wheelSpins} time${mostWheel.stats.wheelSpins === 1 ? "" : "s"} and lived to tell the tale.`);
      results.forEach(p => {
        if (p.stats.worstHole) highlights.push(`🌊 Hole ${p.stats.worstHole} gave ${p.name} some trouble. The waterfall refuses to comment.`);
      });
      const randomPlayers = shuffle([...results]).slice(0, Math.min(4, results.length));
      randomPlayers.forEach(p => highlights.push(roastLines[Math.floor(Math.random() * roastLines.length)].replace("{name}", p.name)));
      gameEvents.slice(-5).forEach(e => {
        if (e.type === "wheel") highlights.push(`🎡 On Hole ${e.hole}, ${e.player} spun “${e.result}.” The wheel was feeling dramatic.`);
        if (e.type === "bonus") highlights.push(`💎 On Hole ${e.hole}, ${e.player} earned a bonus. Somewhere, a pirate accountant smiled.`);
        if (e.type === "penalty") highlights.push(`🦜 On Hole ${e.hole}, ${e.player} took a penalty. The parrot saw everything.`);
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
      const totalHoleInOnes = results.reduce((s,p) => s + p.stats.holeInOnes, 0);
      const totalPenalties = results.reduce((s,p) => s + p.stats.penalties, 0);
      const totalWheel = results.reduce((s,p) => s + p.stats.wheelSpins, 0);
      if (!records.lowestScore || winner.total < records.lowestScore.score) records.lowestScore = { name: winner.name, score: winner.total, date: new Date().toLocaleDateString() };
      if (!records.highestScore || highest.total > records.highestScore.score) records.highestScore = { name: highest.name, score: highest.total, date: new Date().toLocaleDateString() };
      if (!records.mostHoleInOnes || totalHoleInOnes > records.mostHoleInOnes.count) records.mostHoleInOnes = { count: totalHoleInOnes, date: new Date().toLocaleDateString() };
      if (!records.mostPenalties || totalPenalties > records.mostPenalties.count) records.mostPenalties = { count: totalPenalties, date: new Date().toLocaleDateString() };
      if (!records.mostWheelSpins || totalWheel > records.mostWheelSpins.count) records.mostWheelSpins = { count: totalWheel, date: new Date().toLocaleDateString() };
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
      holes.forEach(h => html += `<th>${h.hole}</th>`);
      html += `<th>Total</th></tr></thead><tbody>`;
      data.forEach(p => {
        html += `<tr><td>${p.name}</td>`;
        p.holes.forEach((s, i) => {
          const adj = Number(p.adjustments?.[i]) || 0;
          const total = getHoleTotal(p, i);
          const note = p.notes?.[i] ? ` title="${p.notes[i].trim()}"` : "";
          html += `<td${note}>${s ?? ""}${adj ? `<br><small>${adj > 0 ? "+" : ""}${adj}</small><br><strong>${total}</strong>` : ""}</td>`;
        });
        html += `<td><strong>${totalFor(p)}</strong></td></tr>`;
      });
      html += `</tbody></table><p class="muted">Small + or - numbers show challenge adjustments.</p></div>`;
      return html;
    }

    function saveGame(results) {
      const history = JSON.parse(localStorage.getItem("adventureCoveHistory") || "[]");
      history.unshift({ date: new Date().toLocaleString(), winner: results[0].name, winningScore: results[0].total, results });
      localStorage.setItem("adventureCoveHistory", JSON.stringify(history.slice(0, 50)));
    }

    function showHistory() {
      const history = JSON.parse(localStorage.getItem("adventureCoveHistory") || "[]");
      const list = document.getElementById("historyList");
      if (!history.length) list.innerHTML = `<p>No past games saved yet.</p>`;
      else list.innerHTML = history.map(game => `<div class="history-item"><div><strong>${game.winner}</strong> won with <strong>${game.winningScore}</strong><br><span class="muted">${game.date}</span></div><div>${game.results.map(r => `${r.name}: ${r.total}`).join(" | ")}</div></div>`).join("");
      showOnly("historyScreen");
    }

    function clearHistory() {
      if (confirm("Clear all saved games and Cove records?")) {
        localStorage.removeItem("adventureCoveHistory");
        localStorage.removeItem("adventureCoveRecords");
        showHistory();
      }
    }

    function backHome() { showOnly("setupScreen"); }

    function newGame() {
      players = [];
      scores = [];
      currentHoleIndex = 0;
      currentPlayerIndex = 0;
      currentChallenge = null;
      for (let i = 1; i <= 6; i++) document.getElementById(`player${i}`).value = "";
      showOnly("setupScreen");
    }

    function launchConfetti() {
      for (let i = 0; i < 90; i++) {
        const piece = document.createElement("div");
        piece.textContent = ["🏴‍☠️", "⛳", "⭐", "💰", "🌊", "🦜", "⚓"][Math.floor(Math.random() * 7)];
        piece.style.position = "fixed";
        piece.style.left = Math.random() * 100 + "vw";
        piece.style.top = "-30px";
        piece.style.fontSize = (18 + Math.random() * 22) + "px";
        piece.style.zIndex = "9999";
        piece.style.pointerEvents = "none";
        piece.style.transition = "transform 2.8s ease-in, opacity 2.8s ease-in";
        document.body.appendChild(piece);
        setTimeout(() => { piece.style.transform = `translateY(${window.innerHeight + 80}px) rotate(${Math.random() * 720}deg)`; piece.style.opacity = "0"; }, 20);
        setTimeout(() => piece.remove(), 3000);
      }
    }

    buildSetup();
