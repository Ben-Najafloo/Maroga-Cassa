import ProductDetails from "@/components/ProductDetails";

export default async function ProductPage({ params }) {
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);

        if (!res.ok) {
            throw new Error(`Failed to fetch product with ID: ${params.id}. Status: ${res.status}`);
        }

        const product = await res.json();

        return <ProductDetails product={product} />;

    } catch (error) {
        console.error("Error in ProductPage component:", error);
        return <div>An error occurred while loading the product. Please try again.</div>;
    }
}