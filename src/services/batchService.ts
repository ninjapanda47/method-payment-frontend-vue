const api = "http://localhost:2000/batch";

export const processBatch = async (batch: object) => {
  let response = await fetch(`${api}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ batch }),
  });
  return await response.json();
};
export const discardBatch = async (batchId: string) => {
  let response = await fetch(`${api}/${batchId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};

export const getBatchList = async () => {
  let response = await fetch(`${api}/list`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};
