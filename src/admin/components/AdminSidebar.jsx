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
        <Link to="/admin/journal/add" className="hover:bg-gray-700 p-2 rounded">
          Add Journal
        </Link>
        <Link
          to="/admin/advisory/add"
          className="hover:bg-gray-700 p-2 rounded"
        >
          Add Advisory
        </Link>
        <Link to="/admin/cfp/add" className="hover:bg-gray-700 p-2 rounded">
          Add Call For Paper
        </Link>
        <Link to="/admin/service/add" className="hover:bg-gray-700 p-2 rounded">
          Add Service
        </Link>
        <Link to="/admin/blog/add" className="hover:bg-gray-700 p-2 rounded">
          Add Blog
        </Link>
      </nav>
    </aside>
  );
}
