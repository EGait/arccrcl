import { articleMetadata } from '../../lib/articleMetadata'

export const metadata = articleMetadata('circle-q3-2026-arc')

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
