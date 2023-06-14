import React from 'react';
import clsx from 'clsx';

import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './styles.module.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  img?: string;
  size?: 'md' | 'lg';
  width?: string;
  height?: string;
}

function ImgCard(props: Props): JSX.Element {
  
  const className = clsx({
    'Card-with-image': typeof props.img !== 'undefined',
    'Card-without-image': typeof props.img === 'undefined',
    'Card-size-lg': props.size === 'lg',
    [props.className]: props.className,
  });

  return (
    <docs-card class={className} style={{textAlign:'center'}}>
       <img src={useBaseUrl(props.img)} style={{height:props.height || '100%', width:props?.width || "100%" , margin: 'auto'}} className="Card-image" />
    </docs-card>
  );
}

export default ImgCard;
