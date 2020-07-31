import React from "react";
import Navigation from "../components/navigation";
import Title from "../components/Title";
import JsonData from "../data/data.json";
import Contact from "../components/contact";

class WhyBinyodPage extends React.Component {
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
                <Title data={this.state.landingPageData.WhyBinyodPage}/>
                <Contact data={this.state.landingPageData.Contact}/>
            </div>
        )
    }
}

export default WhyBinyodPage;