"use server";

import { redirect } from "next/navigation";

export async function postActionValidate(formData: FormData) {
  const name = formData.get("name");
  // バリデーション
  if (!name) {
    throw new Error("名前を入力してください");
  }
}
