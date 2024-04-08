import { Container, NotFoundText, FirstText, MainCharacter, Words } from "./NotFoundStyle"

function NotFound() {
  return (
    <Container>
      <Words>
        <FirstText> 404</FirstText>
        <NotFoundText>PAGE NOT FOUND</NotFoundText>
      </Words>
      <MainCharacter src="./main_character.png" alt="Main Character" />
    </Container>
  )
}

export default NotFound
