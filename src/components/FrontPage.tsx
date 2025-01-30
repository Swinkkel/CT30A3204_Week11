
import {Button} from '@mui/material'
import useFetch from './useFetch'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {IJoke} from '../types/joke'

interface FrontPageProps {
    saveJoke?: (joke: IJoke) => void;
  }
const FrontPage: React.FC<FrontPageProps> = ({saveJoke}) => {
    const url: string = 'https://official-joke-api.appspot.com/random_joke'
    const {data, loading, error} = useFetch(url)

    const convertedData: IJoke = data as IJoke

    if (convertedData) console.log(convertedData.punchline)

    return (
        <div>
            <h1>Welcome to Joke Generator</h1>
            {loading && <p>Loading a joke...</p>}
            {error && <p>{error}</p>}
            {convertedData && (
                <div>
                    <Card key={convertedData.id} variant="outlined">
                        <CardHeader title={convertedData.setup} />
                        <CardContent><Typography>{convertedData.punchline}</Typography></CardContent>
                    </Card>
                </div>
            )}
            <Button onClick={()=>window.location.reload()}>Get Joke</Button>
            {saveJoke && convertedData && (
                <Button onClick={()=>saveJoke(convertedData)}>Save joke</Button>
            )}
        </div>
    )
}

export default FrontPage