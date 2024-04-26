import React from 'react'
import BaseModal from './BaseModal'
import { Box, Image, Img } from '@chakra-ui/react'

const BaseComponent = ({ children }) => {
    return (
        <div className="bg-white rounded-lg container mx-auto flex flex-row justify-between p-6">
            <div className="flex-1"> {/* Content Column */}
                <div>
                    <Image src='/logo.svg' alt='logo' width={150} />
                </div>
                {children}
            </div>
            <Box className="flex-1 p-6" bgImage="https://builds.contra.com/c138bbb2/assets/static/background.Dg9zT2Nv.webp" bgSize="cover" bgPosition="right">
                <div className="flex flex-col items-center justify-center space-y-3">
                    <BaseModal />
                    <div className='text-xs font-light'>
                        JOIN TOP TEAMS HIRING ON CONTRA
                    </div>
                    <Image src='https://builds.contra.com/c138bbb2/assets/static/logo-cloud.HAganMYv.webp' alt='contra' width={"60%"} />
                </div>
            </Box>
        </div>
    )
}

export default BaseComponent
