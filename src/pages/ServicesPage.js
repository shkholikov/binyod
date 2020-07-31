import React from "react";
import Navigation from "../components/navigation";
import JsonData from "../data/data.json";
import Title from "../components/Title";
import Contact from "../components/contact";
import Services from "../components/services";
import Testimonials from "../components/testimonials";

class ServicesPage extends React.Component {
    state = {
        landingPageData: {},
    }

    getlandingPageData() {
        this.setState({landingPageData: JsonData})
    }

    componentDidMount() {
        this.getlandingPageData();
    }

    render() {
        return (
            <div>
                <Navigation/>
                <Title data={this.state.landingPageData.ServicesPage}/>
                <Services data={this.state.landingPageData.Services}/>
                <Testimonials data={this.state.landingPageData.Testimonials} />
                <Contact data={this.state.landingPageData.Contact}/>
            </div>
        )
    }
}

export default ServicesPage;