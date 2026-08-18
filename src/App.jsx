import Background from './components/Background';
import ProfileHeader from './components/ProfileHeader';
import StatusBadgeCard from './components/StatusBadgeCard';
import HeroBanner from './components/HeroBanner';
import AboutCard from './components/AboutCard';
import ExperienceCard from './components/ExperienceCard';
import EducationCard from './components/EducationCard';
import ProjectsSection from './components/ProjectsSection';
import DocumentCard from './components/DocumentCard';
import ContactCard from './components/ContactCard';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';

export default function App() {
  return (
    <>
      <Background />

      <div className="relative z-10 min-h-screen">
        {/* Main Content + Steam Sidebar */}
        <main className="max-w-[840px] mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Left Showcase Column (~65%) */}
            <div className="flex-1 min-w-0 flex flex-col gap-4">
              <ProfileHeader />
              <HeroBanner />
              <AboutCard />
              <ExperienceCard />
              <EducationCard />
              <ProjectsSection />
              <DocumentCard />
              <ContactCard />
            </div>

            {/* Right Steam Stats Column (~35%) */}
            <div className="w-full lg:w-[230px] lg:flex-shrink-0">
              <div className="flex flex-col gap-4 lg:sticky lg:top-4">
                <StatusBadgeCard />
                <Sidebar />
              </div>
            </div>
          </div>
        </main>

        <Footer />
        <MusicPlayer />
      </div>
    </>
  );
}
