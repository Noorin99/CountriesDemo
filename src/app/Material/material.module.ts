import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  exports: [
    MatCardModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class MaterialModule {}
