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
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import {MatListModule} from '@angular/material/list';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalComponent } from './components/modal/modal.component';
import { TableResumenComponent } from './components/table-resumen/table-resumen.component';

@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    MainComponent,
    ExtractNumberPipe,
    ModalComponent,
    TableResumenComponent,
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
    MatTooltipModule,
    NgxSkeletonLoaderModule,
    MatListModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule

  ],
  entryComponents: [
    ModalComponent
  ]
})
export class PokeApiModule {}
