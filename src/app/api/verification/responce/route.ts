import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  console.log('GET');
  console.log(req.body);

  return NextResponse.json({});
}

export async function POST(req: Request) {
  console.log('POST');
  console.log('res =>', await req.json());

  return NextResponse.json({});
}
