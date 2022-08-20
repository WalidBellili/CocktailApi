import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Cocktail = () => {
  const [cocktails, setCocktails] = useState(null);
  const { cocktailId } = useParams();
  useEffect(() => {
    fetchCocktails();
  }, [cocktailId]);
  //   Le Fetch utilisera tout le temps l'id. Il faut le MAJ

  const fetchCocktails = async () => {
    const request = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`
    );
    const response = await request.json();
    setCocktails(response.drinks);
  };
  console.log(cocktails);

  //   if (!cocktailId) {
  //     return <p>Loading</p>;
  //   }
  return <div></div>;
};

export default Cocktail;
