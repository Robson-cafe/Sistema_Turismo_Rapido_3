import React from "react";

import ouroPreto from "../../../assets/img/destinations/ouro-preto.png";
import rioDeJaneiro from "../../../assets/img/destinations/rio-de-janeiro.jpg";
import pelourinho from "../../../assets/img/destinations/pelourinho.jpg";
import curitiba from "../../../assets/img/destinations/curitiba.jpg";

function Content(){
    return(
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12 pt-5">
          <h3 className="text-center fw-bold mb-3">Roteiros de viagem</h3>
          <h4 className="text-center mb-5">
            Confira os pricipais roteiros de viagem pelo Brasil
          </h4>

          <div
            className="rounded mb-5 nav justify-content-center"
            id="tour-days"
          >
            <span className="d-block align-middle">Roteiros de até</span>
            <div
              className="btn-group ms-2"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btn1"
                autoComplete="off"
              />
              <label className="btn" htmlFor="btn1">
                1 dia
              </label>
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btn2"
                autoComplete="off"
              />
              <label className="btn" htmlFor="btn2">
                2 dias
              </label>
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btn3"
                autoComplete="off"
              />
              <label className="btn" htmlFor="btn3">
                3 dias
              </label>
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btn4"
                autoComplete="off"
              />
              <label className="btn" htmlFor="btn4">
                4 dias
              </label>
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btn5"
                autoComplete="off"
              />
              <label className="btn" htmlFor="btn5">
                5 dias
              </label>
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btn6"
                autoComplete="off"
              />
              <label className="btn" htmlFor="btn6">
                6 dias
              </label>
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btn7"
                autoComplete="off"
              />
              <label className="btn" htmlFor="btn7">
                7 dias
              </label>
            </div>
          </div>

          <div id="destinations" className="carousel carousel-dark slide">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <div className="row row-cols-1 row-cols-md-3 g-4 pb-5">
                  <div className="col-md-3 col-sm-12">
                    <div className="card">
                      <div className="thumb">
                        <img
                          src={ouroPreto}
                          className="card-img-top w-100"
                          alt="Ouro Preto"
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title fw-bold">
                          Ouro Preto{" "}
                          <button className="btn btn-light heart float-end">
                            <i className="bi bi-heart-fill"></i>{" "}
                            <span>100</span>
                          </button>
                        </h5>
                        <p className="card-text">
                          Ouro Preto é uma cidade colonial na Serra do Espinhaço, na zona leste do Brasil. É conhecida pela arquitetura barroca, que inclui pontes, fontes e praças, e pelas ruas calcetadas [...]
                        </p>
                        <p className="mb-1">
                          <span className="btn btn-secondary rounded-5">
                            <i className="bi bi-calendar3"></i> 2 dias
                          </span>
                        </p>
                        <p>
                          <span className="btn btn-secondary rounded-5">
                            <i className="bi bi-cash-coin"></i> A partir de{" "}
                            <strong>R$ 140,99</strong>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <div className="card">
                      <img
                        src={rioDeJaneiro}
                        className="card-img-top"
                        alt="Rio de Janeiro"
                      />
                      <div className="card-body">
                        <h5 className="card-title fw-bold">
                          Rio de Janeiro{" "}
                          <button className="btn btn-light heart float-end">
                            <i className="bi bi-heart-fill"></i> <span>75</span>
                          </button>
                        </h5>
                        <p className="card-text">
                          O Rio de Janeiro é uma grande cidade brasileira à beira-mar, famosa pelas praias de Copacabana e Ipanema, pela estátua de 38 metros de altura do Cristo Redentor [...]
                        </p>
                        <p className="mb-1">
                          <span className="btn btn-secondary rounded-5">
                            <i className="bi bi-calendar3"></i> 2 dias
                          </span>
                        </p>
                        <p>
                          <span className="btn btn-secondary rounded-5">
                            <i className="bi bi-cash-coin"></i> A partir de{" "}
                            <strong>R$ 140,99</strong>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <div className="card">
                      <img
                        src={pelourinho}
                        className="card-img-top"
                        alt="Pelourinho"
                      />
                      <div className="card-body">
                        <h5 className="card-title fw-bold">
                          Salvador{" "}
                          <button className="btn btn-light heart float-end">
                            <i className="bi bi-heart-fill"></i> <span>20</span>
                          </button>
                        </h5>
                        <p className="card-text">
                          Salvador, a capital do estado da Bahia no nordeste do Brasil, é conhecida pela arquitetura colonial portuguesa, pela cultura afrobrasileira e pelo litoral tropical. O bairro do Pelourinho é seu [...]
                        </p>
                        <p className="mb-1">
                          <span className="btn btn-secondary rounded-5">
                            <i className="bi bi-calendar3"></i> 2 dias
                          </span>
                        </p>
                        <p>
                          <span className="btn btn-secondary rounded-5">
                            <i className="bi bi-cash-coin"></i> A partir de{" "}
                            <strong>R$ 140,99</strong>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <div className="card">
                      <img
                        src={curitiba}
                        className="card-img-top"
                        alt="Curitiba"
                      />
                      <div className="card-body">
                        <h5 className="card-title fw-bold">
                          Curitiba{" "}
                          <button className="btn btn-light heart float-end">
                            <i className="bi bi-heart-fill"></i> <span>35</span>
                          </button>
                        </h5>
                        <p className="card-text">
                          Curitiba é a capital do estado do Paraná, na região sul do Brasil. A Torre Panorâmica, que tem um observatório em sua parte superior, destaca-se na silhueta da cidade. Conhecida como centro [...]
                        </p>
                        <p className="mb-1">
                          <span className="btn btn-secondary rounded-5">
                            <i className="bi bi-calendar3"></i> 2 dias
                          </span>
                        </p>
                        <p>
                          <span className="btn btn-secondary rounded-5">
                            <i className="bi bi-cash-coin"></i> A partir de{" "}
                            <strong>R$ 140,99</strong>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <div className="row row-cols-1 row-cols-md-3 g-4 pb-5">
                  <div className="col-md-3 col-sm-12">
                    <div className="card">
                      <img
                        src={ouroPreto}
                        className="card-img-top w-100"
                        alt="Ouro Preto"
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          Ouro Preto{" "}
                          <button className="btn btn-light heart float-end">
                            <i className="bi bi-heart-fill"></i>{" "}
                            <span>100</span>
                          </button>
                        </h5>
                        <p className="card-text">
                          This is a longer card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <p className="mb-1">
                          <span className="btn btn-secondary rounded-5">
                            <i className="bi bi-calendar3"></i> 2 dias
                          </span>
                        </p>
                        <p>
                          <span className="btn btn-secondary rounded-5">
                            <i className="bi bi-cash-coin"></i> A partir de{" "}
                            <strong>R$ 140,99</strong>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <div className="card">
                      <img
                        src={rioDeJaneiro}
                        className="card-img-top"
                        alt="Rio de Janeiro"
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          Rio de Janeiro{" "}
                          <button className="btn btn-light heart float-end">
                            <i className="bi bi-heart-fill"></i> <span>75</span>
                          </button>
                        </h5>
                        <p className="card-text">
                          This is a longer card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <p className="mb-1">
                          <span className="btn btn-secondary rounded-5">
                            <i className="bi bi-calendar3"></i> 2 dias
                          </span>
                        </p>
                        <p>
                          <span className="btn btn-secondary rounded-5">
                            <i className="bi bi-cash-coin"></i> A partir de{" "}
                            <strong>R$ 140,99</strong>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <div className="card">
                      <img
                        src={pelourinho}
                        className="card-img-top"
                        alt="Pelourinho"
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          Salvador{" "}
                          <button className="btn btn-light heart float-end">
                            <i className="bi bi-heart-fill"></i> <span>20</span>
                          </button>
                        </h5>
                        <p className="card-text">
                          This is a longer card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <p className="mb-1">
                          <span className="btn btn-secondary rounded-5">
                            <i className="bi bi-calendar3"></i> 2 dias
                          </span>
                        </p>
                        <p>
                          <span className="btn btn-secondary rounded-5">
                            <i className="bi bi-cash-coin"></i> A partir de{" "}
                            <strong>R$ 140,99</strong>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <div className="card">
                      <img
                        src={curitiba}
                        className="card-img-top"
                        alt="Curitiba"
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          Curitiba{" "}
                          <button className="btn btn-light heart float-end">
                            <i className="bi bi-heart-fill"></i> <span>35</span>
                          </button>
                        </h5>
                        <p className="card-text">
                          This is a longer card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <p className="mb-1">
                          <span className="btn btn-secondary rounded-5">
                            <i className="bi bi-calendar3"></i> 2 dias
                          </span>
                        </p>
                        <p>
                          <span className="btn btn-secondary rounded-5">
                            <i className="bi bi-cash-coin"></i> A partir de{" "}
                            <strong>R$ 140,99</strong>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row row-cols-1 row-cols-md-3 g-4 pb-5">
                  <div className="col-md-3 col-sm-12">
                    <div className="card">
                      <img
                        src={ouroPreto}
                        className="card-img-top w-100"
                        alt="Ouro Preto"
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          Ouro Preto{" "}
                          <button className="btn btn-light heart float-end">
                            <i className="bi bi-heart-fill"></i>{" "}
                            <span>100</span>
                          </button>
                        </h5>
                        <p className="card-text">
                          This is a longer card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <p className="mb-1">
                          <span className="btn btn-secondary rounded-5">
                            <i className="bi bi-calendar3"></i> 2 dias
                          </span>
                        </p>
                        <p>
                          <span className="btn btn-secondary rounded-5">
                            <i className="bi bi-cash-coin"></i> A partir de{" "}
                            <strong>R$ 140,99</strong>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <div className="card">
                      <img
                        src={rioDeJaneiro}
                        className="card-img-top"
                        alt="Rio de Janeiro"
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          Rio de Janeiro{" "}
                          <button className="btn btn-light heart float-end">
                            <i className="bi bi-heart-fill"></i> <span>75</span>
                          </button>
                        </h5>
                        <p className="card-text">
                          This is a longer card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <p className="mb-1">
                          <span className="btn btn-secondary rounded-5">
                            <i className="bi bi-calendar3"></i> 2 dias
                          </span>
                        </p>
                        <p>
                          <span className="btn btn-secondary rounded-5">
                            <i className="bi bi-cash-coin"></i> A partir de{" "}
                            <strong>R$ 140,99</strong>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <div className="card">
                      <img
                        src={pelourinho}
                        className="card-img-top"
                        alt="Pelourinho"
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          Salvador{" "}
                          <button className="btn btn-light heart float-end">
                            <i className="bi bi-heart-fill"></i> <span>20</span>
                          </button>
                        </h5>
                        <p className="card-text">
                          This is a longer card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <p className="mb-1">
                          <span className="btn btn-secondary rounded-5">
                            <i className="bi bi-calendar3"></i> 2 dias
                          </span>
                        </p>
                        <p>
                          <span className="btn btn-secondary rounded-5">
                            <i className="bi bi-cash-coin"></i> A partir de{" "}
                            <strong>R$ 140,99</strong>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <div className="card">
                      <img
                        src={curitiba}
                        className="card-img-top"
                        alt="Curitiba"
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          Curitiba{" "}
                          <button className="btn btn-light heart float-end">
                            <i className="bi bi-heart-fill"></i> <span>35</span>
                          </button>
                        </h5>
                        <p className="card-text">
                          This is a longer card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <p className="mb-1">
                          <span className="btn btn-secondary rounded-5">
                            <i className="bi bi-calendar3"></i> 2 dias
                          </span>
                        </p>
                        <p>
                          <span className="btn btn-secondary rounded-5">
                            <i className="bi bi-cash-coin"></i> A partir de{" "}
                            <strong>R$ 140,99</strong>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#destinations"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#destinations"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <p className="text-center">
            <a
              href="/pesquisar-roteiro"
              className="btn btn-warning btn-lg rounded-pill me-2 ps-4 pe-4 mt-3 mb-5"
            >
              Explorar mais
            </a>
          </p>
			<div className="mx-auto text-center py-5 bg-white rounded-4 mb-5">
			<h2 className="mb-4 text-center">Inscreva-se e receba descontos especiais</h2>

			<p className="mb-4">Inscreva-se em nossa newsletter e receba semalmente as melhores sugestões de roteiros com os melhores preços. É grátis! ; )</p>

			<div className="m-auto d-block" style={{width: "50%"}}>
			<div className="input-group mb-3">
			<input type="text" className="form-control" placeholder="Seu melhor email" aria-label="Seu melhor email" aria-describedby="button-addon2" />
			<button className="btn btn-outline-secondary" type="button" id="button-addon2">Inscrever-se</button>
			</div>
			</div>
			</div>
        </div>
      </div>
    </div>
	)

}

export default Content;