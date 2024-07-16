import { Game } from '../../pages/Home'
import Button from '../Button'
import Tag from '../Tag'

import { formataPreco } from '../../utils'

import { Banner, Infos } from './styles'
import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>

        <Infos>
          <h2>{game.name}</h2>
          <p>
            {/* && FUNCIONA COMO UM if */}
            {game.prices.discount && (
              <span>De {formataPreco(game.prices.old)}</span>
            )}
            {game.prices.current && (
              <>Por {formataPreco(game.prices.current)}</>
            )}
          </p>
          {game.prices.current && (
            <Button
              type="button"
              title="Clique aqui para add o jogo"
              variant="primary"
              onClick={addToCart}
            >
              Add ao Carrinho
            </Button>
          )}
        </Infos>
      </div>
    </Banner>
  )
}
export default Hero
