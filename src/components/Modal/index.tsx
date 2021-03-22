import React, { FC, Fragment, ReactNode } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, useMediaQuery } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
  title: {
    display: 'flex',
    justifyContent: 'space-between'
  }
});

interface ComponentProps {
  open: boolean;
  handleShow: () => void;
  title?: ReactNode;
  dialogActions?: ReactNode;
}

const Modal: FC<ComponentProps> = ({ handleShow, title, open, children, dialogActions }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Fragment>
      <Dialog
        open={open}
        maxWidth="xl"
        onClose={handleShow}
        fullScreen={fullScreen}
        aria-labelledby="dialog-title"
      >
        {title && (
          <Box className={classes.title}>
            <DialogTitle id="dialog-title">
              {title}
            </DialogTitle>
            <IconButton aria-label="close" onClick={handleShow}>
              <CloseIcon />
            </IconButton>
          </Box>
        )}
        <DialogContent>
          {children}
        </DialogContent>
        {dialogActions ? dialogActions : (
          <DialogActions>
            <Button autoFocus onClick={handleShow} color="primary">
              {t('common.button.close')}
            </Button>
          </DialogActions>
        )}
      </Dialog>
    </Fragment>
  );
}

export default Modal;