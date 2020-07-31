import React from "react";
import Navigation from "../components/navigation";
import Header from "../components/header";
import Features from "../components/features";
import About from "../components/about";
import Contact from "../components/contact";
import JsonData from "../data/data.json";


class HomePage extends React.Component {
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
                <Header data={this.state.landingPageData.Header}/>
                <Features data={this.state.landingPageData.Features}/>
                <About data={this.state.landingPageData.About}/>
                <Contact data={this.state.landingPageData.Contact}/>
            </div>
        )
    }
}

export default HomePage;


