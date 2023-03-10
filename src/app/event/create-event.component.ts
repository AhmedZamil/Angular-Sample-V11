import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  template: `
    <h1>New Event</h1>
    <hr>
    <div class="col-md-6">
      <h3>[Create Event Form will go here]</h3>
      <br/>
      <br/>
      <button type="submit" class="btn btn-primary">Save</button>
      <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>
    </div>
  `,
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  public isDirty:boolean = true;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  cancel(){
    this.router.navigate(['/events']);
  }

}
