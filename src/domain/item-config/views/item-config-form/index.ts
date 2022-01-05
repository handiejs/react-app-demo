import { ListViewContext, ObjectViewContextDescriptor } from '@/shared/types';

import ItemConfigFormDialogViewWidget from './ItemConfigFormDialog';

function getItemConfigFormDescriptor(
  listViewContext: ListViewContext,
): ObjectViewContextDescriptor {
  return {
    name: 'ItemConfigFormView',
    category: 'object',
    widget: ItemConfigFormDialogViewWidget,
    config: { formControlLabelWidth: 120 },
    fields: ['item', 'itemType', 'summary'],
    initialValue: { summary: '' },
    parent: listViewContext,
    validate: 'submit',
  };
}

export default getItemConfigFormDescriptor;
