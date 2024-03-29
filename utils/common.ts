import axios from "axios";
import { IncomingMessage } from "http";
import { NextApiRequest } from "next";
import requestIp from "request-ip";

export const getHost = (url: string) => {
  const isValidUrl = validURL(url)

  if(!isValidUrl) return '-'

  const host = new URL(url).host

  return host

}

export const validURL = (str: string) =>  {
  return !!/^(ftp|http|https):\/\/[^ "]+$/.test(str);
}

export const getFaviconByUrl = (url: string) => {
  return `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${url}&size=256`
}

export const truncate = (text: string, startChars: number, endChars: number, maxLength: number) => {
  if (text.length > maxLength) {
      var start = text.substring(0, startChars);
      var end = text.substring(text.length - endChars, text.length);
      return start + '...' + end;
  }
  return text;
}


export const getYoutubeVideoId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);

  if (match && match[2].length === 11) {
    return match[2];
  } else {
    return '';
  }
}

export const generateYoutubeEmebedUrl = (videoId: string) => {
  return `https://www.youtube.com/embed/${videoId}`
}

export const getYoutubeEmbedUrl = (url: string) => {
  const videoId = getYoutubeVideoId(url)
  const embedUrl = generateYoutubeEmebedUrl(videoId)

  return embedUrl
}

export const getUserCountry = async (req: any) => {
  let url = "https://api.geoapify.com/v1/ipinfo?apiKey=589ae61973f3443faf4b13b2f1c57ae9";
  const ip = requestIp.getClientIp(req);
  if(ip) {
    url = `https://api.geoapify.com/v1/ipinfo?ip=${ip}&apiKey=589ae61973f3443faf4b13b2f1c57ae9`;
  }
  const geo = await (await axios.get(url)).data;
  const country = geo.country?.iso_code ? geo.country?.iso_code : "US";

  return country;
}

export const categories = [
  "business",
  "sports",
  "entertainment",
  "health",
  "technology",
  "news",
  "trending",
  "fashion",
  "travel",
  "food",
  "culture",
  "cryptocurrency",
  "learning",
  "gaming",
  "live",
  "jobs",
  "shopping"
]

export const types = ["article", "video", "search"]