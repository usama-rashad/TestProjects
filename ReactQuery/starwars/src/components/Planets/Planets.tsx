import "./Planets.scss";
import { useQuery } from "react-query";
import axios from "axios";
import Planet, { IPlanetData } from "../Planet/Planet";

async function getPlanetData() {
  let planetData = await axios.get("https://swapi.dev/api/planets/");
  return planetData.data;
}

function Planets() {
  // const { data } = useQuery("planets", getPlanetData);

  return (
    <div className="planetsMain">
      <h2>Planets</h2>
      <div className="results">
        {/* {data?.results?.map((planet: IPlanetData, index: number) => {
          return (
            <Planet
              key={index}
              name={planet.name}
              rotationTime={planet.rotationTime}
              diameter={planet.diameter}
              terrain={planet.terrain}
              population={planet.population}
            />
          );
        })} */}
        <Planet name="Earth" diameter="189000" population="8000000000" rotationTime="24" terrain="grass, mountains" />
      </div>
    </div>
  );
}

export default Planets;
