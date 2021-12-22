import { createApp } from 'handie-react';

import components from '@/shared/components';
import modules from '../domain';
import actions from './actions';
import { setInterceptors } from './aspects';

setInterceptors();

createApp({
  components,
  metadata: { actions,modules },
});
