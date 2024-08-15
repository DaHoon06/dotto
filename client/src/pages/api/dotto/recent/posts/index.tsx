// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { DottoPostListState } from "@interfaces/dotto/postList";
import { postListMockData } from "mock/dotto/postMockData";
import type { NextApiRequest, NextApiResponse } from "next";

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
    const mockData = postListMockData;
    const slicedData = postListMockData.slice(0, 16);
    return res.status(200).json({ message: "Success", data: slicedData });
  }
  res.status(405).json({ message: "Method Not Allowed" });
}
