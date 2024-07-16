import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const anoAtual = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link title="Clique aqui para RPG" to="/categories#rpg">
              RPG
            </Link>
          </li>
          <li>
            <Link title="Clique aqui para Ação" to="/categories#action">
              Ação
            </Link>
          </li>
          <li>
            <Link title="Clique aqui para Esportes" to="/categories#sports">
              Esportes
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para Simulação"
              to="/categories#simulation"
            >
              Simulação
            </Link>
          </li>
          <li>
            <Link title="Clique aqui para Luta" to="/categories#fight">
              Luta
            </Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <li>
            <Link title="Clique aqui para Promoções" to="/#on-sale">
              Promoções
            </Link>
          </li>
          <li>
            <Link title="Clique aqui para Novidades" to="/#coming-soon">
              Em Breve
            </Link>
          </li>
        </Links>
      </FooterSection>
      <p>
        {anoAtual} - &copy; Loja Virtual Todos os direitos reservados - Ana
        Alice Rodrigues
      </p>
    </div>
  </Container>
)

export default Footer
