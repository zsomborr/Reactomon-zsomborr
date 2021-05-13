import { useEffect, useState } from "react";
import Type from "./Type";

const TypeList = () => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const getTypes = async () => {
      const typesFromFetch = await fetchTypes();
      setTypes(typesFromFetch);
    };

    getTypes();
  }, []);

  const fetchTypes = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/type");
    const data = await res.json();

    return data.results;
  };

  return (
    <div>
      {types.map((type, index) => (
        <Type key={index} type={type} />
      ))}
    </div>
  );
};

export default TypeList;
