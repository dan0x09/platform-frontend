import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Alert, AlertType } from 'src/app/models/alert.model';
import { AlertService } from 'src/app/services/alert.service';

@Component({ selector: 'app-alert', templateUrl: 'alert.component.html' })
export class AlertComponent implements OnInit, OnDestroy {
    @Input() id = 'default-alert';
    @Input() fade = true;

    alerts: Alert[] = [];
    alertSubscription: Subscription;
    routeSubscription: Subscription;

    constructor(private router: Router, private alertService: AlertService) {}

    ngOnInit(): void {
        this.alertSubscription = this.alertService.onAlert(this.id).subscribe((alert) => {
            if (!alert.message) {
                this.alerts = this.alerts.filter((x) => x.keepAfterRouteChange);

                this.alerts.forEach((x) => delete x.keepAfterRouteChange);
                return;
            }

            this.alerts.push(alert);

            if (alert.autoClose) {
                setTimeout(() => this.removeAlert(alert), 3000);
            }
        });

        // Clear alerts on location change
        this.routeSubscription = this.router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
                this.alertService.clear(this.id);
            }
        });
    }

    ngOnDestroy(): void {
        // Unsubscribe to avoid memory leaks
        this.alertSubscription.unsubscribe();
        this.routeSubscription.unsubscribe();
    }

    removeAlert(alert: Alert): void {
        // check if already removed to prevent error on auto close
        if (!this.alerts.includes(alert)) {
            return;
        }

        if (this.fade) {
            alert.fade = true;

            // Remove alert after faded out
            setTimeout(() => {
                this.alerts = this.alerts.filter((x) => x !== alert);
            }, 250);
        } else {
            // Remove alert
            this.alerts = this.alerts.filter((x) => x !== alert);
        }
    }

    cssClass(alert: Alert): void | string {
        if (!alert) {
            return;
        }

        const classes = ['alert', 'alert-dismissible', 'mt-4', 'container'];

        const alertTypeClass = {
            [AlertType.Success]: 'alert alert-success',
            [AlertType.Error]: 'alert alert-danger',
            [AlertType.Info]: 'alert alert-info',
            [AlertType.Warning]: 'alert alert-warning',
        };

        classes.push(alertTypeClass[alert.type]);

        if (alert.fade) {
            classes.push('fade');
        }

        return classes.join(' ');
    }
}
