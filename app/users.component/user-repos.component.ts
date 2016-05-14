import { Component, OnInit } from 'angular2/core';
import { User } from './user'
import { UserService } from './users.service'
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, RouteParams,Router } from 'angular2/router';

@Component({
    templateUrl: './app/users.component/user-repos.component.html',
    styleUrls:['./app/users.component/user.css'],
    providers:[UserService]
})
export class UserReposComponent implements OnInit {
    repos:User;
    login:string;
    constructor(private userService:UserService, private params:RouteParams,private _router:Router) { }

    ngOnInit() { 
     this.login=this.params.get('login');
     this.userService.getUserRepos(this.login).subscribe(
         data => this.repos=data,
         error => alert(error),
         ()=>console.log('Finished')  
     );   
    }
    goBackToDetails(){
        let link=['UserDetails', {login:this.login}]       
        console.log(link); 
        this._router.navigate(link);
    }
}