import React, { FC, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import classNames from 'classnames';
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
  inputRow: {
    height: '48px',
    marginBottom: '24px',
  },
  alignVertical: {
    alignSelf: 'center',
    alignItems: 'center',
    height: '100%'
  },
  pagination: {
    width: '150px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  pageLabel: {
    padding: '12px'
  },
  send: {
    textAlign: 'end',
  }
});

interface ComponentProps {
  callback: (limit: number, page: number) => void;
}

const Pagination: FC<ComponentProps> = ({ callback }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  
  const initalState = { limit: 5, page: 1 };
  const [pagination, setPagination] = useState(initalState);

  const { limit, page } = pagination;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const field = event.target.name;
    const value = Number(event.target.value);
    setPagination((prev) => ({ ...prev, [field]: value }));
  }
  
  const handlePage = (type: 'prev' | 'next') => () => {
    const currentPage = pagination.page;
    const newPageValue = type === 'next' ? currentPage + 1 : currentPage - 1;
    setPagination((prev) => ({ ...prev, page: newPageValue }));
    callback(limit, newPageValue);
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    callback(limit, page);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container className={classes.inputRow}>
        <Grid item xs={3} className={classes.alignVertical}>
          <Typography>
            {t('components.pagination.title')}
          </Typography>
        </Grid>
        <Grid item xs={6} className={classes.pagination}>
          <TextField type="number" name="limit" label={t('components.pagination.limit')} value={limit} onChange={handleChange}/>
          <Box className={classNames(classes.pagination, classes.alignVertical)}>
            <Typography className={classes.pageLabel}>
              {t('components.pagination.current-page')}
            </Typography>
            <Button type="button" variant="outlined" color="primary" onClick={handlePage('prev')}>
              -
            </Button>
            <Typography className={classes.pageLabel}>
              {page}
            </Typography>
            <Button type="button" variant="outlined" color="primary" onClick={handlePage('next')}>
              +
            </Button>
          </Box>
        </Grid>
        <Grid item xs={3} className={classes.send}>
          <Button type="submit" variant="contained" color="primary">
            {t('components.pagination.load')}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default Pagination;