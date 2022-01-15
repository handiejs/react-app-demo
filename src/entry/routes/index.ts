import otaku from './otaku';
import session from './session';

export default [
  otaku,
  session,
  {
    name: 'root',
    path: '/',
    meta: { hide: true },
    redirect: '/otaku/animations',
  },
];
