import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddRecordComponent } from './add-record/add-record.component';
import { PlaygroundComponent } from './playground/playground.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ViewComponentsModule } from './view-components/view-components.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { IncomeTableComponent } from './income-outcome/income-table/income-table.component';
import { OutcomeTableComponent } from './income-outcome/outcome-table/outcome-table.component';
import { MatDialogModule } from '@angular/material/dialog';
import { IncomeDialogComponent } from './income-outcome/income-table/income-dialog/income-dialog.component';
import { OutcomeDialogComponent } from './income-outcome/outcome-table/outcome-dialog/outcome-dialog.component';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddRecordComponent,
    PlaygroundComponent,
    IncomeTableComponent,
    OutcomeTableComponent,
    IncomeDialogComponent,
    OutcomeDialogComponent
  ],
  imports: [
    MatRadioModule,
    MatDialogModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    TableModule,
    InputTextModule,
    FormsModule,
    CoreModule,
    MatSlideToggleModule,
    ViewComponentsModule
  ],
  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { subscriptSizing: 'dynamic' } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
