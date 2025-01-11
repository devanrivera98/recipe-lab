import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../config/firebase-config";

export async function uploadFile(fileUpload : any) {
  if (!fileUpload) return;
  const filesFolderRef = ref(storage, `projectFiles/${fileUpload.name}`)
  try {
  await uploadBytes(filesFolderRef, fileUpload)
  } catch (err) {
    console.error(err);
  }

}
