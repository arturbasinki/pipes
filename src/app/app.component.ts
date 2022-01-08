import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = '';
  date: string = '';
  amount: number = 0;
  height: number = 0;
  miles: number = 0;

  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000,
  };

  onNameChange(data: any) {
    this.name = data.target.value;
  }
  onDateChange(data: any) {
    this.date = data.target.value;
  }
  onAmountChange(data: any) {
    this.amount = parseFloat(data.target.value);
  }
  onHeightChange(data: any) {
    this.height = parseFloat(data.target.value);
  }
  onMilesChange(data: any) {
    this.miles = parseFloat(data.target.value);
  }
}
