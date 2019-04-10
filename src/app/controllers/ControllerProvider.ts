import {ArticleController} from './ArticleController'
import {UndefinedActionError} from './errors/UndefinedActionError'
import {UnregisteredControllerError} from './errors/UnregisteredControllerError'

export class ControllerProvider {

    private controllers: any

    public constructor(private readonly repositories: any) {
        this.bindControllers()
    }

    bindControllers() {
        // todo: extract into config
        this.controllers = {}
        this.controllers.article = new ArticleController(this.repositories.article)
    }

    call(controller: string, action: string, params: any[] = []): Promise<any> {
        if (this.controllers[controller]) {
            if (this.controllers[controller][action]) {
                return this.controllers[controller][action](...params)
            } else throw new UndefinedActionError(action, controller)
        } else throw new UnregisteredControllerError(controller)
    }
}
