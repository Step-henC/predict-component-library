import { Meta, moduleMetadata, StoryFn, StoryObj} from '@storybook/angular';
import { withKnobs, text, select} from '@storybook/addon-knobs';
import { CommonModule } from '@angular/common';
import { PredictButtonComponent } from './predictbutton.component';
import {fn} from '@storybook/test'

export default {
  title: "Predict Button",
  component: PredictButtonComponent,
  withKnobs,

  // decorators: [
  //   moduleMetadata({
  //     declarations: [HeaderComponent],
  //     imports: [CommonModule, HeaderComponent]
  //   })
  // ]
} as Meta<PredictButtonComponent>;

type Story = StoryObj<PredictButtonComponent>


const Template: StoryFn<PredictButtonComponent> = () => ({
  component: PredictButtonComponent,
  selector: `<predict-button [theme]="sports"></predict-button>`

})

const ChangeTheme: StoryFn<PredictButtonComponent> = () => ({
  component: PredictButtonComponent,
  props: {
    theme: "blue",
  },
  selector: `<predict-button [theme]="theme" />` 
})

export const Base = Template.bind({});
export const ButtonBlue = ChangeTheme.bind({});
export const ToggleButton: Story = {

  args: {
    theme: "sports",
    disabled: false,
    label: "Submit",
    handleClick: fn()
  },
  

}
