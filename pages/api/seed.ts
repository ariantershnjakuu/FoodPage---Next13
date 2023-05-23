//Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { PRICE, PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();
type Data = {
    name: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
    
