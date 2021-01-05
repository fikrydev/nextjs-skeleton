import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default (req: NextApiRequest, res: NextApiResponse<Data>): void => {
  res.statusCode = 200;
  res.json({ name: 'John Doe' });
};
