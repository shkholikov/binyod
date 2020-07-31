import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import WhyBinyodPage from "./pages/WhyBinyodPage";
import ResourcePage from "./pages/ResourcePage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";

export class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/company" component={CompanyPage}/>
                    <Route path="/whybinyod" component={WhyBinyodPage}/>
                    <Route path="/services" component={ServicesPage}/>
                    <Route path="/contact" component={ContactPage}/>
                    <Route path="/resource" component={ResourcePage}/>
                </Switch>
            </Router>

            // <div>
            //   <Navigation />
            //   <Header data={this.state.landingPageData.Header} />
            //   <Features data={this.state.landingPageData.Features} />
            //   <About data={this.state.landingPageData.About} />
            //   <ServicesPage data={this.state.landingPageData.ServicesPage} />
            //   <Gallery />
            //   <Testimonials data={this.state.landingPageData.Testimonials} />
            //   <Team data={this.state.landingPageData.Team} />
            //   <ContactPage data={this.state.landingPageData.ContactPage} />
            // </div>
        )
    }
}

export default App;
