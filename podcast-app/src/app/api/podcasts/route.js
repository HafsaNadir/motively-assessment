import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search");
  const page = searchParams.get("page");
  const limit = searchParams.get("limit");

  try {
    const response = await fetch(
      `${process.env.API_URL}/api/podcasts?search=${encodeURIComponent(
        search
      )}&page=${page}&limit=${limit}`
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error);
    }
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
