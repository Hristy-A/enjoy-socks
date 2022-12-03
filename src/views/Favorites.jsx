const React = require('react');
const Layout = require('./Layout');

module.exports = function Favorites({ user, socks }) {
  return (
    <Layout user={user} favoritesLength={socks.length} styles="./styles/favorites.css">
      <div className="body">

        <div data-empty-message className={`${socks.length === 0 ? 'd-flex flex-column justify-content-center align-items-center' : 'd-none'}`}>
          <div>
            <h3>
              В избранном пусто
            </h3>
          </div>
          <div>
            <h5>
              Добавляйте товары с помощью
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
            </h5>
          </div>
        </div>

        <div data-all-card-container className="d-flex flex-wrap justify-content-center">

          {socks.map((sock) => (
            <div data-card data-id-type={sock.uuid ? 'uuid' : 'id'} data-uuid={sock.uuid} data-id={sock.id} className="card body-cart">
              <div className="d-flex justify-content-center">
                <div>
                  <div className="cst-favorits-box">

                    {sock.image !== null && (
                    <img data-id={sock.image?.id ?? ''} className="cst-sock cst-image favorits" src={sock.image?.link ?? ''} alt="" />
                    )}
                    {sock.pattern !== null && (
                    <img data-id={sock.pattern?.id ?? ''} className="cst-sock cst-pattern favorits" src={sock.pattern?.link ?? ''} alt="" />
                    )}
                    <img data-id={sock.color?.id ?? '1'} className="cst-sock cst-color favorits" src={sock.color.link} alt="" />

                  </div>
                </div>
              </div>

              <div className="card-body d-flex justify-content-center">

                <div className="card-body d-flex justify-content-center">
                  <div data-delete-btn className="nav-item text-center">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div data-move-to-cart className="card-body d-flex justify-content-center">
                  <div className="nav-item text-center">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-basket2" viewBox="0 0 17 17">
                        <path d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0v-2z" />
                        <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6H2.163z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div data-move-share className="card-body d-flex justify-content-center">
                  <div className="nav-item text-center">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-share-fill" viewBox="0 0 20 20">
                        <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
                      </svg>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          ))}

        </div>

      </div>
      <script src="./scripts/favorite.js" />
    </Layout>
  );
};
