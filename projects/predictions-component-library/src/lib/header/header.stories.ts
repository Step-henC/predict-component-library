import { Meta, moduleMetadata, StoryFn} from '@storybook/angular';
import { withKnobs, text, select} from '@storybook/addon-knobs';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
export default {
  title: "NBA Header",
  component: HeaderComponent,
  withKnobs,
  // decorators: [
  //   moduleMetadata({
  //     declarations: [HeaderComponent],
  //     imports: [CommonModule, HeaderComponent]
  //   })
  // ]
} as Meta<HeaderComponent>;

const Template: StoryFn<HeaderComponent> = () => ({
  component: HeaderComponent,
  selector: `<predict-header ></predict-header>`

})

const ChangeTheme: StoryFn<HeaderComponent> = () => ({
  component: HeaderComponent,
  props: {
    theme: "blue",
    links: [{href: 'https://nba.com', label: "NBA"}, {href: "https://wnba.com", label: "WNBA"}],
    label: "Sports Predictions",
  },
  selector: `<predict-header [theme]="theme" [links]="links" [label]="label" />` 
})
export const Sports = Template.bind({});
export const SportsBlue = ChangeTheme.bind({});