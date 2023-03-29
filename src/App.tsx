import { useSelector } from "react-redux";

const App = () => {
  const products = useSelector((state: any) => state.products.products);
  const brands = useSelector((state: any) => state.products.brands);
  const models = useSelector((state: any) => state.products.models);

  console.log(products);
  console.log(brands);
  console.log(models);
  return <div></div>;
};

export default App;
