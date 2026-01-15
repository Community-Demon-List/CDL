import routes from './routes.js';

export const store = Vue.reactive({
    dark: JSON.parse(localStorage.getItem('dark')) || false,
    toggleDark() {
        this.dark = !this.dark;
        localStorage.setItem('dark', JSON.stringify(this.dark));
    },
});

const app = Vue.createApp({
    data: () => ({ store }),
});
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

app.use(router);

app.mount('#app');

function handleDiscordLogin() {
    const urlParams = new URLSearchParams(window.location.hash.split('?')[1]);
    const code = urlParams.get('code');

    if (code) {
        console.log(code);
        window.history.replaceState({}, document.title, window.location.pathname + window.location.hash.split('?')[0]);
    }
}

window.onload = handleDiscordLogin;
