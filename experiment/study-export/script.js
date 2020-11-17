// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.PostMessage",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 651.08,
          "height": 287.83,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Read the sentence and decide if it is sensible \n\nPress W for sensible items.\nPress S for nonsense items.\n\nPress Space Bar to start the study and \nto progress the screens",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "keypress(Space)": "end_instructions"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "instructions"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "item": "1",
          "phase": "prac",
          "sensible": "sensible",
          "type": "tranfer",
          "direction": "towards",
          "correct_answer": "w",
          "text": "You gave the news article to Ben."
        },
        {
          "item": "2",
          "phase": "prac",
          "sensible": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "correct_answer": "w",
          "text": "You read the email with Ian."
        },
        {
          "item": "3",
          "phase": "prac",
          "sensible": "nonsense",
          "type": "transfer",
          "direction": "away",
          "correct_answer": "s",
          "text": "Stephen sent you the alpha."
        },
        {
          "item": "4",
          "phase": "prac",
          "sensible": "nonsense",
          "type": "no_transfer",
          "direction": "NA",
          "correct_answer": "s",
          "text": "Joe drank the danger with you."
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
var listArray = ['1','2','3','4'];
var randomIndex = Math.floor(Math.random()*listArray.length);
window.participantList = listArray[randomIndex]
}
      },
      "title": "practice_loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {},
        "parameters": {},
        "messageHandlers": {},
        "title": "trial",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": "40",
                "height": "40",
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"fixation.svg\"] }"
              }
            ],
            "files": {
              "fixation.svg": "embedded\u002F43a10d563ae03eb43aa1d16599f75682f97bdbb1ece148c5a39cd269957a9098.svg"
            },
            "parameters": {},
            "responses": {
              "keypress(Space)": "end_fixation"
            },
            "messageHandlers": {},
            "viewport": [
              800,
              600
            ],
            "title": "fixation_cross"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 320.17,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "${this.parameters.text}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "keypress(w)": "press_w",
              "keypress(s)": "press_s"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "sentence_screen",
            "correctResponse": "${this.parameters.correct_answer}",
            "timeout": "10000"
          }
        ]
      }
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 1031.69,
          "height": 287.83,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Read the sentence and decide if it is sensible \n\nPress ${window.responseKeys.blockOneSensible} for sensible items.\nPress ${window.responseKeys.blockOneNonsense}  for nonsense items.\n\nPress Space Bar to start the study and \nto progress the screens",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "keypress(Space)": "end_instructions"
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
if(window.participantList in ['1', '3']) {
 window.responseKeys = {
 blockOneSensible: 'w',
 blockOneNonsense: 's',
 blockTwoSensible: 's',
 blockTwoNonsense: 'w'
 };
} else {
 window.responseKeys = {
 blockOneSensible: 's',
 blockOneNonsense: 'w',
 blockTwoSensible: 'w',
 blockTwoNonsense: 's' 
 };
};

}
      },
      "title": "instruction_block_1"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "list": "1",
          "item": "1",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Nisma sold the land to you.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "2",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You dedicated the song to Shelby.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "3",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Brandon sang you a song.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "4",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You pitched Habeeba the idea.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "5",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Jesse paid tribute to you.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "6",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You gave Dallas some writing tips.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "7",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Tanisha confessed a secret to you.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "8",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You lavished Francisco with praise.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "9",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Esainea complained to you.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "10",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You devoted your time to Jennifer.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "11",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Darius blew you a kiss.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "12",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You transmitted the order to Alexander.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "13",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Jessica gave you another chance.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "14",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You told Bryan the story.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "15",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Megan transferred responsibility to you.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "16",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You sent Kaishon your regards.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "17",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Brandon gave you a piece of [his\u002Fher] mindBrandon.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "18",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You bestowed the honor upon Ryan.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "19",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Keano radioed the message to you.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "20",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You conveyed the message to Bianca.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "42",
          "block": "1",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Dina combed the puppy with you.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "44",
          "block": "1",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Dandrew felt honored to be with you.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "46",
          "block": "1",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Tyrin heard the radioed message with you.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "48",
          "block": "1",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Ivan listened to the message with you.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "50",
          "block": "1",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Jessica washed the car with you.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "52",
          "block": "1",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "You bought the soccer ball with Kainos.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "54",
          "block": "1",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Jennifer thought about your idea.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "56",
          "block": "1",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Atsila watched the tribute with you.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "58",
          "block": "1",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "You and Jordan discussed some writing tips.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "60",
          "block": "1",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Neeme looked at the land with you.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "81",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You barked the football to Julia.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "83",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You loafed the coffee cup to Ileana.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "85",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You held the chance to Tareef.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "87",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You flew on the note to Dietrich.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "89",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Dongjoo rolled you adoration.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "91",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You hoarded your love to Alexandra.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "93",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You tasted the papers to Jerusalem.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "95",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You swam Hop the truth.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "97",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Ulambayar festered relief to you.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "99",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Acacia washed you the thought.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "101",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Steffen smiled the key to you.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "103",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You parked the memo to Shayla.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "105",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You sneezed Josiah secrets.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "107",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Ryan tossed you with the paintball.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "109",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Awda blanketed you the chance.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "111",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You flexed Raabiya a moment.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "113",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You sing the pizza to Mia.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "115",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You snored justice for Kayla.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "117",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You cleaned the pizza to Katherine.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "119",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You mowed Valerie your opinion.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "121",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Sharmayne mingled the complaint to you.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "123",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You looted the blanket to Ilyaas.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "125",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You cried the jack to Gregory.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "127",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You built the water with Alazone.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "129",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You smoked the cafeteria tray to Calvin.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "131",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Haashim smelled the money to you.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "133",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You painted the hammer to Mckenzy.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "135",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Dillon ate you the poem.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "137",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You drank the notebook to Thomas.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "139",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Christopher boiled information to you.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "1",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Nisma sold the land to you.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "2",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You dedicated the song to Shelby.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "3",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Brandon sang you a song.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "4",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You pitched Habeeba the idea.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "5",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Jesse paid tribute to you.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "6",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You gave Dallas some writing tips.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "7",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Tanisha confessed a secret to you.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "8",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You lavished Francisco with praise.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "9",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Esainea complained to you.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "10",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You devoted your time to Jennifer.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "11",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Darius blew you a kiss.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "12",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You transmitted the order to Alexander.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "13",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Jessica gave you another chance.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "14",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You told Bryan the story.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "15",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Megan transferred responsibility to you.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "16",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You sent Kaishon your regards.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "17",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Brandon gave you a piece of [his\u002Fher] mindBrandon.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "18",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You bestowed the honor upon Ryan.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "19",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Keano radioed the message to you.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "20",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You conveyed the message to Bianca.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "42",
          "block": "1",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Dina combed the puppy with you.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "44",
          "block": "1",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Dandrew felt honored to be with you.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "46",
          "block": "1",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Tyrin heard the radioed message with you.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "48",
          "block": "1",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Ivan listened to the message with you.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "50",
          "block": "1",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Jessica washed the car with you.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "52",
          "block": "1",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "You bought the soccer ball with Kainos.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "54",
          "block": "1",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Jennifer thought about your idea.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "56",
          "block": "1",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Atsila watched the tribute with you.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "58",
          "block": "1",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "You and Jordan discussed some writing tips.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "60",
          "block": "1",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Neeme looked at the land with you.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "81",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You barked the football to Julia.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "83",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You loafed the coffee cup to Ileana.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "85",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You held the chance to Tareef.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "87",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You flew on the note to Dietrich.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "89",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Dongjoo rolled you adoration.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "91",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You hoarded your love to Alexandra.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "93",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You tasted the papers to Jerusalem.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "95",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You swam Hop the truth.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "97",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Ulambayar festered relief to you.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "99",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Acacia washed you the thought.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "101",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Steffen smiled the key to you.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "103",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You parked the memo to Shayla.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "105",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You sneezed Josiah secrets.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "107",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Ryan tossed you with the paintball.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "109",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Awda blanketed you the chance.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "111",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You flexed Raabiya a moment.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "113",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You sing the pizza to Mia.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "115",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You snored justice for Kayla.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "117",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You cleaned the pizza to Katherine.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "119",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You mowed Valerie your opinion.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "121",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Sharmayne mingled the complaint to you.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "123",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You looted the blanket to Ilyaas.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "125",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You cried the jack to Gregory.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "127",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You built the water with Alazone.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "129",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You smoked the cafeteria tray to Calvin.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "131",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Haashim smelled the money to you.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "133",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You painted the hammer to Mckenzy.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "135",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Dillon ate you the poem.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "137",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You drank the notebook to Thomas.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "139",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Christopher boiled information to you.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "21",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Leandra threw you a pen.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "22",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You awarded a medal to Latesha.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "23",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Ian kicked you the soccer ball.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "24",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You bought Kourtney ice cream.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "25",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Hae slid you the cafeteria tray.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "26",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You handed Tanner the notebook.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "27",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Haseena dealt the cards to you.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "28",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You forked over the cash to Wajdi",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "29",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Konray donated money to you.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "30",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You shot Shaimaaa the rubber band.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "31",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Blake poured you some water.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "32",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You rolled Jennifer the marble.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "33",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Gregory slipped you a note.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "34",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You kicked the football to Darian.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "35",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Luis entrusted the key to you.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "36",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You delivered the pizza to Natalie.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "37",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Jasmine handed you the puppy.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "38",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You drove the car to Rasheeda.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "39",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Calvin hit you the baseball.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "40",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You dispensed the rations to Badruddeen.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "62",
          "block": "1",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "You played cards with Joshua.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "64",
          "block": "1",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Andrew drank some water with you.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "66",
          "block": "1",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "You read about donated money with Bertie.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "68",
          "block": "1",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "You discuss the cash with Davidray.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "70",
          "block": "1",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "You complained about Nolan.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "72",
          "block": "1",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Jannet ducked responsibility with you.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "74",
          "block": "1",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Jia read the story about you.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "76",
          "block": "1",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Madison watched football with you.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "78",
          "block": "1",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Olivia read the orders with you.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "80",
          "block": "1",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Ernesto wrote the note with you.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "141",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Preston snored the frame with you.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "143",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You fell the message to Dyanna.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "145",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Shane choked the lesson with you.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "147",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Tiffany wedged an homage to you.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "149",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Ron paddled fairness to you.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "151",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You radioed the floor with Crystal.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "153",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Christopher ate the regards to you.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "155",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You bled the rations to Adhraaa.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "157",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You drank the baseball with Morgan.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "159",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You sunk Angelo the monitor.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "161",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You drank your idea to Ceara.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "163",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You hanged honesty with Steven.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "165",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Wasmaaa parted you the trailer.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "167",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You danced the land to Dennis.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "169",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Alexandria tasted the soccer ball to you.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "171",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You smelled the song with Tahvia.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "173",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Tyler locked the lint roller to you.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "175",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Fawz joked the ice cream to you.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "177",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You floundered the train to Katherine.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "179",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You forked the bottle to Amanda.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "181",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You licked the jacket to Latesha.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "183",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Justin stapled the song with you.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "185",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Michael tackled the cloud to you.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "187",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Xandria pounded you the sunglasses.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "189",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Maya matched the phone to you.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "191",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You roasted Patricia the notion.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "193",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You fertilized Kaylee advice.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "195",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You blanketed Casey to the store.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "197",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You tore Rachel the shoe.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "199",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Jennifer recited the mouse for you.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "21",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Leandra threw you a pen.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "22",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You awarded a medal to Latesha.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "23",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Ian kicked you the soccer ball.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "24",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You bought Kourtney ice cream.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "25",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Hae slid you the cafeteria tray.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "26",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You handed Tanner the notebook.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "27",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Haseena dealt the cards to you.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "28",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You forked over the cash to Wajdi",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "29",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Konray donated money to you.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "30",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You shot Shaimaaa the rubber band.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "31",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Blake poured you some water.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "32",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You rolled Jennifer the marble.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "33",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Gregory slipped you a note.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "34",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You kicked the football to Darian.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "35",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Luis entrusted the key to you.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "36",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You delivered the pizza to Natalie.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "37",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Jasmine handed you the puppy.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "38",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You drove the car to Rasheeda.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "39",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Calvin hit you the baseball.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "40",
          "block": "1",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You dispensed the rations to Badruddeen.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "62",
          "block": "1",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "You played cards with Joshua.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "64",
          "block": "1",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Andrew drank some water with you.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "66",
          "block": "1",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "You read about donated money with Bertie.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "68",
          "block": "1",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "You discuss the cash with Davidray.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "70",
          "block": "1",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "You complained about Nolan.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "72",
          "block": "1",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Jannet ducked responsibility with you.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "74",
          "block": "1",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Jia read the story about you.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "76",
          "block": "1",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Madison watched football with you.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "78",
          "block": "1",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Olivia read the orders with you.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "80",
          "block": "1",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Ernesto wrote the note with you.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "141",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Preston snored the frame with you.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "143",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You fell the message to Dyanna.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "145",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Shane choked the lesson with you.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "147",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Tiffany wedged an homage to you.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "149",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Ron paddled fairness to you.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "151",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You radioed the floor with Crystal.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "153",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Christopher ate the regards to you.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "155",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You bled the rations to Adhraaa.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "157",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You drank the baseball with Morgan.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "159",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You sunk Angelo the monitor.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "161",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You drank your idea to Ceara.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "163",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You hanged honesty with Steven.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "165",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Wasmaaa parted you the trailer.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "167",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You danced the land to Dennis.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "169",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Alexandria tasted the soccer ball to you.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "171",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You smelled the song with Tahvia.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "173",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Tyler locked the lint roller to you.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "175",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Fawz joked the ice cream to you.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "177",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You floundered the train to Katherine.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "179",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You forked the bottle to Amanda.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "181",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You licked the jacket to Latesha.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "183",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Justin stapled the song with you.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "185",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Michael tackled the cloud to you.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "187",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Xandria pounded you the sunglasses.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "189",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Maya matched the phone to you.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "191",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You roasted Patricia the notion.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "193",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You fertilized Kaylee advice.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "195",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You blanketed Casey to the store.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "197",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You tore Rachel the shoe.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "199",
          "block": "1",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Jennifer recited the mouse for you.",
          "correct_response": "w"
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.options.templateParameters = this.options.templateParameters.filter(
  row => row.list === window.participantList
)
}
      },
      "title": "experimental_loop_block_1",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {},
        "parameters": {},
        "messageHandlers": {},
        "title": "trial",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": "40",
                "height": "40",
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"fixation.svg\"] }"
              }
            ],
            "files": {
              "fixation.svg": "embedded\u002F43a10d563ae03eb43aa1d16599f75682f97bdbb1ece148c5a39cd269957a9098.svg"
            },
            "parameters": {},
            "responses": {
              "keypress(Space)": "end_fixation"
            },
            "messageHandlers": {},
            "viewport": [
              800,
              600
            ],
            "title": "fixation_cross"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 320.17,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "${this.parameters.text}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "keypress(w)": "press_w",
              "keypress(s)": "press_s"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "sentence_screen",
            "correctResponse": "${this.parameters.correct_response}",
            "timeout": "10000"
          }
        ]
      }
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 1029.89,
          "height": 287.83,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Read the sentence and decide if it is sensible \n\nPress ${window.responseKeys.blockTwoSensible} for sensible items.\nPress ${window.responseKeys.blockTwoNonsense}  for nonsense items.\n\nPress Space Bar to start the study and \nto progress the screens",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "keypress(Space)": "end_instructions"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "instruction_block_2"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "list": "1",
          "item": "21",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Leandra threw you a pen.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "22",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You awarded a medal to Latesha.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "23",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Ian kicked you the soccer ball.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "24",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You bought Kourtney ice cream.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "25",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Hae slid you the cafeteria tray.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "26",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You handed Tanner the notebook.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "27",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Haseena dealt the cards to you.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "28",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You forked over the cash to Wajdi",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "29",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Konray donated money to you.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "30",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You shot Shaimaaa the rubber band.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "31",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Blake poured you some water.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "32",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You rolled Jennifer the marble.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "33",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Gregory slipped you a note.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "34",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You kicked the football to Darian.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "35",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Luis entrusted the key to you.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "36",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You delivered the pizza to Natalie.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "37",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Jasmine handed you the puppy.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "38",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You drove the car to Rasheeda.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "39",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Calvin hit you the baseball.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "40",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You dispensed the rations to Badruddeen.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "62",
          "block": "2",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "You played cards with Joshua.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "64",
          "block": "2",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Andrew drank some water with you.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "66",
          "block": "2",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "You read about donated money with Bertie.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "68",
          "block": "2",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "You discuss the cash with Davidray.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "70",
          "block": "2",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "You complained about Nolan.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "72",
          "block": "2",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Jannet ducked responsibility with you.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "74",
          "block": "2",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Jia read the story about you.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "76",
          "block": "2",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Madison watched football with you.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "78",
          "block": "2",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Olivia read the orders with you.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "80",
          "block": "2",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Ernesto wrote the note with you.",
          "correct_response": "s"
        },
        {
          "list": "1",
          "item": "141",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Preston snored the frame with you.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "143",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You fell the message to Dyanna.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "145",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Shane choked the lesson with you.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "147",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Tiffany wedged an homage to you.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "149",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Ron paddled fairness to you.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "151",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You radioed the floor with Crystal.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "153",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Christopher ate the regards to you.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "155",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You bled the rations to Adhraaa.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "157",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You drank the baseball with Morgan.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "159",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You sunk Angelo the monitor.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "161",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You drank your idea to Ceara.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "163",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You hanged honesty with Steven.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "165",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Wasmaaa parted you the trailer.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "167",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You danced the land to Dennis.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "169",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Alexandria tasted the soccer ball to you.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "171",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You smelled the song with Tahvia.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "173",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Tyler locked the lint roller to you.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "175",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Fawz joked the ice cream to you.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "177",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You floundered the train to Katherine.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "179",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You forked the bottle to Amanda.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "181",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You licked the jacket to Latesha.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "183",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Justin stapled the song with you.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "185",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Michael tackled the cloud to you.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "187",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Xandria pounded you the sunglasses.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "189",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Maya matched the phone to you.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "191",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You roasted Patricia the notion.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "193",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You fertilized Kaylee advice.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "195",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You blanketed Casey to the store.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "197",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You tore Rachel the shoe.",
          "correct_response": "w"
        },
        {
          "list": "1",
          "item": "199",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Jennifer recited the mouse for you.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "21",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Leandra threw you a pen.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "22",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You awarded a medal to Latesha.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "23",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Ian kicked you the soccer ball.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "24",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You bought Kourtney ice cream.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "25",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Hae slid you the cafeteria tray.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "26",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You handed Tanner the notebook.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "27",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Haseena dealt the cards to you.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "28",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You forked over the cash to Wajdi",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "29",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Konray donated money to you.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "30",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You shot Shaimaaa the rubber band.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "31",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Blake poured you some water.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "32",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You rolled Jennifer the marble.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "33",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Gregory slipped you a note.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "34",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You kicked the football to Darian.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "35",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Luis entrusted the key to you.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "36",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You delivered the pizza to Natalie.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "37",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Jasmine handed you the puppy.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "38",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You drove the car to Rasheeda.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "39",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Calvin hit you the baseball.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "40",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You dispensed the rations to Badruddeen.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "62",
          "block": "2",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "You played cards with Joshua.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "64",
          "block": "2",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Andrew drank some water with you.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "66",
          "block": "2",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "You read about donated money with Bertie.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "68",
          "block": "2",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "You discuss the cash with Davidray.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "70",
          "block": "2",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "You complained about Nolan.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "72",
          "block": "2",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Jannet ducked responsibility with you.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "74",
          "block": "2",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Jia read the story about you.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "76",
          "block": "2",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Madison watched football with you.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "78",
          "block": "2",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Olivia read the orders with you.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "80",
          "block": "2",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Ernesto wrote the note with you.",
          "correct_response": "w"
        },
        {
          "list": "2",
          "item": "141",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Preston snored the frame with you.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "143",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You fell the message to Dyanna.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "145",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Shane choked the lesson with you.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "147",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Tiffany wedged an homage to you.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "149",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Ron paddled fairness to you.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "151",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You radioed the floor with Crystal.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "153",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Christopher ate the regards to you.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "155",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You bled the rations to Adhraaa.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "157",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You drank the baseball with Morgan.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "159",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You sunk Angelo the monitor.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "161",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You drank your idea to Ceara.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "163",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You hanged honesty with Steven.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "165",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Wasmaaa parted you the trailer.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "167",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You danced the land to Dennis.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "169",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Alexandria tasted the soccer ball to you.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "171",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You smelled the song with Tahvia.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "173",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Tyler locked the lint roller to you.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "175",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Fawz joked the ice cream to you.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "177",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You floundered the train to Katherine.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "179",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You forked the bottle to Amanda.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "181",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You licked the jacket to Latesha.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "183",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Justin stapled the song with you.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "185",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Michael tackled the cloud to you.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "187",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Xandria pounded you the sunglasses.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "189",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Maya matched the phone to you.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "191",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You roasted Patricia the notion.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "193",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You fertilized Kaylee advice.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "195",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You blanketed Casey to the store.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "197",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You tore Rachel the shoe.",
          "correct_response": "s"
        },
        {
          "list": "2",
          "item": "199",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Jennifer recited the mouse for you.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "1",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Nisma sold the land to you.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "2",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You dedicated the song to Shelby.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "3",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Brandon sang you a song.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "4",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You pitched Habeeba the idea.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "5",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Jesse paid tribute to you.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "6",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You gave Dallas some writing tips.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "7",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Tanisha confessed a secret to you.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "8",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You lavished Francisco with praise.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "9",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Esainea complained to you.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "10",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You devoted your time to Jennifer.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "11",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Darius blew you a kiss.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "12",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You transmitted the order to Alexander.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "13",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Jessica gave you another chance.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "14",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You told Bryan the story.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "15",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Megan transferred responsibility to you.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "16",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You sent Kaishon your regards.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "17",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Brandon gave you a piece of his mind.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "18",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You bestowed the honor upon Ryan.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "19",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Keano radioed the message to you.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "20",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You conveyed the message to Bianca.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "42",
          "block": "2",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Dina combed the puppy with you.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "44",
          "block": "2",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Dandrew felt honored to be with you.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "46",
          "block": "2",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Tyrin heard the radioed message with you.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "48",
          "block": "2",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Ivan listened to the message with you.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "50",
          "block": "2",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Jessica washed the car with you.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "52",
          "block": "2",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "You bought the soccer ball with Kainos.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "54",
          "block": "2",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Jennifer thought about your idea.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "56",
          "block": "2",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Atsila watched the tribute with you.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "58",
          "block": "2",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "You and Jordan discussed some writing tips.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "60",
          "block": "2",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Neeme looked at the land with you.",
          "correct_response": "s"
        },
        {
          "list": "3",
          "item": "81",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You barked the football to Julia.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "83",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You loafed the coffee cup to Ileana.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "85",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You held the chance to Tareef.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "87",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You flew on the note to Dietrich.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "89",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Dongjoo rolled you adoration.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "91",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You hoarded your love to Alexandra.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "93",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You tasted the papers to Jerusalem.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "95",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You swam Hop the truth.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "97",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Ulambayar festered relief to you.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "99",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Acacia washed you the thought.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "101",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Steffen smiled the key to you.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "103",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You parked the memo to Shayla.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "105",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You sneezed Josiah secrets.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "107",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Ryan tossed you with the paintball.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "109",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Awda blanketed you the chance.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "111",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You flexed Raabiya a moment.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "113",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You sing the pizza to Mia.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "115",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You snored justice for Kayla.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "117",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You cleaned the pizza to Katherine.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "119",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You mowed Valerie your opinion.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "121",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Sharmayne mingled the complaint to you.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "123",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You looted the blanket to Ilyaas.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "125",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You cried the jack to Gregory.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "127",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You built the water with Alazone.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "129",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You smoked the cafeteria tray to Calvin.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "131",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Haashim smelled the money to you.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "133",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You painted the hammer to Mckenzy.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "135",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Dillon ate you the poem.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "137",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You drank the notebook to Thomas.",
          "correct_response": "w"
        },
        {
          "list": "3",
          "item": "139",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Christopher boiled information to you.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "1",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Nisma sold the land to you.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "2",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You dedicated the song to Shelby.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "3",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Brandon sang you a song.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "4",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You pitched Habeeba the idea.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "5",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Jesse paid tribute to you.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "6",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You gave Dallas some writing tips.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "7",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Tanisha confessed a secret to you.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "8",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You lavished Francisco with praise.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "9",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Esainea complained to you.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "10",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You devoted your time to Jennifer.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "11",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Darius blew you a kiss.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "12",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You transmitted the order to Alexander.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "13",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Jessica gave you another chance.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "14",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You told Bryan the story.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "15",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Megan transferred responsibility to you.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "16",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You sent Kaishon your regards.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "17",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Brandon gave you a piece of his mind.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "18",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You bestowed the honor upon Ryan.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "19",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "towards",
          "text": "Keano radioed the message to you.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "20",
          "block": "2",
          "sensibility": "sensible",
          "type": "transfer",
          "direction": "away",
          "text": "You conveyed the message to Bianca.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "42",
          "block": "2",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Dina combed the puppy with you.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "44",
          "block": "2",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Dandrew felt honored to be with you.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "46",
          "block": "2",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Tyrin heard the radioed message with you.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "48",
          "block": "2",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Ivan listened to the message with you.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "50",
          "block": "2",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Jessica washed the car with you.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "52",
          "block": "2",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "You bought the soccer ball with Kainos.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "54",
          "block": "2",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Jennifer thought about your idea.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "56",
          "block": "2",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Atsila watched the tribute with you.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "58",
          "block": "2",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "You and Jordan discussed some writing tips.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "60",
          "block": "2",
          "sensibility": "sensible",
          "type": "no_transfer",
          "direction": "NA",
          "text": "Neeme looked at the land with you.",
          "correct_response": "w"
        },
        {
          "list": "4",
          "item": "81",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You barked the football to Julia.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "83",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You loafed the coffee cup to Ileana.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "85",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You held the chance to Tareef.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "87",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You flew on the note to Dietrich.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "89",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Dongjoo rolled you adoration.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "91",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You hoarded your love to Alexandra.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "93",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You tasted the papers to Jerusalem.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "95",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You swam Hop the truth.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "97",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Ulambayar festered relief to you.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "99",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Acacia washed you the thought.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "101",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Steffen smiled the key to you.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "103",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You parked the memo to Shayla.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "105",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You sneezed Josiah secrets.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "107",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Ryan tossed you with the paintball.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "109",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Awda blanketed you the chance.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "111",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You flexed Raabiya a moment.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "113",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You sing the pizza to Mia.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "115",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You snored justice for Kayla.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "117",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You cleaned the pizza to Katherine.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "119",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You mowed Valerie your opinion.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "121",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Sharmayne mingled the complaint to you.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "123",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You looted the blanket to Ilyaas.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "125",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You cried the jack to Gregory.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "127",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You built the water with Alazone.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "129",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You smoked the cafeteria tray to Calvin.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "131",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Haashim smelled the money to you.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "133",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You painted the hammer to Mckenzy.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "135",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Dillon ate you the poem.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "137",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "You drank the notebook to Thomas.",
          "correct_response": "s"
        },
        {
          "list": "4",
          "item": "139",
          "block": "2",
          "sensibility": "nonsense",
          "type": "transfer",
          "direction": "NA",
          "text": "Christopher boiled information to you.",
          "correct_response": "s"
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.options.templateParameters = this.options.templateParameters.filter(
  row => row.list === window.participantList
)
}
      },
      "title": "experimental_loop_block_2",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {},
        "parameters": {},
        "messageHandlers": {},
        "title": "trial",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": "40",
                "height": "40",
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"fixation.svg\"] }"
              }
            ],
            "files": {
              "fixation.svg": "embedded\u002F43a10d563ae03eb43aa1d16599f75682f97bdbb1ece148c5a39cd269957a9098.svg"
            },
            "parameters": {},
            "responses": {
              "keypress(Space)": "end_fixation"
            },
            "messageHandlers": {},
            "viewport": [
              800,
              600
            ],
            "title": "fixation_cross"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 320.17,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "${this.parameters.text}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "keypress(w)": "press_w",
              "keypress(s)": "press_s"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "sentence_screen",
            "correctResponse": "${this.parameters.correct_response}",
            "timeout": "10000"
          }
        ]
      }
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 578.2,
          "height": 78.11,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "The experiment is now over.\nPlease read the debrief on the next page",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "end_screen",
      "timeout": "2000"
    }
  ]
})

// Let's go!
study.run()