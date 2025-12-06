import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import useWindowStore from "#store/window";

const Image = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile?.data;

    if (!data) return null;

    const { name, imageUrl } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="imgfile" />
                <h2>{name}</h2>
            </div>
            <div className="p-0 flex items-center justify-center bg-black h-full">
                {imageUrl ? (
                    <img src={imageUrl} alt={name} className="max-w-full max-h-full object-contain" />
                ) : (
                    <p className="text-white">No image to display</p>
                )}
            </div>
        </>
    );
};

const ImageWindow = WindowWrapper(Image, "imgfile");
export default ImageWindow;
