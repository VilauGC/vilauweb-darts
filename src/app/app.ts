import { Component, signal } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { Options } from './options/options';
import { Footer } from './footer/footer';
import { Header } from './header/header';

@Component({
  imports: [MatProgressBarModule, Options, Footer, Header],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('darts');
}
