import type { Meta, StoryObj } from '@storybook/vue3';
import Example from './Example.vue';

const meta: Meta<typeof Example> = {
  title: 'Example',
  component: Example,
};

export const Default: StoryObj<typeof meta> = {};

export default meta;
