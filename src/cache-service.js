import nodeCache from "node-cache";
let cache = null;

export function start(done) {
    if (cache)
        return done();
    cache = new nodeCache();
}

export function instance() {
    return cache;
}

export function getCachedApiResult(url, ttl) {
    return new Promise((resolve, reject) => {
        cache.get(url, (err, value) => {
            if (err)
                console.error(err);
            if (value == undefined) {
                fetch(url)
                    .then(results => {
                        return results.json();
                    })
                    .then(data => {
                        cache.set(url, data, ttl, (err, success) => {
                            resolve(data);
                        });
                    });
            }
            else {
                resolve(value);
            }
        });
    });
}