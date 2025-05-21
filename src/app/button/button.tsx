'use client';

import { Button as MuiButton } from '@mui/material';
import { useEffect, useState } from 'react';

export default function Button({ backgroundColor = '#fff', primary = false }) {
  const [label, setLabel] = useState('Hello MUI');

  useEffect(() => {
    setLabel('Hello MUI2');
  }, []);

  return (
    <MuiButton
      name="bob"
      formNoValidate={primary}
      style={{ backgroundColor }}
      type="button"
    >
      {label}
    </MuiButton>
  );
}
