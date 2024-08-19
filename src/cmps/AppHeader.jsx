export function AppHeader() {
	return (
	  <header className="header-container">
		<div className="logo">
		  <h1>MyApp</h1>
		</div>
		<nav className="navigation">
		  <ul>
			<li><a href="/home">Home</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/help">Help</a></li>
			<li><a href="/login">Login</a></li>
		  </ul>
		</nav>
		<div className="user-profile">
		  <button className="user-profile-button">Profile</button>
		</div>
	  </header>
	)
  }