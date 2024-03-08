import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="shadow-md">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-2 md:flex-row md:justify-between py-4 px-12">
        <h1 className="text-3xl font-bold text-center">Unique Academy</h1>
        <nav className="flex items-center gap-4">
          <Link to="/transfer">
            <button className="bg-green-300 px-4 py-2 rounded-lg">
              Transfer Cert
            </button>
          </Link>

          <Link to="/result">
            <button className="bg-green-300 px-4 py-2 rounded-lg">
              Result Cert
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
