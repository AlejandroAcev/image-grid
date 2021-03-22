import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, GridList, GridListTile } from '@material-ui/core';
import { ImageDetails } from '../../pages/Home';

const MAX_GRID_COLS = 6;

const useStyles = makeStyles({
  root: {
    padding: '4px 32px 4px 32px',
  },
  image: {
    cursor: 'pointer',
  }
});

export interface ImageGrid {
  imageUrl: string;
  author?: string;
  rawData: ImageDetails;
}

interface ComponentProps {
  imageGrid: ImageGrid[];
  className?: string;
  onClick: (details: ImageDetails) => () => void;
}

const ImageList: FC<ComponentProps> = ({ imageGrid, className, onClick }) => {
  const classes = useStyles();
  return (
    <Box>
      <GridList cols={MAX_GRID_COLS} className={className}>
        {imageGrid.map((tile, index) => {
          const size = index % 2 === 0 ? 2 : 1;
          return (
            <GridListTile key={tile.imageUrl} cols={size}>
              <img src={tile.imageUrl} alt={`Author ${tile.author}-${index}`} onClick={onClick(tile.rawData)} className={classes.image} />
            </GridListTile>
          )
        })}
      </GridList>
    </Box>
  );
}

export default ImageList;