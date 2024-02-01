import { Country } from './../../interfaces/country.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: [
    `img {
      width: 25px;
    }`
  ]
})
export class CountryTableComponent {

  @Input()
  public countries: Country[] = [];
}
