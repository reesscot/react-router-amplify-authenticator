import { SearchField } from '@aws-amplify/ui-react'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const navigate = useNavigate()

    const onKeyDown = (data: any) => {
        navigate(`/my-page/${data}`)
    }

    return (
        <SearchField label="search" onSubmit={onKeyDown} />
    )
}

export default Search