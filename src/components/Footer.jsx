export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 p-4 mt-8">
      <div className="container mx-auto text-center">
        © {new Date().getFullYear()} ABC — All rights reserved.
      </div>
    </footer>
  );
}
