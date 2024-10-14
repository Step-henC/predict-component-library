import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { TableComponent } from "./PredictTable/table.component";
import { NgClass } from "@angular/common";


@NgModule({
  declarations: [
    TableComponent,
    HeaderComponent,
  ],
  imports: [NgClass], // since components are non-standalone we need this
  exports: [
    TableComponent,
    HeaderComponent,
  ]
})

export class PredictionsComponentLibraryModule {}