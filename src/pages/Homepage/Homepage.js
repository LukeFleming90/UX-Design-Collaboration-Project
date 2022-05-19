import ArtistCard from "../../components/ArtistCard/ArtistCard"
import { useState, useEffect } from "react"
import axios from "axios"

export default function Homepage(props) {
    const [artArr, setArtArr] = useState([])
    const [refresh, setRefresh] = useState(false)
    const getData = () => {
        (async () => {
            try {
                const response = await axios.get(`/api/art/`)
                console.log("response is", response)
                setArtArr(response.data)
                console.log("updated art", response.data)
                if (response.status === 200) {
                    setRefresh(!refresh)
                } else {
                    console.log('Something went wrong')
                }

            } catch (err) {
                console.log(err)
                // console.log(`cards is ${cards}`)
            }
        })()
    }

    useEffect(() => {
        getData()
    }, [])
    const loaded = () => {
        return (
            <div>
                <h1>This is the Homepage</h1>
                <div>
                    <ArtistCard />
                </div>
            </div>
        )
    }

    const loading = () => {
        return <h1>Loading</h1>
    }
    return (
        user && user.artCollection ? loaded() : loading()
    )
};

// const [ArtCard, setArtCard] = useState({
// });
// const getArtCard = (input) => {
//     (async () => {
//         try {
//             const response = await axios.get(`/api/artCtrl/`)
//             setArtCard()
//         }
// })
// }

