import { useEffect, useState } from "react";
import Card from "../components/Card";

const Home = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetchCocktails();
  }, []);

  const fetchCocktails = async () => {
    const request = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`
    );
    const response = await request.json();
    setCocktails(response.drinks);
  };
  //   console.log(cocktails);
  return (
    <div className="map">
      {cocktails.map((cocktail) => {
        return <Card cocktail={cocktail} />;
      })}
    </div>
  );
};

export default Home;
