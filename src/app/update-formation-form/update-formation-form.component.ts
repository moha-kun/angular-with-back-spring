import { Component } from '@angular/core';
import { FormationFormComponent } from '../formation-form/formation-form.component';
import { ActivatedRoute, Router } from '@angular/router';
import Formation from '../../models/Formation';
import { FormationDataService } from '../../services/data/formation-data.service';

@Component({
  selector: 'app-update-formation-form',
  standalone: true,
  imports: [FormationFormComponent],
  templateUrl: './update-formation-form.component.html',
  styleUrl: './update-formation-form.component.css',
})
export class UpdateFormationFormComponent {
  formationId: number;
  formation: Formation;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: FormationDataService
  ) {
    this.route.params.subscribe((s) => (this.formationId = s['id']));
    dataService
      .findFormationById(this.formationId)
      .subscribe((data) => (this.formation = data));
  }

  goBack() {
    this.router.navigate(['home-page'])
  }
}
