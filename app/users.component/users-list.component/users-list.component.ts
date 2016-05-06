import { Component, OnInit } from 'angular2/core';
import {User} from '../user'
import {UserService} from '../users.service'


@Component({
    templateUrl: './app/users.component/users-list.component/users-list.component.html',
    providers:[UserService]
})
export class UsersComponent implements OnInit {
    users:User[];
    
    constructor(private _userService:UserService) { }

    ngOnInit() { 
        this._userService.getUsers().subscribe(
            data => this.users=data,
            error=> alert(error),
            ()=>console.log('Finished')   
        )
    }        
}