import { AppHelper, ObjectViewContext } from '@/shared/types';
import { pick } from '@/shared/utils';

import { BusinessStatus } from '../../typing';

function makeBizTokenOnlineOrOffline(
  status: BusinessStatus,
  context: ObjectViewContext,
  { alert }: AppHelper,
): void {
  context.getModuleContext().execute(
    status === BusinessStatus.Online ? 'makeOnline' : 'makeOffline',
    pick(context.getValue(), ['bizId', 'token']),
    () => context.getParent()!.reload(),
    message => alert(message),
  );
}

export { makeBizTokenOnlineOrOffline };
