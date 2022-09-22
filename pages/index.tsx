import { useEffect, useRef, useState } from 'react';

import { GetServerSidePropsContext } from 'next';

import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';

import { COLORS } from '@terraimaginaria/styles/colors';

const globalStyle = css`
`;

const Home = ({ }) => {
  return (
    <>
      <Global styles={globalStyle} />
      <div>Home</div>
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {},
  };
};

export default Home;