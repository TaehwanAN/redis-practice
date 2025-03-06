// 공통적인, 일반적인 key 부분을 정의하기 위한 파일
/**
 * api.sampleurl.com:232/key1
 * api.sampleurl.com:232/key2
 * api.sampleurl.com:232/key3
 * --> simpleUrlKey =>를 정의
 */

// KEY 세팅할때 공통 URI 부분을 이용하려고
export const pageCacheKey = (id: string) => `pagecache#${id}`;