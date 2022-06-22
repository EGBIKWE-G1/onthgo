import React, { Component } from 'react';
import { useLoading, TailSpin } from '@agney/react-loading';

function Content() {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <TailSpin width="50" />,
  });

  return (
    <section>
      {indicatorEl} 
    </section>
  );
}

export default Content;