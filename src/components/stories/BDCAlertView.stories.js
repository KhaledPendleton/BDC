import { action } from '@storybook/addon-actions';
import BDCAlertView from '../views/BDCAlertView.svelte';

export default {
    title: 'BDCAlertView',
    component: BDCAlertView,
    excludeStories: /.*Data$/
};

export const actionsData = {
    'action-btn-click': action('Action button clicked'),
    'bg-click': action('Background clicked'),
    'escape': action('Escape pressed')
};

export const alertData = {
    visible: true,
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo non consequuntur eum minus quia modi aliquid repellat!"
};

export const Normal = () => ({
    Component: BDCAlertView,
    props: { ...alertData },
    on: { ...actionsData }
});