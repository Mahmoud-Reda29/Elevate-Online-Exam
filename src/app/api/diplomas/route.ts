import { JSON_HEADER } from "@/lib/constants/api/json-header";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const token = await getToken({ req });

    if (!token || !token.token) {
      return NextResponse.json(
        { code: 401, message: "Unauthorized - No valid token" },
        { status: 401 },
      );
    }

    const { searchParams } = new URL(req.url);
    const limit = searchParams.get("limit") ?? "10";
    const page = searchParams.get("page") ?? "1";

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/subjects?page=${page}&limit=${limit}`,
      {
        headers: {
          ...JSON_HEADER,
          token: token.token,
        },
      },
    );

    if (!response.ok) {
      return NextResponse.json(
        {
          code: response.status,
          message: `External API error: ${response.statusText}`,
        },
        { status: response.status },
      );
    }

    const payload = await response.json();

    return NextResponse.json(payload, { status: 200 });
  } catch (error) {
    console.error("Subjects API Route Error:", error);
    return NextResponse.json({ code: 500, message: "Internal server error" }, { status: 500 });
  }
}
