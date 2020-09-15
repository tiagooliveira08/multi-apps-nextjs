import Link from "next/link";

export default function buy() {
  return (
    <div>
      <h4>Modulo de compra</h4>
      <ul>
        <li>
          <Link href="/home" passHref>
            <a>Home</a>
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
