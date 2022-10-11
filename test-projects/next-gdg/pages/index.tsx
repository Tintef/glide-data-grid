import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";

import { CompactSelection } from "@glideapps/glide-data-grid";

const Grid = dynamic(
    () => {
        return import("../components/Grid");
    },
    { ssr: false }
);

const Home: NextPage = () => {
    const cs = CompactSelection.fromSingleSelection(12);
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href="https://nextjs.org">Next.js {cs.first()}!</a>
                </h1>
                <p className={styles.description}>
                    Get started by editing <code className={styles.code}>pages/index.tsx</code>
                </p>
                <Grid />
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer">
                    Powered by{" "}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </div>
    );
};

export default Home;