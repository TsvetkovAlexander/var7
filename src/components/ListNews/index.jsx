import React, { Component } from 'react';
import { connect } from 'react-redux';

import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import {data} from '../../database';
import Card from '../Card';
import { deleteNews, getNews, editNews } from '../../store/action';
import Modal from '../../components/Modal';

import './style.css';


class ListNews extends Component {
  state = {
    isOpenMore: false,
    isOpenEdit: false,
    currentNews: {},
  };

  handleClickOpenInfo = (guid) => {
    const { data } = this.props.news;

    this.setState({ isOpenMore: true, currentNews: data.find((el) => el.guid === guid) });
  };

  handleOnCloseInfo = () => this.setState({ isOpenMore: false });






  componentDidMount() {
    const { getNews } = this.props;
    console.log('data', data);
    getNews(data);
  }

  delNews=(guid) => {
    this.props.DeleteNews(guid);
  };


  render() {
    // const { data } = this.props;

    const {
      title,  text1, type1, guid
    } = this.state.currentNews;

    const {
      isOpenEdit, currentNews, isOpenMore,
    } = this.state;
    console.log('this.props',this.props);
    return (
      <div className="AllCard">
        {data.production.map(({
                     title,  text1, type1, guid
        }) => (
          <Card
            id="card"
            key={guid}
            title={title}
            text1={text1}
            type1={type1}
            guid={guid}
            delNews={this.delNews}
            handleClickOpenM={this.handleClickOpenInfo}
          />
        ))}

        <Modal isOpen={isOpenMore} handleClose={this.handleOnCloseInfo} id="modal">
          <DialogTitle>
            {title}
          </DialogTitle>

          <Button onClick={this.handleOnCloseInfo} color="primary" autoFocus>
              Close
          </Button>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
  };
}
const mapDispatchToProps = (dispatch) => ({
  getNews: (news) => dispatch(getNews(news)),
  DeleteNews: (guid) => dispatch(deleteNews(guid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListNews);
