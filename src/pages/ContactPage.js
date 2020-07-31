import React from "react";
import Navigation from "../components/navigation";
import JsonData from "../data/data.json";
import Title from "../components/Title";
import Contact from "../components/contact";

class ContactPage extends React.Component {
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
                <Title data={this.state.landingPageData.ContactPage}/>
                <Contact data={this.state.landingPageData.Contact}/>
            </div>
        )
    }
}

export default ContactPage;