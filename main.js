/*if (window.matchMedia("(max-width: 767px)").matches) {
      document.getElementById('all').style.visibility = 'hidden';
      document.body.style.backgroundColor = "#111111";
      document.getElementById('mobilePage').style.visibility = 'visible';
      //mobile device
    }*/
    const puzzles = [
        {
          answers: ['F', 'E', 'T', 'A'],
          theme: "It's all Greek to me",
          fullanswers: ['<b>F</b>(orce)', '<b>E</b>thiopia', '<b>T</b>aylor Swift', 'Ansel <b>A</b>dams'],
          sciQuestions: ["Sci: Per Newton's second law, this quantity is equal to mass times acceleration.","Sci: This quantity's unit is the Newton.",'Sci: This quantity is described as an "influence tending to change the motion of a body or produce motion or stress in a stationary body."','Sci: Some examples of this include electromagnetism, the strong and weak nuclear interactions, and gravity.'],
          hisQuestions: ['His: Coffee was discovered in this country.','His: This nation uses a 13-month calendar with 12 months of 30 days each, and 5 or 6 epagomenal days which form an extra month.','His: Beyond Italian invasion in the late 1800s, this country has never truly been colonized.','His: The capital of this country is Addis Ababa.'],
          culQuestions:['Cul: In one popular song, this artist claims they are "always waiting for you to be waiting below." (First name)',"Cul: Some of this person's exes include John Mayer, Jake Gyllenhaal, and Calvin Harris. (First name)",'Cul: This singer wrote the songs "ME!" and "Anti-Hero." (First name)',"Cul: This artist's most popular songs are 'Blank Space' and 'Shake it off.' (First name)"],
          artQuestions:['Art: This man accepted a commission from Clark Kerr to produce a series of works depicting campuses of the University of California, which he titled Fiat Lux. (Surname)','Art: This person cofounded f/64 with other photographers. (Surname)','Art: This person took a photo of the Golden Gate before and after the bridge was built. (Surname)','Art: This person took many photos of Half-Dome, and the Western United States. (Surname)'],
          emoji: '🧀'
        },
        {
          answers: ['S', 'P', 'Q', 'R'],
          theme: "Carpe diem",
          fullanswers: ['<b>S</b>', "<b>P</b>ontiac's war", '<b>Q</b>uarterback', '<b>R</b>aphael'],
          sciQuestions: ["Sci: This symbol marks the lowest possible orbital.","Sci: This is the abbreviation for the rather acrid element with the atomic number 16.",'Sci: In physics, this is the notation for both position and entropy.','Sci: An elongated one of these letters is the symbol for integration.'],
          hisQuestions: ["His: This war included Jeffrey Amherst's strategy of infesting blankets with smallpox and consisted largely of a siege of Fort Detroit.",'His: The person for whom this war was named after, was also the eponym of an bygone automobile brand made by General Motors.',"His: This war, broke out shortly after the issuance of a Royal Proclamation forbidding settlements west of the Appalachians.","His: This war, named for an Odawa chief, led the United Kingdom to recognize Indigenous autonomy."],
          culQuestions: ['Cul: The current Cardinals player with this title is Kyler Murray.','Cul: Some people who held this position include Joe Montana and Drew Brees.',"Cul: In a halfback option play the person with this position will run out of the backfield and become a receiving option for the running back.","Sci: This is the position of former football player Tom Brady as well as both Mannings."],
          artQuestions:['Art: This artist depicted a kneeling Saint Jerome and Mary Magdalene in his Mond Crucifixion.','Art: One of this artist’s paintings included the subjects of Aristotle, Archimedes, and Plato.','Art: This artist painted "Madonna of the Goldfinch" as well as "The School of Athens."', "Art: Along with Leonardo Da Vinci, Donatello, and Michelangelo, this artist is a namesake for a Teenage Mutant Ninja Turtle."],
          emoji: '🏛'
        },
        {
          answers: ['T', 'H', 'O', 'R'],
          theme: "Hammer time!",
          fullanswers: ['<b>T</b>(emperature)', '<b>H</b>aiti', "<b>O</b>ne Flew over the Cuckoo’s Nest", '<b>R</b>osencrantz and Guildenstern are Dead'],
          sciQuestions: ["Sci: It is the blank in the equation PV = nR_.","Sci: The lowest amount of this quantity possible is referred to as ‘absolute zero.’",'Sci: One of its units of measurement were named after the mathematician Lord Kelvin."','Sci: This quantity measures how hot or cold something is.'],
          hisQuestions: ['His: In the mid 1900s, this nation was ruled by Papa Doc, and later, Baby Doc.','His: The religion of voodoo, and the dolls associated with it was created here..',"His:  This Hispaniolan nation's first ruler was named Jean-Jaques Dessalines.",'His: This country, positioned next to the Dominican Republic in the Caribbean, has its capital at Port Au Prince.'],
          culQuestions:["Cul: This 1975 film starred Jack Nicholson (but it's not the Shining).","Cul: Cul: Most of this movie takes place in a mental hospital.","Cul: Main characters in this movie include Chief Bromden, Randle McMurphy, and Nurse Ratched.","Cul: This movie, about a man transferred for evaluation from a prison farm to a mental institution was based on a novel by Ken Kesey."],
          artQuestions:['Art: A flipped coin comes up heads a surprising number of times in this play.','Art: This play involves a performance of The Murder of Gonzago.','Art: Characters in this play, beyond the two title characters, include Hamlet, The Tragedians, and the Player.','Art: This Tom Stoppard play focused on the demise of two lesser-known Hamlet characters.'],
          emoji: '⚡'
        },
        {
          answers: ['A', 'C', 'M', 'E'],
          theme: "Cartoon co.",
          fullanswers: ['<b>A</b>ries', "<b>C</b>harlemagne I", "<b>M</b>*A*S*H", 'Duke <b>E</b>llington'],
          sciQuestions: ["Sci: This constellation has a connection to greek mythology, with some saying it is a representation of the golden animal that rescues Phrixus from danger.", "Sci: This constellation's brightest star is named Hamal, which comes from the Arabic word for 'lamb.'",'Sci: This zodiac constellation should appear between March 21 and April 19, though it really is out from around September to February.','Sci: This constellation appears in the shape of a ram.'],
          hisQuestions: ['His: Pope Leo III crowned this man on Christmas Day in the year 800.','His: He has been credited as the model for the King of Hearts on a standard deck of cards.','His: The son of this man was named Pepin le Bossu, and the musical named after him shows this person as a prominent character.','His: This Frankish king, sometimes called “the Great,” is usually credited as the first Holy Roman Emperor. '],
          culQuestions:["Cul: This 14 time emmy winner was mostly filmed in the late 1970s, 20 years after the event it depicts.","Cul: This TV show shares its name with a common middle school game played on paper, in which players try to see their futures","Cul: Some of this show's main characters included John McIntrye and Captain 'Hawkeye' Pierce.","Cul: This sitcom follows a certain American military unit during the Korean war, and shows how the soldiers use humor to cope with the horrors of war."],
          artQuestions:['Art: This man notably collaborated with Billy Strayhorn on "Satin Doll" and a song which instructs the listener "to go to Sugar Hill way up in Harlem.” (Surname)','Art: This musician, whose first name is also a royal title, wrote "It Dont Mean a Thing (If It Aint Got That Swing)". (Surname)','Art: This musician wrote the song "Take the "A" Train." (Surname)','Art: This jazz pianist performed with many other jazz players including Ella Fitzgerald and Louis Armstrong. (Surname)'],
          emoji: '🧨'
        },
        {
          answers: ['', '', '', ''],
          theme: "",
          fullanswers: ['<b></b>', '<b></b>', '<b></b>', '<b></b>'],
          sciQuestions: ["Sci: ","Sci: ",'Sci: "','Sci: '],
          hisQuestions: ['His: ','His:.','His: ','His: '],
          culQuestions:["Cul: ","Cul: ","Cul: ","Cul: "],
          artQuestions:['Art: ','Art: ','Art:  ','Art: '],
          emoji: ''
        },
  
  
      ]
    const today = new Date();
    //change the start date
    const startDate = new Date('2024-02-05T18:30:00-07:00');
    const number = 1 + Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

    var avgScore = 0;
    var streak = 0;
    let pastScore = [];
    let animationHappening = false;
    var copyresults = '';
    var endresults = '';
    var enter_keys_clicked = 0;
    var keys_clicked = 0;
    let won = [0, 0, 0, 0];
    let testing = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
    let logger = ['sci1', 'his1', 'cul1', 'art1', '', 'sci2', 'his2', 'cul2', 'art2', '', 'sci3', 'his3', 'cul3', 'art3', '', 'sci4', 'his4', 'cul4', 'art4', ''];
    let logger_questions = ['sciq','hisq','culq','artq'];
    let question_levels = [0, 0, 0, 0];
    
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let color_log = ['#aaffaa', '#bbffff', '#aaccff', '#ddaaff']
    let gameWon = false;

    function calculateAverage(array) {
      if (array != null) {
        const sum = array.reduce((acc, val) => acc + val, 0);
        return array.length ? sum / array.length : 0;
      }
      else {
        return 0;
      }
    }
    //import { puzzles } from './trivia.js';
    let currentPuzzle = puzzles[(number - 1) % puzzles.length];
    let currentAnswers = currentPuzzle.answers;
    let currentTheme = currentPuzzle.theme;
    let currentFullAnswers = currentPuzzle.fullanswers;
    let sciQuestions = currentPuzzle.sciQuestions;
    let hisQuestions = currentPuzzle.hisQuestions;
    let culQuestions = currentPuzzle.culQuestions;
    let artQuestions = currentPuzzle.artQuestions;
    
    let currentEmoji = currentPuzzle.emoji;
    document.getElementById('themeText').innerHTML = "<center><b><span style='font-size: 30px'>Theme: " + currentTheme + "</span></b></center>";
    document.getElementById('sciq').innerHTML = sciQuestions[0];
    document.getElementById('hisq').innerHTML = hisQuestions[0];
    document.getElementById('culq').innerHTML = culQuestions[0];
    document.getElementById('artq').innerHTML = artQuestions[0];

    function saveState() {
      update = [];
      for (let i = 0; i < logger.length; i++) {
        if (logger[i] != '') {
          update.push(document.getElementById(logger[i]).innerHTML);
          update.push(document.getElementById(logger[i]).style.backgroundColor);
          update.push(document.getElementById(logger[i]).style.color);
        }
      }
      if ((won[0] == 1 && won[1] == 1 && won[2] == 1 && won[3] == 1) || enter_keys_clicked >= 20) {
        var gameWon = true;
      }
      else {
        var gameWon = false;
      }
      update.push(gameWon);
      update.push(keys_clicked);
      update.push(enter_keys_clicked);
      update.push(number);
      update.push(document.getElementById('endpage').innerHTML);
      update.push(question_levels);
      update.push(won);
      localStorage.removeItem('update');
      localStorage.setItem('update', JSON.stringify(update));
    }
    function loadState() {
      k = 0;
      const gameStateString = localStorage.getItem('update');
      const gameState = JSON.parse(gameStateString);
      if (gameState == null) {
        saveState();
        const gameStateString = localStorage.getItem('update');
        const gameState = JSON.parse(gameStateString);
      }
      if (gameState[51] == number) {
        for (let i = 0; i < logger.length; i++) {
          if (logger[i] != '') {
            document.getElementById(logger[i]).innerHTML = gameState[k * 3];
            document.getElementById(logger[i]).style.backgroundColor = gameState[(k * 3) + 1];
            document.getElementById(logger[i]).style.color = gameState[(k * 3) + 2];
            k ++;
          }
        }
        keys_clicked = gameState[49];
        enter_keys_clicked = gameState[50];
        gameWon = gameState[48];
        document.getElementById('sciq').innerHTML = sciQuestions[gameState[53][0]];
        document.getElementById('hisq').innerHTML = hisQuestions[gameState[53][1]];
        document.getElementById('culq').innerHTML = culQuestions[gameState[53][2]];
        document.getElementById('artq').innerHTML = artQuestions[gameState[53][3]];
        question_levels = gameState[53];
        won = gameState[54];
        if (Boolean(gameWon)) {
          document.getElementById('resultsbutton').style.visibility = 'visible';
          document.getElementById('endpage').innerHTML = gameState[52];
          document.getElementById('copier').style.visibility = 'hidden';
          document.getElementById('X_end').style.visibility = 'hidden';
        }
      }
    }
    loadState();
    stringPastScore = localStorage.getItem('score');
    pastScore = JSON.parse(stringPastScore);
    if (pastScore == "" || pastScore == null) {
      pastScore = [];
    }
    var avgScore = calculateAverage(pastScore);
    localStorage.setItem('score', JSON.stringify(pastScore));
    var stringStreakList = localStorage.getItem('streak');
    var streakList = JSON.parse(stringStreakList);
    if (streakList == "" || streakList == null) {
      streakList = [];
    }
    var streak = streakList.length;
    localStorage.setItem('streak', JSON.stringify(streakList));
    function popup() {
      if (document.getElementById('instructionsPage').style.visibility != 'visible' && document.getElementById('statsPage').style.visibility != 'visible' && document.getElementById('informationPage').style.visibility != 'visible') {
        document.getElementById('endpage').style.visibility = 'visible';
        document.getElementById('copier').style.visibility = 'visible';
        document.getElementById('X_end').style.visibility = 'visible';
      }
    }
    function Xout() {
      document.getElementById('endpage').style.visibility = "hidden";
      document.getElementById('resultsbutton').style.visibility = 'visible';
      document.getElementById('copier').style.visibility = "hidden";
      document.getElementById('X_end').style.visibility = "hidden";
    }
    function openInstructions() {
      if (document.getElementById('informationPage').style.visibility != 'visible' && document.getElementById('statsPage').style.visibility != 'visible' && document.getElementById('endpage').style.visibility != 'visible') {
        document.getElementById('instructionsPage').style.visibility = 'visible';
        document.getElementById('X_instructions').style.visibility = 'visible';
      }
    }
    function Xout2() {
      document.getElementById('instructionsPage').style.visibility = 'hidden';
      document.getElementById('X_instructions').style.visibility = 'hidden';
    }
    function openInformation() {
      if (document.getElementById('instructionsPage').style.visibility != 'visible' && document.getElementById('statsPage').style.visibility != 'visible' && document.getElementById('endpage').style.visibility != 'visible') {
        document.getElementById('informationPage').style.visibility = 'visible';
        document.getElementById('X_information').style.visibility = 'visible';
      }
    }
    function Xout3() {
      document.getElementById('informationPage').style.visibility = 'hidden';
      document.getElementById('X_information').style.visibility = 'hidden';
    }
    function openStats() {
      if (document.getElementById('instructionsPage').style.visibility != 'visible' && document.getElementById('informationPage').style.visibility != 'visible' && document.getElementById('endpage').style.visibility != 'visible') {
        var avgScore = Math.round(calculateAverage(pastScore) * 10) / 10;
        var streak = streakList.length;
        document.getElementById('streakNumber').innerHTML = streak;
        document.getElementById('averageScoreNumber').innerHTML = avgScore;
        document.getElementById('statsPage').style.visibility = 'visible';
        document.getElementById('X_stats').style.visibility = 'visible';
      }
    }
    function Xout4() {
      document.getElementById('statsPage').style.visibility = 'hidden';
      document.getElementById('X_stats').style.visibility = 'hidden';
    }

    document.body.addEventListener("keydown", function (eventb) {
      if (document.getElementById('instructionsPage').style.visibility != 'visible' && document.getElementById('informationPage').style.visibility != 'visible' && gameWon == false && animationHappening == false) {
        var letters_right = 0;
        for (let p = 0; p < 4; p++) {
          if (won[p] == 1) {
            letters_right += 1;
          }
        }

        while (won[(keys_clicked % 5)] == 1) {
          keys_clicked += 1;
        }
        for (let i = 65; i < 91; i++) {
          var f = keys_clicked + 1;
          if (eventb.keyCode == i && (f % 5) != 0) {
            document.getElementById(logger[keys_clicked]).innerHTML = String.fromCharCode(eventb.keyCode);
            document.getElementById(logger[keys_clicked]).style.border = '2.5px solid black';
            testing[keys_clicked] = String.fromCharCode(eventb.keyCode);
            keys_clicked += 1
          }
        }
        if (eventb.keyCode == 8 && (keys_clicked % 5) > 0) {
          var backspace = 0
          while (won[(keys_clicked - 1 + backspace) % 5] == 1) {
            backspace -= 1
          }
          document.getElementById(logger[keys_clicked + backspace - 1]).innerHTML = '';
          document.getElementById(logger[keys_clicked + backspace - 1]).style.border = '1.5px solid black';
          keys_clicked += backspace - 1;
        }

        var f = keys_clicked + 1;
        var letters_right = 0;
        for (let p = 0; p < 4; p++) {
          if (won[p] == 1) {
            letters_right += 1;
          }
        }
        if ((f % 5) % (5 - letters_right) == 0) {
          document.body.addEventListener("keydown", function (eventc) {
            if (eventc.keyCode == 13 && keys_clicked == (enter_keys_clicked + 4)) {
              for (let s = 0; s < 4; s++) {
                document.getElementById(logger[enter_keys_clicked + s]).style.border = '1.5px solid black';
                if (document.getElementById(logger[enter_keys_clicked + s]).innerHTML == currentAnswers[s] && won[s] == 0) {
                  for (let i = 0; i < (4 - (enter_keys_clicked / 5)); i++) {
                    document.getElementById(logger[enter_keys_clicked + s + (5 * i)]).style.backgroundColor = '#33A33C';
                    document.getElementById(logger[enter_keys_clicked + s + (5 * i)]).style.color = '#fff';
                    document.getElementById(logger[enter_keys_clicked + s + (5 * i)]).innerHTML = document.getElementById(logger[enter_keys_clicked + s]).innerHTML;
                  }
                  won[s] = 1;
                }
                //check if answer is correct

                if (won[s] != 1) {
                  document.getElementById(logger[enter_keys_clicked + s]).style.backgroundColor = '#636363';
                  document.getElementById(logger[enter_keys_clicked + s]).style.color = '#fff';
                  if (keys_clicked < 18) {
                    document.getElementById(logger[enter_keys_clicked + s + 5]).style.backgroundColor = color_log[s];
                  }
                  question_levels[s]+=1;
                  if(s==0){
                  document.getElementById(logger_questions[s]).innerHTML = sciQuestions[question_levels[s]];
                  }
                  if(s==1){
                  document.getElementById(logger_questions[s]).innerHTML = hisQuestions[question_levels[s]];
                  }
                  if(s==2){
                  document.getElementById(logger_questions[s]).innerHTML = culQuestions[question_levels[s]];
                  }
                  if(s==3){
                  document.getElementById(logger_questions[s]).innerHTML = artQuestions[question_levels[s]];
                  }                  
                  //make questions easier
                }
              }

              enter_keys_clicked += 5;
              keys_clicked += 1;
              saveState();
              if (won[0] == 1 && won[1] == 1 && won[2] == 1 && won[3] == 1) {
                win();
              }
              else if (enter_keys_clicked == 20) {
                win();
              }
              document.body.removeEventListener("keydown", eventc);
            }
          });
        }
      }
    });
    function win() {
      pastScore.push(enter_keys_clicked / 5);
      var avgScore = calculateAverage(pastScore);
      if (streakList[streakList.length - 1] != number - 1 && streakList[streakList.length - 1] != number) {
        streakList = [];
      }
      streakList.push(number);
      var streak = streakList.length;
      localStorage.setItem('streak', JSON.stringify(streakList));
      localStorage.setItem('score', JSON.stringify(pastScore));
      var endresults = "Mnemonicle #" + number
      if (won[0] == 1 && won[1] == 1 && won[2] == 1 && won[3] == 1) {
        var endresults = endresults + '<br><br>You got the Mnemonicle in ' + (enter_keys_clicked / 5) + ' guess(es)!<br><br>';
      }
      else {
        var endresults = endresults + '<br><br>Maybe next time...<br><br>';
      }
      var endresults = endresults + currentEmoji + ' Theme: ' + currentAnswers[0] + currentAnswers[1] + currentAnswers[2] + currentAnswers[3] + ' ' + currentEmoji + '<br>' + currentAnswers[0] + ': ' + currentFullAnswers[0] + '<br>' + currentAnswers[1] + ': ' + currentFullAnswers[1] + '<br>' + currentAnswers[2] + ': ' + currentFullAnswers[2] + '<br>' + currentAnswers[3] + ': ' + currentFullAnswers[3] + '<br>' + '<br>';
      for (let i = 0; i < 4; i++) {
        for (let k = 0; k < 4; k++) {
          if (logger[(5 * k) + i] != '') {
            var endcolor = document.getElementById(logger[(5 * k) + i]);
            console.log(endcolor.style.backgroundColor);
            if (endcolor.style.backgroundColor == 'rgb(99, 99, 99)') {
              var endresults = endresults + '✖';
            }
            if (endcolor.style.backgroundColor == 'rgb(51, 163, 60)') {
              var endresults = endresults + '✅';
            }
          }
        }
        endresults = endresults + '<br>'
      }
      document.getElementById('endpage').style.visibility = 'visible';
      document.getElementById('endpage').innerHTML = document.getElementById('endpage').innerHTML + '<br>' + endresults;
      document.getElementById('X_end').style.visibility = "visible";
      document.getElementById('copier').style.visibility = 'visible';
      document.getElementById('resultsbutton').style.visibility = 'visible';
      saveState();
    }
    function copy() {
      copyresults = '';
      for (let i = 0; i < 4; i++) {
        for (let k = 0; k < 4; k++) {
          if (logger[(5 * k) + i] != '') {
            var endcolor = document.getElementById(logger[(5 * k) + i]);
            if (endcolor.style.backgroundColor == 'rgb(99, 99, 99)') {
              var copyresults = copyresults + '✖';
            }
            if (endcolor.style.backgroundColor == 'rgb(51, 163, 60)') {
              var copyresults = copyresults + '✅';
            }
          }
        }
        copyresults = copyresults + '\r\n'
      } var guesses = (enter_keys_clicked / 5);
      if (won[0] != 1 || won[1] != 1 || won[2] != 1 || won[3] != 1) {
        guesses = 0;
      }
      var copyText = "Mnemonicle #" + number + "\r\n\r\n" + guesses + '/4' + "\r\n\r\n" + copyresults;
      navigator.clipboard.writeText(copyText);
      document.getElementById('copyscreen').style.visibility = 'visible';
      setTimeout(function () {
        document.getElementById('copyscreen').style.visibility = 'hidden';
      }, 1500);
    }