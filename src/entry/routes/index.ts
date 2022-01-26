import otaku from './otaku';
import session from './session';

export default [
  otaku,
  session,
  {
    name: 'root',
    path: '/',
    redirect: '/otaku/animations',
    meta: { hide: true },
  },
];
