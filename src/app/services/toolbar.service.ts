import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ToolbarService {
    subject: BehaviorSubject<string> = new BehaviorSubject<string>('Silolytics');

    constructor(private title: Title) {}

    setTitle(title: string): void {
        this.title.setTitle(title);
        this.subject.next(title);
    }

    getTitle(): Observable<string> {
        return this.subject;
    }
}
