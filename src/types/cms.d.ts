export type Contents = {
  id: string;
  publishedAt: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  text: string;
  thumbnailURL: {
    url: string;
  };
};

export type Response = {
  contents: Contents[];
  limit: number;
  offset: number;
};
