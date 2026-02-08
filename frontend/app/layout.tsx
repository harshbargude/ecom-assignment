import { CartProvider } from '@/context/CartContext';

export default function RootLayout({children}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{margin:'1px'}}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}

