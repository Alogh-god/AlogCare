import react from 'react';
import styles from '../../styles/SignUp.module.scss'


const SignUpPage = (props) => {
    return (
        <>  
          <main className={styles.main}>
          <div className={styles.leftDiv}>
            <div className={styles.welcomeBlock}>
              <h1 className={styles.titleWelcome}>{props.titleWelcome}</h1>
                <h1 className={styles.subtitleWelcomeBlock}>{props.subtitleWelcomeBlock}</h1>
            </div>
          </div>
          <div className={styles.rigthDiv}>
            <div className={styles.formBlock}>
            <div className={styles.form}>
            <form>
                <label>Phone Number</label>
                <input type="tel"></input>
                <label>Email</label>
                <input type="email"></input>
                <label>Password</label>
                <input type="password"></input>
                <label>Confirm Password</label>
                <input type="password"></input>
            </form>
            </div>
           </div>
          </div>
          </main>
        </>
    )
}

export default SignUpPage;