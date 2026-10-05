'use client'

import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { useEffect } from 'react'

// Variant A (cookieless, no banner) — see _config/guides/posthog-consent.md
export default function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.location.hostname === 'localhost') return
    posthog.init('phc_mtVbW9nET3w5qybzT6PmfbJLMPYy4Yv69wjmrnhxMJSf', {
      api_host: 'https://us.i.posthog.com',
      person_profiles: 'identified_only',
      cookieless_mode: 'always',
      capture_pageview: 'history_change',
      capture_pageleave: true,
    })
    posthog.register({
      site_id: 'empowr-efn',
      org: 'empowr-cic',
      brand: 'Empowr CIC',
      site_name: 'Empowr Freelancer Network',
      site_url: 'https://efn.empowrcic.org',
    })
  }, [])

  return <PHProvider client={posthog}>{children}</PHProvider>
}
