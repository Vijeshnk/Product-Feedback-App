import React, { ChangeEvent } from 'react';

import { Box, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import ImageList from '@mui/material/ImageList';
import { IFeedback } from './interfaces';
import FeedbackOutput from './FeedbackOutput';

const boxSX = {
  '&:hover': {
    border: '1px solid #00FF00',
    color: 'gray',
    backgroundColor: 'lightblue',
  },
};

//getting the values of local storage
const getDatafromLS = () => {
  const data = localStorage.getItem('feedbacks');
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export const Feedbackdropdown: React.FC = () => {
  //main array of object states
  const [feedbacks, setFeedbacks] = React.useState<IFeedback[]>(
    getDatafromLS()
  );

  // input field states
  const [title, setTitle] = React.useState<string>('');
  const [category, setCategory] = React.useState<string>('');
  const [detail, setDetail] = React.useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'title') {
      setTitle(event.target.value);
    } else if (event.target.name === 'category') {
      setCategory(event.target.value);
    } else {
      setDetail(event.target.value);
    }
  };

  // form submit event
  const handleAddFeedbackSubmit = (e) => {
    e.preventDefault();
    //creatinng object
    let feedback = {
      title: title,
      category: category,
      detail: detail,
    };

    setFeedbacks([...(feedbacks || []), feedback]);

    setTitle('');
    setCategory('');
    setDetail('');
    console.log(feedbacks);
  };

  //saving data to local storage
  React.useEffect(() => {
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
  }, [feedbacks]);

  return (
    <Grid container>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ marginBottom: 10 }}
      >
        <Paper sx={{ mt: 18, pb: 8, borderRadius: 3, minWidth: '40%' }}>
          <Link
            href="/"
            underline="none"
            sx={{ position: 'relative', left: 5, bottom: 100 }}
          >
            <Typography
              sx={{
                fontSize: 13.5,
                fontWeight: 'bold',
                color: '#3A4373',
              }}
            >
              <NavigateBeforeIcon
                sx={{ color: 'blue', position: 'relative', top: 7 }}
              />
              Go Back
            </Typography>
          </Link>

          <ImageList
            sx={{ position: 'relative', left: '40px', bottom: '75px' }}
          >
            <img src="https://product-feedback-app-jay.netlify.app/static/media/icon-new-feedback.de9414c7.svg" />
          </ImageList>
          <Typography
            sx={{
              fontSize: 22,
              ml: 5,
              fontWeight: 'bold',
              color: '#3A4373',
              position: 'relative',
              bottom: '50px',
            }}
          >
            Create New Feedback
          </Typography>
          <Typography
            sx={{
              fontSize: 15,
              ml: 5,
              fontWeight: 'bold',
              mt: 3,
              color: '#3A4373',
            }}
          >
            Feedback Title
          </Typography>
          <Typography
            sx={{ fontSize: 12, ml: 5, fontWeight: 'bold', color: '#647196' }}
          >
            Add a short, descriptive headline
          </Typography>
          <form>
            <TextField
              onChange={handleChange}
              value={title}
              name="title"
              inputProps={{
                maxLength: 50,
              }}
              sx={{
                position: 'relative',
                top: '10px',
                left: '42px',
                minWidth: '85%',
                backgroundColor: '#F7F8FD',
              }}
              placeholder="Max 50 Characters"
            />

            <Typography
              sx={{
                fontSize: 15,
                ml: 5,
                fontWeight: 'bold',
                mt: 3,
                color: '#3A4373',
              }}
            >
              Category
            </Typography>
            <Typography
              sx={{ fontSize: 12, ml: 5, fontWeight: 'bold', color: '#647196' }}
            >
              Choose a category for your feedback
            </Typography>

            <select
              style={{
                position: 'relative',
                top: '10px',
                left: '42px',
                width: '85%',
                backgroundColor: '#F7F8FD',
                height: '55px',
              }}
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option></option>
              <option>Feature</option>
              <option>Bug</option>
              <option>UI</option>
            </select>
            <Typography
              sx={{
                fontSize: 15,
                fontWeight: 'bold',
                color: '#3A4373',
                position: 'relative',
                top: '10px',
                left: '42px',
                marginTop: '10px',
              }}
            >
              Feedback Detail
            </Typography>
            <Typography
              sx={{
                fontSize: 12,

                fontWeight: 'bold',
                color: '#647196',
                position: 'relative',
                top: '10px',
                left: '42px',
                // wordBreak:'break-all'
              }}
            >
              Include any specific comments on what should be improved, added,
              etc.
            </Typography>

            {/* Feedback details */}
            <TextField
              onChange={handleChange}
              value={detail}
              name="detail"
              inputProps={{
                maxLength: 255,
              }}
              sx={{
                position: 'relative',
                top: '10px',
                left: '42px',
                minWidth: '85%',
                backgroundColor: '#F7F8FD',
                marginTop: '10px',
              }}
              multiline
              rows={4}
              placeholder="Max 255 Characters"
            />
            {/* reusing the button  */}
            <Grid
              sx={{
                position: 'relative',
                top: '35px',
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <Button
                style={{
                  borderRadius: '10px',
                  backgroundColor: '#3a4374',
                  padding: '15px 15px',
                  position: 'relative',
                  right: '60px',
                  fontFamily: 'Jost',
                  fontWeight: 600,
                  fontSize: '15px',
                  textTransform: 'capitalize',
                }}
                variant="contained"
              >
                cancel
              </Button>
              <Button
                onClick={handleAddFeedbackSubmit}
                style={{
                  borderRadius: '10px',
                  backgroundColor: 'hsl(282, 83%, 52%)',
                  padding: '15px 35px',
                  position: 'relative',
                  right: '50px',
                  fontFamily: 'Jost',
                  fontWeight: 600,
                  fontSize: '15px',
                  textTransform: 'capitalize',
                }}
                variant="contained"
              >
                add feedback
              </Button>
            </Grid>
          </form>
        </Paper>
        <Box>
          <FeedbackOutput feedbacks={feedbacks} />
        </Box>
      </Grid>
    </Grid>
  );
};
