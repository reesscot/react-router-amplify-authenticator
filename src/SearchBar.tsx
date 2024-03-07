import { Flex, SearchField, useAuthenticator, Text } from '@aws-amplify/ui-react'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const navigate = useNavigate()
    const { user, signOut } = useAuthenticator((context) => [context.user]);

    const onKeyDown = (data) => {
        navigate(`/my-page/${data}`)
    }

    return (
        <Flex>
            <Text>User: {user?.userId}</Text>
            <SearchField label="search" onSubmit={onKeyDown} />
        </Flex>
    )
}

export default Search