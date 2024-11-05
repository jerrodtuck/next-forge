import posthog, { type PostHog } from 'posthog-js';

const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;

export const analytics = posthog.init(posthogKey!, {
  api_host: '/ingest',
  ui_host: posthogHost,
  person_profiles: 'identified_only',
  capture_pageview: false,
  capture_pageleave: true,
}) as PostHog;
