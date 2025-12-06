import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import { Search } from "lucide-react";
import { locations } from "#constants";
import useLocationStore from "#store/location";
import clsx from "clsx";
import useWindowStore from "#store/window";
const Finder = () => {
  const { activeLocation, setActiveLocation } = useLocationStore();
  const {openWindow} = useWindowStore();
  const renderList = (name,items) =>
   <div>
        <h3>{name}</h3>
    {items.map((item) => (

        <ul>
        <li
          className={clsx(
            item.id === activeLocation.id ? "active" : "not-active"
          )}
          key={item.id}
          onClick={() => setActiveLocation(item)}
        >
          <img className="w-4" src={item.icon} alt={item.name} />
          <p className="text-sm font-medium truncate">{item.name}</p>
        </li>
      </ul>
      
    ))}
    </div>
  ;

  const openItem = (item) => {
    if(item.fileType === 'pdf') return openWindow("resume");
    if(item.kind === "folder") return setActiveLocation(item);
    if(["fig","url" ].includes(item.fileType) && item.href) return window.open(item.href,"_blank");
    
    // openWindow(`${item.fileType}${item.id}`,item);
    if(item.fileType === "txt") return openWindow("txtfile",item);
    if(item.fileType === "img") return openWindow("imgfile",item);
  }
  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>
      <div className="bg-white flex h-full">
        <div className="sidebar">
          {renderList("Favourites",Object.values(locations))}
          {renderList("Work",locations.work.children)}
        </div>
      
      <ul className="content">
        {activeLocation?.children.map((item) => (
          <li key={item.id} className={item.position} onClick={() => openItem(item)}>
            <img src={item.icon} alt={item.name} />
            <p className="text-sm font-medium truncate">{item.name}</p>
          </li>
        ))}
      </ul>
      </div>
    </>
  );
};
const FinderWindow = WindowWrapper(Finder, "finder");
export default FinderWindow;
