export default function QuestionCard({ questionData, selectedOption, onOptionChange, onNext }) {
    return (
        <>
            <div id="quiz-content">
                <h4 className="mb-4">{questionData.question}</h4>

                <div className="text-start">
                    {/* Para cada opção, cria um botão de escolha.
                        O value guarda a casa, checked indica a opção atual
                        e onChange envia a casa escolhida para o componente pai. */}
                    {questionData.options.map((option, index) => (
                        <div key={index} className="form-check mb-2">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="answer"
                                id={`option${index}`}
                                value={option.house}
                                checked={selectedOption === option.house}
                                onChange={() => onOptionChange(option.house)}
                            />
                            <label className="form-check-label" htmlFor={`option${index}`}>
                                {option.text}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Botão que ativa a função onNext recebida através de props */}
            <button
                id="next-button"
                className="btn btn-danger w-100 p-3 mt-4 fs-5"
                onClick={onNext}
            >
                Next Question
            </button>
        </>
    );
}