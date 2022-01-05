import React from 'react'
import * as Btn from './Btn.styled'

interface loadMoreInterface {
    load: () => void
}

const LoadMore = ({ load }: loadMoreInterface): JSX.Element => {
    return (
        <>
            <Btn.loadMore onClick={load}>load more </Btn.loadMore>
        </>
    )
}


export default LoadMore