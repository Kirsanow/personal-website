import { Container } from '@/components/Container'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Kirsanov.co',
  description: 'Privacy Policy and GDPR compliance information for Kirsanov.co',
}

export default function PrivacyPolicy() {
  return (
    <div className="bg-white">
      <Container className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-600 ring-1 shadow-xs ring-zinc-200 transition hover:bg-zinc-50 hover:text-indigo-600 hover:ring-indigo-300"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              Back to Home
            </Link>
          </div>

          <div className="text-center">
            <h1 className="font-display text-4xl font-medium tracking-tight text-zinc-900 sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-6 text-lg text-zinc-600">
              Last updated:{' '}
              {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>

          <div className="prose prose-zinc mt-16 max-w-none">
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold text-zinc-900">
                1. Introduction
              </h2>
              <p className="leading-relaxed text-zinc-600">
                FOP Kirsanov Artem ("we," "our," or "us") is committed to
                protecting your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website and use our services. This policy complies
                with the General Data Protection Regulation (GDPR) and other
                applicable privacy laws.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold text-zinc-900">
                2. Data Controller
              </h2>
              <p className="leading-relaxed text-zinc-600">
                The data controller for your personal information is:
              </p>
              <div className="mt-4 rounded-lg bg-zinc-50 p-4">
                <p className="text-zinc-700">
                  <strong>FOP Kirsanov Artem</strong>
                  <br />
                  COC Number: 3552810711
                  <br />
                  Email: artem@kirsanov.co
                  <br />
                  Website: https://kirsanov.co
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold text-zinc-900">
                3. Information We Collect
              </h2>

              <h3 className="mb-3 text-xl font-medium text-zinc-900">
                3.1 Information You Provide
              </h3>
              <ul className="mb-6 list-inside list-disc space-y-2 text-zinc-600">
                <li>Contact information when you reach out to us</li>
                <li>Information provided when booking consultation calls</li>
                <li>Communication preferences</li>
                <li>Any other information you voluntarily provide</li>
              </ul>

              <h3 className="mb-3 text-xl font-medium text-zinc-900">
                3.2 Automatically Collected Information
              </h3>
              <ul className="list-inside list-disc space-y-2 text-zinc-600">
                <li>IP address and browser information</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website information</li>
                <li>Device and browser characteristics</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold text-zinc-900">
                4. How We Use Your Information
              </h2>
              <p className="mb-4 leading-relaxed text-zinc-600">
                We use your information for the following purposes:
              </p>
              <ul className="list-inside list-disc space-y-2 text-zinc-600">
                <li>To provide and improve our services</li>
                <li>To respond to your inquiries and communications</li>
                <li>To schedule and conduct consultation calls</li>
                <li>
                  To send you relevant information about our services (with your
                  consent)
                </li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold text-zinc-900">
                5. Legal Basis for Processing (GDPR)
              </h2>
              <p className="mb-4 leading-relaxed text-zinc-600">
                Under GDPR, we process your personal data based on:
              </p>
              <ul className="list-inside list-disc space-y-2 text-zinc-600">
                <li>
                  <strong>Consent:</strong> When you voluntarily provide
                  information or subscribe to communications
                </li>
                <li>
                  <strong>Legitimate Interest:</strong> For website analytics
                  and improving our services
                </li>
                <li>
                  <strong>Contract Performance:</strong> When providing services
                  you've requested
                </li>
                <li>
                  <strong>Legal Obligation:</strong> When required by law
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold text-zinc-900">
                6. Data Sharing and Disclosure
              </h2>
              <p className="mb-4 leading-relaxed text-zinc-600">
                We may share your information with:
              </p>
              <ul className="list-inside list-disc space-y-2 text-zinc-600">
                <li>
                  <strong>Service Providers:</strong> Third-party services that
                  help us operate our website and business (e.g., hosting,
                  analytics, appointment scheduling)
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or
                  to protect our rights
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with any
                  merger, sale, or transfer of assets
                </li>
              </ul>
              <p className="mt-4 leading-relaxed text-zinc-600">
                We do not sell, rent, or trade your personal information to
                third parties for marketing purposes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold text-zinc-900">
                7. Data Security
              </h2>
              <p className="leading-relaxed text-zinc-600">
                We implement appropriate technical and organizational security
                measures to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction.
                However, no method of transmission over the internet is 100%
                secure.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold text-zinc-900">
                8. Data Retention
              </h2>
              <p className="leading-relaxed text-zinc-600">
                We retain your personal information only for as long as
                necessary to fulfill the purposes outlined in this policy,
                unless a longer retention period is required by law. Contact
                information is typically retained for 3 years from last contact,
                and website analytics data for 26 months.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold text-zinc-900">
                9. Your Rights (GDPR)
              </h2>
              <p className="mb-4 leading-relaxed text-zinc-600">
                Under GDPR, you have the following rights:
              </p>
              <ul className="list-inside list-disc space-y-2 text-zinc-600">
                <li>
                  <strong>Right of Access:</strong> Request a copy of your
                  personal data
                </li>
                <li>
                  <strong>Right of Rectification:</strong> Correct inaccurate or
                  incomplete data
                </li>
                <li>
                  <strong>Right of Erasure:</strong> Request deletion of your
                  data ("right to be forgotten")
                </li>
                <li>
                  <strong>Right to Restrict Processing:</strong> Limit how we
                  process your data
                </li>
                <li>
                  <strong>Right to Data Portability:</strong> Receive your data
                  in a portable format
                </li>
                <li>
                  <strong>Right to Object:</strong> Object to processing based
                  on legitimate interests
                </li>
                <li>
                  <strong>Right to Withdraw Consent:</strong> Withdraw consent
                  at any time
                </li>
              </ul>
              <p className="mt-4 leading-relaxed text-zinc-600">
                To exercise these rights, contact us at artem@kirsanov.co. We
                will respond within 30 days.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold text-zinc-900">
                10. Cookies and Tracking
              </h2>
              <p className="leading-relaxed text-zinc-600">
                Our website may use cookies and similar tracking technologies to
                enhance your experience and analyze website usage. You can
                control cookie preferences through your browser settings.
                Essential cookies necessary for website functionality cannot be
                disabled.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold text-zinc-900">
                11. International Data Transfers
              </h2>
              <p className="leading-relaxed text-zinc-600">
                Your information may be transferred to and processed in
                countries other than your own. When we transfer data outside the
                EU/EEA, we ensure appropriate safeguards are in place, such as
                Standard Contractual Clauses or adequacy decisions.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold text-zinc-900">
                12. Children's Privacy
              </h2>
              <p className="leading-relaxed text-zinc-600">
                Our services are not directed to children under 16. We do not
                knowingly collect personal information from children under 16.
                If you believe we have collected information from a child under
                16, please contact us immediately.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold text-zinc-900">
                13. Changes to This Policy
              </h2>
              <p className="leading-relaxed text-zinc-600">
                We may update this Privacy Policy from time to time. We will
                notify you of any significant changes by posting the new policy
                on our website and updating the "Last updated" date. Your
                continued use of our services constitutes acceptance of the
                updated policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold text-zinc-900">
                14. Contact Information
              </h2>
              <p className="mb-4 leading-relaxed text-zinc-600">
                If you have any questions about this Privacy Policy or wish to
                exercise your rights, please contact us:
              </p>
              <div className="rounded-lg bg-zinc-50 p-6">
                <p className="text-zinc-700">
                  <strong>Email:</strong> artem@kirsanov.co
                  <br />
                  <strong>Website:</strong> https://kirsanov.co
                </p>
                <p className="mt-4 text-zinc-700">
                  <strong>Data Protection Officer:</strong> If you have concerns
                  about how we handle your data, you also have the right to
                  lodge a complaint with your local data protection authority.
                </p>
              </div>
            </section>

            <div className="mt-16 border-t border-zinc-100 pt-8">
              <p className="text-center text-sm text-zinc-500">
                This Privacy Policy is effective as of the date stated above and
                governs our collection, use, and disclosure of your information.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
