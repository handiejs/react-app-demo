import { AppHelper, ObjectViewContext } from '@/shared/types';
import { pick } from '@/shared/utils';

function makeItemConfigOffline(context: ObjectViewContext, { alert }: AppHelper): void {
  const parent = context.getParent()!;

  parent.deleteOne(
    pick(context.getValue(), ['item', 'itemType']),
    () => parent.reload(),
    message => alert(message),
  );
}

export { makeItemConfigOffline };
