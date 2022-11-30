const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ user }) {
  return (
    <Layout user={user} styles="generator.css">
      <div>
        <img className="cst-home-element" src="./images/logo.png" alt="" width="350" height="350" />
      </div>
      <div>

        <div>
          <div>
            Цвет:
            <img src="/images/socks/colors/white.png" className="card-img-top cst-generator-btn" alt="" />
            <img src="/images/socks/colors/blue.png" className="card-img-top cst-generator-btn" alt="" />
            <img src="/images/socks/colors/green.png" className="card-img-top cst-generator-btn" alt="" />
            <img src="/images/socks/colors/pink.png" className="card-img-top cst-generator-btn" alt="" />
            <img src="/images/socks/colors/purple.png" className="card-img-top cst-generator-btn" alt="" />
            <img src="/images/socks/colors/yellow.png" className="card-img-top cst-generator-btn" alt="" />
          </div>

          <div>
            Рисунок:
            <img src="/images/socks/images/1.png" className="card-img-top cst-generator-btn" alt="" />
            <img src="/images/socks/images/2.png" className="card-img-top cst-generator-btn" alt="" />
            <img src="/images/socks/images/3.png" className="card-img-top cst-generator-btn" alt="" />
            <img src="/images/socks/images/4.png" className="card-img-top cst-generator-btn" alt="" />
          </div>

          <div>
            Узор:
            <img src="/images/socks/patterns/1.png" className="card-img-top cst-generator-btn" alt="" />
            <img src="/images/socks/patterns/2.png" className="card-img-top cst-generator-btn" alt="" />
            <img src="/images/socks/patterns/3.png" className="card-img-top cst-generator-btn" alt="" />
            <img src="/images/socks/patterns/4.png" className="card-img-top cst-generator-btn" alt="" />
          </div>
        </div>

        <div>
          <button type="submit">В избранное</button>
          <button type="submit">В избранное</button>
        </div>

      </div>
    </Layout>
  );
};
