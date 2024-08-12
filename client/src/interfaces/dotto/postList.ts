export interface PostThumbnail {
  name: string;
  path: string;
}

export interface DottoPostListState {
  postId: string;
  thumbnails: PostThumbnail[];
  title: string;
  originPrice: number;
  eventPrice?: number;
  salePercent?: number;
  nickname: string;
  tags: string[];
}
