import React from 'react'
import BaseModal from './BaseModal'
import { Box, Image, Img } from '@chakra-ui/react'

const BaseComponent = ({ children }) => {
    return (
        <>
            <Box className='bg-white rounded-3xl container'
            >
                <div className='p-5'>
                    <Image src='/logo.svg' alt='logo' width={150} />
                </div>
                <Box className="bg-white rounded-3xl container mx-auto flex flex-row justify-between items-center p-6 w-full h-3/4"
                    bgImage="https://builds.contra.com/c138bbb2/assets/static/background.Dg9zT2Nv.webp" bgSize="contain" bgPosition="right" bgRepeat="no-repeat"
                >
                    <div className="flex-1">
                        {children}
                    </div>
                    <Box className="flex-1 p-6" >
                        <div className="flex flex-col items-center justify-center space-y-3">
                            <BaseModal />
                            <div className='text-xs font-light'>
                                JOIN TOP TEAMS HIRING ON CONTRA
                            </div>
                            <Image src='https://builds.contra.com/c138bbb2/assets/static/logo-cloud.HAganMYv.webp' alt='contra' width={"60%"} />
                        </div>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default BaseComponent
