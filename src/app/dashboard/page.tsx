import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LogOut, MoveRight } from "lucide-react";
export default function page() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      hello World
      <Button variant="default" size="lg" rightIcon={<MoveRight />} loading>
        Next
      </Button>
      <Input type="password" placeholder="password" />
      <Button
        variant={"semi-destructive"}
        size={"lg"}
        leftIcon={<LogOut className="rotate-180" />}
      >
        LogOut
      </Button>
      <Button variant="destructive" size="lg">
        Click me destructive
      </Button>
      <Button variant="outline" size="lg">
        Click me outline
      </Button>
      <Button variant="secondary" size="lg">
        Click me secondary
      </Button>
      <Button variant="ghost" size="lg" disabled>
        Click me ghost
      </Button>
      <Button variant="link" size="lg" disabled>
        Click me link
      </Button>
    </div>
  );
}
