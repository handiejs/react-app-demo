import httpClient from '@/shared/utils/http';

function login(params: { username: string; password: string }) {
  return httpClient.post('/fintech/api/user/login', params);
}

export { login };
