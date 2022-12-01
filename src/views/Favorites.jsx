const React = require('react');
const Layout = require('./Layout');

// TODO: Сделать пустое избранное

module.exports = function Favorites({ user, socks }) {
  return (
    <Layout user={user} styles="./styles/favorites.css">
      <div className="body">

        <div className="d-flex flex-wrap justify-content-center">

          {socks.map((sock) => (
            <div className="card body-cart">
              <div className="d-flex justify-content-center">
                <div>
                  <div className="cst-favorits-box">

                    {sock.image !== null && (
                    <img className="cst-sock cst-image favorits" src={sock.image?.link ?? ''} alt="" />
                    )}
                    {sock.pattern !== null && (
                    <img className="cst-sock cst-pattern favorits" src={sock.pattern?.link ?? ''} alt="" />
                    )}
                    <img className="cst-sock cst-color favorits" src={sock.color.link} alt="" />

                  </div>
                </div>
              </div>

              <div className="card-body d-flex justify-content-center">

                <div className="card-body d-flex justify-content-center">
                  <div className="nav-item text-center">
                    <a className="nav-link" href="/generator">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="card-body d-flex justify-content-center">
                  <div className="nav-item text-center">
                    <a className="nav-link" href="/generator">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-basket2" viewBox="0 0 17 17">
                          <path d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0v-2z" />
                          <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6H2.163z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="card-body d-flex justify-content-center">
                  <div className="nav-item text-center">
                    <a className="nav-link" href="/generator">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-share-fill" viewBox="0 0 20 20">
                          <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>

              </div>
            </div>

          ))}

        </div>

      </div>

    </Layout>
  );
};
