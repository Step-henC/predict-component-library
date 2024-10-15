import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { TableComponent } from "./PredictTable/table.component";
import { LoadingSpinnerComponent } from "./loadingSpinner/loadingspinner.component";
import { NgClass } from "@angular/common";


@NgModule({
  declarations: [
    TableComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
  ],
  imports: [NgClass], // since components are non-standalone we need this
  exports: [
    TableComponent,
    HeaderComponent,
    LoadingSpinnerComponent
  ]
})

export class PredictionsComponentLibraryModule {}