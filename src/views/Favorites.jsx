const React = require('react');
const Layout = require('./Layout');

const arr = [
  {
    color: { link: '/images/socks/colors/blue.png' }, pattern: { link: '/images/socks/patterns/1.png' }, image: { link: '/images/socks/images/1.png' }, price: 990, size: 'S',
  },
  {
    color: { link: '/images/socks/colors/green.png' }, pattern: { link: '/images/socks/patterns/2.png' }, image: { link: '/images/socks/images/2.png' }, price: 990, size: 'M',
  },
  {
    color: { link: '/images/socks/colors/purple.png' }, pattern: { link: '/images/socks/patterns/3.png' }, image: { link: '/images/socks/images/3.png' }, price: 990, size: 'L',
  },
];

module.exports = function Favorites({ user, socks }) {
  return (
    <Layout user={user} styles="./styles/favorites.css">
      <div className="body">

        <div className="d-flex flex-wrap justify-content-center">

          {arr.map((el) => (
            <div className="card body-cart">
              <div className="d-flex justify-content-center">
                <div>
                  <div className="cst-favorits-box">
                    <img className="cst-sock cst-image favorits" src={el.image.link} alt="" />
                    <img className="cst-sock cst-pattern favorits" src={el.pattern.link} alt="" />
                    <img className="cst-sock cst-color favorits" src={el.color.link} alt="" />
                  </div>
                </div>
              </div>

              <div className="card-body d-flex justify-content-center">

                <div className="card-body d-flex justify-content-center">
                  <div className="nav-item text-center">
                    <a className="nav-link" href="/generator">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 17 17">
                          <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
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
