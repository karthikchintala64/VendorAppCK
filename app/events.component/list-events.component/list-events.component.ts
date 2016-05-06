import {Component,OnInit} from 'angular2/core';
import {Event} from '../Event'
import {EventsService} from '../events.service'
import {EventDetailsComponent} from '../event-details.component/event-details.component'

@Component({
    templateUrl: './app/events.component/list-events.component/list-events.component.html',
    providers: [EventsService],
})

export /**
 * EventsComponent
 */
    class EventsComponent implements OnInit {
    events: Event[] = [];
    constructor(private _eventsService: EventsService) { }

    getEvents() {
        return this._eventsService.getEvents().then((events: Event[]) => this.events = events);
    }
    ngOnInit(){
        this.getEvents();
    }
}
