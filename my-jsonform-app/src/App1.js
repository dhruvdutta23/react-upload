
import {Container, Header, Segment, Statistic, StatisticLabel, StatisticValue, Grid}from 'semantic-ui-react'
const App1=()=>{
   return (
       <Container>
           <Header as={'h1'}  >Budget</Header>
           <Statistic size='small' >
               <StatisticLabel>lets see</StatisticLabel>
               <StatisticValue>22</StatisticValue>
           </Statistic>
           <Segment textAlign='centr'>
               <Grid columns={2} >
                   <Grid.Row   >
                       <Grid.Column>A</Grid.Column>
                       <Grid.Column>A</Grid.Column>
                   </Grid.Row>
               </Grid>
           </Segment>
       </Container>
   )
}
export default App1