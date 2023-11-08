import { NextApiRequest, NextApiResponse } from "next";

export default function handler (req: NextApiRequest, res: NextApiResponse){

    if(req.method != 'POST'){
        return res.status(405).send({});
    }

    let {cart } = req.body;
    return res.json({message: cart})
}