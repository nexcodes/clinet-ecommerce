import { NextResponse } from "next/server";
import axios from "axios"

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, name, password, phone } = body;
    if (!email || !name || !password || !phone)
      return new NextResponse("Missing Information", { status: 400 });

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/registerCustomer`,
      {
        email,
        name,
        phone,
        password,
      }
    );

    return NextResponse.json(res.data.data);
  } catch (error) {
    console.error(error);
    console.log("Error in register route");
    return new NextResponse("Internal Server Error", {
      status: 500,
      headers: { "Content-Type": "text/plain" },
    });
  }
}
