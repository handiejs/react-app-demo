import otaku from './otaku';
import recommendation from './recommendation';

export default [
  otaku,
  recommendation,
  {
    name: 'root',
    path: '/',
    redirect: '/otaku/animations',
  },
];
