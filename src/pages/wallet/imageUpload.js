import axios from "axios";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "../../../firebase";

export const uploadFile = async (imageUpload) => {
  if (imageUpload === null) return null;

  const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);

  const snap = await uploadBytes(imageRef, imageUpload);
  const url = await getDownloadURL(snap.ref);

  return url;
};
