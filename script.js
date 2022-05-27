const climbersSection$$ = document.querySelector(".climbers");
const skyrimSection$$ = document.querySelector(".skyrim");

const getClimbers = async () => {
  const climbersAPI = await fetch("http://localhost:5000/climbers");
  const climbersRES = await climbersAPI.json();
  const mappedCharacters = climbersRES.map((character) => ({
    name: character.name,
    country: character.country,
    photo: character.photo,
    description: character.description
  }));
  paintCharacters(mappedCharacters);
};

const getSkyrim = async () => {
    const skyrimAPI = await fetch("http://localhost:5000/skyrim");
    const skyrimRES = await skyrimAPI.json();
    const mappedSkyrim = skyrimRES.map((person) => ({
      raza: person.raza,
      poder: person.poder,
      photo: person.photo,
      habilidades: person.habilidades,
      
    }));
    
    paintSkyrim(mappedSkyrim);
  };

const paintCharacters = (characters) => {
  const charactersHTML = characters
    .map(
      (character) => `
    <div class="character">
      <h3>${character.name}</h3>
      <h4>${character.country}</h4>
      <img class="imgC"src="${character.photo}" alt="${character.name}" />
      <p> ${character.description}</p>
    </div>
    `
    )
    .join("");
  climbersSection$$.innerHTML = charactersHTML;
};

const paintSkyrim = (person) => {
  const charactersSky = person.map((person) => `
    <div class="person">
      <h3>${person.raza}</h3>
      <h4>${person.poder}</h4>
      <img class="imgS" src="${person.photo}" alt="${person.raza}" />
      <p> ${person.habilidades}</p>
    </div>
    `
    )
    .join("");
  skyrimSection$$.innerHTML = charactersSky;
};

getClimbers();
getSkyrim();
