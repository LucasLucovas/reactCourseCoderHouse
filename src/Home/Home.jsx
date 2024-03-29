//MUI imports
import { Card, Box } from "@mui/material"
import { Stack } from "@mui/joy"
//Components imports
import Footer from '../components/Footer/Footer'


const Home = () => {
  return (
    <>
      <Stack 
        direction="row" 
        sx={{
          height: '100vh', 
          width: '%100', 
          backgroundImage: 'url("/fondoHome.jpg" )', 
          backgroundSize: 'cover',
          justifyContent:'space-evenly',
          alignItems:'center',
          '@media (max-width: 768px)': {
              flexDirection:'column',
            },
          }}
        >
          <Card 
            variant="outlined" 
            sx={{
              backgroundColor: "rgba(184, 214, 209, 0.911)",
              boxShadow: 'lg',
              width: '25rem',
              height:'auto',
              padding: '1rem',
              '@media (max-width: 768px)': {
              width:'20rem',
            },
            }}
            >
            <h2 style={{margin: 0 }}>We make your dreams clothes come true</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Omnis distinctio consectetur doloribus dicta aspernatur eaque sint deserunt et, 
            natus fuga eveniet earum ut aut quisquam illo quae officia provident possimus reiciendis architecto, 
            blanditiis odit! Ducimus deleniti earum, assumenda sunt dicta ea fuga natus similique! Voluptas, dolorum!</p>
          </Card>
          <Box 
            sx={{
              width:'40rem',
              '@media (max-width: 768px)': {
              width:'20rem',
            },
            }}
            >
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)">
              <Box 
                gridColumn="span 4" 
                sx={{
                  height:'20rem',
                  '@media (max-width: 768px)': {
                    width:'8rem'
                  },
                }}
                >
                <img src="/diamondsjewelery.jpg" style={{width: '100%', height: '20rem', objectFit:'cover'}}/>
              </Box>
              <Box 
                gridColumn="span 8" 
                sx={{
                  height:'20rem',
                  '@media (max-width: 768px)': {
                    width:'12rem',
                  },
                  }}
                  >
                <img src="/hoodie.jpg" style={{width: '100%', height: '20rem', objectFit:'cover'}}/>
              </Box>
              <Box 
                gridColumn="span 8" 
                sx={{
                  height:'20rem',
                  '@media (max-width: 768px)': {
                    display:'none'
                  },
                  }}
                  >
                <img src="/pcgaming.jpg" style={{width: '100%', height: '20rem', objectFit:'cover'}}/>
              </Box>
              <Box 
                gridColumn="span 4" 
                sx={{
                  height:'20rem',
                  '@media (max-width: 768px)': {
                    display:'none'
                  },
                  }}
                  >
                <img src="/shirt.jpg" style={{width: '100%', height: '20rem', objectFit:'cover'}}/>
              </Box>
            </Box>
        </Box>
      </Stack>
      <Footer/>
    </>
  )
}

export default Home

