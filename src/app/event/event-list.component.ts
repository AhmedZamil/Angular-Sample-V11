import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

declare let toastr
@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  public title:string ="Angular Event Coming";

  public events:any [];


  constructor(private eventService : EventService) { }

  ngOnInit(): void {
     this.events = this.eventService.getEvents();
  }

  handleEventClicked(data):void{
      console.log("Event data :" + data);

  }
  handleThumbnailClick(eventName){
   toastr.success(eventName);
  }

}
