export default class PlayController {
  constructor(StepService, $state, UserService) {

    this.step = StepService.getStep($state.params.id)
    .then(step => this.step=step);
    this.user = UserService;
    this.StepService = StepService;
  }

  selectAction(action) {
    this.StepService.doAction(action, this.user);
  }

  saveGame() {
    this.user.save = this.step.id;
    this.StepService.saveGame(this.user);
  }

}

PlayController.$inject = ['StepService', '$state', 'UserService'];
