import { ModelDescriptor } from '@/shared/types';

import { ItemStatus } from './typing';
import { MODULE_NAME } from './helper';

export default {
  name: MODULE_NAME,
  fields: [
    { name: 'itemName', label: 'itemName', dataType: 'string', required: true },
    { name: 'item', label: 'itemID', dataType: 'string', required: true },
    { name: 'itemType', label: 'itemType', dataType: 'string', required: true },
    { name: 'summary', label: 'summary', dataType: 'string' },
    {
      name: 'status',
      label: '生成状态',
      dataType: 'enum',
      options: [
        { name: 'fresh', value: ItemStatus.Fresh, label: '' },
        { name: 'online', value: ItemStatus.Online, label: '已上线' },
        { name: 'offline', value: ItemStatus.Offline, label: '已下线' },
      ],
    },
  ],
} as ModelDescriptor;
