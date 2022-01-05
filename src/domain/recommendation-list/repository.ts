import { Pagination, ResponseResult } from '@/shared/types';
import httpClient from '@/shared/utils/http';

import { RecommendedRecord } from './typing';

async function getList(
  condition: Pagination & RecommendedRecord & { bizId: string; token: string },
): Promise<ResponseResult<RecommendedRecord[]>> {
  const { bizId, token, pageSize, pageNum, ...params } = condition;

  return httpClient
    .post<RecommendedRecord[]>(
      '/fintech/api/recommend/get',
      { ...params, pagingParam: { pageSize, pageNum } },
      { headers: { 'x-biz-id': bizId, 'x-biz-token': token } },
    )
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
