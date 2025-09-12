export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex-1">
      <h1>Private page</h1>
      {children}
    </main>
  );
}
