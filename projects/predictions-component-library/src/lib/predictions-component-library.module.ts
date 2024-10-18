import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { TableComponent } from "./PredictTable/table.component";
import { LoadingSpinnerComponent } from "./loadingSpinner/loadingspinner.component";
import { NgClass } from "@angular/common";
import { PredictButtonComponent } from "./button/predictbutton.component";
import { AlertToastComponent } from "./alerttoast/alerttoast.component";


@NgModule({
  declarations: [
    TableComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    PredictButtonComponent,
    AlertToastComponent
  ],
  imports: [NgClass], // since components are non-standalone we need this
  exports: [
    TableComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    PredictButtonComponent,
    AlertToastComponent
  ]
})

export class PredictionsComponentLibraryModule {}