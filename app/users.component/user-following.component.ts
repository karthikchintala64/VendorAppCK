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
    sincePrev:number;
    sinceNext:number;
    pageSize:number;
    
    constructor(private userService:UserService,private params:RouteParams,private router:Router) { }
    ngOnInit() { 
        this.login=this.params.get('login');
        this.pageSize=10;
        this.sinceNext=2;
        this.sincePrev=0;
        this.users=this.userService.getUserFollowing(this.login,this.pageSize,1);
    }
    goToDetail(login:string){
        let link=['UserDetails',{login:login}]        
        this.router.navigate(link);
    }
    
    getUsersNext(sinceValue:number){
        this.sincePrev++;
        this.sinceNext++;
        this.users= this.userService.getUserFollowing(this.login,this.pageSize,sinceValue);
    }
    
    getUsersPrev(sinceValue:number){
        this.sincePrev--;
        this.sinceNext--;
        this.users= this.userService.getUserFollowing(this.login,this.pageSize,sinceValue);
    }
}