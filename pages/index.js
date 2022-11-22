import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import PageLayout from "../components/PageLayout";

export default function Home() {
  const router = useRouter();

  return (
    <PageLayout title="NewsApp - Home">
      <div className={styles.container}>
        <h1>Aprendiendo Next.js desde cero</h1>
        <Link href="/about">Ir a about</Link>
        <br></br>
        <a href="/about">About</a>
        <button onClick={() => router.push("/article/2")}>
          Navegar de forma programática
        </button>
      </div>
    </PageLayout>
  );
}
