export default {
  name: 'fintech',
  path: '/fintech',
  component: '@/entry/layouts/fintech',
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
          component: '@/domain/recommendation/views/recommendation-list',
          hideSidebar: true,
        },
        {
          name: 'specificRecommendation',
          text: '指定推荐',
          path: '/fintech/recommendation/:specific',
          routes: [
            {
              name: 'bizSides',
              text: '业务方配置',
              path: '/fintech/recommendation/:specific/biz-sides',
              component: '@/domain/biz-side/views/biz-side-list',
            },
            {
              name: 'bizConfig',
              text: '推荐业务配置',
              path: '/fintech/recommendation/:specific/biz-config',
              routes: [
                {
                  name: 'itemConfig',
                  text: '推荐内容配置',
                  path: '/fintech/recommendation/:specific/biz-config/item-list',
                  component: '@/domain/item-config/views/item-config-list',
                },
                {
                  name: 'recommendedList',
                  text: '推荐列表查询',
                  path: '/fintech/recommendation/:specific/biz-config/recommended-list',
                  component: '@/domain/recommendation-list/views/recommendation-list-list',
                },
              ],
            },
            {
              name: 'recommendationCreateForm',
              path: '/otaku/animations/new',
              component: '@/domain/animation/views/animation-form',
            },
          ],
        },
      ],
    },
  ],
};
