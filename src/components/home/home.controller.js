export default class HomeController {
  constructor() {
    this.steps = [
      {
        "id": 1,
        "name": "Entrée du donjon",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed distinctio quas mollitia iusto quaerat delectus ullam eius fugit optio voluptates.",
        "start": true,
        "actions": [
          {
            "type": "go",
            "name": "Entrez dans le donjon",
            "params": {
              "step": 2
            }
          }
        ]
      },
      {
        "id": 2,
        "name": "Salle des gardes",
        "description": "Une salle sombre. À la faible lumière d'une bougie vous apercevez deux portes",
        "actions": [
          {
            "type": "go",
            "name": "Passer la 1ere porte",
            "params": {
              "step": 3
            }
          },
          {
            "type": "go",
            "name": "Passer la 2nd porte",
            "params": {
              "step": 4
            }
          }
        ]
      }];
    }

    startGame() {

      alert(this.name);
    }
}
