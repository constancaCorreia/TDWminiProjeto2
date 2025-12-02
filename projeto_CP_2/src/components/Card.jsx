import { useState } from "react";

function Card({ id, title, text, img, onRemove }) {
  // Hover controla o estilo visual do card quando o rato está por cima
  const [hover, setHover] = useState(false);
  const casa = text;

  //corCard devolve um objeto de estilos inline dependendo da casa e do hover
  //
  function corCard (casa, hover) {
    const coresCasa = {
      Gryffindor: "#7F0909",
      Slytherin: "#1A472A",
      Ravenclaw: "#0E1A40",
      Hufflepuff: "#FFDB00"
    };

    //Quando hover === true aplica as cores da casa
   if (hover) {
    switch (casa) {
      case "Gryffindor":
        return { backgroundColor: coresCasa.Gryffindor, color: "white" };
      case "Slytherin":
        return { backgroundColor: coresCasa.Slytherin, color: "white" };
      case "Ravenclaw":
        return { backgroundColor: coresCasa.Ravenclaw, color: "white" };
      case "Hufflepuff":
        return { backgroundColor: coresCasa.Hufflepuff, color: "black" };
    }

     // Se hover for "false" devolve um estilo neutro
      return { backgroundColor: "white", color: "black" };
    }
  }
     

  return (
    <div className="col-md-3 mb-3">
      <div
        className="card"
        id = {id}
        style={corCard(casa, hover)}  //Aqui é aplicado o estilo dinâmico
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          src={img}
          className="card-img-top"
          alt={title}
        />

        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{casa}</p>
          <span id = {id}
          style={corCard(casa, hover)}
          onClick={() => onRemove(id)} //Chama onRemove(id) passado em props
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          >
            X
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;