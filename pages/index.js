import Home from "./Home";

export default function index() {
  return (
    <>
      <header>
        <title>Fuzzy Logic calculator </title>
      </header>
      <main className="container mx-auto ">
        <Home />
      </main>
      <footer>
        <p className="text-xs text-center">
          Made with <span className="text-pastel-pink-500">&hearts; </span> by
          <a className="font-semibold" href="https://reskyppo.vercel.app/">
            {" "}
            Reskyppo!
          </a>
        </p>
      </footer>
    </>
  );
}
