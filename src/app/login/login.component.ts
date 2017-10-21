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
        localStorage.setItem('isLoggedin', 'true');
        localStorage.setItem('auth', this.genAuth());

        this.pingService.ping()
          .subscribe( x => this.authenticationSuccess());
    }

    authenticationSuccess() {
        this.userService.getLoggedInName()
            .subscribe( x => localStorage.setItem('username', x));

        this.router.navigateByUrl('/dashboard')
    }

    genAuth() {
      var result = "Basic " + btoa(this.email + ":" + this.password);
      return result;
    }

}
