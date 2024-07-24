import { ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";

export interface ProductModel {
  _id: ObjectId;
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ProductModelBulk {
  _id: ObjectId
  name: string
  price: number
  thumbnail: string
}

export const getDb = async () => {
  const client = await getMongoClientInstance();
  const db = client.db("casemov");
  return db;
};

export const GetAllProducts = async (page: number, limit: number, search?: string) => {
  const db = await getDb();
  const query = search ? { name: { $regex: search, $options: "i" } } : {};
  const products = (await db
    .collection("products")
    .find(query)
    .skip(page * limit)
    .limit(limit)
    .toArray()) as ProductModel[];
  return products;
};

export const GetProductById = async (id: string) => {
  const db = await getDb();
  const products = (await db
    .collection("products")
    .findOne({ _id: new ObjectId(id) })) as ProductModel;
  return products;
};

export const GetProductBySlug = async (slug: string) => {
  const db = await getDb();
  const products = (await db
    .collection("products")
    .findOne({ slug: slug })) as ProductModel;
  return products;
};
