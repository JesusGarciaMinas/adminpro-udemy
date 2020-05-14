import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
})
export class AccountSettingsComponent implements OnInit {
  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {
    this.colocarCheck();
  }

  cambiarColor(tema: string, link: any) {
    this.aplicarCheck(link);
    this.settingsService.aplicarTema(tema);
  }

  aplicarCheck(link: any) {
    const SELECTORES: any = document.getElementsByClassName('selector');
    for (const ref of SELECTORES) {
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }

  colocarCheck() {
    const SELECTORES: any = document.getElementsByClassName('selector');
    for (const ref of SELECTORES) {
      if (
        ref.getAttribute('data-theme') === this.settingsService.ajustes.tema
      ) {
        ref.classList.add('working');
        break;
      }
    }
  }
}
