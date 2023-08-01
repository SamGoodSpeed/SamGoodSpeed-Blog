import styles from "./page.module.css";
import ButtonAtom from "@/src/atoms/ButtonAtom";

export default function Home() {
  return (
    <main className={styles.main}>
      <ButtonAtom />
    </main>
  );
}
