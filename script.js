const plantel = [
  { 
    nombre: "Lionel Messi", 
    posicion: "delantero", 
    seleccion: "ar", 
    dorsal: 10, 
    velocidad: 8, 
    color: "#75aadb",
    nacimiento: "1987-06-24",
    fortalezas: ["Definición", "Gambeta", "Pase"] 
  },
  { 
    nombre: "Emiliano Martínez", 
    posicion: "arquero", 
    seleccion: "ar", 
    dorsal: 23, 
    velocidad: 6, 
    color: "#007780",
    nacimiento: "1992-09-02",
    fortalezas: ["Reflejos", "Personalidad"] 
  },
  { 
    nombre: "Rodrigo De Paul", 
    posicion: "mediocampista", 
    seleccion: "ar", 
    dorsal: 7, 
    velocidad: 7, 
    color: "#75aadb",
    nacimiento: "1994-05-24",
    fortalezas: ["Pase", "Marca"] 
  },
  {
    nombre: "Julián Álvarez",
    posicion: "delantero",
    seleccion: "ar",
    dorsal: 9,
    velocidad: 9,
    color: "#75aadb",
    nacimiento: "2000-01-31",
    fortalezas: ["Velocidad", "Definición", "Marca"]
  }
];

const contenedor = document.querySelector("#plantel");

plantel.forEach((jugador, index) => {
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("ficha");

  let emoji = "";
  if (jugador.posicion === "delantero") {
    emoji = "⚽ ";
  } else if (jugador.posicion === "arquero") {
    emoji = "🧤 ";
  } else if (jugador.posicion === "defensor") {
    emoji = "🛡️ ";
  } else if (jugador.posicion === "mediocampista") {
    emoji = "🎯 ";
  }

  const nombre = document.createElement("h2");
  nombre.textContent = `${emoji}${jugador.nombre}`;

  const posicion = document.createElement("p");
  posicion.textContent = `Posición: ${jugador.posicion}`;

  const dorsal = document.createElement("p");
  dorsal.textContent = `Dorsal: ${jugador.dorsal}`;

  const fortalezas = document.createElement("p");
  fortalezas.textContent = `Fortalezas: ${jugador.fortalezas.join(", ")}`;

  if (jugador.velocidad >= 8) {
    tarjeta.classList.add("destacado");
  }

  if (index === 0) {
    tarjeta.classList.add("capitan");
  }

  tarjeta.appendChild(nombre);
  tarjeta.appendChild(posicion);
  tarjeta.appendChild(dorsal);
  tarjeta.appendChild(fortalezas);

  contenedor.appendChild(tarjeta);
});