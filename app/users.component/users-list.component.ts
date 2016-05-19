import { Component, OnInit } from 'angular2/core';
import { User } from './user'
import { UserService } from './users.service'
import { UserDetailsComponent } from './user-details.component'
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, Route,Router } from 'angular2/router';
import { Observable } from 'rxjs/Observable';


@Component({
    templateUrl: './app/users.component/users-list.component.html',
    styleUrls:['./app/users.component/user.css'],
    providers:[UserService]
})
export class UsersComponent implements OnInit {
    users:Observable<User[]>;
    selectedUserLogin:string;
    
    constructor(private _userService:UserService,private _router:Router) { }

    ngOnInit() { 
        this.users= this._userService.getUsers();
    }        
    goToDetail(login:string){
        let link=['UserDetails',{login:login}]        
        this._router.navigate(link);
    }
}