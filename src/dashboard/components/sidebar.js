import { Link, useHistory } from "react-router-dom";
function Sidebar() {
  const history = useHistory();
  return (
    <div className="deznav">
      <div className="deznav-scroll">
        <ul className="metismenu" id="menu">
          <li className="nav-label first">Main Menu</li>
          <li>
            <Link className="has-arrow ai-icon" to="/" aria-expanded={false}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <rect x="0" y="0" width="24" height="24" />
                  <rect
                    fill="#000000"
                    x="4"
                    y="4"
                    width="7"
                    height="7"
                    rx="1.5"
                  />
                  <path
                    d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"
                    fill="#000000"
                    opacity="0.3"
                  />
                </g>
              </svg>
              <span className="nav-text">Dashboard</span>
            </Link>
            <ul>
              <li>
                <Link to="/">Light</Link>
              </li>
              <li>
                <Link to={`/product`}>Product</Link>
              </li>
              <li>
                <Link to="/quotation">Quotation</Link>
              </li>
              <li>
                <Link to="/customer">Customers</Link>
              </li>
            </ul>
          </li>
          <li className="nav-label">Apps</li>
          <li>
            <Link
              className="has-arrow ai-icon"
              to="/apps"
              aria-expanded={false}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <rect x="0" y="0" width="24" height="24" />
                  <polygon
                    fill="#000000"
                    opacity="0.3"
                    points="5 7 5 15 19 15 19 7"
                  />
                  <path
                    d="M11,19 L11,16 C11,15.4477153 11.4477153,15 12,15 C12.5522847,15 13,15.4477153 13,16 L13,19 L14.5,19 C14.7761424,19 15,19.2238576 15,19.5 C15,19.7761424 14.7761424,20 14.5,20 L9.5,20 C9.22385763,20 9,19.7761424 9,19.5 C9,19.2238576 9.22385763,19 9.5,19 L11,19 Z"
                    fill="#000000"
                    opacity="0.3"
                  />
                  <path
                    d="M5,7 L5,15 L19,15 L19,7 L5,7 Z M5.25,5 L18.75,5 C19.9926407,5 21,5.8954305 21,7 L21,15 C21,16.1045695 19.9926407,17 18.75,17 L5.25,17 C4.00735931,17 3,16.1045695 3,15 L3,7 C3,5.8954305 4.00735931,5 5.25,5 Z"
                    fill="#000000"
                    fill-rule="nonzero"
                  />
                </g>
              </svg>
              <span className="nav-text">Apps</span>
            </Link>
            <ul>
              <li>
                <Link to="app-profile">Profile</Link>
              </li>
              <li>
                <Link className="has-arrow" to="/email" aria-expanded={false}>
                  Email
                </Link>
                <ul>
                  <li>
                    <Link to="email-compose">Compose</Link>
                  </li>
                  <li>
                    <Link to="email-inbox">Inbox</Link>
                  </li>
                  <li>
                    <Link to="email-read">Read</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="app-calender">Calendar</Link>
              </li>
              <li>
                <Link className="has-arrow" to="/shop" aria-expanded={false}>
                  Shop
                </Link>
                <ul>
                  <li>
                    <Link to="ecom-product-grid">Product Grid</Link>
                  </li>
                  <li>
                    <Link to="ecom-product-list">Product List</Link>
                  </li>
                  <li>
                    <Link to="ecom-product-detail">Product Details</Link>
                  </li>
                  <li>
                    <Link to="ecom-product-order">Order</Link>
                  </li>
                  <li>
                    <Link to="ecom-checkout">Checkout</Link>
                  </li>
                  <li>
                    <Link to="ecom-invoice">Invoice</Link>
                  </li>
                  <li>
                    <Link to="ecom-customers">Customers</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link
              className="has-arrow ai-icon"
              to="/charts"
              aria-expanded={false}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <rect x="0" y="0" width="24" height="24" />
                  <path
                    d="M4.00246329,12.2004927 L13,14 L13,4.06189375 C16.9463116,4.55399184 20,7.92038235 20,12 C20,16.418278 16.418278,20 12,20 C7.64874861,20 4.10886412,16.5261253 4.00246329,12.2004927 Z"
                    fill="#000000"
                    opacity="0.3"
                  />
                  <path
                    d="M3.0603968,10.0120794 C3.54712466,6.05992157 6.91622084,3 11,3 L11,11.6 L3.0603968,10.0120794 Z"
                    fill="#000000"
                  />
                </g>
              </svg>
              <span className="nav-text">Charts</span>
            </Link>
            <ul>
              <li>
                <Link to="chart-flot">Flot</Link>
              </li>
              <li>
                <Link to="chart-morris">Morris</Link>
              </li>
              <li>
                <Link to="chart-chartjs">Chartjs</Link>
              </li>
              <li>
                <Link to="chart-chartist">Chartist</Link>
              </li>
              <li>
                <Link to="chart-sparkline">Sparkline</Link>
              </li>
              <li>
                <Link to="chart-peity">Peity</Link>
              </li>
            </ul>
          </li>
          <li className="nav-label">Components</li>
          <li>
            <Link
              className="has-arrow ai-icon"
              to="/bootstrap"
              aria-expanded={false}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <rect x="0" y="0" width="24" height="24"></rect>
                  <path
                    d="M4,9.67471899 L10.880262,13.6470401 C10.9543486,13.689814 11.0320333,13.7207107 11.1111111,13.740321 L11.1111111,21.4444444 L4.49070127,17.526473 C4.18655139,17.3464765 4,17.0193034 4,16.6658832 L4,9.67471899 Z M20,9.56911707 L20,16.6658832 C20,17.0193034 19.8134486,17.3464765 19.5092987,17.526473 L12.8888889,21.4444444 L12.8888889,13.6728275 C12.9050191,13.6647696 12.9210067,13.6561758 12.9368301,13.6470401 L20,9.56911707 Z"
                    fill="#000000"
                  ></path>
                  <path
                    d="M4.21611835,7.74669402 C4.30015839,7.64056877 4.40623188,7.55087574 4.5299008,7.48500698 L11.5299008,3.75665466 C11.8237589,3.60013944 12.1762411,3.60013944 12.4700992,3.75665466 L19.4700992,7.48500698 C19.5654307,7.53578262 19.6503066,7.60071528 19.7226939,7.67641889 L12.0479413,12.1074394 C11.9974761,12.1365754 11.9509488,12.1699127 11.9085461,12.2067543 C11.8661433,12.1699127 11.819616,12.1365754 11.7691509,12.1074394 L4.21611835,7.74669402 Z"
                    fill="#000000"
                    opacity="0.3"
                  ></path>
                </g>
              </svg>
              <span className="nav-text">Bootstrap</span>
            </Link>
            <ul>
              <li>
                <Link to="ui-accordion">Accordion</Link>
              </li>
              <li>
                <Link to="ui-alert">Alert</Link>
              </li>
              <li>
                <Link to="ui-badge">Badge</Link>
              </li>
              <li>
                <Link to="ui-button">Button</Link>
              </li>
              <li>
                <Link to="ui-modal">Modal</Link>
              </li>
              <li>
                <Link to="ui-button-group">Button Group</Link>
              </li>
              <li>
                <Link to="ui-list-group">List Group</Link>
              </li>
              <li>
                <Link to="ui-media-object">Media Object</Link>
              </li>
              <li>
                <Link to="ui-card">Cards</Link>
              </li>
              <li>
                <Link to="ui-carousel">Carousel</Link>
              </li>
              <li>
                <Link to="ui-dropdown">Dropdown</Link>
              </li>
              <li>
                <Link to="ui-popover">Popover</Link>
              </li>
              <li>
                <Link to="ui-progressbar">Progressbar</Link>
              </li>
              <li>
                <Link to="ui-tab">Tab</Link>
              </li>
              <li>
                <Link to="ui-typography">Typography</Link>
              </li>
              <li>
                <Link to="ui-pagination">Pagination</Link>
              </li>
              <li>
                <Link to="ui-grid">Grid</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              className="has-arrow ai-icon"
              to="/plugins"
              aria-expanded={false}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <rect x="0" y="0" width="24" height="24"></rect>
                  <path
                    d="M5.5,4 L9.5,4 C10.3284271,4 11,4.67157288 11,5.5 L11,6.5 C11,7.32842712 10.3284271,8 9.5,8 L5.5,8 C4.67157288,8 4,7.32842712 4,6.5 L4,5.5 C4,4.67157288 4.67157288,4 5.5,4 Z M14.5,16 L18.5,16 C19.3284271,16 20,16.6715729 20,17.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,17.5 C13,16.6715729 13.6715729,16 14.5,16 Z"
                    fill="#000000"
                  ></path>
                  <path
                    d="M5.5,10 L9.5,10 C10.3284271,10 11,10.6715729 11,11.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,11.5 C4,10.6715729 4.67157288,10 5.5,10 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,12.5 C20,13.3284271 19.3284271,14 18.5,14 L14.5,14 C13.6715729,14 13,13.3284271 13,12.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z"
                    fill="#000000"
                    opacity="0.3"
                  ></path>
                </g>
              </svg>
              <span className="nav-text">Plugins</span>
            </Link>
            <ul>
              <li>
                <Link to="uc-select2">Select 2</Link>
              </li>
              <li>
                <Link to="uc-nestable">Nestedable</Link>
              </li>
              <li>
                <Link to="uc-noui-slider">Noui Slider</Link>
              </li>
              <li>
                <Link to="uc-sweetalert">Sweet Alert</Link>
              </li>
              <li>
                <Link to="uc-toastr">Toastr</Link>
              </li>
              <li>
                <Link to="map-jqvmap">Jqv Map</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="widget-basic" className="ai-icon" aria-expanded={false}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <polygon points="0 0 24 0 24 24 0 24" />
                  <path
                    d="M22,15 L22,19 C22,20.1045695 21.1045695,21 20,21 L8,21 C5.790861,21 4,19.209139 4,17 C4,14.790861 5.790861,13 8,13 L20,13 C21.1045695,13 22,13.8954305 22,15 Z M7,19 C8.1045695,19 9,18.1045695 9,17 C9,15.8954305 8.1045695,15 7,15 C5.8954305,15 5,15.8954305 5,17 C5,18.1045695 5.8954305,19 7,19 Z"
                    fill="#000000"
                    opacity="0.3"
                  />
                  <path
                    d="M15.5421357,5.69999981 L18.3705628,8.52842693 C19.1516114,9.30947552 19.1516114,10.5758055 18.3705628,11.3568541 L9.88528147,19.8421354 C8.3231843,21.4042326 5.79052439,21.4042326 4.22842722,19.8421354 C2.66633005,18.2800383 2.66633005,15.7473784 4.22842722,14.1852812 L12.7137086,5.69999981 C13.4947572,4.91895123 14.7610871,4.91895123 15.5421357,5.69999981 Z M7,19 C8.1045695,19 9,18.1045695 9,17 C9,15.8954305 8.1045695,15 7,15 C5.8954305,15 5,15.8954305 5,17 C5,18.1045695 5.8954305,19 7,19 Z"
                    fill="#000000"
                    opacity="0.3"
                  />
                  <path
                    d="M5,3 L9,3 C10.1045695,3 11,3.8954305 11,5 L11,17 C11,19.209139 9.209139,21 7,21 C4.790861,21 3,19.209139 3,17 L3,5 C3,3.8954305 3.8954305,3 5,3 Z M7,19 C8.1045695,19 9,18.1045695 9,17 C9,15.8954305 8.1045695,15 7,15 C5.8954305,15 5,15.8954305 5,17 C5,18.1045695 5.8954305,19 7,19 Z"
                    fill="#000000"
                  />
                </g>
              </svg>
              <span className="nav-text">Widget</span>
            </Link>
          </li>
          <li className="nav-label">Forms</li>
          <li>
            <Link
              className="has-arrow ai-icon"
              to="/forms"
              aria-expanded={false}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <polygon points="0 0 24 0 24 24 0 24" />
                  <path
                    d="M5.85714286,2 L13.7364114,2 C14.0910962,2 14.4343066,2.12568431 14.7051108,2.35473959 L19.4686994,6.3839416 C19.8056532,6.66894833 20,7.08787823 20,7.52920201 L20,20.0833333 C20,21.8738751 19.9795521,22 18.1428571,22 L5.85714286,22 C4.02044787,22 4,21.8738751 4,20.0833333 L4,3.91666667 C4,2.12612489 4.02044787,2 5.85714286,2 Z"
                    fill="#000000"
                    fill-rule="nonzero"
                    opacity="0.3"
                  />
                  <rect
                    fill="#000000"
                    x="6"
                    y="11"
                    width="9"
                    height="2"
                    rx="1"
                  />
                  <rect
                    fill="#000000"
                    x="6"
                    y="15"
                    width="5"
                    height="2"
                    rx="1"
                  />
                </g>
              </svg>
              <span className="nav-text">Forms</span>
            </Link>
            <ul>
              <li>
                <Link to="form-element">Form Elements</Link>
              </li>
              <li>
                <Link to="form-wizard">Wizard</Link>
              </li>
              <li>
                <Link to="form-editor-summernote">Summernote</Link>
              </li>
              <li>
                <Link to="form-pickers">Pickers</Link>
              </li>
              <li>
                <Link to="form-validation-jquery">Jquery Validate</Link>
              </li>
            </ul>
          </li>
          <li className="nav-label">Table</li>
          <li>
            <Link
              className="has-arrow ai-icon"
              to="/table"
              aria-expanded={false}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <rect x="0" y="0" width="24" height="24" />
                  <path
                    d="M3,4 L20,4 C20.5522847,4 21,4.44771525 21,5 L21,7 C21,7.55228475 20.5522847,8 20,8 L3,8 C2.44771525,8 2,7.55228475 2,7 L2,5 C2,4.44771525 2.44771525,4 3,4 Z M3,10 L13,10 C13.5522847,10 14,10.4477153 14,11 L14,13 C14,13.5522847 13.5522847,14 13,14 L3,14 C2.44771525,14 2,13.5522847 2,13 L2,11 C2,10.4477153 2.44771525,10 3,10 Z M3,16 L13,16 C13.5522847,16 14,16.4477153 14,17 L14,19 C14,19.5522847 13.5522847,20 13,20 L3,20 C2.44771525,20 2,19.5522847 2,19 L2,17 C2,16.4477153 2.44771525,16 3,16 Z"
                    fill="#000000"
                  />
                  <rect
                    fill="#000000"
                    opacity="0.3"
                    x="16"
                    y="10"
                    width="5"
                    height="10"
                    rx="1"
                  />
                </g>
              </svg>
              <span className="nav-text">Table</span>
            </Link>
            <ul>
              <li>
                <Link to="table-bootstrap-basic">Bootstrap</Link>
              </li>
              <li>
                <Link to="table-datatable-basic">Datatable</Link>
              </li>
            </ul>
          </li>

          <li className="nav-label">Extra</li>
          <li>
            <Link
              className="has-arrow ai-icon"
              to="/pages"
              aria-expanded={false}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <rect x="0" y="0" width="24" height="24"></rect>
                  <rect
                    fill="#000000"
                    opacity="0.3"
                    x="4"
                    y="4"
                    width="8"
                    height="16"
                  ></rect>
                  <path
                    d="M6,18 L9,18 C9.66666667,18.1143819 10,18.4477153 10,19 C10,19.5522847 9.66666667,19.8856181 9,20 L4,20 L4,15 C4,14.3333333 4.33333333,14 5,14 C5.66666667,14 6,14.3333333 6,15 L6,18 Z M18,18 L18,15 C18.1143819,14.3333333 18.4477153,14 19,14 C19.5522847,14 19.8856181,14.3333333 20,15 L20,20 L15,20 C14.3333333,20 14,19.6666667 14,19 C14,18.3333333 14.3333333,18 15,18 L18,18 Z M18,6 L15,6 C14.3333333,5.88561808 14,5.55228475 14,5 C14,4.44771525 14.3333333,4.11438192 15,4 L20,4 L20,9 C20,9.66666667 19.6666667,10 19,10 C18.3333333,10 18,9.66666667 18,9 L18,6 Z M6,6 L6,9 C5.88561808,9.66666667 5.55228475,10 5,10 C4.44771525,10 4.11438192,9.66666667 4,9 L4,4 L9,4 C9.66666667,4 10,4.33333333 10,5 C10,5.66666667 9.66666667,6 9,6 L6,6 Z"
                    fill="#000000"
                    fill-rule="nonzero"
                  ></path>
                </g>
              </svg>
              <span className="nav-text">Pages</span>
            </Link>
            <ul>
              <li>
                <Link to="page-register">Register</Link>
              </li>
              <li>
                <Link to="page-login">Login</Link>
              </li>
              <li>
                <Link className="has-arrow" to="/error" aria-expanded={false}>
                  Error
                </Link>
                <ul>
                  <li>
                    <Link to="page-error-400">Error 400</Link>
                  </li>
                  <li>
                    <Link to="page-error-403">Error 403</Link>
                  </li>
                  <li>
                    <Link to="page-error-404">Error 404</Link>
                  </li>
                  <li>
                    <Link to="page-error-500">Error 500</Link>
                  </li>
                  <li>
                    <Link to="page-error-503">Error 503</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="page-lock-screen">Lock Screen</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Sidebar;
