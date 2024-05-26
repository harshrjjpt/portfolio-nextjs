import styles from "./Entry.module.scss";
import EntryAbout from "./EntryAbout";
import MainTitle from "./ui/title/MainTitle";

export default function Entry() {
  return (
    <main className={styles.main}>
      {/* <Navbar /> */}
      <section className={styles.mainSection}>
        <MainTitle></MainTitle>
      </section>
      <section className={styles.secondSection}></section>
      <EntryAbout />
    </main>
  );
}
