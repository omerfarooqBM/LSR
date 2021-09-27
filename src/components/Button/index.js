import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButtons({ title, onClick }) {
    return (
        <Button onClick={onClick} fullWidth={true} variant="contained">{title}</Button>
    );
}