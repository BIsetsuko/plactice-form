"use server";

import { redirect } from "next/navigation";

export async function postAction(formData: FormData) {
  const name = formData.get("name");
  console.log(name);
  // 必要な処理を書く
  // 例えばリダイレクト
  redirect("/simple/thanks");
}