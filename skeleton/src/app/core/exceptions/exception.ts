import { CMD_VALIDATION_ERROR, INTERNAL_SERVER_ERROR, UNAUTHORIZED_CODE, UNAUTHORIZED_ERROR } from "../constants"

export class ApplicationException {

    getError(error: any): string {
        let message = error?.error?.message || error?.error?.detail || '';
        if (error?.error?.title.trim() == CMD_VALIDATION_ERROR) {
            message = error?.error?.errors.join('');
        }
        if (!message) {
            if (error?.status && error?.status === UNAUTHORIZED_CODE) {
                message = UNAUTHORIZED_ERROR;
            } else {
                message = INTERNAL_SERVER_ERROR;
            }
        }

        return message;
    }
}