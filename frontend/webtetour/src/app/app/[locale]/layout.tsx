import React from 'react';

// The root `src/app/layout.tsx` already renders <html> and <body>.
// Nested locale layout must NOT re-render html/body to avoid hydration mismatch.
import { I18nProviderClient } from 'src/shared/providers/I18nProvider';

export default async function LocaleLayout({
  children,
  params,
}: {
  readonly children: React.ReactNode;
  readonly params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Only provide i18n context here. Do not render <html> or <body>.
  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
}
