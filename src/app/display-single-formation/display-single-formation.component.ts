import { Component } from '@angular/core';
import Formation from '../../models/Formation';
import { DatePipe, NgFor } from '@angular/common';
import { MemberListComponent } from '../member-list/member-list.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationDataService } from '../../services/data/formation-data.service';
import Member from '../../models/Member';
import { MemberDataService } from '../../services/data/member-data.service';
import { EnrollService } from '../../services/enroll.service';
import { FormationListOfMemberComponent } from '../formation-list-of-member/formation-list-of-member.component';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-display-single-formation',
  standalone: true,
  imports: [
    DatePipe,
    MemberListComponent,
    NgFor,
    FormationListOfMemberComponent,
    FormsModule
  ],
  templateUrl: './display-single-formation.component.html',
  styleUrl: './display-single-formation.component.css',
})
export class DisplaySingleFormationComponent {
  formationId: number;
  formation: Formation;
  members: Member[];
  allMembers: Member[];
  selectedMember: number = 0

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formationDataService: FormationDataService,
    private memberDataService: MemberDataService,
    private enrollService: EnrollService
  ) {
    this.route.params.subscribe((s) => (this.formationId = s['id']));
  }

  ngOnInit() {
    this.formationDataService
      .findFormationById(this.formationId)
      .subscribe((data) => (this.formation = data));
    this.memberDataService
      .findAllMembers(undefined)
      .subscribe((data) => (this.allMembers = data));
    this.getMembers();
  }

  getMembers() {
    this.memberDataService
      .findAllMembers(this.formationId)
      .subscribe((data) => (this.members = data));
  }

  addMemberToFormation($event: Event, formationId: number) {
    $event.preventDefault();
    console.log(formationId, ' ', this.selectedMember);
    this.enrollService
      .addMemberToFormation(formationId, this.selectedMember)
      .subscribe(() => this.getMembers());
  }

  goBack() {
    this.router.navigate(['home-page']);
  }
}
