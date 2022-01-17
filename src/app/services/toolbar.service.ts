import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ToolbarService {
    constructor(private title: Title) {}

    subject: BehaviorSubject<string> = new BehaviorSubject<string>('Silolytics');

    setTitle(title: string) {
        this.title.setTitle(title);
        this.subject.next(title);
    }

    getTitle(): Observable<string> {
        return this.subject;
    }
}
