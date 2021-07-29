
import '../styles/SignUpPage.css'

const SignUpPage = (props) => {
    return (
        <>  
          <main className="main">
          <div className="leftDiv">
            <div className="welcomeBlock">
              <h1 className="titleWelcome">Welcome Back !</h1>
                <h1 className="subtitleWelcomeBlock">A few clicks away from creating your account</h1>
            </div>
          </div>
          <div className="rigthDiv">
            <div className="formBlock">
            <div className="form">
            <form>
                <label className="align-label">Phone Number</label>
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