import './globals.css'

import Provider from '@/context/user'
import CartProvider from '@/context/cart'
import WishListProvider from '@/context/wishlist'
import { ToasterProvider } from '@/provider/toastProvider'

export const metadata = {
  title: 'Gameland',
  description: 'Somos uma loja de vendas de jogos com diversas categorias, multi plataformas e com os melhores preços!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Provider>
          <ToasterProvider />
          <CartProvider>
            <WishListProvider>
              {children}
            </WishListProvider>
          </CartProvider>
        </Provider>
      </body>
    </html>
  )
}
