import Link from 'next/link';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        <Link href="/about">
          <a>Acessar página Sobre</a>
        </Link>
      </p>
    </div>
  );
}

export default Home