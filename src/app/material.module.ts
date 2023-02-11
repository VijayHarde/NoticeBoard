import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';



const MaterialComponents = [
  MatSidenavModule,
  MatToolbarModule,
  MatInputModule,
  MatDividerModule,
  MatMenuModule,
  MatIconModule,
  MatListModule,
  MatDialogModule,
  MatStepperModule,
  MatButtonModule,
  MatFormFieldModule,
  MatRadioModule,
  MatSelectModule,
  MatTooltipModule,
  MatGridListModule,
  MatTabsModule,
  MatBadgeModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatPaginatorModule,
  MatIconModule,
  MatSortModule,
  MatExpansionModule,
  MatCardModule,
  MatDatepickerModule,
  MatNativeDateModule,
  
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }