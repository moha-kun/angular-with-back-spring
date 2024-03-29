import { Component } from '@angular/core';
import { MemberDataService } from '../../services/data/member-data.service';
import Member from '../../models/Member';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-enroll-member',
  standalone: true,
  imports: [NgFor],
  templateUrl: './enroll-member.component.html',
  styleUrl: './enroll-member.component.css',
})
export class EnrollMemberComponent {
  members: Member[];

  constructor(private memberDataService: MemberDataService) {}

  ngOnInit() {
    this.memberDataService
      .findAllMembers(undefined)
      .subscribe((data) => (this.members = data));
  }
}
