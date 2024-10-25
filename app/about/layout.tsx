export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="h-24 w-full bg-blue-900"></div>
      <h1>About</h1>
      {children}
    </div>
  )
}
