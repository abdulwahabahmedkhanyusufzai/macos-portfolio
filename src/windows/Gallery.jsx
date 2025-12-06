import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import { gallery } from "#constants";

const Gallery = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />
        <h2>Photos</h2>
      </div>
      <div className="p-4 bg-white h-full overflow-y-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((item) => (
            <div key={item.id} className="aspect-square rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src={item.img}
                alt={`Gallery item ${item.id}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const GalleryWindow = WindowWrapper(Gallery, "photos");
export default GalleryWindow;
