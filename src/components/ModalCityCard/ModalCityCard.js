import React from 'react';
import Modal from '@material-ui/core/Modal';
import { connect as connectWithStore } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { closeModalCity, } from '../../actions/actions';
import CityCard from '../CityCard/CityCard';

const useStyles = makeStyles(() => ({
    modal: {
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
        overflowY:'auto',
    }
}));

const ModalCityCard = (props) => {
    const { isModalOpened } = props;
    const classes = useStyles();

    const onCloseHandler = () => {
        props.closeModalCity();
    }

    return (
        <Modal className={classes.modal} open={isModalOpened} onClose={onCloseHandler}>
            <div>
                <CityCard onCloseHandler={onCloseHandler} />
            </div>
        </Modal>
    );
}

const mapStateToProps = (state) => {
    return {
        isModalOpened: state.modalState.isModalOpened
    }
};

const mapDispatchToProps = { closeModalCity };

export default connectWithStore(mapStateToProps, mapDispatchToProps)(ModalCityCard);