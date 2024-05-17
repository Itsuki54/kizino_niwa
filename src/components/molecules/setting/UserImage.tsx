import Image from "next/image";
import {
  ChangeEvent,
  FormEvent
} from "react";

interface UserImageProps {
  images: File[];
  imageURL: string;
  handleOnAddImage: (e: ChangeEvent<HTMLInputElement>) => void;
  inputFileRef: any;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export function UserImage(
  { images, imageURL, handleOnAddImage, inputFileRef, onSubmit }: UserImageProps
) {

  return (
 <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md justify-between">
          <div className="w-full flex justify-center p-3 ">
            {images.length == 0 ? (
              <Image
                src={imageURL}
                alt="user"
                width={120}
                height={120}
                className="rounded-full"
              />
            ) : (
              images.map((image, i) => (
                  <Image
                    src={URL.createObjectURL(image)}
                    alt="user"
                    width={120}
                    height={120}
                    className="rounded-full justify-center relative"
                  />
              ))
            )}
          </div>
          <form onSubmit={onSubmit} encType="multipart/form-data">
            <input
              type="file"
              id="postImages"
              multiple
              accept="image/*,.png,.jpg,.jpeg,.gif"
              onChange={handleOnAddImage}
              ref={inputFileRef}
            />
            <input type="submit" value="決定" />
          </form>
    </div>
  );
}