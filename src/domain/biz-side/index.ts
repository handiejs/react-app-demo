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
  components: {
    XButton: 'Button',
    XDialog: 'Dialog',
    Tabs: true,
    TabPane: true,
    Message: true,
    Wait: true,
    Popover: true,
  },
} as ModuleDescriptor;
