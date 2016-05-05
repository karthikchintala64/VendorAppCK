import {Injectable} from 'angular2/core';
import {Events} from './mock-events';

@Injectable()
/**
 * EventsService
 */
export class EventsService {
        
    getEvents(){
        return Promise.resolve(Events);
    }
}