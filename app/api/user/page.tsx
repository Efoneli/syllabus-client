// pages/api/user.js


import { getSession } from '@auth0/nextjs-auth0';

export default async function handler(req, res) {
  try {
    const session = getSession(req, res);
    if (!session || !session.user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const { user } = session;
    const sub = user.sub;

    const response = await fetch(`${process.env.BACKEND_URL}/users/sub/${sub}`, {
      headers: {
        Authorization: `Bearer ${user.token}`, // Pass the token for backend authorization if required
      },
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch user data' });
    }

    const userData = await response.json();
    return res.status(200).json(userData);
  } catch (error) {
    console.error('Error fetching user data:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
