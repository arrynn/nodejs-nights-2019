import {Utils} from '../../utils/Utils'

export class UndefinedActionError extends Error {
    public constructor(action: string, controller: string) {
        const message = `Undefined action: ${action}.\n` +
            `No such action has been defined in ${Utils.ucfirst(controller)}Controller.`
        super(message)
    }
}
