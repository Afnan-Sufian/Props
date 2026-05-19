function Props({
  name = "Empty",
  age = 10,
  city = "Bannu",
  Dream = [],
  fruit = [],
}) {
  return (
    <div>
      <h1>Hello, {name}</h1>
      <h2>{age}</h2>
      <h3>{city}</h3>

      {Dream.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
<ul>
      {fruit.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
      </ul>
    </div>
  );
}

export default Props;