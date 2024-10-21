import { DottoPostListState } from "@interfaces/dotto/postList";
import type { NextApiRequest, NextApiResponse } from "next";
import { postListMockData } from "@mock/dotto/postMockData";

type Data = {
  message: string;
  data?: DottoPostListState[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const method = req.method;
  if (method === "GET") {
    const { postId } = req.query;
    const post = postListMockData.filter((post) => post.postId === postId);
    return res.status(200).json({ message: "Success", data: post });
  }
}
