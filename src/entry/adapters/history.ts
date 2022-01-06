import { match, compile } from 'path-to-regexp';
import { history } from 'umi';
import { LocationDescriptor, HistoryLocation, isPlainObject } from 'handie-react-starter-antd';

import { findRouteDeeply } from '@/shared/utils/url';

import allRoutes from '../routes';

function resolveRouteMap(routes: any[], map: Record<string, any>): Record<string, any> {
  return routes.reduce((prev, cur) => {
    const acc = { ...prev, [cur.name || cur.path]: cur };

    return (cur.routes || []).length > 0 ? resolveRouteMap(cur.routes, acc) : acc;
  }, map);
}

const routeMap: Record<string, any> = resolveRouteMap(allRoutes, {});

function getLocation(): LocationDescriptor {
  const {
    location: { pathname, hash, query = {} },
  } = history;

  const route = findRouteDeeply(pathname, allRoutes);
  const { params = {} } = match(route.path, { decode: decodeURIComponent })(pathname) || {};

  return {
    name: route.name,
    path: pathname,
    rawPath: route.path,
    hash,
    query,
    params,
  };
}

function resolveHistoryParams(location: HistoryLocation): any {
  let resolved: any;

  if (isPlainObject(location)) {
    const { name, path, query, params = {} } = location as LocationDescriptor;

    resolved = {
      pathname: compile(name ? routeMap[name].path : path)(params),
      query,
      state: params,
    };
  } else {
    resolved = { pathname: location as string };
  }

  return resolved;
}

export { getLocation, resolveHistoryParams };
