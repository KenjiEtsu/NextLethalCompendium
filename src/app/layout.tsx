import Header from "@/components/header";
import "@/ui/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
