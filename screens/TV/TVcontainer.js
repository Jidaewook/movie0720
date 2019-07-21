import React, { Component } from "react";
import TVPresenter from "./TVpresenter";

export default class extends Component {
    state = {
        loading: true
    };
    render() {
        const { loading } = this.state;
        return <TVPresenter loading={loading} />;
    }
}