const api_url = "https://pokeapi.co/api/v2/pokemon/";

export type Pokeapi = {
  count: number;
  next: string;
  previous: null;
  results: Result[];
};

export type Result = {
  name: string;
  url: string;
};

const response = await fetch(api_url);

if (response.ok) {
  throw new Error("Request faild");
}

const data = (await response.json()) as Pokeapi;

const respo = data.results;

interface Mario {
  company: string;
  nombre: string;
  saltar: () => void;
}

interface Sonic {
  company: string;
  nombre: string;
  correr: () => void;
}

type Personaje = Mario | Sonic;

// type guard
function checkIsSonic(personaje: Personaje): personaje is Sonic {
  return (personaje as Sonic).correr !== undefined;
}

function jugar(personaje: Personaje) {
  if (checkIsSonic(personaje)) {
    personaje.correr();
  }
}
