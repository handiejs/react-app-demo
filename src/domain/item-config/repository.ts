import { Pagination, ResponseResult } from '@/shared/types';
import httpClient from '@/shared/utils/http';

import { RecommendedItem } from './typing';

async function getList(
  condition: Pagination & RecommendedItem,
): Promise<ResponseResult<RecommendedItem[]>> {
  return httpClient
    .post<RecommendedItem[]>('/fintech/api/manage/config/list/items', condition)
    .then(result => {
      return result.success
        ? {
            ...result,
            data: result.data.map(r => ({ ...r, id: r.item, itemName: r.item })),
          }
        : result;
    });
}

export { getList };
