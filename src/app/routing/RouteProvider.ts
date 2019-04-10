import {HttpMethods} from './HttpMethods'
import {ControllerProvider} from '../controllers/ControllerProvider'

export class RouteProvider {

    public constructor(private readonly router: any, private readonly controllerProvider: ControllerProvider) {

    }

    public registerRoute(method: HttpMethods, route: string, controller: string, action: string, middleware: () => void = () => {
    }) {
        this.router[method](route, async (ctx: any) => {
            const routeParts = route.split('/')
            let argNames = routeParts
                .filter((i: string) => i.startsWith(':'))
                .map(i => i.substr(1))
            let args = argNames.map(i => ctx.params[i])
            args.push(ctx.request)
            ctx.body = await this.controllerProvider.call(controller, action, args)
        })
    }
}
