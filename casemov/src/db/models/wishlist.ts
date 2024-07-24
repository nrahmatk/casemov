  import { ObjectId } from "mongodb";
  import { getMongoClientInstance } from "../config";

  export interface WishlistModel {
    _id?: ObjectId;
    userId: ObjectId;
    productId: ObjectId;
    createdAt: string;
    updatedAt: string;
  }

  export const getDb = async () => {
    const client = await getMongoClientInstance();
    const db = client.db("casemov");
    return db;
  };

  export const addToWishlist = async (userId: string, productId: string) => {
      const db = await getDb();
      const wishlistCollection = db.collection("wishlist");

      const existingWishlistItem = await wishlistCollection.findOne({
        userId: new ObjectId(userId),
        productId: new ObjectId(productId),
      });

      if (existingWishlistItem) {
        throw new Error("Product is already in the wishlist")
      }

      const result = await wishlistCollection.insertOne({
        userId: new ObjectId(userId),
        productId: new ObjectId(productId),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      return result.insertedId;
    };
    
    export const getWishlist = async (userId: string) => {
      const db = await getDb();
      const wishlistCollection = db.collection("wishlist");
      const wishlistWithProducts = await wishlistCollection.aggregate([
        { $match: { userId: new ObjectId(userId) } }, 
        {
          $lookup: {
            from: "products", 
            localField: "productId", 
            foreignField: "_id", 
            as: "products" 
          }
        },
        {
          $unwind: "$products"
        }
      ]).toArray();
    
      return wishlistWithProducts;
    };
    
    export const removeFromWishlist = async (userId: string, productId: string) => {
      const db = await getDb();
      const wishlistCollection = db.collection("wishlist");
      const result = await wishlistCollection.deleteOne({
        userId: new ObjectId(userId),
        productId: new ObjectId(productId),
      });
      return result.deletedCount;
    };