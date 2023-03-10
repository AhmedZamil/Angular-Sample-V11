import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from '../common/toaster.service';
import { EventService } from '../services/event.service';

@Component({
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventsListComponent implements OnInit {

  public title:string ="Angular Event Coming";

  public events:any[];


  constructor(
    private eventService : EventService ,
    private route:ActivatedRoute,
    private toasterService : ToastrService) { }

  ngOnInit(): void {
     
    this.events = this.route.snapshot.data['events'];
   
     //this.eventService.getEvents().subscribe(events=> {this.events = events});
  }

  handleEventClicked(data):void{
      console.log("Event data :" + data);

  }
  handleThumbnailClick(eventName){
   this.toasterService.warning(eventName);
  }

}
