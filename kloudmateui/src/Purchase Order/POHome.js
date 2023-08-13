import React, { useState } from 'react'
import Flow from './Flow'
import Description from './Description'
import TimeLine from './TimeLine'
import Header from './Header'
import Split from 'react-split'
import './splitstyle.css'

function POHome() {


    return (
        <>
            <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
                {/* <Header /> */}
                <Split
                    direction='vertical'
                    // style={{ height:'calc(100vh - 4rem)'}} 
                    style={{ height: '100%' }}
                    // onMouseMove={handleResize}
                    sizes={[65, 35]} // Set initial sizes for the Split components (50% each)
                    minSize={100}
                >
                    <div style={{ flex: 1, display: 'flex' }}>
                        <div>
                            <Flow />
                        </div>
                        <div>
                            <Description />
                        </div>
                    </div>
                    <div className='timeline'>
                        <TimeLine />
                    </div>
                </Split>
            </div>
        </>
    )
}

export default POHome