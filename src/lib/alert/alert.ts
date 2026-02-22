import Swal from "sweetalert2";

export const alertSuccess = (message: string) => {
  return Swal.fire({
    icon: "success",
    title: "Success",
    text: message,
  });
};

export const alertError = (message: string) => {
  return Swal.fire({
    icon: "error",
    title: "Error",
    text: message,
  });
};
