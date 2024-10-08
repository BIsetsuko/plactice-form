"use client";

import { useFormState } from "react-dom";
import { postActionValidate } from "./postActionValidate";

export default function Page() {
  const [result, dispatch] = useFormState(postActionValidate, {
    errors: { name: "" },
  });

  return (
    <div className="w-2/4 mt-72 m-auto">
      <form action={dispatch}>
        {result && <div className="text-red-500">{result.errors.name}</div>}
        <input
          type="text"
          name="name"
          className="w-96 border border-neutral-600 bg-blue-50 rounded-md p-2 mr-2"
        />
        <button type="submit" className="bg-blue-700 text-white p-2 rounded-md">
          送信
        </button>
      </form>
    </div>
  );
}
