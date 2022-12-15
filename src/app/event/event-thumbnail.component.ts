import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";


@Component({
    selector:'event-thumbnail',
    templateUrl:'./event-thumbnail.component.html',
    styles:[`
    .thumbnail { min-height: 210px!important;}
    .pad-left { margin-left:10px; }
    .well div {color: #bbb}

    `]
})

export class EventThumbnailComponent implements OnInit{
    @Input() event:any;
    @Output() eventClicked = new EventEmitter();

    private count = 1001;
    constructor(){
    }

    ngOnInit(): void {      
    }

    handleClickMe():void{
        this.eventClicked.emit("Event emits information");
    }

    logSomething():void{
      console.log("Child Component Data :" + this.count) ;

    }
}