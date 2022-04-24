import { useEffect, useState } from "react";
import * as dates from 'date-fns'
import { getFaviconByUrl, validURL } from "./common";
import { useWindowSize } from "react-use";

export const useImage = (url: string) => {
  const [image, setImage] = useState<string>('/fallback.png');
  const [error, setError] = useState<boolean>(false);

  if(/gstatic/.test(url) && !/https/.test(url)) {

    url = 'https:' + url
  }

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await new Promise((resolve, reject) => {
          const imgElement = new Image();
          imgElement.addEventListener('load', () => resolve(url));
          imgElement.addEventListener('error', () => reject(false));
          imgElement.src = url;
        });

        setImage(response as string);
      } catch (e) {
        setError(true);
      }
    };
    fetchImage();
  }, [url]);

  return { image, error };
}


export const useTime = (time: any) => {
  if (!(time instanceof Date) && new Date(time).toString() === 'Invalid Date') {
    return time;
  }
  
  return dates.formatDistanceToNow(new Date(time))
}

// check if an image has good dimensions return true if it does and false if it doesn't
export const useImageDimensions = (url: string) => {
  if(!validURL(url)) return false;
  var image = new Image()
  image.src = url

  if(image.width > 200 && image.height > 200) {
    return true
  }

  return false
} 