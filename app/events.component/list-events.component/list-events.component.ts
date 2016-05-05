import {Component,OnInit} from 'angular2/core';
import {Event} from '../Event'
import {EventsService} from '../events.service'
import {ROUTER_DIRECTIVES, RouteConfig, Route,RouteRegistry} from 'angular2/router';
import {EventDetailsComponent} from '../event-details.component/event-details.component'

@Component({
    templateUrl: './app/events.component/list-events.component/list-events.component.html',
    providers: [EventsService],
    directives:[ROUTER_DIRECTIVES]
})

export /**
 * EventsComponent
 */
    class EventsComponent implements OnInit {
        public name:string='';
    public events: Event[] = [];
    constructor(private _eventsService: EventsService,private _registry: RouteRegistry) { }

    getEvents() {
        return this._eventsService.getEvents().then((events: Event[]) => this.events = events);
    }
    ngOnInit(){
        this.getEvents();
    }
    navigateToDetails(){
        
    }
}