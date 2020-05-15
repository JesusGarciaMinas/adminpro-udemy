import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
})
export class RxjsComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor() {
    this.subscription = this.returbObservable().subscribe(
      (numero) => console.log(numero),
      (error) => console.error(error),
      () => console.log('El observador terminó')
    );
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  returbObservable(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador += 1;
        const salida = {
          valor: contador,
        };
        observer.next(salida);
        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }
      }, 1000);
    }).pipe(
      map((respuesta) => respuesta.valor),
      filter((respuesta, index) => respuesta % 2 === 1)
    );
  }
}
