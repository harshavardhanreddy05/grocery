import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import productimg1 from "../../images/product-img-1.jpg";
import productimg2 from "../../images/product-img-2.jpg";
import productimg3 from "../../images/product-img-3.jpg";
import productimg4 from "../../images/product-img-4.jpg";
import productimg5 from "../../images/product-img-5.jpg";
import productimg6 from "../../images/product-img-6.jpg";


const MyAccountOrder = () => {
  return (
    <div>
      <>
        {/* section */}
        <section>
          <div className="container">
            {/* row */}
            <div className="row">
              {/* col */}
              <div className="col-12">
                <div className="p-6 d-flex justify-content-between align-items-center d-md-none">
                  {/* heading */}
                  <h3 className="fs-5 mb-0">Account Setting</h3>
                  {/* button */}
                  <button
                    className="btn btn-outline-gray-400 text-muted d-md-none btn-icon "
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasAccount"
                    aria-controls="offcanvasAccount"
                  >
                     <i className="fas fa-bars fs-4" />
                  </button>
                </div>
              </div>
              {/* col */}
              <div className="col-lg-3 col-md-4 col-12 border-end  d-none d-md-block">
                <div className="pt-10 pe-lg-10">
                  {/* nav */}
                  <ul className="nav flex-column nav-pills nav-pills-dark">
                    {/* nav item */}
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to="account-orders.html"
                      >
                         <i className="fas fa-shopping-bag me-2" />
                        Your Orders
                      </Link>
                    </li>
                    {/* nav item */}
                    <li className="nav-item">
                      <Link className="nav-link" to="account-settings.html">
                      <i className="fas fa-cog me-2" />
                        Settings
                      </Link>
                    </li>
                    {/* nav item */}
                    <li className="nav-item">
                      <Link className="nav-link" to="account-address.html">
                      <i className="fas fa-map-marker-alt me-2" />
                        Address
                      </Link>
                    </li>
                    {/* nav item */}
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="account-payment-method.html"
                      >
                        <i className="fas fa-credit-card me-2" />
                        Payment Method
                      </Link>
                    </li>
                    {/* nav item */}
                    <li className="nav-item">
                      <Link className="nav-link" to="account-notification.html">
                      <i className="fas fa-bell me-2" />
                        Notification
                      </Link>
                    </li>
                    {/* nav item */}
                    <li className="nav-item">
                      <hr />
                    </li>
                    {/* nav item */}
                    <li className="nav-item">
                      <Link className="nav-link " to="../index.html">
                      <i className="fas fa-sign-out-alt me-2" />
                        Log out
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9 col-md-8 col-12">
                <div className="p-6 p-lg-10">
                  {/* heading */}
                  <h2 className="mb-6">Your Orders</h2>
                  <div className="table-responsive border-0">
                    {/* Table */}
                    <table className="table mb-0 text-nowrap">
                      {/* Table Head */}
                      <thead className="table-light">
                        <tr>
                          <th className="border-0">&nbsp;</th>
                          <th className="border-0">Product</th>
                          <th className="border-0">Order</th>
                          <th className="border-0">Date</th>
                          <th className="border-0">Items</th>
                          <th className="border-0">Status</th>
                          <th className="border-0">Amount</th>
                          <th className="border-0" />
                        </tr>
                      </thead>
                      <tbody>
                        {/* Table body */}
                        <tr>
                          <td className="align-middle border-top-0 w-0">
                            <Link to="#">
                              {" "}
                              <img
                                src={productimg1}
                                alt="Ecommerce"
                                className="icon-shape icon-xl"
                              />
                            </Link>
                          </td>
                          <td className="align-middle border-top-0">
                            <Link to="#" className="fw-semi-bold text-inherit">
                              <h6 className="mb-0">
                                Haldiram's Nagpur Aloo Bhujia
                              </h6>
                            </Link>
                            <span>
                              <small className="text-muted">400g</small>
                            </span>
                          </td>
                          <td className="align-middle border-top-0">
                            <Link to="#" className="text-inherit">
                              #14899
                            </Link>
                          </td>
                          <td className="align-middle border-top-0">
                            March 5, 2023
                          </td>
                          <td className="align-middle border-top-0">1</td>
                          <td className="align-middle border-top-0">
                            <span className="badge bg-warning">Processing</span>
                          </td>
                          <td className="align-middle border-top-0">$15.00</td>
                          <td className="text-muted align-middle border-top-0">
                            <Link to="#" className="text-inherit">
                              <i className="feather-icon icon-eye" />
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td className="align-middle border-top-0 w-0">
                            <Link to="#">
                              {" "}
                              <img
                                src={productimg2}
                                alt="Ecommerce"
                                className="icon-shape icon-xl"
                              />
                            </Link>
                          </td>
                          <td className="align-middle border-top-0">
                            <Link to="#" className="fw-semi-bold text-inherit">
                              <h6 className="mb-0">Nutri Choise Biscuit</h6>
                            </Link>
                            <span>
                              <small className="text-muted">2 Pkt</small>
                            </span>
                          </td>
                          <td className="align-middle border-top-0">
                            <Link to="#" className="text-inherit">
                              #14658
                            </Link>
                          </td>
                          <td className="align-middle border-top-0">
                            July 9, 2023
                          </td>
                          <td className="align-middle border-top-0">2</td>
                          <td className="align-middle border-top-0">
                            <span className="badge bg-success">Completed</span>
                          </td>
                          <td className="align-middle border-top-0">$45.00</td>
                          <td className="text-muted align-middle border-top-0">
                            <Link to="#" className="text-inherit">
                              <i className="feather-icon icon-eye" />
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td className="align-middle border-top-0 w-0">
                            <Link to="#">
                              {" "}
                              <img
                                src={productimg3}
                                alt="Ecommerce"
                                className="icon-shape icon-xl"
                              />
                            </Link>
                          </td>
                          <td className="align-middle border-top-0">
                            <Link to="#" className="text-inherit">
                              <h6 className="mb-0">
                                Cadbury Dairy Milk 5 Star Bites{" "}
                              </h6>
                              <span>
                                <small className="text-muted">202 g</small>
                              </span>
                            </Link>
                          </td>
                          <td className="align-middle border-top-0">
                            <Link to="#" className="text-inherit">
                              #13778
                            </Link>
                          </td>
                          <td className="align-middle border-top-0">
                            Oct 03, 2023
                          </td>
                          <td className="align-middle border-top-0">4</td>
                          <td className="align-middle border-top-0">
                            <span className="badge bg-success">Completed</span>
                          </td>
                          <td className="align-middle border-top-0">$99.00</td>
                          <td className="text-muted align-middle border-top-0">
                            <Link to="#" className="text-inherit">
                              <i className="feather-icon icon-eye" />
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td className="align-middle border-top-0 w-0">
                            <Link to="#">
                              {" "}
                              <img
                                src={productimg4}
                                alt="Ecommerce"
                                className="icon-shape icon-xl"
                              />
                            </Link>
                          </td>
                          <td className="align-middle border-top-0">
                            <Link to="#" className="fw-semi-bold text-inherit">
                              <h6 className="mb-0">Onion Flavour Potato </h6>
                            </Link>
                            <span>
                              <small className="text-muted">100 g</small>
                            </span>
                          </td>
                          <td className="align-middle border-top-0">
                            <Link to="#" className="text-inherit">
                              #13746
                            </Link>
                          </td>
                          <td className="align-middle border-top-0">
                            March 5, 2023
                          </td>
                          <td className="align-middle border-top-0">1</td>
                          <td className="align-middle border-top-0">
                            <span className="badge bg-success">Completed</span>
                          </td>
                          <td className="align-middle border-top-0">$12.00</td>
                          <td className="text-muted align-middle border-top-0">
                            <Link to="#" className="text-inherit">
                              <i className="feather-icon icon-eye" />
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td className="align-middle border-top-0 w-0">
                            <Link to="#">
                              {" "}
                              <img
                                src={productimg5}
                                alt="Ecommerce"
                                className="icon-shape icon-xl"
                              />
                            </Link>
                          </td>
                          <td className="align-middle border-top-0">
                            <Link to="#" className="fw-semi-bold text-inherit">
                              <h6 className="mb-0">Salted Instant Popcorn </h6>
                            </Link>
                            <span>
                              <small className="text-muted">500 g</small>
                            </span>
                          </td>
                          <td className="align-middle border-top-0">
                            <Link to="#" className="text-inherit">
                              #13566
                            </Link>
                          </td>
                          <td className="align-middle border-top-0">
                            July 9, 2023
                          </td>
                          <td className="align-middle border-top-0">2</td>
                          <td className="align-middle border-top-0">
                            <span className="badge bg-danger">Cancel</span>
                          </td>
                          <td className="align-middle border-top-0">$6.00</td>
                          <td className="text-muted align-middle border-top-0">
                            <Link to="#" className="text-inherit">
                              <i className="feather-icon icon-eye" />
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td className="align-middle border-top-0 w-0">
                            <Link to="#">
                              {" "}
                              <img
                                src={productimg6}
                                alt="Ecommerce"
                                className="icon-shape icon-xl"
                              />
                            </Link>
                          </td>
                          <td className="align-middle border-top-0">
                            <Link to="#" className="fw-semi-bold text-inherit">
                              <h6 className="mb-0">Blueberry Greek Yogurt </h6>
                            </Link>
                            <span>
                              <small className="text-muted">500 g</small>
                            </span>
                          </td>
                          <td className="align-middle border-top-0">
                            <Link to="#" className="text-inherit">
                              #12094
                            </Link>
                          </td>
                          <td className="align-middle border-top-0">
                            Oct 03, 2023
                          </td>
                          <td className="align-middle border-top-0">4</td>
                          <td className="align-middle border-top-0">
                            <span className="badge bg-success">Completed</span>
                          </td>
                          <td className="align-middle border-top-0">$18.00</td>
                          <td className="text-muted align-middle border-top-0">
                            <Link to="#" className="text-inherit">
                              <i className="feather-icon icon-eye" />
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default MyAccountOrder;
