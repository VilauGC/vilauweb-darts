import { Component, signal } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { Options } from './options/options';


@Component({
  imports: [MatProgressBarModule, Options],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('darts');
}
