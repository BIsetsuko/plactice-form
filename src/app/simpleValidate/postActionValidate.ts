"use server";

type ValidationState = {
  errors?: {
    name?: string;
  };
};

export async function postActionValidate(
  prev: ValidationState | undefined,
  formData: FormData
) {
  const name = formData.get("name");

  // バリデーション処理
  if (!name) {
    return {
      errors: {
        name: "名前を入力してください",
      },
    };
  }
}
