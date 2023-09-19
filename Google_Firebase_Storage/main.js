import { startUpload, getPokemonData, getBerryData } from "./firebaseConfig.js";

async function getOfficeTeamDta() {
  let promises = [];
  try {
    await getPokemonData(1);
    await getPokemonData(2);
  } catch (error) {
    console.log(error);
  }
}

getOfficeTeamDta();

// promises[2] = getPokemonData(3);
// promises[3] = getPokemonData(4);
// promises[4] = getPokemonData(5);
// promises[5] = getBerryData(1);
// promises[6] = getBerryData(2);
// promises[7] = getBerryData(3);
// promises[8] = getBerryData(4);
// promises[9] = getBerryData(5);

//  await Promise.all(promises).then((values) => {
//       values.forEach((value) => {
//         let { name } = value.data;
//         console.log(name);
//       });
//     });
