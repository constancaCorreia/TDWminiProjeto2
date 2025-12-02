export default function ModalPotion({ potion, onClose }) {
//Se não houver uma poção selecionada não renderiza o modal
  if (!potion) return null;

  const { attributes } = potion;

  return (
    <div 
      className="modal fade show d-block" 
      style={{ backgroundColor: "rgba(0,0,0,0.8)" }} 
      tabIndex="-1"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content bg-dark text-white border-light">
          
          <div className="modal-header border-secondary">
            <h2 className="modal-title">
              {attributes.name}
            </h2>
            {/* Botão para fechar o modal */}
            <button 
              type="button" 
              className="btn-close btn-close-white" 
              onClick={onClose}
            ></button>
          </div>

          <div className="modal-body">
            <div className="row">
                {/* Coluna da imagem */}
              <div className="col-md-5 text-center mb-3 mb-md-0">
                <img 
                  src={attributes.image} 
                  className="img-fluid rounded shadow-lg border border-secondary"
                  alt={attributes.name}
                  style={{ maxHeight: "400px" }}
                />
              </div>

            {/* Coluna com os detalhes da poção */}
              <div className="col-md-7">
                {/* Vai renderizar condicionalmente cada secção apenas se exitir */}
                {attributes.effect && (
                  <div className="mb-3">
                    <h5 className="text-warning">Effect</h5>
                    <p>{attributes.effect}</p>
                  </div>
                )}

                {attributes.ingredients && (
                  <div className="mb-3">
                    <h5 className="text-info">Ingredients</h5>
                    <p>{attributes.ingredients}</p>
                  </div>
                )}

                {attributes.characteristics && (
                  <div className="mb-3">
                    <h5 className="text-success">Characteristics</h5>
                    <p>{attributes.characteristics}</p>
                  </div>
                )}
                
                {attributes.difficulty && (
                  <div className="mb-3">
                    <h5 className="text-danger">Difficulties</h5>
                    <span className="badge bg-danger">
                      {attributes.difficulty}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="modal-footer border-secondary">
            <button 
              type="button" 
              className="btn btn-secondary" 
              onClick={onClose}
            >
              Close book
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}