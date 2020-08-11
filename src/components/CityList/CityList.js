import React from 'react';
import { connect as connectWithStore } from 'react-redux';
import List from '@material-ui/core/List';
import { openModalCity } from '../../actions/actions';
import Spinner from '../Spinner/Spinner';
import ErrorElement from '../ErrorElement/ErrorElement';
import CityListItem from '../CityListItem/CityListItem';

const CityList = (props) => {
    const onClickHandler = (city) => () => {
        props.openModalCity(city);
    }

    let Content;
    if (props.state.isLoading) {
        Content = () => <Spinner/>;
    } else if (props.state.error) {
        Content = () => <ErrorElement error={props.state.error}/>;
    } else {
        const { cityList } = props.state;
        Content = () => (
            <List  component="nav" aria-label="main mailbox folders">
                {cityList.map(city =>
                    <CityListItem
                        key={`city${city.name}`}
                        clickHandler={onClickHandler(city)}
                        city={city}
                    />
                )}
            </List>
        );
    }

    return <Content/>
}

const mapStateToProps = (state) => {
    return {
        state,
    }
};

const mapDispatchToProps = {
    openModalCity,
};

export default connectWithStore(mapStateToProps, mapDispatchToProps)(CityList);