import React from "react";

class Title extends React.Component {
    render() {
        return (
            <div>
                <header id="title">
                    <div className="intro">
                        <div className="overlay">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-8 col-md-offset-2 intro-text">
                                        <h1>
                                            {this.props.data ? this.props.data.banner : "Loading"}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Title;