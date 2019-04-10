import {Utils} from '../../utils/Utils'

export class UnregisteredControllerError extends Error {
    public constructor(controller: string) {
        super(`Controller with name '${Utils.ucfirst(controller)}Controller' is not registered.`)
    }
}
