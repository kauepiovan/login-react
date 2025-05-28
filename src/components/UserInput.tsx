import '../styles/Login.css'

function UserInput() {
  return (
    <>
      <div className="login">
        <h2>login</h2>
        <h4>entre com sua conta</h4>
        <form action="">
          <label htmlFor="input-email">
            <p>usuario</p>
            <input type="email" name="email" id="input-email" required />
          </label>
          <label htmlFor="input-password">
            <p>senha</p>
            <input type="password" name="password" id="input-password" required />
          </label>
          <button id='button-entrar'>entrar</button>
        </form>
      </div>
    </>
  )
}

export default UserInput