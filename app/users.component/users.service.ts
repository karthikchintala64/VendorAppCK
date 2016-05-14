import {Injectable} from 'angular2/core'
import {Http} from 'angular2/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import {User} from './user'

@Injectable()
export /**
 * UserService
 */
class UserService {
    constructor(private _http:Http) {}
    
    getUsers():Observable<User[]>{
        return this._http.get('https://api.github.com/users?per_page=100').map(res=>res.json());
    }
    getUserDetail(login:string):Observable<User>{
        console.log(login);
        return  this._http.get('https://api.github.com/users/'+login).map(res=>res.json());
    }
}