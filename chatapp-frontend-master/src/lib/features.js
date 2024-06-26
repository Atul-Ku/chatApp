import moment from "moment";

const fileFormat = (url = "https://res.cloudinary.com/dph9a96me/image/upload/dpr_auto/w_200/v1710344436/fafceddc-2845-4ae7-a25a-632f01922b4d.png") => {
  const fileExt = url.split(".").pop();

  if (fileExt === "mp4" || fileExt === "webm" || fileExt === "ogg")
    return "video";

  if (fileExt === "mp3" || fileExt === "wav") return "audio";
  if (
    fileExt === "png" ||
    fileExt === "jpg" ||
    fileExt === "jpeg" ||
    fileExt === "gif"
  )
    return "image";

  return "file";
};

// https://res.cloudinary.com/dph9a96me/image/upload/dpr_auto/w_200/v1710344436/fafceddc-2845-4ae7-a25a-632f01922b4d.png

// /dpr_auto/w_200
const transformImage = (url = "https://res.cloudinary.com/dph9a96me/image/upload/dpr_auto/w_200/v1710344436/fafceddc-2845-4ae7-a25a-632f01922b4d.png", width = 100) => {
  const newUrl = url.replace("upload/", `upload/dpr_auto/w_${width}/`);

  return newUrl;
};

const getLast7Days = () => {
  const currentDate = moment();

  const last7Days = [];

  for (let i = 0; i < 7; i++) {
    const dayDate = currentDate.clone().subtract(i, "days");
    const dayName = dayDate.format("dddd");

    last7Days.unshift(dayName);
  }

  return last7Days;
};

const getOrSaveFromStorage = ({ key, value, get }) => {
  if (get)
    return localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : null;
  else localStorage.setItem(key, JSON.stringify(value));
};

export { fileFormat, transformImage, getLast7Days, getOrSaveFromStorage };
