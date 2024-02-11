import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import Image from "next/image";

export default function Home() {
  return (
    <div className="roundedlg h-full w-full overflow-hidden overflow-y-auto bg-neutral-900">
      <Header>
        <div className="mb-2">
          <h1 className="text-3xl font-semibold text-white">Welcome back!</h1>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            <ListItem
              image="/images/liked.png"
              name="Liked Songs"
              href="liked"
            />
          </div>
        </div>
      </Header>
      <div className="mb-7 mt-2 px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-white">Newest songs</h2>
        </div>
        <div>List of songs!</div>
      </div>
    </div>
  );
}
