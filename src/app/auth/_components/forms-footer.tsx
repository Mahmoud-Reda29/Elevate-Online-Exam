"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import React from "react";

interface FormsFooterProps {
  page: "login" | "forgot-password" | "register";
}

export default function FormsFooter({ page }: FormsFooterProps) {
  return page === "login" || page === "forgot-password" ? (
    <div className="mt-9 gap-2 text-center">
      Don’t have an account?
      <Link href={"/auth/register"}>
        <Button type="button" variant={"link"} size={"default"}>
          Create yours
        </Button>
      </Link>
    </div>
  ) : (
    <div className="mt-9 text-center">
      Already have an account?
      <Link href={"/auth/login"}>
        <Button type="button" variant={"link"} size={"default"}>
          Login
        </Button>
      </Link>
    </div>
  );
}
