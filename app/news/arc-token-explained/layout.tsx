import { articleMetadata } from '../../lib/articleMetadata'

export const metadata = articleMetadata('arc-token-explained')

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
