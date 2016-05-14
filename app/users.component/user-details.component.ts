import { Component, OnInit } from 'angular2/core';
import {User} from './user';
import {UserService} from './users.service'
import {TruncatePipe} from '../Common/truncate';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, Route,RouteParams,Router} from 'angular2/router';


@Component({
    selector: 'user-details',
    templateUrl: './app/users.component/user-details.component.html',
    styleUrls:['./app/users.component/user.css'],
    pipes: [TruncatePipe],
    providers:[UserService]
})
export class UserDetailsComponent implements OnInit {
    login:string;
    selectedUser:User;
    constructor(private userService:UserService, private params:RouteParams,private _router:Router) { }

    ngOnInit() { 
     this.login=this.params.get('login');
        this.userService.getUserDetail(this.login).subscribe(
            data => this.selectedUser=data,
            error=> alert(error),
            ()=>console.log('got user details')   
        )
    }
    goBack(){
        let link=['Users']       
        console.log(link); 
        this._router.navigate(link);
    }
}