import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";

const MoviesPresenter = () => <Text>Movies</Text>;

MoviesPresenter.PropTypes = {
    loading: PropTypes.bool.isRequired
};

export default MoviesPresenter;