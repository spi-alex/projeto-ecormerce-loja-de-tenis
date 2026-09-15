import { useEffect, useState } from "react";

type TenisProps = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  thumbnail: string;
};

type TenisResponse = {
  products: TenisProps[];
  total: number;
  skip: number;
  limit: number;
};

export default function Tenis() {
  const [tenis, setTenis] = useState<TenisProps[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/mens-shoes")
      .then((res) => res.json())
      .then((response: TenisResponse) => {
        setTenis(response.products);
      })
      .finally(() => {
        setCarregando(false);
      });
  }, []);

  if (carregando) {
    return <p>carregando...</p>;
  }

  return (
    <div className="container">
      {tenis.map((item) => (
        <div key={item.id} className="card-tenis">
          <div className="imagem-container">
            <img src={item.thumbnail} alt={item.title} />
          </div>

          <div className="info-header">
            <h3>{item.title}</h3>
            <span className="preco">${item.price.toFixed(2)}</span>
          </div>

          <p className="categoria">{item.category}</p>
        </div>
      ))}
    </div>
  );
}
