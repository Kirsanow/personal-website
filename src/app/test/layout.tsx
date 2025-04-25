export default async function TestLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-base-200 relative mx-auto flex w-full max-w-7xl flex-col border-x">
      <div className="border-border absolute top-0 left-6 z-10 block h-full w-px border-l"></div>
      <div className="border-border absolute top-0 right-6 z-10 block h-full w-px border-r"></div>
      {children}
    </div>
  )
}
