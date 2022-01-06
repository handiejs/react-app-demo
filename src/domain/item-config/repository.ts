import { Pagination, ResponseResult } from '@/shared/types';
import httpClient from '@/shared/utils/http';

import { RecommendedItem } from './typing';

async function getList(
  condition: Pagination & RecommendedItem = {} as any,
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

async function deleteOne(params: { item: string; itemType: string }): Promise<ResponseResult> {
  return httpClient.post('/fintech/api/manage/config/delete/item', params);
}

async function insert(
  data: Pick<RecommendedItem, 'item' | 'itemType' | 'summary'>,
): Promise<ResponseResult> {
  return httpClient.post('/fintech/api/manage/config/insert/item', data);
}

export { getList, deleteOne, insert };
