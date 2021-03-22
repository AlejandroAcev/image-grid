import React, { FC, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, CircularProgress } from '@material-ui/core';
import ImageList, { ImageGrid } from '../../components/ImageList';
import Modal from '../../components/Modal';
import DataFetcher from '../../api';
import GridResponseFormatter from '../../util';
import Pagination from '../../components/Pagination';
import Image from '../../components/Image';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
  root: {
    padding: '4px 32px 4px 32px',
  },
  loader: {
    height: '100%',
    top: 0,
    bottom: 0,
    textAlign: 'center',
  }
});

export interface ImageDetails {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

const HomePage: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  
  const initalState = { limit: 5, page: 1 };

  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [imageList, setImageList] = useState<ImageGrid[]>([]);
  const [details, setDetails] = useState<ImageDetails>();
  const [pagination, setPagination] = useState(initalState);
  
  const { limit, page } = pagination;

  const dataFetcher = async (limit: number, page: number) => {
    const result = await DataFetcher.picsum.list<ImageDetails[]>(limit, page);
    
    if(!result) {
      setError(true);
      return;
    }

    setImageList(GridResponseFormatter.picsum.list(result));
    setLoading(false);
  }

  const handleOpen = () => setOpen(!open);
  
  const handleShowDetails = (details: ImageDetails) => () => {
    setDetails(details);
    handleOpen();
  }

  const dispatch = (limit: number, page: number) => {
    setPagination({limit, page});
    setLoading(true);
    dataFetcher(limit, page);
  }

  useEffect(() => {
    if (isLoading) {
      dataFetcher(limit, page);
    }
  }, [limit, page, imageList, isLoading])
  
  return (
    <Box className={classes.root}>
      <h1>{t('views.home.title')}</h1>
      
      <Pagination callback={dispatch} />

      {isLoading ? (
        <Box className={classes.loader}>
          <CircularProgress color="secondary" />
        </Box>
      ) : error ? (
        <h5>{t('common.error.request')}</h5>
      ) : (
        <ImageList imageGrid={imageList} onClick={handleShowDetails} />
      )}

      <Modal open={open} handleShow={handleOpen} title={`Author: ${details?.author}`}>
        <Image src={details?.download_url || ''} alt={details?.author || ''} />
      </Modal>
    </Box>
  );
}

export default HomePage;
