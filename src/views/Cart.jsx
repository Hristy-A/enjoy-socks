const React = require('react');
const Layout = require('./Layout');

module.exports = function Cart({ user, socks }) {
  return (
    <Layout user={user} styles="./styles/favorites.css">
      <div className="modal fade" id="form-order-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Оформление заказа</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="validation-errors" />
                <form method="POST" action="/api/orders" id="form-order-form">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Получатель</label>
                    <input type="text" name="name" id="name" className="form-control" value={user ? user.name : ''} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Электронная почта</label>
                    <input type="email" name="email" id="email" placeholder="name@example.com" className="form-control" value={user ? user.email : ''} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Телефон для связи</label>
                    <input type="text" name="phone" id="phone" className="form-control" value={user ? user.phone : ''} />
                  </div>
                </form>
              </div>
            </div>

            <div className="modal-footer">
              <button id="close-modal-btn" type="button" className="button-off" data-bs-dismiss="modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-backspace" viewBox="0 0 16 16">
                  <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z" />
                  <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z" />
                </svg>
              </button>
              <button id="form-order" type="button" className="button-off">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-envelope-check" viewBox="0 0 16 16">
                  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z" />
                </svg>
              </button>

            </div>
          </div>
        </div>
      </div>

      <div className="body">
        <div data-card-container className="d-flex flex-wrap justify-content-center">
          <div data-empty-cart-message className={`${socks.length === 0 ? 'd-flex flex-column justify-content-center align-items-center' : 'd-none'}`}>
            <div>
              <h3>
                В корзине пусто
              </h3>
            </div>
            <div>
              <h5>
                Добавляйте товары с помощью
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-basket2" viewBox="0 0 16 16">
                  <path d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0v-2z" />
                  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6H2.163z" />
                </svg>
              </h5>
            </div>
          </div>
        </div>

        <div data-socks-cards-container className="d-flex flex-wrap justify-content-center">
          {socks.map((sock) => (
            <div data-card className="card body-cart cst-card-container">
              <div className="card-body d-flex justify-content-center cst-delete-btn">
                <div data-delete-btn data-id-type={sock.uuid ? 'uuid' : 'id'} data-uuid={sock.uuid} data-id={sock.id} className="nav-item text-center">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">

                <div className="cst-favorits-box">
                  {sock.image !== null && (
                  <img className="cst-sock cst-image favorits" src={sock.image.link} alt="" />
                  )}
                  { sock.pattern !== null && (
                  <img className="cst-sock cst-pattern favorits" src={sock.pattern.link} alt="" />
                  )}
                  <img className="cst-sock cst-color favorits" src={sock.color.link} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div data-make-cell-btns className={`${socks.length === 0 ? 'd-none' : 'd-block'}`}>
          <div className="buy">

            <div className="nav-item text-center">
              <a className="nav-link" href="/generator">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>
                </div>
                <div className="cst-modal-btn-text">
                  Купить ещё
                </div>
              </a>
            </div>

            {
              user
                ? (
                  <div data-bs-toggle="modal" data-bs-target="#form-order-modal" className="nav-item text-center mx-3">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-cart-check" viewBox="0 0 16 16">
                        <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>
                    </div>
                    <div className="cst-modal-btn-text">
                      Заказать
                    </div>
                  </div>
                )
                : (
                  <a href="/login" className="text-decoration-none text-dark">
                    <div className="nav-item text-center mx-3">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                          <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                        </svg>
                      </div>
                      <div className="cst-modal-btn-text">
                        Заказать
                      </div>
                    </div>
                  </a>
                )
            }
          </div>

        </div>

      </div>
      <script src="./scripts/cart.js" />
    </Layout>
  );
};
