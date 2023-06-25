const CacheKoro = (maxSize = 100, defaultExpiration = 300) => {
  const cache = new Map();

  const get = (key) => {
    const item = cache.get(key);
    if (item && Date.now() < item.expiration) {
      return item.value;
    }
    cache.delete(key);
    return null;
  };

  const set = (key, value, expiration = defaultExpiration) => {
    if (cache.size >= maxSize) {
      const oldestKey = cache.keys().next().value;
      cache.delete(oldestKey);
    }
    const expirationTime = Date.now() + expiration * 1000;
    cache.set(key, { value, expiration: expirationTime });
  };

  const remove = (key) => {
    cache.delete(key);
  };

  const clear = () => {
    cache.clear();
  };

  return {
    get,
    set,
    remove,
    clear,
  };
};

module.exports = CacheKoro;
