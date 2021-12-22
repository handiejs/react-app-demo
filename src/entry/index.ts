import { createApp } from 'handie-react';

import components from '@/shared/components';
import modules from '../domain';
import actions from './actions';
import { setInterceptors } from './aspects';
import theme from './theme';

setInterceptors();

createApp({
  components,
  metadata: { actions, modules },
  theme,
});
