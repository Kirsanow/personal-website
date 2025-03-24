'use client'

import React, { useEffect, useState } from 'react'
import { Calendar, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import Cal, { getCalApi } from '@calcom/embed-react'

const BookingCalendar = () => {
  const [calApi, setCalApi] = useState<any | null>(null)

  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi({ namespace: '30min' })
      cal('ui', {
        theme: 'dark',
        hideEventTypeDetails: true,
        layout: 'month_view',
      })
    })()
  }, [])

  return (
    <section className="bg-base-200/50 py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
              Ready to Build Your <span className="text-primary">MVP</span>?
            </h2>
            <p className="mx-auto max-w-2xl text-lg opacity-80">
              Schedule a free consultation to discuss your project requirements
              and get a personalized development plan.
            </p>

            <div className="mt-2 mb-10 flex justify-center gap-4">
              <div className="bg-primary/10 text-primary flex items-center gap-2 rounded-full px-4 py-2">
                <Clock size={18} />
                <span className="text-sm font-medium">30 min consultation</span>
              </div>
              <div className="bg-success/10 text-success flex items-center gap-2 rounded-full px-4 py-2">
                <Calendar size={18} />
                <span className="text-sm font-medium">Free of charge</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl"
        >
          <div className="bg-base-200 overflow-hidden rounded-xl p-2 shadow-lg sm:p-4 md:p-6">
            {/* Cal.com Embed */}
            <Cal
              namespace="30min"
              calLink="kirsanov/30min"
              style={{ width: '100%', height: '100%', overflow: 'scroll' }}
              config={{ layout: 'month_view', theme: 'dark' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BookingCalendar
