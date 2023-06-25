# Assalamualaikum! Presenting CacheKoro.

CacheKoro is a lightweight and efficient npm package for managing in-memory caching in your JavaScript applications. It provides a simple and flexible API to store key-value pairs with expiration times, allowing you to enhance data access speed and reduce the load on external resources.

## Features

- Simple and intuitive API for caching key-value pairs
- Efficient in-memory storage using the Map data structure
- Support for expiration times on cache entries
- Automatic eviction of least recently used entries when the cache reaches its maximum size
- Customizable maximum cache size and default expiration time

## Installation

To install CacheKoro, you can use npm:

```bash
npm install cachekoro
```

## Usage

Here's an example of how to use CacheKoro in your JavaScript application:

```javascript
const CacheKoro = require('cachekoro');

// Create a cache instance with a maximum size of 100 and default expiration of 300 seconds
const cache = CacheKoro(100, 300);

// Set a value in the cache with a custom expiration time of 60 seconds
cache.set('key1', 'value1', 60);

// Get a value from the cache
const value = cache.get('key1');
console.log(value); // Output: 'value1'

// Remove a value from the cache
cache.remove('key1');

// Clear the entire cache
cache.clear();
```

Make sure to customize the `maxSize` and `defaultExpiration` parameters when creating the `CacheKoro` instance to fit your specific requirements.

## Author
Created by [AbdullahWins](https://github.com/abdullahwins) with love.

## Contributing

Contributions to CacheKoro are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the [GitHub repository](https://github.com/abdullahwins/cachekoro).

## License

CacheKoro is licensed under the [MIT License](https://opensource.org/licenses/MIT).

Thank you, have a nice day!