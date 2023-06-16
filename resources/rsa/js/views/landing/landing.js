import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilAccountLogout, cilChevronDoubleRight } from '@coreui/icons'

const Landing = () => {
  return (
    <>
      <h2 className="page-title">Dashboard / My Dashboard</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="dashboard-card">
            <h3>Total POSP: 100</h3>
            <div className="dashboard-link">
              <CIcon icon={cilAccountLogout} className="large-icon" />
              <a className="details-link">
                <span>View All</span>
                <CIcon icon={cilChevronDoubleRight} size="sm" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="dashboard-card">
            <h3>Total POSP: 100</h3>
            <div className="dashboard-link">
              <CIcon icon={cilAccountLogout} className="large-icon" />
              <a className="details-link">
                <span>View All</span>
                <CIcon icon={cilChevronDoubleRight} size="sm" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="dashboard-card">
            <h3>Total POSP: 100</h3>
            <div className="dashboard-link">
              <CIcon icon={cilAccountLogout} className="large-icon" />
              <a className="details-link">
                <span>View All</span>
                <CIcon icon={cilChevronDoubleRight} size="sm" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="dashboard-card">
            <h3>Total POSP: 100</h3>
            <div className="dashboard-link">
              <CIcon icon={cilAccountLogout} className="large-icon" />
              <a className="details-link">
                <span>View All</span>
                <CIcon icon={cilChevronDoubleRight} size="sm" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="dashboard-card">
            <h3>Total POSP: 100</h3>
            <div className="dashboard-link">
              <CIcon icon={cilAccountLogout} className="large-icon" />
              <a className="details-link">
                <span>View All</span>
                <CIcon icon={cilChevronDoubleRight} size="sm" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="dashboard-card">
            <h3>Total POSP: 100</h3>
            <div className="dashboard-link">
              <CIcon icon={cilAccountLogout} className="large-icon" />
              <a className="details-link">
                <span>View All</span>
                <CIcon icon={cilChevronDoubleRight} size="sm" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing
