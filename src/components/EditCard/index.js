import React from 'react';
import { Form, Field } from 'react-final-form';

import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import './style.css';

const CreateCard = ({ onSubmit, handleClose, initialValues }) => (
  <Form
    onSubmit={onSubmit}
    initialValues={initialValues}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <DialogContent className="input-group-modal">
          <div>
            <label>title:</label>
            <Field required name="title" component="input" type="text" className="title" />
          </div>
        </DialogContent>
        <DialogActions className="AddClose">
          <Button type="submit" color="primary">
                        edit news
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
                        close
          </Button>
        </DialogActions>
      </form>
    )}
  />
);

export default CreateCard;
