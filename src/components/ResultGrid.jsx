import { useEffect } from 'react'
import { fectchVideo,fetchPhoto,fetchGif } from '../Api/mediaApi'
import { setQuery,setLoading,setError,setResults,setActiveTab } from '../Redux/features/searchSlice'
import { useDispatch ,useSelector} from 'react-redux'
import ResultCard from './ResultCard'

const ResultGrid = () => {
    
  const {query,activeTab,results,loading,error} = useSelector((store)=>store.search)
const dispatch=useDispatch()
 

 useEffect(()=>{

    const getData=async ()=>{
        try {

             dispatch(setLoading())
                    let data=[]
    if(activeTab=='Photos'){
            let response=await fetchPhoto(query)
            data = response.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
}));
        }
    if(activeTab=='Videos'){
    
        let response=await fectchVideo(query)
         data=response.map((item)=>({
        id:item.id,
        type:'video',
        title:item.user.name || 'video',
        thumbnail:item.image,
        src:item.video_files[0].link,

         }))
          
    }
    if(activeTab=='GIFs'){
        data= await fetchGif(query)
    }
      dispatch(setResults(data))
            
        } catch (err) {

            dispatch(setError(err))
            
        }

    }
        getData()
 },[query,activeTab])

 if(error) return <h1>Error</h1>
 if(loading) return <h1>Loading...</h1>

  return (
    <div className='p-6'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
        {results.map((item) => (
          <ResultCard key={item.id || item.src || item.thumbnail} item={item} />
        ))}
      </div>
    </div>
  )

}

export default ResultGrid