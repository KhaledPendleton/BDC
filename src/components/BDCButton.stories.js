import { action } from '@storybook/addon-actions';
import BDCButton from './BDCButton.svelte';

export default {
    title: 'BDCButton',
    component: BDCButton,
    excludeStories: /.*Data$/,
};

export const actionsData = {
   click: action('Handle click')
};

export const Normal = () => ({
    Component: BDCButton,
    props: {},
    on: {...actionsData}
});