import {Component} from 'angular2/core';
import {AuthenticationService} from './authentication.service'

@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    template: `
            <div class="container" >
                <div class="content">
                    <span>Congratulations, you have successfully logged in!!</span>
                    <br />
                    <a (click)="logout()" href="#">Click Here to logout</a>
                    <a (click)="agend()" href="http://localhost:8080/app/Rubrica/">Click Here to see your Agenda</a>
                    <smart-table class="table table-striped" table-title="Smart Table" columns="columnCollection"
             rows="rowCollection" config="globalConfig"></smart-table>

                </div>
            </div>
    	`
})

export class PrivateComponent {

    constructor(
        private _service:AuthenticationService){}

    ngOnInit(){
        this._service.checkCredentials();
    }

    logout() {
        this._service.logout();
    }
}