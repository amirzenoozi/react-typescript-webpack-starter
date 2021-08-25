import React from 'react';

import SpriteMono from '../../../../public/mono-sprite.svg';
import SpriteColor from '../../../../public/color-sprite.svg';

interface IProps {
  iconName: string;
  type: 'mono' | 'color';
  width?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
  className?: string;
}

const SpriteIcon: React.FC<IProps> = ({
  iconName,
  type,
  width = 20,
  height = 20,
  className,
}) => {
  const sprite = type === 'mono' ? SpriteMono : SpriteColor;

  return (
    <svg style={{ width, height }} className={className}>
      <use xlinkHref={`${sprite}#icon_${iconName}`}></use>
    </svg>
  );
};

export { SpriteIcon };
