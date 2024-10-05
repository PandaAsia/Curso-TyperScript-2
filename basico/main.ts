//inferir
let nombre: string = "miguel";
let nombre2 = "miguel";

//como a y b infiren que son number sin decirle nada
const a = 1;
const b = 2;
const c = a + b;
//c tambien sera number
const persona = {
  name: "shana",
  age: 20,
};

function saludar({ name, age }: { name: string; age: number }) {
  console.log(`${name}, ${age}`);
}

saludar({ name: "hola", age: 2 }); //error

function saludar2(persona: { name: string; age: number }) {
  const { name, age } = persona;
  console.log(`${name}, ${age}`);
}

saludar2({ name: "hola", age: 2 });
