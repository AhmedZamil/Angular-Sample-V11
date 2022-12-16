import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EventDetailsComponent } from './event/event-details.component';
import { EventsListComponent } from './event/event-list.component';
import { EventThumbnailComponent } from './event/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';
import { CreateEventComponent } from './event/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventListResolver } from './services/event-list-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavbarComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide:"canDeactivateCreateEvent",useValue:checkDirtyState}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty)
  {
    return window.confirm("You have not saved event.Do you really want to go?")
  }
  else
  {
    return true;
  }
}
