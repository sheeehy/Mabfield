import { NextResponse } from "next/server";
import { getListenData } from "@/app/lib/sanity"; // Adjust the path based on your file structure

export const revalidate = 0; // Optional: If you want to prevent caching

export async function GET() {
  try {
    const data = await getListenData();
    return NextResponse.json(data); // Ensure that data is being returned as JSON
  } catch (error) {
    console.error("Error fetching listen data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
