import { history } from 'umi';
import { HistoryLocation, AppHelper, createApp } from 'handie-react-starter-antd';

import { Dialog } from '@/shared/components/control';
import components from '@/shared/components';
import modules from '../domain';
import actions from './actions';
import { getLocation, resolveHistoryParams } from './adapters';
import { setInterceptors } from './aspects';
import theme from './theme';

setInterceptors();

function createAppHelper(): AppHelper {
  return {
    history: {
      getLocation,
      back: history.goBack,
      forward: history.goForward,
      go: history.go,
      push: (location: HistoryLocation) => history.push(resolveHistoryParams(location)),
      replace: (location: HistoryLocation) => history.replace(resolveHistoryParams(location)),
    },
    alert: (message, callback) => Dialog.alert(message, callback as any),
    confirm: (message, ...args: any[]) => Dialog.confirm(message, ...args),
  };
}

createApp({
  components,
  metadata: { actions, modules },
  creators: { appHelper: createAppHelper },
  theme,
});
