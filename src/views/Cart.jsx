const React = require('react');
const Layout = require('./Layout');

// TODO: Сделать пустое избранное

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
  {
    color: { link: '/images/socks/colors/blue.png' }, pattern: { link: '/images/socks/patterns/1.png' }, image: { link: '/images/socks/images/1.png' }, price: 990, size: 'S',
  },
  {
    color: { link: '/images/socks/colors/green.png' }, pattern: { link: '/images/socks/patterns/2.png' }, image: { link: '/images/socks/images/2.png' }, price: 990, size: 'M',
  },
  {
    color: { link: '/images/socks/colors/purple.png' }, pattern: { link: '/images/socks/patterns/3.png' }, image: { link: '/images/socks/images/3.png' }, price: 990, size: 'L',
  },
  {
    color: { link: '/images/socks/colors/blue.png' }, pattern: { link: '/images/socks/patterns/1.png' }, image: { link: '/images/socks/images/1.png' }, price: 990, size: 'S',
  },
  {
    color: { link: '/images/socks/colors/green.png' }, pattern: { link: '/images/socks/patterns/2.png' }, image: { link: '/images/socks/images/2.png' }, price: 990, size: 'M',
  },
  {
    color: { link: '/images/socks/colors/purple.png' }, pattern: { link: '/images/socks/patterns/3.png' }, image: { link: '/images/socks/images/3.png' }, price: 990, size: 'L',
  },
  {
    color: { link: '/images/socks/colors/blue.png' }, pattern: { link: '/images/socks/patterns/1.png' }, image: { link: '/images/socks/images/1.png' }, price: 990, size: 'S',
  },
  {
    color: { link: '/images/socks/colors/green.png' }, pattern: { link: '/images/socks/patterns/2.png' }, image: { link: '/images/socks/images/2.png' }, price: 990, size: 'M',
  },
  {
    color: { link: '/images/socks/colors/purple.png' }, pattern: { link: '/images/socks/patterns/3.png' }, image: { link: '/images/socks/images/3.png' }, price: 990, size: 'L',
  },
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

module.exports = function Cart({ user, socks }) {
  return (
    <Layout user={user} styles="./styles/favorites.css">
      <div className="body">

        <div className="d-flex flex-wrap justify-content-center">

          {arr.map((el) => (
            <div className="card body-cart">
              <div className="card-body d-flex justify-content-center cst-delete-btn">
                <div className="nav-item text-center ">
                  <a className="nav-link" href="/generator">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div className="d-flex justify-content-center">

                <div className="cst-favorits-box">
                  <img className="cst-sock cst-image favorits" src={el.image.link} alt="" />
                  <img className="cst-sock cst-pattern favorits" src={el.pattern.link} alt="" />
                  <img className="cst-sock cst-color favorits" src={el.color.link} alt="" />
                </div>
              </div>
            </div>
          ))}

        </div>
        <div>
          <div className="buy">

            <div className="nav-item text-center">
              <a className="nav-link" href="/generator">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>
                </div>
                <div>
                  Купить ещё!
                </div>
              </a>
            </div>

            <div className="nav-item text-center">
              <a className="nav-link" href="/">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-cart-check" viewBox="0 0 16 16">
                    <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                  </svg>
                </div>
                <div>
                  Оформить заказ!
                </div>
              </a>
            </div>
          </div>

        </div>

      </div>

    </Layout>
  );
};
