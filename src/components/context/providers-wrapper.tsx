import { ThemeProvider } from "./theme-provider";
import { SearchProvider } from "./search";

export function ProvidersWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SearchProvider>{children}</SearchProvider>
    </ThemeProvider>
  );
}
