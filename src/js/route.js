"use strict";
import Vue from "vue";
import VueRouter from "vue-router";

import App from "./view/app.vue";

// 使用插件
Vue.use(VueRouter);
let router = new VueRouter();

/**
 * 定义路由
 */
router.map({
    "/": {
        name: "home",
        component: App
    }
});

router.redirect({
    "*": "/"
})

export default router;