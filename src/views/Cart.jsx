const React = require('react');
const Layout = require('./Layout');

const arr = [
  { color: { link: '/images/socks/colors/blue.png' }, pattern: { link: '/images/socks/patterns/1.png' }, image: { link: '/images/socks/images/1.png' }, price: 990, size: 'S' },
  { color: { link: '/images/socks/colors/green.png' }, pattern: { link: '/images/socks/patterns/2.png' }, image: { link: '/images/socks/images/2.png' }, price: 990, size: 'M' },
  { color: { link: '/images/socks/colors/purple.png' }, pattern: { link: '/images/socks/patterns/3.png' }, image: { link: '/images/socks/images/3.png' }, price: 990, size: 'L' },
  { color: { link: '/images/socks/colors/blue.png' }, pattern: { link: '/images/socks/patterns/1.png' }, image: { link: '/images/socks/images/1.png' }, price: 990, size: 'S' },
  { color: { link: '/images/socks/colors/green.png' }, pattern: { link: '/images/socks/patterns/2.png' }, image: { link: '/images/socks/images/2.png' }, price: 990, size: 'M' },
  { color: { link: '/images/socks/colors/purple.png' }, pattern: { link: '/images/socks/patterns/3.png' }, image: { link: '/images/socks/images/3.png' }, price: 990, size: 'L' },
  { color: { link: '/images/socks/colors/blue.png' }, pattern: { link: '/images/socks/patterns/1.png' }, image: { link: '/images/socks/images/1.png' }, price: 990, size: 'S' },
  { color: { link: '/images/socks/colors/green.png' }, pattern: { link: '/images/socks/patterns/2.png' }, image: { link: '/images/socks/images/2.png' }, price: 990, size: 'M' },
  { color: { link: '/images/socks/colors/purple.png' }, pattern: { link: '/images/socks/patterns/3.png' }, image: { link: '/images/socks/images/3.png' }, price: 990, size: 'L' },
  { color: { link: '/images/socks/colors/blue.png' }, pattern: { link: '/images/socks/patterns/1.png' }, image: { link: '/images/socks/images/1.png' }, price: 990, size: 'S' },
  { color: { link: '/images/socks/colors/green.png' }, pattern: { link: '/images/socks/patterns/2.png' }, image: { link: '/images/socks/images/2.png' }, price: 990, size: 'M' },
  { color: { link: '/images/socks/colors/purple.png' }, pattern: { link: '/images/socks/patterns/3.png' }, image: { link: '/images/socks/images/3.png' }, price: 990, size: 'L' },
  { color: { link: '/images/socks/colors/blue.png' }, pattern: { link: '/images/socks/patterns/1.png' }, image: { link: '/images/socks/images/1.png' }, price: 990, size: 'S' },
  { color: { link: '/images/socks/colors/green.png' }, pattern: { link: '/images/socks/patterns/2.png' }, image: { link: '/images/socks/images/2.png' }, price: 990, size: 'M' },
  { color: { link: '/images/socks/colors/purple.png' }, pattern: { link: '/images/socks/patterns/3.png' }, image: { link: '/images/socks/images/3.png' }, price: 990, size: 'L' },
];

module.exports = function Cart({ user, socks }) {
  return (
    <Layout user={user} styles="./styles/favorites.css">
      <div className="body">

        <div className="d-flex flex-wrap justify-content-center">

          {arr.map((el) => (
            <div className="card body-cart">

              <div className="d-flex justify-content-center">

              <div className="cst-favorits-box">
                  <img className="cst-sock cst-image favorits" src={el.image.link} alt="" />
                  <img className="cst-sock cst-pattern favorits" src={el.pattern.link} alt="" />
                  <img className="cst-sock cst-color favorits" src={el.color.link} alt="" />
                </div>

              </div>
              <div className="card-body d-flex justify-content-center">

              

                <a href="#" className="btn btn-primary cst-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                  </svg>
                </a>
              </div>

            </div>
          ))}

        </div>
        <div>
          <a className="btn btn-primary cst-home-element" href="/generator">Купить еще!</a>
          <a className="btn btn-primary cst-home-element" href="/#">Оформить заказ</a>
        </div>

      </div>

    </Layout>
  );
};
