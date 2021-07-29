import SignUpPage from './components/SignUpPage'


export default function Home() {
  let titleWelcome = 'Welcome Back !'
  let subtitleWelcomeBlock = 'A few clicks away from creating your account'
  return (
   <SignUpPage titleWelcome={titleWelcome} subtitleWelcomeBlock={subtitleWelcomeBlock}/>
  )
}
