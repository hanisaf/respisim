import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { VentilatorComponent } from './ventilator/ventilator.component';
import {MatSidenavModule, MatTabsModule, MatCardModule, MatRadioModule, MatButtonModule, MatListModule, MatDialogModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    VentilatorComponent
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    NoopAnimationsModule,
    MatTabsModule,
    MatExpansionModule, 
    MatCardModule,
    MatButtonModule,
    MatListModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
