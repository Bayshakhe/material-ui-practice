import { Typography } from '@mui/material';

const TypographyPage = () => {
    return (
        <div>
            <Typography variant='h1'>Hello World...!1</Typography>
            <Typography variant='h2'>Hello World...!2</Typography>
            <Typography variant='h3'>Hello World...!3</Typography>
            <Typography variant='h4' component="h1">Hello World...!4</Typography>
            <Typography variant='h5'>Hello World...!5</Typography>
            <Typography variant='h6' gatterBottom>Hello World...!6</Typography>

            <Typography mt={3} variant='subtitle1'>Hello World...!substitle-1</Typography>
            <Typography mb={4} variant='subtitle2'>Hello World...!substitle-2</Typography>

            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum earum eligendi porro repellendus! Beatae deleniti, temporibus neque non earum quam!</Typography>
            <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum earum eligendi porro repellendus! Beatae deleniti, temporibus neque non earum quam!</Typography>

            <Typography mt={4} mb={2} variant='button' display="block">Typography Button</Typography>
            <Typography variant='caption'>This is the caption</Typography>
        </div>
    );
};

export default TypographyPage;