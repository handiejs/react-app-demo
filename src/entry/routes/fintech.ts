export default {
  name: 'fintech',
  path: '/fintech',
  component: '@/entry/layouts/fintech/index',
  // redirect: '/fintech/recommendation',
  routes: [
    {
      name: 'recommendation',
      text: '推荐页',
      path: '/fintech/recommendation',
      // redirect: '/fintech/recommendation/list',
      routes: [
        {
          name: 'recommendationList',
          text: '推荐列表',
          path: '/fintech/recommendation/list',
          component: '@/domain/recommendation/views/recommendation-list/index',
          hideSidebar: true,
        },
        {
          name: 'specificRecommendation',
          text: '指定推荐',
          path: '/fintech/recommendation/specific',
          routes: [
            {
              name: 'bizSides',
              text: '业务方配置',
              path: '/fintech/recommendation/specific/biz-sides',
              component: '@/domain/biz-side/views/biz-side-list/index',
            },
            {
              name: 'recommendationCreateForm',
              path: '/otaku/animations/new',
              component: '@/domain/animation/views/animation-form/index',
            },
          ],
        },
      ],
    },
  ],
};
