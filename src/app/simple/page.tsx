import { postAction } from "./postAction";

export default function Page() {
  return (
    <div className="w-2/4 mt-72 m-auto">
      <form className="flex gap-3" action={postAction}>
        <input
          type="text"
          name="name"
          className="w-96 border border-neutral-600 bg-blue-50 rounded-md p-2"
        />
        <button type="submit" className="bg-blue-700 text-white p-2 rounded-md">
          送信
        </button>
      </form>
    </div>
  );
}
