import Vue from 'vue'
import App from './App.vue'
import InputText from './DesignSystem/InputText';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faQuestionCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import UUID from "vue-uuid";

library.add(faQuestionCircle);
library.add(faExclamationTriangle);

Vue.config.productionTip = false
Vue.component("InputText", InputText);
Vue.component("FontAwesomeIcon", FontAwesomeIcon);

Vue.use(UUID);

new Vue({
  render: h => h(App),
}).$mount('#app')
