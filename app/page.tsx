import HeroSection from "@/components/HeroSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { WorkSection } from "@/components/WorkSection"

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 md:max-w-6xl lg:max-w-7xl">
  <div className="pt-10"></div>
      <HeroSection/>
      <WorkSection/>
      <ProjectsSection/>
    </main>
  )
}
