const StorageUtils = {
  getItem: (key) => localStorage.getItem(key),
  setItem:  (key, value) => localStorage.setItem(key, value),
  removeItem: (key) => localStorage.removeItem(key),
  clear: () => localStorage.clear(),
  setObject: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  getObject: (key) => {
    var value = localStorage.getItem(key);
    return value && JSON.parse(value);
  },
  getItemOrDefault: (key, defaultValue) => {
    return localStorage.getItem(key) || defaultValue;
  },
  getOrSetItem: (key, defaultValue) => {
    var value = localStorage.getItem(key);
    if (!!!value) {
      localStorage.setItem(key, defaultValue);
    }
    return value || defaultValue;
  },
};

export default StorageUtils;