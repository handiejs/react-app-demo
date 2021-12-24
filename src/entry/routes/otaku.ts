export default {
  name: 'otaku',
  path: '/otaku',
  component: '@/entry/layouts/admin/index',
  // redirect: '/otaku/animations',
  routes: [
    {
      name: 'animationList',
      path: '/otaku/animations',
      component: '@/domain/animation/views/animation-list/index',
    },
    {
      name: 'animationCreateForm',
      path: '/otaku/animations/new',
      component: '@/domain/animation/views/animation-form/index',
    },
  ],
};
