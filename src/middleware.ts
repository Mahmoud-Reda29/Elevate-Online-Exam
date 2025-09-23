import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const authRoutes = ["/auth/login", "/auth/register", "/auth/forgot-password"];
const publicRoutes = ["/", ...authRoutes];

export async function middleware(request: NextRequest) {
  // Get Pathename from request
  const { pathname } = request.nextUrl;

  // Get the token from the request if exists
  const token = await getToken({ req: request });

  // If visiting a public route
  if (publicRoutes.includes(pathname)) {
    // if logged in and visiting auth routes redirect to dashboard
    if (authRoutes.includes(pathname) && token) {
      const url = request.nextUrl.clone();
      url.pathname = "/dashboard";
      return NextResponse.redirect(url);
    }
    // Otherwise proceed
    return NextResponse.next();
  }

  // If visiting a private route and not authenticated redirect to login
  if (!token) {
    const url = request.nextUrl.clone();
    url.pathname = "/auth/login";
    url.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(url);
  }

  // Otherwise proceed
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images).*)"],
};
