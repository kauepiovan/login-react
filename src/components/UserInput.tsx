import '../styles/Login.css'

function UserInput() {
  return (
    <>
      <div className="login">
        <form action="">
          <label htmlFor="input-email">
            <p>usuario</p>
            <input type="email" name="email" id="input-email" />
          </label>
          <label htmlFor="input-password">
            <p>senha</p>
            <input type="password" name="password" id="input-password" />
          </label>
        </form>
      </div>
    </>
  )
}

export default UserInput