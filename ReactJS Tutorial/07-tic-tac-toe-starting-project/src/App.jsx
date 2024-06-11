import Player from "./components/Player";


function App() {

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          {/* Whenever we are using or reusing a component like here we are using the player component twice react will basically
          create a new isolated instance so even though the player components use the same component they work totally isolated.
          If the state in the first player instance component changes the second player instance componend does not care at all.
          It does not even know about it. So we have shared component with the same logic inside of it but then when you use that
          component totally different isolated instances are created which only use the same logic but they then use it on their
          own */}
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  )
}

export default App
