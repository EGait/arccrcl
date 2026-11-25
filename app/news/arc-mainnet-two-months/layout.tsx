import { articleMetadata } from '../../lib/articleMetadata'

export const metadata = articleMetadata('arc-mainnet-two-months')

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
