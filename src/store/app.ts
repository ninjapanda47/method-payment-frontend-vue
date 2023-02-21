// Utilities
import { defineStore } from "pinia";
import * as paymentService from "@/services/paymentService";
import * as batchService from "@/services/batchService";

export interface BatchData {
  _id: string;
  batchId: string;
  uniqueSourceAccounts: SourceAccount[];
  status: string;
}

const dummyData = {
  _id: "1234",
  batchId: "illenium",
  uniqueSourceAccounts: [
    {
      DunkinId: "AStateOfTrance",
      ABARouting: "148386123",
      AccountNumber: "12719660",
      Name: "Insomniac, LLC",
      DBA: "EDC",
      EIN: "EDC",
      Address: {
        Line1: "7000 N. Las Vegas Blvd",
        City: "Las Vegas",
        State: "NV",
        Zip: "89115",
      },
    },
  ],
  status: "pending",
};

export interface SourceAccount {
  DunkinId: string;
  ABARouting: string;
  AccountNumber: string;
  Name: string;
  DBA: string;
  EIN: string;
  Address: {
    Line1: string;
    Line2?: string;
    City: string;
    State: string;
    Zip: string;
  };
}

export const useAppStore = defineStore("app", {
  state: () => {
    return {
      batch: dummyData as BatchData | null,
      paymentsToProcess: 0 as number,
      sourceAccounts: 0 as number,
      batchList: [] as BatchData[],
    };
  },
  actions: {
    async uploadPayments(batchId: string, file: File) {
      try {
        const response = await paymentService.uploadPaymentsToBatch(
          batchId,
          file
        );
        this.batch = response.batch;
        this.paymentsToProcess = response.savedPayments;
        this.sourceAccounts = response.sourceAccounts;
      } catch (error) {
        return error;
      }
    },
    async getAndSetBatchList() {
      try {
        const response = await batchService.getBatchList();
        this.batchList = response.batchList;
      } catch (error) {
        return error;
      }
    },
    clearBatchData() {
      this.batch = {} as BatchData;
      this.paymentsToProcess = 0;
      this.sourceAccounts = 0;
    },
  },
});
