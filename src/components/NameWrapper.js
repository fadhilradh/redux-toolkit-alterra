function NameWrapper({ detail }) {
  return (
    <h1>
      Welcome, {detail.name} age: {detail.age}
    </h1>
  );
}

export default NameWrapper;
