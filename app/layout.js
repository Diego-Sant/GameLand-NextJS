import Provider from '@/context/user'
import './globals.css'
import { ToastContainer } from 'react-toastify'

export const metadata = {
  title: 'Gameland',
  description: 'Somos uma loja de vendas de jogos com diversas categorias, multi plataformas e com os melhores preços!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <ToastContainer />
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
