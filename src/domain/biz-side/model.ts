import { ModelDescriptor } from '@/shared/types';

import { BusinessStatus } from './typing';
import { MODULE_NAME } from './helper';
import { resolveItemListOptions } from './repository';

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
    {
      name: 'itemList',
      label: '推荐列表',
      dataType: 'multi-enum',
      options: resolveItemListOptions,
      required: true,
    },
    { name: 'strategyList', label: '推荐策略', dataType: 'enum', options: [], required: true },
    { name: 'strategys', label: '配置', dataType: 'text' },
    { name: 'shuffleCount', label: '随机数', dataType: 'integer', required: true },
    {
      name: 'status',
      label: '上线状态',
      dataType: 'enum',
      options: [
        { name: 'fresh', value: BusinessStatus.Fresh, label: '' },
        { name: 'online', value: BusinessStatus.Online, label: '已上线' },
        { name: 'offline', value: BusinessStatus.Offline, label: '已下线' },
      ],
    },
  ],
} as ModelDescriptor;
