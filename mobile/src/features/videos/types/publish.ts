export type PublishVideoInput = {
  title: string;
  description: string;
  video_url: string;
  thumbnail_url: string;
};

export type PublishVideoPayload = {
  title: string;
  description?: string;
  video_url: string;
  thumbnail_url?: string;
};

export type PublishVideoResponse = {
  id: number;
  title: string;
  description: string | null;
  video_url: string;
  thumbnail_url: string | null;
};
