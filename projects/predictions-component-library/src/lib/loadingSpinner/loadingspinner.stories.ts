import { Meta, moduleMetadata, StoryFn, StoryObj} from '@storybook/angular';
import { withKnobs, text, select} from '@storybook/addon-knobs';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loadingspinner.component';
export default {
  title: "Loading Spinner",
  component: LoadingSpinnerComponent,
  withKnobs,
  // decorators: [
  //   moduleMetadata({
  //     declarations: [HeaderComponent],
  //     imports: [CommonModule, HeaderComponent]
  //   })
  // ]
} as Meta<LoadingSpinnerComponent>;

type Story = StoryObj<LoadingSpinnerComponent>


const Template: StoryFn<LoadingSpinnerComponent> = () => ({
  component: LoadingSpinnerComponent,
  selector: `<predict-spinner [theme]="sports"></predict-spinner>`

})

const ChangeTheme: StoryFn<LoadingSpinnerComponent> = () => ({
  component: LoadingSpinnerComponent,
  props: {
    theme: "blue",
  },
  selector: `<predict-spinner [theme]="theme" />` 
})

export const Base = Template.bind({});
export const SpinnerBlue = ChangeTheme.bind({});
export const ToggleLoad: Story = {

  args: {
    theme: "sports",
    isLoading: true
  }

}
