import "./App.css"

function App() {
  const products = [
    { title: "Cabbage", id: 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3}
  ];

  const listItems = products.map(product => 
    <li key={product.id}>
      {product.title}
    </li>
  );

  return (
    <>
      <h1>Welcome to my app</h1>
      <ul>{listItems}</ul>
    </>
  );
}

export default App
