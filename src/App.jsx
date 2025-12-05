import {Navbar, Welcome, Dock} from "#components";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
import { Finder, Terminal } from "#windows";
import SafariWindows from "#windows/Safari";
import ResumeWindow from "#windows/Resume";
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
      <Finder/>
    </main>
  );
};

export default App;
