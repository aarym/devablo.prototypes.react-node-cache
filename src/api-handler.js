import * as cacheService from './cache-service';

export function getApiData(url, ttl, cached) {
    return new Promise((resolve, reject) => {
        if (cached && cacheService != undefined) {
            resolve(cacheService.getCachedApiResult(url, ttl));
        }
        else {
            fetch(url)
                .then(results => {
                    return results.json();
                })
                .then(data => {
                    resolve(data);
                })
                .catch(() => {
                    reject();
                });
        }
    });
}