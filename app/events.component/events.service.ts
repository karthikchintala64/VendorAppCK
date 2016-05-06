import {Injectable} from 'angular2/core';
import {Events} from './mock-events';
import {Event} from './Event'

@Injectable()
/**
 * EventsService
 */
export class EventsService {
        constructor(){}
    getEvents(){
        return Promise.resolve(Events);
    }
}