/* eslint-disable react/prop-types */
import React from 'react';
import { useRef } from 'react'
import { FixedSizeList } from 'react-window'

function MyVirtuList({ data, load }) {
    const isUpDirection = useRef(false) // to know the direction of your scroll action



    const handleScroll = ({ scrollDirection }) => {
        if (scrollDirection === "forward") {
            isUpDirection.current = true;
        } else {
            isUpDirection.current = false;
        }
    };

    // eslint-disable-next-line no-unused-vars
    const handleItemsRendered = ({ overscanStopIndex, visibleStopIndex }) => {
        // Determine when to load more data
        const threshold = 2; // Load more data when 5 items remain to be displayed
        // eslint-disable-next-line react/prop-types
        if (visibleStopIndex >= data?.length - threshold) {
            console.log('load more')
            load()
        }
    };


    return (
        <>
            <FixedSizeList
                height={400}
                // eslint-disable-next-line react/prop-types
                itemCount={data?.length}
                overscanCount={5}
                itemData={data}
                itemSize={50}
                onScroll={handleScroll}
                onItemsRendered={handleItemsRendered}


            >
                {
                    ({ index, style }) => (

                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '8px',
                                padding: '8px',
                                justifyContent: 'start',
                                ...style,
                            }}
                        // className="flex  flex-row gap-2 bg-slate-800 p-2 justify-start"

                        >
                            <span>
                                {data?.[index].id}
                            </span>
                            <span>
                                {data?.[index].title}
                            </span>
                        </div>


                    )

                }
            </FixedSizeList>

        </>
    )
}

export { MyVirtuList }