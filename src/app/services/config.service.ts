import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ConfigService {
    constructor() {}

    getUrl(uri: string): string {
        return environment.apiBaseUrl + uri;
    }
}
