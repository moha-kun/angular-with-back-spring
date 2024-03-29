import { Component, Input } from '@angular/core';
import { EnrollService } from '../../services/enroll.service';
import Member from '../../models/Member';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-formation-list-of-member',
  standalone: true,
  imports: [NgFor],
  templateUrl: './formation-list-of-member.component.html',
  styleUrl: './formation-list-of-member.component.css'
})
export class FormationListOfMemberComponent {
  @Input() members: Member[]
  @Input() formationId: number

  constructor(private enrollService: EnrollService) {}

  removeMember(formationId: number, memberId: number) {
    this.enrollService
      .removeMemberFromFormation(formationId, memberId)
      .subscribe();
  }
}
