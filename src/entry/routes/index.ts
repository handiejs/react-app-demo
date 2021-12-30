import otaku from './otaku';
import fintech from './fintech';

export default [
  otaku,
  fintech,
  {
    name: 'root',
    path: '/',
    redirect: '/otaku/animations',
  },
];
