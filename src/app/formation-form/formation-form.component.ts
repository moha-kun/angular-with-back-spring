import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { FormationDataService } from '../../services/data/formation-data.service';
import { Router } from '@angular/router';
import Formation from '../../models/Formation';

@Component({
  selector: 'app-formation-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, DatePipe],
  templateUrl: './formation-form.component.html',
  styleUrl: './formation-form.component.css',
})
export class FormationFormComponent {
  @Input() formation: Formation;
  @Input({ required: true }) action: string;

  constructor(private dataService: FormationDataService, private router: Router) {}

  ngOnInit() {
    if (this.action === 'create') {
      this.formation = {
        id: 0,
        title: '',
        description: '',
        dateDebut: new Date(),
        dateFin: new Date()
      }
    }
  }

  onSubmit(): void {
    let formation = {
      id: this.formation.id,
      title: this.formation.title,
      description: this.formation.description,
      dateDebut: this.formation.dateDebut,
      dateFin: this.formation.dateFin,
    };

    if (this.action === 'create') {
      this.dataService
        .createFormation(formation)
        .subscribe(() => this.success());
    } else {
      this.dataService
        .updateFormation(formation.id, formation)
        .subscribe(() => this.success());
    }

  }

  success(): void {
    this.formation.title = '';
    this.formation.description = '';
    this.formation.dateDebut = new Date();
    this.formation.dateFin = new Date();
    this.router.navigateByUrl('home-page');
  }

  error() {
    console.log('something go wrong');
  }
}
