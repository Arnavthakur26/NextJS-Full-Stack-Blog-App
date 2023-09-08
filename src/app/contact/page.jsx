import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

export const metadata = {
  title: "Contact",
  description: "A simple blog web app created with NextJS",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let&apos;s Keep in Touch !</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt="contact"
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            id="name"
            className={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="123@example.com"
            id="email"
            className={styles.input}
          />
          <textarea
            className={styles.textArea}
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <Button text={"Send"} url={"#"} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
