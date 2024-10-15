'use client'
import { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'
export default function CalcomReact() {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi({ namespace: '30min' })
      cal('floatingButton', {
        calLink: 'kirsanov/30min',
        config: { layout: 'month_view', theme: 'dark' },
        buttonText: 'Book a call',
      })
      cal('ui', {
        theme: 'dark',
        styles: { branding: { brandColor: '#000000' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })()
  }, [])
  return <div id="calcom-react" />
}
