'use strict';

import Vue from 'vue';
// import store from "./stores/store";
import Route from "./route";

const Root = Vue.extend({
	// store,
    template: "<router-view></router-view>",
    replace: false

})

Route.start(Root, '#app');
