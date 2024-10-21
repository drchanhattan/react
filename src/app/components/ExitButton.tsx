'use client';

import Button from '@mui/material/Button';

export default function ExitButton() {
  function exit() {
    if (window.opener) {
      window.close();
    } else {
      window.location.href = 'http://christopherchan.co.uk';
    }
  }

  return (
    <Button className="bg-mat-yellow font-bold text-mat-black" size="large" variant="contained" onClick={exit}>
      Back
    </Button>
  );
}
