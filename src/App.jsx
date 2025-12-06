import {Navbar, Welcome, Dock} from "#components";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
import { Finder, Terminal } from "#windows";
import SafariWindows from "#windows/Safari";
import ResumeWindow from "#windows/Resume";
import FinderWindow from "#windows/Finder";
import TextWindow from "#windows/Text";
import ImageWindow from "#windows/Image";
import ContactWindow from "#windows/Contact";
import GalleryWindow from "#windows/Gallery";
import ArchiveWindow from "#windows/Archive";
gsap.registerPlugin(Draggable);
const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal/>
      <SafariWindows/>
      <ResumeWindow/>
      <FinderWindow/>
      <TextWindow/>
      <ImageWindow/>
      <ContactWindow/>
      <GalleryWindow/>
      <ArchiveWindow/>
    </main>
  );
};

export default App;
