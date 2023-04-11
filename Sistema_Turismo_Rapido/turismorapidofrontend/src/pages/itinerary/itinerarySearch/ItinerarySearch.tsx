import React, { useEffect, useState } from 'react'
import { Navbar, Footer } from '../../../components'
import { useAPI } from 'data/API'

import OuroPreto from '../../../assets/img/destinations/ouro-preto.jpg'
import Pelorinho from '../../../assets/img/destinations/pelourinho.jpg'

interface Roteiro {
  numberOfDays: number
  valor: number
  cidade: any
  id: number
  name: string
  cep: string
  latitude: number
  longitude: number
  // outras propriedades da cidade
}

function ItinerarySearch() {
  const api = useAPI()
  const [roteiros, setRoteiros] = useState<any[]>([])

  useEffect(() => {
    api.get('/roteiros', {}).then((res: Roteiro[]) => {
      setRoteiros(res)
    })
  }, [api, setRoteiros])

  const [resultadosPesquisa, setResultadosPesquisa] = useState<Array<Roteiro>>([])

  const handleSearch = () => {
    const searchInput = document.getElementById('search') as HTMLInputElement
    const query = searchInput.value.toLowerCase().trim()

    if (!query) {
      setResultadosPesquisa([])
      return
    }

    const filteredCidades = roteiros.filter((roteiro) => roteiro.cidade.name.toLowerCase().includes(query))

    if (filteredCidades.length > 0) {
      setResultadosPesquisa(filteredCidades)
    } else {
      setResultadosPesquisa([])
    }
  }

  return (
    <div>
      <Navbar />
      <div id='main'>
        <div className='w-100 top-internas'>
          <h3 className='text-center fw-bold'>Pesquisa de roteiros</h3>
          <div className='d-flex justify-content-center'>
            <nav aria-label='breadcrumb'>
              <ol className='breadcrumb'>
                <li className='breadcrumb-item'>
                  <a href='/'>Home</a>
                </li>
                <li className='breadcrumb-item active' aria-current='page'>
                  Pesquisa de roteiros
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-md-12 col-sm-12'>
              <div className='w-100 rounded-4 bg-white p-5 mb-5'>
                <div className='input-group mb-3'>
                  <input
                    type='text'
                    className='form-control rounded-5'
                    id='search'
                    placeholder='Pesquisar por cidade com algum roteiro'
                    aria-label='Pesquisar roteiro'
                    aria-describedby='button-addon2'
                  />
                  <button
                    className='btn btn-outline-secondary btn-lg'
                    type='button'
                    id='button-search'
                    onClick={handleSearch}
                  >
                    <i className='bi bi-search'></i>
                  </button>
                </div>
                <div id='filters'>
                  <div className='btn-group'>
                    <button
                      className='btn btn-outline-secondary dropdown-toggle rounded-5'
                      type='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      Duração
                    </button>

                    <div className='dropdown-menu p-3'>
                      <div className='form-check'>
                        <input className='form-check-input' type='radio' name='days' id='days1' />
                        <label className='form-check-label' htmlFor='days1'>
                          1 dia
                        </label>
                      </div>
                      <div className='form-check'>
                        <input className='form-check-input' type='radio' name='days' id='days2' />
                        <label className='form-check-label' htmlFor='days2'>
                          2 dias
                        </label>
                      </div>
                      <div className='form-check'>
                        <input className='form-check-input' type='radio' name='days' id='days3' />
                        <label className='form-check-label' htmlFor='days3'>
                          3 dias
                        </label>
                      </div>
                      <div className='form-check'>
                        <input className='form-check-input' type='radio' name='days' id='days4' />
                        <label className='form-check-label' htmlFor='days4'>
                          4 dias
                        </label>
                      </div>
                      <div className='form-check'>
                        <input className='form-check-input' type='radio' name='days' id='days5' />
                        <label className='form-check-label' htmlFor='days5'>
                          5 dias
                        </label>
                      </div>
                      <div className='form-check'>
                        <input className='form-check-input' type='radio' name='days' id='days6' />
                        <label className='form-check-label' htmlFor='days6'>
                          6 dias
                        </label>
                      </div>
                      <div className='form-check'>
                        <input className='form-check-input' type='radio' name='days' id='days7' />
                        <label className='form-check-label' htmlFor='days7'>
                          7 dias
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className='btn-group'>
                    <button
                      className='btn btn-outline-secondary dropdown-toggle rounded-5'
                      type='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      Custo
                    </button>

                    <div className='dropdown-menu p-3'>
                      <div className='form-check'>
                        <input className='form-check-input' type='radio' name='cost' id='cost1' />
                        <label className='form-check-label' htmlFor='cost1'>
                          $
                        </label>
                      </div>
                      <div className='form-check'>
                        <input className='form-check-input' type='radio' name='cost' id='cost2' />
                        <label className='form-check-label' htmlFor='cost2'>
                          $$
                        </label>
                      </div>
                      <div className='form-check'>
                        <input className='form-check-input' type='radio' name='cost' id='cost3' />
                        <label className='form-check-label' htmlFor='cost3'>
                          $$$
                        </label>
                      </div>
                      <div className='form-check'>
                        <input className='form-check-input' type='radio' name='cost' id='cost4' />
                        <label className='form-check-label' htmlFor='cost4'>
                          $$$$
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className='btn-group'>
                    <button
                      className='btn btn-outline-secondary dropdown-toggle rounded-5'
                      type='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      Popularidade
                    </button>

                    <div className='dropdown-menu p-3'>
                      <div className='form-check'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='popularity'
                          id='popularity1'
                        />
                        <label className='form-check-label' htmlFor='popularity1'>
                          Pop 1
                        </label>
                      </div>
                      <div className='form-check'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='popularity'
                          id='popularity2'
                        />
                        <label className='form-check-label' htmlFor='popularity2'>
                          Pop 2
                        </label>
                      </div>
                      <div className='form-check'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='popularity'
                          id='popularity3'
                        />
                        <label className='form-check-label' htmlFor='popularity3'>
                          Pop 3
                        </label>
                      </div>
                    </div>
                  </div>
                  <button type='button' className='btn text-mutted'>
                    Limpar filtros
                  </button>
                </div>
              </div>

              <h3 className='h3 text-center fw-bold border-bottom pb-5 mb-5'>Resultados</h3>

              {resultadosPesquisa.length > 0 ? (
                resultadosPesquisa.map((roteiro) => (
                  <div className='tour-list' key={roteiro.id}>
                    <div className='row mb-4 border-bottom pb-5'>
                      <div className='col-md-4 col-sm-6'>
                        <img src={OuroPreto} className='w-100 rounded-4' alt='Ouro Preto' />
                      </div>
                      <div className='col-md-8 col-sm-6 pt-3'>
                        <div>
                          <h4 className='h4 fw-bold'>
                            {roteiro.cidade.name}
                            <span>
                              15 <i className='bi bi-hand-thumbs-up'></i> 0{' '}
                              <i className='bi bi-hand-thumbs-down'></i>
                            </span>
                          </h4>
                          <p>
                            Ouro Preto é uma das primeiras cidades tombadas
                            pelo Iphan, em 1938, e a primeira cidade brasileira a receber o título
                            de Patrimônio Mundial, conferido pela Unesco, em 1980 [...]
                          </p>
                          <p className='mb-1'>
                            <span className='btn btn-secondary rounded-5'>
                              <i className='bi bi-calendar3'></i> {roteiro.numberOfDays} dia(s)
                            </span>{' '}
                            <span className='btn btn-secondary rounded-5'>
                              <i className='bi bi-cash-coin'></i> A partir de{' '}
                              <strong>R$ {roteiro.valor}</strong>
                            </span>
                          </p>
                          {/* <p className='m-0'>Coordenadas - Latitude: {cidade.latitude} - Longitude: {cidade.longitude}</p>
                          <p className='mb-3'>@criador</p> */}
                          <a
                            href='/roteiro'
                            className='btn btn-warning btn-lg rounded-pill me-2 ps-4 pe-4'
                          >
                            Ver roteiro
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p style={{ textAlign: 'center' }}>
                  Nenhum roteiro encontrado para a pesquisa realizada.
                </p>
              )}
              {/* <div className='tour-list'>
                <div className='row mb-4 border-bottom pb-5'>
                  <div className='col-md-4 col-sm-6'>
                    <img src={Pelorinho} className='w-100 rounded-4' alt='Ouro Preto' />
                  </div>
                  <div className='col-md-8 col-sm-6 pt-3'>
                    <h4 className='h4 fw-bold'>
                      Salvador{' '}
                      <span>
                        15 <i className='bi bi-hand-thumbs-up'></i> 0{' '}
                        <i className='bi bi-hand-thumbs-down'></i>
                      </span>
                    </h4>
                    <p>
                      Salvador, a capital do estado da Bahia no nordeste do Brasil, é conhecida pela
                      arquitetura colonial portuguesa, pela cultura afrobrasileira e pelo litoral
                      tropical. O bairro [...]
                    </p>
                    <p className='mb-1'>
                      <span className='btn btn-secondary rounded-5'>
                        <i className='bi bi-calendar3'></i> 2 dias
                      </span>{' '}
                      <span className='btn btn-secondary rounded-5'>
                        <i className='bi bi-cash-coin'></i> A partir de <strong>R$ 140,99</strong>
                      </span>
                    </p>
                    <p className='m-0'>Coordenadas</p>
                    <p className='mb-3'>@criador</p>
                    <a
                      href='/roteiro'
                      className='btn btn-warning btn-lg rounded-pill me-2 ps-4 pe-4'
                    >
                      Ver roteiro
                    </a>
                  </div>
                </div>
              </div> */}

              <nav className='mb-5 mt-5' aria-label='Pagination'>
                <ul className='pagination justify-content-center'>
                  <li className='page-item disabled'>
                    <a className='page-link' href='#'>
                      <i className='bi bi-chevron-left'></i> Anterior
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link' href='#'>
                      <i className='bi bi-chevron-right'></i> Próximo
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ItinerarySearch
