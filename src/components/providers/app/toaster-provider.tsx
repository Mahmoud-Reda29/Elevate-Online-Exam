import { Toaster } from "@/components/ui/sonner";
import { Check, Info, X } from "lucide-react";

export default function ToasterProvider() {
  return (
    <Toaster
      toastOptions={{
        className: "!bg-gray-800 !shadow-custom !gap-[10px] !p-4 ",
      }}
      icons={{
        success: <Check size="18" className="text-emerald-500" />,
        error: <X size="18" className="text-red-500" />,
        info: <Info size="18" className="text-gray-500" />,
      }}
    />
  );
}
