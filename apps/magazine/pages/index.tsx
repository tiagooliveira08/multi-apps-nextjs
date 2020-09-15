import Link from "next/link";

export default function buy() {
  return (
    <div>
      <h4>Revista</h4>
      <ul>
        <li>
          <Link href="/home" passHref>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/buy" passHref>
            <a>Modulo de compra</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
