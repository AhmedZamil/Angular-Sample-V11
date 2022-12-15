import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";


@Component({
    selector:'event-thumbnail',
    templateUrl:'./event-thumbnail.component.html',
    styles:[`
    .green { color:#003300 !important}
    .red {color: red !important}
    .bold {font-weight:bold;}
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

    getStartTimeClass(){
        const isEarlyStart = this.event && this.event.time == '8:00 am';
        const isLateStart = this.event && this.event.time == '10:00 am';
        if(isEarlyStart)
        {
          return 'green bold'
        }
        if(isLateStart)
        {
            return ' red bold'
        }
        return ' '
    }
}