//array of questions- quiz

let arr = [
  {
    ques: "Javascript is an _______ language?",
    option1: "Object-Oriented",
    option2: "Object-Based",
    option3: "Procedural",
    option4: "None of the above",
  },
  {
    ques: "Which of the following keywords is used to define a variable in Javascript?",
    option1: "var",
    option2: "let",
    option3: "Both A and B ",
    option4: "None of the above",
  },
  {
    ques: "Which of the following methods is used to access HTML elements using Javascript?",
    option1: "getElementById()",
    option2: "getElementsByClassName",
    option3: "Both A and B ",
    option4: "None of the above",
  },
  {
    ques: "Upon encountering empty statements, what does the Javascript Interpreter do?",
    option1: "Throws an error",
    option2: "Ignores the statement",
    option3: "Gives a warning ",
    option4: "None of the above",
  },
  {
    ques: "When an operator’s value is NULL, the typeof returned by the unary operator is:",
    option1: "Boolean",
    option2: "Undefined",
    option3: "Object",
    option4: "Integer",
  },
  {
    ques: "What is the output of the following code snippet? print(NaN === NaN);",
    option1: "true",
    option2: "false",
    option3: "Undefined",
    option4: "Error",
  },
  {
    ques: "What does the ‘toLocateString()’ method do in JS?",
    option1: "Returns a localised Object representation",
    option2: "Returns a parsed string",
    option3: "Returns a localised string representation of an Object",
    option4: "None of the above",
  },
  {
    ques: "Which function is used to serialize an object into a JSON string in Javascript?",
    option1: "stringfy()",
    option2: "parse()",
    option3: "convert()",
    option4: "None of the above",
  },
  {
    ques: "Which of the following are closures in Javascript?",
    option1: "Variables",
    option2: "Functions",
    option3: "Objects",
    option4: "All of the above",
  },
  {
    ques: "Which of the following is not a Javascript framework?",
    option1: "Node",
    option2: "Vue",
    option3: "React",
    option4: "Cassandra",
  },
];

let correctAnsOb = [0,2,2,1,2,1,2,0,3,3];;
let correctAns=[]


let userAns = [];
let btn = document.getElementById("btn");
let quizQues = document.getElementById("ques");
let answers = document.getElementById("anslist");
let btnPlay = document.getElementById("btnPlay");
let quesPosted = [];
let quest;
let ansSelected;
let ansDone = false;
let selectedAns;
let result;

//function to display question
function display(quesNo) {
  ansDone=false;
  if (answers.children) {
    answers.innerHTML = "";
  }
  quizQues.innerText = arr[quesNo].ques;
  let optionCount = Object.values(arr[quesNo]);
  for (let i = 1; i < optionCount.length; i++) {
    let options = document.createElement("li");
    options.innerHTML = optionCount[i];
    answers.appendChild(options);
  }
  selectedAns = document.querySelectorAll("li");
}

//function to check ans clicks in lists

function listClick(){
    selectedAns.forEach((element, index) => {
     element.addEventListener("click", () => {
        if(ansDone){
            //if already an ans is selected then deselect it
            selectedAns[ansSelected].style.color="white";
        }
        element.style.color = "red";
        ansDone = true;
        ansSelected = index;
    });
  });

}

window.addEventListener("load", () => {
  quest = Math.floor(Math.random() * arr.length);
  quesPosted.push(quest);
  correctAns.push(correctAnsOb[quesPosted[quesPosted.length-1]])
  display(quest);
  ansSelected=listClick();
});


btn.addEventListener("click", () => {

  if (ansDone) {     
    if(userAns.length !== quesPosted.length){userAns.push(ansSelected)};

    if (quesPosted.length !== arr.length) {
        //only for maximum questions, when submit is clicked moved to else
        let found = 0;
        while (found !== 1) {
          quest = Math.floor(Math.random() * arr.length);
          if (!quesPosted.includes(quest)) {
            found = 1;
            quesPosted.push(quest);
            correctAns.push(correctAnsOb[quesPosted[quesPosted.length-1]]);
          }
        }
        display(quest);
        ansSelected=listClick();
        
      } else {
        btn.innerText = "Submit to check results";
        result  = document.getElementById("result");
        btn.addEventListener("click", () => {
            
          let score = 0;
          console.log("correctAns required")
          console.log(correctAns)
          console.log("Answers entered by user")
          console.log(userAns)
          for (let k = 0; k < userAns.length; k++) {
            if (userAns[k] == correctAns[k]) {
              score++;
            }
          }
          result.innerHTML = `Your score is : ${score}`;
        });
      }
      
  }

  
});

btnPlay.addEventListener("click",()=>{
    window.location.reload();
})
