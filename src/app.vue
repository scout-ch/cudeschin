<template>
    <f7-app :params="f7params">
        <f7-view id="main-view" url="/" main />
    </f7-app>
</template>

<script>
import routes from '@/routes';

export default {
    name: 'app',
    data() {
        return {
            f7params: {
                id: 'ch.pbs.cudeschin',
                name: 'Cudeschin',
                theme: 'md',
                routes: routes,
                view: {
                    pushState: true
                }
            }
        };
    }
};
</script>
