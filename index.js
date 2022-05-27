const express = require("express");
const cors = require("cors"); //CORS

const PORT = 5000;

const server = express();
const router = express.Router();

router.get("/climbers", (req, res) => {
  const climbers = [
    {
      name: "Adam Ondra",
      country: "New Zealand",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Adam_Ondra_Climbing_WCh_2018.jpg/789px-Adam_Ondra_Climbing_WCh_2018.jpg?20180921030738",
      description:
        "encadenó el primer 15d/9c de la historia: Silence, en Flatanger, Noruega.Señalar que Adam fue el primero en encadenar  al “flash” una vía graduada en 9a+ (15a)",
    },
    {
      name: "Chris Sharma",
      country: "United States",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chris_Sharma_%28USA%29.jpg/368px-Chris_Sharma_%28USA%29.jpg",
      description:
        "Se caracteriza por haber encadenado las vías más duras en psicobloc (Deep-water soloing en inglés), por ejemplo la 9a+ Es pontàs, y la 9b Alasha en Mallorca, España.",
    },
    {
      name: "Wolfgang Wüllich",
      country: "Germany",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Bild_auf_dem_Gedenkstein_fuer_Guellich_retusche_f.jpg/330px-Bild_auf_dem_Gedenkstein_fuer_Guellich_retusche_f.jpg",
      description:
        "Se caracteriza por haber encadenado las vías más duras en psicobloc (Deep-water soloing en inglés), por ejemplo la 9a+ Es pontàs, y la 9b Alasha en Mallorca, España.",
    },
  ];
  res.send(climbers);
});

router.get("/skyrim", (req, res) => {
  const skyrim = [
    {
      raza: "Altmer",
      poder: "Aristocrático",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAzAJtI37NrBWi18gJzyY9D8DAp_YUNj1NGQ&usqp=CAU",
      habilidades: "+50 reserva de magia",
    },
    {
      raza: "Argoniano",
      poder: "Piel de Hist",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFbXJ3e-qaNeFlEoiCBHimgM8DdYE0KNnaDA&usqp=CAU",
      habilidades: "+50% resistencia a venenos y enfermedades",
    },
    {
      raza: "Bosmer",
      poder: "Dominar animal",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREapawt58dFAkUE12SQQlswOumXJ6nkYh0fQ&usqp=CAU",
      habilidades: "+50% resistencia a venenos y enfermedades",
    },
    {
      raza: "Bretón",
      poder: "Piel de Dragón",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzJa35p344SYlhvt5vlyaoUMHIkKB39bbOnw&usqp=CAU",
      habilidades: "+25% resistencia a magia",
    },
    {
      raza: "Dunmer",
      poder: "Ira del antepasado",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_rKXXNWJ1RrKzEvIc52hGHRqpzrqpUYdm1w&usqp=CAU",
      habilidades: "+50% resistencia al fuego",
    },
    {
      raza: "Guardia rojo",
      poder: "Subida de adrenalina",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMqiZ2WYfIxCC4cE5VEcNIW-6WmwbzDrYABw&usqp=CAU",
      habilidades: "+50% de resistencia al veneno",
    },
    {
      raza: "Khajiita",
      poder: "Ojo nocturno",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzOTq4amG5N8tIY8NI7fpt-2BFMFblLzwb8A&usqp=CAU",
      habilidades: "Garras Letales (x4 el daño  desarmado)",
    },
    {
      raza: "Nórdico",
      poder: "Grito de batalla",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaI-cLy4d_CwBLeZv-yzhbwPpVV9J0O22GIw&usqp=CAU",
      habilidades: "+50% resistencia al frío",
    },
    {
      raza: "Orco",
      poder: "Ira del berserker",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyqHZiD_efgMBPuoemyTlGXh_ozU_Po_qejw&usqp=CAU",
      habilidades: "Ninguna",
    },
    {
      raza: "Imperial",
      poder: " Voz del emperador",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV2itWqveacGyTHlQsLoBpv7aoYJPPR60LtA&usqp=CAU",
      habilidades: "Suerte Imperial",
    },
  ];
  res.send(skyrim);
});

//ESTAS SON LAS CORS, HAY QUE PEGARLO EN ESTE PUNTO PARA QUE SE PUEDA HACER LA PETICION DESDE EL FRONT
server.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

server.use("/", router);

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
