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
    <div>
      {tenis.map((tenis) => (
        <div key={tenis.id}>
          <h3>{tenis.title}</h3>
          <p>{tenis.description}</p>
          <p>Price: ${tenis.price.toFixed(2)}</p>
          <img src={tenis.thumbnail} alt={tenis.title} />
        </div>
      ))}
    </div>
  );
}
