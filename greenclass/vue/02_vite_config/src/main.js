import { createApp } from 'vue';
import App from './App.vue';
import AppFooter from './componenet/AppFooter.vue';
import AppHeader from './componenet/AppHeader.vue';
import AppNav from './componenet/AppNav.vue';
import AppView from './componenet/AppView.vue';
import BookComponent from './componenet/BookComponent.vue';


const app = createApp(App);  //인스턴스 생성
app.component('BookComp',BookComponent);  //컴포넌트 등록
app.component('AppHeader',AppHeader);
app.component('AppNav',AppNav);
app.component('AppFooter',AppFooter);
app.component('MainView',AppView);    
app.mount('#app') 