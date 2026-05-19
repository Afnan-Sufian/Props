import Hello from "./props";
import Counter from "./Counter";

function App() {
  const Dream = ["hero", "villans", "dakoo", "king"];
  const fruit = ["hero", "villans", "dakoo", "king", 'apple'];

  return (
    <div>
      <Hello
        name="Sufi"
        age={20}
        city="Bannu"
        Dream={Dream}
        fruit={fruit}
      />

      <Hello name="Rana" />
      <Counter/>
    </div>
  );
}

export default App;