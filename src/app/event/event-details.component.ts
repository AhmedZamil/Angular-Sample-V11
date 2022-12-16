import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventService } from "../services/event.service";


@Component({
 templateUrl:'./event-details.component.html',
 styleUrls:['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit{
    
    event:any ;

    constructor(private eventService:EventService,private route:ActivatedRoute){}

    ngOnInit(): void {
        let id :number = Number(this.route.snapshot.paramMap['id']);
  
        this.event = this.eventService.getEvent( +this.route.snapshot.params['id']);
    }

}