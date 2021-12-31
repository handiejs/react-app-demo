import { ModelDescriptor } from '@/shared/types';

import { MODULE_NAME } from './helper';

export default {
  name: MODULE_NAME,
  fields: [
    { name: 'id', label: '推荐业务ID', dataType: 'string' },
    { name: 'name', label: '推荐业务名称', dataType: 'string' },
    {
      name: 'interfaceCategory',
      label: '接口类别',
      dataType: 'enum',
      options: [{ name: 'holy', value: 'holy', label: 'Holy' }],
    },
    { name: 'recommendedList', label: '推荐列表', dataType: 'enum', options: [] },
    { name: 'recommendedStrategies', label: '推荐策略', dataType: 'enum', options: [] },
    { name: 'random', label: '随机数', dataType: 'int' },
    {
      name: 'status',
      label: '上线状态',
      dataType: 'enum',
      options: [
        { name: 'online', value: 'online', label: '已上线' },
        { name: 'offline', value: 'offline', label: '已下线' },
      ],
    },
  ],
} as ModelDescriptor;
