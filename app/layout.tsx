// add CSS rules to all the routes in your application - such as CSS reset rules, site-wide styles for HTML elements like links, and more.
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

// This is called a root layout and is required. Any UI you add to the root layout will be shared across all pages in your application.
// All layouts have the same prop
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
