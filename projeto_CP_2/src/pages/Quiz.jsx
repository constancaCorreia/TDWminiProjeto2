import { useState } from "react";
import { questoes } from "../questoes.js"; 
import HeaderQuiz from "../components/HeaderQuiz.jsx";
import CardPergunta from "../components/CardPergunta.jsx"
import ResultsQuiz from "../components/ResultsQuiz.jsx";
import Gryffindor from "../assets/imgs_02/Gryffindor.png"
import Slytherin from "../assets/imgs_02/Slytherin.png"
import Hufflepuff from "../assets/imgs_02/Hufflepuff.png"
import Ravenclaw from "../assets/imgs_02/Ravenclaw.png"

export default function Quiz() {
    
    //Uso strings diretas para garantir que o build não falha se a imagem não existir na pasta src
    const imagensCasas = {
        Gryffindor,
        Slytherin,
        Hufflepuff,
        Ravenclaw
    };

    //Estado da pergunta atual (índice no array de questões)
    const [currentQuestion, setCurrentQuestion] = useState(0);

    //Estado com as pontuações acumuladas de cada casa
    const [scores, setScores] = useState({ Gryffindor: 0, Slytherin: 0, Hufflepuff: 0, Ravenclaw: 0 });

    //Guarda a opção selecionada da pergunta atual
    const [selectedOption, setSelectedOption] = useState("");

    //Quando o quiz acaba, winner passa a ser a casa vencedora
    const [winner, setWinner] = useState(null);

    //Atualiza a opção selecionada quando o utilizador escolhe uma resposta
    const handleOptionChange = (house) => {
        setSelectedOption(house);
    };

    //Quando o utilizador clica em "Next Question"
    const handleProximaPergunta = () => {
        // Validação simples: obriga a escolher uma opção antes de avançar
        if (!selectedOption) {
            alert("Please choose an answer!");
            return;
        }

        //Vai copiar o estado scores e incrementa a casa selecionada
        const newScores = { ...scores, [selectedOption]: scores[selectedOption] + 1 };
        setScores(newScores);

        //Se ainda houver perguntas por mostrar, avançamos senão calcula-se o vencedor
        if (currentQuestion < questoes.length - 1) {
            //Avança para a próxima pergunta e dá reset à opção selecionada
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(""); 
        } else {
            // Calcula a casa com a maior pontuação
            let highestScore = 0;
            let winningHouse = "";
            
            for (const house in newScores) {
                if (newScores[house] > highestScore) {
                    highestScore = newScores[house];
                    winningHouse = house;
                }
            }
            setWinner(winningHouse);
        }
    };

     //Reinicia o quiz para se poder responder de novo
    const restartQuiz = () => {
        setScores({ Gryffindor: 0, Slytherin: 0, Hufflepuff: 0, Ravenclaw: 0 });
        setCurrentQuestion(0);
        setSelectedOption("");
        setWinner(null);
    };

    // Define a classe CSS do fundo dinamicamente para alterar a background image
    const backgroundClass = winner ? `${winner}Room` : "hall";

    return (
        <div className={`min-vh-100 ${backgroundClass}`}>
            <main className="d-flex justify-content-center align-items-center py-5 quiz pt-5">
                <div className="quiz-container card shadow-lg border-top border-5 border-light rounded-3 p-4 p-md-5 mx-3 mx-md-0 bg-dark text-light" style={{maxWidth: "700px"}}>
                    
                    {/* Componente com o Cabeçalho */}
                    <HeaderQuiz />

                    {/* Se não houver um vencedor, mostra as perguntas caso contrário mostra o resultado */}
                    {!winner ? (
                        // Mostra o cartão de pergunta
                        <CardPergunta 
                            questionData={questoes[currentQuestion]}
                            selectedOption={selectedOption}
                            onOptionChange={handleOptionChange}
                            onNext={handleProximaPergunta}
                        />
                    ) : (
                        // Mostra o resultado e recomeça o quiz
                        <ResultsQuiz
                            winner={winner}
                            winnerImage={imagensCasas[winner]}
                            onRestart={restartQuiz}
                        />
                    )}

                </div>
            </main>
        </div>
    );
}