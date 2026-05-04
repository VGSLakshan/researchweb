import ScrollRevealProvider from "./components/ScrollRevealProvider";
import AppShell from "./components/AppShell";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemStatement from "./components/ProblemStatement";
import Objectives from "./components/Objectives";
import Components from "./components/Components";
import SystemArchitecture from "./components/SystemArchitecture";
import Methodology from "./components/Methodology";
import TechStack from "./components/TechStack";
import Results from "./components/Results";
import DemoVideo from "./components/DemoVideo";
import Milestones from "./components/Milestones";
import Documents from "./components/Documents";
import Team from "./components/Team";
import Domain from "./components/Domain";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <AppShell>
      <ScrollRevealProvider>
        <Navbar />
        <main>
          <Hero />
          <ProblemStatement />
          <Objectives />
          <Components />
          <SystemArchitecture />
          <Domain />
          <Methodology />
          <TechStack />
          <Results />
          <DemoVideo />
          <Milestones />
          <Documents />
          <Team />
          <Contact />
        </main>
        <Footer />
      </ScrollRevealProvider>
    </AppShell>
  );
}
