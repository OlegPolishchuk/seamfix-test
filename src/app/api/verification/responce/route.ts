import { NextResponse } from 'next/server';
import {redirect} from "next/navigation";

export async function GET(req: Request) {
  console.log('GET');
  console.log(req.body);

  return NextResponse.json({});
}

export async function POST(req: Request) {
  console.log('POST');
  const res = await req.json()
  console.log('res =>', res);

  redirect(`http://localhost:3000/retailer/agreement/${res.linkIdentifier}`)

  return NextResponse.json({});
}
