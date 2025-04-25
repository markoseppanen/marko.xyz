import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>marko.xyz</h1>
      </header>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="">home</a>
          </li>
          <li>
            <a href="">about</a>
          </li>
        </ul>
      </nav>
      <main className={styles.main}>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        tenetur nulla nam reiciendis, amet assumenda doloremque fugit
        dignissimos animi aliquam neque labore voluptate, odio, rerum
        repudiandae. Doloremque numquam, delectus voluptatem facere veniam
        quaerat, temporibus possimus minima et nemo doloribus ut velit maxime
        sed quos provident officia quod minus facilis ad neque, hic sint.
        Explicabo sit, quod ad modi unde dolor quibusdam vitae nostrum accusamus
        aliquam aliquid architecto numquam hic earum voluptatibus asperiores
        nobis rerum magnam fugit enim reprehenderit similique. Explicabo non
        enim, expedita magnam inventore alias sunt possimus facilis cum nulla
        doloribus dolores a temporibus quas ratione quidem impedit distinctio
        velit laudantium excepturi. Ut, rem in sunt dicta iusto ullam quam velit
        animi nobis illo, accusamus exercitationem ab iste obcaecati dolorem
        sequi dolorum deleniti, deserunt autem nulla. Nam quae molestiae,
        doloremque quis esse mollitia assumenda omnis, voluptate quo velit
        officia, eveniet soluta eligendi corrupti nulla a architecto itaque
        ipsum. Nesciunt, hic? Eius suscipit nostrum inventore exercitationem
        recusandae veritatis, unde amet dicta fugit vero eligendi maiores
        voluptatem dignissimos totam nemo quisquam assumenda sed deserunt minus
        vitae voluptatum distinctio? Ratione debitis sapiente cumque minus modi
        praesentium, veritatis repudiandae vero quam eos eaque qui adipisci a
        velit. Fuga earum unde commodi praesentium excepturi!
      </main>

      <footer className={styles.footer}>
        <a
          href="https://bsky.app/profile/marko.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/bsky.svg"
            alt="Bluesky icon"
            width={16}
            height={16}
          />
          @marko.xyz
        </a>
      </footer>
    </div>
  );
}
