import { Component, Input } from '@angular/core';
import { MemberDataService } from '../../services/data/member-data.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css'
})
export class MemberListComponent {
  @Input({required: false}) formationId: number
  members: any;

  constructor(private dataService: MemberDataService, private router: Router) {}

  ngOnInit() {
    this.getMembers(this.formationId)
  }

  getMembers(id: number | undefined) {
    this.dataService.findAllMembers(id).subscribe((data) => {
      this.members = data;
    });
  }

  deleteMember(id: number) {
    this.dataService.deleteMember(id).subscribe(() => this.getMembers(this.formationId));
  }

  updateMember(id: number) {
    this.router.navigate(['update-member', id]);
  }
}
