import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import { DashboardInfo } from './../../shared/model/dashboardinfo';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    public info: Observable<DashboardInfo>;

    constructor(private service: DashboardService) {
    }

    ngOnInit() {
      this.info = this.service.info()
                              .share();
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
