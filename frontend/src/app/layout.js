import './globals.css';

export const metadata = {
  title: 'Rayah Scents - Coming Soon',
  description: 'Ultra-luxury perfume brand Coming Soon page',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
