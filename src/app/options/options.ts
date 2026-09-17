import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';

import calcule from "../../../public/darts_final_simplu.json";
import {MatIconModule} from '@angular/material/icon';

interface Calcule {
  id: string, 
  nr1: number,
  nr2: number,
  suma: number
}

@Component({
  imports: [MatCheckboxModule, MatButtonModule, MatIconModule],
  selector: 'app-options',
  styleUrl: './options.css',
  templateUrl: './options.html',
})
export class Options implements OnInit{

  @ViewChild('answerInput') answerInput!: ElementRef<HTMLInputElement>;

  calcule: Calcule[] = [];
  nrGenerat: number = 0;
  nr1: number = 0;
  nr2: number = 0;
  suma: number = 0;

  ngOnInit(): void {
    this.calcule = calcule;
  }

  getRandomInt(): void {
    this.nrGenerat = Math.floor(Math.random() * this.calcule.length);

    this.nr1 = this.calcule[this.nrGenerat-1].nr1;
    this.nr2 = this.calcule[this.nrGenerat-1].nr2;
    this.suma = this.calcule[this.nrGenerat -1].suma;


    // golim inputul si dam focus inapoi, pentru urmatoarea incercare
    if (this.answerInput) {
      this.answerInput.nativeElement.value = '';
      this.answerInput.nativeElement.focus();
    }
    
  }

  verificaRaspuns(valoare: string) {
    const raspuns = Number(valoare);
    const sumaCorecta = this.suma;

    if (raspuns === sumaCorecta) {
      this.getRandomInt();
    }
  }


}
