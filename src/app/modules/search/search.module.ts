import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { TableComponent } from './components/table/table.component';
import { CoinPipe } from './pipes/coin.pipe';
import { ItemTableComponent } from './components/item-table/item-table.component';
import { QualitifyPipe } from './pipes/qualitify.pipe';
import { MarketComponent } from './components/market/market.component';
import { ItemSearchComponent } from './components/item-search/item-search.component';

@NgModule({
  declarations: [
    TableComponent,
    ItemSearchComponent,
    ItemTableComponent,
    MarketComponent,
    CoinPipe,
    QualitifyPipe,
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
  ]
})
export class SearchModule { }
