import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Role } from 'src/app/shared/types/interfaces';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
    dropdownVisible = false;

    navLinks: MetaNavLink[] = [
        {
            name: 'Systeme',
            icon: 'developer_board',
            url: '/admin/systems',
            isVisible: false,
            isActive: false,
            roles: [Role.OWNER, Role.ADMIN],
        },
        {
            name: 'Lohnunternehmen',
            icon: 'business',
            url: '/admin/contractors',
            isVisible: false,
            isActive: false,
            roles: [Role.OWNER, Role.ADMIN],
        },
        {
            name: 'Betriebe',
            icon: 'agriculture',
            url: '/admin/farms',
            isVisible: false,
            isActive: false,
            roles: [Role.OWNER, Role.ADMIN],
        },
        {
            name: 'Silage',
            icon: 'grass',
            url: '/admin/silage-heaps',
            isVisible: false,
            isActive: false,
            roles: [Role.OWNER, Role.ADMIN],
        },
        {
            name: 'Nutzer',
            icon: 'person',
            url: '/admin/users',
            isVisible: false,
            isActive: false,
            roles: [Role.OWNER, Role.ADMIN],
        },
        {
            name: 'Einladungen',
            icon: 'drafts',
            url: '/admin/invitations',
            isVisible: false,
            isActive: false,
            roles: [Role.OWNER, Role.ADMIN],
        },
    ];

    constructor(private router: Router, private auth: AuthService) {}

    ngOnInit(): void {
        for (const link of this.navLinks) {
            link.isVisible = link.roles.includes(this.auth.getRole());
            link.isActive =
                link.url === this.router.url ||
                (link.urlAliases === undefined ? false : link.urlAliases.indexOf(this.router.url) > -1);
        }

        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }

    toggleSmallNav(): void {
        this.dropdownVisible = !this.dropdownVisible;
    }

    navigateTo(url: string): void {
        this.router.navigate([`admin/${url}`]);
    }

    logout(): void {
        this.auth.deleteToken();
        this.router.navigate(['']);
    }
}
interface MetaNavLink {
    url: string;
    icon?: string;
    urlAliases?: string[];
    name: string;
    isVisible: boolean;
    isActive: boolean;
    roles: Role[];
}
