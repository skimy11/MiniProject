

function App() {
  return (
    <div className="is-preload">
      <div id="wrapper">
        <div id="main">
          <div className="inner">
            <header id="header">
              <a href="#" className="logo">
                <strong>Editorial</strong> by HTML5 UP
              </a>
              <ul className="icons">
                <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon brands fa-snapchat-ghost"><span className="label">Snapchat</span></a></li>
                <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="#" className="icon brands fa-medium-m"><span className="label">Medium</span></a></li>
              </ul>
            </header>

            <section id="banner">
              <div className="content">
                <header>
                  <h1>
                    Hi, I’m Editorial<br />
                    by HTML5 UP
                  </h1>
                  <p>A free and fully responsive site template</p>
                </header>
                <p>
                  Aenean ornare velit lacus, ac varius enim ullamcorper eu.
                </p>
                <ul className="actions">
                  <li><a href="#" className="button big">Learn More</a></li>
                </ul>
              </div>
              <span className="image object">
                <img src="/images/pic10.jpg" alt="" />
              </span>
            </section>
            <section>
              <header className="major">
                <h2>Erat lacinia</h2>
              </header>
            </section>
          </div>
        </div>
        <div id="sidebar">
          <div className="inner">

            <section id="search" className="alt">
              <form>
                <input type="text" placeholder="Search" />
              </form>
            </section>

            <footer id="footer">
              <p className="copyright">
                &copy; Untitled. All rights reserved.
              </p>
            </footer>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
