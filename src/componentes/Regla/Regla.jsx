import React from 'react'

const Regla = () => {
  return (
    <div class="container-fluid">
        <div class="row">
            <p class="col-12 d-sm-none">Resolucion: <strong>XS</strong></p>
            <p class="col-sm-12 d-none d-sm-block d-md-none">Resolucion: <strong>SM</strong></p>
            <p class="col-md-12 d-none d-md-block d-lg-none">Resolucion: <strong>MD</strong></p>
            <p class="col-lg-12 d-none d-lg-block d-xl-none">Resolucion: <strong>LG</strong></p>
            <p class="col-xl-12 d-none d-xl-block d-xxl-none">Resolucion: <strong>XL</strong></p>
            <p class="col-xxl-12 d-none d-xxl-block">Resolucion: <strong>XXL</strong></p>
        </div>
    </div>
  )
}

export default Regla