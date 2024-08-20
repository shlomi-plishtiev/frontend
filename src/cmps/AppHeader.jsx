export function AppHeader() {
	return (
	  <header className="header-container">
		<div className="logo">
		  <h1>MyApp</h1>
		</div>
		<nav className="navigation">
		  <ul>
			<li><a href="#">Home</a></li>
			<li><a href="#">About</a></li>
			<li><a href="#">Help</a></li>
			<li><a href="#">Login</a></li>
		  </ul>
		</nav>
		<div className="user-profile">
		  <button className="user-profile-button">Profile</button>
		</div>
	  </header>
	)
  }