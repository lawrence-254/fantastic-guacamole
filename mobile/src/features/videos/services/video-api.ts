import { apiRequest } from "../../../services/api";
import type { VideoFeedResponse } from "../types/video";

export function getVideoFeed(
  limit = 20,
  offset = 0,
): Promise<VideoFeedResponse> {
  return apiRequest<VideoFeedResponse>(
    `/videos?limit=${limit}&offset=${offset}`,
    { authenticated: false },
  );
}
