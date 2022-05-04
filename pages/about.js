import Link from 'next/link';

function Sobre() {
  return (
    <div>
      <h1>Sobre</h1>
      <p>
        <Link href="/climate">
          <a>Acessar página Tempo</a>
        </Link>
      </p>
    </div>
  );
}

export default Sobre;