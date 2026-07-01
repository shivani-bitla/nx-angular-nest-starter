import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserPage } from './user/user';

@Component({
  imports: [RouterModule, UserPage ],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'web';
}
