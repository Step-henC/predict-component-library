import { Meta, moduleMetadata, StoryFn, StoryObj} from '@storybook/angular';
import { withKnobs, text, select} from '@storybook/addon-knobs';
import { AlertToastComponent } from './alerttoast.component';
export default {
  title: "Alert Toast",
  component: AlertToastComponent,

} as Meta<AlertToastComponent>;

type Story = StoryObj<AlertToastComponent>


const Template: StoryFn<AlertToastComponent> = () => ({
  component: AlertToastComponent,
  props: {
    status: 'success',
    message: "Successfully received data"
  },
  selector: `<predict-toast [status]="status" />`

})

const ErrorAlert: StoryFn<AlertToastComponent> = () => ({
  component: AlertToastComponent,
  props: {
    status: "error",
  },
  selector: `<predict-toast [status]="status" />` 
})

export const SuccessToast = Template.bind({});
export const ErrorToast = ErrorAlert.bind({});
export const CustomToast: Story = {

  args: {
    status: "error",
    message: "Failure to retrieve Data. Please try again later. Try to keep messages short because it will cut off if too long. This is an example of extremely long message",
    timeout: 0
  }

}
