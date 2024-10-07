"use server";

export async function postAction(formData: FormData) {
  const name = formData.get("name");
  console.log(name);
  // 必要な処理を書く
}