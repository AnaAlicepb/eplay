import { useParams } from 'react-router-dom'

import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'
import Loader from '../../components/Loader'

import { useGetGameQuery } from '../../services/api'

type GameParams = {
  id: string
}

const Product = () => {
  const { id } = useParams() as GameParams
  const { data: game } = useGetGameQuery(id)

  if (!game) {
    return <Loader />
  }

  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o Jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais Detalhes" background="gray">
        <p>
          <b>Plataforma:</b> {game.details.system} <br />
          <b>Desenvolvedor:</b> {game.details.developer} <br />
          <b>Editora:</b> {game.details.publisher} <br />
          <b>Idiomas:</b> Idiomas inclusos {game.details.languages.join(', ')}{' '}
        </p>
      </Section>

      <Gallery
        name={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </>
  )
}

export default Product
