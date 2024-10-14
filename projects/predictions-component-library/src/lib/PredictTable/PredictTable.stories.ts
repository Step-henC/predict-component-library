import { Meta, moduleMetadata, StoryFn, StoryObj} from '@storybook/angular';
import { withKnobs, text, select} from '@storybook/addon-knobs';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
export default {
  title: "Basketball Prediction Table",
  component: TableComponent,
  // decorators: [
  //   moduleMetadata({
  //     declarations: [HeaderComponent],
  //     imports: [CommonModule, HeaderComponent]
  //   })
  // ]
} as Meta<TableComponent>;

type Story = StoryObj<TableComponent>

export const Base: Story = {
  args: {
    columns: [{displayName: "Player Name", selector: "playerName"}, {displayName: "Last Season Points", selector: "lastSeasonPoints"}, {displayName: "Predicted Points", selector: "predictedPoints"}, {selector: "predictedRebounds", displayName: "Predicted Rebounds"}, {selector: "predictedAssists", displayName: "Predicted Assists"}, {selector: 'id', displayName: "Player ID"}],
    tableData: [{id: 1, playerName: "No Data", lastSeasonPoints: 0, predictedPoints: 0, predictedRebounds: 0, predictedAssists: 0}, {id: 2, playerName: "No Data", lastSeasonPoints: 0, predictedPoints: 0, predictedRebounds: 0, predictedAssists: 0}]

  }
}
const Template: StoryFn<TableComponent> = () => ({
  component: TableComponent,
  selector: `<predict-table />`

})


export const Default = Template.bind({});


export const BlueTheme: Story = {
  args: {
    columns: [{displayName: "Player Name", selector: "playerName"}, {displayName: "Last Season Points", selector: "lastSeasonPoints"}, {displayName: "Predicted Points", selector: "predictedPoints"}, {selector: "predictedRebounds", displayName: "Predicted Rebounds"}, {selector: "predictedAssists", displayName: "Predicted Assists"}, {selector: 'id', displayName: "Player ID"}],
    tableData: [{id: 1, playerName: "No Data", lastSeasonPoints: 0, predictedPoints: 0, predictedRebounds: 0, predictedAssists: 0}, {id: 2, playerName: "No Data", lastSeasonPoints: 0, predictedPoints: 0, predictedRebounds: 0, predictedAssists: 0}],
    theme: "blue"
  }
}