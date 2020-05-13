import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
})
export class IncrementadorComponent implements OnInit {
  @Input() porcentaje = 50;
  @Input() leyenda = 'Leyenda';

  @Output() cambioValor: EventEmitter<number> = new EventEmitter<number>();

  @ViewChild('progreso', { static: false }) progreso: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  cambiarValor(valor: number) {
    this.porcentaje += valor;

    if (this.porcentaje > 100) {
      this.porcentaje = 100;
    }

    if (this.porcentaje < 0) {
      this.porcentaje = 0;
    }

    this.cambioValor.emit(this.porcentaje);

    this.progreso.nativeElement.focus();
  }

  onChange(event: number) {
    // const elementHTML: any = document.getElementsByName('porcentaje')[0];
    if (event > 100) {
      this.porcentaje = 100;
    }

    if (event < 0) {
      this.porcentaje = 0;
    }

    // elementHTML.value = this.porcentaje;
    this.progreso.nativeElement.value = this.porcentaje;

    this.cambioValor.emit(event);
  }
}
