import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokeApiRoutingModule } from './poke-api-routing.module';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';
import { MainComponent } from './components/main/main.component';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { ExtractNumberPipe } from './pipes/extract-number.pipe';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    MainComponent,
    ExtractNumberPipe,
  ],
  imports: [
    CommonModule,
    PokeApiRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    HttpClientModule,
    MatIconModule,
    MatTooltipModule
  ],
})
export class PokeApiModule {}
