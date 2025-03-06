// src/services/redis/client.ts
import {client} from '$services/redis'
import { pageCacheKey } from '$services/keys';

const cacheRoutes =[
  '/about','/privacy','/auth/signin','/auth/signup'
]

// GET
export const getCachedPage = (route: string) => {
  if (cacheRoutes.includes(route)){
    console.log(route + ": included in cacheRoutes? " + cacheRoutes.includes(route))
    return client.get(pageCacheKey(route))
  }
  
  return null;
};

// SET KEY VALUE 
export const setCachedPage = (route: string, page: string) => {
  if (cacheRoutes.includes(route)){
    return client.set(
      pageCacheKey(route),
      page,
      {
        EX : 2
      }
    )
  }
};
