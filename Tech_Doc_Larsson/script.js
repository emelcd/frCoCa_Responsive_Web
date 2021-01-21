function tweakMenu() {
  var tweak1 = document.getElementById("navbar");
  var tweak2 = document.getElementById("button-hide");
  if (tweak1.style.display == "none") {
    tweak1.style.display = "block";
    tweak2.style.display = "none";

  } else {
    tweak1.style.display = "none";
    tweak2.style.display = "block";
  }
}
var hintObject = {
  freeCodeCamp: `
const fetchData = (): void => {
  for (let i = 1; i <= pokemons; i++) {
    getPokemon(i)
  }
}

const getPokemon = async (id: number): Promise<void> => {
const data: Response = await fetch("https://pokeapi.co/api/v2/pokemon/")
const pokemon: any = await data.json()
const pokemonType: string = pokemon.types
    .map((poke: any) => poke.type.name)
    .join(", ")

const transformedPokemon = {
  id: pokemon.id,
  name: pokemon.name,
  image: "{pokemon.sprites.front_default}",
  type: pokemonType,
}

showPokemon(transformedPokemon)}`,
  StackOverFlow: `//TYPES
class Greeter {
  greeting: string;
  constructor (message: string) {
      this.greeting = message;
  }
  greet() {
      return "Hello, " + this.greeting;
  }
//JAVAS
var Greeter = (function () {
  function Greeter(message) {
      this.greeting = message;
  }
  Greeter.prototype.greet = function () {
      return "Hello, " + this.greeting;
  };
  return Greeter;
})();
} `,
  typeHandBook: `
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});
`,
  medium: `
// Interface
interface Puppy { 
    name: string,
    age: string
};
// Declaración Válida
const puppy: Puppy = {
   name: "Mascota",
   age: 2
};
// Declaración Inválida
const invalidPuppy: Puppy = {
   eat: true
};
// Esta declaración es inválida puesto que la prop eat no existe en la interface.
`,
  others: `
sendMail(to: string, subject: string, content: string) 
: Promise<void> 
{ 
  let options = { 
    from: '<fromaddress>@gmail.com', 
    to: to, 
    subject: subject, 
    text: content 
  } 

  return new Promise<void> ( 
    (resolve: (msg: any) => void,  
      reject: (err: Error) => void) => { 
        this._transporter.sendMail(  
          options, (error, info) => { 
            if (error) { 
              console.log("error: {error}"); 
              reject(error); 
            } else { 
                console.log("Message Sent 
                  {info.response}"); 
                resolve("Message Sent  
                  {info.response}"); 
            } 
        }) 
      } 
  ); 
}
`,
  testC: "var eco = 'MIERDA';"

}

function randomHint(clickid) {

  console.log(clickid)
  var boxCode = document.getElementById("boxCode");
  var boxCode2 = document.getElementById("hideC");
  boxCode2.style.display = "none";
  // randomH.innerHTML = hintObject.freeCodeCamp;
  // randomH.innerHTML = hintObject.StackOverFlow;
  var contents = [
    "freeCodeCamp",
    "StackOverFlow",
    "typeHandBook",
    "medium",
    "others",
    "testC"
  ];
  var addedTo = `<pre><code class='typescript cat'>${hintObject[contents[clickid]]}</code></pre>`
  boxCode.innerHTML = addedTo;
  document.querySelectorAll('#boxCode pre code').forEach((block) => {
    hljs.highlightBlock(block)
    console.log(block)
  });


  console.log(contents[0])


  // console.log(randomElement)
  // console.log(randomH)
}