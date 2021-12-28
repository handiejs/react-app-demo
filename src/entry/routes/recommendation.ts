export default {
  name: 'recommendation',
  path: '/recommendation',
  component: '@/entry/layouts/admin/index',
  // redirect: '/otaku/animations',
  routes: [
    {
      name: 'animationList',
      path: '/recommendation/biz-sides',
      component: '@/domain/biz-side/views/biz-side-list/index',
    },
    {
      name: 'animationCreateForm',
      path: '/otaku/animations/new',
      component: '@/domain/animation/views/animation-form/index',
    },
  ],
};
