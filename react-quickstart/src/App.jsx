import "./App.css"
import AdminPanel from "./AdminPanel";
import LoginForm from "./LoginForm";

function App() {
  let isLoggedIn = tfalse;

  return (
    <>
      <h1>Welcome to my app</h1>
      {isLoggedIn ? (
        <AdminPanel />
      ) : (
        <LoginForm />
      )}
    </>
  )
}

export default App
