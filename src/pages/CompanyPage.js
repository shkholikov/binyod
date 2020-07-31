import React from "react";
import Navigation from "../components/navigation";
import Contact from "../components/contact";
import Title from "../components/Title";
import JsonData from "../data/data.json";

class CompanyPage extends React.Component {
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
                <Title data={this.state.landingPageData.CompanyPage}/>
                <Contact data={this.state.landingPageData.Contact}/>
            </div>
        )
    }
}

export default CompanyPage;