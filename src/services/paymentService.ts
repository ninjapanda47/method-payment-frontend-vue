import FormData from "form-data";

const api = "http://localhost:2000/payments";

export const uploadPaymentsToBatch = async (batchId: string, file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("batchId", batchId);
  let response = await fetch(`${api}/upload`, {
    method: "POST",
    body: formData as any,
  });
  return await response.json();
};
