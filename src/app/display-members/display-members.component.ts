import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MemberListComponent } from '../member-list/member-list.component';

@Component({
  selector: 'app-display-members',
  standalone: true,
  imports: [MemberListComponent],
  templateUrl: './display-members.component.html',
  styleUrl: './display-members.component.css'
})
export class DisplayMembersComponent {

  constructor(private router: Router) {}

  createNewMember() {
    this.router.navigateByUrl('create-new-member');
  }
}
