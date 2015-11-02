export default class HomeController {



  constructor(StepService) {
      this.steps = StepService.getSteps()
      .then(steps => this.steps=steps)
      console.log(this.steps)
    }

    startGame() {

      alert(this.name);
    }
}

HomeController.$inject = ['StepService'];
