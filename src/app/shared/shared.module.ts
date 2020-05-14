import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from '../404/nopagefound/nopagefound.component';

@NgModule({
  imports: [RouterModule, CommonModule],
  exports: [
    NopagefoundComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    HeaderComponent,
  ],
  declarations: [
    NopagefoundComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    HeaderComponent,
  ],
})
export class SharedModule {}
