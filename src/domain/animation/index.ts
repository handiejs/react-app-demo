import { ModuleDescriptor } from '@/shared/types';

import { MODULE_NAME } from './helper';
import model from './model';
import * as actions from './repository';

export default {
  name: MODULE_NAME,
  model,
  actions,
  components: { XButton: 'Button', XDialog: 'Dialog', Message: true, Wait: true, Popover: true },
} as ModuleDescriptor;
