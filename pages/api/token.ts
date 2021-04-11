import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const token = await getSession({ req });
  res.status(200).send(JSON.stringify(token, null, 2));
};
