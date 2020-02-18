import { action } from '@storybook/addon-actions';
import BDCListButton from '../buttons/BDCListButton.svelte';

export default {
    title: 'BDCListButton',
    component: BDCListButton,
    excludeStories: /.*Data$/
};

export const actionsData = {
    click: action('Button clicked')
};

export const buttonData = {
    title: 'Click Me'
};

export const Normal = () => ({
    Component: BDCListButton,
    props: { ...buttonData },
    on: { ...actionsData }
});