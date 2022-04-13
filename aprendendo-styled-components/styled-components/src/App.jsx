import { Title, TitleSmall } from './styles.jsx'

function App() {
  

  return (
    <div>
      <Title fontSize={20}>
        Styled Components
        <span>texto menor</span>
      </Title>

      <TitleSmall>
        Menor
      </TitleSmall>
    </div>
  )
}

export default App
