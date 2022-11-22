import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>NewsApp - Home</title>
      </Head>
      <h1>Aprendiendo Next.js desde cero</h1>
      <Link href="/about">Ir a about</Link>
      <br></br>
      <a href="/about">About</a>
      <button onClick={() => router.push("/article/2")}>
        Navegar de forma programática
      </button>
    </div>
  );
}
