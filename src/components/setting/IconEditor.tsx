import AvatarEditor from "react-avatar-editor";
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
            borderRadius={100}
            className="bg-gray-200"
            color={[255, 255, 255, 0.6]}
            height={200}
            image={previewIcon ? URL.createObjectURL(previewIcon) : ""}
            ref={editorRef}
            rotate={0}
            scale={scale}
            width={200}
          />
        </div>
        <div className="w-full mb-4">
          <ReactSlider
            className="w-full h-4 rounded-full"
            max={3}
            min={0}
            onChange={handleChangeScale}
            step={0.01}
            thumbClassName="bg-blue-500 h-4 w-4 rounded-full cursor-pointer"
            trackClassName="bg-blue-300 h-4 rounded-full"
            value={scale}
          />
        </div>
        <div className="flex justify-end">
          <button onClick={() => handleClickFileSave()} type="button">
            確定
          </button>
        </div>
      </div>
    </div>
  );
}
