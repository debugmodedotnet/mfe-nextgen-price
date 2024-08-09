import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridModule } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GridModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'price';

  public gridData: any[] = [
    { id: 1, name: 'John Doe', age: 30, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 25, city: 'San Francisco' },
    { id: 3, name: 'Michael Johnson', age: 35, city: 'Los Angeles' }
  ];
}
