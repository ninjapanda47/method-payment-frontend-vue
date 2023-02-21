const api = "http://localhost:2000/report";

export const getTotalPerSourceAccountByBatchId = async (batchId: string) => {
  let response = await fetch(
    `${api}/total-account-by-source-account/${batchId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return await response.json();
};

export const getTotalPerBranchByBatchId = async (batchId: string) => {
  let response = await fetch(`${api}/total-account-by-branch/${batchId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};

export const getPaymentsByBatchId = async (batchId: string) => {
  let response = await fetch(`${api}/payments/${batchId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};

exports.getTotalPerSourceAccountByBatchId = getTotalPerSourceAccountByBatchId;
exports.getTotalPerBranchByBatchId = getTotalPerBranchByBatchId;
exports.getPaymentsByBatchId = getPaymentsByBatchId;
