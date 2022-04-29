import React from 'react'
import { useAuth } from '../context/AuthContextProvider'

const Dashboard = () => {

    return (
        <div className="wrapper ">
            <div className="sidebar" data-color="orange">
                {/* <!--
                Tip 1: You can change the color of the sidebar using: data-color="blue | green | orange | red | yellow"
    --> */}
                <div className="logo">
                    <a href="http://www.creative-tim.com" className="simple-text logo-mini">
                        CT
                    </a>
                    <a href="http://www.creative-tim.com" className="simple-text logo-normal">
                        Creative Tim
                    </a>
                </div>
                <div className="sidebar-wrapper" id="sidebar-wrapper">
                    <ul className="nav">
                        <li className="active ">
                            <a href="./dashboard.html">
                                <i className="now-ui-icons design_app"></i>
                                <p>Dashboard</p>
                            </a>
                        </li>
                        <li>
                            <a href="./icons.html">
                                <i className="now-ui-icons education_atom"></i>
                                <p>Icons</p>
                            </a>
                        </li>
                        <li>
                            <a href="./map.html">
                                <i className="now-ui-icons location_map-big"></i>
                                <p>Maps</p>
                            </a>
                        </li>
                        <li>
                            <a href="./notifications.html">
                                <i className="now-ui-icons ui-1_bell-53"></i>
                                <p>Notifications</p>
                            </a>
                        </li>
                        <li>
                            <a href="./user.html">
                                <i className="now-ui-icons users_single-02"></i>
                                <p>User Profile</p>
                            </a>
                        </li>
                        <li>
                            <a href="./tables.html">
                                <i className="now-ui-icons design_bullet-list-67"></i>
                                <p>Table List</p>
                            </a>
                        </li>
                        <li>
                            <a href="./typography.html">
                                <i className="now-ui-icons text_caps-small"></i>
                                <p>Typography</p>
                            </a>
                        </li>
                        <li className="active-pro">
                            <a href="./upgrade.html">
                                <i className="now-ui-icons arrows-1_cloud-download-93"></i>
                                <p>Upgrade to PRO</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="main-panel" id="main-panel">
                {/* <!-- Navbar --> */}
                <nav className="navbar navbar-expand-lg navbar-transparent  bg-primary  navbar-absolute">
                    <div className="container-fluid">
                        <div className="navbar-wrapper">
                            <div className="navbar-toggle">
                                <button type="button" className="navbar-toggler">
                                    <span className="navbar-toggler-bar bar1"></span>
                                    <span className="navbar-toggler-bar bar2"></span>
                                    <span className="navbar-toggler-bar bar3"></span>
                                </button>
                            </div>
                            <a className="navbar-brand" href="#pablo">Dashboard</a>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-bar navbar-kebab"></span>
                            <span className="navbar-toggler-bar navbar-kebab"></span>
                            <span className="navbar-toggler-bar navbar-kebab"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navigation">
                            <form>
                                <div className="input-group no-border">
                                    <input type="text" value="" className="form-control" placeholder="Search..." />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <i className="now-ui-icons ui-1_zoom-bold"></i>
                                            </div>
                                        </div>
                                </div>
                            </form>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#pablo">
                                        <i className="now-ui-icons media-2_sound-wave"></i>
                                        <p>
                                            <span className="d-lg-none d-md-block">Stats</span>
                                        </p>
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="now-ui-icons location_world"></i>
                                        <p>
                                            <span className="d-lg-none d-md-block">Some Actions</span>
                                        </p>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#pablo">
                                        <i className="now-ui-icons users_single-02"></i>
                                        <p>
                                            <span className="d-lg-none d-md-block">Account</span>
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* <!-- End Navbar --> */}
                <div className="panel-header panel-header-lg">
                    <canvas id="bigDashboardChart"></canvas>
                </div>
                <div className="content">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card card-chart">
                                <div className="card-header">
                                    <h5 className="card-category">Global Sales</h5>
                                    <h4 className="card-title">Shipped Products</h4>
                                    <div className="dropdown">
                                        <button type="button" className="btn btn-round btn-outline-default dropdown-toggle btn-simple btn-icon no-caret" data-toggle="dropdown">
                                            <i className="now-ui-icons loader_gear"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <a className="dropdown-item text-danger" href="#">Remove Data</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="chart-area">
                                        <canvas id="lineChartExample"></canvas>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="stats">
                                        <i className="now-ui-icons arrows-1_refresh-69"></i> Just Updated
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card card-chart">
                                <div className="card-header">
                                    <h5 className="card-category">2018 Sales</h5>
                                    <h4 className="card-title">All products</h4>
                                    <div className="dropdown">
                                        <button type="button" className="btn btn-round btn-outline-default dropdown-toggle btn-simple btn-icon no-caret" data-toggle="dropdown">
                                            <i className="now-ui-icons loader_gear"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <a className="dropdown-item text-danger" href="#">Remove Data</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="chart-area">
                                        <canvas id="lineChartExampleWithNumbersAndGrid"></canvas>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="stats">
                                        <i className="now-ui-icons arrows-1_refresh-69"></i> Just Updated
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card card-chart">
                                <div className="card-header">
                                    <h5 className="card-category">Email Statistics</h5>
                                    <h4 className="card-title">24 Hours Performance</h4>
                                </div>
                                <div className="card-body">
                                    <div className="chart-area">
                                        <canvas id="barChartSimpleGradientsNumbers"></canvas>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="stats">
                                        <i className="now-ui-icons ui-2_time-alarm"></i> Last 7 days
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card  card-tasks">
                                <div className="card-header ">
                                    <h5 className="card-category">Backend development</h5>
                                    <h4 className="card-title">Tasks</h4>
                                </div>
                                <div className="card-body ">
                                    <div className="table-full-width table-responsive">
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="form-check">
                                                            <label className="form-check-label">
                                                                <input className="form-check-input" type="checkbox" checked />
                                                                    <span className="form-check-sign"></span>
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td className="text-left">Sign contract for "What are conference organizers afraid of?"</td>
                                                    <td className="td-actions text-right">
                                                        <button type="button" rel="tooltip" title="" className="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Edit Task">
                                                            <i className="now-ui-icons ui-2_settings-90"></i>
                                                        </button>
                                                        <button type="button" rel="tooltip" title="" className="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Remove">
                                                            <i className="now-ui-icons ui-1_simple-remove"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="form-check">
                                                            <label className="form-check-label">
                                                                <input className="form-check-input" type="checkbox" />
                                                                    <span className="form-check-sign"></span>
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td className="text-left">Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                                                    <td className="td-actions text-right">
                                                        <button type="button" rel="tooltip" title="" className="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Edit Task">
                                                            <i className="now-ui-icons ui-2_settings-90"></i>
                                                        </button>
                                                        <button type="button" rel="tooltip" title="" className="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Remove">
                                                            <i className="now-ui-icons ui-1_simple-remove"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="form-check">
                                                            <label className="form-check-label">
                                                                <input className="form-check-input" type="checkbox" checked />
                                                                    <span className="form-check-sign"></span>
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td className="text-left">Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                                                    </td>
                                                    <td className="td-actions text-right">
                                                        <button type="button" rel="tooltip" title="" className="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Edit Task">
                                                            <i className="now-ui-icons ui-2_settings-90"></i>
                                                        </button>
                                                        <button type="button" rel="tooltip" title="" className="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Remove">
                                                            <i className="now-ui-icons ui-1_simple-remove"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="card-footer ">
                                    <hr />
                                        <div className="stats">
                                            <i className="now-ui-icons loader_refresh spin"></i> Updated 3 minutes ago
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-category">All Persons List</h5>
                                    <h4 className="card-title"> Employees Stats</h4>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead className=" text-primary">
                                                <th>
                                                    Name
                                                </th>
                                                <th>
                                                    Country
                                                </th>
                                                <th>
                                                    City
                                                </th>
                                                <th className="text-right">
                                                    Salary
                                                </th>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Dakota Rice
                                                    </td>
                                                    <td>
                                                        Niger
                                                    </td>
                                                    <td>
                                                        Oud-Turnhout
                                                    </td>
                                                    <td className="text-right">
                                                        $36,738
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Minerva Hooper
                                                    </td>
                                                    <td>
                                                        Curaçao
                                                    </td>
                                                    <td>
                                                        Sinaai-Waas
                                                    </td>
                                                    <td className="text-right">
                                                        $23,789
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Sage Rodriguez
                                                    </td>
                                                    <td>
                                                        Netherlands
                                                    </td>
                                                    <td>
                                                        Baileux
                                                    </td>
                                                    <td className="text-right">
                                                        $56,142
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Doris Greene
                                                    </td>
                                                    <td>
                                                        Malawi
                                                    </td>
                                                    <td>
                                                        Feldkirchen in Kärnten
                                                    </td>
                                                    <td className="text-right">
                                                        $63,542
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Mason Porter
                                                    </td>
                                                    <td>
                                                        Chile
                                                    </td>
                                                    <td>
                                                        Gloucester
                                                    </td>
                                                    <td className="text-right">
                                                        $78,615
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer">
                    <div className=" container-fluid ">
                        <nav>
                            <ul>
                                <li>
                                    <a href="https://www.creative-tim.com">
                                        Creative Tim
                                    </a>
                                </li>
                                <li>
                                    <a href="http://presentation.creative-tim.com">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="http://blog.creative-tim.com">
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div className="copyright" id="copyright">
                            &copy; <script>
                                document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))
                            </script>, Designed by <a href="https://www.invisionapp.com" target="_blank">Invision</a>. Coded by <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a>.
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Dashboard