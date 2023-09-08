import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

export const metadata = {
  title: "About",
  description: "A simple blog web app created with NextJS",
};

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/7256544/pexels-photo-7256544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill={true}
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storyteller</h1>
          <h2 className={styles.imgDesc}>
            handcrafting award winning digital experience
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            officia quod odit ipsum, a odio illo facere dolorem maxime natus
            cum? Blanditiis eius modi vel veritatis dolore perferendis suscipit
            odit minima quos inventore et, accusamus obcaecati earum similique
            ad voluptatibus voluptas doloribus sint, sed commodi. Maxime
            consequatur facilis id dolor molestiae aspernatur officiis
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            officia quod odit ipsum, a odio illo facere dolorem maxime natus
            cum? Blanditiis eius modi vel veritatis dolore perferendis
            <br />
            <br />
            - quod odit
            <br />
            - quod odit
            <br />- quod odit
          </p>
          <Button text={"Contact"} url={"/contact"} />
        </div>
      </div>
    </div>
  );
};

export default About;
