import { Inversion } from './inversion'

@Inversion.Injectable()
class Service {
  perform() {
    console.log("Service")
  }
}

@Inversion.Injectable()
class Create extends Service {

  perform() {
    console.log("Create")
  }
}

@Inversion.Injectable()
class Update extends Service {

  perform() {
    console.log("Update")
  }
}

@Inversion.Injectable()
class Controller {
  constructor(@Inversion.Inject(Service) private service: Service) {

  }

  perform() {
    this.service.perform()
  }
}

const controller = Inversion.container.resolve(Controller)

controller.perform()