import Header from "./Header";
import Sidebar from "./Sidebar";

export default function PanelLayout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f8f9fb] dark:bg-[#121212]">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <Header />

        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
