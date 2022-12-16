import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { EventService } from "../services/event.service";

@Injectable({
    providedIn:'root'
})

export class EventRouteActivator implements CanActivate {

    constructor(private router: Router,private eventService: EventService){

    }

    canActivate(route:ActivatedRouteSnapshot){
        const eventExist = !!this.eventService.getEvent(+route.params['id']);
        
        if(!eventExist)
        {
            this.router.navigate(['/404'])
        }

        return eventExist;
    }
}