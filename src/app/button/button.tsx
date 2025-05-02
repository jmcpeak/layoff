import { Button as MuiButton } from '@mui/material';

export default function Button({
  backgroundColor = '#fff',
  label = '',
  primary = false,
}) {
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
