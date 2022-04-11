import { useEffect, useState } from "react";
import * as dates from 'date-fns'
import { getFaviconByUrl } from "./common";

export const useImage = (url: string) => {
  const [image, setImage] = useState<string>('/fallback.png');
  const [error, setError] = useState<boolean>(false);

  if(/gstatic/.test(url) && !/https/.test(url)) {

    console.log({url})
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