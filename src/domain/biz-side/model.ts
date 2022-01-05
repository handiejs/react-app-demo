import { ModelDescriptor } from '@/shared/types';

import { BusinessStatus } from './typing';
import { MODULE_NAME } from './helper';

export default {
  name: MODULE_NAME,
  fields: [
    { name: 'bizId', label: '推荐业务ID', dataType: 'string', required: true },
    { name: 'token', label: '推荐业务名称', dataType: 'string', required: true },
    {
      name: 'interfaceName',
      label: '接口类别',
      dataType: 'enum',
      options: [
        { name: 'u2i', value: 'u2i', label: 'u2i' },
        { name: 'i2i', value: 'i2i', label: 'i2i' },
      ],
      required: true,
    },
    { name: 'itemList', label: '推荐列表', dataType: 'enum', options: [], required: true },
    { name: 'strategyList', label: '推荐策略', dataType: 'enum', options: [], required: true },
    { name: 'shuffleCount', label: '随机数', dataType: 'int', required: true },
    {
      name: 'status',
      label: '上线状态',
      dataType: 'enum',
      options: [
        { name: 'online', value: BusinessStatus.Online, label: '已上线' },
        { name: 'offline', value: BusinessStatus.Offline, label: '已下线' },
      ],
    },
  ],
} as ModelDescriptor;
