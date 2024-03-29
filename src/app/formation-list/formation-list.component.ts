import { Component } from '@angular/core';
import { FormationDataService } from '../../services/data/formation-data.service';
import { DatePipe, NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formation-list',
  standalone: true,
  imports: [NgFor, DatePipe],
  templateUrl: './formation-list.component.html',
  styleUrl: './formation-list.component.css',
})
export class FormationListComponent {
  formations: any;

  constructor(private dataService: FormationDataService, private router: Router) {}

  ngOnInit() {
    this.getFormations()
  }

  getFormations() {
    this.dataService.findAllFormation().subscribe((data) => {
      this.formations = data
    });
  }

  deleteFormation(id: number) {
    this.dataService.deleteFormation(id).subscribe(() => this.getFormations());
  }

  createNewFormation() {
    this.router.navigateByUrl('create-new-formation');
  }

  updateFormation(id: number) {
    this.router.navigate(['update-formation', id]);
  }

  displaySingleFormation(id: number) {
    this.router.navigate(['display-single-formation', id]);
  }
}
