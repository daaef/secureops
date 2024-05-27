import copy from "copy-to-clipboard";
import { toast } from "react-toastify";

export const copyText = (text) => {
  copy(text);
  toast.success(`Copied to clipboard`);
  // alert(`${text} copied to clipboard`);
};
