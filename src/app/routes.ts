import { EventDetailsComponent } from "./event/event-details.component";
import { EventsListComponent } from "./event/event-list.component";
import { Routes } from '@angular/router'
import { CreateEventComponent } from "./event/create-event.component";
import { Error404Component } from "./errors/404.component";
import { EventRouteActivator } from "./event/event-route-activator.component";
import { EventListResolver } from "./services/event-list-resolver.service";

export const appRoutes = [
    {path:'events/new',component:CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']},
    { path: 'events', component: EventsListComponent, resolve: { events:EventListResolver} },
    {path:'events/:id',component:EventDetailsComponent , canActivate:[EventRouteActivator]},
    {path:'404',component:Error404Component},
    {path:'',redirectTo:'/events',pathMatch:'full'}
];