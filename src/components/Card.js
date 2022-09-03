import { Link } from "react-router-dom";

const Card = ({ cocktail }) => {
  //   console.log(props.cocktail);

  return (
    <>
      <section className="card-container">
        <article className="card">
          <Link to={`/cocktail/${cocktail.idDrink}`}>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <h2>{cocktail.strDrink}</h2>
          </Link>
        </article>
      </section>
    </>
  );
};

export default Card;
