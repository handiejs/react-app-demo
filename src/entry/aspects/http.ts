import { AxiosResponse } from 'axios';

import httpClient, { normalizeResponse } from '@/shared/utils/http';

function setInterceptors(): void {
  (httpClient.interceptors.response as any).use((res: AxiosResponse) => normalizeResponse(res));
}

export { setInterceptors };
