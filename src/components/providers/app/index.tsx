import NextAuthProvider from "./components/next-auth.provider";
import ReactQueryProvider from "./components/react-query.provider";
import ToasterProvider from "./components/toaster-provider";

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <NextAuthProvider>
        {/* content */}
        {children}

        {/* Toaster */}
        <ToasterProvider />
      </NextAuthProvider>
    </ReactQueryProvider>
  );
}
