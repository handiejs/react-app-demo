import httpClient from '@/shared/utils/http';

async function getList(condition) {
  return httpClient.get('/fintech/api/manage/config/list/biz', condition);
}

export { getList };
