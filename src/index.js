import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'
import { ScannerProvider } from './context/scanner_context'


ReactDOM.render(
  <ScannerProvider>
    <Auth0Provider
      domain="dev-i7bjbtpf.us.auth0.com"
      clientId="qipqrENtperEnYNVRcqaVZYzWsKOCa6p"
      redirectUri={window.location.origin}
      cacheLocation='localstorage' >
      <UserProvider>
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </UserProvider>
    </Auth0Provider>
  </ScannerProvider>

  ,
  document.getElementById('root'))
