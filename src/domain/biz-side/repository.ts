import { Pagination, ResponseResult } from '@/shared/types';
import { omit } from '@/shared/utils';
import httpClient from '@/shared/utils/http';

import { BusinessSide } from './typing';

async function getList(
  condition: Pagination & BusinessSide,
): Promise<ResponseResult<BusinessSide[]>> {
  return httpClient
    .post<BusinessSide[]>(
      '/fintech/api/manage/config/list/tokens',
      condition.token ? condition : omit(condition, ['token']),
    )
    .then(result => {
      return result.success
        ? {
            ...result,
            data: result.data.map(r => ({ ...r, id: r.token, strategyList: r.strategyList || [] })),
          }
        : result;
    });
}

async function getOne(id: string): Promise<ResponseResult<BusinessSide>> {
  return httpClient.get(`/api/animations/${id}`);
}

async function deleteList(animationList: BusinessSide[]): Promise<ResponseResult<BusinessSide[]>> {
  return httpClient.delete('/api/animations', {
    params: { ids: animationList.map(({ id }) => id).join(',') },
  });
}

async function deleteOne(animation: BusinessSide): Promise<ResponseResult<BusinessSide>> {
  return httpClient.delete(`/api/animations/${animation.id}`);
}

export { getList, getOne, deleteList, deleteOne };
