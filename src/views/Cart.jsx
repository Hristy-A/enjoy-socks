const React = require('react');
const Layout = require('./Layout');

module.exports = function Cart({ user, socks }) {
  return (
    <Layout user={user}>

      <div className="d-flex flex-wrap justify-content-center">
        <div>
          <div className="card">
            <div className="d-flex justify-content-center">
              <img src="/images/logo.png" className="card-img-top" alt="..." />
            </div>
            <div className="card-body d-flex justify-content-center">
              <span>Кол-во</span>

              <a href="#" className="btn btn-primary cst-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <a className="btn btn-primary cst-home-element" href="/generator">Купить еще!</a>
            <a className="btn btn-primary cst-home-element" href="/#">Оформить заказ</a>
          </div>
        </div>
      </div>

    </Layout>
  );
};
