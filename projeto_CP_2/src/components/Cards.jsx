import Card from "./Card";

function Cards(props) {
  // props.items: array de objetos preparados na Home
  // props.onRemove: função que remove um card pelo id
  return (
    <div className="container">
      <div className="row mt-5 pt-5">
        {props.items.map((value, index) => (
          <Card key={index} {...value} onRemove={props.onRemove}/>
        ))}
      </div>
    </div>
  );
}

export default Cards;
