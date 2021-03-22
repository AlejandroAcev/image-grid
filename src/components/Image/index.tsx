import React, { FC, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
  loader: {
    height: '100%',
    top: 0,
    bottom: 0,
    textAlign: 'center',
  }
});

interface ComponentProps {
  src: string;
  alt: string;
  className?: string;
}

const Image: FC<ComponentProps> = ({ src, alt, className, ...props }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  
  const [error, setError] = useState(false);

  const handleError = () => setError(true);

  return  error ? (
    <h5>{t('common.error.request')}</h5>
  ) : (
    <img src={src} alt={alt} className={classes.root} onError={handleError} {...props}/>
  );
}

export default Image;