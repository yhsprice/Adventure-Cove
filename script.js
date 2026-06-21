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
  TRIVIA: "Do You Dare? Answer a trivia question correctly before your turn. If correct, move your ball forward 1 normal step. No jumping or lunging.",
  FORTUNE_TELLER: "Fortune Teller: predict your score before the hole starts. If your prediction is exactly correct, the app deducts 1 stroke.",
  STEADY_CAPTAIN: "Steady Captain: keep both hands touching each other on the putter for the entire hole. If your hands separate at any time, add 1 stroke. After the hole, select affected players and the app will apply it."
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
{ text: challengeTypes.FORTUNE_TELLER, type: "FORTUNE_TELLER" },
{ text: "Steady Captain: keep both hands touching each other on the putter for the entire hole. If your hands separate at any time, add 1 stroke. After the hole, select affected players and the app will apply it.", type: "STEADY_CAPTAIN" },
{ text: challengeTypes.TRIVIA, type: "TRIVIA" },
  ];

const triviaQuestions = {
  easy: [
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
  { question: "What do fish breathe through?", choices: ["Lungs", "Gills", "Noses", "Mouths"], answer: 1 },
    { question: "What color is Mickey Mouse's shorts?", choices: ["Blue", "Red", "Green", "Yellow"], answer: 1 },
{ question: "What is the name of Elsa's sister in Frozen?", choices: ["Anna", "Olaf", "Moana", "Belle"], answer: 0 },
{ question: "What superhero wears a bat symbol?", choices: ["Superman", "Batman", "Spider-Man", "Iron Man"], answer: 1 },
{ question: "What color is Lightning McQueen?", choices: ["Blue", "Green", "Red", "Yellow"], answer: 2 },
{ question: "What animal is Simba?", choices: ["Tiger", "Lion", "Bear", "Wolf"], answer: 1 },

{ question: "Who lives in a pineapple under the sea?", choices: ["Mickey Mouse", "SpongeBob", "Olaf", "Buzz Lightyear"], answer: 1 },
{ question: "What is Buzz Lightyear's catchphrase?", choices: ["Let's Go!", "To Infinity and Beyond!", "Cowabunga!", "Adventure Time!"], answer: 1 },
{ question: "What color is Hulk?", choices: ["Blue", "Green", "Red", "Purple"], answer: 1 },
{ question: "What kind of animal is Olaf?", choices: ["Penguin", "Snowman", "Reindeer", "Bear"], answer: 1 },
{ question: "Who has a magic lamp?", choices: ["Aladdin", "Woody", "Peter Pan", "Shrek"], answer: 0 },

{ question: "What superhero can climb walls?", choices: ["Batman", "Spider-Man", "Thor", "Flash"], answer: 1 },
{ question: "What is Moana's pet chicken named?", choices: ["Hei Hei", "Cluck", "Peck", "Red"], answer: 0 },
{ question: "What color is Captain America's shield?", choices: ["Blue, Red, and White", "Green and Yellow", "Purple and Black", "Orange"], answer: 0 },
{ question: "What toy is Woody?", choices: ["Astronaut", "Cowboy", "Pirate", "Robot"], answer: 1 },
{ question: "What animal is Dumbo?", choices: ["Mouse", "Elephant", "Horse", "Dog"], answer: 1 },

{ question: "Who is Mickey Mouse's dog?", choices: ["Pluto", "Goofy", "Donald", "Max"], answer: 0 },
{ question: "What is the name of the snowman in Frozen?", choices: ["Sven", "Kristoff", "Olaf", "Hans"], answer: 2 },
{ question: "Which superhero uses a hammer?", choices: ["Thor", "Batman", "Hulk", "Iron Man"], answer: 0 },
{ question: "What color is Cinderella's dress?", choices: ["Pink", "Blue", "Green", "Purple"], answer: 1 },
{ question: "Who says 'Hakuna Matata'?", choices: ["Elsa", "Timon and Pumbaa", "Buzz", "Maui"], answer: 1 },

{ question: "What kind of fish is Nemo?", choices: ["Goldfish", "Clownfish", "Shark", "Tuna"], answer: 1 },
{ question: "What is Superman's weakness?", choices: ["Ice", "Fire", "Kryptonite", "Water"], answer: 2 },
{ question: "Who is the cowboy in Toy Story?", choices: ["Buzz", "Woody", "Rex", "Forky"], answer: 1 },
{ question: "What does Olaf dream about?", choices: ["Winter", "Summer", "Spring", "Snow"], answer: 1 },
{ question: "What color is Pikachu?", choices: ["Blue", "Yellow", "Green", "Red"], answer: 1 },

{ question: "Who lives in Neverland?", choices: ["Aladdin", "Peter Pan", "Maui", "Simba"], answer: 1 },
{ question: "What animal is Scooby-Doo?", choices: ["Beagle", "Great Dane", "Bulldog", "Poodle"], answer: 1 },
{ question: "Who is Iron Man?", choices: ["Tony Stark", "Bruce Wayne", "Steve Rogers", "Clark Kent"], answer: 0 },
{ question: "What kind of animal is Sven?", choices: ["Horse", "Reindeer", "Moose", "Dog"], answer: 1 },
{ question: "What is the name of Ariel's fish friend?", choices: ["Flounder", "Nemo", "Dory", "Sebastian"], answer: 0 },

{ question: "What color is Shrek?", choices: ["Blue", "Green", "Brown", "Yellow"], answer: 1 },
{ question: "Who is Batman's sidekick?", choices: ["Robin", "Flash", "Hulk", "Thor"], answer: 0 },
{ question: "What animal is Pumbaa?", choices: ["Pig", "Warthog", "Boar", "Hippo"], answer: 1 },
{ question: "Who pulls Maui's hook from the ocean?", choices: ["Elsa", "Moana", "Anna", "Rapunzel"], answer: 1 },
{ question: "What kind of creature is Stitch?", choices: ["Alien", "Dog", "Bear", "Monkey"], answer: 0 },

{ question: "Who is the princess in Beauty and the Beast?", choices: ["Belle", "Jasmine", "Ariel", "Elsa"], answer: 0 },
{ question: "What superhero is known as the fastest man alive?", choices: ["Batman", "Flash", "Hulk", "Thor"], answer: 1 },
{ question: "What is the name of the dragon in Mulan?", choices: ["Mushu", "Spike", "Draco", "Toothless"], answer: 0 },
{ question: "What animal is Winnie the Pooh?", choices: ["Rabbit", "Bear", "Pig", "Dog"], answer: 1 },
{ question: "Who is Elsa's magical snowman?", choices: ["Olaf", "Sven", "Kristoff", "Hans"], answer: 0 },

{ question: "What color is the Genie in Aladdin?", choices: ["Green", "Blue", "Purple", "Red"], answer: 1 },
{ question: "Who lives with seven dwarfs?", choices: ["Cinderella", "Snow White", "Belle", "Rapunzel"], answer: 1 },
{ question: "What is Baby Yoda's real name?", choices: ["Grogu", "Yoda Jr.", "Mando", "Jedi"], answer: 0 },
{ question: "What superhero carries a shield?", choices: ["Iron Man", "Captain America", "Thor", "Hulk"], answer: 1 },
{ question: "Who says 'Ohana means family'?", choices: ["Lilo", "Moana", "Anna", "Belle"], answer: 0 },

{ question: "What animal is Baloo?", choices: ["Lion", "Bear", "Tiger", "Wolf"], answer: 1 },
{ question: "What color are Minions?", choices: ["Blue", "Yellow", "Green", "Orange"], answer: 1 },
{ question: "Who is the cowboy's best friend in Toy Story?", choices: ["Rex", "Buzz", "Slinky", "Forky"], answer: 1 },
{ question: "What is the name of the kingdom in Frozen?", choices: ["Arendelle", "Avalon", "Atlantis", "Corona"], answer: 0 },
{ question: "Who swings through New York using webs?", choices: ["Batman", "Spider-Man", "Flash", "Thor"], answer: 1 },
    { question: "What color is the Hulk?", choices: ["Blue", "Green", "Red", "Purple"], answer: 1 },
{ question: "What superhero uses a shield?", choices: ["Spider-Man", "Captain America", "Thor", "Batman"], answer: 1 },
{ question: "What city does Batman protect?", choices: ["Gotham", "Metropolis", "New York", "Central City"], answer: 0 },
{ question: "What weapon does Thor use?", choices: ["Sword", "Hammer", "Bow", "Shield"], answer: 1 },
{ question: "Who can climb walls and shoot webs?", choices: ["Batman", "Spider-Man", "Flash", "Hulk"], answer: 1 },
{ question: "What is Superman's symbol shaped like?", choices: ["Circle", "Star", "Diamond", "Triangle"], answer: 2 },
{ question: "What color is Iron Man's suit often shown as?", choices: ["Red and Gold", "Blue and White", "Green", "Black"], answer: 0 },
{ question: "Who is Batman's sidekick?", choices: ["Robin", "Falcon", "Bucky", "Vision"], answer: 0 },
{ question: "What superhero is very fast?", choices: ["Flash", "Hulk", "Aquaman", "Ant-Man"], answer: 0 },
{ question: "Which superhero lives under the sea?", choices: ["Batman", "Aquaman", "Thor", "Iron Man"], answer: 1 },

{ question: "What does Spider-Man shoot?", choices: ["Fire", "Webs", "Ice", "Lasers"], answer: 1 },
{ question: "What superhero turns big and green?", choices: ["Hulk", "Flash", "Batman", "Wolverine"], answer: 0 },
{ question: "Who wears a cape and has an S symbol?", choices: ["Superman", "Batman", "Thor", "Loki"], answer: 0 },
{ question: "Which hero has a lasso?", choices: ["Wonder Woman", "Black Widow", "Captain Marvel", "Gamora"], answer: 0 },
{ question: "What animal is Batman named after?", choices: ["Cat", "Bat", "Wolf", "Eagle"], answer: 1 },
    { question: "What is Captain America's shield mostly made from?", choices: ["Wood", "Vibranium", "Steel", "Gold"], answer: 1 },
{ question: "Who is Iron Man?", choices: ["Tony Stark", "Bruce Wayne", "Clark Kent", "Peter Parker"], answer: 0 },
{ question: "What color is Spider-Man's costume?", choices: ["Red and Blue", "Green and Yellow", "Black and White", "Purple"], answer: 0 },
{ question: "Who is Batman's butler?", choices: ["Alfred", "James", "Robin", "Gordon"], answer: 0 },
{ question: "What superhero shrinks very small?", choices: ["Ant-Man", "Hulk", "Flash", "Thor"], answer: 0 },

{ question: "What superhero can talk to fish?", choices: ["Aquaman", "Batman", "Iron Man", "Green Lantern"], answer: 0 },
{ question: "What superhero is from Krypton?", choices: ["Batman", "Thor", "Superman", "Flash"], answer: 2 },
{ question: "What color is the Flash's suit?", choices: ["Blue", "Red", "Green", "Black"], answer: 1 },
{ question: "Who is Hulk before he transforms?", choices: ["Bruce Banner", "Tony Stark", "Steve Rogers", "Peter Parker"], answer: 0 },
{ question: "What superhero uses a magic hammer?", choices: ["Thor", "Aquaman", "Iron Man", "Black Panther"], answer: 0 },

{ question: "What is Wonder Woman's weapon famous for making people tell the truth?", choices: ["Sword", "Shield", "Lasso", "Spear"], answer: 2 },
{ question: "Who is Spider-Man's aunt?", choices: ["May", "June", "Anna", "Sarah"], answer: 0 },
{ question: "What superhero is known as the Dark Knight?", choices: ["Batman", "Superman", "Flash", "Thor"], answer: 0 },
{ question: "Which superhero has claws made of metal?", choices: ["Wolverine", "Cyclops", "Hawkeye", "Falcon"], answer: 0 },
{ question: "What animal inspires Black Panther?", choices: ["Tiger", "Lion", "Panther", "Leopard"], answer: 2 },

{ question: "Who is Superman's reporter friend?", choices: ["Lois Lane", "Mary Jane", "Pepper Potts", "Black Widow"], answer: 0 },
{ question: "What superhero uses arrows?", choices: ["Hawkeye", "Hulk", "Thor", "Vision"], answer: 0 },
{ question: "What color ring does Green Lantern use?", choices: ["Blue", "Red", "Green", "Yellow"], answer: 2 },
{ question: "What is Batman's vehicle called?", choices: ["Batmobile", "Bat Car", "Night Rider", "Bat Cruiser"], answer: 0 },
{ question: "What superhero is half human and half Atlantean?", choices: ["Thor", "Aquaman", "Namor", "Flash"], answer: 1 },

{ question: "What superhero carries a trident?", choices: ["Aquaman", "Batman", "Thor", "Superman"], answer: 0 },
{ question: "Who is Peter Parker?", choices: ["Batman", "Iron Man", "Spider-Man", "Hulk"], answer: 2 },
{ question: "What superhero can fly and shoot lasers from his eyes?", choices: ["Batman", "Superman", "Hawkeye", "Flash"], answer: 1 },
{ question: "What metal is Wolverine's skeleton coated with?", choices: ["Steel", "Titanium", "Adamantium", "Iron"], answer: 2 },
{ question: "What superhero is known for saying 'I am Groot'?", choices: ["Rocket", "Groot", "Drax", "Star-Lord"], answer: 1 },

{ question: "What superhero team includes Iron Man, Thor, and Hulk?", choices: ["Justice League", "X-Men", "Avengers", "Guardians"], answer: 2 },
{ question: "Who is Batman's police ally?", choices: ["Commissioner Gordon", "Alfred", "Robin", "Joker"], answer: 0 },
{ question: "What superhero wears red boots and a blue suit with a cape?", choices: ["Superman", "Batman", "Flash", "Aquaman"], answer: 0 },
{ question: "Which superhero has a spider symbol on his suit?", choices: ["Spider-Man", "Batman", "Ant-Man", "Flash"], answer: 0 },
{ question: "What superhero can run through walls by vibrating?", choices: ["Flash", "Thor", "Hulk", "Vision"], answer: 0 },

{ question: "What superhero lives in Gotham City?", choices: ["Batman", "Superman", "Flash", "Aquaman"], answer: 0 },
{ question: "What superhero uses shrinking technology?", choices: ["Ant-Man", "Iron Man", "Thor", "Hulk"], answer: 0 },
{ question: "What superhero wears armor instead of having powers?", choices: ["Iron Man", "Hulk", "Thor", "Superman"], answer: 0 },
{ question: "What superhero comes from Asgard?", choices: ["Thor", "Batman", "Aquaman", "Flash"], answer: 0 },
{ question: "What superhero is known for super speed?", choices: ["Flash", "Batman", "Iron Man", "Aquaman"], answer: 0 },
    { question: "What is the name of the cowboy in Toy Story?", choices: ["Buzz", "Woody", "Jessie", "Rex"], answer: 1 },
{ question: "What is the name of Buzz Lightyear's best friend?", choices: ["Rex", "Woody", "Slinky", "Forky"], answer: 1 },
{ question: "What kind of fish is Nemo?", choices: ["Goldfish", "Clownfish", "Tuna", "Shark"], answer: 1 },
{ question: "Who is Elsa's sister?", choices: ["Moana", "Anna", "Belle", "Rapunzel"], answer: 1 },
{ question: "What is Olaf made of?", choices: ["Ice", "Snow", "Sand", "Clouds"], answer: 1 },

{ question: "What is the name of the monster with one eye in Monsters, Inc.?", choices: ["Sulley", "Mike", "Randall", "Roz"], answer: 1 },
{ question: "What animal is Simba?", choices: ["Tiger", "Lion", "Leopard", "Cheetah"], answer: 1 },
{ question: "Who grants wishes in Aladdin?", choices: ["Jafar", "Abu", "The Genie", "Carpet"], answer: 2 },
{ question: "What color is Lightning McQueen?", choices: ["Blue", "Yellow", "Red", "Green"], answer: 2 },
{ question: "Who owns Lightning McQueen?", choices: ["Mater", "Sally", "No One", "Doc"], answer: 2 },

{ question: "What is the name of Moana's chicken?", choices: ["Hei Hei", "Pua", "Maui", "Tamatoa"], answer: 0 },
{ question: "What animal is Pua?", choices: ["Pig", "Dog", "Goat", "Cat"], answer: 0 },
{ question: "Who has magical long hair?", choices: ["Belle", "Elsa", "Rapunzel", "Tiana"], answer: 2 },
{ question: "What is the name of Ariel's fish friend?", choices: ["Nemo", "Flounder", "Dory", "Sebastian"], answer: 1 },
{ question: "What animal is Sebastian?", choices: ["Fish", "Lobster", "Crab", "Shrimp"], answer: 2 },

{ question: "What color is Cinderella's famous dress?", choices: ["Pink", "Blue", "Green", "Purple"], answer: 1 },
{ question: "What is the name of the snowman in Frozen?", choices: ["Sven", "Olaf", "Hans", "Kristoff"], answer: 1 },
{ question: "Who is the princess in Beauty and the Beast?", choices: ["Belle", "Aurora", "Jasmine", "Ariel"], answer: 0 },
{ question: "What animal is Dumbo?", choices: ["Horse", "Elephant", "Mouse", "Bear"], answer: 1 },
{ question: "What is the name of the dragon in Mulan?", choices: ["Mushu", "Spike", "Draco", "Puff"], answer: 0 },

{ question: "Who says 'To Infinity and Beyond!'?", choices: ["Woody", "Buzz", "Rex", "Forky"], answer: 1 },
{ question: "What is Sulley covered in?", choices: ["Scales", "Fur", "Feathers", "Armor"], answer: 1 },
{ question: "What animal is Timon?", choices: ["Meerkat", "Monkey", "Fox", "Hyena"], answer: 0 },
{ question: "What animal is Pumbaa?", choices: ["Pig", "Warthog", "Hippo", "Buffalo"], answer: 1 },
{ question: "Who sings 'Let It Go'?", choices: ["Anna", "Elsa", "Olaf", "Kristoff"], answer: 1 },

{ question: "What color are the Minions?", choices: ["Blue", "Green", "Yellow", "Orange"], answer: 2 },
{ question: "What kind of animal is Sven?", choices: ["Horse", "Moose", "Reindeer", "Goat"], answer: 2 },
{ question: "Who lives in a pineapple under the sea?", choices: ["Patrick", "SpongeBob", "Squidward", "Mr. Krabs"], answer: 1 },
{ question: "What shape is SpongeBob?", choices: ["Circle", "Square", "Triangle", "Rectangle"], answer: 1 },
{ question: "What animal is Winnie the Pooh?", choices: ["Rabbit", "Bear", "Pig", "Dog"], answer: 1 },

{ question: "What is the name of the kingdom in Frozen?", choices: ["Corona", "Atlantica", "Arendelle", "Auradon"], answer: 2 },
{ question: "What is Stitch?", choices: ["Alien", "Dog", "Bear", "Monkey"], answer: 0 },
{ question: "What is the name of Lilo's blue friend?", choices: ["Spike", "Stitch", "Scrump", "Angel"], answer: 1 },
{ question: "What animal is Baloo?", choices: ["Tiger", "Bear", "Wolf", "Elephant"], answer: 1 },
{ question: "Who is Peter Pan's fairy friend?", choices: ["Tinker Bell", "Wendy", "Tiger Lily", "Jane"], answer: 0 },

{ question: "What does Pinocchio want to become?", choices: ["A prince", "A real boy", "A knight", "A pirate"], answer: 1 },
{ question: "What animal is Bambi?", choices: ["Rabbit", "Deer", "Fox", "Bear"], answer: 1 },
{ question: "Who owns the magic lamp?", choices: ["Jafar", "Aladdin", "Abu", "Jasmine"], answer: 1 },
{ question: "What kind of animal is Dory?", choices: ["Blue Tang Fish", "Goldfish", "Clownfish", "Shark"], answer: 0 },
{ question: "What is the name of the rat chef in Ratatouille?", choices: ["Remy", "Emile", "Linguini", "Gusteau"], answer: 0 },

{ question: "What animal is Mater's friend Lightning McQueen?", choices: ["Car", "Truck", "Race Car", "Tow Truck"], answer: 2 },
{ question: "What family has powers in Encanto?", choices: ["The Madrigals", "The Garcias", "The Riveras", "The Casitas"], answer: 0 },
{ question: "Who is the strongest Madrigal?", choices: ["Mirabel", "Isabela", "Luisa", "Dolores"], answer: 2 },
{ question: "What color chameleon belongs to Rapunzel?", choices: ["Pascal", "Maximus", "Bruno", "Flit"], answer: 0 },
{ question: "What animal is Pascal?", choices: ["Lizard", "Chameleon", "Snake", "Gecko"], answer: 1 },

{ question: "Who is Mickey Mouse's dog?", choices: ["Goofy", "Pluto", "Max", "Pete"], answer: 1 },
{ question: "What color shorts does Mickey usually wear?", choices: ["Blue", "Green", "Yellow", "Red"], answer: 3 },
{ question: "Who is Donald Duck's girlfriend?", choices: ["Minnie", "Daisy", "Clarabelle", "Pearl"], answer: 1 },
{ question: "What is Goofy?", choices: ["Dog", "Cow", "Horse", "Bear"], answer: 0 },
{ question: "Who wears a big red bow?", choices: ["Daisy", "Minnie", "Clarabelle", "Pearl"], answer: 1 },
    { question: "What color is Mario's hat?", choices: ["Blue", "Red", "Green", "Yellow"], answer: 1 },
{ question: "Who is Mario's brother?", choices: ["Wario", "Yoshi", "Luigi", "Toad"], answer: 2 },
{ question: "What color is Luigi's hat?", choices: ["Blue", "Green", "Red", "Yellow"], answer: 1 },
{ question: "What animal is Sonic?", choices: ["Fox", "Hedgehog", "Rabbit", "Cat"], answer: 1 },
{ question: "What color is Sonic?", choices: ["Red", "Green", "Blue", "Yellow"], answer: 2 },

{ question: "What game lets you build with blocks?", choices: ["Fortnite", "Minecraft", "Roblox", "Mario Kart"], answer: 1 },
{ question: "What are the green enemies called in Mario?", choices: ["Koopas", "Goombas", "Yoshis", "Toads"], answer: 0 },
{ question: "What animal is Pikachu?", choices: ["Mouse", "Cat", "Rabbit", "Fox"], answer: 0 },
{ question: "What color is Pikachu?", choices: ["Blue", "Green", "Yellow", "Orange"], answer: 2 },
{ question: "What game features Creepers?", choices: ["Minecraft", "Roblox", "Fortnite", "Pokemon"], answer: 0 },

{ question: "Who kidnaps Princess Peach?", choices: ["Yoshi", "Bowser", "Luigi", "Toad"], answer: 1 },
{ question: "What does Mario collect?", choices: ["Stars and Coins", "Apples", "Diamonds", "Keys"], answer: 0 },
{ question: "What is the name of Mario's dinosaur friend?", choices: ["Bowser", "Yoshi", "Luigi", "Toad"], answer: 1 },
{ question: "What game has trainers and Pokémon?", choices: ["Minecraft", "Pokemon", "Sonic", "Fortnite"], answer: 1 },
{ question: "What color is Charmander?", choices: ["Blue", "Green", "Orange", "Purple"], answer: 2 },

{ question: "What does a Creeper do?", choices: ["Explodes", "Flies", "Swims", "Builds"], answer: 0 },
{ question: "What is Roblox?", choices: ["A movie", "A game platform", "A cartoon", "A toy"], answer: 1 },
{ question: "What is the main goal in Pac-Man?", choices: ["Collect dots", "Build houses", "Race cars", "Catch fish"], answer: 0 },
{ question: "What color is Pac-Man?", choices: ["Blue", "Yellow", "Red", "Green"], answer: 1 },
{ question: "Who throws barrels at Mario?", choices: ["Bowser", "Donkey Kong", "Luigi", "Yoshi"], answer: 1 },

{ question: "What vehicle do players race in Mario Kart?", choices: ["Planes", "Boats", "Karts", "Trains"], answer: 2 },
{ question: "What animal is Tails from Sonic?", choices: ["Fox", "Rabbit", "Cat", "Dog"], answer: 0 },
{ question: "How many tails does Tails have?", choices: ["1", "2", "3", "4"], answer: 1 },
{ question: "What color is Luigi's shirt?", choices: ["Red", "Blue", "Green", "Yellow"], answer: 2 },
{ question: "What do Minecraft players mine?", choices: ["Blocks", "Clouds", "Cars", "Fish"], answer: 0 },

{ question: "Which Pokemon is known for water attacks and has a shell?", choices: ["Pikachu", "Bulbasaur", "Squirtle", "Charmander"], answer: 2 },
{ question: "What does Sonic like to collect?", choices: ["Coins", "Rings", "Stars", "Diamonds"], answer: 1 },
{ question: "What color is Knuckles?", choices: ["Blue", "Red", "Green", "Yellow"], answer: 1 },
{ question: "What game is Steve from?", choices: ["Roblox", "Minecraft", "Fortnite", "Pokemon"], answer: 1 },
{ question: "What shape are Minecraft blocks?", choices: ["Round", "Square", "Triangle", "Oval"], answer: 1 },

{ question: "Who is Mario trying to rescue?", choices: ["Zelda", "Peach", "Daisy", "Rosalina"], answer: 1 },
{ question: "What color is Bulbasaur?", choices: ["Green", "Blue", "Red", "Yellow"], answer: 0 },
{ question: "What color is Squirtle?", choices: ["Green", "Blue", "Orange", "Purple"], answer: 1 },
{ question: "What is the fastest blue video game character?", choices: ["Mario", "Sonic", "Luigi", "Pac-Man"], answer: 1 },
{ question: "What game features Endermen?", choices: ["Pokemon", "Minecraft", "Mario Kart", "Roblox"], answer: 1 },

{ question: "What fruit gives Pac-Man bonus points?", choices: ["Cherry", "Banana", "Apple", "Orange"], answer: 0 },
{ question: "Who is Bowser's main enemy?", choices: ["Luigi", "Mario", "Yoshi", "Toad"], answer: 1 },
{ question: "What does Pikachu shoot?", choices: ["Ice", "Water", "Electricity", "Fire"], answer: 2 },
{ question: "What color is a Pokeball mostly?", choices: ["Blue", "Green", "Red", "Yellow"], answer: 2 },
{ question: "What game has Battle Royale mode?", choices: ["Fortnite", "Pac-Man", "Pokemon", "Mario Kart"], answer: 0 },

{ question: "What color is Yoshi?", choices: ["Blue", "Red", "Green", "Yellow"], answer: 2 },
{ question: "What is the name of the princess in Mario games?", choices: ["Peach", "Daisy", "Rosalina", "Zelda"], answer: 0 },
{ question: "What game features gym leaders?", choices: ["Minecraft", "Pokemon", "Fortnite", "Roblox"], answer: 1 },
{ question: "What is Sonic's enemy scientist called?", choices: ["Dr. Robotnik", "Bowser", "Ganondorf", "King Boo"], answer: 0 },
{ question: "What block glows in Minecraft?", choices: ["Dirt", "Glowstone", "Sand", "Wood"], answer: 1 },

{ question: "What color is a Creeper?", choices: ["Blue", "Green", "Red", "Black"], answer: 1 },
{ question: "What game has villagers trading items?", choices: ["Minecraft", "Pac-Man", "Mario Kart", "Sonic"], answer: 0 },
{ question: "Who evolves from Charmander?", choices: ["Bulbasaur", "Charmeleon", "Squirtle", "Pikachu"], answer: 1 },
{ question: "What is the main collectible in Mario games?", choices: ["Coins", "Rings", "Blocks", "Stars"], answer: 0 },
{ question: "What game features crafting tables?", choices: ["Minecraft", "Pokemon", "Fortnite", "Pac-Man"], answer: 0 }
],

hard: [
    { question: "Which planet is the largest in our solar system?", choices: ["Earth", "Saturn", "Jupiter", "Mars"], answer: 2 },
    { question: "What gas do plants take in from the air?", choices: ["Oxygen", "Carbon dioxide", "Helium", "Hydrogen"], answer: 1 },
    { question: "How many continents are there?", choices: ["5", "6", "7", "8"], answer: 2 },
    { question: "What is the capital of the United States?", choices: ["New York City", "Washington, D.C.", "Boston", "Chicago"], answer: 1 },
    { question: "Which ocean is on the east coast of the United States?", choices: ["Pacific", "Atlantic", "Indian", "Arctic"], answer: 1 },
  { question: "Which U.S. state is known as the Buckeye State?", choices: ["Indiana", "Kentucky", "Ohio", "Pennsylvania"], answer: 2 },
{ question: "How many sides does a hexagon have?", choices: ["5", "6", "7", "8"], answer: 1 },
{ question: "What is the largest ocean on Earth?", choices: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: 2 },
{ question: "Who painted the Mona Lisa?", choices: ["Van Gogh", "Picasso", "Leonardo da Vinci", "Michelangelo"], answer: 2 },
{ question: "What is the capital of Canada?", choices: ["Toronto", "Vancouver", "Ottawa", "Montreal"], answer: 2 },
{ question: "How many bones are in the adult human body?", choices: ["186", "206", "226", "246"], answer: 1 },
{ question: "Which planet has the most moons?", choices: ["Mars", "Jupiter", "Saturn", "Neptune"], answer: 2 },
{ question: "What is the smallest U.S. state?", choices: ["Delaware", "Rhode Island", "Connecticut", "Vermont"], answer: 1 },
{ question: "Which metal is liquid at room temperature?", choices: ["Mercury", "Silver", "Lead", "Tin"], answer: 0 },
{ question: "What year did the Titanic sink?", choices: ["1905", "1912", "1920", "1931"], answer: 1 },

{ question: "What is the largest desert in the world?", choices: ["Sahara", "Gobi", "Antarctica", "Arabian"], answer: 2 },
{ question: "How many players are on a baseball field for one team?", choices: ["8", "9", "10", "11"], answer: 1 },
{ question: "Which country invented pizza?", choices: ["France", "Italy", "Spain", "Greece"], answer: 1 },
{ question: "Which animal is known as the fastest land animal?", choices: ["Lion", "Horse", "Cheetah", "Gazelle"], answer: 2 },
{ question: "What is the largest organ in the human body?", choices: ["Liver", "Heart", "Skin", "Lungs"], answer: 2 },
{ question: "Which U.S. president appears on the $20 bill?", choices: ["Lincoln", "Washington", "Jackson", "Grant"], answer: 2 },
{ question: "How many stripes are on the U.S. flag?", choices: ["10", "13", "15", "50"], answer: 1 },
{ question: "Which company created the iPhone?", choices: ["Samsung", "Apple", "Google", "Sony"], answer: 1 },
{ question: "What is the tallest mountain in the world?", choices: ["K2", "Denali", "Everest", "Kilimanjaro"], answer: 2 },
{ question: "What is the only mammal capable of true flight?", choices: ["Flying Squirrel", "Bat", "Sugar Glider", "Penguin"], answer: 1 },

{ question: "Which famous ship was commanded by Captain Jack Sparrow?", choices: ["Black Pearl", "Flying Dutchman", "Queen Anne's Revenge", "Interceptor"], answer: 0 },
{ question: "How many colors are in a rainbow?", choices: ["5", "6", "7", "8"], answer: 2 },
{ question: "Which gas do humans breathe in to survive?", choices: ["Nitrogen", "Carbon Dioxide", "Oxygen", "Hydrogen"], answer: 2 },
{ question: "What is the world's longest river?", choices: ["Amazon", "Mississippi", "Yangtze", "Nile"], answer: 3 },
{ question: "How many holes are played in a standard round of golf?", choices: ["9", "12", "18", "24"], answer: 2 },
  { question: "What is the capital of Australia?", choices: ["Sydney", "Melbourne", "Canberra", "Perth"], answer: 2 },
{ question: "Which planet is closest to the Sun?", choices: ["Venus", "Mercury", "Earth", "Mars"], answer: 1 },
{ question: "How many hearts does an octopus have?", choices: ["1", "2", "3", "4"], answer: 2 },
{ question: "Which country gifted the Statue of Liberty to the United States?", choices: ["England", "France", "Spain", "Germany"], answer: 1 },
{ question: "What is the largest species of shark?", choices: ["Great White", "Hammerhead", "Whale Shark", "Tiger Shark"], answer: 2 },

{ question: "Which element has the chemical symbol Au?", choices: ["Silver", "Gold", "Aluminum", "Argon"], answer: 1 },
{ question: "Which Disney movie features the song 'Let It Go'?", choices: ["Moana", "Frozen", "Tangled", "Encanto"], answer: 1 },
{ question: "How many time zones are there in the continental United States?", choices: ["3", "4", "5", "6"], answer: 1 },
{ question: "Which bird cannot fly?", choices: ["Eagle", "Parrot", "Penguin", "Robin"], answer: 2 },
{ question: "What is the longest-running animated TV show?", choices: ["Family Guy", "South Park", "The Simpsons", "Futurama"], answer: 2 },

{ question: "Which state has the Grand Canyon?", choices: ["Utah", "Nevada", "Arizona", "Colorado"], answer: 2 },
{ question: "What is the largest island in the world?", choices: ["Australia", "Greenland", "Madagascar", "Iceland"], answer: 1 },
{ question: "Who wrote 'Romeo and Juliet'?", choices: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Edgar Allan Poe"], answer: 2 },
{ question: "Which country is famous for maple syrup?", choices: ["Canada", "Sweden", "Norway", "Germany"], answer: 0 },
{ question: "How many players are on a soccer field for one team?", choices: ["9", "10", "11", "12"], answer: 2 },

{ question: "What is the fastest bird in the world?", choices: ["Eagle", "Falcon", "Hawk", "Owl"], answer: 1 },
{ question: "Which blood type is known as the universal donor?", choices: ["A", "B", "AB", "O Negative"], answer: 3 },
{ question: "How many strings does a standard guitar have?", choices: ["4", "5", "6", "7"], answer: 2 },
{ question: "Which U.S. state has the most people?", choices: ["Texas", "Florida", "California", "New York"], answer: 2 },
{ question: "Which ocean is between North America and Europe?", choices: ["Pacific", "Atlantic", "Indian", "Southern"], answer: 1 },

{ question: "What is the largest cat species?", choices: ["Lion", "Tiger", "Jaguar", "Leopard"], answer: 1 },
{ question: "Which sport uses the term 'home run'?", choices: ["Football", "Baseball", "Soccer", "Basketball"], answer: 1 },
{ question: "What color are the stars on the U.S. flag?", choices: ["Blue", "Red", "White", "Gold"], answer: 2 },
{ question: "Which famous scientist developed the theory of relativity?", choices: ["Newton", "Tesla", "Einstein", "Galileo"], answer: 2 },
{ question: "How many planets are in our solar system?", choices: ["7", "8", "9", "10"], answer: 1 },

{ question: "What is the largest freshwater lake in the world by surface area?", choices: ["Lake Superior", "Lake Victoria", "Lake Michigan", "Lake Baikal"], answer: 0 },
{ question: "Which company makes PlayStation?", choices: ["Nintendo", "Sony", "Microsoft", "Sega"], answer: 1 },
{ question: "Which country has the Great Pyramid of Giza?", choices: ["Greece", "Egypt", "Turkey", "Israel"], answer: 1 },
{ question: "What is the tallest animal?", choices: ["Elephant", "Giraffe", "Camel", "Moose"], answer: 1 },
{ question: "What is the national sport of Japan?", choices: ["Karate", "Baseball", "Judo", "Sumo Wrestling"], answer: 3 },

{ question: "How many chambers are in the human heart?", choices: ["2", "3", "4", "5"], answer: 2 },
{ question: "Which city is known as the Big Apple?", choices: ["Chicago", "Boston", "New York City", "Los Angeles"], answer: 2 },
{ question: "What is the hardest natural substance on Earth?", choices: ["Gold", "Diamond", "Quartz", "Iron"], answer: 1 },
{ question: "Which state is famous for potatoes?", choices: ["Ohio", "Nebraska", "Idaho", "Kansas"], answer: 2 },
{ question: "How many sides does an octagon have?", choices: ["6", "7", "8", "9"], answer: 2 },

{ question: "Which famous ship sank in 1912?", choices: ["Mayflower", "Titanic", "Lusitania", "Bismarck"], answer: 1 },
{ question: "Which U.S. president was nicknamed Honest Abe?", choices: ["Lincoln", "Washington", "Jefferson", "Grant"], answer: 0 },
{ question: "What is the capital of Italy?", choices: ["Venice", "Milan", "Rome", "Naples"], answer: 2 },
{ question: "Which mammal lays eggs?", choices: ["Bat", "Platypus", "Whale", "Otter"], answer: 1 },
{ question: "Which gas makes up most of Earth's atmosphere?", choices: ["Oxygen", "Nitrogen", "Hydrogen", "Carbon Dioxide"], answer: 1 },

{ question: "What is the largest U.S. state by area?", choices: ["Texas", "California", "Alaska", "Montana"], answer: 2 },
{ question: "Which fruit is known for keeping the doctor away?", choices: ["Banana", "Orange", "Apple", "Pear"], answer: 2 },
{ question: "Which country is home to the kangaroo?", choices: ["South Africa", "Australia", "New Zealand", "India"], answer: 1 },
{ question: "How many cards are in a standard deck?", choices: ["48", "50", "52", "54"], answer: 2 },
{ question: "Which famous clock tower is in London?", choices: ["Big Ben", "Liberty Bell", "The Shard", "Westminster"], answer: 0 },

{ question: "What is the smallest planet in our solar system?", choices: ["Mercury", "Mars", "Venus", "Pluto"], answer: 0 },
{ question: "Which superhero is known as the Dark Knight?", choices: ["Superman", "Batman", "Iron Man", "Thor"], answer: 1 },
{ question: "How many Olympic rings are there?", choices: ["4", "5", "6", "7"], answer: 1 },
{ question: "Which state borders Ohio to the east?", choices: ["Indiana", "Kentucky", "Pennsylvania", "Michigan"], answer: 2 },
{ question: "What is the largest planet in the solar system?", choices: ["Saturn", "Jupiter", "Neptune", "Earth"], answer: 1 },
  { question: "What is a pirate's flag commonly called?", choices: ["Sea Banner", "Jolly Roger", "Black Crest", "Pirate Mark"], answer: 1 },
{ question: "What treasure map symbol usually marks the treasure?", choices: ["Circle", "Star", "X", "Arrow"], answer: 2 },
{ question: "What ocean lies between North America and Europe?", choices: ["Indian", "Pacific", "Atlantic", "Arctic"], answer: 2 },
{ question: "What is the largest ocean on Earth?", choices: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: 2 },
{ question: "What is a group of fish called?", choices: ["Pack", "School", "Herd", "Flock"], answer: 1 },

{ question: "Which Disney ride inspired Pirates of the Caribbean?", choices: ["Haunted Mansion", "Pirates of the Caribbean", "Jungle Cruise", "Big Thunder Mountain"], answer: 1 },
{ question: "What does a ship captain use to steer a ship?", choices: ["Anchor", "Wheel", "Compass", "Rudder"], answer: 1 },
{ question: "Which sea creature has eight arms?", choices: ["Squid", "Octopus", "Crab", "Lobster"], answer: 1 },
{ question: "What is buried treasure usually stored in?", choices: ["Barrel", "Chest", "Crate", "Bucket"], answer: 1 },
{ question: "What is the name of Captain Jack Sparrow's ship?", choices: ["Flying Dutchman", "Interceptor", "Black Pearl", "Sea Ghost"], answer: 2 },

{ question: "Which direction does a compass needle point?", choices: ["South", "East", "West", "North"], answer: 3 },
{ question: "What is a baby shark called?", choices: ["Pup", "Cub", "Calf", "Kit"], answer: 0 },
{ question: "What do pirates often search for?", choices: ["Diamonds", "Treasure", "Maps", "Gold"], answer: 1 },
{ question: "Which sea animal is known for squirting ink?", choices: ["Whale", "Octopus", "Seal", "Dolphin"], answer: 1 },
{ question: "What is the deepest ocean?", choices: ["Indian", "Atlantic", "Pacific", "Arctic"], answer: 2 },

{ question: "What is another name for a treasure hunter?", choices: ["Explorer", "Seeker", "Prospector", "Adventurer"], answer: 3 },
{ question: "What do sailors call the left side of a ship?", choices: ["Port", "Starboard", "Bow", "Stern"], answer: 0 },
{ question: "What do sailors call the right side of a ship?", choices: ["Port", "Bow", "Starboard", "Deck"], answer: 2 },
{ question: "What is the front of a ship called?", choices: ["Bow", "Port", "Hull", "Deck"], answer: 0 },
{ question: "What is the back of a ship called?", choices: ["Bow", "Stern", "Hull", "Deck"], answer: 1 },

{ question: "Which ocean animal is the largest in the world?", choices: ["Whale Shark", "Blue Whale", "Giant Squid", "Orca"], answer: 1 },
{ question: "What is a pirate's telescope often called?", choices: ["Spyglass", "Sea Scope", "Looker", "Far Viewer"], answer: 0 },
{ question: "What is the study of maps called?", choices: ["Geology", "Cartography", "Archaeology", "Topography"], answer: 1 },
{ question: "What color is most pirate treasure shown as?", choices: ["Silver", "Gold", "Bronze", "Black"], answer: 1 },
{ question: "What is an island completely surrounded by water?", choices: ["Lake", "Bay", "Island", "Reef"], answer: 2 },

{ question: "What sea creature is known for its giant claws?", choices: ["Seal", "Crab", "Lobster", "Shrimp"], answer: 2 },
{ question: "What is a ship's anchor used for?", choices: ["Steering", "Stopping", "Speed", "Fishing"], answer: 1 },
{ question: "What is the largest coral reef system?", choices: ["Red Reef", "Great Barrier Reef", "Blue Reef", "Coral Coast"], answer: 1 },
{ question: "What is buried treasure often measured in?", choices: ["Coins", "Dollars", "Bills", "Checks"], answer: 0 },
{ question: "Which sea animal is famous for carrying a shell on its back?", choices: ["Turtle", "Shark", "Dolphin", "Seal"], answer: 0 },

{ question: "What is the name of the famous ghost ship in pirate stories?", choices: ["Black Pearl", "Flying Dutchman", "Sea Wraith", "Storm Chaser"], answer: 1 },
{ question: "Which ocean touches California?", choices: ["Atlantic", "Pacific", "Indian", "Arctic"], answer: 1 },
{ question: "What is a treasure map usually used to find?", choices: ["Food", "Treasure", "People", "Ships"], answer: 1 },
{ question: "Which pirate weapon is curved?", choices: ["Spear", "Cutlass", "Axe", "Club"], answer: 1 },
{ question: "What is a pirate's lookout often called?", choices: ["Watcher", "Scout", "Crow's Nest Lookout", "Observer"], answer: 2 },

{ question: "Which sea creature has a spiral shell?", choices: ["Crab", "Snail", "Lobster", "Clam"], answer: 1 },
{ question: "What is a ship's deck?", choices: ["Roof", "Floor", "Engine", "Sail"], answer: 1 },
{ question: "What helps ships avoid rocks near shore?", choices: ["Buoys", "Lighthouses", "Anchors", "Docks"], answer: 1 },
{ question: "What is the world's longest coral reef system?", choices: ["Great Barrier Reef", "Florida Reef", "Red Sea Reef", "Belize Reef"], answer: 0 },
{ question: "What is the name of a pirate's hidden treasure location?", choices: ["Fort", "Vault", "Treasure Cache", "Harbor"], answer: 2 },

{ question: "Which sea animal is known for echolocation?", choices: ["Seal", "Shark", "Dolphin", "Crab"], answer: 2 },
{ question: "What do sailors use to determine direction?", choices: ["Compass", "Anchor", "Spyglass", "Sail"], answer: 0 },
{ question: "Which famous pirate is mostly fictional?", choices: ["Blackbeard", "Captain Kidd", "Jack Sparrow", "Anne Bonny"], answer: 2 },
{ question: "What is the largest species of turtle?", choices: ["Loggerhead", "Sea Turtle", "Leatherback", "Box Turtle"], answer: 2 },
{ question: "What is the name for a narrow waterway connecting two larger bodies of water?", choices: ["Canal", "Strait", "Bay", "Harbor"], answer: 1 },

{ question: "What does 'X marks the spot' usually mean?", choices: ["Danger", "Camp", "Treasure", "Food"], answer: 2 },
{ question: "Which ocean is the warmest?", choices: ["Atlantic", "Pacific", "Indian", "Arctic"], answer: 2 },
{ question: "What is a pirate crew led by?", choices: ["Navigator", "Captain", "Quartermaster", "Cook"], answer: 1 },
{ question: "What famous pirate had a black beard?", choices: ["Captain Kidd", "Blackbeard", "Long John Silver", "Calico Jack"], answer: 1 },
{ question: "What is a voyage?", choices: ["A treasure", "A storm", "A journey by sea", "A pirate flag"], answer: 2 },
  { question: "How many noses does a slug have?", choices: ["1", "2", "4", "6"], answer: 2 },
{ question: "Which animal can sleep standing up?", choices: ["Horse", "Cat", "Rabbit", "Monkey"], answer: 0 },
{ question: "What color is a polar bear's skin?", choices: ["White", "Pink", "Black", "Gray"], answer: 2 },
{ question: "Which animal's fingerprints are most like a human's?", choices: ["Chimpanzee", "Koala", "Gorilla", "Orangutan"], answer: 1 },
{ question: "How many hearts does an earthworm have?", choices: ["1", "2", "5", "10"], answer: 2 },

{ question: "What is the only letter not found in any U.S. state name?", choices: ["Q", "X", "Z", "J"], answer: 0 },
{ question: "Can flamingos be born gray?", choices: ["Yes", "No", "Only males", "Only females"], answer: 0 },
{ question: "Which animal cannot jump?", choices: ["Elephant", "Rhino", "Hippo", "Giraffe"], answer: 0 },
{ question: "How long can a snail sleep?", choices: ["1 week", "1 month", "6 months", "3 years"], answer: 3 },
{ question: "What is a group of crows called?", choices: ["Pack", "Murder", "Flock", "Herd"], answer: 1 },

{ question: "What fruit floats in water?", choices: ["Apple", "Banana", "Orange", "Peach"], answer: 0 },
{ question: "How many stomachs does a cow have?", choices: ["1", "2", "4", "6"], answer: 2 },
{ question: "Which animal's tongue is longer than its body?", choices: ["Frog", "Anteater", "Chameleon", "Lizard"], answer: 2 },
{ question: "What color is octopus blood?", choices: ["Red", "Green", "Blue", "Purple"], answer: 2 },
{ question: "Can sharks blink?", choices: ["Yes", "No"], answer: 1 },

{ question: "Which bird can fly backward?", choices: ["Sparrow", "Robin", "Hummingbird", "Crow"], answer: 2 },
{ question: "How many eyes does a bee have?", choices: ["2", "3", "5", "8"], answer: 2 },
{ question: "Which animal can taste with its feet?", choices: ["Butterfly", "Spider", "Ant", "Beetle"], answer: 0 },
{ question: "What animal spends most of its life upside down?", choices: ["Bat", "Sloth", "Possum", "Koala"], answer: 1 },
{ question: "Which sea creature has three hearts?", choices: ["Shark", "Whale", "Octopus", "Seal"], answer: 2 },

{ question: "Which country has the most islands?", choices: ["Indonesia", "Canada", "Sweden", "Philippines"], answer: 2 },
{ question: "Can a shrimp's heart be in its head?", choices: ["Yes", "No"], answer: 0 },
{ question: "Which animal can survive without its head for weeks?", choices: ["Snake", "Cockroach", "Lizard", "Spider"], answer: 1 },
{ question: "How many bones do sharks have?", choices: ["0", "12", "100", "206"], answer: 0 },
{ question: "What animal has square poop?", choices: ["Koala", "Wombat", "Beaver", "Otter"], answer: 1 },

{ question: "Which planet rains diamonds?", choices: ["Mars", "Saturn", "Neptune", "Mercury"], answer: 2 },
{ question: "What is the only food that never spoils?", choices: ["Honey", "Sugar", "Salt", "Peanut Butter"], answer: 0 },
{ question: "Can turtles breathe through their rear ends?", choices: ["Yes", "No"], answer: 0 },
{ question: "What is the strongest muscle by size in the body?", choices: ["Heart", "Tongue", "Jaw", "Leg"], answer: 2 },
{ question: "Which animal laughs like a human?", choices: ["Chimpanzee", "Rat", "Dog", "Dolphin"], answer: 1 },

{ question: "How many teeth does an adult giraffe have?", choices: ["32", "34", "36", "40"], answer: 1 },
{ question: "Which animal has the largest eyes?", choices: ["Whale", "Owl", "Giant Squid", "Shark"], answer: 2 },
{ question: "What color are hippos' sweat?", choices: ["Clear", "White", "Pink", "Blue"], answer: 2 },
{ question: "Can frogs drink water through their skin?", choices: ["Yes", "No"], answer: 0 },
{ question: "Which mammal is the only one that can truly fly?", choices: ["Flying Squirrel", "Bat", "Sugar Glider", "Flying Lemur"], answer: 1 },

{ question: "What animal can rotate its head the farthest?", choices: ["Owl", "Eagle", "Falcon", "Parrot"], answer: 0 },
{ question: "How many chambers does a crocodile heart have?", choices: ["2", "3", "4", "5"], answer: 2 },
{ question: "Which animal's eye is bigger than its brain?", choices: ["Horse", "Ostrich", "Whale", "Elephant"], answer: 1 },
{ question: "Can dolphins recognize themselves in a mirror?", choices: ["Yes", "No"], answer: 0 },
{ question: "What animal can hold its breath the longest?", choices: ["Whale", "Sea Turtle", "Seal", "Dolphin"], answer: 0 },

{ question: "Which country invented ice cream?", choices: ["Italy", "China", "France", "United States"], answer: 1 },
{ question: "What is the most stolen food in the world?", choices: ["Chocolate", "Cheese", "Bread", "Coffee"], answer: 1 },
{ question: "Which animal can survive being frozen and thawed?", choices: ["Frog", "Tardigrade", "Bear", "Penguin"], answer: 1 },
{ question: "Can cows have best friends?", choices: ["Yes", "No"], answer: 0 },
{ question: "Which fruit has seeds on the outside?", choices: ["Apple", "Strawberry", "Orange", "Pear"], answer: 1 },

{ question: "How many times can a woodpecker peck per second?", choices: ["5", "10", "20", "40"], answer: 2 },
{ question: "What is the world's loudest animal?", choices: ["Lion", "Blue Whale", "Elephant", "Howler Monkey"], answer: 1 },
{ question: "Which animal can regenerate its heart?", choices: ["Starfish", "Axolotl", "Salamander", "Zebrafish"], answer: 3 },
{ question: "Can bananas be berries?", choices: ["Yes", "No"], answer: 0 },
{ question: "Which animal never forgets?", choices: ["Elephant", "Crow", "Dolphin", "Octopus"], answer: 0 },
  { question: "What is the capital of Ohio?", choices: ["Cleveland", "Cincinnati", "Columbus", "Toledo"], answer: 2 },
{ question: "What is Ohio's nickname?", choices: ["Buckeye State", "Corn State", "Lake State", "River State"], answer: 0 },
{ question: "Which city is home to the Rock & Roll Hall of Fame?", choices: ["Cincinnati", "Columbus", "Cleveland", "Dayton"], answer: 2 },
{ question: "What tree produces buckeyes?", choices: ["Oak", "Buckeye Tree", "Maple", "Walnut"], answer: 1 },
{ question: "What famous aviation city is in Ohio?", choices: ["Akron", "Dayton", "Athens", "Mansfield"], answer: 1 },

{ question: "Which two brothers were born in Ohio and pioneered flight?", choices: ["Wright Brothers", "Warner Brothers", "Johnson Brothers", "Smith Brothers"], answer: 0 },
{ question: "What river forms much of Ohio's southern border?", choices: ["Mississippi", "Ohio River", "Scioto", "Miami"], answer: 1 },
{ question: "Which amusement park in Ohio is known for roller coasters?", choices: ["Kings Island", "Cedar Point", "Both", "Neither"], answer: 2 },
{ question: "What is Ohio's state bird?", choices: ["Cardinal", "Blue Jay", "Robin", "Eagle"], answer: 0 },
{ question: "What Great Lake borders Ohio?", choices: ["Lake Michigan", "Lake Superior", "Lake Erie", "Lake Ontario"], answer: 2 },

{ question: "What city hosts the Cincinnati Reds?", choices: ["Columbus", "Dayton", "Cincinnati", "Toledo"], answer: 2 },
{ question: "What city hosts the Cleveland Browns?", choices: ["Akron", "Cleveland", "Dayton", "Youngstown"], answer: 1 },
{ question: "What candy is famous in Ohio and made in Cleveland?", choices: ["M&M's", "Reese's", "Malley's", "Hershey's"], answer: 2 },
{ question: "What color is Ohio's state flower, the scarlet carnation?", choices: ["Yellow", "Blue", "Red", "White"], answer: 2 },
{ question: "Which university plays football in Ohio Stadium called 'The Horseshoe'?", choices: ["Ohio University", "Miami University", "Ohio State University", "Kent State"], answer: 2 },

{ question: "What animal is Ohio's state mammal?", choices: ["White-tailed Deer", "Black Bear", "Raccoon", "Fox"], answer: 0 },
{ question: "Which city is known as the Rubber Capital of the World?", choices: ["Akron", "Dayton", "Cleveland", "Lima"], answer: 0 },
{ question: "What is Ohio's state insect?", choices: ["Ladybug", "Honeybee", "Monarch Butterfly", "Dragonfly"], answer: 0 },
{ question: "What is Ohio's state beverage?", choices: ["Apple Juice", "Milk", "Root Beer", "Lemonade"], answer: 1 },
{ question: "Which famous astronaut was born in Ohio?", choices: ["Neil Armstrong", "Buzz Aldrin", "John Glenn", "Both Armstrong and Glenn"], answer: 3 },

{ question: "Which city is known as the Queen City?", choices: ["Columbus", "Cincinnati", "Cleveland", "Dayton"], answer: 1 },
{ question: "How many U.S. Presidents were born in Ohio?", choices: ["5", "7", "8", "10"], answer: 1 },
{ question: "Which Ohio city is closest to Wilmington?", choices: ["Cincinnati", "Dayton", "Columbus", "Cleveland"], answer: 0 },
{ question: "What county is Wilmington located in?", choices: ["Clermont", "Clinton", "Brown", "Warren"], answer: 1 },
{ question: "What famous race track is near Wilmington?", choices: ["Daytona", "Eldora", "Kil-Kare", "Cincinnati Speedway"], answer: 2 },

{ question: "What is Ohio's state reptile?", choices: ["Black Racer", "Box Turtle", "Water Snake", "Copperhead"], answer: 1 },
{ question: "What is Ohio's state wildflower?", choices: ["Trillium", "Rose", "Daisy", "Sunflower"], answer: 0 },
{ question: "What city is home to Cedar Point?", choices: ["Toledo", "Sandusky", "Lorain", "Akron"], answer: 1 },
{ question: "What military museum is located in Dayton?", choices: ["National Museum of the U.S. Air Force", "Smithsonian", "War Memorial Museum", "Aviation Hall"], answer: 0 },
{ question: "Which city is Ohio's largest by population?", choices: ["Cincinnati", "Cleveland", "Columbus", "Toledo"], answer: 2 },

{ question: "What famous chili style is associated with Cincinnati?", choices: ["Texas Chili", "White Chili", "Skyline-style Chili", "Green Chili"], answer: 2 },
{ question: "What company is headquartered in Cincinnati?", choices: ["Ford", "Procter & Gamble", "Apple", "Tesla"], answer: 1 },
{ question: "Which Ohio city hosts the Pro Football Hall of Fame?", choices: ["Canton", "Akron", "Cleveland", "Youngstown"], answer: 0 },
{ question: "What is Ohio's state rock song?", choices: ["Hang On Sloopy", "Sweet Home Alabama", "Born in the USA", "Ohio"], answer: 0 },
{ question: "Which Ohio city hosts the annual Pumpkin Show?", choices: ["Circleville", "Dayton", "Athens", "Findlay"], answer: 0 },

{ question: "Which famous fast-food chain was founded in Ohio?", choices: ["Wendy's", "Burger King", "Subway", "Five Guys"], answer: 0 },
{ question: "What color are Ohio State's team colors?", choices: ["Red and Black", "Scarlet and Gray", "Blue and Gold", "Red and White"], answer: 1 },
{ question: "Which Ohio city is known for aviation history?", choices: ["Toledo", "Akron", "Dayton", "Athens"], answer: 2 },
{ question: "Which county fair is one of the largest in Ohio?", choices: ["Clinton County", "Darke County", "Brown County", "Ross County"], answer: 1 },
{ question: "What major interstate runs near Wilmington?", choices: ["I-70", "I-71", "I-75", "I-90"], answer: 1 },

{ question: "Which professional baseball team plays in Ohio?", choices: ["Reds", "Guardians", "Both", "Neither"], answer: 2 },
{ question: "Which famous astronaut first walked on the moon and was from Ohio?", choices: ["John Glenn", "Neil Armstrong", "Buzz Aldrin", "Jim Lovell"], answer: 1 },
{ question: "Which city hosts Kings Island?", choices: ["Mason", "Wilmington", "Dayton", "Hamilton"], answer: 0 },
{ question: "Ohio borders how many states?", choices: ["4", "5", "6", "7"], answer: 1 },
{ question: "What is Ohio's state fruit?", choices: ["Apple", "Tomato", "Pawpaw", "Peach"], answer: 1 },

{ question: "Which Ohio city is nicknamed 'The Gem City'?", choices: ["Akron", "Dayton", "Cleveland", "Lima"], answer: 1 },
{ question: "What university is located in Athens, Ohio?", choices: ["Ohio State", "Ohio University", "Miami University", "Kent State"], answer: 1 },
{ question: "What famous inventor from Ohio created the cash register?", choices: ["John Patterson", "Thomas Edison", "Alexander Graham Bell", "Henry Ford"], answer: 0 },
{ question: "What color is a buckeye nut?", choices: ["Green", "Black", "Brown", "Red"], answer: 2 },
{ question: "What city hosts Adventure Cove Mini Golf?", choices: ["Mason", "Wilmington", "Dayton", "Lebanon"], answer: 1 }
  ]
  };

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
let usedTriviaQuestions = {
  easy: [],
  hard: []
};
let currentTriviaQuestion = null;
let currentTriviaDifficulty = "easy";
let challengeDifficulty = "simple";
let fortunePredictions = {};
let gameDifficulty = "easy";
let previousScreenBeforeRules = "setupScreen";
let spinWheelHasAppeared = false;

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

function startChallengeEasy() {
  currentMode = "Challenge";
  gameDifficulty = "easy";
  startGame();
}

function startChallengeMixed() {
  currentMode = "Challenge";
  gameDifficulty = "mixed";
  startGame();
}

function startChallengeHard() {
  currentMode = "Challenge";
  gameDifficulty = "hard";
  startGame();
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

  spinWheelHasAppeared = false;

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

  usedTriviaQuestions = {
  easy: [],
  hard: []
};

  currentHoleIndex = 0;
  currentPlayerIndex = 0;
 // Keep whatever mode was selected
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

  let triviaChance = 0;
  let triviaDifficulty = "easy";

  if (gameDifficulty === "easy") {
    triviaChance = 0.25;
    triviaDifficulty = "easy";
  }

  if (gameDifficulty === "mixed") {
    triviaChance = 0.50;
    triviaDifficulty = Math.random() < 0.5 ? "easy" : "hard";
  }

  if (gameDifficulty === "hard") {
    triviaChance = 0.50;
    triviaDifficulty = "hard";
  }

  const holesLeft = holes.length - currentHoleIndex;

if (!spinWheelHasAppeared && holesLeft <= 3) {
  currentChallenge = { text: challengeTypes.SPIN_WHEEL, type: "SPIN_WHEEL" };
  spinWheelHasAppeared = true;

  document.getElementById("challengeText").textContent = currentChallenge.text;
  return;
}
  
  const shouldUseTrivia = Math.random() < triviaChance;

  if (shouldUseTrivia) {
    currentChallenge = {
      text: challengeTypes.TRIVIA,
      type: "TRIVIA",
      difficulty: triviaDifficulty
    };
  } else {
    const nonTriviaChallenges =
      challenges.filter(c => c.type !== "TRIVIA");

    currentChallenge =
      nonTriviaChallenges[
        Math.floor(Math.random() * nonTriviaChallenges.length)
      ];
  }

  document.getElementById("challengeText").textContent =
    currentChallenge.text;
}

function getChallengePreviewMessage(type) {
  if (type === "HIGHEST_PAR_DECIDES") return highestScoreMessage();
  if (type === "SPIN_WHEEL") return "Each player spins, then takes their turn right away.";
  if (type === "TRIVIA") return "Each player answers a trivia question before taking their turn. Correct answer = move forward 1 normal step.";
  if (type === "CLOSEST_TO_HOLE") return "After everyone scores, choose the closest player and mark if anyone sank the ball.";
  if (type === "UNDER_PAR_REMOVE_WORST") return "After the hole, the app removes the worst previous score for anyone who beats par.";
  if (type === "HOLE_IN_ONE_ATTACK") return "After the hole, anyone with a hole-in-one can add +2 to another player.";
  if (["SAFE_SHOT", "OBSTACLE_TROUBLE", "COMEBACK_COVE", "TREASURE_STEAL", "WATERFALL_WHISPER", "LUCKY_BOUNCE","STEADY_CAPTAIN"].includes(type)) {
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
    spinWheelHasAppeared = true;
    startWheelChallenge();
  } else if (currentChallenge.type === "TRIVIA") {
    startTriviaChallenge();
  } else if (currentChallenge.type === "FORTUNE_TELLER") {
    startFortuneTeller();
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

  currentTriviaDifficulty =
    currentChallenge.difficulty || "easy";

  showTriviaQuestion();
}

function showTriviaQuestion() {
  currentPlayerIndex = triviaPlayerIndex;

  document.getElementById("specialTitle").textContent = `Do You Dare, ${players[triviaPlayerIndex]}?`;

  document.getElementById("specialContent").innerHTML = `
    <div class="message-box">
      Choose your trivia level before your turn.
    </div>

    <div class="center">
      <button onclick="chooseTriviaDifficulty('easy')">Easy: 1 Step</button>
      <button class="gold-btn" onclick="chooseTriviaDifficulty('hard')">Hard: 2 Steps</button>
    </div>

    <p class="muted center">No jumping, running, or lunging.</p>
  `;

  showOnly("specialScreen");
}

function chooseTriviaDifficulty(difficulty) {
  currentTriviaDifficulty = difficulty;
  currentTriviaQuestion = getRandomTriviaQuestion(difficulty);

  document.getElementById("specialTitle").textContent =
    difficulty === "hard" ? "Hard Question!" : "Easy Question!";

  document.getElementById("specialContent").innerHTML = `
    <div class="message-box">
      ${difficulty === "hard"
        ? "Correct answer = move forward 2 normal steps."
        : "Correct answer = move forward 1 normal step."}
    </div>

    <div class="rule-panel">
      <h3>${currentTriviaQuestion.question}</h3>

      ${currentTriviaQuestion.choices.map((choice, index) => `
        <button class="blue-btn" onclick="answerTrivia(${index})">${choice}</button>
      `).join("")}
    </div>
  `;
}

function getRandomTriviaQuestion(difficulty) {
  const bank = triviaQuestions[difficulty];

  if (!bank || !bank.length) {
    alert("No trivia questions found for this difficulty.");
    return triviaQuestions.easy[0];
  }

  if (usedTriviaQuestions[difficulty].length >= bank.length) {
    usedTriviaQuestions[difficulty] = [];
  }

  let index;

  do {
    index = Math.floor(Math.random() * bank.length);
  } while (usedTriviaQuestions[difficulty].includes(index));

  usedTriviaQuestions[difficulty].push(index);
  return bank[index];
}

function answerTrivia(choiceIndex) {
  const correct = choiceIndex === currentTriviaQuestion.answer;
  const steps = currentTriviaDifficulty === "hard" ? 2 : 1;

  document.getElementById("specialTitle").textContent = correct ? "Correct!" : "Not This Time!";

  document.getElementById("specialContent").innerHTML = `
    <div class="message-box">
      ${correct
        ? `${players[triviaPlayerIndex]}, move your ball forward <strong>${steps} normal step${steps === 1 ? "" : "s"}</strong>.`
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
    if (currentChallenge.type === "FORTUNE_TELLER") return applyFortuneTeller();

    if (currentChallenge.type === "OBSTACLE_TROUBLE") {
      return applyMutiny();
    }

    if ([
      "SAFE_SHOT",
      "COMEBACK_COVE",
      "TREASURE_STEAL",
      "WATERFALL_WHISPER",
      "LUCKY_BOUNCE",
      "STEADY_CAPTAIN"
    ].includes(currentChallenge.type)) {
      return showEditableAdjustmentScreen();
    }
  }

  advanceHole();
}

function startFortuneTeller() {
  fortunePredictions = {};
  askFortunePrediction(0);
}

function askFortunePrediction(playerIndex) {
  document.getElementById("specialTitle").textContent = "🔮 Fortune Teller";

  document.getElementById("specialContent").innerHTML = `
    <div class="message-box">
      ${players[playerIndex]}, predict your score for this hole.
    </div>

    <div class="center">
      <input id="predictionInput" type="number" min="1" max="12" value="${holes[currentHoleIndex].par}">
      <br><br>
      <button onclick="savePrediction(${playerIndex})">Save Prediction</button>
    </div>
  `;

  showOnly("specialScreen");
}

function savePrediction(playerIndex) {
  const prediction = Number(document.getElementById("predictionInput").value);

  fortunePredictions[playerIndex] = prediction;

  if (playerIndex + 1 < players.length) {
    askFortunePrediction(playerIndex + 1);
  } else {
    startHolePlay();
  }
}

function applyFortuneTeller() {
  const winners = [];

  scores.forEach((player, index) => {
    const score = getHoleTotal(player, currentHoleIndex);

    if (fortunePredictions[index] === score) {
      player.adjustments[currentHoleIndex] -= 1;
      player.notes[currentHoleIndex] += " Fortune Teller: -1.";
      player.stats.bonuses++;
      winners.push(player.name);
    }
  });

  document.getElementById("specialTitle").textContent = "🔮 Fortune Teller Results";

  document.getElementById("specialContent").innerHTML = `
    <div class="message-box">
      ${
        winners.length
          ? `${winners.join(", ")} predicted perfectly and earned -1 stroke!`
          : "Nobody saw the future this time."
      }
    </div>

    <div class="center">
      <button onclick="advanceHole()">Continue</button>
    </div>
  `;

  showOnly("specialScreen");
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

function applyMutiny() {
  const totals = scores.map((player, index) => ({
    index,
    name: player.name,
    total: totalFor(player)
  }));

  const lowestScore = Math.min(...totals.map(p => p.total));
  const leaders = totals.filter(p => p.total === lowestScore);
  const chosen = leaders[Math.floor(Math.random() * leaders.length)];

  scores[chosen.index].adjustments[currentHoleIndex] += 1;
  scores[chosen.index].notes[currentHoleIndex] += " Mutiny: +1.";
  scores[chosen.index].stats.penalties++;

  gameEvents.push({
    type: "penalty",
    player: chosen.name,
    amount: 1,
    note: "Mutiny: +1.",
    hole: holes[currentHoleIndex].hole
  });

  document.getElementById("specialTitle").textContent = "Mutiny!";

  document.getElementById("specialContent").innerHTML = `
    <div class="message-box">
      The crew has rebelled against <strong>${chosen.name}</strong>!<br>
      The app added <strong>+1 stroke</strong>.
    </div>
    <div class="center">
      <button onclick="advanceHole()">Continue</button>
    </div>
  `;

  showOnly("specialScreen");
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

function showRules() {
  const visibleScreen = [
    "setupScreen",
    "choiceScreen",
    "pathScreen",
    "playScreen",
    "specialScreen",
    "wheelScreen",
    "finalScreen",
    "historyScreen"
  ].find(id => !document.getElementById(id).classList.contains("hidden"));

  previousScreenBeforeRules = visibleScreen || "setupScreen";

  document.getElementById("specialTitle").textContent = "Adventure Cove Rules";

  document.getElementById("specialContent").innerHTML = `
    <div class="rule-panel">
      <h3>Normal Game Rules</h3>
      <ul>
        <li>Play mini golf like usual.</li>
        <li>Enter each player's strokes after their turn.</li>
        <li>Lowest score wins.</li>
        <li>The app keeps score for you.</li>
        <li>If you make a mistake, use Edit Scores.</li>
      </ul>

      <h3>Challenge Game Rules</h3>
      <ul>
        <li>Choose Your Path for a random challenge.</li>
        <li>Read the challenge before starting the hole.</li>
        <li>If the app says it will add or subtract strokes, follow the screen after the hole.</li>
        <li>Trivia: answer correctly to move your ball forward.</li>
        <li>Fortune Teller: predict your score before the hole. Correct prediction = -1 stroke.</li>
        <li>Spin Wheel: each player spins, then takes their whole turn right away.</li>
        <li>Lowest total score wins.</li>
      </ul>

      <h3>Safety Rules</h3>
      <ul>
        <li>No running, jumping, lunging, or swinging hard.</li>
        <li>Do not block walkways.</li>
        <li>Be careful around water, rocks, walls, and decorations.</li>
        <li>Keep it fun. Do not be the reason we need a bigger rule sign.</li>
      </ul>

      <div class="center">
        <button onclick="returnFromRules()">Back to Game</button>
      </div>
    </div>
  `;

  showOnly("specialScreen");
}

function returnFromRules() {
  showOnly(previousScreenBeforeRules || "setupScreen");
}

buildSetup();
loadCurrentGame();
