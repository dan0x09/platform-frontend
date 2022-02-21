import { Injectable } from '@angular/core';
import { MatDrawer, MatDrawerToggleResult } from '@angular/material/sidenav';

@Injectable()
export class SidenavService {
    isOpen = false;

    private sidenav: MatDrawer;

    public setSidenav(sidenav: MatDrawer): void {
        this.sidenav = sidenav;
    }

    public open(): Promise<MatDrawerToggleResult> {
        return this.sidenav.open();
    }

    public close(): Promise<MatDrawerToggleResult> {
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
