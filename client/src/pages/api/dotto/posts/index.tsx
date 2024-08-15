import { DottoPostListState } from "@interfaces/dotto/postList";
import { postListMockData } from "@mock/dotto/postMockData";
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
    const { page = 1 } = req.query;
    const pageNumber = Array.isArray(page)
      ? parseInt(page[0], 10)
      : parseInt(page, 10);
    const itemsPerPage = 16;

    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const slicedData = postListMockData.slice(startIndex, endIndex);
    return res.status(200).json({ message: "Success", data: slicedData });
  }
}
