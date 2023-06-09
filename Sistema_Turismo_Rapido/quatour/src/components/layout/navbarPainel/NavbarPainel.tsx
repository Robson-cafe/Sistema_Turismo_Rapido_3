import React from 'react';

import LogoColor from '../../../assets/img/logo-color.svg';
import ProfilePic from '../../../assets/img/profile_pic2.jpg';

function NavbarPainel() {
  return (
    <div id='header' style={{ backgroundColor: '#FFF' }}>
      <nav className='navbar navbar-expand-md navbar-dark'>
        <div className='container'>
          <a
            className='navbar-brand d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none'
            href='/'
          >
            <img src={LogoColor} id='logo' alt='Logo Quatour' />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarCollapse'
            aria-controls='navbarCollapse'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='d-flex'>
            <ul className='navbar-nav ms-md-auto'>
              <li className='nav-item dropdown ms-5'>
                <a
                  href='#'
                  id='dropdown-menu'
                  role='button'
                  data-bs-auto-close='outside'
                  data-bs-display='static'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                  style={{ color: '#333 !important' }}
                >
                  <div className='avatar avatar-p p-0 me-2'>
                    <img className='avatar-img rounded-circle' src={ProfilePic} alt='avatar' />
                  </div>
                  Pedro
                  <i className='ms-1 bi bi-chevron-down'></i>
                </a>

                <ul
                  className='dropdown-menu dropdown-menu-end shadow pt-3'
                  aria-labelledby='profileDropdown'
                >
                  <li className='px-3 mb-3'>
                    <div className='d-flex align-items-center'>
                      <div className='avatar me-3'>
                        <img
                          className='avatar-img rounded-circle shadow'
                          src={ProfilePic}
                          alt='avatar'
                        />
                      </div>
                      <div>
                        <p className='m-0'>
                          <strong>Pedro de Alcântara...</strong>
                        </p>
                        <p className='small m-0'>pedro@palacio.imp.br</p>
                      </div>
                    </div>
                  </li>

                  <li>
                    {' '}
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      <i className='bi bi-person fa-fw me-2'></i>Minha conta
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      <i className='bi bi-bookmark-check fa-fw me-2'></i>Minhas reservas
                    </a>
                  </li>

                  <li>
                    <a className='dropdown-item bg-danger-soft-hover' href='logout'>
                      <i className='bi bi-power fa-fw me-2'></i>Logout
                    </a>
                  </li>
                  <li>
                    {' '}
                    <hr className='dropdown-divider' />
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarPainel;