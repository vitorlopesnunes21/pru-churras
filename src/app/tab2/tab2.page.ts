import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() { }

  valendo = 1;
  pontoUm = 0;
  pontoDois = 0;
  partidaUm = 0;
  partidaDois = 0;

  umPonto() {
    this.valendo = 1;
  }

  truco() {
    this.valendo = 3;
  }

  seis() {
    this.valendo = 6;
  }

  nove() {
    this.valendo = 9;
  }

  doze() {
    this.valendo = 12;
  }

  pontoTimeUmMais() {
    this.pontoUm = this.pontoUm + this.valendo;
    if (this.pontoUm >= 12) {
      alert('TIME 1 GANHOU!!')
      this.valendo = 1;
      this.pontoUm = 0;
      this.pontoDois = 0;
      this.partidaUm = this.partidaUm + 1;
      this.partidaDois =  this.partidaDois;
    }
    this.valendo = 1;
  }

  pontoTimeUmMenos() {
    this.pontoUm = this.pontoUm - this.valendo;
    if(this.pontoUm <= 0){
      this.pontoUm = 0;
    }
    this.valendo = 1;
  }

  pontoTimeDoisMais() {
    this.pontoDois = this.pontoDois + this.valendo;
    if (this.pontoDois >= 12) {
      alert('TIME 2 GANHOU!!')
      this.valendo = 1;
      this.pontoUm = 0;
      this.pontoDois = 0;
      this.partidaUm = this.partidaUm;
      this.partidaDois = this.partidaDois + 1;
    }
    this.valendo = 1;
  }

  pontoTimeDoisMenos() {
    this.pontoDois = this.pontoDois - this.valendo;
    if(this.pontoDois <= 0){
      this.pontoDois = 0;
    }
    this.valendo = 1;
  }



  Limpar() {
    this.valendo = 1;
    this.pontoUm = 0;
    this.pontoDois = 0;
    this.partidaUm = 0;
    this.partidaDois = 0;

    alert('Jogo encerrado')
  }

}
