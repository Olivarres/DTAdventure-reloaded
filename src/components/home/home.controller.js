export default class HomeController {



  constructor(StepService) {
      this.StepService = StepService;
      this.steps = StepService.getSteps()
      .then(steps => this.steps=steps);

      this.saves = StepService.getSaves()
      .then(saves => this.saves=saves);
    }

    deleteSave(id, index) {

      this.StepService.deleteSave(id)
      .then(function(res) {
        if(res.status == 200) {
          this.saves.splice(index, 1);
        }
      }.bind(this));

  }

    startGame() {

      alert(this.name);
    }
}

HomeController.$inject = ['StepService'];
