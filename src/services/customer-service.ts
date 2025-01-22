import { GetAllCustomerResponse } from "@/@types/customers/customer";
import { customerApi } from "@/lib/axios";
import { AuthService } from "./auth-service";

export class CustomerService {
  static async getAllCustomers() {
    try {
      const accessToken = await AuthService.getAccessToken();
      Promise.resolve(accessToken)

      const { data } = await customerApi.get<GetAllCustomerResponse>("/customers", {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      return data.results;
    } catch (error) {
      console.log("Get all customers error:", error);
      throw new Error("Internal server error!");
    }
  }
}