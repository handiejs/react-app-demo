import { ModuleDescriptor } from '@/shared/types';

import { MODULE_NAME } from './helper';
import model from './model';
import * as actions from './repository';
import * as views from './views';

export default {
  name: MODULE_NAME,
  model,
  actions,
  views,
  exports: {
    services: {
      getItemList: actions.getList,
    },
  },
  components: {
    XButton: 'Button',
    XDialog: 'Dialog',
  },
} as ModuleDescriptor;
