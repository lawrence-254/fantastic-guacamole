import { apiRequest } from "../../../services/api";
import type {
  PublishVideoPayload,
  PublishVideoResponse,
} from "../types/publish";

export function publishVideo(
  payload: PublishVideoPayload,
): Promise<PublishVideoResponse> {
  return apiRequest<PublishVideoResponse>("/videos", {
    method: "POST",
    body: payload,
  });
}
