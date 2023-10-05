import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.Container>
    <div className="container">
      <S.FooterSection>
        <S.SectionTitle>Categorias</S.SectionTitle>
        <S.Links>
          <li>
            <S.LinkItem
              title="Clique aqui para acessar jogos de RPG"
              to="/categories#rpg"
            >
              RPG
            </S.LinkItem>
          </li>
          <li>
            <S.LinkItem
              title="Clique aqui para acessar jogos de ação"
              to="/categories#action"
            >
              Ação
            </S.LinkItem>
          </li>
          <li>
            <S.LinkItem
              title="Clique aqui para acessar jogos de esportes"
              to="/categories#sports"
            >
              Esportes
            </S.LinkItem>
          </li>
          <li>
            <S.LinkItem
              title="Clique aqui para acessar jogos de simulação"
              to="/categories#simulation"
            >
              Simulação
            </S.LinkItem>
          </li>
          <li>
            <S.LinkItem
              title="Clique aqui para acessar jogos de luta"
              to="/categories#fight"
            >
              Luta
            </S.LinkItem>
          </li>
        </S.Links>
      </S.FooterSection>
      <S.FooterSection>
        <S.SectionTitle>Acesso rápido</S.SectionTitle>
        <S.Links>
          <li>
            <S.LinkItem
              title="Clique aqui para acessar a seção de promoções"
              to="/#sale"
            >
              Promoções
            </S.LinkItem>
          </li>
          <li>
            <S.LinkItem
              title="Clique aqui para acessar a seção de em breve"
              to="/#soon"
            >
              Em breve
            </S.LinkItem>
          </li>
        </S.Links>
      </S.FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </S.Container>
)

export default Footer
