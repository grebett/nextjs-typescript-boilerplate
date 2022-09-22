import { css } from '@emotion/react';

type ViewportSize = 'desktop' | 'mobile_portrait' | 'mobile_landscape';

export const viewport = (size: ViewportSize, style: any) => {
  switch (size) {
    case 'desktop': {
      return css`
        @media all and (min-width: 780px) {
          ${style};
        }
      `;
    }

    case 'mobile_portrait': {
      return css`
        @media all and (max-width: 780px) and (orientation: portrait) {
          ${style};
        }
      `;
    }

    case 'mobile_landscape': {
      return css`
        @media all and (max-width: 1000px) and (orientation: landscape) {
          ${style};
        }
      `;
    }
  }
};
