export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="lg:flex">
      <div className="lg:w-48">Products</div>
      <div>{children}</div>
    </main>
  );
}
