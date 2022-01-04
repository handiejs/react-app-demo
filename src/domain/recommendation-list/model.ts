import { ModelDescriptor } from '@/shared/types';

import { MODULE_NAME } from './helper';

export default {
  name: MODULE_NAME,
  fields: [
    { name: 'title', label: 'title', dataType: 'string' },
    { name: 'score', label: 'score', dataType: 'int' },
    { name: 'recommendId', label: 'recommendId', dataType: 'string' },
    { name: 'ext1', label: 'ext1', dataType: 'string' },
    { name: 'ext2', label: 'ext2', dataType: 'string' },
    { name: 'ext3', label: 'ext3', dataType: 'string' },
  ],
} as ModelDescriptor;
