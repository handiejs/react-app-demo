import { Pagination, ResponseResult } from '@/shared/types';
import httpClient from '@/shared/utils/http';

import { RecommendedRecord } from './typing';

async function getList(
  condition: Pagination & RecommendedRecord,
): Promise<ResponseResult<RecommendedRecord[]>> {
  return httpClient
    .post<RecommendedRecord[]>('/fintech/api/recommend/get', condition, {
      headers: { 'x-biz-id': 'yqzx', 'x-biz-token': '108_feed' },
    })
    .then(result => {
      return result.success
        ? {
            ...result,
            data: result.data.map(r => ({ ...r, id: r.recommendId })),
          }
        : result;
    });
}

export { getList };
