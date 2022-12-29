// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from '../../db/connectDB';
import User from '../../db/models/User';

dbConnect();

export default async function handler(req, res) {
  const { method } = req;

  try {

    switch (method) {
      case 'GET': 
        const users = await User.find({});
        res.status(200).json({ got: 'something', users });
        break;

      case 'POST': 
        const user = await User.create({
          ...req.body
        });

        res.status(200).json({
          message: 'created new user!',
          user,
        });

        break;

      default:
        res.status(200).json({ message: 'nothing happened' });
        return;
    }

  } catch(err) {
    console.log('Error: ', err);
    res.status(200).json({ status: 'SERVER_ERROR', message: err });
  }

};
