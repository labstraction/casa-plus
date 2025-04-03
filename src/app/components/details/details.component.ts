import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../services/housing/housing.service';
import { HousingLocation } from '../../model/housinglocation';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  casettaService: HousingService = inject(HousingService);
  
  casetta: HousingLocation | undefined;
  constructor() {
      const housingLocationId = Number(this.route.snapshot.params['id']);
      this.casetta = this.casettaService.getHousingLocationById(housingLocationId);
  }
}
