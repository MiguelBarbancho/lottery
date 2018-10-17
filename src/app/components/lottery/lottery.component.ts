import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lottery',
  templateUrl: './lottery.component.html',
  styleUrls: ['./lottery.component.css']
})
export class LotteryComponent implements OnInit {
  public numbers: number[];
  public countbet;
  public bet: number;
  public totalBet: number;
  public result: number;
  public endGame: boolean;
  public win: boolean;
  public prize: number;

  constructor() {
    this.numbers = [];
    this.countbet = 0;
    this.totalBet = 0;
    this.result = 0;
    this.endGame = false;
    this.win = false;
    this.prize = 0;
  }

  ngOnInit() {

  }

  reset() {
    this.numbers = [];
    console.log(this.numbers);
    this.endGame = false;
  }


  getNumber(num) {

    const idx = this.numbers.indexOf(num);
    if (idx === -1 && this.numbers.length < 10) {
          this.numbers.push(num);
          this.countbet = this.countbet + 1;
          console.log(this.numbers);
          console.log(this.countbet);
        } else {
          console.log('numero maximo de apuesta alcanzado o apuesta ya realizada');
        }
    }


  getBet(bet) {
    if (bet >= 5) {
      this.bet = bet;
      console.log(this.bet);
    } else {
      console.log('Apuesta minima 5');
      this.bet = 0;
    }
    this.totalBet = this.bet * this.countbet;
  }

  goBet() {
    if (this.numbers.length >= 1) {
      this.result = Math.floor(Math.random() * (11 - 1) + 1);
      console.log(this.result);

      this.numbers.forEach(number => {
        if (number === this.result) {
          console.log('GANASTE');
          this.endGame = true;
          this.win = true;
          this.prize = this.totalBet * (1.5);
          console.log(this.prize);

        } else {
          console.log('PERDISTE');
          this.endGame = true;
        }
      });
    }

  }
}
