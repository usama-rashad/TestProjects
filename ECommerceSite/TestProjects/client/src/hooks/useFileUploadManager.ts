import { useSelector } from "react-redux";
import { rootStore, RootState } from "./../store";

function useFileUploadManager() {
  const { status, message } = useSelector((state: RootState) => state.fileUpload.fileUploadReducer);
  return { status, message };
}

export default useFileUploadManager;
