import { Component } from '@angular/core';
import { FormationListComponent } from '../formation-list/formation-list.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { DisplayMembersComponent } from '../display-members/display-members.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FormationListComponent, DisplayMembersComponent, NgbNavModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  active: number = 1
}
