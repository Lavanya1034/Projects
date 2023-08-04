let button = document.querySelector("button");
let div= document.getElementById("quote")

const arrayOfQuotes = [
    {'author': 'Jim Rohn', 
     'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {'author': 'Epictetus', 
     'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
];

button.addEventListener("click",()=>{
    if(div.children.length>0){
        div.innerHTML="";
    }
    let ranNo = Math.floor(Math.random()*(arrayOfQuotes.length));
    console.log(ranNo);

    let q1= document.createElement("h2");
    q1.textContent = `${arrayOfQuotes[ranNo].quote}`;

    let auth = document.createElement("h3");
    auth.textContent=`${arrayOfQuotes[ranNo].author}`;

    div.appendChild(q1);
    div.appendChild(auth);

})