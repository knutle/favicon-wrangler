import { useCallback, useEffect, useState } from 'react'
import Button from '../components/Button'
import RedirButton from '../components/RedirButton'
import styles from '../styles/home.module.css'

function throwError() {
  console.log(
    // The function body() is not defined
    document.body()
  )
}

function Home() {
  const [count, setCount] = useState(0)
  const increment = useCallback(() => {
    setCount((v) => v + 1)
  }, [setCount])

  useEffect(() => {
    const r = setInterval(() => {
      increment()
    }, 1000)

    return () => {
      clearInterval(r)
    }
  }, [increment])

  return (
    <main className={styles.main}>
      <h1>Wrangle a favicon whether your password manager wants it or not</h1>
      <p>
        For my extremely specific and pedantic use case where for some sites the icon of the saved login item would not load the correct favicon from the url, I naturally spent an unnecessary amount of time making this project so I can add this url as well as the original in order to force the password manager to display the favicon even when it does not want to. Incidentally, I may have a bit too much free time. Oh well, sure hope it works when I actually test it in the password manager 🤷
      </p>
      <hr className={styles.hr} />
      <div>
        <p>
          Here is the current favicon ready to be force-fed to your passsword manager of choice.
        </p>
        <p><img className={styles.icon} src="https://favicon.im/google.com"/></p>
      </div>
      <hr className={styles.hr} />
      <div>
        <p>Click here to proceed to your actual destination if you ended up here by accident.</p>
        <RedirButton />
      </div>
      <hr className={styles.hr} />
    </main>
  )
}

export default Home
