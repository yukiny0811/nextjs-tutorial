import styles from "./layout.module.css"
import Head from "next/head"
import Image from "next/image"
import utilStyles from "../styles/utils.module.css"
import Link from "next/link"

const name = "Yuki Kuwashima"
export const siteTitle = "Next.js Sample Website"

function Layout({children, home}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" hred="/favicon.ico" />
                <meta name="description" content="learn nextjs" />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image 
                            priority 
                            src="/images/profile.jpg"
                            className={utilStyles.bordercircle} 
                            height={144}
                            width={144}
                            alt="" 
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                            <Image
                                priority
                                src="/images/profile.jpg"
                                className={utilStyles.borderCircle}
                                height={108}
                                width={108}
                                alt=""
                            />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                            <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                <Link href="/">
                    <a>← Back to home</a>
                </Link>
                </div>
            )}
        </div>
    )
}

export default Layout