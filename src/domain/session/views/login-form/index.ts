import { ObjectViewContextDescriptor } from '@/shared/types';
import { createView } from '@/shared/utils';

import context from '../../context';
import LoginFormViewWidget from './LoginForm';

export default createView(context, {
  name: 'LoginFormView',
  category: 'object',
  widget: LoginFormViewWidget,
  config: { formControlLabelWidth: 80 },
  fields: [
    { name: 'username', label: '用户名', dataType: 'string', required: true },
    { name: 'password', label: '密码', dataType: 'string', required: true },
  ],
  validate: 'submit',
} as ObjectViewContextDescriptor);
