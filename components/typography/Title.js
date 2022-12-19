

const Title = ({ children }) => {
  return (
    <p>{children}</p>
  );
};

// Main page titles (h1)
Title.Main = ({ children }) => {
  return (
    <h1>{children}</h1>
  )
}

// Arbitrary main title
Title.Primary = ({ children }) => {
  return (
    <h2>{children}</h2>
  )
}

export default Title;