export default function CardPotion ({ potion, onOpen }) {
  // Desestrutura attributes para facilitar o acesso
  const { attributes } = potion; 

  return (
    <div className="col-md-4 col-lg-3">
      <div className="card h-100 shadow border-0 hover-card">
        <img
          src={attributes.image}
          className="card-img-top p-3"
          alt={attributes.name}
          style={{ height: "250px", objectFit: "contain" }} //Imagem com objectFit para manter a proporção e limitar a altura 
        />
        <div className="card-body text-center d-flex flex-column">
          {/* Nome da poção */}
          <h5 className="card-title fw-bold text-dark">
            {attributes.name}
          </h5>
          <div className="mt-auto">
            {/* Botão que abre o modal com mais informações sobre a poção */}
            <button 
              className="btn btn-dark w-100"
              onClick={() => onOpen(potion)}
            >
              See ingredients
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}