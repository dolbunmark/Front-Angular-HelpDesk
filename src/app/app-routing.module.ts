import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AllTicketsComponent} from './all-tickets/all-tickets.component';
import {CreateNewTicketComponent} from './create-new-ticket/create-new-ticket.component';
import {EditTicketComponent} from './edit-ticket/edit-ticket.component';
import {TicketOverviewComponent} from './ticket-overview/ticket-overview.component';
import {HistoryComponent} from './history/history.component';
import {CommentComponent} from './comment/comment.component';

const routes: Routes = [{
  path: '', component: LoginComponent
},
  {path: 'tickets', component: AllTicketsComponent},
  {path: 'createNewTicket', component: CreateNewTicketComponent},
  {path: 'editTicket', component: EditTicketComponent},
  {path: 'ticketOverview', component: TicketOverviewComponent , children: [
      {path: 'history', component: HistoryComponent},
      {path: 'comment', component: CommentComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
