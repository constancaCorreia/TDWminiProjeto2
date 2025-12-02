 export const questoes = [
      {
        question: "What would you do if you found a lost wallet?", //string com o texto da pergunta
        options: [                                                 //array com as diferentes opções de resposta para essa pergunta
          { text: "Return it immediately.", house: "Hufflepuff" }, //string com o texto que aparece no quiz como opção de resposta e string com o nome da casa associada a esta resposta
          { text: "Keep it, finders keepers.", house: "Slytherin" },
          { text: "Turn it in to the authorities.", house: "Ravenclaw" },
          { text: "Look for the owner yourself.", house: "Gryffindor" }
        ]
      },
      {
        question: "Which subject do you prefer?",
        options: [
          { text: "Defense Against the Dark Arts", house: "Gryffindor" },
          { text: "Potions", house: "Slytherin" },
          { text: "Herbology", house: "Hufflepuff" },
          { text: "Charms", house: "Ravenclaw" }
        ]
      },
      {
        question: "Choose a magical creature:",
        options: [
          { text: "Phoenix", house: "Gryffindor" },
          { text: "Basilisk", house: "Slytherin" },
          { text: "Niffler", house: "Hufflepuff" },
          { text: "Hippogriff", house: "Ravenclaw" }
        ]
      },
      {
        question: "What quality do you value most?",
        options: [
          { text: "Bravery", house: "Gryffindor" },
          { text: "Ambition", house: "Slytherin" },
          { text: "Loyalty", house: "Hufflepuff" },
          { text: "Wisdom", house: "Ravenclaw" }
        ]
      }
  ];