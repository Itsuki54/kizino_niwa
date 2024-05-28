import AvatarEditor from "react-avatar-editor";
import { set } from "react-hook-form";
import ReactSlider from "react-slider";

interface IconEditorProps {
  previewIcon: File | null;
  editorRef: React.RefObject<AvatarEditor>;
  scale: number;
  handleChangeScale: (value: number) => void;
  handleClickFileSave: () => void;
}

export function IconEditor({
  previewIcon,
  editorRef,
  scale,
  handleChangeScale,
  handleClickFileSave,
}: IconEditorProps) {
  return (
    <div className="flex justify-center">
      <div className="flex-col justify-center">
        <div className="flex justify-center p-2 ">
          <AvatarEditor
            ref={editorRef}
            image={previewIcon ? URL.createObjectURL(previewIcon) : ""}
            width={200}
            height={200}
            borderRadius={100}
            color={[255, 255, 255, 0.6]}
            scale={scale}
            rotate={0}
            className="bg-gray-200"
          />
        </div>
        <div className="w-full mb-4">
          <ReactSlider
            min={0}
            max={3}
            step={0.01}
            value={scale}
            onChange={handleChangeScale}
            className="w-full h-4 rounded-full"
            thumbClassName="bg-blue-500 h-4 w-4 rounded-full cursor-pointer"
            trackClassName="bg-blue-300 h-4 rounded-full"
          />
        </div>
        <div className="flex justify-end">
          <button type="button" onClick={() => handleClickFileSave()}>
            確定
          </button>
        </div>
      </div>
    </div>
  );
}
