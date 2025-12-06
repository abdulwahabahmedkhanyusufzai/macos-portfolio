import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import { locations } from "#constants";

const Archive = () => {
    const trashItems = locations.trash.children;

  return (
    <>
      <div id="window-header">
        <WindowControls target="trash" />
        <h2>Archive</h2>
      </div>
      <div className="p-4 bg-gray-50 h-full overflow-y-auto">
        {trashItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
                <p>Empty</p>
            </div>
        ) : (
            <div className="grid grid-cols-4 gap-4">
               {trashItems.map((item) => (
                   <div key={item.id} className="flex flex-col items-center group">
                       <div className="w-16 h-16 flex items-center justify-center bg-gray-200 rounded-lg group-hover:bg-blue-100 transition-colors">
                           <img src={item.icon} alt={item.name} className="w-10 h-10 object-contain"/>
                       </div>
                       <span className="mt-2 text-xs text-center text-gray-600 group-hover:text-blue-600 truncate w-full px-1">{item.name}</span>
                   </div>
               ))} 
            </div>
        )}
      </div>
    </>
  );
};

const ArchiveWindow = WindowWrapper(Archive, "trash");
export default ArchiveWindow;
