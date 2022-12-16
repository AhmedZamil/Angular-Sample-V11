import { EventDetailsComponent } from "./event/event-details.component";
import { EventListComponent } from "./event/event-list.component";
import { Route } from "@angular/router";
import { CreateEventComponent } from "./event/create-event.component";
import { Error404Component } from "./errors/404.component";
import { EventRouteActivator } from "./event/event-route-activator.component";

export const appRoutes = [
    {path:'events/new',component:CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']},
    {path:'events', component:EventListComponent},
    {path:'events/:id',component:EventDetailsComponent , canActivate:[EventRouteActivator]},
    {path:'404',component:Error404Component},
    {path:'',redirectTo:'/events',pathMatch:'full'}
];