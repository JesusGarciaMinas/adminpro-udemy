import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
})
export class PromesasComponent implements OnInit {
  constructor() {
    this.contarTres()
      .then(() => console.log('Termino'))
      .catch((error) => console.log('Error en la promesa: ', error));
  }

  ngOnInit(): void {}

  contarTres(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador += 1;

        if (contador === 3) {
          reject();
          clearInterval(intervalo);
        }
      }, 1000);
    });
  }
}
