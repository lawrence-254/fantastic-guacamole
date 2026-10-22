export type VideoCreator = {
  id: number;
  username: string;
  display_name: string;
  avatar_url: string | null;
};

export type Video = {
  id: number;
  title: string;
  description: string | null;
  video_url: string;
  thumbnail_url: string | null;
  created_at: string;
  creator: VideoCreator;
};

export type VideoFeedResponse = {
  items: Video[];
  total: number;
};
