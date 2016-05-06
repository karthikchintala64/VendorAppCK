import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, Route} from 'angular2/router';
import {HomeComponent} from '../../app/home.component/home.component'
import {AboutComponent} from '../../app/about.component/about.component'
import {EventsComponent} from '../../app/events.component/list-events.component/list-events.component'
import {UsersComponent} from '../../app/users.component/users-list.component/users-list.component'
import {ContactComponent} from '../../app/contact.component/contact.component'

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component/app.component.html',
    styleUrls: ['./app/app.component/app.component.scss'],
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
    { path: '/', component: HomeComponent, as: 'Home',useAsDefault: true },
    { path: '/About', component: AboutComponent, as: 'About' },
    { path: '/Events', component: EventsComponent, as: 'Events' },
    {path:'/Users',component:UsersComponent, as: 'Users'},
    { path: '/Contact', component: ContactComponent, as: 'Contact' }
])
export class AppComponent {

}
