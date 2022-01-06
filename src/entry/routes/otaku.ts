export default {
  name: 'otaku',
  path: '/otaku',
  component: '@/entry/layouts/admin/index',
  // redirect: '/otaku/animations',
  routes: [
    {
      name: 'animationList',
      path: '/otaku/animations',
      component: '@/domain/animation/views/animation-list',
    },
    {
      name: 'animationCreateForm',
      path: '/otaku/animations/new',
      component: '@/domain/animation/views/animation-form',
    },
    {
      name: 'animationEditForm',
      path: '/otaku/animations/:id/edit',
      component: '@/domain/animation/views/animation-form',
    },
    {
      name: 'animationDetail',
      path: '/otaku/animations/:id',
      component: '@/domain/animation/views/animation-detail',
    },
  ],
};
