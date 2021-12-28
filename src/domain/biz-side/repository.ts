import { Pagination, ResponseResult } from '@/shared/types';
import httpClient from '@/shared/utils/http';

import { BusinessSide } from './typing';

async function getList(condition: Pagination): Promise<ResponseResult<BusinessSide[]>> {
  return httpClient.get('/api/animations', { params: condition });
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
