import { Link } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white flex-shrink-0">
      <div className="p-4 text-2xl font-bold">Admin</div>
      <nav className="flex flex-col space-y-2 p-4">
        <Link to="/admin/dashboard" className="hover:bg-gray-700 p-2 rounded">
          Dashboard
        </Link>
        <Link
          to="/admin/manage-content"
          className="hover:bg-gray-700 p-2 rounded"
        >
          Manage Content
        </Link>
        {/* other admin links */}
      </nav>
    </aside>
  );
}
