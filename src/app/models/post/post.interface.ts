import { CreatePost } from "./create-post.interface";

export interface IPost extends CreatePost {
  id: number;
  commentaries: any,
  createdAt: string;
  updatedAt: string;
}