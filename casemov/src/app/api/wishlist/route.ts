import { NextRequest, NextResponse } from "next/server";
import {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
} from "@/db/models/wishlist";
import { headers } from "next/headers";
import { getUserByEmail } from "@/db/models/user";
import { GetProductById } from "@/db/models/products";

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const headersList = headers();
    const userId = headersList.get("x-user-id");
    const email = headersList.get("x-user-email");

    if (!email || !userId) {
      return NextResponse.json({ message: "UNAUTHORIZED" }, { status: 401 });
    }

    const findUser = await getUserByEmail(email);
    if (!findUser) {
      return NextResponse.json({ message: "UNAUTHORIZED" }, { status: 401 });
    }

    const wishlist = await getWishlist(userId);
    return NextResponse.json(wishlist);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const headersList = headers();
    const userId = headersList.get("x-user-id");
    if (!userId) {
      return NextResponse.json(
        { message: "User not authenticated" },
        { status: 401 }
      );
    }
    
    const { productId } = await request.json();
    const findProduct = await GetProductById(productId);
    if (!findProduct) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    const wishlistId = await addToWishlist(userId, productId);
    return NextResponse.json(
      { message: "Success add product to wishlist"},
      { status: 201 }
    );
  } catch (error) {
    let status = 500;
    let message = "Internal Server Error";

    if (error instanceof Error) {
      if (error.message === "Product is already in the wishlist") {
        status = 400;
        message = error.message;
      } else if (error.message === "User not found") {
        status = 404;
        message = error.message;
      }
    }

    return NextResponse.json({ message }, { status });
  }
}

export async function DELETE(request: NextRequest): Promise<NextResponse> {
  try {
    const headersList = headers();
    const userId = headersList.get("x-user-id");

    if (!userId) {
      return NextResponse.json(
        { message: "User not authenticated" },
        { status: 401 }
      );
    }

    const { productId }: { productId: string } = await request.json();
    if (!productId) {
      return NextResponse.json(
        { message: "Product ID is required" },
        { status: 400 }
      );
    }

    const findProduct = await GetProductById(productId);
    if (!findProduct) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    const deletedCount = await removeFromWishlist(userId, productId);
    if (deletedCount === 0) {
      return NextResponse.json(
        { message: "Item not found in wishlist" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Item removed from wishlist" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
