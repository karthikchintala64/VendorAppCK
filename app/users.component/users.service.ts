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
    
    getUsers(sinceValue:number):Observable<User[]>{
        return this._http.get('https://api.github.com/users?per_page=10&since='+sinceValue).map(res=>res.json());
    }
    getUserDetail(login:string):Observable<User>{
        return  this._http.get('https://api.github.com/users/'+login).map(res=>res.json());
    }
    
    getUserRepos(login:string):Observable<User>{
        return this._http.get('https://api.github.com/users/'+login+'/repos').map(res=>res.json());
    }
    getUserFollowers(login:string,perPage:number,pageNumber:number):Observable<User>{
        return this._http.get('https://api.github.com/users/'+login+'/followers?per_page='+perPage+'&page='+pageNumber).map(res=>res.json());
    }
    getUserFollowing(login:string,perPage:number,pageNumber:number):Observable<User>{
        return this._http.get('https://api.github.com/users/'+login+'/following?per_page='+perPage+'&page='+pageNumber).map(res=>res.json()) ;
    }
}