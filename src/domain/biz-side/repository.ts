import { Pagination, ResponseResult, EnumFieldOption } from '@/shared/types';
import { omit, pick } from '@/shared/utils';
import httpClient from '@/shared/utils/http';

import { BusinessSide } from './typing';
import { getDependencies } from './helper';

async function getList(
  condition: Partial<Pagination & BusinessSide>,
): Promise<ResponseResult<BusinessSide[]>> {
  return httpClient
    .post<BusinessSide[]>(
      '/fintech/api/manage/config/list/tokens',
      condition.token ? condition : omit(condition, ['token']),
    )
    .then(result =>
      result.success
        ? {
            ...result,
            data: result.data.map(r => ({ ...r, id: r.token, strategyList: r.strategyList || [] })),
          }
        : result,
    );
}

async function getOne(params: BusinessSide): Promise<ResponseResult<BusinessSide>> {
  return getList(pick(params, ['bizId', 'token'])).then(({ data, ...others }) => ({
    ...others,
    data: (data || [])[0],
  }));
}

async function insert({ itemList, ...others }): Promise<ResponseResult> {
  return httpClient.post('/fintech/api/manage/config/insert/token', {
    ...others,
    items: JSON.stringify(itemList.map(param => JSON.parse(param))),
  });
}

async function makeOnline(params: { bizId: string; token: string }): Promise<ResponseResult> {
  return httpClient.post('/fintech/api/manage/config/online/token', params);
}

async function makeOffline(params: { bizId: string; token: string }): Promise<ResponseResult> {
  return httpClient.post('/fintech/api/manage/config/delete/token', params);
}

let pendingRequest: Promise<ResponseResult> = null as any;

async function getItemList(): Promise<ResponseResult> {
  if (!pendingRequest) {
    pendingRequest = (getDependencies('itemConfig.services') as any)
      .getItemList()
      .finally(() => (pendingRequest = null as any));
  }

  return pendingRequest;
}

async function resolveItemListOptions(): Promise<ResponseResult<EnumFieldOption[]>> {
  return getItemList().then(result => {
    if (result.success) {
      return {
        ...result,
        data: result.data.map(({ item, itemType }) => ({
          name: item,
          label: item,
          value: JSON.stringify({ item, itemType }),
        })),
      };
    } else {
      return result;
    }
  });
}

export { getList, getOne, insert, makeOnline, makeOffline, resolveItemListOptions };
