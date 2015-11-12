export default class PlayController {
  constructor(StepService, $state, UserService) {

    this.step = StepService.getStep($state.params.id)
    .then(step => this.step=step);
    this.user = UserService;
    this.StepService = StepService;
    console.log(this.user);
  }

  selectAction(action) {
    this.StepService.doAction(action, this.user);
  }

  saveGame() {
    console.log("wefwefwf");
    console.log(this.step);
    this.user.save = this.step.id;
    this.StepService.saveGame(this.user);

  }

}

PlayController.$inject = ['StepService', '$state', 'UserService'];
