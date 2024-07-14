import conf from "../conf/config.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteURI)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAc = await this.account.create(
        ID.unique,
        email,
        password,
        name
      );
      if (userAc) return this.loginAccount(email, password);
      else return userAc;
    } catch (error) {
      throw error;
    }
  }

  async loginAccount({ email, password }) {
    try {
      const userExist = await this.account.createSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrUser() {
    try {
      return await this.account.get();
    } catch (error) {
      throw error;
    }
    return null;
  }

  async userLogout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
}
const authService = new AuthService();

export default authService;
