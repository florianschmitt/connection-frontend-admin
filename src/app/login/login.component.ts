import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PingService } from '../shared/services/ping.service';
import { UserService } from '../shared/services/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    email: string;
    password: string;

    constructor(public router: Router, public pingService: PingService, public userService: UserService) { }

    ngOnInit() { }

    onLoggedin() {
        if (!this.email || !this.password) {
            return;
        }

        localStorage.setItem('auth', this.genAuth());

        this.pingService.ping()
          .subscribe( x => this.authenticationSuccess());
    }

    authenticationSuccess() {
        localStorage.setItem('isLoggedin', 'true');

        this.userService.getLoggedInName()
            .subscribe(username => localStorage.setItem('username', username));

        this.userService.getRoles()
                .subscribe(roles => {
                    if (roles.hasAdminRight) {
                        localStorage.setItem('hasAdminRight', "true")
                    }
                    if (roles.hasFinanceRight) {
                        localStorage.setItem('hasFinanceRight', "true")
                    }
                });

        this.router.navigateByUrl('/dashboard')
    }

    genAuth() {
      var result = "Basic " + btoa(this.email + ":" + this.password);
      return result;
    }
}
