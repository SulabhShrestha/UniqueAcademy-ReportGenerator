function Header() {
  return (
    <header className="flex flex-col gap-2 md:flex-row md:justify-between py-4 px-12 border-b-2">
      <h1 className="text-3xl font-bold text-center">Unique Academy</h1>
      <nav className="flex items-center gap-4">
        <button className="bg-green-300 px-4 py-2 rounded-lg">
          Transfer Cert
        </button>
        <button className="bg-green-300 px-4 py-2 rounded-lg">
          Result Cert
        </button>
      </nav>
    </header>
  );
}

export default Header;
