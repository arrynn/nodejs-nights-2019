import {RouteProvider} from '../routing/RouteProvider'
import {ControllerProvider} from '../controllers/ControllerProvider'
import {RepositoryProvider} from '../repositories/RepositoryProvider'

export class AppServiceProvider {

    private routeProvider: RouteProvider
    private controllerProvider: ControllerProvider
    private repositoryProvider: RepositoryProvider

    get RouteProvider() {
        return this.routeProvider
    }

    get ControllerProvider() {
        return this.controllerProvider
    }

    get RepositoryProvider() {
        return this.repositoryProvider
    }

    public constructor(private readonly router: any, private readonly storage: any) {
        this.repositoryProvider = new RepositoryProvider(this.storage)
        this.controllerProvider = new ControllerProvider(this.repositoryProvider.Repositories)
        this.routeProvider = new RouteProvider(this.router, this.controllerProvider)
    }
}

