import Products from "@/components/Products";

export function generateMetadata() {
  return {
    title: "Maurizio Shoping",
    description: "Description about the Maurizio Shoping that let you be aware of new technologies in cashier machines",

    openGraph: {
      title: "Maurizio Shoping",
      description: "Description about the Maurizio Shoping that let you be aware of new technologies in cashier machines",
    }
  }
}

export default async function Home() {

  let res = await fetch('https://fakestoreapi.com/products');
  let products = await res.json();

  return (
    <>

      <Products products={products} />
    </>


  );
}
