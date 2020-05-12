import { NgModule } from '@angular/core';

import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from '../404/nopagefound/nopagefound.component';

@NgModule({
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
