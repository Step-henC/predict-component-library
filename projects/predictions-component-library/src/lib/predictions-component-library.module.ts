import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { TableComponent } from "./PredictTable/table.component";
import { LoadingSpinnerComponent } from "./loadingSpinner/loadingspinner.component";
import { NgClass } from "@angular/common";
import { PredictButtonComponent } from "./button/predictbutton.component";


@NgModule({
  declarations: [
    TableComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    PredictButtonComponent
  ],
  imports: [NgClass], // since components are non-standalone we need this
  exports: [
    TableComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    PredictButtonComponent
  ]
})

export class PredictionsComponentLibraryModule {}