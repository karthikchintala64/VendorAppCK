import { Component, OnInit } from 'angular2/core';
import {User} from './user';
import {UserService} from './users.service'
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, Route,RouteParams,Router} from 'angular2/router';
import { Observable } from 'rxjs/Observable';

@Component({
    templateUrl: './app/users.component/users-list.component.html',
    styleUrls:['./app/users.component/user.css'],
    providers:[UserService]
})
export class UserFollowingComponent implements OnInit {
    login:string;
    users:Observable<User>;
    constructor(private userService:UserService,private params:RouteParams,private router:Router) { }
    ngOnInit() { 
        this.login=this.params.get('login');
        this.users=this.userService.getUserFollowing(this.login);
    }
    goToDetail(login:string){
        let link=['UserDetails',{login:login}]        
        this.router.navigate(link);
    }
}