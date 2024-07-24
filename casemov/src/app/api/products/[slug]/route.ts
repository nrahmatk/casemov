import { NextApiRequest, NextApiResponse } from 'next';
import { GetProductBySlug } from '@/db/models/products';
import { NextResponse } from 'next/server';

export async function GET(req: Request, { params }: { params: { slug: string } }) {
  try {      
    const slug = params.slug
    const product = await GetProductBySlug(slug);

    return NextResponse.json({
      message: 'Product found',
      data: product,
    });
  } catch (error) {
    // console.error(error);
    return NextResponse.json({ message: 'internal server error' },{status: 500});
  }
}
