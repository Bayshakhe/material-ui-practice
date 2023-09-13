import { Box, Button, Card, CardActions, CardContent, CardMedia, Paper, Typography } from "@mui/material";

const CardsPage = () => {
  return (
    <>
      <Box display='flex' flexWrap='wrap'>
        <Paper elevation={3} sx={{padding:"20px"}}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
          perferendis laudantium quasi perspiciatis, quod amet fugit quam vitae
          aperiam aut.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
          perferendis laudantium quasi perspiciatis, quod amet fugit quam vitae
          aperiam aut.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
          perferendis laudantium quasi perspiciatis, quod amet fugit quam vitae
          aperiam aut.
        </Paper>
      </Box>

      <Card sx={{maxWidth: 400, marginTop: '20px'}}>
        <CardMedia sx={{height: 240}} image="https://www.nps.gov/colm/learn/nature/images/IMG_8708_1.JPG" title="Colorful Lizard"/>
        <CardContent>
            <Typography variant="h5">Lizard</Typography>
            <Typography align="left" variant="body2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur ipsum iste soluta nisi dolore illum voluptas veritatis reiciendis dicta ab. Dolorem, error consequuntur! Ad sequi quis necessitatibus vitae accusamus facilis iusto deleniti expedita accusantium omnis at voluptatem a animi quia in neque, aliquid dicta qui maiores quasi magni delectus. Facilis.</Typography>
        </CardContent>
        <CardActions>
            <Button>Share</Button>
            <Button>Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CardsPage;
