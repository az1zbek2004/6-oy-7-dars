import './App.css'
import { Body, Container, Header, Divade, UL, Button, Li, Article, Title, RedTitle, Desc, RedButton } from "./assets/utils/Container.js";
import logo from './assets/image/Logo.svg'

function App() {

  return (
    <>
      <Body>
      <Container>
          <Header>
            <img src={logo} alt="logotip" />

            <Divade>
              <UL>
                <Li>Home</Li>
                <Li>Our story</Li>
                <Li>Menu</Li>
                <Li>Contact</Li>
              </UL>
              <Button>Login</Button>
            </Divade>
          </Header>
          <Article>
            <Title>Delicious cakes and desserts by <RedTitle>Kreed Bakery</RedTitle></Title>
            <Desc>We deserve delicious cake and deliver unique experience to you</Desc>
            <RedButton>Order Now</RedButton>
          </Article>
      </Container>
      </Body>
    </>
  )
}

export default App
