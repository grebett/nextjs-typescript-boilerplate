import { NextApiRequest, NextApiResponse } from 'next';

const EXAMPLE_API_ENDPOINT = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'method not allowed' });
  }
  return res.status(200).json({});
};

export default EXAMPLE_API_ENDPOINT;