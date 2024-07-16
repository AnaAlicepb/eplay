import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import {
  HeaderBar,
  CartButton,
  Links,
  LinksItem,
  Humburguer,
  HeaderRow,
  NavMobile
} from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'

const Header = () => {
  const dispath = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispath(open())
  }

  return (
    <HeaderBar>
      <HeaderRow>
        <div>
          <Humburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </Humburguer>
          <Link to="/">
            <h1>
              <img src={logo} alt="EPLAY" />
            </h1>
          </Link>
          <nav>
            <Links>
              <LinksItem>
                <Link title="Clique aqui para Categorias" to="/categories">
                  Categorias
                </Link>
              </LinksItem>
              <LinksItem>
                <HashLink title="Clique aqui para Novidades" to="/#coming-soon">
                  Em Breve
                </HashLink>
              </LinksItem>
              <LinksItem>
                <HashLink title="Clique aqui para Promoções" to="/#on-sale">
                  Promoções
                </HashLink>
              </LinksItem>
            </Links>
          </nav>
        </div>
        <CartButton role="button" onClick={openCart}>
          {items.length} <span>- produto(s)</span>
          <img src={carrinho} alt="Carrinho" />
        </CartButton>
      </HeaderRow>
      <NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <Links>
          <LinksItem>
            <Link
              title="Clique aqui para Categorias"
              to="/categories"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
          </LinksItem>
          <LinksItem>
            <HashLink
              title="Clique aqui para Novidades"
              to="/#coming-soon"
              onClick={() => setIsMenuOpen(false)}
            >
              Em Breve
            </HashLink>
          </LinksItem>
          <LinksItem>
            <HashLink
              title="Clique aqui para Promoções"
              to="/#on-sale"
              onClick={() => setIsMenuOpen(false)}
            >
              Promoções
            </HashLink>
          </LinksItem>
        </Links>
      </NavMobile>
    </HeaderBar>
  )
}

export default Header
