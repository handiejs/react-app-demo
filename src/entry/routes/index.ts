import otaku from './otaku';
import session from './session';
import fintech from './fintech';

export default [
  otaku,
  session,
  fintech,
  {
    name: 'root',
    path: '/',
    redirect: '/otaku/animations',
  },
];
