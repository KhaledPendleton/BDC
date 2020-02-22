import router from 'page';
import { routeInfo } from '../stores';

const user = {
    ipAddress: '0.0.0.0',
    isAuthenticated: false
};

export default function RouteManager(routes) {
    this.init = () => {
        routes.forEach(route => {
            router(route.path, context => {
                if (route.requiresAuth && !user.isAuthenticated) {
                    alert('Handle auth!');
					router.redirect('/login');
					return;
                }
                
                routeInfo.set({
					params: context.params,
					page: route.component
				});
            });
        });

        router.start();
    }
}