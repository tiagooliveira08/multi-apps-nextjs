import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h4>Home</h4>
      <ul>
        <li>
          <Link href="/buy" passHref>
            <a>Modulo de compra</a>
          </Link>
        </li>
        <li>
          <Link href="/magazine" passHref>
            <a>Revista</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
