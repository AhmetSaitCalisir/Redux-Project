import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  return <div>Detail Page of {id}</div>;
};

export default DetailPage;
