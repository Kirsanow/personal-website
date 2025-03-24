// A useful component when your product is challenging the status quo.
// Highlight the current pain points (left) and how your product is solving them (right)
// Try to match the lines from left to right, so the user can easily compare the two columns
const WithWithout = () => {
  return (
    <section className="bg-base-200 relative overflow-hidden">
      <div className="to-base-300/50 absolute inset-0 bg-gradient-to-b from-transparent"></div>
      <div className="relative z-10 mx-auto max-w-5xl px-8 py-16 md:py-32">
        <h2 className="mb-6 text-center text-3xl font-extrabold tracking-tight md:mb-10 md:text-5xl">
          MVP Development <span className="text-primary">Transformed</span>
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-center text-lg opacity-80 md:mb-20">
          Compare the traditional development approach with our streamlined
          process that gets your product to market faster.
        </p>

        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:items-stretch md:gap-12">
          <div className="bg-error/20 text-error flex w-full flex-col rounded-lg p-8 shadow-sm transition-all duration-300 hover:shadow-md md:p-12">
            <h3 className="border-error/30 mb-4 border-b pb-2 text-xl font-bold">
              DIY Approach
            </h3>

            <ul className="flex-grow list-inside space-y-3">
              {/* Pains the user is experiencing by not using your product */}
              {[
                'Spend months learning tech stack before writing actual code',
                'Waste weeks implementing basic auth, payments, and notifications',
                'Accumulate technical debt with quick and dirty solutions',
                'Struggle with scaling issues once users start coming in',
                'Abandon project when motivation drops after months of slow progress',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="mt-0.5 h-5 w-5 shrink-0 opacity-80"
                  >
                    <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-success/20 text-success flex w-full flex-col rounded-lg p-8 shadow-sm transition-all duration-300 hover:shadow-md md:p-12">
            <h3 className="border-success/30 mb-4 border-b pb-2 text-xl font-bold">
              Our Fixed-Price MVP
            </h3>

            <ul className="flex-grow list-inside space-y-3">
              {/* Features of your product fixing the pain (try to match each with/withot lines) */}
              {[
                'Launch in just 3 weeks with professionally built features',
                'Get production-ready authentication, payments, and core systems',
                'Benefit from clean, maintainable code that scales with your business',
                'Handle increasing user loads with our future-proof architecture',
                'Maintain momentum with regular updates and visible progress',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="mt-0.5 h-5 w-5 shrink-0 opacity-80"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WithWithout
