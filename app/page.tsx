import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import FeaturedResearch from './components/FeaturedResearch'
import ProjectList from './components/ProjectList'
import NewsFeed from './components/NewsFeed'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="bg-[#070c16] min-h-screen text-gray-100">
<Navbar />
      <Hero />
      <Countdown />
      <FeaturedResearch />
      <ProjectList />
      <NewsFeed />
      <Footer />
    </main>
  )
}