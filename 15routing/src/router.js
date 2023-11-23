import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue'
import NotFound from './components/nav/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", redirect: "/teams" },
        {
            path: "/teams", component: TeamsList, children: [
                { path: ":teamId", component: TeamMembers, props: true }
            ]
        },
        {
            path: "/users",
            meta: {needsAuth: true},
            component: UsersList,
            beforeEnter(to, from, next) {
                console.log(to, from)
                next()
            }
        },

        { path: "/:notFound(.*)", component: NotFound }
    ],
    linkActiveClass: "active",
    scrollBehavior(_, _2, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        return {
            left: 0,
            top: 0
        }
    }
});

router.beforeEach(function (to, from, next) {
    console.log("Global before Each...")
    console.log(to, from)
    if(to.meta.needsAuth){
        console.log("This needs auth...")
    }
    next();
})

export default router