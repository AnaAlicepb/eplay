import Tag from '../Tag'
import Button from '../Button'
import Loader from '../Loader'

import { useGetFeatureGameQuery } from '../../services/api'
import { formataPreco } from '../../utils'

import { Imagem, Titulo, Precos } from './styles'

const Banner = () => {
  const { data: game } = useGetFeatureGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Precos>
            De <span>{formataPreco(game.prices.old)}</span> <br />
            por apenas {formataPreco(game.prices.current)}
          </Precos>
        </div>
        <Button type="link" to={`/product/${game.id}`} title="Clique P oferta">
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
