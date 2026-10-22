from functools import lru_cache
from time import monotonic


class TTLCache:
    def __init__(self, ttl_seconds: int = 30, max_entries: int = 128):
        self.ttl_seconds = ttl_seconds
        self.max_entries = max_entries
        self._entries: dict[str, tuple[float, object]] = {}

    def get(self, key: str):
        entry = self._entries.get(key)
        if entry is None:
            return None

        expires_at, value = entry
        if monotonic() >= expires_at:
            self._entries.pop(key, None)
            return None

        return value

    def set(self, key: str, value: object) -> None:
        if len(self._entries) >= self.max_entries:
            self._entries.pop(next(iter(self._entries)))

        self._entries[key] = (monotonic() + self.ttl_seconds, value)

    def clear(self) -> None:
        self._entries.clear()


video_feed_cache = TTLCache(ttl_seconds=30)
