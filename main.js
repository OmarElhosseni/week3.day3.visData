let peopleDivs = document.getElementsByClassName("person");
let html = document.getElementsByTagName('html')[0];

for(let i = 0; i < data.results.length; i++) {
  let person = data.results[i];
  makePerson(person);
}

function makePerson(person) {
  let newDiv = document.createElement("div");

  let pfp = document.createElement("img");
  stylePFP(pfp,person);
  newDiv.appendChild(pfp);

  let attributes = document.createElement('p');
  addAttributes(attributes,person);
  newDiv.appendChild(attributes);

  html.appendChild(newDiv)

}

//adds attributes to designated text box
function addAttributes(textBox, person) {
  let br = document.createElement("br");

  textBox.innerText =("Name: "+ " " + person.name.title[0].toUpperCase() +
  person.name.title.substr(1)+" " +
  person.name.first[0].toUpperCase() +
  person.name.first.substr(1)+ " " +
  person.name.last[0].toUpperCase()+
  person.name.last.substr(1));//adds properly formatted name

  textBox.appendChild(br);
  textBox.innerText += "Email: " + person.email;

}

//styles generated profile pics
function stylePFP(pfp,person) {
  pfp.src = person.picture.large;
  pfp.style.marginLeft = "auto";
  pfp.style.marginRight = "auto";
  pfp.style.display = "block";
  pfp.style.marginTop = "5%";
  pfp.style.width = "50%";
  pfp.style.height = "50%";
}
