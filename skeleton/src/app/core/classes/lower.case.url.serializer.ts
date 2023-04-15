import { DefaultUrlSerializer } from '@angular/router';

export class LowerCaseUrlSerializer extends DefaultUrlSerializer {
    parse(url: string) {
        return super.parse(url.toLowerCase());
    }
}
