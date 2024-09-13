import { NextResponse } from "next/server";
import { getAboutData } from "@/app/lib/sanity"; // Adjust the import path as necessary

export const revalidate = 0; // revalidate at most every second

export async function GET() {
  try {
    const data = await getAboutData();
    return NextResponse.json(data); // Make sure data is an array of events
  } catch (error) {
    console.error("Error fetching event data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
