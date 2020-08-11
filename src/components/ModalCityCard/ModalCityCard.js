import React from 'react';
import Modal from '@material-ui/core/Modal';
import { connect as connectWithStore } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { closeModalCity } from '../../actions/actions';
import CityCard from '../CityCard/CityCard';

const useStyles = makeStyles(() => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
}));

const ModalCityCard = (props) => {
    const { isModalOpened, city } = props;
    const onCloseHandler = () => {
        props.closeModalCity();
    }
    const classes = useStyles();

    return (
        <Modal className={classes.modal} open={isModalOpened} onClose={onCloseHandler}>
            <div>
                <CityCard city={city} onCloseHandler={onCloseHandler}/>
            </div>
        </Modal>
    );
}

const mapStateToProps = (state) => {
    return {
        isModalOpened: state.isModalOpened,
        city: state.city,
    }
};

const mapDispatchToProps = {
    closeModalCity,
};

export default connectWithStore(mapStateToProps, mapDispatchToProps)(ModalCityCard);