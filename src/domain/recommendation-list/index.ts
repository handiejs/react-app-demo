import { ModuleDescriptor } from '@/shared/types';

import { MODULE_NAME } from './helper';
import model from './model';
import * as actions from './repository';

export default {
  name: MODULE_NAME,
  model,
  actions,
  imports: ['businessSide.services.getTokenList'],
  components: {
    XSelect: 'Select',
    XOption: 'Option',
  },
} as ModuleDescriptor;