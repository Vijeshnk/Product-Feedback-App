import React, { ReactNode } from 'react';
import ListItem from '@mui/material/ListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';

export type RoadmapProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Roadmap({ children }: RoadmapProps) {
  return (
    <div>
      <Card
        sx={{
          width: 260,
          height: 170,
          borderRadius: '10px',
          mt: 3,
          boxShadow: 'none',
        }}
      >
        <CardContent>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <List sx={{ listStyleType: 'disc', ml: -1 }}>
                <ListItem
                  sx={{
                    fontWeight: 650,
                    fontSize: '1.2rem',
                    mt: -1.5,
                    color: 'hsl(230.7, 33.3%, 34.1%)',
                  }}
                >
                  Roadmap
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={6}>
              <List sx={{ listStyleType: 'disc', ml: 6, mt: -1.2 }}>
                <ListItem
                  sx={{
                    p: -3,
                    fontSize: '0.8rem',
                    fontWeight: 600,
                  }}
                >
                  <a href="/roadmap" style={{ color: 'blue' }}>
                    View
                  </a>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={6}>
              <List sx={{ listStyleType: 'disc', ml: 1, mt: -4 }}>
                <ListItem
                  sx={{
                    display: 'list-item',
                    ml: 3,
                    color: 'orange',
                    fontSize: '26px',
                  }}
                >
                  <Typography
                    sx={{
                      color: 'hsl(224, 20%, 49%)',
                      ml: -2,
                      fontSize: '16px',
                      fontFamily: 'Jost',
                    }}
                  >
                    Planned
                  </Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={6}>
              <List sx={{ listStyleType: 'disc', ml: 8 }}>
                <ListItem
                  sx={{
                    mt: -3,
                    fontWeight: 600,
                    fontFamily: 'Jost',
                    color: 'hsl(230.7, 33.3%, 34.1%)',
                  }}
                >
                  1
                </ListItem>
              </List>
            </Grid>
          </Grid>

          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <List sx={{ listStyleType: 'disc', ml: 1, mt: -4.5 }}>
                <ListItem
                  sx={{
                    display: 'list-item',
                    ml: 3,
                    color: 'purple',
                    fontSize: '26px',
                  }}
                >
                  <Typography
                    sx={{
                      color: 'hsl(224, 20%, 49%)',
                      ml: -2,
                      fontSize: '16px',
                      fontFamily: 'Jost',
                    }}
                  >
                    In-Progress
                  </Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={6}>
              <List sx={{ listStyleType: 'disc', ml: 8 }}>
                <ListItem
                  sx={{
                    mt: -3.2,
                    fontWeight: 600,
                    fontFamily: 'Jost',
                    color: 'hsl(230.7, 33.3%, 34.1%)',
                  }}
                >
                  1
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={6}>
              <List sx={{ listStyleType: 'disc', ml: 1, mt: -5.5 }}>
                <ListItem
                  sx={{
                    display: 'list-item',
                    ml: 3,
                    color: 'skyblue',
                    fontSize: '26px',
                  }}
                >
                  <Typography
                    sx={{
                      color: 'hsl(224, 20%, 49%)',
                      ml: -2,
                      fontSize: '16px',
                      fontFamily: 'Jost',
                    }}
                  >
                    Live
                  </Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={6}>
              <List sx={{ listStyleType: 'disc', ml: 8 }}>
                <ListItem
                  sx={{
                    mt: -4.2,
                    fontWeight: 600,
                    fontFamily: 'Jost',
                    color: 'hsl(230.7, 33.3%, 34.1%)',
                  }}
                >
                  1
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
