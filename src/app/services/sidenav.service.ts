import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Injectable()
export class SidenavService {
    private sidenav: MatDrawer;

    isOpen = false;

    public setSidenav(sidenav: MatDrawer) {
        this.sidenav = sidenav;
    }

    public open() {
        return this.sidenav.open();
    }

    public close() {
        return this.sidenav.close();
    }

    public toggle(): void {
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
        }
        this.isOpen = !this.isOpen;
    }
}
