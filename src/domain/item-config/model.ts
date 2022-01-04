import { ModelDescriptor } from '@/shared/types';

import { MODULE_NAME } from './helper';

export default {
  name: MODULE_NAME,
  fields: [
    { name: 'itemName', label: 'itemName', dataType: 'string' },
    { name: 'item', label: 'itemID', dataType: 'string' },
    { name: 'itemType', label: 'itemType', dataType: 'string' },
    { name: 'summary', label: 'summary', dataType: 'string' },
    {
      name: 'status',
      label: '生成状态',
      dataType: 'enum',
      options: [
        { name: 'online', value: '1', label: '已生成' },
        { name: 'offline', value: '0', label: '已生成' },
      ],
    },
  ],
} as ModelDescriptor;
