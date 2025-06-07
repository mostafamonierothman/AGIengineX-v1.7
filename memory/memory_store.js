// memory/memory_store.js

// Wrapper around Cloudflare KV for convenience

export class MemoryStore {
  constructor(kvNamespace) {
    this.kv = kvNamespace;
  }

  async get(key) {
    return await this.kv.get(key);
  }

  async put(key, value) {
    return await this.kv.put(key, value);
  }

  async delete(key) {
    return await this.kv.delete(key);
  }
}
