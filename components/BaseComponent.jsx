import React from 'react'
import BaseModal from './BaseModal'
import { Box, Image, Img } from '@chakra-ui/react'
import './BaseComponent.css'

const BaseComponent = ({ children }) => {
    return (
        <>
            <Box className='bg-white rounded-3xl w-full lg:w-3/4 h-full lg:h-4/5'
            >
                <div className='p-5'>
                    <Image src='/logo.svg' alt='logo' width={150} />
                </div>
                <Box className="bg-white rounded-3xl lg:container mx-auto flex flex-row justify-between lg:items-center lg:p-6 w-full h-3/4 custom-background"
                // bgImage="https://builds.contra.com/c138bbb2/assets/static/background.Dg9zT2Nv.webp" bgSize="contain" bgPosition="right" bgRepeat="no-repeat"
                >
                    <div className="flex-1 w-full py-9 lg:px-10">
                        {children}
                    </div>
                    <Box className="lg:flex-1 lg:p-6" >
                        <div className="lg:flex lg:flex-col lg:items-center lg:justify-center lg:space-y-3 hidden">
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
