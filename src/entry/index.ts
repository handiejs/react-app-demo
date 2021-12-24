import {
  HistoryLocation,
  LocationDescriptor,
  AppHelper,
  isPlainObject,
  createApp,
} from 'handie-react';
import { history } from 'umi';

import components from '@/shared/components';
import modules from '../domain';
import actions from './actions';
import { setInterceptors } from './aspects';
import theme from './theme';

setInterceptors();

function resolveHistoryParams(location: HistoryLocation): any {
  let resolved: any;

  if (isPlainObject(location)) {
    const { path, query, params } = location as LocationDescriptor;

    resolved = { pathname: path, query, state: params };
  } else {
    resolved = { pathname: location as string };
  }

  return resolved;
}

function createAppHelper(): AppHelper {
  return {
    history: {
      back: history.goBack,
      forward: history.goForward,
      go: history.go,
      push: (location: HistoryLocation) => history.push(resolveHistoryParams(location)),
      replace: (location: HistoryLocation) => history.replace(resolveHistoryParams(location)),
    },
    alert: message => {
      console.log('alert', message);
    },
    confirm: message => {
      console.log('confirm', message);
    },
  };
}

createApp({
  components,
  metadata: { actions, modules },
  creators: { appHelper: createAppHelper },
  theme,
});
