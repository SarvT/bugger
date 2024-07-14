import conf from "../conf/config";

import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  storage;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteURI)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost({ title, slug, content, img, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDBId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          img,
          status,
          userId,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async updatePost(slug, { title, content, img, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDBId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          img,
          status,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDBId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      throw error;
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDBId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      throw error;
      return false;
    }
  }

  async getAllActivePosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDBId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      throw error;
      return false;
    }
  }





  async uploadFile(file){
    try{
        return await this.storage.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
        )
return true;
    }catch(error){
        throw error;
        return file;
    }
  }

  async deleteFile(fileId){
    try {
        await this.storage.deleteFile(
            conf.appwriteBucketId,
            fileId
        )
        return true;
    } catch (error) {
        throw error;
        return false;
    }
  }

  getFilePreview(fileId){
    return this.storage.getFilePreview(
        conf.appwriteBucketId,
        fileId 
    )
  }
}

const service = new Service();
export default service;
