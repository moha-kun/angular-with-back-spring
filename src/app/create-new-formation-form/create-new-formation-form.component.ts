import { Component } from '@angular/core';
import { FormationFormComponent } from '../formation-form/formation-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-new-formation-form',
  standalone: true,
  imports: [FormationFormComponent],
  templateUrl: './create-new-formation-form.component.html',
  styleUrl: './create-new-formation-form.component.css'
})
export class CreateNewFormationFormComponent {

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['home-page'])
  }

}
