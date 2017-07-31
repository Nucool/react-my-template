import React from 'react'

const NavBar = () => {
  return (
    <nav className="navbar navbar-static-top">
      <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
        <span className="sr-only">Toggle navigation</span>
      </a>

      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">

          <li className="dropdown messages-menu">
            <a
              href="#"
              className="dropdown-toggle"
              data-toggle="dropdown">
              <i className="fa fa-envelope-o" />
              <span className="label label-danger">4</span>
            </a>
            <ul className="dropdown-menu">
              <li className="header">
                You have 4 messages
              </li>
              <li>
                <ul className="menu">
                  <li>
                    <a href="#">
                      <div className="pull-left">
                        <img
                          src="dist/img/user2-160x160.jpg"
                          className="img-circle"
                          alt="User Image" />
                      </div>
                      <h4>
                        Support Team
                        <small>
                          <i className="fa fa-clock-o" /> 5 mins
                          </small>
                        </h4>
                        <p>
                          Why not buy a new awesome theme?
                        </p>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="pull-left">
                          <img
                            src="dist/img/user3-128x128.jpg"
                            className="img-circle"
                            alt="User Image" />
                        </div>
                        <h4>
                          AdminLTE Design Team
                          <small>
                            <i className="fa fa-clock-o" /> 2 hours
                          </small>
                        </h4>
                          <p>
                            Why not buy a new awesome theme?
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="pull-left">
                            <img
                              src="dist/img/user4-128x128.jpg"
                              className="img-circle"
                              alt="User Image" />
                          </div>
                          <h4>
                            Developers
                            <small>
                              <i className="fa fa-clock-o" /> Today
                              </small>
                            </h4>
                            <p>
                              Why not buy a new awesome theme?
                            </p>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <div className="pull-left">
                              <img
                                src="dist/img/user3-128x128.jpg"
                                className="img-circle"
                                alt="User Image" />
                            </div>
                            <h4>
                              Sales Department
                              <small>
                                <i className="fa fa-clock-o" /> Yesterday
                                </small>
                              </h4>
                              <p>
                                Why not buy a new awesome theme?
                              </p>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div className="pull-left">
                                <img
                                  src="dist/img/user4-128x128.jpg"
                                  className="img-circle"
                                  alt="User Image" />
                              </div>
                              <h4>
                                Reviewers
                                <small>
                                  <i className="fa fa-clock-o" /> 2 days
                                  </small>
                                </h4>
                                <p>
                                  Why not buy a new awesome theme?
                                </p>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="footer">
                          <a href="#">
                            See All Messages
                          </a>
                        </li>
                      </ul>
                    </li>


                    <li className="dropdown user user-menu">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                        <img src="dist/img/user2-160x160.jpg" className="user-image" alt="User Image" />
                        <span className="hidden-xs">Alexander Pierce</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="user-header">
                          <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />

                          <p>
                            Alexander Pierce - Web Developer
                            <small>Member since Nov. 2012</small>
                          </p>
                        </li>
                        <li className="user-body">
                          <div className="row">
                            <div className="col-xs-4 text-center">
                              <a href="#">Followers</a>
                            </div>
                            <div className="col-xs-4 text-center">
                              <a href="#">Sales</a>
                            </div>
                            <div className="col-xs-4 text-center">
                              <a href="#">Friends</a>
                            </div>
                          </div>
                        </li>
                        <li className="user-footer">
                          <div className="pull-left">
                            <a href="#" className="btn btn-default btn-flat">Profile</a>
                          </div>
                          <div className="pull-right">
                            <a href="#" className="btn btn-default btn-flat">Sign out</a>
                          </div>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
                    </li>
                  </ul>
                </div>

              </nav>
            )

          }

          export default NavBar
